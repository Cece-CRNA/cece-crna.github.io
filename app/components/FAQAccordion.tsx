'use client';

import { useState } from 'react';
import { faqItems } from '../data/site';

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className='space-y-4'>
      {faqItems.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className='luxury-card overflow-hidden'>
            <button
              className='flex w-full items-center justify-between px-6 py-5 text-left md:px-8'
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
            >
              <span className='font-medium text-[#18233c]'>{item.question}</span>
              <span className='text-xl text-[#b0894f]'>{open ? '−' : '+'}</span>
            </button>
            {open ? <p className='border-t border-[#ece6d8] px-6 py-5 text-[#586172] md:px-8'>{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
