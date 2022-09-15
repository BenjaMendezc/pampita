import React, { ReactElement, useMemo } from "react";
import { ReactElementBaseProps } from "../../../types/global";
import "./Amount.scss";

interface AmountProps extends ReactElementBaseProps {
  stock: number;
  isOpen: boolean;
}

function Amount({ stock, className, isOpen }: AmountProps): ReactElement {
  const dinamicComponent = useMemo(() => {
    return isOpen ? (
      <input type="text" className="Amount-input" />
    ) : (
      <p className="Amount-display">{stock}</p>
    );
  }, [isOpen, stock]);

  return (
    <div className={className}>
      <div className="Amount__dinamic-container">{dinamicComponent}</div>
    </div>
  );
}

export default Amount;
