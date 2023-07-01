import { useState, useEffect } from "react";
import { fetchData } from "./utils/fetchData";
import Image from "./components/Image";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadClubs = async () => {
      const clubsData = await fetchData(page);

      setData(clubsData);
      console.log(clubsData);
    };

    loadClubs();
  }, [page]);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          textShadow: "0 0 30px blue, 0 0px 20px red",
          color: "whitesmoke",
          fontSize: "50px",
          letterSpacing: "15px",
          fontWeight: "900",
        }}
      >
        FIFA WORLD
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {page > 1 ? (
          <button onClick={() => setPage(page - 1)}>Back</button>
        ) : (
          <button>Back</button>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "whitesmoke",
            borderRadius: "100%",
            width: "45px",
            height: "45px",
            boxShadow: "0 0 10px whitesmoke",
          }}
        >
          <p
            style={{
              fontSize: "25px",
              margin: "0",
              fontWeight: "800",
              color: "whitesmoke",
              textShadow: "0 0 5px black, 0 0 20px blue",
            }}
          >
            {data && data.pagination.pageCurrent}
          </p>
        </div>
        {page < 35 ? (
          <button onClick={() => setPage(page + 1)}>Next</button>
        ) : (
          <button>Next</button>
        )}
      </div>

      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          minWidth: "350px",
          padding: "10px",
          gap: "50px",
          margin: "50px 0px",
        }}
      >
        {data &&
          data.items.map((club) => (
            <li
              key={club.id}
              style={{
                width: "220px",
                minHeight: "250px",
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                fontSize: "20px",
                color: "whitesmoke",
                fontWeight: "900",
                textShadow: "0 0 10px red, 0 0 5px blue",
                marginBottom: "20px",
              }}
            >
              <Image id={club.id} name={club.name} />
              {club.name}
            </li>
          ))}
      </ul>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
          marginBottom: "50px",
        }}
      >
        {page > 1 ? (
          <button onClick={() => setPage(page - 1)}>Back</button>
        ) : (
          <button>Back</button>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "whitesmoke",
            borderRadius: "100%",
            width: "45px",
            height: "45px",
            boxShadow: "0 0 10px whitesmoke",
          }}
        >
          <p
            style={{
              fontSize: "25px",
              margin: "0",
              fontWeight: "800",
              color: "whitesmoke",
              textShadow: "0 0 5px black, 0 0 20px blue",
            }}
          >
            {data && data.pagination.pageCurrent}
          </p>
        </div>
        {page < 35 ? (
          <button onClick={() => setPage(page + 1)}>Next</button>
        ) : (
          <button>Next</button>
        )}
      </div>
    </>
  );
}

export default App;
