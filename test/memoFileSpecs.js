var should = require('chai').should(),
    MemoFile = require('../MemoFile');

describe('MemoFile', function() {

  var memoFile = new MemoFile('test/fixtures/test.fpt');

  describe('MemoHeader', () => {

  	it('should include #blockSize', () => {
  		memoFile.MemoHeader.blockSize.should.equal(64)
  	});

  	it('should include #nextFreeBlock', () => {
  		memoFile.MemoHeader.nextFreeBlock.should.equal(11)
  	});
  });

  describe('BlockHeader', () => {

  	var blockHeader = memoFile.blockHeader(8)  //Block Number 8

  	it('should include #blockSignature', () => {
  		blockHeader.blockSignature.should.equal('text')
  	});

  	it('should include #recordLength', () => {
  		blockHeader.recordLength.should.equal(55)
  	});

  });

  describe('Content', () => {

  	it('returns block content', () => {
  		var block1 = memoFile.getBlockContentAt(8) //Block Number 8
  		block1.should.equal('Lorem ipsum dolor sit amet, consectetur, adipisci velit')

  		var block2 = memoFile.getBlockContentAt(9) //Block Number 9
  		block2.should.equal('Neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit')
  	});

  	describe('encodings', () => {

  		it('accepts different encodings', () => {
	  		var memoFileEncoded = new MemoFile('test/fixtures/test.fpt', 'base64');
	  		var base64text = memoFileEncoded.getBlockContentAt(8);

	  		base64text.should.equal('TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyLCBhZGlwaXNjaSB2ZWxpdA==')
	  	});
  	});
  });
});
