import { check } from "../assets"
import { pricing } from "../constants"

const PricingList = () => {
  return (
    <div className=" flex gap-[9rem] max-lg:flex-wrap ">
        {pricing.map((item) => (
            <div key={item.id} className="w-[19rem max-lg:w-full h-full mr-10 ml-10 px-10 bg-n-8 border border-n-4 rounded-[2rem] lg:w-auto even:py-14 odd:py-10 odd:my-10 [&>h4]:odd:text-color-2 [&>h4]:even:text-color-1">
                <h4 className="h4 mb-4">{item.title}</h4>
                <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>

                <div className="flex items-center h-[5.5rem]">
                    {item.price && (
                        <>
                        <div className="h3">Ghc</div>
                        <div className="text-[4.5rem] leading-none font-bold">{item.price}</div>
                        </>
                    )}
                </div>
                

                <ul>
                    {item.features.map((feature, index) => (
                        <li key={index} className="flex items-start py-5 border-t border-n-6">
                            <img src={check} width={24} height={24} alt="check"/>
                            <p className="body-2 ml-4">{feature}</p>
                        </li>
                    ))}
                </ul>
                
            </div>
        ))}
      
    </div>
  )
}

export default PricingList
