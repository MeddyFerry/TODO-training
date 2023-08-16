import React, { useContext, useReducer } from "react";
import ThemeContext from "../Theme/ThemeContext";

interface CounterState {
  count: number;
}

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

function reducer(state: CounterState, action: Action): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      throw new Error();
  }
}

function Count() {
  const { theme } = useContext(ThemeContext); // Pas besoin d'assertion non-null maintenant

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <div
      className={`container ${
        theme === "sombre" ? "bg-gray-900" : "bg-gray-100"
      } mx-auto p-4`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-xl mb-4">
          Count: <span className="font-bold">{state.count}</span>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "INCREMENT" });
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch({ type: "DECREMENT" });
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Count;
