"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
}

export function StakedViews() {
  const t = useTranslations('stakedViews');

  const cards: CardData[] = [
    {
      id: 1,
      title: t('cards.innovation.title'),
      description: t('cards.innovation.description'),
      image: '/api/placeholder/400/300',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: t('cards.leadership.title'),
      description: t('cards.leadership.description'),
      image: '/api/placeholder/400/300',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: t('cards.technology.title'),
      description: t('cards.technology.description'),
      image: '/api/placeholder/400/300',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: t('cards.impact.title'),
      description: t('cards.impact.description'),
      image: '/api/placeholder/400/300',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section 
      id="journey"
      className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          {cards.map((card, index) => {
            const totalCards = cards.length;
            const zIndex = totalCards - index; // Higher z-index for cards on top
            const baseOffset = index * 20; // 20px offset between cards

            return (
              <div
                key={card.id}
                className="absolute"
                style={{
                  transform: `translateY(${baseOffset}px)`,
                  zIndex: zIndex,
                }}
              >
                <div className="w-full max-w-md mx-auto">
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all duration-300 ease-out">
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-r from-gray-200 to-gray-300">
                      <div className="absolute inset-0 bg-gradient-to-r opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-30">
                          {index === 0 && '🚀'}
                          {index === 1 && '👥'}
                          {index === 2 && '💻'}
                          {index === 3 && '📈'}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Decorative gradient overlay */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 rounded-full -translate-y-16 translate-x-16`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
