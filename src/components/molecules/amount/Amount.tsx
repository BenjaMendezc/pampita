import React, { ReactElement, useMemo, useState,useRef } from "react";
import { ReactElementBaseProps } from "../../../types/global";
import "./Amount.scss";

interface AmountProps extends ReactElementBaseProps {
  stock: number;
}

function Amount({ stock }: AmountProps): ReactElement {
  const [isOpen, setIsopen] = useState(false);
  const ref: any =useRef(null)

 const dinamicComponent = useMemo(() => {
  return isOpen ? (
   <input type="text" className="Amount-input" value={stock} ref={ref}/>
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
    ref.current.focus();
   // stock=ref.current.value; // por ahi aca tengo que usar un usestate....
  }

  return (
    <div className="Amount_body" >
      <div className="Amount__dinamic-container" onClick={handleClick} >
{dinamicComponent}
        </div>
    </div>
  );
}

export default Amount;
