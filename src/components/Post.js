export default function Post() {

    const posts = [
        {
            imagemPerfil: <img src="./assets/img/meowed.png" />,
            nomePerfil: 'meowed',
            fotoPost: <img data-test="post-image" src="./assets/img/yui1.jpeg" />,
            imagemLike: <img src="./assets/img/respondeai.png" />,
            nomeLike: 'respondeai',
            qtdLike: 'outras 101.523 pessoas',
            nomeComentario: 'luanmede ',
            comentario: 'Aaah, gatíneaaa',
        },
        {
            imagemPerfil: <img src="./assets/img/barked1.png" />,
            nomePerfil: 'barked',
            fotoPost: <img data-test="post-image" src="./assets/img/yui2.jpeg" />,
            imagemLike: <img src="./assets/img/adorableanimals.png" />,
            nomeLike: 'adorable_animals',
            qtdLike: 'outras 99.159 pessoas',
            nomeComentario: 'luanmede ',
            comentario: 'Awwwnt que lindxxx',
        },
        {
            imagemPerfil: <img src="./assets/img/smallcutecats.png" />,
            nomePerfil: 'smallcutecats',
            fotoPost: <video data-test="post-image" autoPlay loop muted><source src="./assets/img/yui3-video.mp4" type="video/mp4" /></video>,
            imagemLike: <img src="./assets/img/respondeai.png" />,
            nomeLike: 'respondeai',
            qtdLike: 'outras 575.418 pessoas',
            nomeComentario: 'gingernome_ ',
            comentario: 'Yuizinhaaaa!!!',
        }
    ]

    return (
        <div class="feed">
            {posts.map((post) =>
                <div data-test="post" class="primeiro-post">
                    <div class="titulo-post">
                        <div class="titulo-post-esquerda">
                            {post.imagemPerfil} <p> {post.nomePerfil} </p>
                        </div>
                        <div class="titulo-post-direita">
                            <p> ... </p>
                        </div>
                    </div>
                    <div class="foto">
                        {post.fotoPost}
                    </div>
                    <div class="rodape-post">
                        <div class="rodape-post-esquerda">
                            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div class="rodape-post-direita">
                            <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="curtidas">
                        {post.imagemLike}
                        <p data-test="likes-number"> <span class="thin">Curtido por </span>
                            <span class="bold">{post.nomeLike}</span>
                            <span class="thin"> e </span>
                            <span class="bold">{post.qtdLike}</span> </p>
                    </div>
                    <div class="comentarios">
                        <div class="comentario">
                            <p> <span class="bold">{post.nomeComentario} </span>
                                <span class="thin">{post.comentario}</span> </p>
                        </div>
                        <div class="like-comentario">
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="comente">
                        <div class="texto">
                            <input placeholder="Adicione um comentario..." class="campo-texto2" type="text" />
                        </div>
                        <div class="publicar">
                            <p> Publicar </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}