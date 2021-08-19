#! /bin/sh
rm -rf LAB1SD
git init
git clone --branch master https://github.com/SamLProgrammer/LAB1SD.git
cd LAB1SD
npm install
node index.js
