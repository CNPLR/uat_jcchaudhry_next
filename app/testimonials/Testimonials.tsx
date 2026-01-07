
import Img from '../components/ui/Img';
import Banner from '../components/ui/Banner';
import MainHeading from '../components/ui/MainHeading';
import Para from '../components/ui/Para';
import SubHeading2 from '../components/ui/SubHeading2';

export function CommonTest({ subHeading, path, para, para1, para2, para3, para4, para5 }: any) {
    return (
        <div className='space-y-5 bg-white'>
            <div className='w-[100px]'>
                <Img path={path} style="w-full" alt={subHeading} />
            </div>
            <div className='space-y-5'>
                <SubHeading2 subHeading={subHeading} />
                <Para style='text-black text-justify' para={para} />
                {para1 ? <Para style='text-black text-justify' para={para1} /> : ''}
                {para2 ? <Para style='text-black text-justify' para={para2} /> : ''}
                {para3 ? <Para style='text-black text-justify' para={para3} /> : ''}
                {para4 ? <Para style='text-black text-justify' para={para4} /> : ''}
                {para5 ? <Para style='text-black text-justify' para={para5} /> : ''}
            </div>
            <hr className='border-gray-200 '/>
        </div>
    )
}

const Testimonials = () => {


    return (
        <div>

            <Banner alttag="Read testimonials of Dr. J C Chaudhry's clients" path="/allbanners/Read-testimonials-of-Dr-J-C-Chaudhry's-clients.webp" />
            <MainHeading mainHeading="Testimonials" style="my-5 text-center" />
            <div className='px-10 my-10 bg-white space-y-10'>
                <CommonTest
                    subHeading="Dr. Prashaant - Eye Specialist"
                    path="/images_folder/Dr_Prashant.png"
                    para="My name is Prashaant. This spelling was changed when I was 7 years old. My father has asked Dr. J C Chaudhry about the numerologically correct spelling of my name, and it was changed from Prashant to Prashaant. It was done at a young age, when I was in second grade. Till then, I was an average performer, and when I was promoted to class 3, there was a shift in the grades I was getting. I started coming first in the whole section, then I was a top ranker in the school, and in my pre-medical exams, I was ranked in AIIMS in Delhi PMT and IIT. I cleared all the exams. So, I experienced a smoothness of luck after the change in my name spelling. I think there is a contribution from numerology. Name spelling correction was done at a very early stage; it made my life very smooth; there was no bad luck in whatever I did. Things were lucky and fortunate for me. I would like to thank Dr. J C  Chaudhry for making my life easy and smooth by changing the spelling and making it harmonious for me at a very young age. "
                />
                <CommonTest
                    subHeading="Ms. Allisha Juneja - Aakash Educational Services Limited (AESL)"
                    path="/images_folder/allisha_juneja.png"
                    para="I have multiple issues with my body, i.e.thalassemia minor, hiatus hernia, and ovarian cancer. I met Dr. J C Chaudhry and he took a numerology session where he found many numbers missing from my date of birth due to which I was facing these health issues. He suggested to change the spelling of my name. According to my date of birth, my name spelling was changed. Earlier it was Alisha, and now it is Allisha, adding an extra “L” to my name changed my life. If I look back in time and after the name correction, I am not on medications and there are no symptoms of a new disease. The issues I was suffering from are still there but the cure is also there. My condition is stable. Thank you!"
                />
                <CommonTest
                    subHeading="Rajesh Srivastava - Director RSR Global – Educate & Recruit (United Kingdom)"
                    path="/images_folder/img-min.png"
                    para="Dear Dr. J C Chaudhry, I hope you are doing well. I am writing to express my heartfelt gratitude for your role in the success of RSR Global Limited. Your unwavering support, guidance, and belief in our vision have been instrumental in our journey. Your mentorship has provided invaluable insights, helping us navigate the challenges of entrepreneurship. Your connections and willingness to share your knowledge have been remarkable. Your guidance, wisdom, and support have made an unforgettable impact in our professional growth. I want to highlight that your numerological support for our company's success has been instrumental in our achievements. Your expertise in this area has guided us in making informed decisions and charting a successful course. Your guidance and numerological expertise have left a profound impact on our growth and inspire our team. Additionally, your encouragement throughout our development and celebration of our milestones have been motivating. Your presence has made a significant difference, and your contribution will always be cherished. We are committed to making the most of the opportunities you've facilitated. Thank you for your integral role in our journey. We anticipate a future filled with growth, shared successes, and a lasting partnership that thrives on our collaboration"
                />
                <CommonTest
                    subHeading="Mr. Raja Taneja (Sydney, Australia)"
                    path="/images_folder/Testimonial-min.png"
                    para="For more than two decades, I have been following and seeking guidance from Mr. J.C Chaudhry. I want to share a significant experience where I approached Chaudhry Sir to examine my son's numerological chart. Despite being highly intelligent, my son was unable to excel in academics and suffered from frequent illnesses, leading to visits to various doctors and hospitals. Upon analyzing my son's numbers, Chaudhry Sir discovered that the frequency of his name was not aligned with his surroundings. He suggested a slight modification to his name, which we implemented. To our amazement, within a few weeks of changing his name, my son secured admission into a prestigious school, his grades improved significantly, and he is now pursuing a hounours degree in Quantum Physics. His health has also improved significantly, and he is doing well. I am grateful that we had the opportunity to discuss this matter with Chaudhry Sir, which had a positive impact on our lives."
                />
                <CommonTest
                    subHeading="Mr. Satissh Balyan"
                    path="/images_folder/photo.png"
                    para="Hi, I am Satissh Balyan, and I am the CEO of Tesla Properties and Tesla Vacation Home. I am running out two companies here in Dubai with 30+ ladies, gentlemen, and staff from all over the world, such as Russian, French, Arabic, and Asian staff. I want to share my experience of how I met Dr. J C Chaudhry roughly 5 years ago. He was introduced to me by my brother, Anil Balyan. And, afterward, I would say that life has changed. He suggested many things. I gave my date of birth to him, then he changed the spelling of my name. "
                    para1="My name was Satish with a regular spelling, and now it is SATISSH Balyan. So, this change has changed my life. So, I would like to thank Dr. J C Chaudhry. I was working with this hotel Burj Al Arab in Dubai, and many other hotels, and I was feeling stuck in my job because life wasn't moving forward and I wanted to do so much in life, I had so many dreams I wanted to achieve, but I didn't know what to do or how life can be changed. Then, I came across Dr. J C Chaudhry and my life has been changed. He is the No. 1 numerologist in the world, and his name has been mentioned in the Guinness Book of World Records. Sir, if you are watching it, Thank You so much, appreciate it and love you. You have changed my life. It is always a pleasure to share feedback and experiences with the audience. "
                    para2="If anybody is going through any tough time in life, I would say get in touch with Dr. J C Chaudhry. They have an office in Dubai now, in Business Bay. It has been an amazing journey to see how small things can change life in a big way. I am looking forward to share my experience with many more. Sir, please keep changing the life. God bless you. Thank You!"
                />
                <CommonTest
                    subHeading="Mr. Manoj Kumar"
                    path="/images_folder/Manoj_Kumar.png"
                    para="My Name is Manoj Kumar and by profession I am Swimming Instructor. In many Five star hotels in Delhi, I am teaching Aqua Yoga, Aqua fitness & Swimming to people of all age group."
                    para1="In one of the Five Start hotel, I met Sh. Dr. J C Chaudhry Ji. After few days, I came to know that Chaudhry Ji knows about numerology and one day I asked him that I want to consult him one thing with him, if he does not have any problem, to which Sir said Ok. I told sir that my wife by profession is Physio Therapist and I swimming Instructor and we got married 5 years ago and after getting many treatments also, we are not getting happiness of having a baby and we think that if you can guide us and show some way by which we can also get this happiness."
                    para2="Then Chaudhry Ji asked me to give our actual Date of Birth, time of Birth and said he will look into it and advise. I gave mine and my wife’s Date of Birth to Dr. J C Chaudhry. After 3-4 days Dr. J C Chaudhry called me and told me that he has done lot of study on our Date of Birth and timing of birth and as per him we have to take some precautions. If we are planning for baby now, then don’t do right now as coming 6-7 months we will not get that result what are we are expecting. I said no problem, we will wait and we followed the suggestions as given to us by Chaudhry Sahib."
                    para3="After few months when we thought that proper timing has come as told by him, we ourselves started feeling that we are getting positive results and we got our biggest happiness of life that we were waiting for long and were not getting even after lot of treatment also and there is no limit my happiness, we wife also felt very happy. We did not faced any problem, not even during pregnancy, which was faced earlier and also not other problems are faced. We got a beautiful baby boy who is very active physically and will be going to complete 1 year very soon and I am very happy."
                    para4="I am happy that I was able to meet Dr. J C Chaudhry and followed his numerological advice and I want to only say that if you have proper timing and actual Date of Birth and if you consult him then I am ready to give in writing that you will be going to get 100% positive result. I have personally felt his knowledge and only want to say that he is a very good human being, who has helped us and given proper guidance."
                    para5="I wish Chaudhry Sahib a good health and bright future and once again thank him."
                />
                <CommonTest
                    subHeading="Mr. Siddhant “Sahib Ji"
                    path="/images_folder/BKT_Media.png"
                    para="I am Siddhant Saheb Ji, Chairman and Director of BKT Media Pvt. Ltd. We were working since long in this line but were not getting the speed that we were looking for. During this course of time by the God’s grace we met Sh. Dr. J C Chaudhry Saheb and we found that he trusts numerology and after discussing few things with him, we also starting believing and bending towards him as we were not able to get that speed that we should have."
                    para1="Sir, told us that the number of all Directors in our company do not match with the name of company. Earlier the name of our company was BKT Academy & Films Pvt. Ltd. and after sir’s suggestion we changed the name of our company to BKT Media Pvt. Ltd. and everything changed. Our speed changed and by the God’s grace even after having COVID period, we are much successful. Every day we are busy in doing show, film, etc. Even Sir has given films; we have made 3-4 adds of Aakash Institute. For all these things to happen there was blessing of God but the Sir’s Numerology has so much power that now whatever work we plan to do, we always look forward to seek help from Sir and do whatever he tells and we always keep on waiting for the same. It was Sir’s blessings that he has told to move on right path and if we are gaining by moving on the right path then I think there is nothing better than that."
                    para2="Numerology is something like as if we know that it will rain while going out of the home, then we will take umbrella along with us and we will save ourselves from the rain. Similarly, whole Maths works here also. Earlier we were not aware that the name of our company i.e. BKT Academy & Films Pvt. Ltd. doesn’t suit any of our Directors and when Sir changed the name of our company and matched it with the numbers of our Directors, then we became BKT Media Pvt. Ltd. and today really we don’t have time and we are working continuously and feeling happy. Now, we are feeling more confident as work experience and creativity we were having always in us but were not getting the flow that we can call as economic flow or financial flow and along with that the most important thing as an artist we want the people should know us but that was not happening. But as soon as we changed the name of company everything happened just like that."
                    para3="So, Numerology has got power and especially when Dr. J C Chaudhry is doing it, it is different"
                    para4="Thank you Dr. J C Chaudhry Sahib, Thank you"
                />
                <CommonTest
                    subHeading="Mr. Harish Gulati"
                    path="/images_folder/Harish_Gulati.png"
                    para="Myself Harish Gulati, resident of Delhi and Engineer by profession. I would like to tell something about my daughter Yamini Gualti. In the month of October,1998 she had fever because of which she had problem of Brain Meningitis. After which, regularly she started having fits. During that period, I have shown her to many best doctors and visited many hospitals across India but not got any cure from anywhere."
                    para1="In 2012, I went to Aakash Institute for getting admission of my son Mr. Karan Veer Gulati, where I met Chaudhry Ji. During our discussion I told him about my daughter. He asked about the problem of my daughter, then I told him that my daughter had fever in 1998 after which she had illness known as Brain Meningitis and I have shown her to various doctors and hospitals but not got any cure from anywhere. Then he asked me Date of Birth and Name of my daughter. I told him that name of my daughter is Deepti Gulati. Then he checked name of my daughter as per numerology and told me that her name Deepti Gulati does not suit her. Then, I asked him his opinion on what name we should keep of my daughter. As per numerology, he suggested me to keep her name Yamini Gulati and from that time i.e. 2012 and till date we call her by the name Yamini Gulati."
                    para2="After changing her name, we have observed drastic changes in her, who was not able to walk, fall down, had fits regularly and now by the grace of Mata Rani, she is absolutely fine, perfectly walking & playing in home."
                    para3="That day and till today, whenever we talk, we always discuss about Chaudhry Ji that he changed her name and after change of her name, there is lot of improvement observed in her. We always keep on thanking him and we always discuss in home that Chaudhry Ji came into our life as a God and by changing the name of our daughter he brought lot of improvement in her life."
                    para4="I and all our family members once again thank Chaudhry Ji from our heart for the help he is given to us. Now I realize that by Numerology and Name, life of any person can be changed."
                    para5="In the end Once again I thank Chaudhry Ji. Thank you"
                />
            </div>
        </div>
    )
}

export default Testimonials