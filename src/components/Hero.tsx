"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(108,99,255,0.5)";
        ctx.fill();
      });

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(108,99,255,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] bg-[#6C63FF] top-[-150px] right-[-150px]" />
      <div className="orb w-[350px] h-[350px] bg-[#43E6FC] bottom-[-100px] left-[-80px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[rgba(67,230,252,0.1)] border border-[rgba(67,230,252,0.3)] rounded-full px-5 py-2 mb-8">
          <span className="text-[#43E6FC] text-sm">🎓</span>
          <span className="text-sm text-gray-300">طالب جامعي | مشاريع أكاديمية</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black mb-5 leading-tight">
          مرحباً، أنا{" "}
          <span className="gradient-text">حسام المطيري</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          هذه مشاريعي الأكاديمية
        </p>

        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          منصات تحضير لميد تيرم صنعتها لزملائي — اختبارات تفاعلية
          وبطاقات تعليمية وملخصات لمواد BUS214 وFIN200 وMKT201.
        </p>

        {/* CTA */}
        <a href="#projects" className="btn-primary inline-block">
          اكتشف المشاريع ↓
        </a>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-8 mt-14 flex-wrap">
          {[
            { value: "3", label: "مشاريع أكاديمية" },
            { value: "2000+", label: "مستفيد" },
            { value: "760+", label: "سؤال تدريبي" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-black gradient-text">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-5 h-9 border border-gray-600 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
