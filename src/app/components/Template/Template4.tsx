import { StaticImageData } from "next/image";
import OnlyTextList from "../Cards/OnlyTextList";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Template1.css"
import PricingCard from "../Cards/Pricing";

interface PricingProp {
  title:string;
  titleDetail:string;
  price:number;
  period:string;
  explain:string[];
  btnText:string;
}

interface Item {
  sectionTitle:string;
  sectionID:string;
  pricingContents:PricingProp[]
}

interface Items {
  allData:Item
}

export default function Template4(
  {allData}:Items
) {

  const {sectionTitle,sectionID,pricingContents} = allData

  return (
    <section id={sectionID} className="template">  
      <div className="w-[80%] m-auto">
        <div>
          <SectionTitle sectionTitle={sectionTitle}/>
        </div>
        <div className="Template4Container flex gap-5 mt-[3rem] flex-wrap justify-between">
          {pricingContents.map((item,index)=>
            <PricingCard key={`temp4_${index}`} pricingData={item}/>
          )}
        </div>
      </div>
    </section>
  );
}
