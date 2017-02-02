"use strict";

var sprintfjs = require("sprintf-js");
var sprintf = sprintfjs.sprintf;

require("sprintf-ext-strftime").bind(sprintf,require("strftime"));
require("sprintf-ext-string").bind(sprintf);

module.exports = sprintfjs;
