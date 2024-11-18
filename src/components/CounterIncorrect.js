let globalCounter = 0;

const CounterIncorrect = () => {
    const increment = () => globalCounter++;

    return (
        <div className="component">
            <p>Wartość licznika: {globalCounter}</p>
            <button onClick={increment}>Zwiększ</button>
        </div>
    );
};

export default CounterIncorrect;
