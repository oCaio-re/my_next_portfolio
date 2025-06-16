import React from 'react';

export function About() {
    return (
        <section id="about" className="relative grid-cols-1 md:grid-cols-2 w-[90vw] mt-[5rem] m-auto
        md:w-[70vw] md:flex md:mt-[15rem] md:justify-between
        ">
            <img alt="about-me-img" src="../../images/about-me-image.png" className="mb-[1em] md:w-[40%]"/>
            <div className="gap-[4rem] md:w-[45%]">
                <div className="flex bg-[#646DD2] rounded-md items-center px-4 py-2 mb-[1em] md:rounded-4xl">
                        <p className="text-[1.8rem] text-white font-bold ml-auto mr-5 md:text-[4rem] md:mr-[3rem]">
                            My Story
                        </p>
                        <img className="w-40 h-40 object-cover rounded-full" src="../../images/caio-profile-half.jpeg" alt="profile-picture"/>
                </div>
                <div className="text-white text-[1.3rem] text-justify md:text-[1.4rem]">
                    <img alt="bg-img-1" src="../../images/background/yellow_and_purple_b.png"
                         className="absolute -z-5 top-0 left-0 w-auto h-auto min-w-full min-h-full object-cover scale-125 mt-[5rem] "
                    />
                    <p className="text-left font-bold mb-2 text-[2rem] md:text-[3rem]">
                        A little bit about me
                    </p>

                    <p className="md:mt-3">
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
