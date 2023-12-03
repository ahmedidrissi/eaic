import { useState, useEffect } from "react";
import axios from "axios";
import { constants } from "../constants/constants";

const apiUrl = constants.apiUrl;

const useAnalytics = (type: string, request: string) => {
  const [analytics, setAnalytics] = useState({ visits: 0, views: 0 });

  const getAnalytics = async () => {
    const response = await axios.get(`${apiUrl}/analytics/${type}`, {
      headers: { "Content-Type": "application/json" },
    });
    setAnalytics({
      visits: response.data.visits,
      views: response.data.views,
    });
  };

  const updateAnalytics = async () => {
    const response = await axios.put(`${apiUrl}/analytics/${type}`, {
      headers: { "Content-Type": "application/json" },
    });
    setAnalytics({
      visits: response.data.visits,
      views: response.data.views,
    });
  };

  useEffect(() => {
    if (request === "get") {
      getAnalytics();
    } else if (request === "update") {
      updateAnalytics();
    }
  }, [request]);

  return analytics;
};

export default useAnalytics;
