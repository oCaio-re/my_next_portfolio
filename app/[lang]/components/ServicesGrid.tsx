import { TbWorld } from "react-icons/tb";
import { PiLightbulbBold } from "react-icons/pi";
import { LuSmartphone } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import React from "react";

export default function ServicesGrid({ dictionary }: { dictionary: any }) {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ServiceCard
                    title={dictionary.page.services.grid.website.title}
                    description={dictionary.page.services.grid.website.description}
                    Icon={TbWorld}
                />
                <ServiceCard
                    title={dictionary.page.services.grid.branding.title}
                    description={dictionary.page.services.grid.branding.description}
                    Icon={PiLightbulbBold}
                />
                <ServiceCard
                    title={dictionary.page.services.grid.ecommerce.title}
                    description={dictionary.page.services.grid.ecommerce.description}
                    Icon={LuSmartphone}
                />
                <ServiceCard
                    title={dictionary.page.services.grid.seo.title}
                    description={dictionary.page.services.grid.seo.description}
                    Icon={FaGoogle}
                />
            </div>
        </div>
    );
}

type ServiceCardProps = {
    title: string;
    description: string;
    Icon: React.ElementType;
    marginTop?: string;
};

function ServiceCard({ title, description, Icon }: ServiceCardProps) {
    return (
        <div className="relative group flex flex-col justify-between p-6 sm:p-8 border border-white/15 bg-white/5 backdrop-blur-xl rounded-3xl
        overflow-hidden transition-all duration-500 ease-in-out hover:border-[#609BE3] hover:bg-white/10 shadow-xl hover:shadow-2xl hover:shadow-[#609BE3]/20">
            <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#609BE3]/20 to-[#646DD2]/20 border border-white/15 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#609BE3]/50 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#609BE3] group-hover:text-[#C9AA71] transition-colors" />
                </div>
                <h3 className="text-white font-extrabold text-xl sm:text-2xl mb-3 group-hover:text-[#609BE3] transition-colors">
                    {title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                    {description}
                </p>
            </div>
            <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-2 text-xs font-mono font-semibold text-[#C9AA71]">
                <span>SOB MEDIDA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9AA71]" />
                <span>EXCELÊNCIA TÉCNICA</span>
            </div>
        </div>
    );
}
