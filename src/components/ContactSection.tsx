interface PersonalData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  availableForWork: boolean;
}

interface Socials {
  github: string;
  linkedin: string;
  email: string;
  medium: string;
}

interface Props {
  personalData: PersonalData;
  socials: Socials;
}

const contactLinks = [
  {
    key: "github" as const,
    label: "GitHub",
    description: "Check out my repositories and open source contributions",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    key: "linkedin" as const,
    label: "LinkedIn",
    description: "Connect with me professionally",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    key: "medium" as const,
    label: "Medium",
    description: "Read my articles on DevOps and backend engineering",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
];

export default function ContactSection({ personalData, socials }: Props) {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
      <div className="w-12 h-1 bg-cyan-400 mb-4 rounded" />
      <p className="text-gray-400 mb-10 max-w-lg">
        I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about tech.
      </p>

      <a
        href={`mailto:${socials.email}`}
        className="inline-flex items-center gap-3 bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-cyan-300 transition-colors mb-12"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Send me an email
      </a>

      <div className="grid sm:grid-cols-3 gap-5">
        {contactLinks.map(({ key, label, description, icon }) => {
          const url = socials[key];
          if (!url) return null;
          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111] border border-zinc-800 rounded-xl p-5 flex flex-col gap-3 hover:border-cyan-800/50 transition-all duration-300 group"
            >
              <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">{icon}</div>
              <div>
                <p className="text-white font-semibold text-sm">{label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
