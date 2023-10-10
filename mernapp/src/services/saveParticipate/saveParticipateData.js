import { post } from "../utils/utils";

const sendUserParticipatedData = async (userId, payload) => {
  try {
    const { data } = await post(`users/${userId}/products`, payload);
    return { data };
  } catch (error) {
    return { error };
  }
};

export { sendUserParticipatedData };
