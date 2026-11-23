import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { ServiceStatus } from '@/data/brands';

interface StatusBadgeProps {
  status: ServiceStatus;
  note?: string;
  className?: string;
}

export function StatusBadge({ status, note, className = '' }: StatusBadgeProps) {
  if (status === 'AVAILABLE') {
    return (
      <span
        title={note || 'Service currently available'}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 ${className}`}
      >
        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
        <span>Available</span>
      </span>
    );
  }

  if (status === 'OWNER_TO_CONFIRM') {
    return (
      <span
        title={note || 'Schedule & details subject to administrator confirmation'}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-950/60 text-amber-300 border border-amber-500/30 ${className}`}
      >
        <AlertCircle className="w-3 h-3 text-amber-400" />
        <span>To Confirm</span>
      </span>
    );
  }

  return (
    <span
      title={note || 'Feature currently in internal development pipeline'}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 ${className}`}
    >
      <Clock className="w-3 h-3 text-indigo-400" />
      <span>Planned</span>
    </span>
  );
}
