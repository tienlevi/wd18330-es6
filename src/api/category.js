import dataUrl from "./axios";

export const getCategories = async () => {
  try {
    const { data } = await dataUrl.get("/category");
    return data;
  } catch (err) {
    return err;
  }
};
