import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import useEscapeKey from '../../hooks/useEscapeKey';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, removeToast, removeAllToasts } =
    React.useContext(ToastContext);

  useEscapeKey(removeAllToasts);

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
