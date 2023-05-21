import { useState, useRef, useEffect } from "react";
import { Avatar } from "@mui/material";
import { Formik } from "formik";
import "../styles/App.scss";
import "../styles/Profile.scss";
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
export const getnameUrl = "http://localhost:5000/shownm";
export const nameUrl = "http://localhost:5000/Name_surname";
export const hostUrl = "http://localhost:5000/profile";
export const delUrl = "http://localhost:5000/delete";
export const Delete = async (a) => {
  if (a.vals === false) {
    alert("Select avatar!");
    return;
  }
  alert("file deleted :)");
  await axios({
    url: delUrl,
    method: "post",
    data: "",
  });
};
export const Upload = async (selfile) => {
  if (!selfile) {
    alert("select file");
    return;
  }
  const formdata = new FormData();
  formdata.append("file", selfile);

  await axios({
    url: hostUrl,
    method: "post",
    data: formdata,
    headers: {
      "Content-Type": "image/*,.png,.jpg, application/x-www-form-urlencoded",
    },
  });
  document.location.reload();
};
export const Submit = async (Email, Username, Password) => {
  if (!Email || !Username || !Password) {
    console.log("esf");
    return;
  }

  const res = await axios({
    url: nameUrl,
    method: "post",
    params: {
      Email: Email,
      Username: Username,
      Password: Password,
    },
    data: null,
  });
  console.log(res);
};
export const REg = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "", username: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = <text style={{ color: "red" }}>введите почту</text>;
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = (
            <text style={{ color: "red" }}>неверно указана почта</text>
          );
        }
        if (values.password.length < 8) {
          errors.password = (
            <text style={{ color: "red" }}>слишком коротко</text>
          );
        }

        if (12 < values.username.length || values.username.length < 5) {
          errors.username = (
            <text style={{ color: "red" }}>
              Недействительное имя пользователя
            </text>
          );
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,

        /* and other goodies */
      }) => (
        <form>
          <lu className="signuptext">Почта</lu>
          <input
            className="regin"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <br />
          <lu className="signuptext">Пароль</lu>
          <input
            className="regin"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <br />
          <lu className="signuptext">Имя пользователя</lu>
          <input
            className="regin"
            type="text"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          {errors.username && touched.username && errors.username}

          <br />
          <button
            className={
              errors.password || errors.email || errors.username
                ? "reginbutno"
                : "reginbut"
            }
            type="submit"
            onClick={() =>
              Submit(values.email, values.username, values.password)
            }
          >
            ОК
          </button>
        </form>
      )}
    </Formik>
  );
};
export function Profile() {
  const Filepick = useRef(null);
  function Pickfile() {
    Filepick.current.click();
  }
  const [Name, setName] = useState();

  const [uploadfile, setuploadfile] = useState();
  const Uploadselect = (event, setsel) => {
    setsel(event.target.files[0]);
  };
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
        <div>
          <a href="profile">
            <Avatar
              alt="Remy Sharp"
              className="img1"
              src={`data:image/png;base64,${imgB64}`}
            />
          </a>
          <text className="img1txt">
            Jeremy
            <br />
          </text>
        </div>
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
        <RiLogoutBoxRLine className="icon" />
        <br />
        <text className="text">ВЫХОД</text>
      </div>
      <div className="up">
        <lu className="underline-one">ПРОФИЛЬ</lu>
      </div>
      <div />
      <div />
      <div className="profbox">
        <div>
          <Avatar
            alt="Remy"
            className="profimg"
            src={`data:image/png;base64,${imgB64}`}
            sx={{ width: 200, height: 200 }}
          />

          <RiFile2Line className="iconsel" onClick={Pickfile} />
          <RiAddLine className="iconad" onClick={Upload} />
          <RiDeleteBinLine className="icondel" onClick={Delete} />
          <div className="name">
            <text>Заур</text>
            <br />
            <text>Рзаев</text>
          </div>
          <input
            ref={Filepick}
            type="file"
            className="hide"
            accept="image/*,.png,.jpg"
            onChange={Uploadselect}
          />
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={Name}
          />
          <p>{Name}</p>
          <button onClick={Submit}>ok</button>
        </div>
      </div>
    </div>
  );
}
