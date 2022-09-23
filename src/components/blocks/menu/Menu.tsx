import React, { ReactElement, useRef } from "react";
import { Card } from "../../organisms/card/Card";
import data from "./mock/data";
import "./Menu.scss";

export const Menu = (): ReactElement => {
  //no era el type correcto, por ahora lo dejamos en any porque yo tampoco lo se je.
  const childRef = useRef<any>(null);

  const handleComandaClick = () => {
    childRef.current?.setRestedAmount();
  };
  return (
    <div>
      <div className="Menu-container">
        {data.map((empanada) => {
          return (
            <Card name={empanada.name} price={empanada.price} ref={childRef} />
          );
        })}
        <button className="Comanda-total" onClick={handleComandaClick}>
          Comanda Total
        </button>
        <div>total=</div>
      </div>
    </div>
  );
};
