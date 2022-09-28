import React, {
  ReactElement,
  useMemo,
  useState,
  useRef,
  ChangeEvent,
  useCallback,
} from "react";
import { ReactElementBaseProps } from "../../../types/global";
import "./Amount.scss";

interface AmountProps extends ReactElementBaseProps {
  stock: number;
  setStock: React.Dispatch<React.SetStateAction<number>>;
}

function Amount({ stock, setStock }: AmountProps): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);
  // const [newstock, setNewstock] = useState(stock);

  const handleValue = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setStock(parseInt(event.currentTarget.value));
      //console.log(ref.current.value)
    },
    [setStock]
  );

  // const handleTouch = ()=>{
  //   // un callback es una funcion que se pasa como argumento de otra funcion
  //   let open = false
  //   setTimeout(()=>{
  //     open = true
  //   }, 2000)
  // }

  return (
    <div className="Amount_body">
      <div className="Amount__dinamic-container">
        <input
          type="text"
          className="Amount-input"
          defaultValue={stock}
          onChange={handleValue}
          ref={inputRef}
        />
      </div>
    </div>
  );
}

export default Amount;
