import React from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";

function Home() {
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
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
