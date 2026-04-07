export default function Footer() {
  return (
    <footer className="border-t border-[rgba(108,99,255,0.15)] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xl font-bold gradient-text">حسام المطيري 🎓</span>
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} حسام المطيري — مشاريع أكاديمية
        </p>
        <div className="flex gap-6">
          {[["مشاريعي", "projects"], ["عني", "about"], ["تواصل", "contact"]].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
