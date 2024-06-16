import { type FC } from "react";
import styles from "./sidebar.module.scss";
import { paths } from "../../router/paths";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import LogoIcon from "../../assets/images/logo.svg?react";
import UserImage from "../../assets/images/user-img.png";

interface I_Sidebar {
  show: boolean;
}

const Sidebar: FC<I_Sidebar> = ({ show }) => {
  return (
    <aside
      className={clsx(
        styles.sidebar,
        show ? styles["sidebar--show"] : styles["sidebar--hidden"]
      )}
    >
      <div className={styles["logo"]}>
        <LogoIcon className={styles["logo__img"]} />
        <span className={styles["logo__item"]}>v.01</span>
      </div>
      <nav className={styles["nav"]}>
        <ul className={styles["nav__list"]}>
          {Object.entries(paths).map(([_, value]) => (
            <li key={value.route} className={styles["list__item"]}>
              <NavLink
                className={({ isActive }) => {
                  return clsx(
                    styles["item__link"],
                    isActive ? styles["item__link--active"] : ""
                  );
                }}
                to={value.route}
              >
                {({ isActive }) => (
                  <>
                    <span>{isActive ? <value.active /> : <value.img />}</span>
                    <span>{value.name}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.user}>
        <div className={styles["user__img"]}>
          <img src={UserImage} alt="user photo" />
        </div>
        <div className={styles["user__data"]}>
          <span className={styles["user__name"]}>Evano</span>
          <span className={styles["user__prof"]}>Project Manager</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
