/**
 * WaveGrid — rippling grid of points that creates a wave animation.
 * Used as a subtle background on section dividers.
 */
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

const COLS = 28;
const ROWS = 14;
const SPACING = 48;

export default function WaveGrid() {
  const mountRef = useRef(null);
  const { theme } = useTheme();
  const themeRef  = useRef(theme);

  useEffect(() => { themeRef.current = theme; }, [theme]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(W, H);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -W / 2, W / 2, H / 2, -H / 2, 1, 1000
    );
    camera.position.z = 100;

    /* ── Grid points ──────────────────────── */
    const total = COLS * ROWS;
    const positions = new Float32Array(total * 3);
    const baseY = new Float32Array(total);

    const offsetX = (COLS - 1) * SPACING * -0.5;
    const offsetY = (ROWS - 1) * SPACING * -0.5;

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const idx = r * COLS + c;
        positions[idx * 3]     = offsetX + c * SPACING;
        positions[idx * 3 + 1] = offsetY + r * SPACING;
        positions[idx * 3 + 2] = 0;
        baseY[idx] = offsetY + r * SPACING;
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x00d4a0,
      size: 3,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: false,
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let rafId;
    let t = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.018;

      const isDark = themeRef.current === 'dark';
      mat.opacity = isDark ? 0.45 : 0.25;

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const idx = r * COLS + c;
          const wave = Math.sin(t + c * 0.45 + r * 0.35) * 10
                     + Math.cos(t * 0.7 + c * 0.2)        * 5;
          positions[idx * 3 + 1] = baseY[idx] + wave;
        }
      }
      geo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nW = mount.clientWidth;
      const nH = mount.clientHeight;
      renderer.setSize(nW, nH);
      camera.left = -nW/2; camera.right = nW/2;
      camera.top  =  nH/2; camera.bottom = -nH/2;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      geo.dispose(); mat.dispose();
    };
  }, []); // eslint-disable-line

  return (
    <div
      ref={mountRef}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
    />
  );
}
