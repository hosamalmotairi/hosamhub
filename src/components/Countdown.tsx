"use client";
import { useEffect, useState } from "react";

// BUS214 exam date: April 12, 2026
const EXAM_DATE = new Date("2026-04-12T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = EXAM_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time.done) return null;

  const units = [
    { label: "يوم", value: time.days },
    { label: "ساعة", value: time.hours },
    { label: "دقيقة", value: time.minutes },
    { label: "ثانية", value: time.seconds },
  ];

  // Progress: exam is April 12 — assume semester started ~Jan 1
  const TOTAL_DAYS = Math.ceil((EXAM_DATE.getTime() - new Date("2026-01-01").getTime()) / (1000*60*60*24));
  const DAYS_LEFT = time.days;
  const progress = Math.max(0, Math.min(100, ((TOTAL_DAYS - DAYS_LEFT) / TOTAL_DAYS) * 100));

  return (
    <div className="relative overflow-hidden">
      <div className="orb w-[400px] h-[200px] bg-[#6C63FF] top-0 right-[-100px]" />

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Glowing border wrapper */}
        <div className="p-[1px] rounded-2xl" style={{
          background: "linear-gradient(135deg, rgba(108,99,255,0.6), rgba(67,230,252,0.4), rgba(255,101,132,0.3), rgba(108,99,255,0.6))",
          boxShadow: "0 0 40px rgba(108,99,255,0.2)",
        }}>
        <div
          className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(17,17,24,0.97) 0%, rgba(17,17,30,0.97) 100%)",
          }}
        >
          {/* Animated glow */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.35), transparent 60%)",
            }}
          />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-6">
              {/* Left text */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">
                    العد التنازلي
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                  ميد تيرم{" "}
                  <span className="gradient-text">BUS 214</span>
                </h3>
                <p className="text-gray-400 text-sm">12 أبريل 2026 — استعد مبكراً 🎯</p>
              </div>

              {/* Timer units */}
              <div className="flex items-center gap-3 md:gap-5">
                {units.map((unit, i) => (
                  <div key={unit.label} className="flex items-center gap-3 md:gap-5">
                    <div className="text-center">
                      <div
                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-black text-white"
                        style={{
                          background: "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(67,230,252,0.1))",
                          border: "1px solid rgba(108,99,255,0.4)",
                          boxShadow: "0 4px 20px rgba(108,99,255,0.15)",
                        }}
                      >
                        {String(unit.value).padStart(2, "0")}
                      </div>
                      <p className="text-xs text-gray-500 mt-1.5">{unit.label}</p>
                    </div>
                    {i < units.length - 1 && (
                      <span className="text-2xl font-bold text-[#6C63FF] opacity-50 mb-4">:</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                <span>التقدم نحو الامتحان</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #6C63FF, #43E6FC)",
                    boxShadow: "0 0 8px rgba(108,99,255,0.5)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
