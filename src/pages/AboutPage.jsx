import SEO from "../components/SEO";
import { FiAward, FiUsers, FiTarget, FiHeart } from "react-icons/fi";

const team = [
  {
    name: "Jake Morrison",
    title: "Founder & Master Pitmaster",
    bio: "World BBQ champion 2017 & 2019. Jake started BBQ Pioneer to bring competition-grade quality to every backyard.",
    initials: "JM",
  },
  {
    name: "Rachel Chen",
    title: "Head of Product Engineering",
    bio: "15 years in metal fabrication. Rachel's obsession with perfect welds and heat distribution defines every BBQ Pioneer grill.",
    initials: "RC",
  },
  {
    name: "Carlos Reyes",
    title: "Head of Customer Experience",
    bio: "Former competitive pitmaster turned customer advocate. Carlos ensures every Pioneer owner gets championship support.",
    initials: "CR",
  },
];

const values = [
  {
    Icon: FiTarget,
    title: "Uncompromising Quality",
    desc: "Every grill is hand-inspected before it leaves our facility. We reject anything that doesn't meet championship standards.",
  },
  {
    Icon: FiAward,
    title: "Built to Last a Lifetime",
    desc: "We use the same grade steel trusted by industrial fabricators. Our grills are heirlooms, not appliances.",
  },
  {
    Icon: FiUsers,
    title: "Community First",
    desc: "From recipe guides to cook-alongs and pitmaster events, the BBQ Pioneer community is a family of fire lovers.",
  },
  {
    Icon: FiHeart,
    title: "Passion for BBQ",
    desc: "We are pitmasters ourselves. We build the grills we wish existed when we started our own BBQ journeys.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="Our Story — BBQ Pioneer"
        description="Learn about BBQ Pioneer's mission to bring championship-grade grills and smokers to every serious pitmaster."
        canonical="/about"
      />

      {/* Hero */}
      <div className="relative py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1920&q=80"
          alt="BBQ Pioneer team"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coal-900/80 to-coal-900" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <span className="text-fire-500 text-sm font-bold uppercase tracking-widest mb-4 block">
            Our Story
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider mb-6">
            BORN FROM THE PIT
          </h1>
          <p className="text-coal-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            BBQ Pioneer was founded by championship pitmasters who were tired of choosing between
            quality and performance. We built what the market was missing — grills built for those
            who refuse to settle.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-fire-500 text-sm font-bold uppercase tracking-widest block mb-4">
              Why We Exist
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-6">
              THE BEST BBQ<br />DESERVES THE BEST TOOLS
            </h2>
            <div className="space-y-4 text-coal-300 text-base leading-relaxed">
              <p>
                In 2009, founder Jake Morrison won his first World Championship BBQ title using a
                $300 backyard offset smoker with duct-taped seals and hand-drilled tuning plates.
                He knew that with the right tools, every pitmaster could cook at that level.
              </p>
              <p>
                BBQ Pioneer was born in 2012 from a small Austin, Texas workshop. Today, over
                10,000 professional and backyard pitmasters across North America trust our grills
                to deliver the results that matter.
              </p>
              <p>
                Every grill that leaves our facility has been touch-inspected, test-fired, and
                approved by a team of working pitmasters — not just engineers.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
              alt="BBQ Pioneer grill in action"
              className="rounded-3xl w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-fire-600 rounded-2xl p-5 text-white text-center shadow-xl fire-glow">
              <p className="font-display text-4xl tracking-wider">15+</p>
              <p className="text-xs font-semibold uppercase tracking-wide mt-1">Years<br />in Business</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-white tracking-wider">OUR VALUES</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-coal-800 border border-coal-700 rounded-2xl p-6 hover:border-fire-600/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-fire-600/10 flex items-center justify-center mb-4 group-hover:bg-fire-600/20 transition-colors">
                  <Icon size={22} className="text-fire-500" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-coal-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-12">
            <span className="text-fire-500 text-sm font-bold uppercase tracking-widest block mb-2">
              The People Behind the Flames
            </span>
            <h2 className="font-display text-4xl text-white tracking-wider">MEET THE TEAM</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-coal-800 border border-coal-700 rounded-2xl p-8 text-center hover:border-fire-600/50 transition-colors"
              >
                <div className="w-20 h-20 rounded-full fire-gradient flex items-center justify-center mx-auto mb-4 text-white font-display text-2xl tracking-wider">
                  {member.initials}
                </div>
                <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-fire-500 text-sm font-semibold mb-3">{member.title}</p>
                <p className="text-coal-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
