'use client';
import React, { useState } from 'react'
import Banner from '../components/ui/Banner';
import MainHeading from '../components/ui/MainHeading';

const FA = ({ faq, index, toggleFAQ }: any) => {
    return (
        <div
            className={"bg-white faq " + (faq.open ? "open" : "")}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">
                <hr className='border-gray-300  pt-4' />
                {faq.answer}
            </div>
        </div>
    );
};

const Faqs = () => {
  const [faqs, setFaqs] = useState([
        {
            question: "Q1. What is Numerology?",
            answer: "Numerology is the science of Numbers. It is one of the Predictive Sciences, whose correctness is close to 65% to 70% accuracy.",
            open: true
        },
        {
            question: "Q2. What can I learn about myself/others through Numerology?",
            answer: "Through Numerology you can learnt how to calculate your Psychic Number, Destiny Number & Name Number. Also you can learn the interrelationship among them. You can find out your best period for Investment and which numbers you should prefer and which numbers you should avoid while planning anything about you.",
            open: false
        },
        {
            question: "Q3. Is Numerology based solely on my date of birth?",
            answer: "No, Numerology is based upon three factors i.e. Name Number, Date of Birth Number and total of Date Number + Month Number + Year Number.",
            open: false
        },
        {
            question: "Q4. If someone shares the same date of birth as me, does that mean we have similar destinies?",
            answer: "Destiny numbers of persons might be same but their Destinies may not be same. As it depends upon many other factors such as direction at which Planets are looking the baby at the time of birth or when Zygote formation take place, Place of Birth, Altitude and Latitude of the place.",
            open: false
        },
        {
            question: "Q5. How can Numerology help me to improve my life?",
            answer: "You can improve your life by selecting your favorable dates for any work and avoid unfavorable dates.",
            open: false
        },
        {
            question: "Q6. How can Numerology help me to choose the right career?",
            answer: "A lucky career is decided based on the Destiny Number of the person. Every Destiny number has a list of the best careers to choose from. ",
            open: false
        },
        {
            question: "Q7. What is JC Nummerro/ Chaudhry Nummero Pvt. Ltd?",
            answer: "JC Nummerro is the Numerology App, created by Dr. J C Chaudhry for Numerological predications. Chaudhry Nummero Pvt. Ltd. is a numerology and Vastu solutions company, whose Chairman is Dr. J C Chaudhry.",
            open: false
        },
        {
            question: "Q8. Do you prescribe gemstones and yantras?",
            answer: "Yes, if somebody wants guidance, we can prescribe Gemstones but not yantras.",
            open: false
        },
        {
            question: "Q9. Why do I have to enter right birth time and birth place?",
            answer: "Correct Birth time and Birth place is required for doing correct Numerological calculation. They are not of much significance but definitely help in reaching to right calculation.",
            open: false
        },
        {
            question: "Q10. What should I do if there is a spelling mistake on my birth certificate?",
            answer: "The spelling of name which is popular and people call you will be considered for calculation. If you are using the name written in certificate, then the effect will be of that spelling on you.",
            open: false
        },
        {
            question: "Q11. Which name we should use to calculate the numerology chart – the birth certificate name or current name?",
            answer: "Your complete name that is written in your secondary school certificate will be used for the purpose of numerology calculation.",
            open: false
        },
        {
            question: "Q12. Is there any number termed as a lucky number in numerology?",
            answer: "No, every number can be lucky and also be unlucky. They are always related terms. Lucky or unlucky numbers are calculated as per person’s date of birth.",
            open: false
        },
        {
            question: "Q13. If my numbers are not compatible with my partner’s number, then will the relationship fail?",
            answer: "Yes, it will create problem and will take away the happiness of life If vibrational frequencies of partner’s are different.",
            open: false
        },
        {
            question: "Q14. Are there certain numbers who can provide us an easier life?",
            answer: "No, some numbers can help you in making your life easier and some can bring problems, it depends upon the association of numbers with you.",
            open: false
        },
        {
            question: "Q15. How much time do you take to predict our chart?",
            answer: "To calculate thoroughly any chart for predication, it requires 1 hour.",
            open: false
        },
        {
            question: "Q16. I do not have my date of birth; should I do numerological consultation?",
            answer: "Without correct Date of Birth, you can’t do the numerological calculation.",
            open: false
        },
        {
            question: "Q17. What will be the result if the babies not named properly (or) having unlucky names?",
            answer: "If the name of the baby does not vibrate nicely with his/her Date of Birth, then progress will be slow and there will be frequent hindrances in his/her life.",
            open: false
        },
        {
            question: "Q18.I have already named my baby with my own calculation. Is it possible to correct the baby name as per numerology?",
            answer: "Yes, it is possible to correct the name, whenever you want. Preferably, it should be done up to the teenage age of the child. ",
            open: false
        },
        {
            question: "Q19. What is the use of lucky business name?",
            answer: "If the Name of the Business or Firm is vibrating nicely with the Destiny number of the person/partners, then it will be considered as a lucky Business Name. ",
            open: false
        },
        {
            question: "Q20. I am running my business, but it is not healthy. Should I alter the business name?",
            answer: "Yes, you can consider changing the name of Business. Not only Business Name, but you should also check whether the Place Number (address of the business) is harmonious with Destiny Number or not.",
            open: false
        },
        {
            question: "Q21. What is the use of lucky brand names?",
            answer: "You will have a smooth and safe drive if the Vehicle Registration number is favorable with your Date of Birth.",
            open: false
        },
        {
            question: "Q22. What is the use of lucky vehicle registration number?",
            answer: "You will have a smooth and safe drive if the Vehicle Registration number is favorable with your Date of Birth.",
            open: false
        },
        {
            question: "Q23. What is the use of selecting wedding date as per numerology?",
            answer: "The wedding date if selected as per numerology will result in happy married life and if it is done without numerology, then it may or may not be successful.",
            open: false
        },
        {
            question: "Q24. My marriage life is not happy and wedding date is also not as per numerology. Is there any remedy?",
            answer: "If your married life is not happy because of your wedding date, then there is hardly anything that can be done.",
            open: false
        },
        {
            question: "Q25. Can numerology predict winning lottery numbers and a person’s day of passing?",
            answer: "No, Numerology can predict lucky and unlucky numbers of a person only. ",
            open: false
        },
        {
            question: "Q26. Is number 13 really an unlucky number?",
            answer: "No, Number 13 is not unlucky. It is a compound number like any other compound number such as 14,18,24, etc.",
            open: false
        },
        {
            question: "Q27. How can Numerology help me to understand my relationship?",
            answer: "Your relationship with any other person as per numerology can be understood by looking into the relationship of Planet of your Name Number, Psychic Number, and Destiny Number with that of other people.",
            open: false
        },
        {
            question: "Q28. How can Numerology help me to improve my business?",
            answer: "For improvement in the business, you should check the vibrational frequency of the Business Name with your Destiny number and the vibrational frequency of the Business Address Number with your Destiny Number.",
            open: false
        },
        {
            question: "Q29. How can Numerology help me to plan better?",
            answer: "Numerology can certainly help you to plan better as by the numerology you can know about your favorable and unfavorable period. If you will plan your work in your favorable period, then you will get positive results and in case you start during an unfavorable period, then chances of success will be less.",
            open: false
        },
        {
            question: "Q30. How can Numerology help me to make more money?",
            answer: "If you launch your business on the Right Date, on the right Plot Number with the correct Business Name, certainly you can make money,",
            open: false
        },
        {
            question: "Q31. How can Numerology help me to understand my failures?",
            answer: "You can check, whenever you fail, either the period will be unlucky or unfavorable or you have started the work on the wrong date.",
            open: false
        },
        {
            question: "Q32. How can Numerology help me to make better lifestyle choices?",
            answer: "Lifestyle depends upon the period through which you are passing. If you are passing through a positive period, then your life will automatically be good and if you are passing through an unfavorable period then your lifestyle may not be good.",
            open: false
        },
    ]);

    const toggleFAQ = (index: number) => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }
                return faq;
            })
        );
    };

    return (
        <div className="bg-white">

            <Banner alttag="FAQs page banner image" path="/allbanners/FAQs-page-banner-image.webp" />
            <MainHeading mainHeading="Frequently Asked Questions" style="text-center mt-10" />
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <FA faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
    )
}

export default Faqs

