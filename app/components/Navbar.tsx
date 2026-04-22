'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../data/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 z-50 w-full transition-all duration-400 ${
        scrolled
          ? 'border-b border-[#e3ddcf] bg-[#f8f6f1]/95 shadow-[0_10px_30px_rgba(19,31,51,0.08)] backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10'>
        <Link href='/' className='font-serif text-xl text-[#13203a] md:text-2xl'>
          CECE CRNA Advisory
        </Link>
        <div className='hidden items-center gap-7 md:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm text-[#2d3850] transition-colors hover:text-[#b0894f]'
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/contact'
            className='rounded-full border border-[#b89b68] px-5 py-2 text-sm text-[#16233a] transition hover:bg-[#13203a] hover:text-[#f8f6f1]'
          >
            Apply to Work Together
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
