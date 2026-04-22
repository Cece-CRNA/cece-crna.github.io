export function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className='mb-12 max-w-3xl'>
      <p className='text-xs uppercase tracking-[0.22em] text-[#b0894f]'>{eyebrow}</p>
      <h2 className='h2-luxury mt-4 text-[#111d34]'>{title}</h2>
      {description ? <p className='text-muted mt-4 text-lg leading-relaxed'>{description}</p> : null}
    </div>
  );
}
