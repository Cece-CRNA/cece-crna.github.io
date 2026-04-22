import { CTASection } from '@/app/components/CTASection';
import { SectionHeader } from '@/app/components/SectionHeader';

const sections = [
  'Understanding the CRNA role',
  'Educational foundation',
  'Nursing licensure',
  'ICU experience expectations',
  'Certifications and academic preparation',
  'Shadowing and exposure',
  'Building a compelling application',
  'Interview preparation',
  'Entering CRNA school'
];

export default function CrnaPathPage() {
  return (
    <>
      <section className='section-wrap pt-36'>
        <SectionHeader
          eyebrow='The CRNA Path'
          title='A premium, practical guide to becoming a competitive CRNA applicant.'
          description='Understand each milestone, where candidates lose momentum, and what distinguishes top-tier applications.'
        />
        <div className='grid gap-8 lg:grid-cols-[240px_1fr]'>
          <aside className='luxury-card top-28 h-fit p-5 lg:sticky'>
            <p className='text-xs uppercase tracking-[0.18em] text-[#b0894f]'>Navigate</p>
            <ul className='mt-4 space-y-2 text-sm text-[#445067]'>
              {sections.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <div className='space-y-5'>
            {sections.map((item) => (
              <article key={item} className='luxury-card p-7'>
                <h3 className='font-serif text-3xl text-[#13203a]'>{item}</h3>
                <p className='mt-3 text-[#586172]'>
                  This stage should be approached with strategic intention. High-performing applicants create a clear timeline, align experiences with program expectations, and build evidence of readiness early.
                </p>
              </article>
            ))}
            <div className='luxury-card border-l-4 border-l-[#b0894f] p-7'>
              <h3 className='font-serif text-2xl text-[#13203a]'>What strong applicants do differently</h3>
              <p className='mt-3 text-[#586172]'>
                They prepare early, seek targeted feedback, communicate clinically with precision, and build a cohesive narrative that aligns experience, academics, and motivation.
              </p>
            </div>
            <div className='luxury-card border-l-4 border-l-[#7c8aa3] p-7'>
              <h3 className='font-serif text-2xl text-[#13203a]'>Common mistakes to avoid</h3>
              <p className='mt-3 text-[#586172]'>
                Waiting too long to plan, underestimating interview rigor, submitting generic essays, and failing to highlight clinical leadership in high-acuity settings.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
