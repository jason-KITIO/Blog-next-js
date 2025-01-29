import FooterLien from "./footerLien";

export default function Footer() {
    return (
        <footer className="flex justify-between items-center py-4 px-32 text-white">
            <p>© 2024 Melria. Tous droits réservés.</p>
            <div className="flex flex-row space-x-4">
                <FooterLien texte="X" lien="#" image="/images/new-twitter.svg" />
                <FooterLien texte="Github" lien="#" image="/images/github.svg" />
                <FooterLien texte="Linkedin" lien="#" image="/images/linkedin-02.svg" />
                <FooterLien texte="Telegram" lien="#" image="/images/telegram.svg" />
            </div>
        </footer>
    );
}
