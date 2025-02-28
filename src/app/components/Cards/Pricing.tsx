interface PricingProp {
  title:string;
  titleDetail:string;
  price:number;
  period:string;
  explain:string[];
  btnText:string;
}

interface DataProps{
  pricingData:PricingProp
}

export default function PricingCard(
  {pricingData}:DataProps
) {
  const {title,titleDetail,price,period,explain,btnText} = pricingData;
  return (
    <div className="min-w-[300px] max-w-[330px] h-auto basis-1/3 bg-white text-center py-[2rem] px-[1rem] border-2 border-black rounded-md">
      <div className="">
        <h2 className="text-2xl font-bold text-left ml-[1rem]">{title}</h2>
        <p className="text-base text-left ml-[1rem]">{titleDetail}</p>
      </div>
      <div className="mt-[1rem]">
        <h2 className="text-4xl font-bold text-left ml-[1rem]">${price}</h2>
        <p className="text-base text-left ml-[1rem]">{period}</p>
      </div>
      <div>
        <ul className="text-left mt-[1rem]">
          {explain.map((item,index)=>
            <li className="pricingList" key={`pricing_${index}`}> {item}</li>
          )}
        </ul>
      </div>
      <button className="w-[90%] p-2 bg-black text-white mt-[1rem] rounded-md">{btnText}</button>
    </div>
  );
}
