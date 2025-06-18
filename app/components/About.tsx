import React from 'react';

export function About() {
    return (
        <section id="about" className="relative grid-cols-1 lg:grid-cols-2 w-[90vw] mt-[5rem] m-auto md:mt-[15rem]
        lg:w-[70vw] lg:flex lg:mt-[15rem] lg:justify-between
        ">
            <img alt="about-me-img" src="../../images/about-me-image.png" className="mb-[1em] lg:w-[40%]"/>
            <div className="gap-[4rem] lg:w-[45%]">
                <div className="flex bg-[#646DD2] rounded-lg items-center px-4 py-2 mb-[1em] lg:rounded-4xl">
                        <p className="text-[1.8rem] text-white font-bold ml-auto mr-5 lg:text-[4rem] lg:mr-[3rem]">
                            My Story
                        </p>
                        <img className="w-40 h-40 object-cover rounded-full" src="../../images/caio-profile-half.jpeg" alt="profile-picture"/>
                </div>
                <div className="text-white text-[1.3rem] text-justify lg:text-[1.4rem]">
                    <img alt="bg-img-1" src="../../images/background/yellow_and_purple_b.png"
                         className="absolute -z-5 top-0 left-0 w-auto h-auto min-w-full min-h-full object-cover scale-125 mt-[5rem] lg:-mt-[30rem]
                          lg:ml-[20rem] lg:scale-140"
                    />
                    <p className="text-left font-bold mb-2 text-[2rem] lg:text-[3rem]">
                        A little bit about me
                    </p>

                    <p className="lg:mt-3">
                        I&#39;m Caio Oliveira,<br/>
                        a <i>full-stack</i> Developer with solid experience in front-end development <i>(React/NextJS, TypeScript)</i> and back-end <i>(Python/Django)</i>.
                    </p>
                    <p className="mt-2 mb-2">
                        Studied Computer Science at <b>FCUP</b>. Proficient in developing responsive and modern web applications. Seeking challenging roles
                        in innovative projects and a collaborative work environment.
                    </p>
                    <p className="">
                        Weather you look for a service or a problem solver employer,
                        <b className="text-[#C9AA71]"> I am the solution.</b>
                    </p>
                </div>
            </div>
        </section>
    );
}
