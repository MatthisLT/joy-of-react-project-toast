import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, removeToast, removeAllToasts } =
    React.useContext(ToastContext);

  React.useEffect(() => {
    function handleKeyDown(e) {
      console.log('test');
      if (e.code !== 'Escape') return;

      removeAllToasts();
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [removeAllToasts]);

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            variant={variant}
            handleDismiss={() => {
              removeToast(id);
            }}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
