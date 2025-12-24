import Link from '../components/ui/Link';
import List from '../components/ui/List';
import MainHeading from '../components/ui/MainHeading';
import Para from '../components/ui/Para';
import SubHeading2 from '../components/ui/SubHeading2';
import GenerateMetadata from '../components/MetaGenerator';
import { headers } from 'next/headers';

export const metadata = GenerateMetadata({
    banner: "/logos/jclogo.png",
        title: "Terms and Conditions | JC Chaudhry",
        description: "TERMS AND CONDITIONS The content of this Website/App is for your general information and use only. It is subject to change at our sole discretion without any notice.",
        keywords: "numerologist in india, numerology by jc chaudhry, vaastu shastra expert, motivational speaker, motivational speakers in india",
    pagePath: "/terms-and-conditions",
});
const page = () => {

    return (
        <div className='px-10 space-y-10 my-10'>

            <MainHeading style="text-center" mainHeading="Term and Conditions" />
            <Para para="1. The content of this Website/App is for your general information and use only. It is subject to change at our sole discretion without any notice." />
            <Para para="2. We do not provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this App/Website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law." />
            <Para para="3. Your use of any information or materials on this App/Website is entirely at your own risk, for which we shall not be liable in any manner whatsoever. It shall be your own responsibility to ensure that any products, services, content, material or information available through this App/Website meets your specific requirements." />
            <Para para="4. This App/Website contains material/ content/logo/trademark etc. which is exclusively owned by us. Copying, Reproduction and/or unauthorised use of such material/content/logo/trademark etc. is strictly prohibited." />
            <Para para="5. Unauthorised use of this App/Website may give rise to a claim for damages and/or legal action against you (civil and criminal) at your own cost and expenses." />
            <Para para="6. From time to time this App/Website may also include links to other Apps/Websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the Apps/Websites. We shall not be responsible for the content of the linked Apps/Websites in any manner whatsoever." />
            <Para para="7. In case of any infringement of our Intellectual Property Rights and/or any other unauthorised use of the content/material information available on this App/Website, you shall be liable to indemnify us and hold us harmless." />
            <Para para="Any dispute arising out of such use of this App/Website shall be referred for Arbitration under Arbitration and Conciliation Act,1996 (as amended). Arbitral proceedings shall be conducted by Sole Arbitrator to be appointed by us. Such arbitral proceedings shall be conducted at Delhi (India) and in English language only. Subject to arbitral proceedings, courts at Delhi (India) shall have exclusive jurisdiction over any and/or all disputes arising out of this Agreement." />
            <div>
                <SubHeading2 subHeading="Appointment Process:" />
                <List para="Please book an appointment by clicking on Book an Appointment Option. Fill in your details and select the Date and Time available and suitable to you." />
                <List para="Amount is to be paid on line mode for ensuring a confirmed appointment. Please read the cancellation/refund policy before obtaining the confirmed appointment." />
                <List para="You will be  required to reach 30 minutes prior to your appointment time." />
                <List para="To obtain written report (soft copy) of consultation a sum of INR 20, 000/- will be charged extra and will be available within 4 working days from the date of making payment." />
            </div>
            <div>
                <SubHeading2 subHeading="Cancellation Policy" />
                <List para="Request for Cancellation or Postponing an appointment can be made at least 7 days prior to the appointment date. No request will be entertained after that and in case request for the same had been made within 7 days of appointment, then appointment will be deemed as cancel." />
                <List para="We reserve the right to modify and/or cancel the appointment due to some avoidable circumstances. In such case a new appointment date will be provided to you. In case you are not comfortable or fine with that date, your full amount will be refunded. " />
            </div>
            <div>
                <SubHeading2 subHeading="Refund Policy" />
                <List para="The booking amount after deduction of cancellation charges, (if any) will be credited into the bank account of the customer through the same payment mode (debit card/credit card/net banking) used while making the booking. The refund process may take 10-15 business days." />
                <List para="If you have any questions or concerns about the Refund and Cancellation Policy, please get in touch with us at support@jcchaudhry.com" />
            </div>
            <Link
                href="mailto:support@jcchaudhry.com"
                target="_blank"
                link="NOTE: Any dispute arising out of Appointment Policy, Cancellation and Refund Policy, shall be referred for Arbitration under Arbitration and Conciliation Act,1996 (as amended). Arbitral proceedings shall be conducted by Sole Arbitrator to be appointed by Chaudhry Nummero Private Limited. Such arbitral proceedings shall be conducted at Delhi (India) and in English language only. Subject to arbitral proceedings, courts at Delhi (India) shall have exclusive jurisdiction over any and/or all disputes arising out of this Agreement."
            />
        </div>
    )

}

export default page