import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../redux/reducers/tagSlice/tagSlice";
import Loading from "../Loading/Loading";
import Tag from "../Tag/Tag";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags, isLoading } = useSelector(
    (state) => state.tags
  );

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  if (isLoading) return <Loading />;

  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {tags.map((tag) => (
          <Tag id={tag.id} tag={tag} />
        ))}

        <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
          redux
        </div>
      </div>
    </section>
  );
};

export default Tags;
