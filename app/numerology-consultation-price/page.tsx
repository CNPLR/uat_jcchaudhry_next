import { Suspense } from 'react';
import PricingByCountry from './PricingByCountry';

export default function page() {
    // const search = useSearchParams();
    // const country = search.get('country');
  return (
   <Suspense fallback={<div>Loading...</div>}>
      <PricingByCountry />
    </Suspense>
  )
}
