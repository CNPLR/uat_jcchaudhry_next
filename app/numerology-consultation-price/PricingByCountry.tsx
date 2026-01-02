'use client';

import { useSearchParams } from 'next/navigation';
import GroupPric1 from './GroupPric1';
import GroupPric2 from './GroupPric2';
import GroupPrice from './GroupPrice';

export default function PricingByCountry() {
  const search = useSearchParams();
  const country = search.get('country');

  if (country === 'AE') return <GroupPric1 />;
  if (country === 'IN') return <GroupPrice />;
  return <GroupPric2 />;
}
