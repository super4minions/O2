'use strict';

var test = require('tape');
var shot = require('shot');
var mainHandler = require('../main.js');
test('GET /:  should return index.html', t => {
    shot.inject(mainHandler, {
            method: 'GET',
            url: '/'
        }

    , res => {
        var indexOf = res.payload.indexOf('form');
        t.notEqual(indexOf, -1, 'got form somewhere in the index.html file');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});

// test('POST /sheet:  shoud return not found', t => {
//     shot.inject(mainHandler, {
//             method: 'POST',
//             url: '/sheet'
//             //payload : 'username=alaa&phone=123654&data.key=10'
//         }
//     , res => {
//     	console.log("REEE",res);
//         t.equal(res.statusCode, 200, 'got 200 status code');
//         t.end();
//     });
// });

test('GET /:  should return index.html', t => {
    shot.inject(mainHandler, {
            method: 'GET',
            url: '/'
        }

    , res => {
        var indexOf = res.payload.indexOf('form');
        t.notEqual(indexOf, -1, 'got form somewhere in the index.html file');
        t.equal(res.statusCode, 200, 'got 200 status code');
        t.end();
    });
});

// test('POST /sheet:  shoud return not found', t => {
//     shot.inject(mainHandler, {
//             method: 'POST',
//             url: '/sheet'
//             //payload : 'username=alaa&phone=123654&data.key=10'
//         }
//     , res => {
//     	console.log("REEE",res);
//         t.equal(res.statusCode, 200, 'got 200 status code');
//         t.end();
//     });
// });

test('POST /facebook: should do something with the mess from FB', t => {
    shot.inject(mainHandler, {
        method: 'POST',
        url: '/facebook',
<<<<<<< HEAD
        payload: { "object": "page", "entry": [{ "id": "1737409489904164", "time": 1488373892936, "messaging": [{ "sender": { "id": "1502992586398188" }, "recipient": { "id": "1737409489904164" }, "timestamp": 1488373892786, "message": { "mid": "mid.1488373892786:9216471367", "seq": 97283, "text": "Alaa" } }] }] }
=======
        payload: { "object": "page", "entry": [{ "id": "1737409489904164", "time": 1488373892936, "messaging": [{ "sender": { "id": "1502992586398188" }, "recipient": { "id": "1737409489904164" }, "timestamp": 1488373892786, "message": { "mid": "mid.1488373892786:9216471367", "seq": 97283, "text": "bootcamp" } }] }] }
>>>>>>> c17dd6c99960fb9ce89681641ed57f6e018d19db
    }, res => {
        t.end();
    });
});