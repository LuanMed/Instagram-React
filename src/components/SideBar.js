import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function SideBar() {
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
            <div class="infos">
                <p>
                    <span class="info"> Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags •
                        Idioma </span>
                </p>
            </div>
            <div class="infos2">
                <p>
                    <span class="info">© 2021 INSTAGRAM DO FACEBOOK</span>
                </p>
            </div>
        </div>
    )
}