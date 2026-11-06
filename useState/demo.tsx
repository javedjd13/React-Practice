import { useState } from "react";

function Demo() {
    // Store the count in React state so the UI updates when it changes.
    const [count, setCount] = useState<number>(0);

    // Use the previous state value to calculate the next count safely.
    const handleIncrement = () => {
        setCount((previousCount) => previousCount + 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}

export default Demo;
