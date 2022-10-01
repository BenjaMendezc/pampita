import React, { forwardRef, useImperativeHandle} from "react";
import { ReactElementBaseProps } from "../../../types/global";
import "./Amount.scss";

interface AmountProps extends ReactElementBaseProps {
  stock: number;
  setStock: React.Dispatch<React.SetStateAction<number>>;
}

const Amount = forwardRef (({ stock, setStock }: AmountProps, ref:any ) =>{
//  const [isOpen, setIsopen] = useState(false);

const handleValue = (e: any) => { 
  setStock(e.target.value)}

useImperativeHandle (ref, () => ({
handleStock(e: any){ 
  setStock(e.target.value)
   ref.current.value=e.target.value;
}
}))
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

  return (
    <div className="Amount_body" >
       <input type="text" className="Amount-input"  defaultValue={stock} onClick={handleValue} ref={ref}/>
        </div>
  );
})

export default Amount;


//const Child = forwardRef((props, ref) => {
//  useImperativeHandle(ref, () => ({
//    childFunction1() {
//      console.log('child function 1 called');
//    },
//    childFunction2() {
//      console.log('child function 2 called');
//    },
//  }));