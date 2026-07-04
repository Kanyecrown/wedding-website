export default function DressCode() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-ivory">
      <div className="max-w-4xl mx-auto border border-gold/20 p-8 md:p-16 text-center space-y-8 bg-ivory-dark relative">
        <span className="font-caps text-xs tracking-super text-gold block">THE VISUAL PALETTE</span>
        <h2 className="text-3xl md:text-4xl font-display font-light text-primary">Dress Code</h2>
        <div className="w-12 h-px bg-gold mx-auto" />
        
        <p className="text-primary/80 font-light max-w-xl mx-auto leading-relaxed">
          We kindly request our respected guests to celebrate in harmony with our visual environment. Please review the official palette layout below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            <span className="font-caps text-xs tracking-widest text-primary/60 block">HONORED GUESTS</span>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white border border-black/10 shadow-md" />
              <div className="text-left">
                <p className="font-display font-medium text-primary">Pure White</p>
                <p className="text-xs opacity-60 font-light">Crisp traditional or formal wear</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <span className="font-caps text-xs tracking-widest text-primary/60 block">BRIDAL PARTY</span>
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-[#E8A98A] border border-white z-10 shadow-sm" />
                <div className="w-12 h-12 rounded-full bg-[#0F1A3D] border border-white shadow-sm" />
              </div>
              <div className="text-left">
                <p className="font-display font-medium text-primary">Peach & Royal Blue</p>
                <p className="text-xs opacity-60 font-light">Designated attire family</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}