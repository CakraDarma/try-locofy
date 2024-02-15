import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./sell-your-home-container.module.css";

export type SellYourHomeContainerType = {
  imageId?: string;
  actionText?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const SellYourHomeContainer: NextPage<SellYourHomeContainerType> = ({
  imageId,
  actionText,
  propWidth,
}) => {
  const sellYourHomeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.sellYourHome} style={sellYourHomeStyle}>
      <div className={styles.contents}>
        <img className={styles.icon} alt="" src={imageId} />
        <div className={styles.contents}>
          <div className={styles.sellYourHome1}>{actionText}</div>
          <div className={styles.weDoA}>
            We do a free evaluation to be sure you want to start selling.
          </div>
          <div className={styles.readMore}>Read more</div>
        </div>
      </div>
    </div>
  );
};

export default SellYourHomeContainer;
