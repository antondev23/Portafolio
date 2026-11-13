import React, { useEffect, useRef } from "react";

/**
 * Cielo estrellado a pantalla completa (canvas fijo detrás de todo).
 * Las estrellas parpadean y de vez en cuando cruza una estrella fugaz.
 * Con "reducir movimiento" se dibuja un único fotograma estático.
 */
const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars = [];
    let shooting = null;
    let nextShot = performance.now() + 4000;
    let frame;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((width * height) / 5200);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() < 0.08 ? 1.1 + Math.random() * 0.7 : 0.35 + Math.random() * 0.75,
        alpha: 0.25 + Math.random() * 0.65,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 1.4,
        tint: Math.random() < 0.18 ? "190, 215, 255" : "255, 255, 255",
      }));
    };

    const draw = (time = 0) => {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        const twinkle = reduceMotion ? 1 : 0.65 + 0.35 * Math.sin(time * 0.001 * star.speed + star.phase);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${star.tint}, ${star.alpha * twinkle})`;
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (reduceMotion) return;

      if (!shooting && time > nextShot) {
        shooting = {
          x: Math.random() * width * 0.8 + width * 0.2,
          y: Math.random() * height * 0.4,
          vx: -(6 + Math.random() * 4),
          vy: 2.5 + Math.random() * 2,
          life: 1,
        };
      }

      if (shooting) {
        const { x, y, vx, vy, life } = shooting;
        const gradient = ctx.createLinearGradient(x, y, x - vx * 14, y - vy * 14);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.9 * life})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - vx * 14, y - vy * 14);
        ctx.stroke();

        shooting.x += vx;
        shooting.y += vy;
        shooting.life -= 0.012;
        if (shooting.life <= 0 || shooting.x < -100 || shooting.y > height + 100) {
          shooting = null;
          nextShot = time + 6000 + Math.random() * 9000;
        }
      }

      frame = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden) frame = requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    if (!reduceMotion) frame = requestAnimationFrame(draw);

    const onResize = () => {
      resize();
      if (reduceMotion) draw(0);
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
};

export default Starfield;
