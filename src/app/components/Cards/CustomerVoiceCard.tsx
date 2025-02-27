import Image, { StaticImageData } from "next/image";
import sample from "../../../../public/next.svg"

interface CustomerVoiceProps {
  img:StaticImageData;
  name:string;
  userType:string;
  comment:string;
}

interface DataProps{
  userVoiceData:CustomerVoiceProps
}

export default function CustomerVoice(
  {userVoiceData}:DataProps
) {
  const {img, name, userType, comment} = userVoiceData;
  return (
    <div className="min-w-[300px] max-w-[330px] h-auto basis-1/3 bg-white text-center py-[2rem] px-[2rem] border-2 border-black rounded-md">
      <div className="flex">
        <Image
          className="basis-1/3"
          src={img}
          height={60}
          alt="FeacherImg"
          style={{margin:"auto"}}
        />
        <div className="basis-2/3 content-center">
          <h2 className="text-2xl font-bold text-left ml-[1rem]">{name}</h2>
          <p className="text-xl text-left ml-[1rem]">{userType}</p>
        </div>
      </div>
      <p className="mt-[2rem]">{comment}</p>
    </div>
  );
}
