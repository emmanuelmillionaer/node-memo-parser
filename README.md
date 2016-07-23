# node-memo-parser

A node module providing utility methods to read from Memo-Files

### Addtional Links

- [Memo File Structure](https://msdn.microsoft.com/en-us/library/8599s21w(v=vs.80).aspx)
- [DBF File Structure](https://en.wikipedia.org/wiki/.dbf)
- [Node.js Module to read from DBF Files](https://github.com/paypac/DBFFile)

### Installation

```shell
  npm install memo_file --save
```

### Usage

```js
var MemoFile = require('memo_file');

var memoFile = new MemoFile('test/fixtures/test.fpt');

	//The content-block positions are stored in .DBF-Files as 'M'-fields: https://en.wikipedia.org/wiki/.dbf#File_Architecture_Overview
	//To read from DBF files, for example the module DBFFile can be used: https://github.com/paypac/DBFFile
	//To read from the Block at position 8:

	memoFile.getBlockContentAt(8);

	// => Neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit
```

Utility methods

```js
	//get information about Memo-Header
	memoFile.MemoHeader;
	// => { blockSize: 64, nextFreeBlock: 11 }


	//Additional Block-Header information can be found with:
	memoFile.blockHeader(8));
	// => { blockSignature: 'text', recordLength: 55 }
```


### Test

```shell
  npm test
```


### LICENSE

The MIT License (MIT)

Copyright (c) 2016 EmmanuelSTs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
