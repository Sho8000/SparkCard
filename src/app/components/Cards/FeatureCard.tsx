import Image, { StaticImageData } from "next/image";

interface FeacherProps {
  img:StaticImageData;
  title:string;
  content:string;
}

interface DataProps{
  data:FeacherProps
}

export default function FeatureCard(
  {data}:DataProps
) {
  const {img, title, content} = data;
  return (
    <div className="min-w-[250px] h-auto basis-1/4 bg-white text-center py-[2rem] px-[1rem] border-2 border-black rounded-md cursor-pointer">
      <Image
        src={img}
        height={100}
        alt="FeacherImg"
        style={{margin:"auto"}}
      />
      <h2 className="text-2xl font-bold mt-[1rem]">{title}</h2>
      <p className="text-xl mt-[1rem]">{content}</p>
    </div>
  );
}
