import Image, { StaticImageData } from "next/image";
import "./CardStyle.css"
import sample from "../../../../public/globe.svg"

interface TextList {
  explain:string;
  imageUrl:StaticImageData;
  listItem:string[];
}

interface DataProps{
  data:TextList
}

export default function OnlyTextList(
  {data}:DataProps
) {
  const {explain,imageUrl,listItem} = data;
  return (
    <>
      <div className="OnlyTextListContainer h-auto basis-1/2 py-[2rem] px-[1rem] ">
        <h2 className="text-lg mt-[1rem]">{explain}</h2>
        <ul className="text-base mt-[1rem]">
          {listItem.map((item, index)=>
            <li className="onlyTextList" key={`onlyText_${index}`}> {item}</li>
          )}
        </ul>
      </div>
      <div className="h-auto basis-1/2 py-[2rem] px-[1rem] relative"> 
        <Image
          src={imageUrl}
          alt="Img"
          width={300}
          style={{margin:"auto"}}
        />
      </div>
    </>
  );
}
