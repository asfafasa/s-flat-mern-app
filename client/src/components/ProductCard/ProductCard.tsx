import React from "react";
import styles from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "../ImageSlider/ImageSlider";
import Rating from "react-rating";

type Props = {
  inStock: string;
  images: Array<string>;
  rating: string;
  productName: string;
  productDescription: string;
  offerprice: string;
  price: string;
};

const ProductCard = (props: Props) => {
  return (
    <div className={styles.d_product_card}>
      {Number(props.inStock) > 0 && (
        <div className={styles.instockContainer}>
          <FontAwesomeIcon icon={faCheckCircle} color="green" />
          <p className={styles.instock}>Instock</p>
        </div>
      )}
      {props.images.length > 0 && <ImageSlider images={props.images} />}

      {props.rating && (
        <div>
          <Rating
            readonly
            initialRating={4}
            fractions={2}
            emptySymbol={<FontAwesomeIcon icon={faStar} color="gray" />}
            fullSymbol={<FontAwesomeIcon icon={faStar} color="orange" />}
          />
          <div>
            <p>Review ({})</p>
          </div>
        </div>
      )}

      {props.productName && (
        <div>
          <h3>{props.productName}</h3>
        </div>
      )}
      {props.productDescription && (
        <div>
          <p>{props.productDescription}</p>
        </div>
      )}
      {props.offerprice && (
        <div>
          <p>{props.offerprice}</p>
        </div>
      )}
      {props.price && (
        <div>
          <p>{props.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
