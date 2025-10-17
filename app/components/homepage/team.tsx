const members = [
  {
    name: "Alex Zuev",
    role: "Co-Founder, Product Wizard",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4",
  },
  {
    name: "Umar Muhandis",
    role: "Co-Founder, Tech Geek",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Umar&backgroundColor=c0aede",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-12 md:py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">
          Meet the Team
        </h2>

        <div>
          <h3 className="mb-6 text-lg font-medium">Co-Founders</h3>
          <div className="grid grid-cols-2 gap-8 border-t py-6 md:gap-12">
            {members.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
