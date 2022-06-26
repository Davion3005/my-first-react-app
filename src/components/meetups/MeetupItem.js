import {useContext} from "react";

import Card from "../ui/Card";
import FavoriteContext from "../../store/favorite-context";

import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
    const favoritesCtx= useContext(FavoriteContext);

    const isFavorite= favoritesCtx.isFavorite(props.meetup.id);

    function toggleFavoriteStatusHandler() {
        if (isFavorite) {
            favoritesCtx.removeFavorite(props.meetup.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.meetup.id,
                title: props.meetup.title,
                description: props.meetup.description,
                address: props.meetup.address,
                image: props.meetup.image,
            });
        }
    }

    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.meetup.image} alt={props.meetup.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.meetup.title}</h3>
                <address>{props.meetup.address}</address>
                <p>{props.meetup.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{ isFavorite ? 'Remove from Favorite' : 'Add to Favorite' }</button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;