import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#00d9ff]/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-gray-400 text-center flex items-center gap-2">
            © {currentYear} Chaudhary Manas Ray. Built with{' '}
            <Heart className="w-4 h-4 text-[#00d9ff] fill-[#00d9ff]" />
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Developed with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
