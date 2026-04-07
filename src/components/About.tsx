"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "3", label: "مشاريع أكاديمية" },
  { value: "2000+", label: "مستفيد" },
  { value: "3", label: "مواد دراسية" },
];

const skills = [
  { icon: "⌨️", label: "برمجة", color: "#6C63FF" },
  { icon: "💻", label: "تطوير الويب", color: "#43E6FC" },
  { icon: "📊", label: "مبادئ مالية", color: "#FF6584" },
  { icon: "🎨", label: "تصميم واجهات", color: "#FF9A3C" },
  { icon: "🤖", label: "ذكاء اصطناعي", color: "#6C63FF" },
  { icon: "🚀", label: "ريادة الأعمال", color: "#43E6FC" },
];

export default function About() {
  const ref = useScrollReveal();
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-[#43E6FC] top-[20%] right-[-100px]" />
      <div className="orb w-[250px] h-[250px] bg-[#FF6584] bottom-[10%] left-[-80px]" style={{ opacity: 0.08 }} />

      <div ref={ref} className="reveal max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#FF6584] uppercase tracking-widest">
            من أنا
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            <span className="gradient-text-warm">عني</span>
          </h2>
          <div className="section-divider mt-3" style={{ background: "linear-gradient(90deg, #FF6584, #FF9A3C)" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar side */}
          <div className="flex flex-col items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              {/* Rotating ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #6C63FF, #43E6FC, #FF6584, #6C63FF)",
                  padding: "3px",
                  borderRadius: "50%",
                }}
              />
              <div className="relative w-56 h-56 rounded-full p-[3px]"
                style={{ background: "linear-gradient(135deg, #6C63FF, #43E6FC, #FF6584)" }}>
                <div className="w-full h-full rounded-full bg-[#0A0A0F] flex flex-col items-center justify-center gap-1">
                  <span className="text-5xl font-black gradient-text">ح.م</span>
                  <span className="text-xs text-gray-500">Hosam Al-Motairi</span>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-card px-4 py-1.5 whitespace-nowrap">
                <span className="text-xs font-semibold gradient-text">🎓 طالب جامعي</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 w-full mt-4">
              {stats.map((s, i) => (
                <div key={i} className="glass-card p-4 text-center">
                  <p className="text-2xl font-black gradient-text">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              أهلاً، أنا <span className="gradient-text">حسام المطيري</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              طالب جامعي شغوف بالتعلم وبناء أدوات تعليمية تفاعلية تساعد زملائي الطلاب.
              أجمع بين اهتمامي بالتقنية والدراسة لأصنع تجارب دراسية أفضل.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              أنشأت منصات دراسية لمواد BUS214 وFIN200 وMKT201 من الصفر بهدف واحد:
              تسهيل الفهم والتحضير للامتحانات بأسلوب ممتع وفعّال لزملائي في الجامعة.
            </p>

            {/* Skills */}
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">اهتماماتي</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: `${skill.color}10`,
                    border: `1px solid ${skill.color}30`,
                  }}
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm font-medium" style={{ color: skill.color }}>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
