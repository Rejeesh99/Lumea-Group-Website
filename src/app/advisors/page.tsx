import type { Metadata } from 'next';
import { LeadershipPage } from '@/components/leadership/LeadershipPage';
import { ADVISORS } from '@/data/leadership';

export const metadata: Metadata = {
  title: 'Our Advisors',
  description: 'Meet the experienced voices who provide guidance and perspective to LUMEA Group.',
};

export default function AdvisorsPage() {
  return (
    <LeadershipPage
      title="Our Advisors"
      eyebrow="Leadership · Advisors"
      description="Experienced perspectives and specialist guidance that help inform LUMEA Group’s decisions and long-term direction."
      profiles={ADVISORS}
      accent="rose"
    />
  );
}
