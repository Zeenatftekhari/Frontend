import { get } from "../utils/utils";

const getUserByNumber = async (mobileNumber) => {
  try {
    const { data } = await get(`User/${mobileNumber}`);
    return { data };
  } catch (error) {
    return { error };
  }
};

export { getUserByNumber };
