import "../styles/Main.scss";
import png from "./2.png";
import png2 from "./pzd.png";

export function Info() {
  return (
    <div className="pg">
      <img src={png2} className="img" />
      <a href="join">
        <button className="butt">Оформить подписку</button>
      </a>
      <img src={png} className="img2" />
    </div>
  );
}
