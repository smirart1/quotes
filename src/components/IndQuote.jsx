import React from "react";
import { MdArrowBack } from "react-icons/md";

const IndQuote = ({ citas, setOpenTab, quoteId }) => {
  const citaInd = citas.filter((cita) => cita.id === quoteId);

  return (
    <div className="w-full ">
      <div className="mb-3 px-5 py-10 rounded-md bg-white shadow-md w-full mx-auto xl:w-5/6 dark:bg-slate-800">
        <blockquote class="p-4 my-4 border-l-4 rounded-md border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-slate-700">
          <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
            "{citaInd[0]?.quoteText}"
          </p>
        </blockquote>

        <p className="font-bold mb-3 text-gray-700 justify-center flex ">
          <span className="pl-3 text-md font-light text-gray-500 dark:text-gray-300 italic">
            − {citaInd[0]?.authorName}
          </span>
        </p>
      </div>
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setOpenTab(1)}
          type="button"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center mt-5"
        >
          <MdArrowBack style={{ fontWeight: "bold", marginRight: "5px" }} />
          Regresar
        </button>
      </div>
    </div>
  );
};

export default IndQuote;
