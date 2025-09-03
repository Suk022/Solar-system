import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root') || (() => {
  const el = document.createElement('div');
  el.id = 'modal-root';
  document.body.appendChild(el);
  return el;
})();

export default function ModalPortal({ children }) {
  return createPortal(children, modalRoot);
} 