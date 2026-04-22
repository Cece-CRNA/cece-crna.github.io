import Link from 'next/link';

export function CTASection() {
  return (
    <section className='section-wrap'>
      <div className='rounded-3xl border border-[#d4c6aa] bg-gradient-to-r from-[#121e34] via-[#1a2a46] to-[#182743] px-8 py-14 text-[#f8f6f1] shadow-[0_20px_70px_rgba(12,20,36,0.4)] md:px-14'>
        <p className='text-xs uppercase tracking-[0.22em] text-[#cfb27f]'>Selective Mentorship</p>
        <h3 className='mt-4 max-w-2xl font-serif text-3xl md:text-5xl'>
          Ready for a strategic, confidence-building path to CRNA admissions?
        </h3>
        <p className='mt-4 max-w-2xl text-[#d0ccbf]'>
          Apply for private mentorship and receive personalized guidance designed around your goals, timeline, and target programs.
        </p>
        <div className='mt-8 flex flex-wrap gap-4'>
          <Link href='/contact' className='rounded-full bg-[#c9ab78] px-6 py-3 text-sm font-medium text-[#1a2435] transition hover:bg-[#d8be90]'>
            Apply to Work Together
          </Link>
          <Link href='/services' className='rounded-full border border-[#d8be90] px-6 py-3 text-sm font-medium text-[#f8f6f1] transition hover:bg-[#f8f6f1] hover:text-[#1a2435]'>
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
