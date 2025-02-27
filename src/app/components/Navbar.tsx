"use client"
import "./Navbar.css"
import Link from "next/link";

export default function Nabbar() {
  return (
    <>
      <nav className="navbar flex justify-between py-4 px-[2rem]">  
        <div>
        <Link href="#headerSection"><h2 className="font-bold">SparkCard</h2></Link>
        </div>
        <div className="flex gap-4">
          <Link href="#howItWorksSection"><p className="underline">How It Works</p></Link>
          <Link href="#feacherAndBenefitSection"><p className="underline">Features</p></Link>
          <Link href="#simpleTransparentPricingSection"><p className="underline">Pricing</p></Link>
          <button className="h-[30] bg-white p-1 rounded-md border border-solid border-black">Get Started</button>
        </div>
      </nav>
      <div className="adHeight"></div>
    </>

  );
}
