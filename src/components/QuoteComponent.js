import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Spinner from "../components/Spinner";
// import renderNewQuote from "../helpers/RenderNewQuote";
const QuoteComponent = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const { data } = await axios.get(
      "https://random-quote-challenge-be.herokuapp.com/quote"
    );
    const result = data.quote;
    // console.log("result", result);

    setQuote(result);
    setIsLoading(false);
  };
  console.log("ppp", process.env.URL);
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <div className="container" id="quote-box">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Quote of the day</h5>

            <p className="card-text" id="text">
              {quote.quote}
            </p>
            <div className="card-footer text-muted" id="author">
              AddedBy:{quote.addedBy}
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={fetchQuote}
              id="new-quote"
            >
              New quote
            </button>
            <div className="container">
              <a
                href={`https://twitter.com/share?text=${quote.quote}& hashtags=hashtag1,hashtag2,hashtag3`}
                id="share-tw"
                className="sharer button"
                target="_blank"
                id="tweet-quote"
              >
                <i className="fa fa-3x fa-twitter-square"></i>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://random-quote-challenge-be.herokuapp.com/&quote=${quote.quote}`}
                id="share-fb"
                className="sharer button"
                target="_blank"
              >
                <i className="fa fa-3x fa-facebook-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteComponent;
