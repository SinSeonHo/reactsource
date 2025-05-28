import React from "react";

const BookDetail = () => {
  return (
    <>
      <section className="flex mt-6 p-5 border-t border-neutral-200">
        <div className="first:grow-1">
          <h2 className="mb-2.5">{/* title */}</h2>
          <p className="my-[5px]">
            <strong>Author :</strong>
          </p>
          <p>
            <strong>Genre :</strong>
          </p>
          <p>
            <strong>Published date :</strong>
          </p>
          <p>
            <strong>Rating :</strong>
            <span></span>
          </p>
          <p>
            <strong>Available :</strong>
            <span></span>
          </p>
        </div>
      </section>
      <div className="text-[8.6em]"></div>
      <div className="text-center p-2">
        <button
          type="submit"
          className="mx-1 my-6 py-3 px-4.5 text-[1.2em] bg-sky-500 text-white rounded-[3px] text-center hover:bg-sky-700"
        >
          Edit Book
        </button>
        <button
          type="button"
          className="mx-1 my-6 py-3 px-4.5 text-[1.2em] bg-red-500 text-white rounded-[3px] text-center hover:bg-red-700"
        >
          Delete Book
        </button>
      </div>
    </>
  );
};

export default BookDetail;
