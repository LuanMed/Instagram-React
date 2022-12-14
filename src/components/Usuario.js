import { useState } from "react";

export default function Usuario() {
    
    const imagemPadrao = "https://www.lacazmartins.com.br/wp-content/uploads/2017/05/sem-foto-oficial.png";
    const nomePadrao = "Anônimo"
    const [nome, setNome] = useState(nomePadrao);
    const [imagem, setImagem] = useState(imagemPadrao);
    

    function mudarNome(){
        setNome(prompt("Qual é o seu nome?"))
    }

    function mudarImagem(){
        setImagem(prompt("Escolha o link da sua imagem"))
    }
    return (
        <div className="teste">
            <User nome={nome} nomePadrao={nomePadrao} imagem={imagem} imagemPadrao={imagemPadrao} mudarNome={mudarNome} mudarImagem={mudarImagem}/>
        </div>
    )
}

function User(props) {
    return (
        <div data-test="user" className="perfil">
            <img onClick={props.mudarImagem} data-test="profile-image" src={!props.imagem ? props.imagemPadrao : props.imagem} />
            <p>
                <span className="negrito">@{!props.nome ? props.nomePadrao.toLowerCase() : props.nome.toLowerCase().replaceAll(" ", "")}</span> <br />
                <span data-test="name" className="linha-fina">{!props.nome ? props.nomePadrao : props.nome}</span>
                <ion-icon className="edit-pencil" onClick={props.mudarNome} data-test="edit-name" name="pencil-outline"></ion-icon>
            </p>
        </div>
    )
}