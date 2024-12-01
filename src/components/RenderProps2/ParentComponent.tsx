import {ReactNode, useState} from "react";

interface ParentComponentProps {
    render: (data: string[]) => ReactNode
}

const ParentComponent: React.FC<ParentComponentProps> = ({render}) => {

    const [data] = useState<string[]>(['Mango 🥭', 'Pera 🍐', 'Manzana 🍎'])

    return <ul>{render(data)}</ul>
};

export default ParentComponent;
