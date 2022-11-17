export default function Story() {
    
    const stories = [
        { img: <img src="./assets/img/9gag.png" />, p: <p>9gag</p> },
        { img: <img src="./assets/img/meowed.png" />, p: <p>meowed</p> },
        { img: <img src="./assets/img/barked1.png" />, p: <p>barked</p> },
        { img: <img src="./assets/img/nathanwpylestrangeplanet.png" />, p: <p>nathanwpyle...</p> },
        { img: <img src="./assets/img/wawawiwacomicsa.png" />, p: <p>wawawiwac...</p> },
        { img: <img src="./assets/img/respondeai.png" />, p: <p>respondeai</p> },
        { img: <img src="./assets/img/filomoderna.png" />, p: <p>filomoderna</p> },
        { img: <img src="./assets/img/memeriagourmet.png" />, p: <p>memeriago</p> }
    ]

    return (
        <div class="stories">
            {stories.map((story) =>
                <div class="cada-stories">
                    {story.img}{story.p}
                </div>)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}