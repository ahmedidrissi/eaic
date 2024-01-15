import { constants } from "../constants/constants";

const apiUrl = constants.apiUrl;

const useGetBlogs = async () => {
  const response = await fetch(`${apiUrl}/blogs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return response;
};
export default useGetBlogs;
