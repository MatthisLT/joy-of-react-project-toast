import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import { ToastContext } from '../ToastProvider';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
const DEFAULT_MESSAGE = '';
const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

function ToastPlayground() {
  const [message, setMessage] = React.useState(DEFAULT_MESSAGE);
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT);
  const { toasts, addToast } = React.useContext(ToastContext);

  function handleSubmit(e) {
    e.preventDefault();

    addToast({
      variant,
      message,
    });

    setMessage(DEFAULT_MESSAGE);
    setVariant(DEFAULT_VARIANT);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && <ToastShelf />}

      <form
        className={styles.controlsWrapper}
        onSubmit={handleSubmit}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;

              return (
                <label htmlFor={id} key={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                    onChange={(e) => {
                      setVariant(e.target.value);
                    }}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
