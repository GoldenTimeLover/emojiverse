import React from "react";
import Button from "./Button";
import Badge from "./Badge";
const Card = (props) => {
  return (
    <div className="flex flex-col p-6 min-64 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <div className="flex">
        <Badge>{props.category}</Badge>
      </div>
      <p className="my-3 font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
      <div className="mt-auto">
        <a
          href={props.url}
          target={"_blank"}
          rel="noreferrer"
          className="mt-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Visit ➡️

        </a>
      </div>
    </div>
  );
};

export default Card;
