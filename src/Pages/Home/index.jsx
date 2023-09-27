import { useContext, useEffect } from "react";
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
    searchByTitle,
    setSearchByTitle,
    filteredItems,
    searchByCategory,
    setFilteredItems,
  } = useContext(CartCountContext);

  useEffect(() => {
    // Define a function to filter items by category
    const filterItemsByCategory = () => {
      if (searchByCategory) {
        const filtered = items.filter(
          (item) => item.category === searchByCategory
        );
        setFilteredItems(filtered);
      } else {
        // If no category is selected, reset filteredItems to all items
        setFilteredItems(items);
      }
    };

    // Call the filter function whenever searchByCategory changes
    filterItemsByCategory();
  }, [items, searchByCategory, setFilteredItems]);

  const renderView = () => {
    if (searchByTitle?.length > 0 || searchByCategory) {
      if (filteredItems.length > 0) {
        return (
          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-xl">
            {filteredItems.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        );
      } else {
        return <div>No products found</div>;
      }
    } else {
      return items ? (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-xl">
          {items.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      );
    }
  };

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
      <div>{renderView()}</div>
    </Layout>
  );
}

export { Home };
