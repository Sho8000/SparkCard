import "./SectionTitle.css"

interface titleData{
  sectionTitle:string
}

export default function SectionTitle(titledata:titleData) {
  const {sectionTitle} = titledata;
  return (
    <div className="relative">  
      <h1 className="sectionTitle text-4xl font-bold text-center">{sectionTitle}</h1>
    </div>
  );
}
