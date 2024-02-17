import dataUrl from "./axios";

export const getProfile = async () => {
  try {
    const { data } = await dataUrl.get("/profile");
    return data;
  } catch (err) {
    return err;
  }
};

export const getProfileId = async () => {
  try {
    const { data } = await dataUrl.get("/profile/1");
    return data;
  } catch (err) {
    return err;
  }
};

export const updateProfile = async (profile) => {
  try {
    const { data } = await dataUrl.put("/profile/1", profile);
    return data;
  } catch (err) {
    return err;
  }
};
