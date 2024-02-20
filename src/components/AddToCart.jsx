/* eslint-disable react/prop-types */
function AddToCart({
  id,
  name,
  price,
  category,
  image,
  description,
  handleAdd,
}) {
  const addToCart = () => {
    const add = {
      id: id,
      name: name,
      price: price,
      category: category,
      image: image,
      description: description,
    };
    handleAdd(add);
  };
  return (
    <>
      <button
        onClick={addToCart}
        className="p-4 w-full mt-3 flex border justify-center bg-black text-white rounded text-center hover:bg-white hover:text-black hover:border-black duration-300"
      >
        Thêm giỏ hàng
      </button>
    </>
  );
}

export default AddToCart;
