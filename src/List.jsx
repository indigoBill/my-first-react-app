function WinterFlowerList(props) {
    if(!props.flowersList) {
        return <h2>Loading...</h2>;
    }

    if(props.flowersList.length === 0) {
        return <h2>There are no flowers currntly in this list.</h2>
    }

    return (
        <ul>
            {props.flowersList.map((flower) => {
                return <li key={flower}>{flower}</li>;
            })}
        </ul>
    )
}

function SpringFlowerList(props) {
    return (
        <>
            
            {!props.flowersList ? (
                <h2>Loading...</h2>
            ) : props.flowersList.length <= 0 ? (
                <h2>There are no flowers currently in this list.</h2>
            ) : (
                <ul>
                    {props.flowersList.map((flower) => {
                        return <li key={flower}>{flower}</li>;
                    })}
                </ul>
            )}
        </>
    )
    
}

function SummerFlowerList(props) {
    return (
        <>
            {!props.flowersList && <h2>Loading...</h2>}
            {props.flowersList && props.flowersList.length <= 0 && <h2>There are no flowers currently in this list.</h2>}
            {props.flowersList && props.flowersList.length > 0 && (
                <ul>
                    {props.flowersList.map((flower) => {
                        <li key={flower}>{flower}</li>;
                    })}
                </ul>
            )}
        </>
    )
}

function DisplayLists() {
    const winterFlowers = ['Iceland Poppies', 'Snapdragons', 'Cornflowers', 'Starflowers'];
    const springFlowers = [];
    // const summerFlowers = [];

    return (
        <div>
            <h1>WINTER FLOWERS</h1>
            <WinterFlowerList flowersList={winterFlowers} />
            <h1>SPRING FLOWERS</h1>
            <SpringFlowerList flowersList={springFlowers} />
            <h1>SUMMER FLOWERS</h1>
            <SummerFlowerList />
        </div>
    );
}

export default DisplayLists;