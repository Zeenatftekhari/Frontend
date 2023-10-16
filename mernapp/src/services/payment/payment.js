import { get, post } from "../utils/utils"

const fetchPaymentData = async (quantity) => {
    try {
        const { data } = await post(`RazorpayToken/${quantity}`)
        console.log(data, "utilss")
        return data
    } catch (error) {
        return { error };
    }
}
export { fetchPaymentData }