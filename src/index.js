import ReactDOM from 'react-dom'

function GerarHTMl() {
  return (
    <div>
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

      <div class="container-cabecalho-mobile">
        <div class="icone-instagram">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div class="logo">
          <img src="./assets/img/logo.png" />
        </div>
        <div class="icone-direct">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>

      <div class="container">
        <div class="mainbar">
          <div class="stories">
            <div class="cada-stories primeiro-stories" >
              <img src="./assets/img/9gag.png"/> <p>9gag</p>
            </div>
            <div class="cada-stories">
              <img src="./assets/img/meowed.png"/> <p>meowed</p>
            </div>
            <div class="cada-stories">
              <img src="./assets/img/barked1.png"/> <p>barked</p>
            </div>
            <div class="cada-stories">
              <img src="./assets/img/nathanwpylestrangeplanet.png"/> <p>nathanwpyle...</p>
            </div>
            <div class="cada-stories">
              <img src="./assets/img/wawawiwacomicsa.png"/> <p>wawawiwac...</p>
            </div>
            <div class="cada-stories">
              <img src="./assets/img/respondeai.png"/> <p>respondeai</p>
            </div>
            <div class="cada-stories">
              <img src="./assets/img/filomoderna.png"/> <p>filomoderna</p>
            </div>
            <div class="cada-stories ultimo-stories">
              <img src="./assets/img/memeriagourmet.png"/> <p>memeriago</p>
            </div>
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
          <div class="feed">
            <div data-test="post" class="primeiro-post">
              <div class="titulo-post">
                <div class="titulo-post-esquerda">
                  <img src="./assets/img/meowed.png"/> <p> meowed </p>
                </div>
                <div class="titulo-post-direita">
                  <p> ... </p>
                </div>
              </div>
              <div class="foto">
                <img data-test="post-image" src="./assets/img/yui1.jpeg" />
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
                <img src="./assets/img/respondeai.png" />
                <p data-test="likes-number"> <span class="thin">Curtido por</span>
                  <span class="bold">respondeai</span>
                  <span class="thin">e</span>
                  <span class="bold">outras 101.523 pessoas</span> </p>
              </div>
              <div class="comentarios">
                <div class="comentario">
                  <p> <span class="bold">luanmede </span>
                    <span class="thin">Aaah, gatíneaaa</span> </p>
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
            <div data-test="post" class="primeiro-post">
              <div class="titulo-post">
                <div class="titulo-post-esquerda">
                  <img src="./assets/img/barked1.png"/> <p> barked </p>
                </div>
                <div class="titulo-post-direita">
                  <p> ... </p>
                </div>
              </div>
              <div class="foto">
                <img data-test="post-image" src="./assets/img/yui2.jpeg" />
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
                <img src="./assets/img/adorableanimals.png" />
                <p data-test="likes-number"> <span class="thin">Curtido por</span>
                  <span class="bold">adorable_animals</span>
                  <span class="thin">e</span>
                  <span class="bold">outras 99.159 pessoas</span>
                </p>
              </div>
              <div class="comentarios">
                <div class="comentario">
                  <p> <span class="bold">luanmede </span>
                    <span class="thin"> Awwwnt que linduu</span> </p>
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
            <div data-test="post" class="primeiro-post">
              <div class="titulo-post">
                <div class="titulo-post-esquerda">
                  <img src="./assets/img/meowed.png"/> <p> meowed </p>
                </div>
                <div class="titulo-post-direita">
                  <p> ... </p>
                </div>
              </div>
              <div class="foto">
                <video data-test="post-image" autoPlay loop muted>
                  <source src="./assets/img/yui3-video.mp4" type="video/mp4" />
                </video>
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
                <img src="./assets/img/respondeai.png" />
                <p data-test="likes-number"> <span class="thin">Curtido por</span>
                  <span class="bold">respondeai</span>
                  <span class="thin">e</span>
                  <span class="bold">outras 101.523 pessoas</span>
                </p>
              </div>
              <div class="comentarios">
                <div class="comentario">
                  <p> <span class="bold">gingergnome_ </span>
                    <span class="thin">Yuizinhaaa!!!</span> </p>
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
          </div>
        </div>
        <div class="sidebar-posicao">
          <div class="sidebar">
            <div data-test="user" class="perfil">
              <img data-test="profile-image" src="./assets/img/catanacomics1.png" />
              <p>
                <span class="negrito">catanacomics</span> <br />
                <span data-test="name" class="linha-fina">Catana</span>
                <ion-icon class="edit-pencil" data-test="edit-name" name="pencil-outline"></ion-icon>
              </p>
            </div>
            <div class="sugestoes">
              <p> <span class="linha-sugestoes"> Sugestões para você </span> </p>
              <p> <span class="linha-vertudo"> Ver tudo </span> </p>
            </div>
            <div class="sugestoes1">
              <div class="perfil1">
                <img src="./assets/img/badvibesmemes.png" />
                <p> <span class="linha1-perfil1">bad.vibes.memes</span> <br />
                  <span class="linha2-perfil1">Segue você</span>
                </p>
              </div>
              <p> <span class="seguir">Seguir</span></p>
            </div>
            <div class="sugestoes1">
              <div class="perfil1">
                <img src="./assets/img/chibirdart.png" />
                <p> <span class="linha1-perfil1">chibirdart</span> <br />
                  <span class="linha2-perfil1">Segue você</span>
                </p>
              </div>
              <p> <span class="seguir">Seguir</span></p>
            </div>
            <div class="sugestoes1">
              <div class="perfil1">
                <img src="./assets/img/razoesparaacreditar.png" />
                <p> <span class="linha1-perfil1">razoesparaacreditar</span> <br />
                  <span class="linha2-perfil1">Novo no Instagram</span>
                </p>
              </div>
              <p> <span class="seguir">Seguir</span></p>
            </div>
            <div class="sugestoes1">
              <div class="perfil1">
                <img src="./assets/img/adorableanimals.png" />
                <p> <span class="linha1-perfil1">adorable_animals</span> <br />
                  <span class="linha2-perfil1">Segue você</span>
                </p>
              </div>
              <p> <span class="seguir">Seguir</span></p>
            </div>
            <div class="sugestoes1">
              <div class="perfil1">
                <img src="./assets/img/smallcutecats.png" />
                <p> <span class="linha1-perfil1">smallcutecats</span> <br />
                  <span class="linha2-perfil1">Segue você</span>
                </p>
              </div>
              <p> <span class="seguir">Seguir</span></p>
            </div>
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
        </div>
      </div>

      <div class="menu-inferior">
        <div class="icone-direct">
          <ion-icon name="home"></ion-icon>
        </div>
        <div class="icone-pessoas">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <div class="icone-atividades">
          <ion-icon name="add-circle-outline"></ion-icon>
        </div>
        <div class="icone-atividades">
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div class="icone-perfil">
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(GerarHTMl(), document.querySelector(".root"));