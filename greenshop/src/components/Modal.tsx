import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black opacity-50" />
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-white rounded-lg overflow-hidden shadow-lg z-10"
        onClick={(e) => e.stopPropagation()}
    >
        <div className="p-4">
          <h2 id="modal-title" className="text-lg font-semibold">{title}</h2>
          <div className="mt-2">{children}</div>
        </div>
        <div className="p-4 border-t">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            aria-label="Close modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;