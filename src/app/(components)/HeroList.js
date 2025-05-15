import React from 'react';

const HeroList = () => {

      const tagLeft = [
            { text: "Orisa Studies", color: "bg-[#3333FF]", top: "top-0", left: "left-60" },
            { text: "Common Themes in Odu", color: "bg-[#17C452]", top: "top-16", left: "left-50" },
            { text: "Digital Ifá: Preserving Culture in the Age of A", color: "bg-[#E2B93B]", top: "top-32", left: "left-20" },
      ];

      const tagRight = [
            { text: "Ritual Knowledge & Sacred Practice", color: "bg-[#56CCF2]", top: "top-0", left: "left-[450px]" },
            { text: "Odu Ifá & Verse Interpretation", color: "bg-[#EB5757]", top: "top-16", left: "left-[550px]" },
            { text: "The Lineages of Ifá: Ègbá, Ìjẹ̀bú, Òyó, Ìfẹ̀", color: "bg-[#F2994A]", top: "top-32", left: "left-[600px]" },
      ];

      return (
            <section className="py-16 font-lato text-[#0D173B] text-xl text-center margins">
                  <div className="hidden lg:block">

                        <div className="flex">
                              <div className="relative flex flex-col h-68">

                                    {tagLeft.map((tag, index) => (
                                          <div
                                                key={index}
                                                className={`absolute ${ tag.top } ${ tag.left } ${ tag.color } w-fit text-nowrap px-4 py-2 rounded-full font-normal shadow-md`}
                                          >
                                                {tag.text}
                                          </div>
                                    ))}
                              </div>
                              <div className="relative flex flex-col h-68">

                                    {tagRight.map((tag, index) => (
                                          <div
                                                key={index}
                                                className={`absolute ${ tag.top } ${ tag.left } ${ tag.color } w-fit text-nowrap px-4 py-2 rounded-full font-medium shadow-md`}
                                          >
                                                {tag.text}
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>


                  <div className="lg:hidden block">
                        <div className="flex flex-col items-center gap-6 w-full">
                              {[...tagLeft, ...tagRight]?.map((tag, index) => (
                                    <div
                                          key={index}
                                          className={`${ tag.color } w-fit text-nowrap px-4 py-2 rounded-full font-medium shadow-md`}
                                          style={{
                                                fontSize: 'clamp(14px, 3vw, 20px)',
                                          }}
                                    >
                                          {tag.text}
                                    </div>
                              ))}
                        </div>
                  </div>

            </section>
      );
};

export default HeroList;