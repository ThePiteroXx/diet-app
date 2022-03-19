import { useCallback, useContext, useState, createContext } from 'react';

const ErrorContext = createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const dispatchError = useCallback(
    (message) => {
      if (error) return;
      setError(message);
      setTimeout(() => {
        setError('');
      }, 6000);
    },
    [error]
  );

  return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  if (!Object.keys(errorContext).length) {
    throw Error('useError needs to be used inside ErrorContext');
  }

  return errorContext;
};
