import React, { useState, useEffect } from "react";
import axios from "axios";
const RenderNewQuote = (props) => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchQuote = async () => {
      const { data } = await axios.get("/quote");
      const result = data.quote;
      console.log("result", result);
      setQuote(result);
      setIsLoading(false);
    };
    fetchQuote();
  }, []);

  return <div></div>;
};

export default RenderNewQuote;
