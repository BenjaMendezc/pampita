import React, { ReactElement } from 'react';
import './Amount.scss';
import { Card } from "../../organisms/card/Card";

type AmountProps = {
  stock: number;
}

function Amount({ stock }: AmountProps): ReactElement {
  return (
    <div className="Card-color-bar">
      <div className="Menu-container">
      </div>
      <p className="Card-color-bar__amount">{stock}</p>
    </div>
  );
}


export default Amount
