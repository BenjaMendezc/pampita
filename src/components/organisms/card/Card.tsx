import React, { ReactElement, useMemo, useState } from "react";
import "./Card.scss";
import { useDoubleTap } from "use-double-tap";

import Title from "../../molecules/title/Title";
import Amount from "../../molecules/amount/Amount";
import { ButtonsGroup } from "../../molecules/buttonsGroup/ButtonsGroup";
import { Cantidad } from "../../molecules/Cantidad/Cantidad";

type CardProps = {
  name: string;
  gusto: any;
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
      <ButtonsGroup
        className="Card-buttons-group"
        setParentState={setPedidoValue}
      />
      <Cantidad
        className="Pedido"
        copy="Cantidad"
        value={pedidoValue}
        handleChange={setPedidoValue}
      />
    </div>
  );
};
