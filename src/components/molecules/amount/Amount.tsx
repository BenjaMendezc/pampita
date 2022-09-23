import React, { ReactElement, useMemo, useState } from "react";
import { ReactElementBaseProps } from "../../../types/global";
import "./Amount.scss";

interface AmountProps extends ReactElementBaseProps {
  stock: number;
}

function Amount({ stock }: AmountProps): ReactElement {
  const [isOpen, setIsopen] = useState(false);
  const dinamicComponent = useMemo(() => {
    return isOpen ? (
      <input type="text" className="Amount-input" />
    ) : (
      <p className="Amount-display">{stock}</p>
    );
  }, [isOpen, stock]);

  return (
    <div className="Amount_body">
      <p className="Amount__title">Stock</p>
      <div className="Amount__dinamic-container">{dinamicComponent}</div>
    </div>
  );
}

export default Amount;
