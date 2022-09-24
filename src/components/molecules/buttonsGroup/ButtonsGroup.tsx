import { Dispatch, ReactElement, SetStateAction } from "react";
import { ReactElementBaseProps } from "../../../types/global";
import "./ButtonsGroup.scss";
import { Button } from "../../atoms/button/Button";

interface ButtonsGroupProps extends ReactElementBaseProps {
  setAmountState: Dispatch<SetStateAction<number>>;
  stock: any;
}

export const ButtonsGroup = ({
  className,
  setAmountState,
  stock,
}: ButtonsGroupProps): ReactElement => {
  const docenaHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(stock >= 12)
    setAmountState((prevState) => prevState - 12);
  };

  const mediadocenaHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(stock >= 6)
    setAmountState((prevState) => prevState - 6);
  };

  return (
    <div className={className}>
      <Button className="Buttons" handleClick={docenaHandler} copy={'docena'} ></Button>
      <Button className="Buttons" handleClick={mediadocenaHandler} copy={'1/2 docena'}></Button>
    </div>
  );
};
