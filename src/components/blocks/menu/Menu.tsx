import React, { ReactElement, useRef } from "react";
import { Card } from "../../organisms/card/Card";
import data from "./mock/data";
import "./Menu.scss";

export const Menu = (): ReactElement => {

  return (
    <div>
      <div className="Menu-container">
        {data.map((empanada) => {
          return (
            <Card name={empanada.name} price={empanada.price} key={empanada.id}/>
          );
        })}
      </div>
    </div>
  );
};
