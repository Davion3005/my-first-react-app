import {useContext} from "react";

import FavoriteContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";


function FavoritesPage() {
    const favoriteCtx = useContext(FavoriteContext);
    return <section>
        <h1>Favorites page</h1>
        <MeetupList meetup={favoriteCtx.favorites} />
    </section>
}

export default FavoritesPage;