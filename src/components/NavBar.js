export default function NavBar() {
    return (
        <div class="container-cabecalho">
            <div class="cabecalho">
                <div class="cabecalho-esquerda">
                    <div class="icone-instagram">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                    <div class="linha1"></div>
                    <div class="logo">
                        <img src="./assets/img/logo.png" />
                    </div>
                </div>
                <div class="cabecalho-centro">
                    <input placeholder="Pesquisar" class="campo-texto" type="text" />
                </div>
                <div class="cabecalho-direita">
                    <div class="icone-direct">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="icone-pessoas">
                        <ion-icon name="compass-outline"></ion-icon>
                    </div>
                    <div class="icone-atividades">
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div class="icone-perfil">
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}