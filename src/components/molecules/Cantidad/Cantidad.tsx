import { ReactElement } from "react";
import { ReactElementBaseProps } from "../../../types/global";

interface CantidadProps extends ReactElementBaseProps {
  value: number;
  handleChange: any;
  gusto: any;
}

export const Cantidad = ({
  className,
  copy,
  value,
  handleChange,
  gusto,
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
        //la forma correcta de obtener el value de un input con una ref es
        //pasando la ref al input y buscando su value con ref.current.value
        //ref={* ?? *}
        onChange={(e) => {
          handleChange(parseInt(e.target.value));
          //si se pasa una ref al input no es necesario
          //cambiarlo manualmente en el onChange
          gusto.current = parseInt(e.target.value);
        }}
      />
    </div>
  );
};
