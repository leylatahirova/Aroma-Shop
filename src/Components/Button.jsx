import React from 'react';
import '../styles/Button.sass';

export default function Button({ children }) {
  return (
    <button className="button">
      {children}
    </button>
  );
}