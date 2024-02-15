import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./washington-container.module.css";

export type WashingtonContainerType = {
  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const WashingtonContainer: NextPage<WashingtonContainerType> = ({
  propBackgroundImage,
}) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.card1} style={card1Style}>
      <div className={styles.details}>
        <div className={styles.location}>
          <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
          <div className={styles.washington}>Washington</div>
        </div>
        <div className={styles.location}>
          <img className={styles.mappinIcon} alt="" src="/arrowsout.svg" />
          <div className={styles.washington}>12000</div>
        </div>
      </div>
    </div>
  );
};

export default WashingtonContainer;
