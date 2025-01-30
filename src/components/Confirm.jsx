import React from 'react';
import { HelpCircle } from 'lucide-react'; // Import the icon

const ConfirmModal = ({ isOpen, onClose, onConfirm, text }) => {
  if (!isOpen) return null; // Render only if the modal is open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-light dark:bg-dark rounded-lg shadow-lg w-[90%] max-w-[400px]">
        {/* Header */}
        <div className="bg-bllue text-white flex items-center p-4 rounded-t-lg">
          <HelpCircle className="w-5 h-5 mr-2" />
          <p className="text-lg font-semibold">Confirm</p>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-dark dark:text-light text-lg text-center">{text}</p>
        </div>

        {/* Footer with Buttons */}
        <div className="flex justify-end space-x-2 p-4">
          <button
            onClick={onConfirm}
            className="bg-bllue text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
