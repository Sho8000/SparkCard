import "./Footer.css"

  const footerData = [{
    contents:"Product",
    item:["Features","Pricing","FAQ"],
  },
  {
    contents:"Company",
    item:["About Us","Careers","Contact"],
  },
  {
    contents:"Legal",
    item:["Privacy Policy","Terms of Service","Cookie Policy"],
  },
  {
    contents:"Connect",
    item:["Twitter","Facebook","Instagram"],
  },
]

export default function Footer() {
  return (
    <footer className="footer">  
      <div className="w-[90%] m-auto py-4 flex justify-between flex-wrap gap-5">
        {footerData.map((footerItem,index)=>{
          return (
            <div key={`footer_${index}`} className="min-w-[150px] max-w-[200px] basis-1/4">
              <h3 className="text-xl font-bold mb-2">{footerItem.contents}</h3>
              {footerItem.item.map((eachItem,itemIndex)=>{
                return <p key={`footerItem_${itemIndex}`} className="size-fit text-large cursor-pointer">{eachItem}</p>
              })}
            </div>
          )
        })}
      </div>
      <p className="text-center pb-4">©2023 SparkCard. All rights reserved.</p>
    </footer>
  );
}
