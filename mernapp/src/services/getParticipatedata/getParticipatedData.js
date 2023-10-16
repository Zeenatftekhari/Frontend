import { get } from "../utils/utils";

const getParticipatedData = async (userId) => {
    try {
        const { data } = await get(`Getparticipatedataby/${userId}`);
        return { data };
    } catch (error) {
        return { error };
    }
};

export { getParticipatedData };