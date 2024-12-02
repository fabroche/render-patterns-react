function withLoading<T extends object>(Component: React.ComponentType<T>) {
    return (props: T & { isLoading: boolean }) => {
        const {isLoading, ...rest} = props
        return isLoading ? <p>Loading...</p> : <Component {...rest as T}/>
    }
}

interface UserProps {
    name: string,
}

const UserComponent: React.FC<UserProps> = ({name}) => {
 return <p>Hello, {name}!</p>
}

const UserWithLoading = withLoading(UserComponent)

export const ParentComponent = () => {
    return (
        <div>
            <UserWithLoading isLoading={true} name="fabroche"/>
            <UserWithLoading isLoading={false} name="fabroche"/>
        </div>
    );
};
