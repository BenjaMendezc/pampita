import React, { ReactElement,useRef } from "react";
import { Card } from "../../organisms/card/Card";
import data from "./mock/data";
import "./Menu.scss";

export const Menu = (): ReactElement => {
  const childRef = useRef(null);

  const handleComandaClick = () => {
     childRef.current?.setRestedAmount();

  }
  return (
    <div>

    <div className="Menu-container">
      {data.map((empanada) => {
        return <Card name={empanada.name} ref={childRef}/>;
      })}
      <button className="Comanda-total" onClick={handleComandaClick}>Comanda Total</button>
      <div>total=</div>
    </div>
    </div>
  );
};
//const childRef = useRef(null);

//const handleClick = () => {
  //childRef.current.childFunction1();

  //childRef.current.childFunction2();
//};
//<Child ref={childRef} />

//<h2>parent content</h2>

//<button onClick={handleClick}>Call child functions</button>
