import Header from "./components/Header/Header";
import RedyToStartYourFinancialJourny from "./components/RedyToStartYourFinancialJourny/RedyToStartYourFinancialJourny";
import Template1 from "./components/Template/Template1";
import Template2 from "./components/Template/Template2";
import Template3 from "./components/Template/Template3";
import Template4 from "./components/Template/Template4";

/* images */
import LockPick from "../../public/LockPic.png"
import SiginUp from "../../public/signup.png"
import CreditBuilding from "../../public/CreditBuilding.png"
import BuildCredit from "../../public/BuildCredit.png"
import GetYourCard from "../../public/getYourCard.png"
import SmartRewards from "../../public/SmartRewards.png"
import TransparentFees from "../../public/TransparentFees.png"
import StartEarningReward from "../../public/StartEarningRwards.png"
import FinancialEducation from "../../public/FinancialEducation.png"
import ERicon from "../../public/ERicon.png"
import SLicon from "../../public/SLicon.png"
import TKicon from "../../public/TKicon.png"

export default function Home() {

  const HowitAndFeature = [
    {
      sectionTitle:"How It Works",
      sectionID:"howItWorksSection",
      featureData:[{
        img:SiginUp,
        title:"Sign Up",
        content:"Apply online in minutes"
      },
      {
        img:GetYourCard,
        title:"Get your card",
        content:"Instant virtual card access"
      },
      {
        img:StartEarningReward,
        title:"Start Earning Rewards",
        content:"Cashback on everyday spending"
      },
      {
        img:BuildCredit,
        title:"Build credit",
        content:"Improve your credit score over time"
      }]
    },
    {
      sectionTitle:"Features & Benefits",
      sectionID:"feacherAndBenefitSection",
      featureData:[{
        img:SmartRewards,
        title:"Smart Rewards",
        content:"Earn cashback on everyday spending"
      },
      {
        img:TransparentFees,
        title:"Transparent fees",
        content:"No annual fees, no hidden charges"
      },
      {
        img:FinancialEducation,
        title:"Financial Education",
        content:"Access to tips and tools for managing money"
      },
      {
        img:CreditBuilding,
        title:"Credit Building",
        content:"Report to credit bureaus to help build credit history"
      }]
    },
  ]
  
  const CustomerVoiceData = [{
      sectionTitle:"What Our Users Say",
      customerVoiceData:[{
        img:SLicon,
        name:"Salah L.",
        userType:"SparkCard User",
        comment:`"SparkCard helped me build my credit score while I was still in uni. Brilliant!"`
      },{
        img:TKicon,
        name:"Tom K.",
        userType:"SparkCard User",
        comment:`"The cashback rewards are great, and I love how easy it is track my spending."`
      },{
        img:ERicon,
        name:"Emma R.",
        userType:"SparkCard User",
        comment:`"Finally, a card that doesn't make me feel like I'm being taken advantage of. Thanks, SparkCard!"`
      }]
    } 
  ]

  const SecurityData = [{
    sectionTitle:"Security & Trust",
    SecurityContents:[{
      explain:"At SparkCard, we take your security seriously. Our state-of-the-art systems ensure your money and data are always protected.",
      imageUrl:LockPick,
      listItem:[
        "Bank-level encryption",
        "Australian government guarantee deposits",
        "24/7 fraud monitoring",
        "Instant card freeze via app",
      ]
    }]
  }]
  
  const pricingData = [{
    sectionTitle:"Simple, Transparent Pricing",
    sectionID:"simpleTransparentPricingSection",
    pricingContents:[{
      title:"Basic",
      titleDetail:"For students getting started",
      price:0,
      period:"per month",
      explain:["No annual fee","1% cashback on all purchases","Virtual card access",],
      btnText:"Get Started",
    },
    {
      title:"Pro",
      titleDetail:"For young professionals",
      price:5,
      period:"per month",
      explain:["All Basic features","2% cashback on all purcases","Travel insurance","Priority customer support"],
      btnText:"Upgrade to Pro",
    },
    {
      title:"Premium",
      titleDetail:"For power users",
      price:10,
      period:"per month",
      explain:["All Pro features","3% cashback on all purchases","Concierge service","Extended warranty on purchases"],
      btnText:"Go Premium",
    }]
  }]

  const readyToStartData = [{
    sectionTitle:"Ready to Start Your Financial Journey?",
    message:"Join thousands of Australians building their credit and earning rewards with SparkCard",
    btnText:"Get Started",
    attention:"By signing up, you agree to our Terms of Service and Privacy Policy",
  }]

  const headerData = [{
    mainTitle1:"Build Your Credit and Earn",
    mainTitle2:"Rewards, Hassle-Free",
    sub1:"The Australian card for students and young adults: no hidden fees,",
    sub2:"real rewards.",
    btn:"Get Started",
  }]

  return (
    <>  
      <Header allData={headerData[0]}/>

      {/* HowIt and Feature */}
      {HowitAndFeature.map((item,index)=>
        <Template1 key={index} allData = {item}/>
      )}

      {/* WhatOurUsersSay */}
      <Template2 allData={CustomerVoiceData[0]}/>

      {/* Security & Trust */}
      <Template3 allData={SecurityData[0]}/>

      {/* SimpleTransparentPricin */}
      <Template4 allData={pricingData[0]}/>

      {/* RedyToStartYourFinancialJourny */}
      <RedyToStartYourFinancialJourny allData={readyToStartData[0]}/>
    </>
  );
}
