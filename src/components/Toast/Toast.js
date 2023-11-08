import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, handleDismiss, children }) {
  const classes = [styles.toast, styles[variant]].join(' ');
  const IconTag = ICONS_BY_VARIANT[variant];

  return (
    <div className={classes}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {children}
      </p>
      <button
        aria-label="Dimiss message"
        aria-live="off"
        className={styles.closeButton}
        onClick={handleDismiss}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
