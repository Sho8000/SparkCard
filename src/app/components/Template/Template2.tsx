import { StaticImageData } from "next/image";
import CustomerVoice from "../Cards/CustomerVoiceCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Template1.css"

interface CustomerVoiceProps {
  img:StaticImageData;
  name:string;
  userType:string;
  comment:string;
}

interface Item {
  sectionTitle:string;
  customerVoiceData:CustomerVoiceProps[]
}

interface Items {
  allData:Item
}

export default function Template2(
  {allData}:Items
) {


  const {sectionTitle, customerVoiceData} = allData

  return (
    <section id="" className="template">  
      <div className="w-[80%] m-auto">
        <div>
          <SectionTitle sectionTitle = {sectionTitle}/>
        </div>
        <div className="Template2Container flex gap-5 mt-[3rem] flex-wrap justify-between">
          {customerVoiceData.map((userVoiceData,index)=>
            <CustomerVoice key={`temp2_${index}`} userVoiceData={userVoiceData}/>
          )}
        </div>
      </div>
    </section>
  );
}
