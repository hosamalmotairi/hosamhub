const services = [
  {
    icon: "🌐",
    title: "تطوير المواقع",
    description:
      "أبني مواقع سريعة وجذابة وسهلة الاستخدام — من الصفحات الترويجية إلى المنصات الكاملة باستخدام أحدث التقنيات.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "#6C63FF",
    gradient: "from-[#6C63FF] to-[#8B5CF6]",
  },
  {
    icon: "📱",
    title: "تطوير التطبيقات",
    description:
      "تطبيقات موبايل احترافية لـ iOS و Android بتجربة مستخدم سلسة وأداء عالٍ يلبي احتياجات عملك.",
    tags: ["React Native", "Flutter", "Expo", "Firebase"],
    color: "#FF6584",
    gradient: "from-[#FF6584] to-[#FF9A3C]",
  },
  {
    icon: "🎨",
    title: "تصميم جرافيك",
    description:
      "هوية بصرية قوية ومتماسكة — شعارات، مواد تسويقية، وتصاميم UI/UX تجذب العملاء وتعكس قيمة علامتك.",
    tags: ["Figma", "Adobe XD", "Illustrator", "Photoshop"],
    color: "#43E6FC",
    gradient: "from-[#43E6FC] to-[#6C63FF]",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      {/* Background */}
      <div className="orb w-[500px] h-[500px] bg-[#6C63FF] top-[20%] left-[-150px]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#6C63FF] uppercase tracking-widest">
            ما أقدمه
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            <span className="gradient-text">خدماتي</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            حلول رقمية متكاملة تجمع بين الجمال والوظيفة
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="glass-card p-8 group">
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: `${service.color}20`,
                      color: service.color,
                      border: `1px solid ${service.color}40`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "مشروع منجز" },
            { number: "30+", label: "عميل سعيد" },
            { number: "3+", label: "سنوات خبرة" },
            { number: "100%", label: "رضا العملاء" },
          ].map((stat, i) => (
            <div key={i} className="text-center glass-card p-6">
              <div className="text-4xl font-black gradient-text mb-1">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
