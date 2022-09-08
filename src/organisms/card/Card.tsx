import React, { ReactElement, useMemo, useState } from "react";
import "./Card.scss";
import { useDoubleTap } from "use-double-tap";

import Title from "../../molecules/Title/Title";
import Amount from "../../molecules/Title/Amount/Amount";

type CardProps = {
  name: string;
};

export const Card = ({ name }: CardProps): ReactElement => {
  const [amount, setAmount] = useState<number>(25);
  const [pedidoValue, setPedidoValue] = useState<number>(0);

  const warningColor = useMemo(() => {
    if (amount === 0) return "red";

    let warningLevel;

    if (amount > 12) {
      warningLevel = "#78fac8";
    } else {
      warningLevel = "#fff300";
    }

    // const warningLevel = amount > 12 ? "#78fac8" : "#fff300";

    return warningLevel;
  }, [amount]);

  const decreaseAmount = () => {
    setAmount((prevState) => (prevState > 0 ? prevState - 1 : 0));
  };

  const handleTap = useDoubleTap(
    (event) => {
      setAmount((prevState) => prevState + 1);
    },
    200,
    {
      onSingleTap: decreaseAmount,
    }
  );

  const docenaHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("sumaste 1 docena");
    setPedidoValue((prevState) => prevState + 12);
  };

  const mediadocenaHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("sumaste 1/2 docena");
    setPedidoValue((prevState) => prevState + 6);
  };

  return (
    <div className="total-card">
      <button className="Card-container" {...handleTap}>
        <Amount stock={amount} />
        <Title empanada={name} bgcolor={warningColor} />
      </button>
      <button className="Docena" onClick={docenaHandler}>
        Docena
      </button>
      <button className="Mediadocena" onClick={mediadocenaHandler}>
        1/2 Docena
      </button>
      <div className="Pedido">
        <label>Cantidad</label>
        <input
          type="number"
          min="0"
          step="1"
          max="25"
          value={pedidoValue}
          onChange={(e) => {
            setPedidoValue(parseInt(e.target.value));
          }}
        />
      </div>
    </div>
  );
};
