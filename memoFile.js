const fs = require('fs');

var MemoHeader = function(blockSize, nextFreeBlock){
	this.blockSize = blockSize;
	this.nextFreeBlock = nextFreeBlock;
}

var BlockHeader = function(blockSignature, recordLength){
	this.BlockSignatureTypes = { 1: 'text', 0: 'picture'};

	this.blockSignature = this.BlockSignatureTypes[blockSignature];
	this.recordLength = recordLength
};

var MemoFile = function(path, encoding){
	this.path = path;
	this.encoding = encoding || "utf8";

	this.MemoHeaderLength = 512;
	this.MemoBlockHeaderLength = 8;

	this.fd = fs.openSync(this.path,'r');

	this.getBlockContentAt = (offset) => {
		var contentStart = offset * this.MemoHeader.blockSize + this.MemoBlockHeaderLength;
		var contentEnd = contentStart + this.blockHeader(offset).recordLength;

		var contentBuffer = this.readBytes(contentStart, contentEnd);
		return contentBuffer.toString(this.encoding);
	};

	this.blockHeader = (offset) => {
		var headerStart = offset * this.MemoHeader.blockSize;
		var headerEnd = headerStart + this.MemoBlockHeaderLength;

		var buffer = this.readBytes(headerStart, headerEnd);

		var blockSignature = buffer.readUIntBE(0,4);
		var recordLength = buffer.readUIntBE(4,4);

		return new BlockHeader(blockSignature, recordLength);
	};

	this.parseMemoHeader = () => {
		var buffer = this.readBytes(0,this.MemoHeaderLength);

		var blockSize = buffer.readUIntBE(6,2);
		var nextFreeBlock = buffer.readUIntBE(0,4);

		return new MemoHeader(blockSize, nextFreeBlock)
	};

	this.readBytes = (start,end) => {
		var length = end - start;
		var buffer = new Buffer(length);

		fs.readSync(this.fd, buffer, 0, length, start);

		return buffer
	};

	this.MemoHeader = this.parseMemoHeader();
}

module.exports = MemoFile;