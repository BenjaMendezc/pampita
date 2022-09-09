import { ReactElement } from "react";
import { ReactElementBaseProps } from "../../../types/global";

interface CantidadProps extends ReactElementBaseProps {
    value: number;
    handleChange: any;
}

export const Cantidad = ({
    className,
    copy,
    value,
    handleChange,
}: CantidadProps): ReactElement => {
    return (
        <div className={className}>
            <label> {copy}</label>
            <input
                type="number"
                min="0"
                step="1"
                max="25"
                value={value}
                onChange={(e) => {
                    handleChange(parseInt(e.target.value));
                }} />
        </div>)
};