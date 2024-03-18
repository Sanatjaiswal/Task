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
        { id: 1, content: "Card 1" },
        { id: 2, content: "Card 2" },
        { id: 3, content: "Card 3" },
        { id: 4, content: "Card 4" },
        { id: 5, content: "Card 5" },
        { id: 6, content: "Card 6" },
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
