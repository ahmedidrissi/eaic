import { constants } from "../constants/constants";

const apiUrl = constants.apiUrl;

const useUpdateAnalytics = async (type: string) => {
  const response = await fetch(`${apiUrl}/analytics/${type}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return response;
};

export default useUpdateAnalytics;
