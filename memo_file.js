const fs = require('fs');

var MemoFile = function(path){
	this.path = path;
	this.next_free_block;
	this.block_size;

	this.MemoHeaderLength = 512;
	this.MemoBlockHeaderLength = 8;
	this.BlockSignatureTypes = { 1: 'text', 0: 'picture'}

	this.info = () => ({ next_free_block: this.next_free_block,
				  		 block_size: this.block_size });

	this.getFieldInfoAt = (offset) => {
		var headerStart = offset * this.block_size;
		var headerEnd = headerStart + this.MemoBlockHeaderLength;

		var buffer = this.read(headerStart,headerEnd);

		var blockSignature = buffer.readUIntBE(0,4);
		var recordLength = buffer.readUIntBE(4,4);

		return { block_signature: this.BlockSignatureTypes[blockSignature],
				 record_length: recordLength}
	};

	this.parseInfo = () => {
		var buffer = this.read(0,this.MemoHeaderLength);

		this.next_free_block = buffer.readUIntBE(0,4);
		this.block_size = buffer.readUIntBE(6,2);
	};

	this.read  = (start,end) => {
		var length = end - start;
		var buffer = new Buffer(length);
		var fd = fs.openSync(this.path,'r');

		fs.readSync(fd, buffer, 0, length, start);

		return buffer
	};

	this.parseInfo();
}

var memoFile = new MemoFile('../akr.fpt');
	console.log(memoFile.info());
	console.log(memoFile.getFieldInfoAt(8));