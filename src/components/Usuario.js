export default function () {
    return (
        <div data-test="user" class="perfil">
            <img data-test="profile-image" src="./assets/img/catanacomics1.png" />
            <p>
                <span class="negrito">catanacomics</span> <br />
                <span data-test="name" class="linha-fina">Catana</span>
                <ion-icon class="edit-pencil" data-test="edit-name" name="pencil-outline"></ion-icon>
            </p>
        </div>
    )
}