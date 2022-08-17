const Events = () => {
    const handleClick = (e) => {
        console.log(e,'Funcionou o click')
    }
    const returnDiv = () => {
        return (
         <div>Div retornada através de uma função</div>
        )
     }
    return (
        <div>
            <button onClick={handleClick}>Clicar chamando função</button>
            {returnDiv()}
            <button onClick={()=> console.log('Direto com arrow fumction')}>Click direto com arrow function</button>

        </div>
    )
}

export default Events