import { useEffect } from "react";
import Masonry from "react-masonry-css";
import { useDispatch, useSelector } from "react-redux";
// import charctersSlice from '../../redux/charctersSlice'
import { fetchCharacters } from "../../redux/charctersSlice";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const page = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters(page));
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <div className="py-5 space-y-5 px-5 text-center">
      <h1 className="text-3xl">Characters</h1>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) => (
          <div className="bg-green-400 rounded-xl" key={character.id}>
            <Link to={"/char/" + character.id} style={{ color: "black" }}>
              <img
                alt={character.name}
                src={character.image}
                className="character rounded-xl"
              />
              <h4 className="text-lg font-semibold">{character.name}</h4>
            </Link>
          </div>
        ))}
      </Masonry>

      <div style={{ padding: "20px 0 40px 0 ", textAlign: "center" }}>
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && (
          <button className="bg-yellow-300 p-2 hover:bg-yellow-400 px-3 rounded-md" onClick={() => dispatch(fetchCharacters(page))}>
            Load More ({page})
          </button>
        )}
        {!hasNextPage && <div>There is nothing to be shown.</div>}
      </div>
    </div>
  );
};

export default Home;
