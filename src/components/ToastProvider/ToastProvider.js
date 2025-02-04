import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(data) {
    const nextToasts = [
      ...toasts,
      Object.assign(data, { id: crypto.randomUUID() }),
    ];

    setToasts(nextToasts);
  }

  function removeToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);

    setToasts(nextToasts);
  }

  function removeAllToasts() {
    setToasts([]);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        removeAllToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
