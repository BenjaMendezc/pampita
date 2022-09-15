import { ReactElement, } from "react";
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
                    handleChange(parseInt(e.target.value))
                    gusto.current = parseInt(e.target.value)
                }}
            />
        </div>)
};
