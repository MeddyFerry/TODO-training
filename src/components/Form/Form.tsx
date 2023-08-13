import React from "react";
import { useReducer } from "react";

interface State {
  username: string;
  password: string;
  email: string;
  errors: Record<string, string>;
}

type Action =
  | { type: "SET_FIELD"; field: keyof State; value: string }
  | { type: "SET_ERRORS"; errors: Record<string, string> };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    password: "",
    email: "",
    errors: {},
  });
  function handleSubmit(state: State, dispatch: React.Dispatch<Action>) {
    const errors: Record<string, string> = {};
    if (state.username.length < 3) {
      console.log(
        (errors.username = "Username must be at least 3 characters long")
      );
    }
    if (state.password.length < 6) {
      console.log(
        (errors.password = "Password must be at least 6 characters long")
      );
    }
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors });
    } else {
      console.log("Form submitted");
    }
  }

  return (
    <div className="p-8 bg-gray-100 flex justify-center items-center min-h-screen">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-96"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(state, dispatch);
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border rounded-md"
            value={state.username}
            onChange={(e) => {
              dispatch({
                type: "SET_FIELD",
                field: "username",
                value: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            value={state.password}
            onChange={(e) => {
              dispatch({
                type: "SET_FIELD",
                field: "password",
                value: e.target.value,
              });
            }}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(state, dispatch);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
