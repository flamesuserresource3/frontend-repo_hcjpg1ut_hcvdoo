import React from 'react';
import { Recycle, Wrench, Coins, ShieldCheck, Camera, MapPin } from 'lucide-react';

const features = [
  {
    id: 'resale',
    title: 'Resale Hub',
    desc: 'List and discover verified pre‑owned gadgets with escrow‑secured checkout.',
    icon: ShieldCheck,
    anchor: 'resale',
    kpi: '10k+ listings/mo'
  },
  {
    id: 'repair',
    title: 'Repair Workflow',
    desc: 'KYC‑verified centers accept or decline with transparent SLAs and pricing.',
    icon: Wrench,
    anchor: 'repair',
    kpi: '≥70% acceptance'
  },
  {
    id: 'recycle',
    title: 'Recycle Dispatch',
    desc: 'Automatic recycler notifications for non‑functional items with live GPS tracking.',
    icon: MapPin,
    anchor: 'recycle',
    kpi: '≤48h collection'
  },
  {
    id: 'passport',
    title: 'Digital Life‑Passport',
    desc: 'Tamper‑resistant record of ownership, repairs, and end‑of‑life recycling.',
    icon: Recycle,
    anchor: 'passport',
    kpi: '100% devices tracked'
  },
  {
    id: 'rewards',
    title: 'Eco‑Coins & Dashboard',
    desc: 'Earn redeemable points and track your e‑waste impact and savings.',
    icon: Coins,
    anchor: 'rewards',
    kpi: '30%+ active users'
  },
  {
    id: 'ai',
    title: 'AI/ML Vetting',
    desc: 'Image recognition flags fake listings; fair price prediction suggests value.',
    icon: Camera,
    anchor: 'ai',
    kpi: '≥95% fraud catch'
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything for a circular electronics economy</h2>
          <p className="mt-3 text-slate-700">Built‑in trust, transparent logistics, and measurable environmental impact.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <a key={f.id} href={`#${f.anchor}`} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:border-emerald-200">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-lg bg-emerald-600/10 text-emerald-700 grid place-items-center">
                    <Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900 group-hover:text-emerald-700">{f.title}</h3>
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded">{f.kpi}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-700">{f.desc}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
