import SubHeading from './SubHeading'
import OurSolutionCard from './OurSolutionCard'

interface NumerologyServicesCardProps {
  text?: string
}

export default function NumerologyServicesCard({
  text,
}: NumerologyServicesCardProps) {
  return (
    <div>
      <SubHeading
        style="text-center pt-10"
        subHeading={text ? text : 'You may also Contact for'}
      />

      <div className="flex flex-wrap justify-center mb-10 mt-10">
        <OurSolutionCard
          alt="​Personal Numerology"
          path="/images_folder/Personal--Numerology.webp"
          subHeading="​Personal Numerology"
          para="To find out the personal compatibility by name and date of birth"
          link="/personal-numerology-reading"
        />

        <OurSolutionCard
          alt="Career Numerology"
          path="/images_folder/Career--Numerology.webp"
          subHeading="Career Numerology"
          para="To predict the best career and growth for a successful future"
          link="/career-numerology-reading"
        />

        <OurSolutionCard
          alt="Relationship Numerology"
          path="/images_folder/Relationship--Numerology.webp"
          subHeading="Relationship Numerology"
          para="To check the relationship compatibility between any two persons"
          link="/relationship-numerology-reading"
        />

        <OurSolutionCard
          alt="Business Numerology"
          path="/images_folder/Business--Numerology.webp"
          subHeading="Business Numerology"
          para="To give suitable name to a Brand for luck and success"
          link="/business-numerology-reading"
        />

        <OurSolutionCard
          alt="​Marriage Numerology"
          path="/images_folder/Marriage--Numerology.webp"
          subHeading="​Marriage Numerology"
          para="To find out compatibility between a boy and a girl for Marriage"
          link="/marriage-numerology-reading"
        />

        <OurSolutionCard
          alt="New Born Numerology"
          path="/images_folder/New Born--Numerology.webp"
          subHeading="New Born Numerology"
          para="Naming of a Newly Born Child in harmony with date of birth"
          link="/new-born-numerology-reading"
        />
      </div>
    </div>
  )
}
