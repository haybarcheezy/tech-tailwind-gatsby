import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Faqs = () => {
  return (
    <div className="py-10 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="p-2">
          <div className="md:flex-row flex flex-col">
            <div className="md:w-1/3 p-4 text-sm">
            <div className="text-base font-semibold leading-6 tracking-wider text-blue-400 uppercase">Frequently Asked Questions</div>
              <div className="font-display mt-2 text-4xl font-semibold leading-10 text-white">
                What seperates us <span className="font-base">from the rest?</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <Accordion allowZeroExpanded={true} className="px-4 py-1">
                <AccordionItem className="mb-2 outline-none">
                  <AccordionItemHeading className="font-base hover:bg-gray-800 hover:border-blue-400 color flex flex-row-reverse px-2 mt-2 text-lg text-white transition duration-150 ease-in-out bg-gray-900 border border-gray-700 rounded-md shadow-md outline-none cursor-pointer">
                    <AccordionItemButton className="accordion__button flex-auto outline-none select-none">
                      <p className="md:pl-4 py-3 pl-0">
                        Who do you work with ?
                      </p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="accordion__panel max-w-3xl mt-4 text-base leading-6 text-gray-400">
                  We work with ambitious clients who want to define the future, not hide from it. 
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="mb-2 outline-none">
                <AccordionItemHeading className="font-base hover:bg-gray-800 hover:border-blue-400 color flex flex-row-reverse px-2 mt-2 text-lg text-white transition duration-150 ease-in-out bg-gray-900 border border-gray-700 rounded-md shadow-md outline-none cursor-pointer">
                    <AccordionItemButton className="accordion__button flex-auto outline-none select-none">
                      <p className="md:pl-4 py-3 pl-0">
                        What is your mindset ?
                      </p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="accordion__panel max-w-3xl mt-4 text-base leading-6 text-gray-400">
                  We work with ambitious clients who want to define the future, not hide from it. Together, we define a bold ambition and achieve extraordinary results that redefine industries.


                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="mb-2 outline-none">
                <AccordionItemHeading className="font-base hover:bg-gray-800 hover:border-blue-400 color flex flex-row-reverse px-2 mt-2 text-lg text-white transition duration-150 ease-in-out bg-gray-900 border border-gray-700 rounded-md shadow-md outline-none cursor-pointer">
                    <AccordionItemButton className="accordion__button flex-auto outline-none select-none">
                      <p className="md:pl-4 py-3 pl-0">
                        How collaborative of a culture do you have ?
                      </p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="accordion__panel max-w-3xl mt-4 text-base leading-6 text-gray-400">
                  It feels different to work with us because our people are unlike any other. We bring a fresh perspective, mutual trust and infectious energy to every client relationship. We are a team of passionate, curious and collaborative people who are committed to delivering extraordinary results.
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="mb-2 outline-none">
                <AccordionItemHeading className="font-base hover:bg-gray-800 hover:border-blue-400 color flex flex-row-reverse px-2 mt-2 text-lg text-white transition duration-150 ease-in-out bg-gray-900 border border-gray-700 rounded-md shadow-md outline-none cursor-pointer">
                    <AccordionItemButton className="accordion__button flex-auto outline-none select-none">
                      <p className="md:pl-4 py-3 pl-0">
                        What drive your innovation ?
                      </p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="accordion__panel max-w-3xl mt-4 text-base leading-6 text-gray-400">
                  We deliver integrated solutions, complementing our capabilities with a curated ecosystem of the world’s leading innovators to achieve better, faster, more enduring results for clients.
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
