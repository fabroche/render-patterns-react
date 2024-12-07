import {FormEvent, useRef} from "react";

export const UncontrolledInput = () => {
    const formRef = useRef<HTMLFormElement>(null);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (formRef.current) {
            const formData = new FormData(formRef.current)
            alert(...formData)
        }
    }

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
        >
            <label htmlFor="product-name">
                Nombre del producto:
            </label>
            <input
                id="product-name"
                name="product-name"
                type="text"
                placeholder="Nombre delproducto. Ej: Manzana"
                required
            />
            <button
            >Añadir al carrito
            </button>
        </form>
    );
};
