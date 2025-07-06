import BasicLayout from "@/layouts/BasicLayout";
import ProductList from "@/components/ProductList";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter((state) => {
      return state + 1;
    });
  }

  function decrease() {
    setCounter((state) => {
      return state - 1;
    });
  }
  return (
    <div>
      <p data-cy="counter">{counter}</p>
      <button data-cy="add-button" onClick={increase}>
        +
      </button>
      <button data-cy="minus-button" onClick={decrease}>
        -
      </button>
    </div>
  );
}

function ProductPage() {
  return (
    <BasicLayout>
      <h1>상품 목록</h1>
      <ProductList></ProductList>
    </BasicLayout>
  );
}

export default ProductPage;
