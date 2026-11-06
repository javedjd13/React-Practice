import { useEffect } from "react";

function Dummy() {
    useEffect(() => {
        // Side effect logic here
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.example.com/data");
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            <h1>Dummy Component</h1>
        </div>
    );
}

export default Dummy;
