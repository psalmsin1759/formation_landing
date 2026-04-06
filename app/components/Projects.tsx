const projects = [
  {
    tags: ["Website", "Full Website Design & Build"],
    title: "Bold Design For A Creative Construction Powerhouse",
    desc: "Scena Pro, a creative construction company specialising in sets for TV, theatre, and exhibitions, needed a website that could showcase their impressive portfolio while providing intuitive content management for their growing business. After weighing up against other agencies for over a year, they chose Fourseven Media due to our consultative approach and future SEO growth opportunities. We",
    image: null,
    align: "right",
    dark: true,
  },
  {
    tags: ["Ecommerce", "Full Shopify Design & Build"],
    title: "Bringing a new jewellery store to life",
    desc: "Veylaa Jewellery is a brand built on moments, the client wanted to reflect this in their website design, emphasising quality and their passion for jewellery. Working besides a leading London based designer, we focused on implementing muted palette tones to the site to bring a beach vibe, while keeping it modern and clean.",
    image: null,
    align: "right",
    dark: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: "#f5f7fa" }} className="px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-5xl lg:text-6xl font-black leading-tight"
            style={{ color: "#1a2b3c" }}
          >
            Web&nbsp;Design&nbsp;Projects
          </h2>
          <p className="mt-4 text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: "#1a2b3c" }}>
            As a leading web designer serving Twickenham, Richmond, Surrey and London, we&rsquo;ve helped dozens of businesses transform their online websites. These recent projects showcase how the right website design can drive real growth for companies across Southwest London.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {projects.map((project, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden mb-4"
              style={{ backgroundColor: project.dark ? "#1a2b3c" : "#edf2f7" }}
            >
              {/* Image placeholder — always left */}
              <div
                className="flex items-end p-6 relative"
                style={{ backgroundColor: project.dark ? "#0f1e2d" : "#d4dce6", minHeight: "320px" }}
              >
                {project.dark && (
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold text-sm italic">Creative construction from the experts</p>
                  </div>
                )}
                {!project.dark && (
                  <div
                    className="absolute bottom-5 left-5 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: "#edf2f7", border: "1px solid #1a2b3c", color: "#1a2b3c" }}
                  >
                    View Project
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#1a2b3c" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Content — always right */}
              <div className="p-8 flex flex-col justify-center gap-4">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded border"
                      style={{
                        color: project.dark ? "#ffffff" : "#1a2b3c",
                        borderColor: project.dark ? "rgba(255,255,255,0.3)" : "#1a2b3c",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  className="text-2xl font-bold leading-tight"
                  style={{ color: project.dark ? "#ffffff" : "#1a2b3c" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: project.dark ? "rgba(255,255,255,0.7)" : "#1a2b3c" }}
                >
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
