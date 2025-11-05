import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const [showSpline, setShowSpline] = useState(false);
  const [splineError, setSplineError] = useState(false);

  useEffect(() => {
    // Enable Spline after mount to avoid any SSR or hydration edge cases
    const t = setTimeout(() => setShowSpline(true), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[70vh] grid items-center">
      {/* Background */}
      <div className="absolute inset-0">
        {showSpline && !splineError ? (
          <Spline
            scene="https://prod.spline.design/3p8Hc0r1q0pKjQ1X/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onError={() => setSplineError(true)}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
        )}
      </div>

      {/* Soft overlay to ensure text readability; pointer-events disabled per guidance */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-slate-900">
            Give your devices a second life. Reduce e‑waste. Earn rewards.
          </h1>
          <p className="mt-6 text-lg text-slate-700">
            E‑route is a unified marketplace to resell, repair, or recycle electronics with escrow protection,
            certified partners, and a Digital Life‑Passport that tracks every step.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white font-medium shadow hover:bg-emerald-700">
              Get started
              <ArrowRight size={18} />
            </a>
            <a href="#trust" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-slate-800 font-medium border border-slate-300 hover:bg-slate-50">
              <ShieldCheck size={18} />
              How it works
            </a>
          </div>
          <div className="mt-6 text-sm text-slate-600">
            Backed by escrow payments, KYC‑verified technicians, and recycler GPS tracking.
          </div>
        </div>
      </div>
    </section>
  );
}
