
import CommunityBenefits from '@/container/partners/CommuntyBenefits/CommunityBenefits'
import ApplyToJoin from '@/container/partners/applyToJoin/ApplyToJoin'
import Header from '@/container/partners/header/Header'
import OnboardClients from '@/container/partners/onBoardYourClient/OnboardClients'
import SellTemplates from '@/container/partners/sellTemplates/SellTemplates'
import ShareYourLink from '@/container/partners/shareYourLink/ShareYourLink'

export default function Parnters() {


    return <main>
        <Header />
        <SellTemplates />
        <OnboardClients />
        <ShareYourLink />
        <CommunityBenefits />
        <ApplyToJoin />
    </main>
}