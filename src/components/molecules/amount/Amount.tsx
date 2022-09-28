import React, { ReactElement, useMemo, useState,useRef } from "react";
import { ReactElementBaseProps } from "../../../types/global";
import "./Amount.scss";

interface AmountProps extends ReactElementBaseProps {
  stock: number;
}

function Amount({ stock }: AmountProps): ReactElement {
  const [isOpen, setIsopen] = useState(false);
  const ref: any =useRef()
  const [newstock,setNewstock] = useState(stock)
  
  const handleValue =() => { 
    ref.current.focus();
    console.log(ref.current.value)
    setNewstock(ref.current.value);
}

 const dinamicComponent = useMemo(() => {
  return isOpen ? (
   <input type="text" className="Amount-input" defaultValue={0} ref={ref} onClick={handleValue}/>
   ) : (
     <p className="Amount-display">{newstock}</p>
    );
  }, [isOpen, newstock]);

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
      <div className="Amount__dinamic-container" onClick={handleClick} >
{dinamicComponent}
        </div>
    </div>
  );
}

export default Amount;
