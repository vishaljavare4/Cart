import { IoIosRadioButtonOn } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from "react";

const Left = ({ product, updateTotalValue }) => {
    const [selectedVal, setSelectedVal] = useState(0);

    const handleIncrement = () => {
        setSelectedVal((prevVal) => {
            const newVal = prevVal + 1;
            updateTotalValue(product.price);
            return newVal;
        });
    };

    const handleDecrement = () => {
        if (selectedVal > 0) {
            setSelectedVal((prevVal) => {
                const newVal = prevVal - 1;
                updateTotalValue(-product.price);
                return newVal;
            });
        }
    };

    return (
        <div className="rounded-lg p-4 flex items-center hover:shadow-xl w-full transition-all justify-between">
            <div className="flex items-center">
                <div className="rounded-full bg-blue-800 text-white w-6 h-6 flex items-center justify-center">
                    <p className="text-sm">{product.id}</p>
                </div>
                <img src={product.imgUrl} className="w-24" alt={product.name} />
                <div className="flex flex-col items-start gap-1 ml-4">
                    <p className="text-lg font-medium">{product.name}</p>
                    <p className="text-xs font-thin">650ml</p>
                    <p className="text-xs font-thin">${product.price}</p>
                    <IoIosRadioButtonOn className="text-green-400" />
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <FaMinusCircle className="text-blue-800" onClick={handleDecrement} />
                <p className="p-2 border border-solid border-black border-opacity-10 rounded-lg">
                    {selectedVal}
                </p>
                <FaPlusCircle className="text-blue-800" onClick={handleIncrement} />
            </div>
        </div>
    );
};

export default Left;