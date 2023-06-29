import React, { useEffect } from "react";
import { useParams, redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const QuoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quote =
    useSelector((state) => state.quotes.items.find((item) => item.id == id)) ??
    null;

  if (!quote) {
    return <Navigate to="/quotes" />;
  }

  return (
    <div>
      <h1>Quote Detail</h1>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
};

export default QuoteDetail;
