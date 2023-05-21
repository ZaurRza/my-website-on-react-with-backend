import { useState, useRef, useEffect } from "react";
import { TableOGE } from "../bluetable/bluetable";
import { Formik } from "formik";
import axios from "axios";
import "../styles/App.scss";
import "../styles/Profile.scss";
import Avatar from "@mui/material/Avatar";
import { Info } from "../imageblock/Images.js";
import { hostUrl } from "../otherpg/profile";
import { Delete } from "../otherpg/profile";
import { Upload } from "../otherpg/profile";
import { Submit } from "../otherpg/profile";
import { REg } from "../otherpg/profile";
import { getnameUrl } from "../otherpg/profile";
//отправляет имя Submit(Name)

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

export function OGEpg() {
  const [Join, setJoin] = useState(false);
  const [sidebar, setside] = useState(false);
  function Pickfile() {
    Filepick.current.click();
  }
  const [getName, setgetName] = useState();
  const [getsurName, setgetsurName] = useState();

  const [selectedFile, setselectedFile] = useState();
  const Filepick = useRef(null);
  useEffect(() => {
    axios.get(getnameUrl).then((data) => {
      console.log(data.data);
      setgetName(data.data);
    });
  }, []);
  useEffect(() => {
    axios.get(hostUrl).then((data) => {
      console.log(data.data);
      setuploadfile(data.data);
    });
  }, []);
  const Uploadselect = (event) => {
    setselectedFile(event.target.files[0]);
  };

  const [uploadfile, setuploadfile] = useState();

  const imgB64 = uploadfile?.vals;
  return (
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
              <p className="name">{getName?.Name} </p>
              <p className="surname">{getsurName?.Surname} </p>
              <br />
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
        <a href="/infooge">
          <RiInformationLine className="icon" />
        </a>
        <br />
        <a href="/infooge" className="text">
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
        <RiLogoutBoxRLine className="icon" onClick={() => setJoin(!Join)} />
        <br />
        <text className="text">ВЫХОД</text>
      </div>
      <div className="up">
        <lu className="underline-one" onClick={() => setside(!sidebar)}>
          ОГЭ{" "}
        </lu>
        <lu className="underline-one"> Математика</lu>
        <input className="input" placeholder=" Введите № варианта"></input>

        <text className="signup" onClick={() => setJoin(!Join)}>
          Регистрация
        </text>
        <text className="signin">Войти</text>
      </div>
      <div className={sidebar ? "open" : "close"}>
        <a className="hrefs" href="/VPR">
          ВПР
        </a>
        <br />
        <a className="hrefs" href="/EGE">
          ЕГЭ
        </a>
      </div>
      <div className={Join ? "signupshow" : "signuphide"}>
        <text className="regtext">РЕГИСТРАЦИЯ</text>
        <br />
        <text className="underregtext">Зарегистрируйтесь чтобы получить</text>
        <br />
        <text className="underregtext">доступ к чату и профилю!</text>
        <REg />
      </div>
      <Info />
      <TableOGE />
    </div>
  );
}
