const web3world_integrity = require('web3world-integrity');
const web3world_integrity_checker = require('web3world-integrity-checker');
const solc = require('solc');
const eslint = require('eslint');
const truffle = require('truffle');
const debug = require('debug');
const async = require('async');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const axios = require('axios');
const webpack = require('webpack');
const react_dom = require('react-dom');
const commander = require('commander');
const validator = require('validator');
const sequelize = require('sequelize');
const react = require('react');
const bcrypt = require('bcrypt');
const moment = require('moment');
const mocha = require('mocha');
const node_sass = require('node-sass');
const cheerio = require('cheerio');
const web3_utils = require('web3-utils');

// Sign a message using a private key
const privateKey = '0x1234567890123456789012345678901234567890123456789012345678901234';
const message = 'Hello, Web3!';
const messageHash = web3.utils.sha3(message);
const signature = web3.eth.accounts.sign(messageHash, privateKey);

console.log('Message signature:', signature.signature);

// Decrypt an AES-256-CBC encrypted string
const decryptAES = (encryptedText, key, iv) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
const decryptedText = decryptAES(encryptedText, key, iv);
console.log('Decrypted Text:', decryptedText);

const os = require('os');
console.log('System uptime:', os.uptime(), 'seconds');

const fs = require('fs');
fs.mkdir('new-directory', { recursive: true }, err => {
  if (err) throw err;
  console.log('Directory created successfully');
});

const util = require('util');
const formatted = util.format('This %s a %s', 'is', 'string');
console.log(formatted);

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// Verify a message signature
const signerAddress = web3.eth.accounts.recover(messageHash, signature.signature);
console.log('Signer address:', signerAddress);