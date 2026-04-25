interface PersonalData {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  availableForWork: boolean;
}

interface Props {
  personalData: PersonalData;
}

export default function Footer({ personalData }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 py-8 px-6 text-center relative z-10">
      <p className="text-gray-600 text-sm">
        © {year} {personalData.name}. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}
