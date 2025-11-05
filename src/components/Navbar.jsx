import React from 'react';
import { Recycle, MessageSquare, ShieldCheck, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-emerald-600 grid place-items-center text-white">
              <Recycle size={18} />
            </div>
            <span className="font-semibold text-slate-900">E‑route</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#resale" className="hover:text-slate-900">Resale</a>
            <a href="#repair" className="hover:text-slate-900">Repair</a>
            <a href="#recycle" className="hover:text-slate-900">Recycle</a>
            <a href="#passport" className="hover:text-slate-900">Life‑Passport</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <MessageSquare size={16} />
              Support
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">
              <ShieldCheck size={16} />
              KYC / Sign in
            </button>
            <button className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700 hover:bg-slate-50" aria-label="Menu">
              <User size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
