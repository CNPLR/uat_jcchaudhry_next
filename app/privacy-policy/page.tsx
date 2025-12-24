import React from 'react'
import MainHeading from '../components/ui/MainHeading';
import Para from '../components/ui/Para';
import SubHeading2 from '../components/ui/SubHeading2';
import GenerateMetadata from '../components/MetaGenerator';
import { headers } from 'next/headers';

export const metadata = GenerateMetadata({
     banner: "/logos/jclogo.png",
        title: "Privacy Policy | JC Chaudhry",
        description: "PRIVACY POLICY The content of this Website/App is for your general information and use only. It is subject to change at our sole discretion without any notice.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    pagePath: "/privacy-policy",
});
const Privacypolicy = () => {

    return (
        <div className='px-10 my-10 space-y-10'>

            <MainHeading style="text-center" mainHeading="Privacy Policy" />
            <Para para="When you sign up for jcchaudhry.com we ask you for personal information. We may combine the information you submit under your account with information from other services / third parties in order to provide you with a better experience and to improve the quality of our services. You will be asked to provide us with certain information such as your Name, e-Mail address, Correspondence address while registering for certain services. This information may be used by us for promotional /marketing purpose(s), for taking feedback etc." />
            <Para para="jcchaudhry.com uses cookies to track user traffic patterns and for the personalisation feature." />
            <Para para="When you send an e-mail and/or other communications to jcchaudhry.com, we may retain those e-mails and/or communications in order to process your inquiries, respond to your requests and improve our services. When you send or receive SMS to or from us and/or our authorized third party which provides SMS functionality, we may collect and maintain information associated with those messages, such as the phone number, the content of the message, and the date and time of the SMS. We may use your phone number and/or e-mail address to communicate with you about our services." />
            <Para para="This Privacy Policy applies to jcchaudhry.com services only. We do not exercise control over the website(s) displayed as search results, website(s) which include other applications, products or services, and/or link(s) from within our various services. Personal information that you provide to other website(s) may be sent to jcchaudhry.com in order to deliver the service. We may process such information under this Privacy Policy and may use such information at our sole discretion." />
            <Para para="Our site's Feedback Form requires contact information of users like their name and e-mail address and demographic information like their age etc. for better services. We may use these information/details for taking Feedback, improve our services and/or develop new services." />
            <Para para="Any dispute arising out of this Privacy Policy shall be referred for Arbitration under Arbitration and Conciliation Act, 1996 (as amended). Arbitral proceedings shall be conducted by Sole Arbitrator to be appointed by us. Such arbitral proceedings shall be conducted at Delhi (India) and in English language only. Subject to arbitral proceedings, courts at Delhi (India) shall have exclusive jurisdiction over any and/or all dispute(s) arising out of this Agreement." />
            <div className='space-y-5'>
                <SubHeading2 subHeading="1. Registration / Information" />
                <SubHeading2 subHeading="2. Cookies" />
                <SubHeading2 subHeading="3. User communications" />
                <SubHeading2 subHeading="3. Confidential" />
                <SubHeading2 subHeading="4. Feedback" />
                <SubHeading2 subHeading="5. Dispute Resolution" />
            </div>
        </div>
    )
}

export default Privacypolicy