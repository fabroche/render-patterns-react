import ParentComponent from "./ParentComponent.tsx";
import ChildComponent from "./ChildComponent.tsx";

export const RenderProps2 = () => {
    return (
        <div>
            <ParentComponent
                render={
                    (data: string[]) => <ChildComponent data={data}/>
                }
            />
        </div>
    );
};
