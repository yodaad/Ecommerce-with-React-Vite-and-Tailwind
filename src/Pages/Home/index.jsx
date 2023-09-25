import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { Modal } from "../../Components/Modal";
import { ProductDetail } from "../../Components/ProductDetail";
import { CartCountContext } from "../../Context";

function Home() {
  const {
    openProductDetailModal,
    setOpenProductDetailModal,
    items,
    setSearchByTitle,
  } = useContext(CartCountContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-blue-500 w-80 p-2 my-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
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
