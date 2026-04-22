import { FAQAccordion } from '@/app/components/FAQAccordion';
import { SectionHeader } from '@/app/components/SectionHeader';

export default function FaqPage() {
  return (
    <section className='section-wrap pt-36'>
      <SectionHeader
        eyebrow='FAQ'
        title='Thoughtful answers for serious applicants.'
        description='Concise guidance for common CRNA admissions questions.'
      />
      <FAQAccordion />
    </section>
  );
}
