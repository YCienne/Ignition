import Heading from "./Heading";
import Section from "./Section";
import { service } from "../constants";
import { grid} from "../assets";
import { Gradient } from "./design/Roadmap";

const Services = () => (
    <Section crosses className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
        <Heading tag="Our Services" title="What we offer at Ignition" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {service.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
            <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
            >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                    <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                    />
                </div>
                <div className="relative z-1">
                    
                <div className="mb-10 -my-10 -mx-15">
                    <img
                    className="w-full"
                    src={item.imageUrl}
                    width={628}
                    height={426}
                    alt={item.title}
                    />
                </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                </div>
            </div>
            </div>
        );
        })}

        <Gradient />
    </div>

    <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
    <a href="#Footer" className="button hidden mr-8 text-n-4 transition-colors hover:text-n-1 lg:block">
            Call us now
            </a>
    </div>
    </div>
</Section>
);

export default Services;
