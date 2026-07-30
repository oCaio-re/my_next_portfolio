import React from 'react';

function Footer({ dictionary }: { dictionary: any }) {
    return (
        <footer id="footer" className="relative text-gray-400 text-xs border-t border-white/10 bg-black py-8 px-4 text-center">
            <div className="container mx-auto max-w-3xl space-y-2.5 font-light">
                <p>
                    {dictionary.page.footer.designed_in}
                    <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#646DD2] font-semibold text-gray-200 transition-colors"> Figma </a>
                    {dictionary.page.footer.coded_by}
                    <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9AA71] font-semibold text-gray-200 transition-colors"> WebStorm</a> {dictionary.page.footer.by_yours_truly}
                </p>
                <p>
                    {dictionary.page.footer.built_with}
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-[#609BE3] font-semibold text-gray-200 transition-colors"> React</a>,
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold text-gray-200 transition-colors"> Next.js</a> {dictionary.page.footer.and}
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 font-semibold text-gray-200 transition-colors"> Tailwind CSS</a>.
                    {dictionary.page.footer.deployed_with}
                </p>
                <p className="text-gray-500 text-xs pt-2">
                    {dictionary.page.footer.font_text}
                </p>
            </div>
        </footer>
    );
}

export default Footer;