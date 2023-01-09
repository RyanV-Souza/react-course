import React from "react";

const useLocalStorage = (key, initial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);

    return local ?? initial;
  });

  React.useEffect(() => {
    window.localStorage(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
