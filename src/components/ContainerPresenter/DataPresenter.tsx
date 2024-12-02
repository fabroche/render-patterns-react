import React from "react";
import {DataItem} from "./ContainerPresenter.d.tsx";


interface DataPresenterProps {
    data: DataItem[],
}

export const DataPresenter: React.FC<DataPresenterProps> = ({data}) => {
    return (
        <>
            {data.map(
                item => (
                    <React.Fragment key={item.id}>
                        <img src={item.image} alt={item.name}/>
                        <em>{item.description}</em>
                    </React.Fragment>
                )
            )}
        </>
    );
};
