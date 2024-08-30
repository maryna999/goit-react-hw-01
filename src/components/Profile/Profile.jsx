import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles["profile-container"]}>
      <div>
        <img
          className={styles["avatar"]}
          src={image}
          alt="User avatar"
          width="150"
        />
        <p className={styles["profile"]}>{name}</p>
        <p className={styles["profile-inform"]}>@{tag}</p>
        <p className={styles["profile-inform"]}>{location}</p>
      </div>

      <ul className={styles["profile-list"]}>
        <li className={styles["profile-items"]}>
          <span>Followers</span>
          <span className={styles["profile-span"]}>{stats.followers}</span>
        </li>
        <li className={styles["profile-items"]}>
          <span>Views</span>
          <span className={styles["profile-span"]}>{stats.views}</span>
        </li>
        <li className={styles["profile-items"]}>
          <span>Likes</span>
          <span className={styles["profile-span"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
