import React from 'react';

function Footer({ dictionary }: { dictionary: any }) {
    return (
        <section id="footer" className="relative text-white w-[80vw] text-[1.2rem] italic m-auto mt-[6rem] mb-[3rem] md:mt-[15rem]
         lg:mt-[30rem] lg:text-[1.5rem] lg:mb-[10rem] text-center">
            <img alt="bg-img-1" src="../../images/background/blue_s.png"
                 className="animate-pulse-slow absolute -z-5 -mt-[4rem] scale-130 opacity-100 lg:m-auto lg:left-0 lg:right-0 lg:top-0 lg:bottom-0 lg:scale-180 "
            />
            <p>
                {dictionary.page.footer.designed_in}
                <a href="https://www.figma.com/" target= "_blank" className="hover:text-[#646DD2]"> Figma </a>
                {dictionary.page.footer.coded_by}
                <a href="" target="_blank" className="hover:text-yellow-400"> WebStorm</a> {dictionary.page.footer.by_yours_truly}
            </p>
            <p>
                {dictionary.page.footer.built_with}
                <a href="https://react.dev/" target="_blank" className="hover:text-blue-500"> React</a>,
                <a href="https://nextjs.org/" target="_blank" className="hover:text-gray-600"> NextJs</a> {dictionary.page.footer.and}
                <a href="https://tailwindcss.com/" target="_blank" className="hover:text-sky-300"> Tailwind CSS</a>.
                {dictionary.page.footer.deployed_with}
            </p>
            <p>
                {dictionary.page.footer.font_text}
            </p>
        </section>
    );
}

export default Footer;