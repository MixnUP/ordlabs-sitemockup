export function HeroVectors() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute left-[50%] top-0 h-[128rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
        <defs>
          <radialGradient id="hero-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0668E2" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#012E2C" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50%" cy="50%" r="50%" fill="url(#hero-gradient)" />
      </svg>
    </div>
  );
}

export function ServicesVectors() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute left-0 top-0 h-full w-full" aria-hidden="true">
        <path d="M-100 0 C 200 100, 400 0, 600 100 S 1000 0, 1200 100 L 1200 0 Z" fill="#012E2C" fillOpacity="0.05" />
        <path d="M-100 200 C 200 100, 400 300, 600 200 S 1000 400, 1200 300 L 1200 0 Z" fill="#0668E2" fillOpacity="0.03" />
      </svg>
    </div>
  );
}

export function FounderVectors() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/4 top-1/4 h-1 w-1 rounded-full bg-primary/50 animate-pulse" />
      <div className="absolute right-1/4 top-1/2 h-2 w-2 rounded-full bg-secondary/50 animate-pulse delay-75" />
      <div className="absolute bottom-1/4 left-1/2 h-1 w-1 rounded-full bg-primary/50 animate-pulse delay-150" />
    </div>
  );
}

export function ContactVectors() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rotate-45" aria-hidden="true">
        <rect x="0" y="0" width="100%" height="100%" fill="#0668E2" fillOpacity="0.05" />
        <circle cx="20%" cy="80%" r="150" fill="#688B58" fillOpacity="0.08" />
      </svg>
    </div>
  );
}

export function FooterVectors() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-center opacity-10 [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>
    </div>
  );
}
