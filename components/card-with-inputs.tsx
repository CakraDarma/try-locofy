import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./card-with-inputs.module.css";

export type CardWithInputsType = {
  imageDimensions?: string;
};

const CardWithInputs: NextPage<CardWithInputsType> = ({ imageDimensions }) => {
  return (
    <div className={styles.card1}>
      <img className={styles.propertyImageIcon} alt="" src={imageDimensions} />
      <div className={styles.propertyName}>
        <div className={styles.alliumPlaceOrlando}>
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.div}>$ 590,693</div>
      </div>
      <div className={styles.moreDetails}>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="/car.svg" />
          <div className={styles.ft}>4</div>
        </div>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="/bathtub.svg" />
          <div className={styles.ft}>4</div>
        </div>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="/arrowsout.svg" />
          <div className={styles.ft}>2,096.00 ft</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.user}>
          <img className={styles.userChild} alt="" src="/ellipse-1@2x.png" />
          <div className={styles.jennyWilson}>Jenny Wilson</div>
        </div>
        <div className={styles.ctas}>
          <TextField
            className={styles.share}
            color="primary"
            label="Label"
            size="medium"
            placeholder="Placeholder"
            variant="outlined"
            type="text"
            sx={{ "& .MuiInputBase-root": { height: "20.3px" } }}
          />
          <div className={styles.favorite}>
            <img className={styles.heartIcon} alt="" src="/heart.svg" />
          </div>
          <div className={styles.favorite}>
            <img className={styles.heartIcon} alt="" src="/plus.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithInputs;
