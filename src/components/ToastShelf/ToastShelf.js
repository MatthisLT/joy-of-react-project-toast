import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  if (toasts.length <= 0) return;

  return (
    <ol className={styles.wrapper}>
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
