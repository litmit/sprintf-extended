"use strict";

const assert = require("assert");
const sprintf = require("../index").sprintf;

const date = new Date(2222,11,22,0,33,44,555);
const hello = "heLLo WORLD";


describe("sprintf-ext-strftime", function() 
{
   it("should return correctly formatted date/time", function() 
   {
      assert.equal("Now [December 22, 2222 00:33:44]", sprintf("Now [%[%B %d, %Y %H:%M:%S]D]", date));
      assert.equal("Now 2222-12-22 00:33:44",          sprintf("Now %[%F %T]D", date));
   });

   it("should return correctly formatted strings", function() 
   {
      assert.equal("HELLO WORLD", sprintf("%S", hello));
      assert.equal("Hello World", sprintf("%[Cl]S", hello));
   });

});

