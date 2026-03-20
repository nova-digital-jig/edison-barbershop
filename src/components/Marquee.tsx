export default function Marquee() {
  const items = "FADES · LINEUPS · BEARD TRIMS · HOT SHAVES · KIDS CUTS · ";
  const repeated = items.repeat(6);

  return (
    <section className="overflow-hidden border-y border-gold/10 bg-card py-5">
      <div className="marquee-track">
        <span className="whitespace-nowrap font-[family-name:var(--font-space-grotesk)] text-lg font-bold uppercase tracking-[0.15em] text-gold/60 md:text-2xl">
          {repeated}
        </span>
        <span className="whitespace-nowrap font-[family-name:var(--font-space-grotesk)] text-lg font-bold uppercase tracking-[0.15em] text-gold/60 md:text-2xl">
          {repeated}
        </span>
      </div>
    </section>
  );
}
