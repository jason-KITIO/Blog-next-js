import React, { useState, useEffect } from 'react';

const UseLocal = () => {

    const [locale, setLocale] = useState<string | null>(null);

    useEffect(() => {
        // Vérifiez si window est défini avant d'accéder à son contenu
        if (typeof window !== 'undefined') {
            const currentPath = window.location.pathname; // ou utiliser usePathname() si disponible
            const extractedLocale = currentPath.split('/')[1]; // Supposons que le format soit /[locale]/details/[id]
            setLocale(extractedLocale);
        }
    }, []);

    return locale;
};

export default UseLocal;