import ContainerWrapper from "@/common/ContainerWrapper";
import React from "react";
import HowItWorks from "@/common/HowItWorks";
import Video from "@/components/partners/shareYourLink/Video";
import Social from "@/components/partners/shareYourLink/Social";
import BlogPost from "@/components/partners/shareYourLink/BlogPost";

const howItWorks = [
  {
    id: 1,
    title: "You sell a template for $50",
  },
  {
    id: 2,
    title: "You keep the full $50",
  },
  {
    id: 3,
    title: "User duplicates your template",
  },
  {
    id: 4,
    title: "User keeps iterating on site",
    selected: true,
  },
  {
    id: 5,
    title: "User converts for $15 p/m",
  },
  {
    id: 6,
    title: "You receive $7.50 p/m",
    selected: true,
  },
  {
    id: 7,
    title: "Stops after 12 months",
  },
];

export default function ShareYourLink() {
  return (
    <ContainerWrapper
      title={`Sell templates.`}
      subtitle={`Create beautiful Framer templates to convert users into paying customers.`}
    >
      <div className="flex max-lg:flex-col justify-center items-center">
        <div className="lg:w-1/2 w-full">
          <Video />
        </div>
        <div className="lg:w-1/2 w-full">
          <Social />
        </div>
      </div>

      <div className="flex max-lg:flex-col items-center justify-center ">
        <div className="lg:w-4/6 w-full">
          <BlogPost />
        </div>
        <div className="lg:w-2/6 w-full ">
          <HowItWorks
            items={howItWorks}
            numberColor={`text-pink-800`}
            itemBackground={`bg-gradient-to-r from-orange-600 to-red-600 shadow-2xl shadow-orange-800`}
          />
        </div>
      </div>
    </ContainerWrapper>
  );
}
