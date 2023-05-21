const express = require("express");
const app = express();
const fs = require("fs");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const del = require("./moduledel");
const mongoose = require("mongoose");
const Shema = mongoose.Schema;
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
const db =
  "mongodb+srv://Zaurad:Zaurzaur123@reg.6utapeq.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(db, {
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connect mdb"))
  .catch((error) => console.log(error));
function isFolder(path) {
  return fs.lstatSync(path).isDirectory() && fs.existsSync(path);
}
app.get("/exam", (req, res) => {
  const base = "./vars";
  let path = "";
  if ("path" in req.query) {
    path = req.query.path;
  }

  if (isFolder(base + path)) {
    let files = fs.readdirSync(base + path).map((item) => {
      const isDir = fs.lstatSync(base + path + "/" + item).isDirectory();
      let size = 0;
      if (!isDir) {
        vart1 = fs.readFileSync("variants/VAR.json", (err, data) => {
          console.log(data.toString());
        });
        vart2 = fs.readFileSync("variants/Mathnum2.json", (err, data) => {
          console.log(data.toString());
        });
        inf = fs.readFileSync("vars/redact.json", (err, data) => {
          console.log(data.toString());
        });
        vart1 = JSON.parse(vart1);
        array1 = vart1;
        vart2 = JSON.parse(vart2);
        array2 = vart2;
        function setkey(array) {
          const arrayOfObjectKeys = array.map((obj) => Object.values(obj));
          const allKeys = arrayOfObjectKeys.reduce((arr1, arr2) =>
            arr1.concat(arr2)
          );
          return (randomKey =
            allKeys[Math.floor(Math.random() * allKeys.length)]);
        }

        const arrayOfObjectKeys = array1.map((obj) => Object.values(obj));
        const allKeys = arrayOfObjectKeys.reduce((arr1, arr2) =>
          arr1.concat(arr2)
        );
        seted = setkey(array1);
        infarray = JSON.parse(inf);
        function findid(array) {
          let intg = 0;
          if (allKeys[intg] !== seted) {
            do {
              intg++;
              allKeys[intg];
            } while (allKeys[intg] === setkey(array));
          }
          return allKeys[intg];
        }
        function findval(array) {
          let intg = 0;
          if (allKeys[intg] !== seted) {
            do {
              intg = intg + 2;
              allKeys[intg];
            } while (allKeys[intg] !== setkey(array));
          }
          return allKeys[intg];
        }

        let a = 0;
        if (infarray[0].n1 === "") {
          do {
            a++;
            infarray[0].n1 = findid(array1);
            infarray[0].values1 = findval(array1);

            fs.truncateSync("vars/redact.json", 0, (err) => {
              console.log("Файл успешно очищен");
            });
            data = JSON.stringify(infarray, null, 2);
            newinf = fs.appendFileSync(
              "vars/redact.json",
              data,
              (err, data) => {}
            );
          } while (a < 1);
        }
        size = fs.statSync(base + path + "/" + item);
        console.log(size.size);
      }
      return {
        name: item,
        dir: isDir,
        size: size.size ?? 0,
        value: infarray[0].n1,
        valuen1: infarray[0].values1,
        value2: infarray[0].n2,
        value3: infarray[0].n3,
        value4: infarray[0].n4,
        value5: infarray[0].n5,
        value6: infarray[0].n6,
        value7: infarray[0].n7,
        value8: infarray[0].n8,
        value9: infarray[0].n9,
        value10: infarray[0].n10,
        value11: infarray[0].n11,
        value12: infarray[0].n12,
        value13: infarray[0].n13,
        value14: infarray[0].n14,
        value15: infarray[0].n15,
        value16: infarray[0].n16,
        value17: infarray[0].n17,
        value18: infarray[0].n18,
        value19: infarray[0].n19,
        value20: infarray[0].n20,
        value21: infarray[0].n21,
        value22: infarray[0].n22,
        value23: infarray[0].n23,
        value24: infarray[0].n24,
        value25: infarray[0].n25,
      };
    });
    res.json({
      path: path,
      result: true,
      file: files,
    });
  }
});
app.get("/profile", (req, res) => {
  file = fs.readFileSync("./variants/img.json", (err, data) => {
    console.log(data.toString());
  });
  arrayimg = JSON.parse(file);

  res.json({
    resulte: true,
    vals: arrayimg[0].av,
  });
});

app.use(cors());
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.post("/profile", (req, res) => {
  if (!req.files) {
    return res.status(400).json({ msg: "no file" });
  }
  const file = req.files.file;
  if (!file) {
    return res.json({ error: "incorrects" });
  }
  const newfilename = encodeURI(Date.now() + "-" + file.name);
  const parsimg = fs.readFileSync("variants/img.json", (err, data) => {});
  parsedimg = JSON.parse(parsimg);
  let a = 0;
  const jopa = file.data;

  var base64 = function (input) {
    var result = "",
      binData,
      i;
    var base64Alphabet =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split(
        ""
      ); // Base is 65 in fact :-)
    if (typeof input === "string")
      for (i = 0, input = input.split(""); i < input.length; i++)
        input[i] = input[i].charCodeAt(0);
    for (i = 0; i < input.length; i += 3) {
      // Warning, bitwise operations! :-)
      // Grabbing three bytes (octets in binary):
      binData =
        ((input[i] & 0xff) << 16) | // FF.00.00
        ((input[i + 1] & 0xff) << 8) | // 00.FF.00
        (input[i + 2] & 0xff); // 00.00.FF
      // And converting them to four base64 "sixtets" (letters):
      result +=
        base64Alphabet[(binData & 0xfc0000) >>> 18] + //11111100.00000000.00000000 = 0xFC0000 = 16515072
        base64Alphabet[(binData & 0x03f000) >>> 12] + //00000011.11110000.00000000 = 0x03F000 = 258048
        base64Alphabet[
          i + 3 >= input.length && (input.length << 1) % 3 === 2
            ? 64
            : (binData & 0x000fc0) >>> 6
        ] + //00000000.00001111.11000000 = 0x000FC0 = 4032
        base64Alphabet[
          i + 3 >= input.length && (input.length << 1) % 3
            ? 64
            : binData & 0x00003f
        ]; //00000000.00000000.00111111 = 0x00003F = 63
      // If we haven't last byte, or two (for complete three octets),
      // we place '=' [61] letter (or two) at the end.
    }
    return result;
  }; // base64
  if (parsedimg[0].av === "") {
    do {
      a++;
      fs.truncateSync("variants/img.json", 0, (err) => {
        console.log("Файл успешно очищен");
      });

      parsedimg[0].av = base64(jopa);

      data = JSON.stringify(parsedimg, null, 2);
      parsed = fs.appendFileSync("variants/img.json", data, (err, data) => {});
    } while (a < 1);
  }
  res.json({
    fileName: file.name,
    fileName: file.data,
    filePath: `/uploads/${newfilename}`,
  });
});
app.post("/delete", (req, res) => {
  del();
  console.log("deleted!");
});
const postShema = new Shema({
  _id: {
    type: String,
  },
  Email: {
    type: String,
    unique: true,
  },
  Username: {
    type: String,
    unique: true,
  },

  Password: {
    type: String,
  },
});
const Post = mongoose.model("Post", postShema);
app.post("/Name_surname", (req, res) => {
  console.log("???");
  if (!req.query) {
  }
  const _id = Math.random() * 100000000000000000;
  const Email = req.query.Email;
  const Username = req.query.Username;

  const Password = req.query.Password;
  console.log(Username);
  const post = new Post({ _id, Email, Username, Password });
  post.save().then((result) => res.send(result));
});
app.get("/shownm", async (req, res) => {
  const dbdata = await Post.find({ Username: "usrend" }).then((docs) => {
    return docs[0];
  });
  const dbdatastr = JSON.stringify(dbdata);
  const dbdatapsd = JSON.parse(dbdatastr);

  if (dbdatapsd.Username !== "") {
    res.json({
      result: true,
      Name: dbdatapsd.Username,
    });
  } else {
    res.json({
      result: "Not reg",
      Name: "Anon",
    });
  }
});

app.listen(5000, () => {
  console.log("listening serv 5000");
});
