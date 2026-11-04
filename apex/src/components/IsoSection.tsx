import React from 'react';
import { Gamepad2, Award, Zap, Users, Code2 } from 'lucide-react';
import { playClick } from '../utils/audio';

interface IsoSectionProps {
  onOpenQuote: () => void;
}

export default function IsoSection({ onOpenQuote }: IsoSectionProps) {
  return (
    <section
      id="studio"
      className="relative z-20 -mt-10 md:-mt-16 pt-24 md:pt-36 pb-32 px-6 md:px-12 bg-white text-slate-900 curved-top-white shadow-[0_-25px_60px_rgba(0,0,0,0.12)] overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Screen 1: "WHEN THEY ARE CRAFTED WITH PERFECTION" */}
        <div className="w-full py-16 md:py-24 border-b border-slate-100 flex flex-col items-center">
          <h2 className="font-display text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw] leading-[0.88] tracking-tight font-extrabold uppercase">
            <span className="block text-[#0a0524]">
              WHEN THEY ARE
            </span>
            <span className="block text-[#0a0524]">
              CRAFTED WITH
            </span>
            <span className="block text-[#5a1df5]">
              PERFECTION
            </span>
          </h2>
        </div>

        {/* Screen 2: "Apex Realms Studios® : independent studio building awesome Roblox games..." */}
        <div className="w-full pt-20 md:pt-28 flex flex-col items-center">
          <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0a0524] tracking-tight leading-[1.12] max-w-4xl font-body">
            <span className="block mb-2 text-[#0a0524]">
              Apex Realms Studios<sup className="text-2xl md:text-3xl font-bold text-[#5a1df5]">®</sup> :
            </span>
            independent studio <br className="hidden sm:inline" />
            building awesome Roblox games <br className="hidden sm:inline" />
            with our incredible community <br className="hidden sm:inline" />
            obbies, survival, adventure <br className="hidden sm:inline" />
            fun for everyone
          </h3>

          <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed font-body">
            Founded by <strong>Abdi</strong> with co-founders <strong>Grimm</strong> and <strong>Nyx</strong>, Apex Realms Studios is a small team of developers, builders, and scripters creating unforgettable Roblox worlds.
          </p>

          {/* 3 Verification Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl text-left">
            <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#5a1df5]/40 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-[#5a1df5]/10 text-[#5a1df5] flex items-center justify-center mb-5">
                <Users size={24} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-1">
                Global Player Base
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-body mb-2">
                5.6K+ Visits
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                Total visits across our free-to-play Roblox games, with 1.0K+ community members.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#5a1df5]/40 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-[#5a1df5]/10 text-[#5a1df5] flex items-center justify-center mb-5">
                <Gamepad2 size={24} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-1">
                Precision Design
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-body mb-2">
                240+ Stages
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                Pixel Climb: 240+ meticulously designed stages for the ultimate obby challenge.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#5a1df5]/40 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-[#5a1df5]/10 text-[#5a1df5] flex items-center justify-center mb-5">
                <Code2 size={24} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-1">
                Dedicated Team
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-body mb-2">
                5 Creators
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                One founder, two co-founders, and two developers building together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
