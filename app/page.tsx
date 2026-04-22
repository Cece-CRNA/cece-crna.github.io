import Link from 'next/link';
import { CTASection } from './components/CTASection';
import { SectionHeader } from './components/SectionHeader';
import { services } from './data/site';

const roadmap = [
  'Earn a BSN',
  'Become a licensed RN',
  'Build strong ICU experience',
  'Strengthen academics and credentials',
  'Prepare a competitive application',
  'Master the interview',
  'Enter CRNA training with confidence'
];

export default function HomePage() {
  return (
    <>
      <section className='relative overflow-hidden px-6 pb-24 pt-40 md:px-10'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(201,171,120,0.18),transparent_35%),radial-gradient(circle_at_10%_30%,rgba(22,35,58,0.12),transparent_35%)]' />
        <div className='section-wrap relative py-0'>
          <p className='text-xs uppercase tracking-[0.22em] text-[#b0894f]'>Elite CRNA Admissions Advisory</p>
          <h1 className='h1-luxury mt-6 max-w-4xl text-[#101b31]'>A Refined Path to CRNA Success</h1>
          <p className='text-muted mt-6 max-w-2xl text-lg leading-relaxed'>
            Private mentorship for aspiring CRNAs seeking clarity, strategy, and confidence through every stage of the journey.
          </p>
          <div className='mt-10 flex flex-wrap gap-4'>
            <Link href='/contact' className='rounded-full bg-[#13203a] px-6 py-3 text-sm text-[#f8f6f1] transition hover:bg-[#26385a]'>
              Book a Private Consultation
            </Link>
            <Link href='/contact' className='rounded-full border border-[#13203a] px-6 py-3 text-sm text-[#13203a] transition hover:bg-[#13203a] hover:text-[#f8f6f1]'>
              Schedule a Mock Interview
            </Link>
          </div>
        </div>
      </section>

      <section className='section-wrap pt-4'>
        <SectionHeader
          eyebrow='Positioning'
          title='Boutique mentorship for high-achieving CRNA applicants.'
          description='This is selective, high-touch advisory for candidates who want strategic precision, elevated communication, and competitive readiness.'
        />
      </section>

      <section className='section-wrap pt-2'>
        <SectionHeader eyebrow='Signature Offerings' title='A premium advisory suite designed around your next acceptance.' />
        <div className='grid gap-6 md:grid-cols-2'>
          {services.map((service) => (
            <article key={service.title} className='luxury-card p-8'>
              <p className='text-xs uppercase tracking-[0.16em] text-[#b0894f]'>{service.price}</p>
              <h3 className='mt-3 font-serif text-3xl text-[#13203a]'>{service.title}</h3>
              <p className='mt-4 text-[#586172]'>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='section-wrap'>
        <SectionHeader eyebrow='The CRNA Roadmap' title='Your path, sequenced with intention.' />
        <div className='grid gap-4 md:grid-cols-2'>
          {roadmap.map((step, index) => (
            <div key={step} className='luxury-card flex items-center gap-4 p-5'>
              <span className='flex h-9 w-9 items-center justify-center rounded-full bg-[#13203a] text-sm text-[#f8f6f1]'>
                {index + 1}
              </span>
              <p className='text-[#1d2942]'>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='section-wrap'>
        <SectionHeader eyebrow='Why Clients Seek Guidance' title='From uncertainty to strategic confidence.' />
        <div className='grid gap-6 md:grid-cols-5'>
          {['Clarity in a competitive process', 'Personalized strategy', 'Confidence in interviews', 'Stronger application presentation', 'Reduced uncertainty'].map((item) => (
            <p key={item} className='luxury-card p-6 text-[#445067]'>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className='section-wrap'>
        <SectionHeader eyebrow='Testimonials' title='Trusted by serious candidates seeking exceptional preparation.' />
        <div className='grid gap-6 md:grid-cols-3'>
          {[
            '“The interview coaching transformed how I communicated under pressure. I walked into panel interviews prepared and composed.” — ICU RN, admitted applicant',
            '“The strategy session gave me a clear plan for academics, certifications, and timing. I finally knew where to focus.” — CVICU RN',
            '“Professional, thoughtful, and rigorous. The application review made my story far more compelling.” — SICU RN'
          ].map((quote) => (
            <blockquote key={quote} className='luxury-card p-7 text-[#4a556d]'>
              {quote}
            </blockquote>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
