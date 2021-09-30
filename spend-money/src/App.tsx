import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Receipt from "./components/Receipt";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-y-auto bg-gray-200">
      <Header />
      <ProductList />
      <Receipt />
    </div>
  );
}

export default App;
