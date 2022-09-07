import React, { ReactElement } from "react";
import "./Amount.scss";

type AmountProps = {
  stock: number;
};

function Amount({ stock }: AmountProps): ReactElement {
  return (
    <div className="Amount-body">
      <p className="Amount-body_stock">{stock}</p>
    </div>
  );
}

export default Amount;
