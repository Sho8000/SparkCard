import "./Header.css"

interface HeaderProps{
  mainTitle1:string;
  mainTitle2:string;
  sub1:string;
  sub2:string;
  btn:string;
}

interface Items {
  allData:HeaderProps
}

export default function Header({allData}:Items) {
  const {mainTitle1,mainTitle2,sub1,sub2,btn} = allData
  return (
    <section id="headerSection" className="relative">  
      <div className="headerContainer absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-col">
        <h1 className="mainTitle min-w-[610px] text-5xl font-bold text-center">{mainTitle1} {mainTitle2}</h1>

        <p className="subTitle text-center w-[500px] m-auto">{sub1} {sub2}</p>
        <button className="w-[50%] font-bold text-center m-auto mt-[1rem] p-2 rounded-md bg-black text-white">{btn}</button>
      </div>
    </section>
  );
}
