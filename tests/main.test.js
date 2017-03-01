'use strict';

var test = require('tape');
var shot = require('shot');
var mainHandler = require('../main.js');

test('POST /facebook: should do something with the mess from FB', t => {
	shot.inject(mainHandler, {
		method: 'POST',
		url: '/facebook',
		payload: {"object":"page","entry":[{"id":"1737409489904164","time":1488373892936,"messaging":[{"sender":{"id":"1502992586398188"},"recipient":{"id":"1737409489904164"},"timestamp":1488373892786,"message":{"mid":"mid.1488373892786:9216471367","seq":97283,"text":"bootcamp"}}]}]}
	}, res => {
		t.end();
	});
});
