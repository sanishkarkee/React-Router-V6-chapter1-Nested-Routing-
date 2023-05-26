import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  let { category } = useParams();
  return (
    <>
      <h1>{category} Post Detail Page</h1>
      <p>
        {category} is Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Consectetur odit praesentium quos sint iure
        maiores iusto explicabo, exercitationem corrupti repellat.
      </p>
    </>
  );
};

export default PostDetail;
