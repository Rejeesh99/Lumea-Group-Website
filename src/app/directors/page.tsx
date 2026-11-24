import type { Metadata } from 'next';
import { LeadershipPage } from '@/components/leadership/LeadershipPage';
import { DIRECTORS } from '@/data/leadership';

export const metadata: Metadata = {
  title: 'Our Directors',
  description: 'Meet the people who lead LUMEA Group and set its direction.',
};

export default function DirectorsPage() {
  return (
    <LeadershipPage
      title="Our Directors"
      eyebrow="Leadership · Directors"
      description="The people who lead LUMEA Group and set its direction."
      profiles={DIRECTORS}
      accent="blue"
    />
  );
}
