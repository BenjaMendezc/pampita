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
  setStock(()=> e.target.value);
}

useEffect(()=>{
  console.log(stock,forwardRef.current.value)
  forwardRef.current.value = stock; 
},[stock,forwardRef])

  return (
    <div className="Amount_body" >
       <input type="text" className="Amount-input"  defaultValue={stock} onClick={handleValue} ref={forwardRef}/>
        </div>
  );
}

export default Amount;
