Check this guide if any error occur due to package installation issues: 
https://github.com/ethers-io/ethers.js/issues/3460

Specifically, this guide says to add the following code after line 4 of 
node_modules/@ethersproject/base64/lib/browser-base64.js

var Buffer = require('buffer/').Buffer;
function atob(str) {
  return Buffer.from(str, 'base64').toString('binary');
}
function btoa(str) {
  return Buffer.from(str, 'binary').toString('base64');
}