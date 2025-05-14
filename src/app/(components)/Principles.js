import { FaCheckCircle } from "react-icons/fa";

const Principles = () => {

      const principles = [
            {
                  title: "🧙🏾‍♂ RESPECT FOR LINEAGE",
                  description:
                        "IFA Kiko was co-created with input from traditional priests, lineage heads, and spiritual leaders—not just tech experts. Every *verse*, feature, and function is spiritually validated before implementation.",
            },
            {
                  title: "🧠 A LIVING, EVOLVING LIBRARY",
                  description:
                        "IFA Kiko is not a static archive or data bank—it’s a sacred living space that grows through spiritual contribution. New verses are added by recognized priests as part of an expanding oral tradition.",
            },
            {
                  title: "🌿 LINEAGE IS IDENTITY",
                  description:
                        "In Ifa tradition, the source of a verse is just as important as the verse itself. Our platform preserves this identity by linking each piece of content to the priest, their teacher, and their ancestral root.",
            },
      ];

      return (

            <section className="bg-white px-6 md:px-16 py-20 font-josefin-sans">
                  <div className="relative space-y-16 mx-auto max-w-7xl">
                        {principles.map((item, index) => {
                              const isCenter = index === principles.length - 1;
                              return (
                                    <div
                                          key={index}
                                          className={`flex ${ isCenter
                                                ? "justify-center"
                                                : index % 2 === 1
                                                      ? "flex-col md:flex-row-reverse items-center md:justify-between"
                                                      : "flex-col md:flex-row items-center md:justify-between"
                                                } gap-6 md:gap-12`}
                                    >
                                          <div className="bg-white shadow-md p-6 border border-gray-100 rounded-xl w-full max-w-xl">
                                                <div className="flex items-start gap-3">
                                                      <FaCheckCircle className="mt-1 text-green-500 shrink-0" />
                                                      <div>
                                                            <h4 className="mb-1 font-semibold text-[#0A0A26] text-base">
                                                                  {item.title}
                                                            </h4>
                                                            <p className="font-normal text-gray-700 text-sm leading-relaxed">
                                                                  {item.description}
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              );
                        })}
                  </div>
            </section>
      );
};

export default Principles;