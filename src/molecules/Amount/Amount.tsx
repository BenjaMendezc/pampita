import React, { ReactElement } from "react";
import { ReactElementBaseProps } from "../../types/global";
import "./Amount.scss";

interface AmountProps extends ReactElementBaseProps {
  stock: number;
}

function Amount({ stock, className }: AmountProps): ReactElement {
  return (
    <div className={className}>
      <p className="Amount-display">{stock}</p>
    </div>
  );
}

export default Amount;
