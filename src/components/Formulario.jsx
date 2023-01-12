import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ citas, setCitas}) => {
  const [authorName, setAuthorName] = useState("");
  const [quoteText, setQuoteText] = useState("");
  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([authorName, quoteText].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const objCita = {
      authorName,
      quoteText,
    };

    objCita.id = generarId();
    setCitas([...citas, objCita]);
    setAuthorName("");
    setQuoteText("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md py-10 px-5 mb-10 dark:bg-slate-800"
        style={{height: '430px'}}
      >
        <div className="mb-4">
          <label
            htmlFor="authorName"
            className="block text-gray-700 uppercase font-bold dark:text-gray-300"
          >
            Nombre:
          </label>
          <input
            id="authorName"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400 dark:bg-slate-700 dark:border-slate-700 dark:text-gray-400"
            type="text"
            placeholder="Introduce el nombre del autor"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>

        

        <div className="mb-1">
          <label
            htmlFor="quoteText"
            className="block text-gray-700 uppercase font-bold dark:text-gray-300 "
          >
            Cita:
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-400 dark:bg-slate-700 dark:border-slate-700 dark:text-gray-400"
            rows='5'
            id="quoteText"
            placeholder="Ingresa la cita"
            value={quoteText}
            onChange={(e) => setQuoteText(e.target.value)}
          />
        </div>

        <Error error={error} mensaje={'Todos los campos son obligatorios'} isFormError={true} setError={setError}/>

        <input
          type="submit"
          className="bg-orange-500 w-full p-3 text-white uppercase font-bold hover:bg-orange-600 cursor-pointer rounded-lg transition-colors "
          value='Agregar'
        />
      </form>
    </div>
  );
};

export default Formulario;
