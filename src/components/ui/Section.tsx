import React from 'react';

export interface SectionProps {
  id?: string;
  label?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'surface' | 'primary-soft';
}

const Section: React.FC<SectionProps> = ({
  id,
  label,
  title,
  description,
  children,
  className = '',
  background = 'white',
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    surface: 'bg-neutral-surface',
    'primary-soft': 'bg-primary-soft',
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-32 scroll-mt-20 ${backgroundClasses[background]} ${className}`}
    >
      <div className="container mx-auto px-6">
        {(label || title || description) && (
          <div className="section-header">
            {label && <span className="section-label">{label}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {description && (
              <p className="mt-4 text-base md:text-lg text-neutral-text font-medium opacity-70 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
