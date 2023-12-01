import { constants } from "../constants/constants";

const apiUrl = constants.apiUrl;

const getAnalytics = async () => {
  const response = await fetch(`${apiUrl}/analytics`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
  return response;
};

export default getAnalytics;
