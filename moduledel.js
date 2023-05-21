const express = require("express");
const app = express();
const fs = require("fs");
const del = () => {
  const parsimg = fs.readFileSync("variants/img.json", (err, data) => {});
  parsedimg = JSON.parse(parsimg);
  let a = 0;
  if (parsedimg[0].av !== "") {
    do {
      a++;
      fs.truncateSync("variants/img.json", 0, (err) => {
        console.log("Файл успешно очищен");
      });
      parsedimg[0].av = "";
      data = JSON.stringify(parsedimg, null, 2);
      parsed = fs.appendFileSync("variants/img.json", data, (err, data) => {});
    } while (a < 1);
  }
};
module.exports = del;
