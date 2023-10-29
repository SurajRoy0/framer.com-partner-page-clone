import ContainerWrapper from "@/common/ContainerWrapper";
import React from "react";
import TemplateSite from "@/components/partners/sellTemplates/TemplateSite";
import PriceTemplate from "@/components/partners/sellTemplates/PriceTemplate";
import HowItWorks from "@/common/HowItWorks";

const howItWorks = [
  {
    id: 1,
    title: "You sell a template for $50",
  },
  {
    id: 2,
    title: "You keep the full $50",
    selected: true,
  },
  {
    id: 3,
    title: "User duplicates your template",
  },
  {
    id: 4,
    title: "User keeps iterating on site",
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

export default function SellTemplates() {
  return (
    <ContainerWrapper
      title={`Sell templates.`}
      subtitle={`Create beautiful Framer templates to convert users into paying customers.`}
    >
      <TemplateSite />
      <div className="flex max-lg:flex-col items-center justify-center  ">
        <div className="lg:w-4/6 w-full">
          <PriceTemplate />
        </div>
        <div className="lg:w-2/6 w-full ">
          <HowItWorks
            items={howItWorks}
            numberColor={`text-pink-800`}
            itemBackground={`bg-gradient-to-r from-red-600 to-violet-600 shadow-2xl shadow-red-800`}
          />
        </div>
      </div>
    </ContainerWrapper>
  );
}
