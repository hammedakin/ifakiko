'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

const WorkingProcess = () => {

      const faqs = [
            {
                  number: "01",
                  question: "Is the knowledge on IFA Kiko open to everyone?",
                  answer:
                        "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility.",
            },
            {
                  number: "02",
                  question: "Is the knowledge on IFA Kiko open to everyone?",
                  answer:
                        "Knowledge on IFA Kiko is selectively accessible, ensuring respect for sacred traditions while providing guidance to sincere seekers.",
            },
            {
                  number: "03",
                  question: "Is the knowledge on IFA Kiko open to everyone?",
                  answer:
                        "While much is shared, deeper teachings are protected and require proper initiation or guidance from elders.",
            },
            {
                  number: "04",
                  question: "Is the knowledge on IFA Kiko open to everyone?",
                  answer:
                        "Openness is balanced with responsibility. Some teachings are for general audiences, others are reserved for those who are initiated.",
            },
            {
                  number: "05",
                  question: "Is the knowledge on IFA Kiko open to everyone?",
                  answer:
                        "IFA Kiko upholds sacred integrity. Access depends on one's level of commitment and respect for cultural protocols.",
            },
            {
                  number: "06",
                  question: "Is the knowledge on IFA Kiko open to everyone?",
                  answer:
                        "No. The knowledge is protected by elders and shared with those who approach with reverence and ethical intent.",
            },
      ];

      const [activeIndexes, setActiveIndexes] = useState([0]);

      const toggleFAQ = (index) => {
            setActiveIndexes((prev) =>
                  prev.includes(index)
                        ? prev.filter((i) => i !== index)
                        : [...prev, index]
            );
      };


      return (
            <section className="bg-white py-16 font-space-grotesk margins">

                  <div className="mb-12">
                        <div className="flex md:flex-row flex-col gap-5">
                              <p className="bg-secondary-200 p-1 rounded-md font-medium text-4xl">
                                    Our Working Process
                              </p>
                              <p className="w-full md:w-1/3 font-normal text-sm">
                                    Your questions answered with clarity, care, and cultural respect.
                              </p>
                        </div>
                  </div>
                  <div className="space-y-4">
                        {faqs.map((faq, index) => {
                              const isActive = activeIndexes.includes(index);
                              return (
                                    <div
                                          key={index}
                                          className={`rounded-[45px] px-5 md:px-15 py-6 shadow-md border-black border-b-4 border flex flex-col gap-4 transition-all duration-300 ${ isActive ? "bg-secondary-100 text-black" : "bg-[#F3F3F3] text-black"
                                                }`}
                                    >
                                          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                                                <div className="flex items-center gap-4">
                                                      <span className="font-medium text-6xl">{faq.number}</span>
                                                      <h3 className="max-w-md font-medium text-3xl leading-snug">
                                                            {faq.question}
                                                      </h3>
                                                </div>
                                                <hr className="my-6 border-black" />
                                                <div className="flex justify-center items-center bg-white border rounded-full w-13 h-13 text-black text-2xl">
                                                      {isActive ? <FaMinus /> : <FaPlus />}
                                                </div>
                                          </div>
                                          {isActive && faq.answer && (
                                                <p className="pt-4 border-t text-sm leading-relaxed">
                                                      {faq.answer}
                                                </p>
                                          )}
                                    </div>
                              );
                        })}
                  </div>
            </section>
      );
};

export default WorkingProcess;