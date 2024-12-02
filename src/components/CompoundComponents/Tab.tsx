import {ReactNode} from "react";
import * as React from "react";

interface TabProps {
    label: string,
    children: ReactNode
}

const Tab: React.FC<TabProps> = ({label, children}) => {
    return (
        <>
            <em>{label}</em>
            <span>{children}</span>
        </>
    );
};

export {Tab};
