'use client';

import { FormEvent, useState } from 'react';

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className='luxury-card p-8'>
        <p className='text-xs uppercase tracking-[0.2em] text-[#b0894f]'>Inquiry Received</p>
        <h3 className='mt-4 font-serif text-3xl text-[#16233a]'>Thank you for applying.</h3>
        <p className='mt-3 text-[#586172]'>
          We review each inquiry personally and will follow up with next-step details shortly.
        </p>
      </div>
    );
  }

  return (
    <form className='luxury-card grid gap-5 p-8' onSubmit={handleSubmit}>
      <input className='rounded-xl border border-[#e3ddcf] bg-white p-3' placeholder='Full name' required />
      <input className='rounded-xl border border-[#e3ddcf] bg-white p-3' placeholder='Email' type='email' required />
      <input className='rounded-xl border border-[#e3ddcf] bg-white p-3' placeholder='Phone' type='tel' required />
      <input className='rounded-xl border border-[#e3ddcf] bg-white p-3' placeholder='Current stage' required />
      <input className='rounded-xl border border-[#e3ddcf] bg-white p-3' placeholder='Target timeline' required />
      <input className='rounded-xl border border-[#e3ddcf] bg-white p-3' placeholder='Service of interest' required />
      <textarea className='min-h-32 rounded-xl border border-[#e3ddcf] bg-white p-3' placeholder='Tell us where you are in your CRNA journey.' required />
      <button className='rounded-full bg-[#13203a] px-6 py-3 text-sm font-medium text-[#f8f6f1] transition hover:bg-[#223656]'>
        Apply to Work Together
      </button>
    </form>
  );
}
