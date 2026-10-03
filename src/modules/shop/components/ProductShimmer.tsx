interface Props {
  className?: string;
  children?: React.ReactNode;
}

/** Animated skeleton block used until real clothing photos land. */
export default function ProductShimmer({ className = '', children }: Props) {
  return (
    <div aria-hidden className={`shimmer ${className}`}>
      {children}
    </div>
  );
}
