'use client';

import { motion } from 'framer-motion';
import {
  Cloud, Box, GitBranch, Layers, Activity, Terminal, LucideIcon
} from 'lucide-react';

interface SkillGroup {
  category: string;
  items: string[];
}

interface PersonalData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  availableForWork: boolean;
}

interface Props {
  skills: SkillGroup[];
  personalData: PersonalData;
}

// Map category name → lucide icon + accent colour
const categoryMeta: Record<string, { icon: LucideIcon; color: string; border: string; iconColor: string }> = {
  Cloud:      { icon: Cloud,     color: 'bg-blue-950/40',   border: 'border-blue-800/40',   iconColor: 'text-blue-400'   },
  Containers: { icon: Box,       color: 'bg-cyan-950/40',   border: 'border-cyan-800/40',   iconColor: 'text-cyan-400'   },
  'CI/CD':    { icon: GitBranch, color: 'bg-violet-950/40', border: 'border-violet-800/40', iconColor: 'text-violet-400' },
  IaC:        { icon: Layers,    color: 'bg-orange-950/40', border: 'border-orange-800/40', iconColor: 'text-orange-400' },
  Monitoring: { icon: Activity,  color: 'bg-green-950/40',  border: 'border-green-800/40',  iconColor: 'text-green-400'  },
  Languages:  { icon: Terminal,  color: 'bg-pink-950/40',   border: 'border-pink-800/40',   iconColor: 'text-pink-400'   },
};

// Tech name → simpleicons.org slug
const iconSlug: Record<string, string> = {
  AWS: 'aws', GCP: 'googlecloud', Azure: 'azure',
  DigitalOcean: 'digitalocean', Docker: 'docker', Kubernetes: 'kubernetes',
  Helm: 'helm', Podman: 'podman', 'GitHub Actions': 'githubactions',
  Jenkins: 'jenkins', 'GitLab CI': 'gitlab', ArgoCD: 'argo',
  Terraform: 'terraform', Ansible: 'ansible', Pulumi: 'pulumi',
  Prometheus: 'prometheus', Grafana: 'grafana', Datadog: 'datadog',
  Python: 'python', Go: 'go', Bash: 'gnubash', TypeScript: 'typescript',
};


export default function AboutSection({ skills, personalData }: Props) {
  const totalTech = skills.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">Who I am</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent mt-4" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left — Bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Bio card */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-gray-300 text-base leading-relaxed">
                {personalData.bio}
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: `${totalTech}+`, label: 'Technologies' },
                { value: `${skills.length}`, label: 'Domains' },
                { value: personalData.availableForWork ? 'Open' : 'Busy', label: 'to Work' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Location pill */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {personalData.location}
            </div>
          </motion.div>

          {/* Right — Tech stack */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-xs font-semibold tracking-widest uppercase"
            >
              Tech Stack
            </motion.p>

            {skills.map((group, gi) => {
              const meta = categoryMeta[group.category];
              const Icon = meta?.icon ?? Terminal;

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: gi * 0.08 }}
                  className={`rounded-xl border p-4 backdrop-blur-sm ${meta?.color ?? 'bg-slate-800/40'} ${meta?.border ?? 'border-slate-700/50'}`}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-4 h-4 ${meta?.iconColor ?? 'text-gray-400'}`} />
                    <span className={`text-xs font-semibold tracking-widest uppercase ${meta?.iconColor ?? 'text-gray-400'}`}>
                      {group.category}
                    </span>
                  </div>

                  {/* Tech pills with logos */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => {
                      const slug = iconSlug[tech];
                      return (
                        <div
                          key={tech}
                          className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/40 rounded-full px-3 py-1 hover:border-slate-500/60 transition-colors"
                        >
                          {slug && (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={`https://cdn.simpleicons.org/${slug}/white`}
                              alt={tech}
                              width={14}
                              height={14}
                              className="opacity-80"
                            />
                          )}
                          <span className="text-gray-300 text-xs font-medium">{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
