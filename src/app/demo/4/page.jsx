"use client";

import { useReducer } from "react";

const initialState = {
  fields: {
    name: "",
    email: "",
    cgu: false,
  },
  submitting: false,
  error: undefined,
  success: false,
};

const reducer = (state, { action, key, value }) => {
  switch (action) {
    case "SET_FORM_STATE":
      return { ...state, [key]: value };
    case "SET_FIELD_VALUE":
      return { ...state, fields: { ...state.fields, [key]: value } };
  }
};

export default function App() {
  // Gérer l'état du formulaire avec useState puis refacto avec useReducer
  const [form, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ action: "SET_FORM_STATE", key: "submitting", value: true });

    window.setTimeout(() => {
      dispatch({ action: "SET_FORM_STATE", key: "error", value: null });
      dispatch({ action: "SET_FORM_STATE", key: "success", value: true });
      dispatch({ action: "SET_FORM_STATE", key: "submitting", value: false });
    }, 500);
  };

  return (
    <div>
      <h1>Formulaire d'inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={(e) =>
              dispatch({
                action: "SET_FIELD_VALUE",
                key: "name",
                value: e.target.value,
              })
            }
            value={form.fields.name}
            required
            placeholder="Your name"
          />
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            onChange={(e) =>
              dispatch({
                action: "SET_FIELD_VALUE",
                key: "email",
                value: e.target.value,
              })
            }
            value={form.fields.email}
            autoComplete="email"
            required
            placeholder="Email Address"
          />
          <button type="submit">Submit</button>
        </div>
        <div>
          <label htmlFor="cgu">CGU</label>
          <input
            id="cgu"
            name="cgu"
            type="checkbox"
            onChange={(e) =>
              dispatch({
                action: "SET_FIELD_VALUE",
                key: "cgu",
                value: e.target.checked,
              })
            }
            checked={form.fields.cgu}
          />
          <p>I agree to everything.</p>
        </div>
      </form>
      {form.submitting && <p>Submitting...</p>}
      {form.error && <p>{form.error}</p>}
      {form.success && <p>Success!</p>}
    </div>
  );
}
