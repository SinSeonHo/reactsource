import React from "react";

const BookForm = () => {
  return (
    <form className="flex flex-col gap-2.5 mt-6">
      <input type="text" placeholder="Tilte" required className="border-2 border-stone-300 p-2 rounded-xs" />
      <input type="text" placeholder="Author" required className="border-2 border-stone-300 p-2 rounded-xs" />
      <select name="" className="border-2 border-stone-300 p-2 rounded-xs">
        <option value="">Select Genre</option>
      </select>
      <input type="date" placeholder="Published Date" required className="border-2 border-stone-300 p-2 rounded-xs" />

      <label>
        <input type="checkbox" required className="border-2 border-stone-300 p-2 rounded-xs mr-1.5" />
        Available
      </label>
      <div className="text-center p-2">
        <button
          type="submit"
          className="mx-1 my-6 py-3 px-4.5 text-[1.2em] bg-sky-500 text-white rounded-[3px] text-center hover:bg-sky-700"
        >
          Add
        </button>
        <button
          type="button"
          className="mx-1 my-6 py-3 px-4.5 text-[1.2em] bg-red-500 text-white rounded-[3px] text-center hover:bg-red-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BookForm;
