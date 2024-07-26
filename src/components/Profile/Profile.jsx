import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return(
    <div className={css.profile}>
      <div>
        <img className={css.imageProfile}
        src={image}
        alt="User avatar"
         />
        <p className={css.nameProfile}>{name}</p>
        <p className={css.infoProfile}>{tag}</p>
        <p className={css.infoProfile}>{location}</p>
      </div>

      <ul className={css.statsProfile}>
        <li className={css.statsInfo} style={{borderRight: "3px gray solid"}}>
        <span>Followers</span>
        <span>{stats.followers}</span>
        </li>
        <li className={css.statsInfo}>
        <span>Views</span>
        <span>{stats.views}</span>
        </li>
        <li className={css.statsInfo} style={{borderLeft: "3px gray solid"}}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
</div>
);
}

export default Profile;