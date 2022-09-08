import { Dispatch, ReactElement, SetStateAction } from "react";
import { ReactElementBaseProps } from "../../types/global";

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
      <button className="Docena" onClick={docenaHandler}>
        Docena
      </button>
      <button className="Mediadocena" onClick={mediadocenaHandler}>
        1/2 Docena
      </button>
    </div>
  );
};
