import React, { ReactElement, useMemo, useState } from "react";
import "./Card.scss";
import { useDoubleTap } from "use-double-tap";

type CardProps = {
  name: string;
};

export const Card = ({ name }: CardProps): ReactElement => {
  const [amount, setAmount] = useState(25);

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
    <button className="Card-container" {...handleTap}>
      <div className="Card-color-bar">
        <p className="Card-color-bar__amount">{amount}</p>
      </div>
      <div className="Card-body" style={{ backgroundColor: warningColor }}>
        <div className="Card-body__text">{name}</div>
      </div>
    </button>
  );
};
