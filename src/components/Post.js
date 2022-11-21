import { useState } from "react";

export default function Post(props) {

    const [nomeIconeCurtir, setNomeIconeCurtir] = useState("heart-outline")
    const [nomeIconeSalvar, setNomeIconeSalvar] = useState("bookmark-outline");
    const [corCoracao, setCorCoracao] = useState("black");
    const [coracaoBranco, setCoracaoBranco] = useState("");
    const [numeroLikes, setLikes] = useState(props.qtdLike);
    const [iconeComentario, setIconeComentario] = useState ("heart-outline");
    const [corComentario, setCorComentario] = useState ("black");

    function curtirPost() {
        if (nomeIconeCurtir == "heart-outline") {
            setNomeIconeCurtir("heart");
            setCorCoracao("red")
            setLikes(numeroLikes + 1);
        } else {
            setNomeIconeCurtir("heart-outline");
            setLikes(numeroLikes - 1);
            setCorCoracao("black")
        }
    }

    function curtirFoto() {
        function mostrarCoracao() {
            setCoracaoBranco(<ion-icon className="coracao-branco" name="heart"></ion-icon>)
        }
        function esconderCoracao() {
            setCoracaoBranco("");
        }

        if (nomeIconeCurtir == "heart-outline") {
            setNomeIconeCurtir("heart");
            setCorCoracao("red")
            setLikes(numeroLikes + 1);
        }
        mostrarCoracao();
        setTimeout(esconderCoracao, 500);
    }

    function salvarPost() {
        if (nomeIconeSalvar == "bookmark-outline") {
            setNomeIconeSalvar("bookmark");
        } else {
            setNomeIconeSalvar("bookmark-outline")
        }
    }

    function curtirComentario() {
        if (iconeComentario == "heart-outline") {
            setIconeComentario("heart");
            setCorComentario("red")
        } else {
            setIconeComentario("heart-outline");
            setCorComentario("black")
        }
    }

    return (
        <div data-test="post" className="primeiro-post">
            <div className="titulo-post">
                <div className="titulo-post-esquerda">
                    {props.imagemPerfil} <p> {props.nomePerfil} </p>
                </div>
                <div className="titulo-post-direita">
                    <p> ... </p>
                </div>
            </div>
            <div className="foto" onDoubleClick={curtirFoto}>
                {props.fotoPost}
                {coracaoBranco}
            </div>
            <div className="rodape-post">
                <div className="rodape-post-esquerda">
                    <ion-icon onClick={curtirPost} style={{ color: corCoracao }} data-test="like-post" name={nomeIconeCurtir}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div className="rodape-post-direita">
                    <ion-icon onClick={(() => salvarPost())}
                        data-test="save-post" name={nomeIconeSalvar}></ion-icon>
                </div>
            </div>
            <div className="curtidas">
                {props.imagemLike}
                <p data-test="likes-number"> <span className="thin">Curtido por </span>
                    <span className="bold">{props.nomeLike}</span>
                    <span className="thin"> e </span>
                    <span className="bold">outras {numeroLikes} pessoas</span> </p>
            </div>
            <div className="comentarios">
                <div className="comentario">
                    <p> <span className="bold">{props.nomeComentario} </span>
                        <span className="thin">{props.comentario}</span> </p>
                </div>
                <div className="like-comentario">
                    <ion-icon onClick={curtirComentario} style={{ color: corComentario }} name={iconeComentario}></ion-icon>
                </div>
            </div>
            <div className="comente">
                <div className="texto">
                    <input placeholder="Adicione um comentario..." className="campo-texto2" type="text" />
                </div>
                <div className="publicar">
                    <p> Publicar </p>
                </div>
            </div>
        </div>
    )
}