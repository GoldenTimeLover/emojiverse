import React from "react";

const AboutPopup = () => {
  return (
    <div className="flex flex-col">
      <h2 className="self-center text-4xl">ABOUT</h2>
      <div className="mt-8">
        <p className="font-bold">❓ What Is This?</p>
        <p>
          {" "}
          Emojiverse is a place that aims to be a one-stop-shop for all your
          emoji needs.{" "}
        </p>
      </div>
      <div className="mt-8">
        <p className="font-bold">❓ How do you add new products?</p>
        <p>New products are added through user submission.</p>
      </div>
      <div className="mt-8">
        <p className="font-bold">❓ Can anyone submit a product?</p>
        <p>Yep 😃 Anyone can submit a product and if it's emoji related it will be added to the site.</p>
      </div>
      <div className="mt-8">
        <p className="font-bold">❓ What type of things can be submitted?</p>
        <p>Anything emoji related! A game, a book, a website an article go wild.</p>
      </div>
    </div>
  );
};

export default AboutPopup;
