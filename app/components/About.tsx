import React from 'react';

export function About() {
    return (
        <section id="about" className="grid-cols-1 md:grid-cols-2 w-[90vw] mt-[5rem] m-auto">
            <img alt-="about-me-img" src="../../images/about-me-image.png" className="mb-[1em]"/>
            <div className="gap-[4rem]">
                <div className="flex bg-[#646DD2] rounded-md items-center px-4 py-2 mb-[1em]">
                        <p className="text-[1.8rem] text-white font-bold ml-auto mr-5">
                            My Story
                        </p>
                        <img className="w-40 h-40 object-cover rounded-full" src="../../images/caio-profile-half.jpeg" alt="profile-picture"/>
                </div>
                <div className="text-white text-[1.3rem] text-justify">
                    <p className="text-left font-bold mb-2 text-[2rem]">
                        A little bit about me
                    </p>

                    <p className="">
                        I&#39;m Caio Oliveira,
                        a <i>full-stack</i> Developer with solid experience in front-end development (React, JavaScript) and back-end (Python/Django).
                    </p>
                    <p className="mt-2 mb-2">
                        Proficient in developing responsive and modern web applications. Seeking challenging roles
                        in innovative projects and a collaborative work environment.
                    </p>
                    <p className="">
                        Weather you seek a service or a problem solver employer,
                        <b className="text-[#C9AA71]"> I am the solution.</b>
                    </p>
                </div>
            </div>
        </section>
    );
}
