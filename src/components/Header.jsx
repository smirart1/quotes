import { useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const Header = ({ theme, setTheme }) => {
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl bg-orange-500 h-20 rounded-xl px-3 dark:bg-slate-700">
        {theme === "light" ? (
          <img
            src="https://stuckidemexico.com.mx/wp-content/uploads/2021/02/Logo-Stucki-1.png"
            class="mr-3 h-6 sm:h-9 ml-5"
          />
        ) : (
          <img
            src="https://stuckidemexico.com.mx/wp-content/uploads/2021/02/Logo-Stucki-e1618884528834.png"
            class="mr-3 h-6 sm:h-9 ml-5"
          />
        )}

        {theme === "light" ? (
          <div className="flex">
            <p className="text-white mt-0.5 mr-2 font-medium">Tema: </p>
            <button
              onClick={handleSwitch}
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 mr-2 text-orange-500 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-100"
            >
              <HiMoon style={{ fontWeight: "bold" }} />
            </button>
          </div>
        ) : (
          <div className="flex">
            <p className="text-white mt-0.5 mr-2 font-medium">Tema: </p>
            <button
              onClick={handleSwitch}
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 mr-2 text-orange-500 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-100"
            >
              <HiSun style={{ fontWeight: "bold" }} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
