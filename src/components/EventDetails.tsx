export default function EventDetails() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary text-ivory relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <span className="font-caps text-xs tracking-super text-gold block">THE SOLEMNIZATION</span>
          <h2 className="text-4xl md:text-5xl font-display font-light">Where & When</h2>
          <div className="w-12 h-px bg-gold mx-auto my-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="border border-gold/30 p-8 md:p-12 flex flex-col justify-between space-y-12 bg-primary-light">
            <div className="space-y-6">
              <span className="font-caps text-xs tracking-widest text-gold block">SATURDAY, AUGUST 15, 2026</span>
              <h3 className="text-3xl font-display font-light">Holy Matrimony & Reception</h3>
              <p className="opacity-80 leading-relaxed font-light">
                The ceremony will commence promptly at 12:00 PM. The celebration of love continues immediately at the very same location with an elegant reception dinner.
              </p>
            </div>

            <div className="space-y-2 border-t border-gold/20 pt-6">
              <p className="font-caps text-xs text-gold tracking-widest">ADDRESS</p>
              <p className="font-display text-xl text-ivory">Akamo Hotel, Ugbe Akoko</p>
              <p className="opacity-60 text-sm">Ondo State, Nigeria</p>
            </div>
          </div>

          <div className="min-h-[350px] bg-ivory/10 border border-gold/30 relative overflow-hidden flex flex-col justify-end p-8">
            {/* Minimal architectural abstract representation of map frame */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-48 h-48 rounded-full border border-gold" />
              <div className="w-72 h-72 rounded-full border border-gold absolute" />
            </div>
            
            <div className="z-10 bg-primary/90 p-6 border border-gold/20 backdrop-blur-sm">
              <h4 className="font-caps text-xs tracking-widest text-gold mb-2">DIRECTIONS FOR GUESTS</h4>
              <p className="text-sm opacity-80 mb-4 font-light">Located accessibly within Ugbe Akoko, Ondo State. Safe parking is available on-site.</p>
              <a 
                href="https://maps.google.com/?q=Akamo+Hotel+Ugbe+Akoko+Ondo+State" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-xs font-caps tracking-widest text-gold hover:text-white transition-colors underline underline-offset-4"
              >
                OPEN IN GOOGLE MAPS →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}