import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import ImpactDashboard from './components/ImpactDashboard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <ImpactDashboard />
        <section className="py-16 bg-emerald-600" id="get-started">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-emerald-700/20 border border-emerald-500/40 p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-semibold">Join the movement. Start your first device journey today.</h3>
              <p className="mt-2 text-emerald-50">List, repair, or recycle — and earn Eco‑Coins for every sustainable action.</p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="flex-1 rounded-lg bg-white/10 border border-white/30 px-4 py-3 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
                />
                <button type="submit" className="rounded-lg bg-white text-emerald-700 font-medium px-5 py-3 hover:bg-emerald-50">
                  Get early access
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
