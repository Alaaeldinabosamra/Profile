import React from "react";

const Popup = ({ textMessage, onClose, onSubmit, userWish, setUserWish }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg text-center relative min-w-[300px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg font-bold text-gray-600 hover:text-gray-800"
        >
          X
        </button>
        <div>{textMessage}</div>

        {textMessage === "The genie is here! Ask for your wishes!" ? (
          <div>
            <textarea
              value={userWish}
              onChange={(e) => setUserWish(e.target.value)}
              placeholder="Enter your wish here..."
              rows="4"
              className="mt-4 w-full p-3 border rounded-lg border-gray-300 text-sm"
            />
            <button
              onClick={onSubmit}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Send
            </button>
          </div>
        ) : (
          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default Popup;
