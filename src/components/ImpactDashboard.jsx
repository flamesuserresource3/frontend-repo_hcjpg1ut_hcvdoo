import React from 'react';
import { Recycle, Users, Coins, Activity } from 'lucide-react';

function StatCard({ icon: Icon, label, value, sub }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 grid place-items-center">
          <Icon size={20} />
        </div>
        <div className="text-sm text-slate-600">{label}</div>
      </div>
      <div className="mt-3 text-3xl font-semibold text-slate-900">{value}</div>
      {sub ? <div className="mt-1 text-sm text-slate-600">{sub}</div> : null}
    </div>
  );
}

function Progress({ value }) {
  return (
    <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
      <div className="h-full bg-emerald-600" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function ImpactDashboard() {
  return (
    <section className="py-16" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Impact & performance</h2>
            <p className="mt-2 text-slate-700 max-w-xl">Track e‑waste diverted, user engagement, and reliability — because sustainability must be measurable.</p>
          </div>
          <div className="text-sm text-slate-600">Target: 99.5% availability • 1M+ active users</div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={Recycle} label="E‑waste diverted" value="200+ tons/yr" sub="Aggregated across resale, repair, recycle" />
          <StatCard icon={Users} label="Active users" value="300k+" sub="30% monthly activity" />
          <StatCard icon={Coins} label="Eco‑Coins earned" value="5M+" sub="Redeem for coupons or donations" />
          <StatCard icon={Activity} label="Uptime" value="99.9%" sub="Autoscaling on cloud" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-slate-700">Fraud detection accuracy</div>
            <div className="mt-4 flex items-end justify-between">
              <div className="text-3xl font-semibold text-slate-900">95%</div>
              <div className="text-xs text-slate-500">AI/ML vetting</div>
            </div>
            <div className="mt-3"><Progress value={95} /></div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-slate-700">Repair acceptance rate</div>
            <div className="mt-4 flex items-end justify-between">
              <div className="text-3xl font-semibold text-slate-900">72%</div>
              <div className="text-xs text-slate-500">Certified centers</div>
            </div>
            <div className="mt-3"><Progress value={72} /></div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-medium text-slate-700">Recycle collection latency</div>
            <div className="mt-4 flex items-end justify-between">
              <div className="text-3xl font-semibold text-slate-900">36h</div>
              <div className="text-xs text-slate-500">Target ≤48h</div>
            </div>
            <div className="mt-3"><Progress value={75} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
