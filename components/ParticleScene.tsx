
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 5000;

function sample(seed: number) {
  const value = Math.sin(seed * 78.233 + 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useRef(new THREE.Vector2(999, 999));
  const needsUpdate = useRef(false);
  const reducedMotion = useRef(false);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const plane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
    []
  );
  const hit = useMemo(() => new THREE.Vector3(), []);

  const { positions, original } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 3 + sample(i * 3 + 1) * 9;
      const theta = sample(i * 3 + 2) * Math.PI * 2;
      const phi = Math.acos(2 * sample(i * 3 + 3) - 1);

      positions[i * 3] =
        radius * Math.sin(phi) * Math.cos(theta);

      positions[i * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta);

      positions[i * 3 + 2] =
        radius * Math.cos(phi);
    }

    return {
      positions,
      original: positions.slice(),
    };
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    reducedMotion.current = motionPreference.matches;

    const handleMove = (e: PointerEvent) => {
      if (reducedMotion.current) return;

      mouse.current.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
      needsUpdate.current = true;
    };

    const handleLeave = () => {
      mouse.current.set(999, 999);
      needsUpdate.current = !reducedMotion.current;
    };

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotion.current = event.matches;

      if (event.matches) {
        const positionAttribute =
          pointsRef.current?.geometry.attributes.position;

        if (positionAttribute) {
          (positionAttribute.array as Float32Array).set(original);
          positionAttribute.needsUpdate = true;
        }

        needsUpdate.current = false;
        return;
      }

      mouse.current.set(999, 999);
      needsUpdate.current = true;
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);
    motionPreference.addEventListener("change", handleMotionPreference);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
      motionPreference.removeEventListener("change", handleMotionPreference);
    };
  }, [original]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    if (reducedMotion.current) return;

    pointsRef.current.rotation.y += delta * 0.02;
    if (!needsUpdate.current) return;

    raycaster.setFromCamera(mouse.current, state.camera);
    if (!raycaster.ray.intersectPlane(plane, hit)) {
      needsUpdate.current = false;
      return;
    }

    const positionAttribute = pointsRef.current.geometry.attributes.position;
    const array = positionAttribute.array as Float32Array;
    const radius = 1.5;
    const strength = 1.1;
    const smoothing = 1 - Math.exp(-8 * delta);
    let stillMoving = false;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const index = i * 3;
      const dx = array[index] - hit.x;
      const dy = array[index + 1] - hit.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      let targetX = original[index];
      let targetY = original[index + 1];

      if (distance < radius && distance > 0.001) {
        const force = Math.pow(1 - distance / radius, 2) * strength;
        targetX += (dx / distance) * force;
        targetY += (dy / distance) * force;
      }

      const differenceX = targetX - array[index];
      const differenceY = targetY - array[index + 1];

      if (Math.abs(differenceX) > 0.001 || Math.abs(differenceY) > 0.001) {
        stillMoving = true;
      }

      array[index] += differenceX * smoothing;
      array[index + 1] += differenceY * smoothing;
      array[index + 2] += (original[index + 2] - array[index + 2]) * smoothing;
    }

    positionAttribute.needsUpdate = true;
    needsUpdate.current = stillMoving;
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#9dcaff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={1}
      />
    </Points>
  );
}

export default function ParticleScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={["#030711"]} />
        <ParticleField />
      </Canvas>
    </div>
  );
}
