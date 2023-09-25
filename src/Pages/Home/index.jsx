import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { Modal } from "../../Components/Modal";
import { ProductDetail } from "../../Components/ProductDetail";
import { CartCountContext } from "../../Context";

function Home() {
  const { openProductDetailModal, setOpenProductDetailModal, items } =
    useContext(CartCountContext);

  return (
    <Layout>
      Home
      {openProductDetailModal && (
        <Modal>
          <ProductDetail closeModal={() => setOpenProductDetailModal(false)} />
        </Modal>
      )}
      {items ? (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-xl">
          {items.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}

export { Home };
