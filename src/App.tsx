// App.tsx

import React, { useState } from "react";
import Count from "./components/Count/Count";
import ThemeContext from "./components/Theme/ThemeContext";

function App() {
  const [theme, setTheme] = useState<string>("clair");

  const toggleTheme = () => {
    if (theme === "clair") {
      setTheme("sombre");
    } else {
      setTheme("clair");
    }
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <button onClick={toggleTheme}>
          Basculer vers le thème {theme === "clair" ? "sombre" : "clair"}
        </button>
        <Count />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
