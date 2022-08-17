import ChildComponent from "./ChildComponent";

const FirstComponent = () => {
    let name = 'João'
    return (
        <div>
            <h1>Meu primeiro componente!</h1>
            <div>{name}</div>
            <ChildComponent></ChildComponent>
        </div>
    )
}

export default FirstComponent;