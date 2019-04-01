#!/usr/bin/env node

var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2));
var forceNpm = require('.')

var message
if (argv.f) {
  message = fs.readFileSync(argv.f, 'utf8')
} else if (argv.m) {
  message = argv.m
}

forceNpm(message)
