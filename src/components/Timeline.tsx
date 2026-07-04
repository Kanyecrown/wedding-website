const schedule = [
  { time: '11:30 AM', title: 'Guests arrive', detail: 'Welcome drinks and seating' },
  { time: '12:00 PM', title: 'Ceremony', detail: 'The wedding ceremony begins' },
  { time: '1:00 PM', title: 'Reception', detail: 'Dinner, toasts, and celebration' },
  { time: '3:00 PM', title: 'Evening continues', detail: 'Music, photos, and joyful fellowship' },
];

export function Timeline() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-label text-[0.72rem] uppercase tracking-[0.35em] text-gold">Order of the day</p>
          <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">A simple rhythm for an unforgettable afternoon.</h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-navy/75">We have kept the celebration flowing with a calm, intentional schedule so guests can enjoy each moment fully.</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {schedule.map((item) => (
          <div key={item.time} className="rounded-[1.4rem] border border-gold/20 bg-white/80 p-6 shadow-sm">
            <p className="font-label text-[0.7rem] uppercase tracking-[0.35em] text-gold">{item.time}</p>
            <h3 className="mt-3 font-display text-2xl text-navy">{item.title}</h3>
            <p className="mt-2 text-lg leading-8 text-navy/70">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
