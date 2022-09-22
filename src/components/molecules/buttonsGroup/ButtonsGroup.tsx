import { Dispatch, ReactElement, SetStateAction } from "react";
import { ReactElementBaseProps } from "../../../types/global";
import "./ButtonsGroup.scss";
import { Button } from "../../atoms/button/Button";

interface ButtonsGroupProps extends ReactElementBaseProps {
  setParentState: Dispatch<SetStateAction<number>>;
}

export const ButtonsGroup = ({
  className,
  setParentState,
}: ButtonsGroupProps): ReactElement => {
  const docenaHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("sumaste 1 docena");
    setParentState((prevState) => prevState + 12);
  };

  const mediadocenaHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("sumaste 1/2 docena");
    setParentState((prevState) => prevState + 6);
  };

  return (
    <div className={className}>
      <Button className="Docena" handleClick={docenaHandler} copy={'docena'}></Button>
      <Button className="Mediadocena" handleClick={mediadocenaHandler} copy={'1/2 docena'}></Button>
    </div>
  );
};
