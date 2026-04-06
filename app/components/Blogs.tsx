const posts = [
  {
    tag: "Articles",
    date: "7 Feb 2025",
    readTime: "9 MIN READ",
    title: "Why We Used Framer for Our Latest Website Build: Moving Beyond WordPress",
    color: "#2a2a2a",
  },
  {
    tag: "Articles",
    date: "31 Dec 2025",
    readTime: "5 MIN READ",
    title: "Beyond Brochures: How We Turn Your Website Into a Lead Generation Engine – Transforming Digital Presence into Business Growth",
    color: "#d4472a",
  },
  {
    tag: "Articles",
    date: "20 Feb 2025",
    readTime: "3 MIN READ",
    title: "The ROI of Website Speed: How 1-Second Improvements Impact Business Revenue in 2025",
    color: "#4a5568",
  },
  {
    tag: "Articles",
    date: "15 Jan 2025",
    readTime: "6 MIN READ",
    title: "Design Trends for 2025 That Actually Drive Conversions",
    color: "#718096",
  },
  {
    tag: "Articles",
    date: "5 Mar 2025",
    readTime: "4 MIN READ",
    title: "How to Write Website Copy That Converts Visitors to Leads",
    color: "#553c9a",
  },
  {
    tag: "Articles",
    date: "12 Jan 2025",
    readTime: "7 MIN READ",
    title: "Local SEO in 2025: What Service Businesses Need to Know",
    color: "#2c5f2e",
  },
];

export default function Blogs() {
  return (
    <section id="blog" style={{ backgroundColor: "#f5f7fa" }} className="px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl lg:text-6xl font-black text-center mb-12"
          style={{ color: "#1a2b3c" }}
        >
          Blogs
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div key={i} className="rounded-2xl overflow-hidden cursor-pointer group" style={{ backgroundColor: "#ffffff" }}>
              {/* Image placeholder */}
              <div
                className="h-48 w-full"
                style={{ backgroundColor: post.color }}
              ></div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded"
                    style={{ backgroundColor: "#1a2b3c", color: "#ffffff" }}
                  >
                    {post.tag}
                  </span>
                  <span className="text-xs" style={{ color: "#1a2b3c", opacity: 0.6 }}>{post.date}</span>
                  <span className="text-xs" style={{ color: "#1a2b3c", opacity: 0.6 }}>{post.readTime}</span>
                </div>
                <h3 className="text-sm font-bold leading-snug" style={{ color: "#1a2b3c" }}>
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
