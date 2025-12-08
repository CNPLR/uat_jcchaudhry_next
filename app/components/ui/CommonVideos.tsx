import Img from './Img'
import { FaRegPlayCircle } from 'react-icons/fa'
import Para from './Para'
import { useRef, useState } from 'react'

const CommonVideos = ({ para, path, url }: any) => {
     const modelRef = useRef(null)
  const [showModel, setShowModel] = useState(false)
  const showModal = () => {
    setShowModel(true)
  }
  const closeModal = () => {
    setShowModel(false)
  }
  return (
    <div className="w-[270px] md:mr-7 mb-7 relative bg-white">
      <div className="shadow-lg rounded-md overflow-hidden border">
        <div className="cursor-pointer relative" onClick={showModal}>
          <Img style="" path={path} alt={para} />

          {/* Centered Play Button */}
          <button
            className="absolute inset-0 flex items-center justify-center"
            onClick={showModal}
          >
            <FaRegPlayCircle color="#fd7e14" size={40} />
          </button>
        </div>

        <div className="mx-3 overflow-hidden">
          <Para style="my-2 text_over" para={para} />
          <div className="flex justify-between items-center">
            {/* Add any other content you want inside this flex container */}
          </div>
        </div>
      </div>

      {/* Modal Logic */}
      {showModel && (
        <div
          ref={modelRef}
          id="popup-modal"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-fit max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-\[-20px] top-\[-20px] bg-[#490099] text-white p-2 rounded-full"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              {/* Video Content */}
              <div
                className="p-4 md:p-5 text-center mx-auto videoModal"
                dangerouslySetInnerHTML={{ __html: url }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommonVideos