'use client';

const logos = [
  { name: 'AWS',            src: '/logos/Amazon_Web_Services_Logo.svg.png', local: true },
  { name: 'GCP',            src: '/logos/google-cloud-icon-2048x1646-7admxejz.png', local: true },
  { name: 'Azure',          src: '/logos/azure.png', local: true },
  { name: 'Docker',         src: 'https://cdn.simpleicons.org/docker/white' },
  { name: 'Kubernetes',     src: 'https://cdn.simpleicons.org/kubernetes/white' },
  { name: 'Terraform',      src: 'https://cdn.simpleicons.org/terraform/white' },
  { name: 'ArgoCD',         src: 'https://cdn.simpleicons.org/argo/white' },
  { name: 'Python',         src: 'https://cdn.simpleicons.org/python/white' },
  { name: 'GitHub Actions', src: 'https://cdn.simpleicons.org/githubactions/white' },
  { name: 'Prometheus',     src: 'https://cdn.simpleicons.org/prometheus/white' },
  { name: 'Grafana',        src: 'https://cdn.simpleicons.org/grafana/white' },
  { name: 'Helm',           src: 'https://cdn.simpleicons.org/helm/white' },
  { name: 'Ansible',        src: 'https://cdn.simpleicons.org/ansible/white' },
  { name: 'Linux',          src: 'https://cdn.simpleicons.org/linux/white' },
  { name: 'Go',             src: 'https://cdn.simpleicons.org/go/white' },
  { name: 'TypeScript',     src: 'https://cdn.simpleicons.org/typescript/white' },
  { name: 'C',              src: 'https://cdn.simpleicons.org/c/white' },
  { name: 'C++',            src: 'https://cdn.simpleicons.org/cplusplus/white' },
  { name: 'Java',           src: 'https://cdn.simpleicons.org/openjdk/white' },
  { name: 'NestJS',         src: 'https://cdn.simpleicons.org/nestjs/white' },
  { name: 'ExpressJS',      src: 'https://cdn.simpleicons.org/express/white' },
  { name: 'Spring Boot',    src: 'https://cdn.simpleicons.org/springboot/white' },
  { name: 'Blockchain',     src: 'https://cdn.simpleicons.org/ethereum/white' },
  { name: 'LangChain',      src: 'https://cdn.simpleicons.org/langchain/white' },
  { name: 'Red Hat',        src: 'https://cdn.simpleicons.org/redhat/white' },
  { name: 'Ubuntu',         src: 'https://cdn.simpleicons.org/ubuntu/white' },
];

const doubled = [...logos, ...logos];

export default function LogoStrip() {
  return (
    <div className="w-full overflow-hidden py-6 border-y border-slate-700/40 bg-slate-900/30">
      <div className="flex animate-scroll-left gap-10 w-max">
        {doubled.map((logo, i) => (
          <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0 w-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.name}
              width={32}
              height={32}
              className={`opacity-60 hover:opacity-100 transition-opacity${logo.local ? ' brightness-0 invert' : ''}`}
            />
            <span className="text-gray-500 text-[10px] text-center leading-tight">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
