import React from "react";
import { useState, useEffect } from "react";
import Card from "./assets/cards";
import Bottom from "./assets/bottom";

const App = () => {
  const [count, setCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCount([
        { id: 1, content: <div className="card" style={{overflow:"hidden"}}>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" width="299" style={{border:"2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>},

      
        { id: 2, content: <div className="card" style={{overflow:"hidden"}}>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" width="299" style={{border:"2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div> },


        { id: 3, content: <div className="card" style={{overflow:"hidden"}}>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" width="299" style={{border:"2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div> },


        { id: 4, content: <div className="card" style={{overflow:"hidden"}}>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" width="299" style={{border:"2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div> },


        { id: 5, content: <div className="card" style={{overflow:"hidden"}}>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" width="299" style={{border:"2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div> },

        { id: 6, content: <div className="card" style={{overflow:"hidden"}}>
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="" width="299" style={{border:"2px solid black"}}/>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div> },
      ]);
      setLoading(false);
    }, 5000);
  }, []);

  const remove = (id) => {
    setCount(count.filter((card) => card.id !== id));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const index = (currentPage - 1) * 6;
  const last = index + 6;
  const currentCards = count.slice(index, last);

  return (
    <div className="app">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {currentCards.map((card) => (
            <CardComponent key={card.id} cardData={card} onRemove={remove} />
          ))}
          <Bottom
            totalPage={Math.ceil(count.length / 6)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default App;
