export const Arrow = () => (
  <span className="inline-flex items-center justify-center rounded-full">
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 17L17 7M17 7H8M17 7v9"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

export const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[13px] font-bold text-black shadow-xl">
    <span className="h-5 w-5 rounded-full bg-gradient-to-br from-pink-500 via-yellow-300 to-cyan-300" />
    {children}
  </span>
);

export const InlineImg = ({ src }: { src: string }) => (
  <img
    src={src}
    alt=""
    className="mx-1 inline h-[0.85em] w-[1.9em] rounded-lg object-cover align-[-0.1em]"
  />
);
