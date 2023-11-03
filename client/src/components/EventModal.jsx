import React from "react";

const EventModal = ({
  eventModalContent,
  showEventModal,
  setShowEventModal,
}) => {
  return showEventModal ? (
    <div className="flex flex-col pb-10 text-slate-800 bg-neutral-100 min-w-[250px] border rounded-xl max-h-96 max-w-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl z-20 overflow-y-auto scroll-pb-10">
      <div className="flex flex-1 justify-end mx-5 my-3">
        <button
          onClick={() => setShowEventModal(false)}
          className="p-1 border border-slate-100 rounded-md hover:bg-slate-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
          </svg>
        </button>
      </div>
      <div className="px-10">
        <h2 className="text-lg font-bold mb-3">{eventModalContent.title}</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 ">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 shrink-0"
            >
              <path
                d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#000000" />
              <rect
                x="10.5"
                y="12"
                width="3"
                height="3"
                rx="0.5"
                fill="#000000"
              />
              <rect
                x="15"
                y="12"
                width="3"
                height="3"
                rx="0.5"
                fill="#000000"
              />
            </svg>
            <p className="text-left font-semibold text-orange-700 text-sm">
              {eventModalContent.date}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100px"
              height="100px"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
              xmlSpace="preserve"
              className="w-5 h-5 shrink-0"
            >
              <path
                fill="#231F20"
                d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
              />
            </svg>
            <p className="text-left font-semibold text-sm">
              {eventModalContent.place}
            </p>
          </div>
          <p className="text-left text-sm">{eventModalContent.description}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default EventModal;
