import dataUrl from "./axios";

export const getProducts = async () => {
  try {
    const { data } = await dataUrl.get("/products");
    return data;
  } catch (err) {
    return err;
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await dataUrl.get(`/products/${id}`);
    return data;
  } catch (err) {
    return err;
  }
};

export const addProduct = async (product) => {
  try {
    const { data } = await dataUrl.post("/products/", product);
    return data;
  } catch (err) {
    return err;
  }
};

export const editProduct = async (product) => {
  try {
    const { data } = await dataUrl.put(`/products/${product.id}`, product);
    return data;
  } catch (err) {
    return err;
  }
};

export const removeProduct = async (id) => {
  try {
    const { data } = await dataUrl.delete(`/products/${id}`);
    return data;
  } catch (err) {
    return err;
  }
};
