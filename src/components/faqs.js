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
    <div className="pt-10 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="p-2 bg-gray-100 rounded">
          <div className="flex flex-col md:flex-row">
            <div className="p-4 text-sm md:w-1/3">
              <div className="text-3xl leading-tight">
                Frequently asked <span className="font-medium">Questions</span>
              </div>
              <div className="my-2">Wondering how our service works ?</div>
              <div className="text-xs text-gray-600">
                Dive into our FAQ for more details
              </div>
            </div>
            <div className="md:w-2/3">
              <Accordion allowZeroExpanded={true} className="px-4 py-1">
                <AccordionItem className="mb-2 outline-none">
                  <AccordionItemHeading className="flex flex-row-reverse px-2 mt-2 text-lg font-medium text-black text-gray-800 bg-white rounded-md shadow-md outline-none cursor-pointer hover:bg-white">
                    <AccordionItemButton className="flex-auto outline-none accordion__button">
                    <p className="py-3 pl-0 md:pl-4">How to install it with windows server ?</p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="p-4 mb-5 text-sm antialiased text-left whitespace-normal slidein">
                  Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit
                    Mollitia temporibus doloremque non eligendi unde ipsam?
                    Voluptatibus, suscipit deserunt quidem delectus perferendis
                    velit molestias, veritatis officia fugiat cumque quaerat
                    earum adipisci?
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="mb-2 outline-none">
                  <AccordionItemHeading className="flex flex-row-reverse px-2 mt-2 text-lg font-medium text-black text-gray-800 bg-white rounded-md shadow-md outline-none cursor-pointer hover:bg-white">
                    <AccordionItemButton className="flex-auto outline-none accordion__button">
                    <p className="py-3 pl-0 md:pl-4">How to install it with windows server ?</p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="p-4 mb-5 text-sm antialiased text-left whitespace-normal">
                  Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit
                    Mollitia temporibus doloremque non eligendi unde ipsam?
                    Voluptatibus, suscipit deserunt quidem delectus perferendis
                    velit molestias, veritatis officia fugiat cumque quaerat
                    earum adipisci?
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="mb-2 outline-none">
                  <AccordionItemHeading className="flex flex-row-reverse px-2 mt-2 text-lg font-medium text-black text-gray-800 bg-white rounded-md shadow-md outline-none cursor-pointer hover:bg-white">
                    <AccordionItemButton className="flex-auto outline-none accordion__button">
                    <p className="py-3 pl-0 md:pl-4">How to install it with windows server ?</p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="p-4 mb-5 text-sm antialiased text-left whitespace-normal">
                  Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit
                    Mollitia temporibus doloremque non eligendi unde ipsam?
                    Voluptatibus, suscipit deserunt quidem delectus perferendis
                    velit molestias, veritatis officia fugiat cumque quaerat
                    earum adipisci?
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="mb-2 outline-none">
                  <AccordionItemHeading className="flex flex-row-reverse px-2 mt-2 text-lg font-medium text-black text-gray-800 bg-white rounded-md shadow-md outline-none cursor-pointer hover:bg-white">
                    <AccordionItemButton className="flex-auto outline-none accordion__button">
                      <p className="py-3 pl-0 md:pl-4">How to install it with windows server ?</p>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="p-4 mb-5 text-sm antialiased text-left whitespace-normal accordion__panel">
                  Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit
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
