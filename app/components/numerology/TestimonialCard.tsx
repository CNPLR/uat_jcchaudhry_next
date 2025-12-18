import { memo, Suspense } from "react";
import Para from "../ui/Para";
import { ComponentLoader } from "./ComponentLoader";
import Img from "../ui/Img";

export const TestimonialCard = memo(({ imagePath, name, testimonial, alt }: any) => (
    <div className='m-2'>
        <div className="md:w-80 md:h-96 bg-linear-to-l from-slate-200 to-slate-100 border border-slate-300 justify-center p-3 rounded-lg shadow-md space-y-2">
            <Suspense fallback={<ComponentLoader height="80px" />}>
                <Img style="w-20" path={imagePath} alt={alt} />
            </Suspense>
            <p className='text-[21px] font_family font-semibold text-[#490099]'>{name}</p>
            <Para para={testimonial} style="" />
        </div>
    </div>
));