"use client";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    code: "BUS214",
    title: "BUS 214 Study Hub",
    subtitle: "أخلاقيات الأعمال — ميد تيرم",
    description:
      "فصول 1–3: أخلاقيات الأعمال، علاقات أصحاب المصلحة، والاستدامة. اختبارات تفاعلية وبطاقات تعليمية وعداد تنازلي.",
    link: "https://bus-214-study-hub.vercel.app/",
    screenshot: "/screenshots/bus214.jpg",
    color: "#6C63FF",
    gradient: "from-[#6C63FF] to-[#8B5CF6]",
    tags: ["ميد تيرم", "فصول 1–3", "فلاش كارد"],
  },
  {
    code: "FIN200",
    title: "FIN 200 Study Hub",
    subtitle: "مبادئ مالية — ميد تيرم",
    description:
      "فصول 2–5: القيمة الزمنية للمال، الأقساط، السندات، والأسهم. حاسبة مالية وأسئلة تدريبية وبطاقات تعليمية.",
    link: "https://hosamalmotairi.github.io/fin200-notes/fin200_edition.html",
    screenshot: "/screenshots/fin200.jpg",
    color: "#43E6FC",
    gradient: "from-[#43E6FC] to-[#6C63FF]",
    tags: ["ميد تيرم", "فصول 2–5", "حاسبة مالية"],
  },
  {
    code: "MKT201",
    title: "MKT 201 Study Hub",
    subtitle: "مبادئ التسويق — ميد تيرم",
    description:
      "فصول 1–5: البيئة التسويقية، سلوك المستهلك، واستراتيجيات التسويق. تشمل 561+ سؤال وأسئلة اختبارات سابقة.",
    link: "https://mkt201.vercel.app/",
    screenshot: "/screenshots/mkt201.jpg",
    color: "#FF6584",
    gradient: "from-[#FF6584] to-[#FF9A3C]",
    tags: ["ميد تيرم", "561+ سؤال", "اختبارات سابقة"],
  },
];

export default function Projects() {
  const ref = useScrollReveal();
  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-[#6C63FF] top-[10%] left-[-150px]" />
      <div className="orb w-[300px] h-[300px] bg-[#FF6584] bottom-[10%] right-[-100px]" />

      <div ref={ref} className="reveal max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#43E6FC] uppercase tracking-widest">
            أعمالي الأكاديمية
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            <span className="gradient-text">مشاريعي</span>
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            ثلاثة مشاريع جامعية تمثل رحلتي الأكاديمية
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="glass-card overflow-hidden flex flex-col group">

              {/* Screenshot preview */}
              <div className="relative w-full h-44 overflow-hidden">
                  <Image
                  src={project.screenshot}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent opacity-60" />
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Code badge */}
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full self-start mb-4"
                  style={{
                    background: `${project.color}18`,
                    color: project.color,
                    border: `1px solid ${project.color}40`,
                  }}
                >
                  {project.code}
                </span>

                <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: project.color }}>
                  {project.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: `${project.color}12`,
                        color: `${project.color}cc`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
                    color: "#fff",
                  }}
                >
                  عرض المشروع ←
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
