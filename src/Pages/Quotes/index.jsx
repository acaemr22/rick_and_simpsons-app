import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllQuotes } from "../../redux/quotesSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import Item from "./Item";

const Quotes = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.quotes.items);
  const status = useSelector((state) => state.quotes.status);
  const error = useSelector((state) => state.quotes.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch]);
  console.log(items);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div style={{ padding: 5 }}>
      <h1>Quotes</h1>
      {status === "loading" && <Loading />}
      {status === "succeeded" &&
        items.map((item) => (
          <Item item={item} />
        ))}
      {status === "succeeded" && (
        <div className="quotes_info">{items.length} Quotes</div>
      )}
    </div>
  );
};

export default Quotes;
