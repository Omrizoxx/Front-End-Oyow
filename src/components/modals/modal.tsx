// src/components/Modal.tsx
import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button
                onClick={onClose}
                className="text-gray-500 hover:text-red-500 text-lg"
            >
                ✖
            </button>
            </div>
            {children}
        </div>
        </div>
    );
};

export default Modal;
