// components/ModeToggle.tsx
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
// import { SunIcon, MoonIcon } from '@heroicons/react/solid'; // Assurez-vous d'avoir installé Heroicons

const ModeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2"
        >
            {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
        </button>
    );
};

export default ModeToggle;
