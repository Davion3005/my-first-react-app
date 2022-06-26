import { Link } from "react-router-dom";
import {useContext} from "react";

import FavoriteContext from "../../store/favorite-context";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
    let favoriteCtx = useContext(FavoriteContext);

    return <header className={classes.header}>
        <div className={classes.logo}>React Meetup</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All</Link>
                </li>
                <li>
                    <Link to='/new'>New meetups</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                        Favorites<span style={{fontSize: "14px"}}>{favoriteCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;