import { TbWorld } from "react-icons/tb";
import { PiLightbulbBold } from "react-icons/pi";
import { LuSmartphone } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";

export default function ServicesGrid() {
    return (
        <div className="flex flex-col px-4">

            <div className="grid-cols-1 flex flex-col gap-7">
                <ServiceCard
                    title="Website"
                    description="Building custom websites with a focus on user experience, responsive design, and modern technologies."
                    Icon={TbWorld}
                />
                <ServiceCard
                    title="Branding"
                    description="Creating cohesive brand experiences across all touch-points, from logo design and website development to marketing materials and social media presence."
                    Icon={PiLightbulbBold}
                />

                <ServiceCard
                    title="E-commerce"
                    description="Developing robust online stores with features like product catalogs, shopping carts, secure payment processing, and order management."
                    Icon={LuSmartphone}
                />
                <ServiceCard
                    title="SEO"
                    description="Optimizing websites for local search results to attract customers in specific geographic areas."
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
};

function ServiceCard({ title, description, Icon }: ServiceCardProps) {
    return (
        <div className="relative group flex flex-col justify-between items-start h-[15em] px-8 pt-10 pb-4 border-4 border-white rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:border-[#646DD2] hover:shadow-[-2px_8px_8px_rgba(77,76,76,0.4)]">
            <div className="flex flex-col justify-around h-[60%] ">
                <h2 className="text-white font-bold text-4xl mb-1">{title}</h2>

                <div className="w-11/12 border-t-2 border-gray-400 mb-1"></div>

                <p className="text-white w-11/12 text-[1.2rem] mb-1 text-left">{description}</p>

                <button className="mr-auto p-2 px-3 text-white text-[1rem] rounded-2xl transition-all duration-500 bg-[#609BE3] hover:bg-gradient-to-r hover:from-[#665dcd] hover:via-[#5fa4e6] hover:to-[#d2ab67] z-40">
                    Discover More
                </button>
            </div>

            <div className="absolute bottom-[-0.3rem] right-[-1.5rem] w-[60%] aspect-square border border-gray-400 rounded-xl flex justify-center items-center rotate-[43deg] transition-all duration-500 ease-in-out group-hover:bg-[#646DD2] z-0">
                <Icon className="w-[60%] h-[60%] text-white -rotate-[90deg] mt-8 transition-all m-auto duration-500 ease-in-out group-hover:text-[#C9AA71]" />
            </div>
        </div>
    );
}
