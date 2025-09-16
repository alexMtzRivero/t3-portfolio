"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  category: string;
  icon: string;
}

export function StakedViews() {
  const t = useTranslations('experience');
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  const experienceItems = [
    'platsage',
    'siglo', 
    'oneragtime',
    'capvital',
    'inria'
  ];

  const cards: CardData[] = experienceItems.map((item, index) => {
    const colors = ['indigo', 'sky', 'emerald', 'purple', 'green'];
    const icons = ['🚀', '👥', '💻', '🏦', '🔬'];
    const images = [
      '/images/platsage.svg',
      '/images/siglo.svg',
      '/images/oneRagTime.svg',
      '/images/capvital.png',
      '/images/inria.svg'
    ];
    
    return {
      id: index + 1,
      title: t(`items.${item}.title`),
      description: t(`items.${item}.description`),
      image: images[index] ?? '/api/placeholder/400/300',
      color: colors[index] as 'indigo' | 'sky' | 'emerald' | 'purple' | 'green',
      category: t(`items.${item}.company`),
      icon: icons[index] ?? '💼'
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleCards = new Set<number>();
      
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Card becomes visible when it's 75% into the viewport
          if (rect.top < windowHeight * 0.75) {
            newVisibleCards.add(index);
          }
        }
      });
      
      setVisibleCards(newVisibleCards);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="journey"
      className="relative py-20 px-2 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative z-0 space-y-14">
            {cards.map((card, index) => {
              const isVisible = visibleCards.has(index);
              const colorClasses = {
                indigo: 'text-green-600',
                sky: 'text-green-500',
                emerald: 'text-green-700',
                purple: 'text-green-800',
                green: 'text-green-600'
              };

              return (
                <section 
                  key={card.id} 
                  ref={(el) => { cardsRef.current[index] = el; }}
                  className={`transition-all duration-700 ease-in-out transform ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-[-200px] opacity-0'
                  }`}
                >
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-300 border border-gray-200">
                    <div className=" pb-8 md:flex justify-between items-center">
                      <div className="shrink-0 px-12 py-14 max-md:pb-0 md:pr-0">
                        <div className="md:max-w-md">
                          <div className={`font-bold text-xl text-green-600 mb-2 relative inline-flex justify-center items-end`}>
                            {card.category}
                            <svg 
                              className={`absolute fill-current opacity-40 -z-10`} 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="88" 
                              height="4" 
                              viewBox="0 0 88 4" 
                              aria-hidden="true" 
                              preserveAspectRatio="none"
                            >
                              <path d="M87.343 2.344S60.996 3.662 44.027 3.937C27.057 4.177.686 3.655.686 3.655c-.913-.032-.907-1.923-.028-1.999 0 0 26.346-1.32 43.315-1.593 16.97-.24 43.342.282 43.342.282.904.184.913 1.86.028 1.999" />
                            </svg>
                          </div>
                          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
                            {card.title}
                          </h3>
                           <ul className="list-disc list-inside">
                              {card.description.split('\n').map((line, index) => (
                                <li key={index} className="text-gray-700 mb-1 leading-relaxed text-sm list-disc list-inside">{line}</li>
                              ))}
                            </ul>
                          
                        </div>
                      </div>
                      <div className="mx-auto max-md:-translate-x-[5%] flex items-center justify-center w-64 h-64 relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={card.image} 
                          alt={`${card.category} experience`}
                          className="w-full h-full p-4  object-contain rounded-lg shadow-lg"
                        />
                        <div className="absolute bottom-4 right-4 text-4xl opacity-80">
                          {card.icon}
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-12 bottom-0 h-14 flex items-center text-xs font-medium text-gray-400">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Decorative gradient overlay */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
                      card.color === 'indigo' ? 'from-green-500 to-emerald-600' : 
                      card.color === 'sky' ? 'from-green-400 to-teal-600' : 
                      card.color === 'emerald' ? 'from-green-500 to-emerald-600' : 
                      card.color === 'purple' ? 'from-green-500 to-green-600' :
                      'from-green-500 to-emerald-600'
                    } opacity-10 rounded-full -translate-y-16 translate-x-16`} />
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
