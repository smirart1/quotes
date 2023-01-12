import Header from "./components/Header";
import Formulario from "./components/Formulario";
import QuoteList from "./components/QuoteList";
import { useEffect, useState } from "react";
import IndQuote from "./components/IndQuote";

function App() {
  const [citas, setCitas] = useState([]);
  const [openTab, setOpenTab] = useState(1);
  const [quoteId, setQuoteId] = useState(null);
  const [theme, setTheme] = useState('light')


  const eliminarCita = (id) => {
    const CitasAct = citas.filter((cita) => cita.id !== id);
    setCitas(CitasAct);
  };

  return (
    <div className="container mx-auto mt-5 xl:w-5/6">
      <Header theme={theme} setTheme={setTheme} />
      <div className={openTab === 1 ? "block" : "hidden"}>
        <div className="mt-8 md:flex ">
          <Formulario citas={citas} setCitas={setCitas} />
          <QuoteList citas={citas} eliminarCita={eliminarCita} setOpenTab={setOpenTab} setQuoteId={setQuoteId}/>
        </div>
      </div>
      <div className={openTab === 2 ? "block" : "hidden"}>
        <div className="mt-8 md:flex ">
          <IndQuote citas={citas} setOpenTab={setOpenTab} quoteId={quoteId} setQuoteId={setQuoteId}/>
        </div>
      </div>
    </div>
  );
}

export default App;
