'use client';

import { motion } from 'framer-motion';
import {
  Cloud, Box, GitBranch, Layers, Activity, Terminal, Cpu, Sparkles, LucideIcon
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
  availableForWork: boolean;
}

interface Props {
  skills: SkillGroup[];
  personalData: PersonalData;
}

const categoryMeta: Record<string, { icon: LucideIcon; color: string; border: string; iconColor: string; bg: string }> = {
  Cloud:      { icon: Cloud,     bg: 'bg-blue-950/40',    color: 'bg-blue-950/40',   border: 'border-blue-800/40',    iconColor: 'text-blue-400'   },
  Containers: { icon: Box,       bg: 'bg-cyan-950/40',    color: 'bg-cyan-950/40',   border: 'border-cyan-800/40',    iconColor: 'text-cyan-400'   },
  'CI/CD':    { icon: GitBranch, bg: 'bg-violet-950/40',  color: 'bg-violet-950/40', border: 'border-violet-800/40',  iconColor: 'text-violet-400' },
  IaC:        { icon: Layers,    bg: 'bg-orange-950/40',  color: 'bg-orange-950/40', border: 'border-orange-800/40',  iconColor: 'text-orange-400' },
  Monitoring: { icon: Activity,  bg: 'bg-green-950/40',   color: 'bg-green-950/40',  border: 'border-green-800/40',   iconColor: 'text-green-400'  },
  Languages:  { icon: Terminal,  bg: 'bg-pink-950/40',    color: 'bg-pink-950/40',   border: 'border-pink-800/40',    iconColor: 'text-pink-400'   },
  Backend:    { icon: Cpu,       bg: 'bg-emerald-950/40', color: 'bg-emerald-950/40',border: 'border-emerald-800/40', iconColor: 'text-emerald-400'},
  GenAI:      { icon: Sparkles,  bg: 'bg-yellow-950/40',  color: 'bg-yellow-950/40', border: 'border-yellow-800/40',  iconColor: 'text-yellow-400' },
};

const iconSlug: Record<string, string> = {
  AWS: 'aws', GCP: 'googlecloud', Azure: 'azure',
  Docker: 'docker', Kubernetes: 'kubernetes', Helm: 'helm', Podman: 'podman',
  'GitHub Actions': 'githubactions', Jenkins: 'jenkins', 'GitLab CI': 'gitlab', ArgoCD: 'argo',
  Terraform: 'terraform', Ansible: 'ansible',
  Prometheus: 'prometheus', Grafana: 'grafana', Datadog: 'datadog',
  Python: 'python', Go: 'go', Bash: 'gnubash', TypeScript: 'typescript',
  NestJS: 'nestjs', ExpressJS: 'express', Supabase: 'supabase',
  LangChain: 'langchain', OpenAI: 'openai', HuggingFace: 'huggingface', Ollama: 'ollama',
};

// Local logos that need special handling
const localLogos: Record<string, { src: string; invert?: boolean }> = {
  AWS:   { src: '/logos/Amazon_Web_Services_Logo.svg.png', invert: true },
  Azure: { src: '/logos/azure.png' },
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
          className="mb-12"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">Who I am</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent mt-4" />
        </motion.div>

        {/* Bio + Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-4 gap-6 mb-8"
        >
          {/* Bio */}
          <div className="col-span-3 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-7 backdrop-blur-sm">
            <p className="text-gray-300 text-base leading-relaxed">
              {personalData.bio}
            </p>
          </div>

          {/* Stats */}
          <div className="col-span-1 flex flex-col gap-3">
            {[
              { value: `${totalTech}+`, label: 'Technologies' },
              { value: `${skills.length}`,  label: 'Domains'       },
              { value: personalData.availableForWork ? 'Open' : 'Busy', label: 'to Work' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center backdrop-blur-sm flex-1 flex flex-col items-center justify-center"
              >
                <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
                <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack — 2-column grid */}
        <div>
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-4">Tech Stack</p>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((group, gi) => {
              const meta = categoryMeta[group.category];
              const Icon = meta?.icon ?? Terminal;

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: gi * 0.06 }}
                  className={`rounded-xl border p-4 backdrop-blur-sm ${meta?.bg ?? 'bg-slate-800/40'} ${meta?.border ?? 'border-slate-700/50'}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-4 h-4 ${meta?.iconColor ?? 'text-gray-400'}`} />
                    <span className={`text-xs font-semibold tracking-widest uppercase ${meta?.iconColor ?? 'text-gray-400'}`}>
                      {group.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => {
                      const local = localLogos[tech];
                      const slug = iconSlug[tech];
                      return (
                        <div
                          key={tech}
                          className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-700/40 rounded-full px-3 py-1 hover:border-slate-500/60 transition-colors"
                        >
                          {local ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={local.src}
                              alt={tech}
                              width={13}
                              height={13}
                              className={`opacity-80 object-contain${local.invert ? ' brightness-0 invert' : ''}`}
                            />
                          ) : slug ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={`https://cdn.simpleicons.org/${slug}/white`}
                              alt={tech}
                              width={13}
                              height={13}
                              className="opacity-80 object-contain"
                            />
                          ) : null}
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
