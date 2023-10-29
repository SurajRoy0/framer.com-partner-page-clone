import ContainerWrapper from "@/common/ContainerWrapper";
import React from "react";
import ClientsWork from "@/components/partners/onBoardYourClient/ClientsWork";
import DesignAndBuild from "@/components/partners/onBoardYourClient/DesignAndBuild";
import HowItWorks from "@/common/HowItWorks";

const howItWorks = [
  {
    id: 1,
    title: "You create a free project",
  },
  {
    id: 2,
    title: "You collaborate with a client",
  },
  {
    id: 3,
    title: "Your client's site is ready to ship",
  },
  {
    id: 4,
    title: "Client uses your handoff link",
  },
  {
    id: 5,
    title: "Client converts for $25 p/m",
  },
  {
    id: 6,
    title: "You receive $12.50 p/m",
    selected: true,
  },
  {
    id: 7,
    title: "Stops after 12 months",
  },
];

export default function OnboardClients() {
  return (
    <ContainerWrapper
      title={`Onboard your clients.`}
      subtitle={`Collaborate with your clients for free, then get them on a paid plan when it is time for handoff.`}
    >
      <ClientsWork />
      <div className="flex max-lg:flex-col items-center justify-center ">
        <div className="lg:w-4/6 w-full">
          <DesignAndBuild />
        </div>
        <div className="lg:w-2/6 w-full ">
          <HowItWorks
            items={howItWorks}
            numberColor={`text-pink-800`}
            itemBackground={`bg-gradient-to-r from-violet-700 to-blue-600 shadow-2xl shadow-blue-800`}
          />
        </div>
      </div>
    </ContainerWrapper>
  );
}
