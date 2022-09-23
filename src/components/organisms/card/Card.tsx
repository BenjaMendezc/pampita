import { useMemo, useState, forwardRef, useImperativeHandle } from "react";
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

export const Card = forwardRef(({ name, price }: CardProps, ref) => {
  useImperativeHandle(ref, () => ({
    setRestedAmount() {
      setAmount((prevState) => prevState - pedidoValue);
      setPedidoValue(0);
    },
  }));

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
      <Title
        copy={name}
        className="Card-title"
        style={{ backgroundColor: warningColor }}
        {...handleTap}
      />
      <div className="Card-body">
        <div className="Body__amount-container">
          <Amount stock={amount} />
        </div>
        <ButtonsGroup
          className="Buttons-group"
          setParentState={setPedidoValue}
        />
        <Cantidad
          className="Cantidad"
          copy="Cantidad"
          value={pedidoValue}
          handleChange={setPedidoValue}
        />
      </div>
    </div>
  );
});
