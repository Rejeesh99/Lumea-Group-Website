export interface LeadershipProfile {
  id: string;
  name: string;
  designation: string;
  biography: string;
  photo?: string;
  linkedin?: string;
}

export const DIRECTORS: LeadershipProfile[] = Array.from({ length: 5 }, (_, index) => ({
  id: `director-${index + 1}`,
  name: `Director ${index + 1}`,
  designation: 'Position or title',
  biography: 'Add a concise professional introduction covering this person’s background, experience and contribution to LUMEA Group.',
}));

export const ADVISORS: LeadershipProfile[] = Array.from({ length: 5 }, (_, index) => ({
  id: `advisor-${index + 1}`,
  name: `Advisor ${index + 1}`,
  designation: 'Area of expertise',
  biography: 'Add a concise professional introduction covering this person’s expertise, experience and advisory contribution to LUMEA Group.',
}));
