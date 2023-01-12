import { useState, useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";

const Error = ({ mensaje, isFormError, error }) => {
  return (
    <>
      {error ? (
        isFormError ? (
          <div className="mb-3 text-sm text-red-700 justify-center flex gap-1 dark:text-red-500">
            <BiErrorCircle fontSize="20px" /> {mensaje}
          </div>
        ) : (
          <div
            className="flex p-2 mb-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-700"
            role="alert"
          >
            <span className=" font-bold mr-2">
              <BiErrorCircle fontSize="20px" />
            </span>
            {mensaje}
          </div>
        )
      ) : (
        <div className="mb-3 text-sm text-white justify-center flex gap-1 dark:text-slate-800">
          {". "}
        </div>
      )}
    </>
  );
};

export default Error;
