import classes from "./CompoundComponents.module.css";
import React, {ReactElement, ReactNode, useState} from "react";

interface TabsProps {
    children: ReactNode,
}

const Tabs: React.FC<TabsProps> = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabElements = React.Children.toArray(children).filter(
        (child): child is ReactElement => React.isValidElement(child)
    );

    function onTabClick(index: number) {
        setActiveIndex(index)
    }

    return (
        <div className={classes.Tabs}>
            <ul>
                {tabElements.map((child, index) => (
                    <li
                        key={index}
                        className={index === activeIndex ? classes.TabActive : ""}
                        onClick={() => onTabClick(index)}
                    >
                        {child.props.label}
                    </li>
                ))}
            </ul>
            <p className={classes.TabContent}>
                {tabElements[activeIndex]}
            </p>
        </div>
    );
};

export default Tabs;
