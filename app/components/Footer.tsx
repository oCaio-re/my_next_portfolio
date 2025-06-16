import React from 'react';

function Footer() {
    return (
        <section id="footer" className="relative text-white w-[80vw] text-[1.2rem] italic m-auto mt-[6rem] mb-[3rem]
         md:mt-[20rem] md:text-[1.5rem]">
            <img alt="bg-img-1" src="../../images/background/blue_s.png"
                 className="absolute -z-5 -mt-[4rem] scale-130 opacity-90"
            />
            <p>
                Loosely designed in
                <a href="https://www.figma.com/" target= "_blank" className="hover:text-[#646DD2]"> Figma </a>
                and coded in
                <a href="" target="_blank" className="hover:text-yellow-400"> WebStorm</a> by yours truly.
            </p>
            <p>
                Built with
                <a href="https://react.dev/" target="_blank" className="hover:text-blue-500"> React</a>,
                <a href="https://nextjs.org/" target="_blank" className="hover:text-gray-600"> NextJs</a> and
                <a href="https://tailwindcss.com/" target="_blank" className="hover:text-sky-300"> Tailwind CSS</a>.
                Deployed with DigitalOcean
            </p>
            <p>
                All text is set in the DM Sans typeface.
            </p>
        </section>
    );
}

export default Footer;