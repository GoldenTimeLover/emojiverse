import React from "react";
import Card from "./Card";


const Grid = ({data}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-4">
      {data.map((item,index) => (
        <Card
          key={index}
          title={item.name}
          category={item.category}
          description={item.description}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default Grid;
