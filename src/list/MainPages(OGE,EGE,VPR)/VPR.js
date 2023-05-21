import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { hostUrl } from "../otherpg/profile";
import { Delete } from "../otherpg/profile";
import { Upload } from "../otherpg/profile";
import { Submit } from "../otherpg/profile";

import { TableVPR } from "../bluetable/bluetableVPR";
import { Avatar } from "@mui/material";
import "../styles/App.scss";
import { Info } from "../imageblock/Images.js";
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

export function VPRpg() {
  const Filepick = useRef(null);
  function Pickfile() {
    Filepick.current.click();
  }
  const [Name, setName] = useState();
  const [selectedFile, setselectedFile] = useState();

  const Uploadselect = (event) => {
    setselectedFile(event.target.files[0]);
  };

  const [sidebar, setside] = useState(false);
  const [uploadfile, setuploadfile] = useState();
  useEffect(() => {
    axios.get(hostUrl).then((data) => {
      console.log(data.data);
      setuploadfile(data.data);
    });
  }, []);
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
        <a href="/VPR">
          <RiHome2Line className="icon" />
        </a>
        <br />
        <a href="/VPR" className="text">
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
          ВПР{" "}
        </lu>
        <lu className="underline-one"> Математика</lu>
        <input className="input" placeholder=" Введите № варианта"></input>
      </div>
      <div className={sidebar ? "open" : "close"}>
        <a className="hrefs" href="/">
          ОГЭ
        </a>
        <br />
        <a className="hrefs" href="/EGE">
          ЕГЭ
        </a>
      </div>
      <Info />

      <TableVPR />
    </div>
  );
}
