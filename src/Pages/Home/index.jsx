import { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";

function fetchProducts() {
  return fetch("https://fakestoreapi.com/products").then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => setItems(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-xl">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  );
}

export { Home };
