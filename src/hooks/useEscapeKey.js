import React from 'react';

export default function useEscapeKey(fn) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.code !== 'Escape') return;

      fn();
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [fn]);
}
