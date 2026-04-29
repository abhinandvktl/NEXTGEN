import { useMemo, useRef, useState } from "react";

export default function MagneticButton({
  onClick,
  className = "",
  style,
  children,
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Re-render only when offset changes (mousemove is throttled via rAF).
  const rafId = useRef(null);

  const baseStyle = useMemo(() => style ?? {}, [style]);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const py = (e.clientY - rect.top - rect.height / 2) / rect.height;

    const next = { x: px * 10, y: py * 10 };

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => setOffset(next));
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-200 will-change-transform ${className}`}
      style={{
        ...baseStyle,
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
      }}
    >
      {children}
    </button>
  );
}

