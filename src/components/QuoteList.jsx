import Quote from "./Quote";

const QuoteList = ({ citas, eliminarCita, setOpenTab, setQuoteId }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      {citas && citas.length ? (
        <>
          <h2 className="font-bold text-xl text-center mb-5 dark:text-gray-400">Lista de citas</h2>
          
          <div style={{ height: "360px" }} className="overflow-y-scroll">
            {citas?.map((cita) => (
              <Quote key={cita?.id} cita={cita} eliminarCita={eliminarCita} setOpenTab={setOpenTab} setQuoteId={setQuoteId}/>
            ))}
          </div>
        </>
      ) : (
        <div  style={{ }}>
          <p className="font-bold text-xl text-center dark:text-gray-300">Agrega una cita</p>
          <p className="text-xl mt-1 text-center">
            <span className="text-orange-500 font-bold">
              {" "}
              para mostrarla aquí{" "}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default QuoteList;
