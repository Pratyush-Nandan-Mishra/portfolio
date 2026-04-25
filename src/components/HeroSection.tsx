interface PersonalData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  availableForWork: boolean;
}

interface Socials {
  github: string;
  linkedin: string;
  email: string;
  medium: string;
}

interface Props {
  data: PersonalData;
  socials: Socials;
}

export default function HeroSection({ data, socials }: Props) {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-130px)] flex flex-col items-center justify-center text-center px-6 pt-20"
    >
      {data.availableForWork && (
        <div className="mb-6 flex items-center gap-2 bg-cyan-950/40 border border-cyan-800/50 rounded-full px-4 py-1.5 text-sm text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for opportunities
        </div>
      )}

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
        {data.name}
      </h1>

      <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-4">
        {data.role}
      </p>

      <p className="text-gray-400 text-lg max-w-xl mb-10">
        {data.tagline}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <a href="#projects" className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-cyan-300 transition-colors">
          View My Work
        </a>
        <a href="#contact" className="border border-zinc-700 text-white font-semibold px-6 py-3 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors">
          Get in Touch
        </a>
      </div>

      <div className="flex items-center gap-5">
        {socials.github && (
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
        {socials.medium && (
          <a href={socials.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </a>
        )}
        {socials.email && (
          <a href={`mailto:${socials.email}`} aria-label="Email" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        )}
      </div>

      <div className="mt-16 animate-bounce text-gray-600">
        <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
