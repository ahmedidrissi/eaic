import { constants } from "../constants/constants";

const apiUrl = constants.apiUrl;

const getSessions = async (cell: String) => {
  const response = await fetch(`${apiUrl}/sessions/cells/${cell}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())
  .then((data) => {
    data.sort((a: any, b: any) => {
      const aYear = a.academicYear.split("/")[0];
      const bYear = b.academicYear.split("/")[0];
      return bYear - aYear;
    });
    return data;
  });

  return response;
};

export default getSessions;
