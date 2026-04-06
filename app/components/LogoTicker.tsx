const logos = [
  "Small Beer",
  "VINTAGE IDOLS",
  "Vintage Idols",
  "Knowlemore",
  "Gower Brewery",
];

export default function LogoTicker() {
  const doubled = [...logos, ...logos, ...logos, ...logos];
  return (
    <div className="overflow-hidden py-5" style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
      <div className="flex ticker-track" style={{ width: "max-content" }}>
        {doubled.map((logo, i) => (
          <div key={i} className="flex items-center">
            <span
              className="px-8 text-sm font-bold whitespace-nowrap"
              style={{ color: "#1a2b3c" }}
            >
              {logo}
            </span>
            <span style={{ color: "#c0c8d4", fontSize: "18px", lineHeight: 1 }}>|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
