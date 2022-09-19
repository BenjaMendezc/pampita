import React, { ReactElement, useMemo, useState,forwardRef,useImperativeHandle } from "react";
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


export const Card = forwardRef(({name, price}:CardProps , ref) => {

  useImperativeHandle(ref, () => ({
    setRestedAmount() {
    setAmount((prevState) => prevState - pedidoValue);
    setPedidoValue(0)
  }}))
  
  const [amount, setAmount] = useState<number>(25);
  const [pedidoValue, setPedidoValue] = useState<number>(0);

  //// 1- MENU/ crear boton
  //// 2- CARD/ crear f() que reste pedidoValue a amount (verision simple) y setear amount al nuevo valor
  //// 3- MENU/ crear ref
  //// 4- CARD/ transformar react component en forward ref
  //// 5- CARD/ crear el hook useImperativeHandle
  //// 6- CARD/ mover la f() creada en el punto 2 dentro del nuevo hook (imperativeHandle)
  // 7- MENU/ agregar ref.current al onclick del button
  // https://bobbyhadz.com/blog/react-call-function-in-child-component

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
      <div>
      <p>{pedidoValue*price}</p>
    </div>
    </div>
  );
  });
