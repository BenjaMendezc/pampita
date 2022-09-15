import React, { ReactElement } from "react";
import { Card } from "../../organisms/card/Card";
import data from "./mock/data";
import "./Menu.scss";

export const Menu = (): ReactElement => {
  return (
    <div className="Menu-container">
      {data.map((empanada) => {
        return <Card name={empanada.name} gusto={null} />;
      })}
      <div>total=</div>
    </div>
  );
};
