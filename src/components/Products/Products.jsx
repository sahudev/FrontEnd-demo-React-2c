import { useState } from "react";
import ProductCard from "../ProductCard";

const globalProducts = [
  {
    title: "Apple New Tab",
    price: "Rs 50,000"
  },
  {
    title: "Amazon New Tab",
    price: "Rs 35,000"
  },
  {
    title: "Google New Tab",
    price: "Rs 40,000"
  },
  {
    title: "LG New Tab",
    price: "Rs 30,000"
  },
  {
    title: "Dell New Tab",
    price: "Rs 45,000"
  },
  {
    title: "Dell Tab",
    price: "Rs 41,000"
  }
];

function getProductApi(callback) {
  console.log("call started");
  setTimeout(function () {
    callback(globalProducts);
    console.log("Finished");
  }, 3000);
}
export default function Products() {
  //let isLoading = true;
  let [isLoading, setIsLoading] = useState(true);
  // let products = [];
  let [products, setProducts] = useState([]);

  getProductApi(function () {
    console.log(globalProducts);
    console.log("call done");
    // products = globalProducts;
    setProducts(globalProducts);
    //isLoading = false;
    setIsLoading(false);
  });

  if (isLoading) {
    return <div> Loading... </div>;
  } else {
    return (
      <div>
        {products.map(function (product) {
          //console.log("Last leg");
          return <ProductCard title={product.title} price={product.price} />;
        })}
      </div>
    );
  }
}
