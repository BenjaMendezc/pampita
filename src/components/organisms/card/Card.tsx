import { useMemo, useState } from "react";
import "./Card.scss";
import { useDoubleTap } from "use-double-tap";
import Title from "../../molecules/title/Title";
import Amount from "../../molecules/amount/Amount";
import { ButtonsGroup } from "../../molecules/buttonsGroup/ButtonsGroup";
import { Cantidad } from "../../molecules/Cantidad/Cantidad";

type CardProps = {
  name: string;
  price: any;
};

export const Card = ({ name, price }: CardProps) => {
  const [amount, setAmount] = useState<number>(25);

  const warningColor = useMemo(() => {
    const warningStyles = {
      backgroundColor: "",
      fontColor: "#fcfcfc",
    };

    if (amount === 0) {
      warningStyles.backgroundColor = "red";
      return warningStyles;
    }

    if (amount > 12) {
      warningStyles.backgroundColor = "#2d2d2f";
    } else {
      warningStyles.backgroundColor = "#fff300";
      warningStyles.fontColor = "#2d2d2f";
    }

    // const warningLevel = amount > 12 ? "#78fac8" : "#fff300";

    return warningStyles;
  }, [amount]);

  const decreaseAmount = () => {
    setAmount((prevState) => (prevState > 0 ? prevState - 1 : 0));
  };

  const handleTap = useDoubleTap(
    (event) => {
      setAmount((prevState) => prevState + 1);
    },
    300,
    {
      onSingleTap: decreaseAmount,
    }
  );

  return (
    <div className="Card">
      <div className="Card-title__container" {...handleTap}>
      <Title
        copy={name}
        className="Card-title"
        style={{
          backgroundColor: warningColor.backgroundColor,
          color: warningColor.fontColor,
        }}
        
      />
      </div>
      <div className="Body__amount-container">
        <Amount stock={amount} />
      </div>
      <ButtonsGroup
        className="Buttons-group"
        setAmountState={setAmount}
        stock={amount}
      />
    </div>
  );
};
