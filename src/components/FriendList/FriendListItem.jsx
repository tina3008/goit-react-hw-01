
import clsx from "clsx";

import css from "./FriendListItem.module.css";

export default function FriendListItem({
    friend:{avatar, name, isOnline}
  }) {
    return (
        <div className={css.friendItem}>   
            <img className={css.img} src={avatar} alt="Avatar" width="48" />
            <img src="" alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={isOnline ? css.online :css.ofline}>
        {isOnline==="Online" ? "Online" : "Offline"}
      </p>
        </div>
    );
  }