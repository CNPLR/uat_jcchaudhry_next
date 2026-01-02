import { useState, RefObject } from "react";
import CountriesName from "./CountriesName";
import SmallButton from "./SmallButton";
import { useRouter } from 'next/navigation';


interface CountryModelProps {
  closeModal: () => void;
  modelRef: RefObject<HTMLDivElement>;
}

export default function CountryModel({ closeModal, modelRef }: CountryModelProps) {
  const [countries, setCountries] = useState<string>("");

const router = useRouter();

  const next = () => {
    if (countries === "noCountry" || countries === "") {
      return alert("Please Select Country");
    }
    router.push(`/numerology-consultation-price?country=${countries}`);
  };

  return (
    <>
      <div
        id="default-modal"
        ref={modelRef}
        tabIndex={-1}
        aria-hidden="true"
        className="hidden fixed inset-0 z-50 justify-center items-center w-full h-full bg-black/50"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative calBg shadow rounded-lg">
            <div className="flex items-center justify-between md:px-5 md:pt-5 rounded-t dark:border-gray-600">
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
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
            </div>

            <div className="p-4 md:p-5 space-y-4 text-center">
              <CountriesName
                value={countries}
                onChange={(e: any) => setCountries(e.target.value)}
                text="Select your Country to know the price"
              />

              <SmallButton
                onClick={next}
                style="mx-auto cursor-pointer"
                text="Next"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
