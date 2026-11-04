import React from 'react';
import { Maximize2, Sparkles, Gamepad2 } from 'lucide-react';
import { playClick } from '../utils/audio';

export interface SlideItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
  metrics: string;
  techSecrets: string[];
}

export const SHOWCASE_SLIDES: SlideItem[] = [
  {
    id: 'pixel-climb',
    title: 'Pixel Climb • 240+ Stages',
    category: 'Obby',
    image: '/src/assets/images/slide_space_earth_1793646163026.jpg',
    tags: ['240+ Stages', 'Obby', 'Free to Play'],
    description: '240+ meticulously designed stages of precision parkour. Prove your obby skills and conquer the ultimate obby!',
    metrics: 'Featured Game · Free on Roblox',
    techSecrets: ['240+ meticulously designed stages', 'Precision parkour for obby fans', 'Free to play on Roblox'],
  },
  {
    id: 'plaguefall',
    title: 'PLAGUEFALL • Zombie Survival',
    category: 'Survival',
    image: '/src/assets/images/slide_keynote_speaker_1793646163009.jpg',
    tags: ['Zombie Waves', 'Play with Friends', 'Weapons'],
    description: 'Survive waves of zombies with friends. Manage resources, buy weapons, and fight back.',
    metrics: 'Survival · Free on Roblox',
    techSecrets: ['Survive waves of zombies with friends', 'Manage resources and buy weapons', 'Fight back together'],
  },
  {
    id: 'cart-rush',
    title: 'Cart-Rush • Track Rides',
    category: 'Casual',
    image: '/src/assets/images/slide_hypercar_mobility_1793646164240.jpg',
    tags: ['Cart Rides', 'Custom Track', 'BETA'],
    description: 'Hop in a cart and launch through a custom-built winding track at full speed!',
    metrics: 'Casual · BETA on Roblox',
    techSecrets: ['Custom-built winding track', 'Launch at full speed', 'Currently in BETA'],
  },
  {
    id: 'badges',
    title: 'Badges for Everything',
    category: 'Achievement',
    image: '/src/assets/images/slide_equestrian_luxury_1793646164149.jpg',
    tags: ['Every Action Earns a Badge', 'Collect Them All', 'Just for Fun'],
    description: 'Every action earns a badge. Walk five steps? Badge. Stand still? Badge. Collect them all!',
    metrics: 'Achievement · Free on Roblox',
    techSecrets: ['Walk five steps? Badge.', 'Stand still? Badge.', 'Collect them all!'],
  },
  {
    id: 'glass-bridge',
    title: 'Interstellar Glass Bridge',
    category: 'Survival',
    image: '/src/assets/images/slide_space_earth_1793646163026.jpg',
    tags: ['50/50 Gamble', 'Asteroid Abyss', 'Survival'],
    description: 'Lost in the asteroid abyss. Every step is a 50/50 gamble. Can you make it across?',
    metrics: 'Survival · Free on Roblox',
    techSecrets: ['Lost in the asteroid abyss', 'Every step is a 50/50 gamble', 'Can you make it across?'],
  },
];

interface ShowcaseSectionProps {
  onSelectSlide: (slide: SlideItem) => void;
  onOpenQuote: () => void;
}

export default function ShowcaseSection({ onSelectSlide, onOpenQuote }: ShowcaseSectionProps) {
  return (
    <section
      id="games"
      className="relative z-20 -mt-10 md:-mt-16 pt-24 md:pt-36 pb-32 px-6 md:px-12 bg-white text-slate-900 curved-top-white shadow-[0_-25px_60px_rgba(0,0,0,0.12)] overflow-hidden select-none"
    >
      {/* Background diagonal louvers */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25 overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative w-full max-w-7xl h-96 flex items-center justify-center gap-4 -rotate-12">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-80 rounded-md bg-gradient-to-r from-slate-200 to-transparent border-r border-slate-300"
              style={{
                transform: `rotateY(-40deg) translateY(${Math.sin(i * 0.5) * 20}px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#0a0524] font-extrabold uppercase leading-[0.88]">
            ONE ENGINE, <br />
            INFINITE <span className="text-[#5a1df5]">REALMS</span>{' '}
            <span className="block text-slate-300 text-3xl sm:text-5xl md:text-6xl tracking-widest mt-1">
              EXPERIENCES
            </span>
          </h2>
        </div>

        {/* 2-Column Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {SHOWCASE_SLIDES.map((slide) => (
            <div
              key={slide.id}
              onClick={() => {
                playClick();
                onSelectSlide(slide);
              }}
              className="group relative rounded-3xl sm:rounded-4xl overflow-hidden bg-slate-950 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  src={slide.image}
                  alt={slide.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider font-mono">
                    {slide.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#5a1df5] group-hover:text-white transition-colors">
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Bottom title */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h3 className="text-xl sm:text-2xl font-bold font-body text-white drop-shadow-sm">
                    {slide.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {slide.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/15 text-white/90 border border-white/10"
                      >
                        ✦ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
