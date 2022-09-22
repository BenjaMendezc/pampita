import { ReactElement } from "react";
import { ReactElementBaseProps } from "../../../types/global";

interface CantidadProps extends ReactElementBaseProps {
  value: number;
  handleChange: React.Dispatch<React.SetStateAction<number>>;
}

export const Cantidad = ({
  className,
  copy,
  value,
  handleChange,
}: CantidadProps): ReactElement => {
  // qui dovrebbe ritornare il current pero ovviamnete in un componente non posso ritornare diue cose
  //quindi dovrei fare un altro componente chiamato da cantidada o da card per leggere il current

  // congratulazioni bambina, sei molto brava para risolvere problemi =)

  // pero no me dejes mas warnings amarillas prendidas en la terminal por el amor de dios,
  //"useEffect is defined but never used" >=(
  return (
    <div className={className}>
      <label>{copy}</label>

      <input
        type="number"
        min="0"
        step="1"
        max="25"
        value={value}
        onChange={(e) => {
          handleChange(parseInt(e.target.value));
        }}
      />
    </div>
  );
};
