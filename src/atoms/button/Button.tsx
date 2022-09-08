import { ReactElement } from "react";
import { ReactElementBaseProps } from "../../types/global";

interface ButtonProps extends ReactElementBaseProps {
  handleClick: () => {};
}

export const Button = ({
  className,
  copy,
  handleClick,
}: ButtonProps): ReactElement => {
  return (
    <button className={className} onClick={handleClick}>
      {copy}
    </button>
  );
};
