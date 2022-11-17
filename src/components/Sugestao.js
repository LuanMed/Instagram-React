export default function Sugestao() {

    const sugestoes = [
        {
            imagem: <img src="./assets/img/badvibesmemes.png" />,
            texto: <p> <span class="linha1-perfil1">bad.vibes.memes</span><br /><span class="linha2-perfil1">Segue você</span></p>
        },
        {
            imagem: <img src="./assets/img/chibirdart.png" />,
            texto: <p> <span class="linha1-perfil1">chibirdart</span><br /><span class="linha2-perfil1">Segue você</span></p>
        },
        {
            imagem: <img src="./assets/img/razoesparaacreditar.png" />,
            texto: <p> <span class="linha1-perfil1">razoesparaacreditar</span><br /><span class="linha2-perfil1">Novo no Instagram</span></p>
        },
        {
            imagem: <img src="./assets/img/adorableanimals.png" />,
            texto: <p> <span class="linha1-perfil1">adorable_animals</span><br /><span class="linha2-perfil1">Segue você</span></p>
        },
        {
            imagem: <img src="./assets/img/smallcutecats.png" />,
            texto: <p> <span class="linha1-perfil1">smallcutecats</span> <br /><span class="linha2-perfil1">Segue você</span></p>
        }
    ]

    return (
        <div>
            {sugestoes.map((sugestao) =>
                <div class='sugestao'>
                    <div class='perfil1'>
                        {sugestao.imagem}
                        {sugestao.texto}
                    </div>
                    <p> <span class="seguir">Seguir</span></p>
                </div>)}
        </div>
    )
}