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
          <div className="flex flex-col md:flex-row">
            <div className="p-4 text-sm md:w-1/3">
            <div className="text-base font-semibold leading-6 tracking-wider text-blue-400 uppercase">How our service works</div>
              <div className="mt-2 text-4xl font-semibold leading-10 text-white font-display">
                Frequently asked <span className="font-base">Questions</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <Accordion allowZeroExpanded={true} className="px-4 py-1">
                <AccordionItem className="mb-2 outline-none">
                  <AccordionItemHeading className="flex flex-row-reverse px-2 mt-2 text-lg text-white transition duration-150 ease-in-out bg-gray-900 border border-gray-700 rounded-md shadow-md outline-none cursor-pointer font-base hover:bg-gray-800">
                    <AccordionItemButton className="flex-auto outline-none select-none accordion__button">
                      <p className="py-3 pl-0 md:pl-4">
                        How to install it with windows server ?
                      </p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="max-w-3xl mt-4 text-base leading-6 text-gray-400 accordion__panel">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    Mollitia temporibus doloremque non eligendi unde ipsam?
                    Voluptatibus, suscipit deserunt quidem delectus perferendis
                    velit molestias, veritatis officia fugiat cumque quaerat
                    earum adipisci?
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="mb-2 outline-none">
                <AccordionItemHeading className="flex flex-row-reverse px-2 mt-2 text-lg text-white transition duration-150 ease-in-out bg-gray-900 border border-gray-700 rounded-md shadow-md outline-none cursor-pointer font-base hover:bg-gray-800">
                    <AccordionItemButton className="flex-auto outline-none select-none accordion__button">
                      <p className="py-3 pl-0 md:pl-4">
                        How to install it with windows server ?
                      </p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="max-w-3xl mt-4 text-base leading-6 text-gray-400 accordion__panel">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    Mollitia temporibus doloremque non eligendi unde ipsam?
                    Voluptatibus, suscipit deserunt quidem delectus perferendis
                    velit molestias, veritatis officia fugiat cumque quaerat
                    earum adipisci?
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="mb-2 outline-none">
                <AccordionItemHeading className="flex flex-row-reverse px-2 mt-2 text-lg text-white transition duration-150 ease-in-out bg-gray-900 border border-gray-700 rounded-md shadow-md outline-none cursor-pointer font-base hover:bg-gray-800">
                    <AccordionItemButton className="flex-auto outline-none select-none accordion__button">
                      <p className="py-3 pl-0 md:pl-4">
                        How to install it with windows server ?
                      </p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="max-w-3xl mt-4 text-base leading-6 text-gray-400 accordion__panel">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    Mollitia temporibus doloremque non eligendi unde ipsam?
                    Voluptatibus, suscipit deserunt quidem delectus perferendis
                    velit molestias, veritatis officia fugiat cumque quaerat
                    earum adipisci?
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="mb-2 outline-none">
                <AccordionItemHeading className="flex flex-row-reverse px-2 mt-2 text-lg text-white transition duration-150 ease-in-out bg-gray-900 border border-gray-700 rounded-md shadow-md outline-none cursor-pointer font-base hover:bg-gray-800">
                    <AccordionItemButton className="flex-auto outline-none select-none accordion__button">
                      <p className="py-3 pl-0 md:pl-4">
                        How to install it with windows server ?
                      </p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="max-w-3xl mt-4 text-base leading-6 text-gray-400 accordion__panel">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    Mollitia temporibus doloremque non eligendi unde ipsam?
                    Voluptatibus, suscipit deserunt quidem delectus perferendis
                    velit molestias, veritatis officia fugiat cumque quaerat
                    earum adipisci?
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
