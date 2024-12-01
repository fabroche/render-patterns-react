type ChildComponentProps = {
    render: (name: string) => JSX.Element;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({render}) => {

    const name = "fabroche"
    return (
        render(name)
    );
};

export const ParentComponent = () => {
    return (
        <ChildComponent
            render={
                (name) => <p>Hello, {name}!</p>
            }
        />
    );
};