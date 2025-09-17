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
  location: string;
}

export function StakedViews() {
  const t = useTranslations('experience');
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
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
      icon: icons[index] ?? '💼',
      location: t(`items.${item}.location`)
    };
  });


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
          <div className="grid grid-cols-1 z-0 space-y-14 ">
            {cards.map((card, index) => {
    
              return (
                <section 
                  key={card.id} 
                  className={`
                    sticky  top-24
                  `}
                >
                 
                  <div className="relative bg-white  p-12 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-300 border border-gray-200">
                    <div className=" md:flex justify-between items-center">
                        <div className="md:max-w-md">
                          <div className={`font-bold text-base md:text-xl text-green-600 mb-2 relative inline-flex justify-center items-end`}>
                            {card.category} {card.location}
                          </div>
                          <h3 className="text-xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            {card.title}
                          </h3>
                           <ul className="list-disc list-inside text-sm md:text-base">
                              {card.description.split('\n').map((line, index) => (
                                <li key={index} className="text-gray-700 mb-1 leading-relaxed text-sm list-disc list-inside">{line}</li>
                              ))}
                            </ul>
                          
                        </div>
          
                      <div className="mx-auto  flex items-center justify-center w-64 h-64 relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={card.image} 
                          alt={`${card.category} experience`}
                          className=" h-48 w-48 md:h-full md:w-full p-4  object-contain rounded-lg shadow-lg"
                        />
                        <div className="absolute bottom-10 right-10 md:bottom-4 md:right-4 text-4xl opacity-80">
                          {card.icon}
                        </div>
                      </div>
                    </div>
                   
                    
                    {/* Decorative gradient overlay */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
                      card.color === 'indigo' ? 'from-green-500 to-emerald-600' : 
                      card.color === 'sky' ? 'from-green-400 to-teal-600' : 
                      card.color === 'emerald' ? 'from-green-500 to-emerald-600' : 
                      card.color === 'purple' ? 'from-green-500 to-green-600' :
                      'from-green-500 to-emerald-600'
                    } opacity-10 rounded-full -translate-y-16 translate-x-16`} />
                  </div >
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
