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
      <input className="Amount-input" />
    ) : (
      <p className="Amount-display">{stock}</p>
    );
  }, [isOpen, stock]);

  // const handleTouch = ()=>{
  //   // un callback es una funcion que se pasa como argumento de otra funcion
  //   let open = false
  //   setTimeout(()=>{
  //     open = true
  //   }, 2000)
  // }

  const handleClick=()=>{
    setIsopen(!isOpen)
  }

  return (
    <div className="Amount_body" >
      <div className="Amount__dinamic-container" >
        {dinamicComponent}
        </div>
    </div>
  );
}

export default Amount;
