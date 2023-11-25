import { constants } from "../constants/constants";

const apiUrl = constants.apiUrl;

const getSessions = async (cell: String) => {
  const response = await fetch(`${apiUrl}/sessions/cell/${cell}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  return response;
};

export default getSessions;
