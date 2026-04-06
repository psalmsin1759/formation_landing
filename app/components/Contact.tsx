export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: "#f5f7fa" }} className="px-8 py-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{ backgroundColor: "#1a2b3c" }}
        >
          {/* Left: contact info */}
          <div className="p-10">
            <div className="border-b py-4 flex justify-between text-xs" style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}>
              <span className="font-semibold tracking-widest uppercase">Phone</span>
              <span style={{ color: "#ffffff" }}>0208 050 8035</span>
            </div>
            <div className="border-b py-4 flex justify-between text-xs" style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}>
              <span className="font-semibold tracking-widest uppercase">Email</span>
              <span style={{ color: "#ffffff" }}>hello@foursevenMedia.co.uk</span>
            </div>
            <div className="border-b py-4 flex justify-between text-xs" style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}>
              <span className="font-semibold tracking-widest uppercase">Office</span>
              <span style={{ color: "#ffffff" }}>42 York Street, Twickenham, TW1 3BW</span>
            </div>
            <div className="pt-6">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>Opening Hours</p>
              <div className="flex justify-between text-xs mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#0088e9" }}></div>
                  <span style={{ color: "#ffffff" }}>Weekdays</span>
                </div>
                <span style={{ color: "#ffffff" }}>9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#0088e9" }}></div>
                  <span style={{ color: "#ffffff" }}>Weekend</span>
                </div>
                <span style={{ color: "#ffffff" }}>Closed</span>
              </div>
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="p-10 flex flex-col justify-center" style={{ backgroundColor: "#ffffff" }}>
            <h3 className="text-2xl font-bold mb-6 leading-tight" style={{ color: "#1a2b3c" }}>
              Grow Your Service Business Online
            </h3>
            <div className="flex flex-col gap-3">
              <button
                className="w-full py-3 px-6 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: "#0088e9" }}
              >
                Schedule a free strategy call
              </button>
              <button
                className="w-full py-3 px-6 rounded-full text-sm font-semibold"
                style={{ border: "2px solid #ff6b2b", color: "#ff6b2b", backgroundColor: "transparent" }}
              >
                Enquire about starting a project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
