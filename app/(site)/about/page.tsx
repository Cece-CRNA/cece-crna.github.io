import { SectionHeader } from '@/app/components/SectionHeader';
import { CTASection } from '@/app/components/CTASection';

export default function AboutPage() {
  return (
    <>
      <section className='section-wrap pt-36'>
        <SectionHeader
          eyebrow='About'
          title='Mentorship built for candidates pursuing excellence.'
          description='This advisory exists to help aspiring CRNAs move from ambition to aligned action with clarity, strategy, and confidence.'
        />
        <div className='grid gap-8 md:grid-cols-2'>
          <div className='luxury-card p-8'>
            <p className='text-xs uppercase tracking-[0.2em] text-[#b0894f]'>Founder / Mentor</p>
            <h3 className='mt-3 font-serif text-3xl text-[#13203a]'>Your Name, MSN, RN, CCRN (Placeholder)</h3>
            <p className='mt-4 text-[#586172]'>
              Replace this with your personal bio. Share your ICU background, admissions insights, and mentorship philosophy to establish authority and trust.
            </p>
          </div>
          <div className='luxury-card p-8'>
            <h3 className='font-serif text-3xl text-[#13203a]'>Mission & Philosophy</h3>
            <p className='mt-4 text-[#586172]'>
              We believe outstanding preparation is less about guesswork and more about disciplined strategy. Every applicant deserves clear direction, honest feedback, and a polished plan.
            </p>
          </div>
          <div className='luxury-card p-8 md:col-span-2'>
            <h3 className='font-serif text-3xl text-[#13203a]'>Why this approach is different</h3>
            <p className='mt-4 text-[#586172]'>
              Boutique mentorship means focused access, personalized advising, and high standards at every stage—from ICU progression to interview delivery.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
