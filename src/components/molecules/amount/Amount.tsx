import React, { useEffect, ReactElement} from "react";
import { ReactElementBaseProps } from "../../../types/global";
import "./Amount.scss";

interface AmountProps extends ReactElementBaseProps {
  stock: number;
  setStock: React.Dispatch<React.SetStateAction<number>>;
  forwardRef: any;
}

const Amount = ({stock, setStock,forwardRef }: AmountProps): ReactElement =>{
//  const [isOpen, setIsopen] = useState(false);

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



 //const dinamicComponent = useMemo(() => {
 // return isOpen ? (
 //  <input type="text" className="Amount-input" defaultValue={stock} onClick={handleValue}/>
 //  ) : (
 //    <p className="Amount-display">{stock}</p>
 //   );
 // }, [isOpen, stock]);

  
//  const handleClick=()=>{
//   setIsopen(!isOpen)

 // }

//const Child = forwardRef((props, ref) => {
//  useImperativeHandle(ref, () => ({
//    childFunction1() {
//      console.log('child function 1 called');
//    },
//    childFunction2() {
//      console.log('child function 2 called');
//    },
//  }));