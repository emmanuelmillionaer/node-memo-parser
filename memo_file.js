const fs = require('fs');

var MemoFile = function(path){
	this.path = path;
	this.next_free_block;
	this.block_size;

	this.info = () => ({ next_free_block: this.next_free_block,
				  		 block_size: this.block_size });

	this.parseInfo = function(){
		var buffer = this.read(0,512);

		this.next_free_block = buffer.readUIntBE(0,4);
		this.block_size = buffer.readUIntBE(6,2);
	};

	this.read  = function(start,end){
		var length = end - start;
		var buffer = new Buffer(length);
		var fd = fs.openSync(this.path,'r');

		fs.readSync(fd, buffer, 0, length, start);

		return buffer
	};

	this.parseInfo();
}

var memoFile = new MemoFile('akr.fpt');
	console.log(memoFile.info());