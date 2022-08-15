import React from "react";
import Button from "./Button";
const Column = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-10 px-10 py-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col p-6 min-h-52 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
          <p>{item.author}</p>
          <p className="mb-6">{item.description}</p>

          <div className="mt-auto self-end">
            <a
              href={item.url}
              target={"_blank"}
              rel="noreferrer"
              className="mt-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Visit ➡️
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Column;
