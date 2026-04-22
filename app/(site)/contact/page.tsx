import { InquiryForm } from '@/app/components/InquiryForm';
import { SectionHeader } from '@/app/components/SectionHeader';

export default function ContactPage() {
  return (
    <section className='section-wrap pt-36'>
      <SectionHeader
        eyebrow='Apply'
        title='Apply to Work Together'
        description='Tell us where you are in your CRNA journey. Qualified inquiries receive a tailored recommendation and next-step invitation.'
      />
      <div className='grid gap-8 lg:grid-cols-2'>
        <InquiryForm />
        <div className='space-y-6'>
          <div className='luxury-card p-8'>
            <p className='text-xs uppercase tracking-[0.2em] text-[#b0894f]'>Book Consultation</p>
            <h3 className='mt-3 font-serif text-3xl text-[#13203a]'>Private Booking Calendar</h3>
            <p className='mt-3 text-[#586172]'>Calendly/private booking placeholder. Embed scheduling tool here.</p>
          </div>
          <div className='luxury-card p-8'>
            <p className='text-xs uppercase tracking-[0.2em] text-[#b0894f]'>Exclusive Updates</p>
            <h3 className='mt-3 font-serif text-3xl text-[#13203a]'>Join the Private List</h3>
            <p className='mt-3 text-[#586172]'>Receive curated resources and advisory insights for serious future applicants.</p>
            <input className='mt-4 w-full rounded-xl border border-[#e3ddcf] bg-white p-3' placeholder='Email address' type='email' />
            <button className='mt-3 rounded-full bg-[#13203a] px-6 py-3 text-sm text-[#f8f6f1]'>Subscribe</button>
          </div>
          <div className='luxury-card p-8'>
            <p className='text-sm text-[#586172]'>Featured in / credibility strip placeholder</p>
            <div className='mt-4 grid grid-cols-3 gap-3 text-xs uppercase tracking-[0.2em] text-[#7b8698]'>
              <span>Publication</span>
              <span>Podcast</span>
              <span>Panel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
