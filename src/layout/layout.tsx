import { useState, type FC } from "react";

import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../widgets/sidebar/sidebar";
import clsx from "clsx";

const Layout: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles["layout"]}>
      <Sidebar show={show} />
      <div className={styles["layout__container"]}>
        <div className={styles["layout__header"]}>
          <h2 className={styles["layout__title"]}>Hello Evano 👋🏼,</h2>
          <button
            onClick={() => setShow((prev) => !prev)}
            className={clsx(
              styles["layout__burger"],
              show
                ? styles["layout__burger--close"]
                : styles["layout__burger--open"]
            )}
          >
            <span className={styles["layout__burger-line"]}></span>
            <span className={styles["layout__burger-line"]}></span>
            <span className={styles["layout__burger-line"]}></span>
          </button>
        </div>
        <div className={styles["layout__content"]}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
