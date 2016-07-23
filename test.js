var MemoFile = require('./MemoFile');

var memoFile = new MemoFile('../akr.fpt', "base64");
	console.log(memoFile.encoding)
	console.log(memoFile.memoHeader);
	console.log(memoFile.blockHeader(8));
	console.log(memoFile.getBlockContentAt(576));



var DBFFile = require('/Users/emmanuel/bachelor/DBFFile/built/dbf-file.js');

DBFFile.open('test/fixtures/test.dbf')
    .then(dbf => {
        console.log(`DBF file contains ${dbf.recordCount} rows.`);
        console.log(`Field names: ${dbf.fields.map(f => f.name)}`);
        return dbf.readRecords(100);
    })
    .then(rows => rows.forEach(row => console.log(row)))
    .catch(err => console.log('An error occurred: ' + err));




var memoFile = new MemoFile('test/fixtures/test.fpt');
	console.log(memoFile.encoding)
	console.log(memoFile.MemoHeader);
	console.log(memoFile.blockHeader(8));
	console.log(memoFile.getBlockContentAt(9));