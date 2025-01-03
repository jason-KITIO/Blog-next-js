// components/ThemeProvider.tsx
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <NextThemesProvider
            defaultTheme="dark" // ou "dark" si vous voulez que le mode sombre soit par défaut
            enableSystem={true} // permet à l'utilisateur de choisir le thème système
        >
            {children}
        </NextThemesProvider>
    );
};

export default ThemeProvider;
