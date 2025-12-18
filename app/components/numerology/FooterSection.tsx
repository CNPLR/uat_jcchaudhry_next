import { memo, useCallback, Suspense } from "react";
import { ImageNumber, ImageLife, OurPresenceImage } from "../ui/ImageNumber";
import SubHeading from "../ui/SubHeading";
import { ComponentLoader } from "./ComponentLoader";

export const FooterSection = memo(({ category, footerData, footerHeading }: any) => {
    const renderFooterItems = useCallback(() => {
        if (['Destiny Numbers', 'Missing Numbers', 'Psychic Numbers'].includes(category)) {
            return footerData?.map((item: any, index: number) => (
                <Suspense key={item.link || index} fallback={<ComponentLoader height="200px" />}>
                    <ImageNumber
                        para={item.content}
                        link={item.link}
                        path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/pages/footers/${item.footerImageKey}`}
                        alt={item.alt}
                    />
                </Suspense>
            ));
        }

        if (['About Numbers', 'Vastu', 'Calculations'].includes(category)) {
            return footerData?.map((item: any, index: number) => (
                <Suspense key={item.link || index} fallback={<ComponentLoader height="200px" />}>
                    <ImageLife
                        para={item.content}
                        link={item.link}
                        path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/pages/footers/${item.footerImageKey}`}
                        alt={item.alt}
                    />
                </Suspense>
            ));
        }

        if (category === 'Country') {
            return footerData?.map((item: any, index: number) => (
                <div key={item.link || index}>
                    <SubHeading subHeading={item.footerHeading} style="text-center my-10" />
                    <Suspense fallback={<ComponentLoader height="200px" />}>
                        <OurPresenceImage
                            para={item.content}
                            link={item.link}
                            path={`https://newcnpl.s3.ap-south-1.amazonaws.com/public/pages/footers/${item.footerImageKey}`}
                            alt={item.alt}
                        />
                    </Suspense>
                </div>
            ));
        }

        return null;
    }, [category, footerData]);

    if (category === "No Footer") return null;

    return (
        <div>
            <SubHeading subHeading={footerHeading} style="text-center my-10" />
            <div className='flex justify-center items-center flex-wrap my-10'>
                {renderFooterItems()}
            </div>
        </div>
    );
});