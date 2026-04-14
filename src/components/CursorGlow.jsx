import { useEffect, useRef } from 'react';
import './CursorGlow.css';

export default function CursorGlow() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Smooth lerp follow — feels like the blob "floats" behind cursor
    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      blob.style.transform = `translate(${currentX - 250}px, ${currentY - 250}px)`;
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={blobRef} className="cursor-blob" aria-hidden="true" />;
}
