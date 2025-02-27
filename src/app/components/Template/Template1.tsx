import { StaticImageData } from "next/image";
import FeatureCard from "../Cards/FeatureCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Template1.css"

interface FeatureData {
  img:StaticImageData;
  title:string;
  content:string;
}

interface Item {
  sectionTitle:string;
  sectionID:string;
  featureData:FeatureData[]
}

interface Items {
  allData:Item
}

export default function Template1({allData}:Items) {

  const {sectionTitle,sectionID ,featureData} = allData

  return (
    <section id={sectionID}  className="template">  
      <div className="w-[80%] m-auto">
        <div>
          <SectionTitle sectionTitle = {sectionTitle}/>
        </div>
        <div className="Template1Container flex gap-5 mt-[3rem] justify-between flex-wrap">
          {featureData.map((content,index)=>
            <FeatureCard key={`temp1_${index}`} data = {content}/>
          )}
        </div>
      </div>
    </section>
  );
}
