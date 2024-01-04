import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  // children is the component that we want to wrap inside of our context provider
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === {addBlogPost: (dispatch) => {return () => {}}}
    const boundActions = {};
    for (let key in actions) {
      // key === 'addBlogPost'
      // actions[key] === (dispatch) => {return () => {}}
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
