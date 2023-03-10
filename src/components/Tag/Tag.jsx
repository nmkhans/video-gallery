import React from "react";
import { useDispatch } from "react-redux";
import { toggleTag } from "../../redux/reducers/filterSlice/filterSlice";
import { useSelector } from "react-redux";

const Tag = ({ tag }) => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.filter.tags);

  const handleToggleTag = (tag) => {
    dispatch(toggleTag(tag.title));
  };

  const isSelected = tags.includes(tag.title)

  return (
    <div
      onClick={() => handleToggleTag(tag)}
      className={`${isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"} px-4 py-1 rounded-full cursor-pointer`}
    >
      {tag.title}
    </div>
  );
};

export default Tag;

//todo 