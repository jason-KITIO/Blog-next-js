import Image from "next/image";
import { useState } from "react";
import LogoutPopup from "../pages/Logout";
import { useRouter } from 'next/navigation';
import useLocale from "../../utils/useLocal";

interface ISlideBareProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const Sidebar = ({ setActiveSection, activeSection }: ISlideBareProps) => {
    const router = useRouter();
    const locale = useLocale();

    const [showLogoutPopup, setShowLogoutPopup] = useState(false); // État pour gérer l'affichage du popup

    const handleLogout = () => {
        console.log("Déconnecté !");
        router.push(`/${locale}/dashboard`)
        setShowLogoutPopup(false); // Fermer le popup après la déconnexion
    };

    return (
        <div className="w-64 h-screen text-white p-5 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <h2 className="text-lg font-bold">melria</h2>
                <div className="flex flex-row items-center gap-2 border border-gris6b rounded-lg p-2">
                    <Image src="/images/search-01.svg" alt="logo" width={15} height={15} />
                    <input type="search" name="search" id="search" placeholder="search" className="bg-transparent outline-none text-lg w-full" />
                </div>
                <ul className="flex flex-col gap-[10px]">
                    <li
                        onClick={() => setActiveSection('home')}
                        className={`flex flex-row gap-2 items-center text-base px-4 py-3 rounded-lg cursor-pointer  ${activeSection === 'home' ? 'bg-[#8d84821a] border border-gris6b' : ''}`}>
                        <Image src="/images/home 04.svg" alt="logo" width={25} height={25} />
                        Home
                    </li>
                    <li
                        onClick={() => setActiveSection('Posts')}
                        className={`flex flex-row gap-2 items-center text-base px-4 py-3 rounded-lg cursor-pointer  ${activeSection === 'Posts' ? 'bg-[#8d84821a] border border-gris6b' : ''}`}>
                        <Image src="/images/license-draft.svg" alt="logo" width={25} height={25} />
                        Posts
                    </li>
                    <li
                        onClick={() => setActiveSection('newsletter')}
                        className={`flex flex-row gap-2 items-center text-base px-4 py-3 rounded-lg cursor-pointer  ${activeSection === 'newsletter' ? 'bg-[#8d84821a] border border-gris6b' : ''}`}>
                        <Image src="/images/news.svg" alt="logo" width={25} height={25} />
                        newsletter
                    </li>
                </ul>
            </div>
            <div>
                <ul className="mt-5">
                    <li
                        onClick={() => setActiveSection('settings')}
                        className={`flex flex-row gap-2 items-center text-base px-4 py-3 rounded-lg cursor-pointer  ${activeSection === 'settings' ? 'bg-[#8d84821a] border border-gris6b' : ''}`}>
                        <Image src="/images/settings-01.svg" alt="logo" width={25} height={25} />
                        Settings
                    </li>
                    <li
                        onClick={() => setShowLogoutPopup(true)} // Ouvrir le popup de déconnexion
                        className={`flex flex-row gap-2 items-center text-base px-4 py-3 rounded-lg cursor-pointer ${activeSection === 'Logout' ? 'bg-[#8d84821a] border border-gris6b' : ''}`}>
                        <Image src="/images/logout-01.svg" alt="logo" width={25} height={25} />
                        Logout
                    </li>

                    {showLogoutPopup && ( // Afficher le popup si showLogoutPopup est vrai
                        <LogoutPopup
                            onClose={() => setShowLogoutPopup(false)}
                            onConfirm={handleLogout}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
