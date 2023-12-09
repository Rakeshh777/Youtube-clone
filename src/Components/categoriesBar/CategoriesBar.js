import React, { useState } from "react";
import "./_categoriesBar.scss";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";

const keywords = [
  "All",
  "ReactJs",
  "AngularJs",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Friends",
  "Travel",
  "Yoga",
  "Sadhguru",
  "Namaste Javascript",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          key={i}
          className={activeElement === value ? "active" : ""}
          onClick={() => handleClick(value)}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
