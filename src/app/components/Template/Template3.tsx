import { StaticImageData } from "next/image";
import OnlyTextList from "../Cards/OnlyTextList";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Template1.css"

interface SecurityAndTrustInterface {
  explain:string;
  imageUrl:StaticImageData;
  listItem:string[];
}

interface Item {
  sectionTitle:string;
  SecurityContents:SecurityAndTrustInterface[]
}

interface Items {
  allData:Item
}

export default function Template3(
  {allData}:Items
) {

  const {sectionTitle, SecurityContents} = allData

  return (
    <section id="" className="template">  
      <div className="w-[80%] m-auto">
        <div>
          <SectionTitle sectionTitle = {sectionTitle}/>
        </div>
        <div className="Template3Container flex gap-5 mt-[3rem]">
          <OnlyTextList data = {SecurityContents[0]}/>
        </div>
      </div>
    </section>
  );
}
