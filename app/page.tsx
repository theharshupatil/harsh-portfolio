"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";

const ParticleScene = dynamic(() => import("@/components/ParticleScene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="home-main">
      <CustomCursor />
      <div aria-hidden="true" className="home-particles">
        <ParticleScene />
      </div>
      <div aria-hidden="true" className="home-shade" />

      <section aria-labelledby="home-title" className="home-intro">
        <p className="eyebrow home-eyebrow">
          Electrical Engineering <span aria-hidden="true">/</span> IIT Bombay
        </p>
        <h1 id="home-title">
          Harshvardhan
          <br />
          <span>Patil.</span>
        </h1>
        <p className="home-description">
          I like working where physical systems meet computation — from
          instruments and silicon to the algorithms that reason over them.
        </p>
        <div className="home-actions">
          <Link className="home-primary-link" href="/projects">
            Explore the work <span aria-hidden="true">↗</span>
          </Link>
          <Link className="home-secondary-link" href="/about">
            A little about me
          </Link>
        </div>
      </section>

      <div aria-hidden="true" className="home-coordinate">
        <span>IIT BOMBAY</span>
        <span>ELECTRICAL ENGINEERING</span>
      </div>
      <p className="home-index">A practice in understanding how things work.</p>
    </main>
  );
}
