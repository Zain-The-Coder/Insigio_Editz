import { AnimatedSection } from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  const isCenter = align === 'center';
  
  return (
    <AnimatedSection delay={0} className={isCenter ? "text-center" : "text-left"}>
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-slate-100 tracking-wide">
        {title}
      </h2>
      <div 
        className={`w-16 h-[2px] bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-700 mt-4 mb-6 ${
          isCenter ? "mx-auto" : "ml-0"
        }`} 
      />
      {subtitle && (
        <p className={`text-slate-200/60 text-lg font-body max-w-2xl ${
          isCenter ? "mx-auto" : "ml-0"
        }`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
