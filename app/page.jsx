export const metadata = {
  title: "Friends of Scouting",
  description:
    "Supporting youth, leadership, conservation, and outdoor adventure through Scouting.",
};

const board = [
  { name: "Boyd Browning", role: "President" },
  { name: "Rick Boulis", role: "Vice President & Treasurer" },
  { name: "Devon McClintic", role: "Secretary" },
  { name: "Jeffrey McClintic", role: "Director" },
  { name: "Sally Nelsen", role: "Director" },
];

const programs = [
  {
    title: "Leadership Development",
    text: "We support youth leadership growth through Scouting opportunities that build confidence, responsibility, service, and practical life skills.",
  },
  {
    title: "Outdoor Adventure",
    text: "Funding helps provide access to camping, hiking, high-adventure outings, and outdoor experiences that strengthen teamwork and character.",
  },
  {
    title: "Conservation Stewardship",
    text: "We support conservation-focused education and service projects that teach young people to protect natural resources and care for the outdoors.",
  },
  {
    title: "Camperships & Equipment",
    text: "We help remove financial barriers by supporting camp fees, training, gear, and essential program resources for local Scouting youth.",
  },
];

const highlights = [
  "Support for Troop 111B, Troop 111G, and Crew 1111",
  "IRS-recognized 501(c)(3) public charity",
  "Youth leadership, service, and outdoor education",
  "Conservation-focused mission and programming",
];

const resources = [
  {
    title: "IRS Form W-9",
    text: "Provide donors, sponsors, and grant partners with your completed W-9 upon request.",
    href: "#contact",
    label: "W-9 Available on Request",
  },
  {
    title: "IRS Determination Letter",
    text: "Make your federal tax-exempt status easy to verify for sponsors and grant applications.",
    href: "#contact",
    label: "Request IRS Letter",
  },
  {
    title: "Sponsor Packet",
    text: "Share your mission, giving opportunities, and organizational details in one place.",
    href: "#contact",
    label: "Request Sponsor Packet",
  },
];

const stats = [
  { value: "3", label: "Local units served" },
  { value: "100%", label: "Volunteer-led governance" },
  { value: "4", label: "Core program priorities" },
];

function SectionEyebrow({ children }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#86633b]">
      {children}
    </div>
  );
}

function MountainDivider() {
  return (
    <div className="relative h-20 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent_0%,#efe7d8_100%)]" />
      <svg
        viewBox="0 0 1440 220"
        className="absolute bottom-0 h-full w-full text-[#e6dccb]"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,180L120,120L240,150L360,70L480,140L600,60L720,140L840,90L960,160L1080,80L1200,130L1320,75L1440,140L1440,220L0,220Z"
        />
      </svg>
    </div>
  );
}

export default function FriendsOfScoutingWebsite() {
  return (
    <div className="min-h-screen bg-[#efe7d8] text-slate-900">
      <header className="relative overflow-hidden bg-[#17331f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,151,98,0.30),transparent_30%),radial-gradient(circle_at_top_right,rgba(194,156,90,0.20),transparent_28%),linear-gradient(135deg,#102817_0%,#1e4428_45%,#6f5631_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 md:pb-28 md:pt-10">
          <nav className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-100">
                Friends of Scouting
              </div>
              <div className="mt-2 text-sm text-emerald-50/80">Linden, Michigan</div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-medium text-white/90">
              <a href="#mission" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur hover:bg-white/10">Mission</a>
              <a href="#programs" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur hover:bg-white/10">Programs</a>
              <a href="#board" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur hover:bg-white/10">Board</a>
              <a href="#resources" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur hover:bg-white/10">Resources</a>
              <a href="#donate" className="rounded-full bg-[#e3c489] px-4 py-2 text-slate-900 shadow-lg hover:brightness-105">Donate</a>
            </div>
          </nav>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-emerald-200/15 bg-white/8 px-4 py-2 text-sm font-medium text-emerald-50 backdrop-blur">
                Youth leadership • outdoor adventure • conservation
              </div>
              <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                A stronger, more inspiring home for local Scouting.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/85 md:text-xl">
                Friends of Scouting strengthens local Scouting by funding youth development, outdoor adventure, conservation-focused experiences, leadership training, camperships, and essential program support for Troop 111B, Troop 111G, and Crew 1111.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#donate"
                  className="rounded-2xl bg-[#e3c489] px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl hover:brightness-105"
                >
                  Support the Mission
                </a>
                <a
                  href="#programs"
                  className="rounded-2xl border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/12"
                >
                  Explore Programs
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur"
                  >
                    <div className="text-3xl font-bold text-white">{item.value}</div>
                    <div className="mt-1 text-sm text-emerald-50/80">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#d8b882]/25 blur-2xl" />
              <div className="absolute -bottom-8 -right-6 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

              <div className="relative rounded-[2.25rem] border border-white/12 bg-white/8 p-5 shadow-2xl backdrop-blur-md">
                <div className="rounded-[1.75rem] bg-[#f6f0e4] p-6 text-slate-900 shadow-inner">
                  <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.5rem] bg-[linear-gradient(160deg,#284a2f_0%,#17311e_55%,#7c6035_100%)] p-6 text-white shadow-lg">
                      <div className="text-xs uppercase tracking-[0.25em] text-emerald-100">
                        Organization Snapshot
                      </div>
                      <div className="mt-5 space-y-3">
                        {highlights.map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-emerald-50/95"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="rounded-[1.5rem] border border-[#e6dcc8] bg-white p-5 shadow-sm">
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86633b]">
                          Contact
                        </div>
                        <div className="mt-4 space-y-2 text-sm text-slate-700">
                          <div>13073 Stony Brook Pass</div>
                          <div>Linden, MI 48451</div>
                          <div className="pt-2 font-medium text-[#1c3923]">bbrowning.80@gmail.com</div>
                          <div>EIN: 41-2719516</div>
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] border border-[#e6dcc8] bg-[#ece1cc] p-5 shadow-sm">
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86633b]">
                          Mission Focus
                        </div>
                        <div className="mt-3 text-sm leading-7 text-slate-700">
                          Funding leadership, access, equipment, service, and outdoor experiences that help young people grow through Scouting.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MountainDivider />

      <main>
        <section id="mission" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-[#e2d7c6] bg-white p-8 shadow-sm">
              <SectionEyebrow>Our Mission</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17341f] md:text-4xl">
                Fueling local Scouting with purpose-driven support.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Friends of Scouting exists to support and strengthen Scouting programs by providing financial resources for youth development, leadership training, outdoor education, conservation-focused experiences, and outdoor adventure for Troop 111B, Troop 111G, and Crew 1111.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#d6c6aa] bg-[linear-gradient(180deg,#f0e6d6_0%,#e9ddca_100%)] p-8 shadow-sm">
              <SectionEyebrow>Who We Serve</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4a351c] md:text-4xl">
                Local youth who thrive in service, adventure, and the outdoors.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Our organization helps remove financial barriers and strengthen high-quality Scouting experiences for youth and families by supporting local troops and crew with camperships, training, gear, and meaningful outdoor opportunities.
              </p>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-[#e4dbc9] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <SectionEyebrow>Programs &amp; Services</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17341f] md:text-5xl">
                Real support for real Scouting experiences.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                We raise and steward funds to strengthen character-building programs rooted in leadership, outdoor learning, conservation, and service.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {programs.map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-[#d6c9b2] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-full bg-[#1f4729] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-50">
                    0{index + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[#17341f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-[#e2d7c6] bg-white p-8 shadow-sm">
              <SectionEyebrow>Why Give</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17341f] md:text-4xl">
                Every donation helps keep Scouting accessible.
              </h2>
              <div className="mt-6 space-y-4 text-slate-600">
                <p>
                  Donations help provide camperships, training, equipment, conservation-focused activities, and program support for local Scouting youth.
                </p>
                <p>
                  Every contribution helps strengthen leadership development, outdoor adventure, service, and access for youth who might otherwise miss these opportunities.
                </p>
                <p>
                  Friends of Scouting is governed by a volunteer Board of Directors and uses structured financial controls, including board oversight and regular reporting.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[linear-gradient(180deg,#23482d_0%,#132819_100%)] p-8 text-white shadow-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100">
                Built for Stewardship
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Strong governance. Local impact.
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-emerald-50/90">
                <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Michigan nonprofit corporation
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  IRS-recognized 501(c)(3) public charity
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Board oversight with regular meetings and financial controls
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Focused on youth leadership, outdoor education, and conservation
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="board" className="bg-[#f8f3ea] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <SectionEyebrow>Board of Directors</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17341f] md:text-5xl">
                Volunteer leaders guiding the mission.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Friends of Scouting is led by a volunteer board responsible for governance, financial oversight, compliance, and stewardship of the organization’s charitable mission.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {board.map((member) => (
                <div
                  key={member.name}
                  className="rounded-[2rem] border border-[#e3d8c8] bg-white p-6 shadow-sm transition hover:shadow-lg"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86633b]">
                    Board Member
                  </div>
                  <div className="mt-3 text-xl font-semibold text-[#17341f]">
                    {member.name}
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="bg-[#ddd3c1] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-[#d2c2a6] bg-[#f7f1e6] p-8 shadow-sm">
                <SectionEyebrow>Resources for Donors &amp; Sponsors</SectionEyebrow>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17341f] md:text-4xl">
                  Give people what they need to say yes.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  This section is designed for downloadable documents that support donations, sponsorships, grant requests, and vendor setup.
                </p>
                <div className="mt-8 grid gap-4">
                  {resources.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] border border-[#e0d2ba] bg-white p-5 shadow-sm"
                    >
                      <div className="text-lg font-semibold text-[#17341f]">
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                      <a
                        href={item.href}
                        className="mt-4 inline-flex rounded-full bg-[#23472c] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-50 hover:brightness-110"
                      >
                        {item.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div
                id="donate"
                className="rounded-[2.5rem] bg-[linear-gradient(135deg,#6f5631_0%,#23472c_45%,#13271a_100%)] p-8 text-white shadow-2xl md:p-12"
              >
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="max-w-3xl">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">
                      Support Friends of Scouting
                    </div>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                      Invest in youth, the outdoors, and the future of Scouting.
                    </h2>
                    <p className="mt-5 text-base leading-8 text-emerald-50/90">
                      Add your donation platform, QR code, or sponsorship details here. This section can be expanded with online giving, sponsor levels, downloadable W-9 forms, and your IRS determination letter.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href="mailto:bbrowning.80@gmail.com?subject=Friends%20of%20Scouting%20Donation%20Inquiry"
                        className="rounded-2xl bg-[#f1d29d] px-6 py-3 text-sm font-semibold text-slate-900 hover:brightness-105"
                      >
                        Contact About Giving
                      </a>
                      <a
                        href="#contact"
                        className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
                      >
                        Sponsorship Information
                      </a>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">
                      Quick Contact
                    </div>
                    <div className="mt-4 space-y-3 text-sm text-white/90">
                      <div>Friends of Scouting</div>
                      <div>13073 Stony Brook Pass</div>
                      <div>Linden, MI 48451</div>
                      <div>bbrowning.80@gmail.com</div>
                      <div>EIN: 41-2719516</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-16 pt-6 md:pb-20">
          <div className="rounded-[2rem] border border-[#e3d8c8] bg-white p-8 shadow-sm">
            <SectionEyebrow>Contact</SectionEyebrow>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#17341f] md:text-3xl">
              Get in touch
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-[#f7f2e9] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86633b]">Organization</div>
                <div className="mt-2 text-sm text-slate-700">Friends of Scouting</div>
              </div>
              <div className="rounded-2xl bg-[#f7f2e9] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86633b]">Email</div>
                <div className="mt-2 text-sm text-slate-700">bbrowning.80@gmail.com</div>
              </div>
              <div className="rounded-2xl bg-[#f7f2e9] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86633b]">EIN</div>
                <div className="mt-2 text-sm text-slate-700">41-2719516</div>
              </div>
              <div className="rounded-2xl bg-[#f7f2e9] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86633b]">Address</div>
                <div className="mt-2 text-sm text-slate-700">13073 Stony Brook Pass, Linden, MI 48451</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
