import { memo, useCallback } from "react";

export const DynamicCard = memo(({ content, slug }: any) => {
    const getCardClassName = useCallback(() => {
        if (['soul-urge-number-numerology', 'numerologist-in-malaysia', 'numerologist-in-canada',
            'numerologist-in-amsterdam', 'numerologist-in-usa', 'numerologist-in-uk',
            'numerologist-in-Australia', 'numerologist-in-singapore', 'numerologist-in-south-africa'].includes(slug)) {
            return 'dynemicCardSoul';
        }
        if (slug === 'expression-number-in-numerology') {
            return 'dynemicCardList';
        }
        return 'dynemicCard';
    }, [slug]);

    return (
        <div className={`p-2 ${getCardClassName()}`}>
            <div className="md:w-80 md:h-80 bg-linear-to-l from-slate-200 to-slate-100 border border-slate-300 p-4 justify-center rounded-lg shadow-md"
                dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
});