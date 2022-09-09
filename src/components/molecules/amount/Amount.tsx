import React, { ReactElement, useMemo, useState } from "react";
import { ReactElementBaseProps } from "../../../types/global";
import "./Amount.scss";

interface AmountProps extends ReactElementBaseProps {
  stock: number;
}

function Amount({ stock, className }: AmountProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const dinamicAmount = useMemo(() => {
    return isOpen ? (
      <div>input</div>
    ) : (
      <p className="Amount-display">{stock}</p>
    );
  }, [isOpen, stock]);

  return <div className={className}>{dinamicAmount}</div>;
}

export default Amount;
