import { useState, useEffect } from 'react';
import '../styles/Toast.css';

let toastId = 0;
const toasts = [];
let listeners = [];

export const showToast = (message, type = 'info') => {
  const id = ++toastId;
  toasts.push({ id, message, type });
  listeners.forEach(listener => listener([...toasts]));

  setTimeout(() => {
    const index = toasts.findIndex(t => t.id === id);
    if (index > -1) {
      toasts.splice(index, 1);
      listeners.forEach(listener => listener([...toasts]));
    }
  }, 3000);
};

export const ToastContainer = () => {
  const [toastList, setToastList] = useState([]);

  useEffect(() => {
    listeners.push(setToastList);
    return () => {
      listeners = listeners.filter(l => l !== setToastList);
    };
  }, []);

  return (
    <div className="toast-container">
      {toastList.map(toast => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      ))}
    </div>
  );
};