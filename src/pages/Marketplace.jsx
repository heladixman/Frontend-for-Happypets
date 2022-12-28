import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { ItemsContext } from "../content/files/ItemsContext";

const Marketplace = () => {
  const items = useContext(ItemsContext);
  console.log(items);

  const filterItemsforProduct = items.filter((item) => {
    return item.itemType === "product";
  });
  return (
    <div className="flex">
      <Helmet>
        <title>Marketplace | Happypets</title>
      </Helmet>
      <div className="flex flex-wrap justify-between">
        {filterItemsforProduct.map((item, key) => {
          return (
            <div
              key={key}
              className="mb-3 max-w-[48%] lg:w-[18%] md:w-[30%] bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 border-1"
            >
              <a href={`/marketplace/product/${item.productUrl}`}>
                <div className="bg-white max-w-sm ">
                  <img
                    className="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                  <div className="p-4 bg-white rounded-b-lg ">
                    <p className="text-gray-900 font-bold text-xs uppercase">
                      category
                    </p>
                    <p className="text-gray-700 text-sm truncate">
                      {item.itemName}
                    </p>
                    <p className="text-gray-900 text-md">Rp{item.itemPrice}</p>
                    <div className="mt-2 flex flex-wrap justify-between">
                      <div className="text-white text-xs px-2 py-1 bg-red-500 rounded-md w-full text-center hover:scale-110">
                        <button>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Marketplace;
