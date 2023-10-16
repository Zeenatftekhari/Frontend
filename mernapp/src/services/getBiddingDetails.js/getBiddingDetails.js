import { get } from "../utils/utils";

const getBiddingDetailsOfProduct = async (productId) => {
  try {
    const { data } = await get(`GetBiddingCountBy?product_id=${productId}`);
    return { data };
  } catch (error) {
    return { error };
  }
};

export { getBiddingDetailsOfProduct };
