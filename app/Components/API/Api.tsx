import axios from "axios";

export const getAllProducts = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const result = await axios.get(
      `https://crm-payment.queleadscrm.com/api/products`,
      config
    );
    return result.data[0].data;
  } catch (error: any) {
    return error.response;
  }
};
export const getProductPrice = async (productId: string) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const result = await axios.post(
      `https://crm-payment.queleadscrm.com/api/prices`,
      { prod_id: productId },
      config
    );
    return result.data;
  } catch (error: any) {
    return error.response;
  }
};
