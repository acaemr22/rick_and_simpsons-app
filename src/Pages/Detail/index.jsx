import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";

const Detail = () => {
  let { id } = useParams();
  const [loading, setLoading] = useState(null);
  const [char, setChar] = useState(true);

  useEffect(() => {
    axios(
      `https://rickandmortyapi.com/api/character/?page=` + Math.ceil(id / 20)
    )
      .then((res) => res.data)
      .then((data) => setChar(data.results.find((item) => item.id == id)))
      .finally(setLoading(false));
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {char && (
        <div>
          <div>
            <h1>{char.name}</h1>
            <img src={char.image} alt="" style={{ width: "50%" }} />
          </div>
          <pre>
            {JSON.stringify(char, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Detail;
