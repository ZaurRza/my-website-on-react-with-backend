import { useState, useEffect, useRef } from "react";

import axios from "axios";
import "../styles/App.scss";
import "../styles/Info.scss";
import { hostUrl } from "../otherpg/profile";
import { Delete } from "../otherpg/profile";
import { Upload } from "../otherpg/profile";
import { Submit } from "../otherpg/profile";
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
import { Avatar } from "@mui/material";
export function InfoVPR() {
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
        <a className="hrefs" href="/VPR">
          ОГЭ
        </a>
        <br />
        <a className="hrefs" href="/EGE">
          ЕГЭ
        </a>
      </div>
      <div className="blockinfo">
        <text>
          <h1 className="h1vpr">Всероссийские проверочные работы</h1>
          <strong>(ВПР)Всероссийские проверочные работы</strong> – это
          контрольные работы по различным учебным предметам. Цель проведения ВПР
          – определение уровня подготовки по учебным предметам школьников во
          всех регионах России вне зависимости от места нахождения школы, от
          статуса школы (например: лицей, гимназия, Центр образования,
          общеобразовательная школа).
          <br />
          <li>
            Задания и критерии оценивания ВПР едины для всех школьников страны.
          </li>
          <li>
            Уровень сложности – базовый, то есть не требует специальной
            подготовки, достаточно ходить в школу на уроки и усваивать учебный
            материал.
          </li>
          <li>
            ВПР проводятся на школьном уровне, продолжительность от одного до
            двух уроков.
          </li>
          <li>
            Проверка работ участников ВПР осуществляется в день проведения
            работы учителями школы. После проверки результаты вносятся в единую
            информационную систему, с данными которой могут работать эксперты.
          </li>
          <li>
            ВПР пройдут в марте – апреле и частично в мае. Они не будут
            пересекаться по срокам с проведением ЕГЭ.
          </li>
          <li>ВПР не могут проводиться во время каникул или после уроков.</li>
          <li>
            ВПР для обучающихся 11-х классов проводятся только для выпускников,
            которые не выбирают данные предметы для сдачи ЕГЭ.
          </li>
          <h4>Что дадут ВПР</h4>
          Ежегодное тестирование в результате:
          <p>
            - позволит проверить объем и качество знаний, полученных в течение
            года;
          </p>
          <p>
            - будет способствовать тому, чтобы школьники систематически
            занимались на протяжении всего учебного процесса, а не только в
            выпускных классах;
          </p>
          <p>
            - поможет педагогам увидеть недостатки учебной программы по
            экзаменационным дисциплинам;
          </p>
          <p>
            - позволит родителям понять общую картину знаний своих детей; -
            поможет усовершенствовать систему образования;
          </p>
          <p>
            - создаст целостную картину уровня подготовки школьников в стране.
            Что важно знать о ВПР?
          </p>
          <p></p>
          <p>
            - главная задача родителей – убедить ребенка, что если не запускать
            учебу на протяжении всего учебного года, то не будет проблем с
            выполнением ВПР;
          </p>
          <p>
            - обратить внимание педагогов и обучающихся на предметы, которые
            оказались самыми трудными предметами Всероссийских проверочных
            работ: русский язык, история, биология, география, физика, химия; -
            поинтересоваться результатами своего ребенка, постараться получить у
            учителя-предметника и/или классного руководителя информацию об
            имеющихся у него проблемах и планах школы по устранению этих
            проблем;
          </p>
          <p>
            - соблюдение правильного режима труда и отдыха поможет ученику
            физически и психологически подготовиться к проведению ВПР.
          </p>
          <strong>Результаты ВПР не повлияют:</strong>
          <p>- на итоговые годовые оценки;</p>
          <p>- на получение аттестата;</p>
          <p>- на перевод в следующий класс.</p>
        </text>
      </div>
    </div>
  );
}
