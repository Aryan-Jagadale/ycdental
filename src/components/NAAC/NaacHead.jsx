import React, { useState } from 'react';
import NaacSSR from './NaacSSR';
import logo from "../../assets/images/NAAC/download logo.png"
import "../../style/NAAC/naac.css"

function NaacHead() {

    const [selectedOption, setSelectedOption] = useState(1)
    const [isOpen, setIsOpen] = useState(true);
    const options = ['SSR', 'IIQA', 'DVV', 'IQAC', 'SSR Links'];

    return (

        <div className="flex flex-col md:flex-row px-4 md:px-10 py-8">
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                <div className="relative py-3">
                    <button
                        type="button"
                        className="w-full h-12 px-4 text-xl text-left bg-[#800000] text-[#FFD900] font-fam shadow-sm appearance-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        HEADS
                    </button>
                    <div
                        className={`${isOpen ? 'block' : 'hidden'
                            } w-full border-b-2 py-1 mt-1 bg-[#800000] border focus:outline-none sm:text-sm`}
                    >
                        {options.map((option, i) => (
                            <button
                                bgImg={logo}
                                key={i}
                                type="button"

                                className="block border-b-2 text-xl w-full px-4 py-3 text-left text-[#FFD900] font-fam hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                onClick={() => {
                                    setSelectedOption(i + 1);
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container-two w-full md:w-2/3 px-4">
                {selectedOption === 1 && <NaacSSR />}
                {selectedOption === 2 && <div></div>}
                {selectedOption === 3 && <div></div>}
                {selectedOption === 4 && <div></div>}
                {selectedOption === 5 && <div></div>}
            </div>
        </div>
    );
}

export default NaacHead
