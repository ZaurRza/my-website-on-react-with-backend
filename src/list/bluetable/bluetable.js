import "../styles/bluetable.scss";
export function TableOGE() {
  return (
    <div className="table">
      <div classname="ttxt">
        <text classname="ttxt">Бесплатные варианты</text>
      </div>
      <div className="texttable">
        <button className="tbutt">1 вариант</button>
        <button className="tbutt">2 вариант</button>
        <button className="tbutt">3 вариант</button>
      </div>
      <div classname="ttxt">
        <text classname="ttxt">Список доступных вариантов ОГЭ</text>
      </div>
      <div className="texttable">
        <a href="oge1">
          <button className="tbutt">1 вариант</button>
        </a>
        <button className="tbutt">2 вариант</button>
        <button className="tbutt">3 вариант</button>
        <button className="tbutt">4 вариант</button>
        <button className="tbutt">5 вариант</button>
        <button className="tbutt">6 вариант</button>
        <br />
        <button className="tbutt">7 вариант</button>
        <button className="tbutt">8 вариант</button>
        <button className="tbutt">9 вариант</button>
        <button className="tbutt">10 вариант</button>
        <button className="tbutt">11 вариант</button>
        <button className="tbutt">12 вариант</button>
      </div>
    </div>
  );
}
