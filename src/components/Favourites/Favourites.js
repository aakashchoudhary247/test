import React from "react";
import "./favourites.css";

const Favourites = (props) => {
  const { flag } = props;
  return (
    <div className="add-to-favourites-container">
      <div>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-heart-fill"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </div>
      <div>{flag === 0 ? 'Add to Favourites' : 'Remove from Favourites'}</div>
    </div>
  );
};

export const AddedToFavourites = () => {
  return (
    <div className="add-to-favourites-container">
      <div>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-heart-fill"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </div>
      <div>Added to Favourites</div>
    </div>
  );
};

export default Favourites;
