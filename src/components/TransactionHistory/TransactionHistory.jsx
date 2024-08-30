import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <table className={styles["table"]}>
      <thead>
        <tr>
          <th className={styles["table-title"]}>Type</th>
          <th className={styles["table-title"]}>Amount</th>
          <th className={styles["table-title"]}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles["table-body"]}>
        {items.map((item) => {
          return (
            <tr className={styles["table-line"]} key={item.id}>
              <td className={styles["table-item"]}>
                {capitalizeFirstLetter(item.type)}
              </td>
              <td className={styles["table-item"]}>{item.amount}</td>
              <td className={styles["table-item"]}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
