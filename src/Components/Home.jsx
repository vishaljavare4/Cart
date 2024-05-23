import { cartData } from "../utils/cartData";
import Left from "./Left";
import { useState } from "react";

const Home = () => {
    const [totalValue, setTotalValue] = useState(0);

    const updateTotalValue = (valueChange) => {
        setTotalValue((prevValue) => prevValue + valueChange);
    };

    return (
        <div className="flex w-full p-4 items-start justify-center flex-wrap gap-4">
            <div className="flex flex-col w-[70%] p-4 rounded-lg shadow-xl">
                <p className="text-3xl text-blue-700">Shopping Cart</p>
                {cartData.map((each) => (
                    <Left key={each.id} product={each} updateTotalValue={updateTotalValue} />
                ))}
            </div>
            <div className="flex w-[20%] p-4 flex-col rounded-lg shadow-xl">
                <p className="text-3xl text-blue-700">Summary</p>
                <p className="text-xl">Total: ${totalValue}</p>
            </div>
        </div>
    );
};

export default Home;