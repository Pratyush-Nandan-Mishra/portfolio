'use client';

import { motion } from 'framer-motion';
import { Code, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  highlights: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

const iconSlug: Record<string, string> = {
  AWS: 'aws', GCP: 'googlecloud', Azure: 'azure',
  Docker: 'docker', Kubernetes: 'kubernetes', Helm: 'helm',
  'GitHub Actions': 'githubactions', Jenkins: 'jenkins',
  Terraform: 'terraform', Ansible: 'ansible',
  Prometheus: 'prometheus', Grafana: 'grafana', Loki: 'grafana',
  Python: 'python', Go: 'go', TypeScript: 'typescript',
  NestJS: 'nestjs', ExpressJS: 'express', Supabase: 'supabase',
};

const localLogos: Record<string, { src: string; invert?: boolean }> = {
  AWS:   { src: '/logos/Amazon_Web_Services_Logo.svg.png', invert: true },
  Azure: { src: '/logos/azure.png' },
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-14 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center mb-3">
            <Code className="w-7 h-7 text-cyan-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">
            DevOps and cloud infrastructure projects
          </p>
        </motion.div>

        {/* Projects — compact card layout */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-slate-800/30 border border-slate-700/40 rounded-2xl p-6`}
            >
              {/* Image — larger, fills container */}
              <div className="flex-shrink-0 w-full lg:w-72">
                <div className="relative rounded-xl overflow-hidden bg-slate-800 border border-slate-700" style={{ aspectRatio: '16/10' }}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="288px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                      <Code className="w-10 h-10 text-cyan-400" />
                      <p className="text-gray-500 text-xs">Project Preview</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => {
                    const local = localLogos[tech];
                    const slug = iconSlug[tech];
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-slate-700/50 border border-slate-600/50 rounded-full text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                      >
                        {local ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img src={local.src} alt="" width={11} height={11} className={`opacity-80${local.invert ? ' brightness-0 invert' : ''}`} />
                        ) : slug ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img src={`https://cdn.simpleicons.org/${slug}/white`} alt="" width={11} height={11} className="opacity-80" />
                        ) : null}
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all text-sm font-medium w-fit"
                >
                  <Code className="w-4 h-4" />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
