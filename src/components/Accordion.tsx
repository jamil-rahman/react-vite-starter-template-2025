import { useState } from 'react';
import type { FaqItem } from '../types';

interface AccordionProps {
  items: FaqItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  
  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };
  
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-2 border-[var(--color-primary)] rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="w-full px-6 py-4 text-left bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition-colors duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-[var(--color-neutral)] text-lg">{item.question}</span>
                <span className={`text-2xl text-[var(--color-neutral)] transition-transform duration-200 motion-safe ${isOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
            </button>
            <div
              id={`faq-answer-${item.id}`}
              className={`overflow-hidden transition-all duration-200 motion-safe ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
              aria-hidden={!isOpen}
            >
              <div className="px-6 py-4 bg-white text-[var(--color-neutral)]">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

