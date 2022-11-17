import Posts from "./Posts";
import SideBar from "./SideBar";
import Stories from "./Stories";


export default function Corpo() {
    return (
        <div class="container">
            <div class="mainbar">
                <Stories />
                <Posts />
            </div>
            <div class="sidebar-posicao">
                <SideBar />
            </div>
        </div>
    )
}