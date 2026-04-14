/**
 * FloatingGeometry — rotating wireframe icosahedron + orbiting rings.
 * Used as a decorative 3-D element on section backgrounds.
 */
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export default function FloatingGeometry({ size = 260 }) {
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
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
    camera.position.z = 5;

    /* ── Icosahedron ─────────────────────── */
    const icoGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x00d4a0,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    /* ── Outer rings ─────────────────────── */
    const ringGeo1 = new THREE.TorusGeometry(2.0, 0.008, 2, 80);
    const ringGeo2 = new THREE.TorusGeometry(2.5, 0.005, 2, 80);
    const ringMat  = new THREE.MeshBasicMaterial({ color: 0x00d4a0, transparent: true, opacity: 0.18 });

    const ring1 = new THREE.Mesh(ringGeo1, ringMat);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat.clone());
    ring1.rotation.x = Math.PI / 3;
    ring2.rotation.x = -Math.PI / 5;
    ring2.rotation.y =  Math.PI / 4;
    scene.add(ring1, ring2);

    /* ── Floating dots around shape ──────── */
    const dotCount = 30;
    const dotGeo = new THREE.BufferGeometry();
    const dotPos = new Float32Array(dotCount * 3);
    for (let i = 0; i < dotCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.random() * Math.PI;
      const r     = 1.8 + Math.random() * 0.6;
      dotPos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
      dotPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      dotPos[i*3+2] = r * Math.cos(phi);
    }
    dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));
    const dotMat = new THREE.PointsMaterial({ color: 0x00d4a0, size: 0.06, transparent: true, opacity: 0.7 });
    const dotPoints = new THREE.Points(dotGeo, dotMat);
    scene.add(dotPoints);

    /* ── Animation ───────────────────────── */
    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);

      const isDark = themeRef.current === 'dark';
      const opacity = isDark ? 0.35 : 0.2;
      icoMat.opacity  = opacity;
      ringMat.opacity = isDark ? 0.18 : 0.1;
      dotMat.opacity  = isDark ? 0.7  : 0.4;

      ico.rotation.x += 0.003;
      ico.rotation.y += 0.005;

      ring1.rotation.z += 0.003;
      ring2.rotation.z -= 0.002;
      ring2.rotation.x += 0.001;

      dotPoints.rotation.y += 0.002;
      dotPoints.rotation.x += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nW = mount.clientWidth;
      const nH = mount.clientHeight;
      renderer.setSize(nW, nH);
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []); // eslint-disable-line

  return (
    <div
      ref={mountRef}
      style={{
        width: size, height: size,
        pointerEvents: 'none',
        flexShrink: 0,
      }}
    />
  );
}
