'use strict';

const fs = require('fs');
const util = require('util');

// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };

const readFile = async (file) => {
  const fsRead = util.promisify(fs.readFile);
  try {
    const data = await fsRead(file);
    return data;
  }
  catch(error) {
    console.log(error);
  }
};

const upperCase = (data) => {
  let text = data.toString().toUpperCase();
  return text;
};

const saveFile = async (file, text) => {
  const fsWrite = util.promisify(fs.writeFile);
  await fsWrite(file, Buffer.from(text));
};

const altarFile = async (file) => {
  // read the file, storing the data to a variable
  const data = await readFile(file);
  console.log('file is read');
  // convert data to uppercase
  const text = upperCase(data);
  console.log('file is uppercased', text);
  // write it back and save 
  saveFile(file, text);
  console.log('file is saved');
};

let file = process.argv.slice(2).shift();
altarFile(file);
