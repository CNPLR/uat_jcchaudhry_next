interface FAQItem {
  question: string;
  answer: React.ReactNode;
}
const FAQ: FAQItem[] = [
    {
        question: "What is a Name Number Calculator?",
        answer: <>
            A <strong>Name Number Calculator</strong> is a numerology tool that calculates the numerical value of your name using the <strong>Chaldean Numerology</strong> system. Your Name Number reflects the vibrational energy of your name and provides insights into your personality, career, relationships, communication style, and overall life journey.
        </>
    },
    {
        question: "How does the Name Number Calculator work?",
        answer: <>
            The <strong>Name Number Calculator</strong> assigns a specific numerical value to each letter of your name based on the <strong>Chaldean Numerology</strong> chart. These values are added together to determine your <strong>Name Number</strong>, which is then interpreted to reveal the strengths, opportunities, and challenges associated with your name.
        </>
    },
    {
        question: "Can I use the Name Number Calculator for any name?",
        answer: <>
            Yes. You can calculate the numerology of a personal name, business name, brand name, or baby name. For the most accurate results, enter the complete name exactly as it is commonly written or officially used.
        </>
    },
    {
        question: "Is the Name Number Calculator free to use?",
        answer: <>
            Yes. Our <strong>free Name Number Calculator</strong> lets you instantly calculate your Name Number and understand its meaning without any cost. Simply enter your name to receive your numerology result in seconds.
        </>
    },
    {
        question: "Can I change my name to get a better Name Number?",
        answer: <>
            Yes. In <strong>Chaldean Numerology</strong>, many people choose to modify the spelling of their name to achieve a more favourable numerical vibration. However, any name correction should be carefully evaluated to ensure it complements your date of birth and overall numerology chart.
        </>

    },
    {
        question:"What is the difference between a Name Number and a Life Path Number?",
        answer: <>
            Your <strong>Name Number</strong> is calculated from the letters in your name and represents the energy associated with your identity and public image. Your <strong>Life Path Number</strong> is calculated from your date of birth and reflects your life's purpose, natural abilities, and long-term direction. Both numbers work together to provide a complete numerology analysis.
        </>
    },
    {
        question:"Can I consult Dr. JC Chaudhry for Name Correction and Numerology?",
        answer: <>
            Yes. If you are considering a <strong>name correction</strong>, choosing a <strong>business name</strong>, or want a detailed Chaldean Numerology analysis, you can consult <strong>Dr. JC Chaudhry</strong>. With decades of experience in numerology, he provides personalized guidance based on your date of birth, Name Number, and complete numerology chart to help you make informed decisions.
        </>
    },
    {
        question:"How often should I calculate my Name Number?",
        answer: <>
            Your <strong>Name Number</strong> remains the same unless your name changes. You may want to use the <strong>Name Number Calculator</strong> again if you change your name after marriage, modify the spelling of your name, select a new business or brand name, or are exploring a numerology-based name correction.
        </>
    },
]

export default FAQ;