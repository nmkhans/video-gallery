import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../redux/reducers/tagSlice/tagSlice";
import Loading from "../Loading/Loading";
import Tag from "../Tag/Tag";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags, isLoading, isError, error } = useSelector(
    (state) => state.tags
  );

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  //? render decision

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && tags.length < 1)
    content = <div className="col-span-12">No tags found!</div>;

  if (!isLoading && !isError && tags.length > 1)
    content = tags.map((tag) => <Tag id={tag.id} tag={tag} />);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}

        <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
          redux
        </div>
      </div>
    </section>
  );
};

export default Tags;
