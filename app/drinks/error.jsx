"use client";

const error = (error) => {
  // return <div>custom error message</div>
  return <div>{error.error.message}</div>;
};

export default error;
