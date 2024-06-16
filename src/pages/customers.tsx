import type { FC } from "react";
import styles from "./customers.module.scss";
import { dummyData } from "./dummyData";
import clsx from "clsx";

const CustomersPage: FC = () => {
  return (
    <div className={styles.customers}>
      <div className={styles.header}>
        <div>
          <h2 className={styles["header__title"]}>All Customers</h2>
          <p className={styles["header__subtitle"]}>Active Members</p>
        </div>
        <div className={styles["header__input__block"]}>
          <input
            className={styles["header__input"]}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className={styles["table__container"]}>
        <table className={styles.table}>
          <thead className={styles["table__head"]}>
            <tr className={styles["head__row"]}>
              <th className={styles.head__heading}>Customer Name</th>
              <th className={styles.head__heading}>Company</th>
              <th className={styles.head__heading}>Phone Number</th>
              <th className={styles.head__heading}>Email</th>
              <th className={styles.head__heading}>Country</th>
              <th className={styles.head__heading}>Status</th>
            </tr>
          </thead>
          <tbody className={styles["table__body"]}>
            {dummyData.map((el) => (
              <tr key={el.id} className={styles["body__row"]}>
                <td className={styles["body__col"]}>{el.name}</td>
                <td className={styles["body__col"]}>{el.company}</td>
                <td className={styles["body__col"]}>{el.phone}</td>
                <td className={styles["body__col"]}>{el.email}</td>
                <td className={styles["body__col"]}>{el.country}</td>
                <td>
                  <button
                    className={clsx(
                      styles["button"],
                      el.status === "active"
                        ? styles["button--active"]
                        : styles["button--inactive"]
                    )}
                  >
                    {el.status === "active" ? "active" : "inactive"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <div className={styles["pagination__info"]}>
          Showing data 1 to 8 of 256K entries
        </div>
        <div className={styles.pagination}>
          <button className={styles["pagination__button"]}>{"<"}</button>
          <button
            className={clsx(
              styles["pagination__button"],
              styles["pagination__button--active"]
            )}
          >
            1
          </button>
          <button className={styles["pagination__button"]}>2</button>
          <button className={styles["pagination__button"]}>3</button>
          <button className={styles["pagination__button"]}>4</button>
          <button className={styles["pagination__button"]}>...</button>
          <button className={styles["pagination__button"]}>40</button>
          <button className={styles["pagination__button"]}>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
