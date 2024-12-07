import {ChangeEvent, useState} from "react";

export const ControlledInput = () => {
    const [value, setValue] = useState<string>('')

    function onChangeinputValue(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={onChangeinputValue}
                placeholder="Ingresa el codigo del Cupón. Ej: 10OFF"
            />
            <p>Cupón de descuento: <b>{value}</b></p>
        </div>
    );
};
