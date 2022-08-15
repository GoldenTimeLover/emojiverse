import React from "react";
import Button from "./Button";
import { useState } from "react";
import { db } from "../services/Firebase-service";
import { collection, addDoc } from "firebase/firestore";
import Loader from "./Loader";
import Spinner from "./Spinner";


const SubmitForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      description: e.target.description.value,
      category: e.target.category.value,
      url: e.target.url.value,
      timestamp: new Date().toLocaleString(),
    };

    setLoading(true);
    try {
      var start = performance.now();
      await addDoc(collection(db, "submissions"), data);
      var end = performance.now();
      var duration = end - start;
      console.log("submitHandler took " + duration + " milliseconds.");
      console.log(data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setLoading(false);
    setFinished(true);
  };

  return (
    <>
      {!loading && !finished && (
        <form className="flex flex-col" onSubmit={submitHandler}>
          <h2 className="text-xl">Submit a product:</h2>
          <div className="mt-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              Product Name:
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Name..."
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-black"
            >
              Category:
            </label>
            <input
              type="text"
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Category..."
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-black"
            >
              Product Description:
            </label>
            <textarea
              id="description"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="description..."
            ></textarea>
          </div>
          <div className="mt-2">
            <label
              htmlFor="url"
              className="block text-sm font-medium text-black"
            >
              URL:
            </label>
            <input
              type="text"
              id="url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="URL..."
            />
          </div>
          <div className="mt-2"></div>
          <Button type={"submit"} onClick={() => {}}>
            Submit
          </Button>
        </form>
      )}
      {loading && (
        <div className="flex flex-col items-center justify-center h-60">
          <Spinner />
          <p>Loading...</p>
        </div>
      )}
      {finished && (
        <div className="flex flex-col items-center justify-center h-60">
          <p className="flex items-center justify-center text-6xl border border-solid border-8 border-green-600 rounded-full h-32 w-32 text-center">✔️</p>
          <p className="my-4">Thank you for your submission!</p>
          <Button onClick={props.exitForm}>Your Welcome 😄 </Button>
        </div>
      )}
    </>
  );
};

export default SubmitForm;
