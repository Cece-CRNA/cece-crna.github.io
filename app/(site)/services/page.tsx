import Link from 'next/link';
import { CTASection } from '@/app/components/CTASection';
import { SectionHeader } from '@/app/components/SectionHeader';
import { services } from '@/app/data/site';

export default function ServicesPage() {
  return (
    <>
      <section className='section-wrap pt-36'>
        <SectionHeader
          eyebrow='Services'
          title='Boutique advisory services for ambitious CRNA applicants.'
          description='Every engagement is personalized, strategic, and designed to elevate your clarity and confidence across the full admissions process.'
        />
        <div className='space-y-6'>
          {services.map((service) => (
            <article key={service.title} className='luxury-card p-8 md:p-10'>
              <div className='flex flex-wrap items-start justify-between gap-6'>
                <div className='max-w-2xl'>
                  <h3 className='font-serif text-3xl text-[#12203a]'>{service.title}</h3>
                  <p className='mt-3 text-[#586172]'>{service.description}</p>
                </div>
                <div>
                  <p className='text-sm uppercase tracking-[0.16em] text-[#b0894f]'>{service.price}</p>
                  <Link href='/contact' className='mt-4 inline-block rounded-full border border-[#13203a] px-5 py-2 text-sm text-[#13203a] transition hover:bg-[#13203a] hover:text-[#f8f6f1]'>
                    Book Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className='luxury-card mt-10 overflow-hidden'>
          <div className='grid md:grid-cols-2'>
            <div className='border-b border-[#ece6d8] p-7 md:border-b-0 md:border-r'>High-touch personalization</div>
            <div className='p-7'>Comprehensive support for strategy + interview + application</div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
