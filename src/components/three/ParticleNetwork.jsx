/**
 * ParticleNetwork — Three.js floating particle field with connecting lines.
 * Neural-network aesthetic. Responds to mouse and theme.
 */
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

const ACCENT_DARK  = 0x00d4a0;
const ACCENT_LIGHT = 0x00a87e;
const CONNECTION_DIST = 160;
const PARTICLE_COUNT  = 110;
const SPEED = 0.25;

export default function ParticleNetwork() {
  const mountRef = useRef(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => { themeRef.current = theme; }, [theme]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    /* ── Renderer ─────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    /* ── Scene / Camera ───────────────────────────────── */
    const scene = new THREE.Scene();
    const W = mount.clientWidth;
    const H = mount.clientHeight;
    const camera = new THREE.OrthographicCamera(
      -W / 2, W / 2, H / 2, -H / 2, 1, 1000
    );
    camera.position.z = 500;

    /* ── Particle data ────────────────────────────────── */
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: (Math.random() - 0.5) * W,
      y: (Math.random() - 0.5) * H,
      z: (Math.random() - 0.5) * 50,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
    }));

    /* ── Dot geometry ─────────────────────────────────── */
    const dotGeo = new THREE.BufferGeometry();
    const dotPos = new Float32Array(PARTICLE_COUNT * 3);
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));

    const dotMat = new THREE.PointsMaterial({
      color: ACCENT_DARK,
      size: 3.5,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: false,
    });
    const dots = new THREE.Points(dotGeo, dotMat);
    scene.add(dots);

    /* ── Line geometry (pre-allocated large buffer) ───── */
    const MAX_LINES = PARTICLE_COUNT * PARTICLE_COUNT;
    const linePos = new Float32Array(MAX_LINES * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    lineGeo.setDrawRange(0, 0);

    const lineMat = new THREE.LineBasicMaterial({
      color: ACCENT_DARK,
      transparent: true,
      opacity: 0.22,
      vertexColors: false,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    /* ── Mouse tracking ───────────────────────────────── */
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.x =  (e.clientX - rect.left  - W / 2);
      mouse.y = -(e.clientY - rect.top   - H / 2);
    };
    window.addEventListener('mousemove', onMouseMove);

    /* ── Resize ───────────────────────────────────────── */
    const onResize = () => {
      const nW = mount.clientWidth;
      const nH = mount.clientHeight;
      renderer.setSize(nW, nH);
      camera.left   = -nW / 2; camera.right = nW / 2;
      camera.top    =  nH / 2; camera.bottom = -nH / 2;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    /* ── Animation loop ───────────────────────────────── */
    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);

      /* Update theme colour */
      const isDark = themeRef.current === 'dark';
      const col = isDark ? ACCENT_DARK : ACCENT_LIGHT;
      dotMat.color.setHex(col);
      lineMat.color.setHex(col);
      dotMat.opacity  = isDark ? 0.85 : 0.55;
      lineMat.opacity = isDark ? 0.22 : 0.13;

      const cW = mount.clientWidth;
      const cH = mount.clientHeight;

      /* Move particles */
      particles.forEach((p) => {
        /* Gentle attraction toward mouse */
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += dx * 0.00008;
          p.vy += dy * 0.00008;
        }

        p.x += p.vx;
        p.y += p.vy;

        /* Dampen velocity */
        p.vx *= 0.99;
        p.vy *= 0.99;

        /* Clamp speed */
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > SPEED * 2) { p.vx *= SPEED * 2 / spd; p.vy *= SPEED * 2 / spd; }
        if (spd < SPEED * 0.1) { p.vx += (Math.random() - 0.5) * 0.05; p.vy += (Math.random() - 0.5) * 0.05; }

        /* Wrap around edges */
        const hw = cW / 2 + 10; const hh = cH / 2 + 10;
        if (p.x >  hw) p.x = -hw;
        if (p.x < -hw) p.x =  hw;
        if (p.y >  hh) p.y = -hh;
        if (p.y < -hh) p.y =  hh;
      });

      /* Write dot positions */
      particles.forEach((p, i) => {
        dotPos[i * 3]     = p.x;
        dotPos[i * 3 + 1] = p.y;
        dotPos[i * 3 + 2] = p.z;
      });
      dotGeo.attributes.position.needsUpdate = true;

      /* Compute connections */
      let lineIdx = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          if (Math.abs(dx) > CONNECTION_DIST || Math.abs(dy) > CONNECTION_DIST) continue;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            linePos[lineIdx++] = particles[i].x;
            linePos[lineIdx++] = particles[i].y;
            linePos[lineIdx++] = particles[i].z;
            linePos[lineIdx++] = particles[j].x;
            linePos[lineIdx++] = particles[j].y;
            linePos[lineIdx++] = particles[j].z;
          }
        }
      }
      lineGeo.setDrawRange(0, lineIdx / 3);
      lineGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    /* ── Cleanup ──────────────────────────────────────── */
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      dotGeo.dispose(); dotMat.dispose();
      lineGeo.dispose(); lineMat.dispose();
    };
  }, []); // eslint-disable-line

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute', inset: 0,
        pointerEvents: 'none', zIndex: 0,
        overflow: 'hidden',
      }}
    />
  );
}
