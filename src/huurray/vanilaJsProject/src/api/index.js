export const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

export const requestAPI = async (url) => {
  try {
    const res = await fetch(`${API_ENDPOINT}${url}`);
    if (res.status === 200) {
      const data = await res.json();
      return data;
    } else {
      const errorData = await res.json();
      throw errorData;
    }
  } catch (error) {
    throw error;
  }
};
