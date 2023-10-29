import ContainerWrapper from "@/common/ContainerWrapper";
import CommunityBadge from "@/components/partners/CommunityBenefits/CommunityBadge";
import PartnerCommunity from "@/components/partners/CommunityBenefits/PartnerCommunity";

export default function CommunityBenefits() {
  return (
    <ContainerWrapper
      title={`Community benefits.`}
      subtitle={`Bring in your first referral subscription and get extra Partner benefits on the Framer Community.`}
    >
      <div className="flex max-lg:flex-col items-center justify-center  ">
        <div className="lg:w-1/2 w-full">
          <PartnerCommunity />
        </div>
        <div className="lg:w-1/2 w-full ">
          <CommunityBadge />
        </div>
      </div>
    </ContainerWrapper>
  );
}
