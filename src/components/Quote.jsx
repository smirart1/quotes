import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const Quote = ({ cita, eliminarCita, setOpenTab, setQuoteId }) => {
  const { authorName, quoteText, id } = cita;

  const handleEliminar = () => {
    const res = confirm(`¿Deseas eliminar esta cita?`);
    if (res) {
      eliminarCita(id);
    }
  };
  return (
    <div className="mx-5 mb-3 px-5 py-7 rounded-md bg-white shadow-md dark:bg-slate-800">
      <blockquote className="text-lg italic font-semibold text-left text-gray-900 dark:text-gray-300">
        <p>"{quoteText}"</p>
      </blockquote>
      <p className="font-bold mb-3 text-gray-700 justify-end flex ">
        <span className="pl-3 text-sm font-light text-gray-500 dark:text-gray-200">
          −{authorName}
        </span>
      </p>
      <div className="flex justify-center gap-2">
        <button
          onClick={handleEliminar}
          type="button"
          className="inline-flex items-center border-2 border-rose-500 justify-center w-8 h-8 mr-2 text-rose-500 transition-colors duration-150 bg-white rounded-full hover:bg-rose-600 hover:text-white dark:bg-slate-700 dark:hover:bg-rose-600"
        >
          <AiFillDelete style={{ fontWeight: "bold" }} />
        </button>
        <button
          onClick={() => {
            setOpenTab(2);
            setQuoteId(id);
          }}
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 mr-2 text-white transition-colors duration-150 bg-orange-500 rounded-full focus:shadow-outline hover:bg-orange-600"
        >
          <FiExternalLink style={{ fontWeight: "bold" }} />
        </button>
      </div>
    </div>
  );
};

export default Quote;
