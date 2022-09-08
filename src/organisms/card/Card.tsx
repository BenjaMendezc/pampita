import React, { ReactElement, useMemo, useState } from "react";
import "./Card.scss";
import { useDoubleTap } from "use-double-tap";

import Title from "../../molecules/title/Title";
import Amount from "../../molecules/amount/Amount";

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
    <div className="Card">
      <div className="Card-body" {...handleTap}>
        <Amount stock={amount} className="Card-body__amount" />
        <Title
          copy={name}
          className="Card-body__title"
          style={{ backgroundColor: warningColor }}
        />
      </div>
      <div className="Card-buttons-group">
        <button className="Docena" onClick={docenaHandler}>
          Docena
        </button>
        <button className="Mediadocena" onClick={mediadocenaHandler}>
          1/2 Docena
        </button>
      </div>
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
