import Link from 'next/link';

export function Footer() {
  return (
    <footer className='border-t border-[#ddd6c7] bg-[#121e34] text-[#f3efe6]'>
      <div className='section-wrap py-14'>
        <div className='grid gap-10 md:grid-cols-3'>
          <div>
            <h3 className='font-serif text-2xl'>CECE CRNA Advisory</h3>
            <p className='mt-4 text-sm leading-relaxed text-[#d2ccbe]'>
              Private mentorship and admissions strategy for aspiring CRNAs pursuing exceptional preparation.
            </p>
          </div>
          <div>
            <h4 className='text-sm uppercase tracking-[0.2em] text-[#c9ab78]'>Resources</h4>
            <ul className='mt-4 space-y-2 text-sm text-[#d2ccbe]'>
              <li>CRNA Application Checklist (Download)</li>
              <li>Interview Preparation Guide (Download)</li>
              <li>ICU Readiness Guide (Download)</li>
            </ul>
          </div>
          <div>
            <h4 className='text-sm uppercase tracking-[0.2em] text-[#c9ab78]'>Quick Links</h4>
            <div className='mt-4 flex flex-col gap-2 text-sm text-[#d2ccbe]'>
              <Link href='/services'>Services</Link>
              <Link href='/crna-path'>The CRNA Path</Link>
              <Link href='/contact'>Book a Consultation</Link>
            </div>
          </div>
        </div>
        <p className='mt-10 border-t border-[#2a3550] pt-6 text-xs text-[#a9a18f]'>
          Disclaimer: All support is educational and advisory in nature and does not guarantee admission to CRNA programs.
        </p>
      </div>
    </footer>
  );
}
