import { useState, useEffect, useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { Modal } from "../../Components/Modal";
import { ProductDetail } from "../../Components/ProductDetail";
import { CartCountContext } from "../../Context";

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
  const { openProductDetailModal, setOpenProductDetailModal } =
    useContext(CartCountContext);

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
      {openProductDetailModal && (
        <Modal>
          <ProductDetail closeModal={() => setOpenProductDetailModal(false)} />
        </Modal>
      )}
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-xl">
        {items ? (
          items.map((item) => (
            <Card
              key={item.id}
              data={item}
              setOpenProductDetailModal={setOpenProductDetailModal}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}

export { Home };
