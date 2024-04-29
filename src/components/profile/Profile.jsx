import css from "./profile.module.css"

export default function Profile({username, tag, location, avatar, stats:{followers, views, likes}}){

    return(
<div className={css.profil}>
  <div className={css.profil}>
    <img className={css.img}
    src={avatar}
      alt="User avatar"
    />
    <p>{username}</p>
    <p>@{tag}</p>
  <p>{location}</p>
  </div>

  <ul className={css.list}>
  <li className={css.item}>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li className={css.item}>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li className={css.item}>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </ul>
</div>
    )
}