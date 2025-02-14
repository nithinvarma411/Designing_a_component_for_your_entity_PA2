// write product card here
import React from "react";
import ViewProductButton from "./button";

const Productcard = () => {
  const productImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQygh0nqZNronJC9A3hCfdPDjW5rPrtfXHUQQ&s";
  const productName = "Sample Product";
  const productPrice = "$99.99";

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-72">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-700 mt-1">{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
