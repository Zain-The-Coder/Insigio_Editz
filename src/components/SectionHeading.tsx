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
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-ivory-100 tracking-wide">
        {title}
      </h2>
      <div 
        className={`w-16 h-[2px] bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 mt-4 mb-6 ${
          isCenter ? "mx-auto" : "ml-0"
        }`} 
      />
      {subtitle && (
        <p className={`text-ivory-200/60 text-lg font-body max-w-2xl ${
          isCenter ? "mx-auto" : "ml-0"
        }`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
