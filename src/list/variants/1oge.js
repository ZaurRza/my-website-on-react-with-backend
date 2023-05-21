import { useState, useEffect, useRef } from "react";
import { Avatar } from "@mui/material";
import { hostUrl } from "../otherpg/profile";
import { Delete } from "../otherpg/profile";
import { Upload } from "../otherpg/profile";
import { Submit } from "../otherpg/profile";
import axios from "axios";
import {
  RiHome2Line,
  RiSettings2Line,
  RiMoneyDollarCircleLine,
  RiInformationLine,
  RiLogoutBoxRLine,
  RiFile2Line,
  RiAddLine,
  RiDeleteBinLine,
} from "react-icons/ri";
import "../styles/App.scss";
import "../styles/VAR.scss";
const varhostUrl = "http://localhost:5000/exam";
export function VAROGE1() {
  const Filepick = useRef(null);
  function Pickfile() {
    Filepick.current.click();
  }
  const [Name, setName] = useState();
  const [selectedFile, setselectedFile] = useState();

  const Uploadselect = (event) => {
    setselectedFile(event.target.files[0]);
  };

  const [backend, setbackend] = useState({
    path: "",
    file: [],
  });
  const [uploadfile, setuploadfile] = useState();
  useEffect(() => {
    axios.get(hostUrl).then((data) => {
      console.log(data.data);
      setuploadfile(data.data);
    });
  }, []);

  const imgB64 = uploadfile?.vals;
  useEffect(() => {
    axios.get(varhostUrl).then((data) => {
      console.log(data);
      setbackend(data.data);
    });
  }, []);
  const [sidebar, setside] = useState(false);
  const [sidesub, setsidesub] = useState(false);
  return (
    <div>
      <div>
        <div className="App">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="profilediv">
            <div>
              <div className="set">
                <Avatar
                  alt="Remy Sharp"
                  className="img1"
                  src={`data:image/png;base64,${imgB64}`}
                />
                <text className="name">Заур </text>
                <br />
                <text className="surname">Рзаев </text>
                <RiFile2Line className="iconsel" onClick={Pickfile} />

                <RiAddLine
                  className="iconad"
                  onClick={() => Upload(selectedFile)}
                />

                <RiDeleteBinLine
                  className="icondel"
                  onClick={() => Delete(uploadfile)}
                />
              </div>
              <input
                ref={Filepick}
                type="file"
                className="hide"
                accept="image/*,.png,.jpg"
                onChange={Uploadselect}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <a href="/">
            <RiHome2Line className="icon" />
          </a>
          <br />
          <a href="/" className="text">
            <text>ГЛАВНАЯ</text>
          </a>
          <br />
          <a href="forum">
            <RiSettings2Line className="icon" />
          </a>
          <br />

          <a href="forum" className="text">
            <text>ФОРУМ</text>
          </a>
          <br />
          <a href="join">
            <RiMoneyDollarCircleLine className="icon" />
          </a>
          <br />
          <a href="join" className="text">
            <text>ПОДПИСКА</text>
          </a>
          <br />
          <a href="/infovpr">
            <RiInformationLine className="icon" />
          </a>
          <br />
          <a href="/infovpr" className="text">
            <text>ИНФОРМАЦИЯ</text>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <RiLogoutBoxRLine className="icon" />
          <br />

          <text className="text">ВЫХОД</text>
        </div>
        <div className="up">
          <lu className="underline-one" onClick={() => setside(!sidebar)}>
            ОГЭ{" "}
          </lu>
          <lu className="underline-one"> Математика</lu>
          <input className="input" placeholder=" Введите № варианта"></input>
        </div>
        <div className={sidebar ? "open" : "close"}>
          <a className="hrefs" href="/EGE">
            ЕГЭ
          </a>
          <br />
          <a className="hrefs" href="/VPR">
            ВПР
          </a>
        </div>
      </div>
      <lu>
        {backend.file.map((item) => {
          return (
            <div className="vars">
              <p>
                1.
                <br />
                <img src={item.value} />
                <p>{item.valuen1}</p>
                <input></input>
                <br />
                2.{item.value2}
                <br />
                <input></input>
                <br />
                3.{item.value3}
                <br />
                <input></input>
                <br />
                4.{item.value4}
                <br />
                <input></input>
                <br />
                5.{item.value5}
                <br />
                <input></input>
                <br />
                6.{item.value6}
                <br />
                <input></input>
                <br />
                7.{item.value7}
                <br />
                <input></input>
                <br />
                8.{item.value8}
                <br />
                <input></input>
                <br />
                9.{item.value9}
                <br />
                <input></input>
                <br />
                10.{item.value10}
                <br />
                <input></input>
                <br />
                11.{item.value11}
                <br />
                <input></input>
                <br />
                12.{item.value12}
                <br />
                <input></input>
                <br />
                13.{item.value13}
                <br />
                <input></input>
                <br />
                14.{item.value14}
                <br />
                <input></input>
                <br />
                15.{item.value15}
                <br />
                <input></input>
                <br />
                16.{item.value16}
                <br />
                <input></input>
                <br />
                17.{item.value17}
                <br />
                <input></input>
                <br />
                18.{item.value18}
                <br />
                <input></input>
                <br />
                19.{item.value19}
                <br />
                <input></input>
                <br />
                20.{item.value20}
                <br />
                <input></input>
                <br />
                21.{item.value21}
                <br />
                <input></input>
                <br />
                22.{item.value22}
                <br />
                <input></input>
                <br />
                23.{item.value23}
                <br />
                <input></input>
                <br />
                24.{item.value24}
                <br />
                <input></input>
                <br />
                25.{item.value25}
                <br />
                <input></input>
              </p>
            </div>
          );
        })}
      </lu>
    </div>
  );
}
