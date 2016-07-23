# node-memo-parser

A node module providing utility methods to read from Memo-Files

### Addtional Links

- [Memo File Structure](https://msdn.microsoft.com/en-us/library/8599s21w(v=vs.80).aspx)
- [DBF File Structure](https://en.wikipedia.org/wiki/.dbf)
- [Node.js Module to read from DBF Files](https://github.com/paypac/DBFFile)

### Installation

```shell
  npm install memo_node --save
```

### Usage

```js
var memoFile = new MemoFile('test/fixtures/test.fpt');
	
	//get information about Memo-Header 
	memoFile.MemoHeader;
	// => { blockSize: 64, nextFreeBlock: 11 }
	
	//The content-block positions are stored in .DBF-Files as 'M'-fields: https://en.wikipedia.org/wiki/.dbf#File_Architecture_Overview
	//To read from DBF files, for example the module DBFFile can be used: https://github.com/paypac/DBFFile
	//To read from the Block at position 8:
	memoFile.getBlockContentAt(8);
	// => Neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit
	
	//Additional Block-Header can be found with: 
	memoFile.blockHeader(8));
	// => { blockSignature: 'text', recordLength: 55 }
	
	
```


### Test

```shell
  npm test
```
