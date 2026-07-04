"use client";

export default function EventDetails() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-primary text-ivory relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <span className="font-caps text-xs tracking-super text-gold block">THE SOLEMNIZATION</span>
          <h2 className="text-4xl md:text-5xl font-display font-light">Where &amp; When</h2>
          <div className="w-12 h-px bg-gold mx-auto my-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Event Info */}
          <div className="border border-gold/30 p-8 md:p-12 flex flex-col justify-between space-y-12 bg-primary-light">
            <div className="space-y-6">
              <span className="font-caps text-xs tracking-widest text-gold block">SATURDAY, AUGUST 15, 2026</span>
              <h3 className="text-3xl font-display font-light">Holy Matrimony &amp; Reception</h3>
              <p className="opacity-80 leading-relaxed font-light">
                The ceremony will commence promptly at 12:00 PM. The celebration of love continues
                immediately at the very same location with an elegant reception dinner.
              </p>
            </div>

            <div className="space-y-4 border-t border-gold/20 pt-6">
              <div>
                <p className="font-caps text-xs text-gold tracking-widest mb-1">ADDRESS</p>
                <p className="font-display text-xl text-ivory">Akamo Hotel, Ugbe Akoko</p>
                <p className="opacity-60 text-sm">Ondo State, Nigeria</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Akamo+Hotel+Ugbe+Akoko+Ondo+State+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-caps text-[10px] tracking-widest bg-gold text-primary px-5 py-2.5 hover:bg-gold-light transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  OPEN IN GOOGLE MAPS
                </a>
                <a
                  href="https://waze.com/ul?q=Akamo+Hotel+Ugbe+Akoko+Ondo+State+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-caps text-[10px] tracking-widest border border-gold/40 text-gold px-5 py-2.5 hover:bg-gold/10 transition-all duration-300"
                >
                  OPEN IN WAZE
                </a>
              </div>
            </div>
          </div>

          {/* Right: Live Map */}
          <div className="min-h-[450px] border border-gold/30 relative overflow-hidden flex flex-col">
            {/* Map Label */}
            <div className="bg-primary-light border-b border-gold/20 px-5 py-3 flex items-center justify-between">
              <span className="font-caps text-[10px] tracking-widest text-gold">VENUE LOCATION</span>
              <span className="font-caps text-[9px] tracking-widest opacity-40">UGBE AKOKO, ONDO STATE</span>
            </div>

            {/* Embedded Google Map */}
            <div className="flex-1 relative">
              <iframe
                title="Akamo Hotel, Ugbe Akoko, Ondo State"
                src="https://maps.google.com/maps?q=Ugbe+Akoko+Ondo+State+Nigeria&output=embed&z=14"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px", filter: "grayscale(20%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Gold overlay pin label */}
              <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-sm border border-gold/30 px-4 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
                <div>
                  <p className="font-caps text-[9px] tracking-widest text-gold">WEDDING VENUE</p>
                  <p className="font-display text-sm text-ivory">Akamo Hotel, Ugbe Akoko</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}