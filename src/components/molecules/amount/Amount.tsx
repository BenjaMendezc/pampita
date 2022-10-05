import React, { useEffect, ReactElement} from "react";
import { ReactElementBaseProps } from "../../../types/global";
import "./Amount.scss";

interface AmountProps extends ReactElementBaseProps {
  stock: number;
  setStock: React.Dispatch<React.SetStateAction<number>>;
  forwardRef: any;
}

const Amount = ({stock, setStock,forwardRef }: AmountProps): ReactElement =>{

const handleValue = (e: any) => { 
  if(e.target.value.length < 1 ) return;
  setStock(()=> parseInt(e.target.value));
}

useEffect(()=>{
  forwardRef.current.value = stock;
},[forwardRef, stock])

  return (
    <div className="Amount_body" >
       <input type="number" className="Amount-input"  onChange={handleValue} ref={forwardRef}/>
    </div>
  );
}

export default Amount;
