"use client";

import { useState } from "react";
import NextImage, { ImageProps } from "next/image";
import styles from "./SafeImage.module.css";

export default function SafeImage(props: ImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    const isFill = "fill" in props && props.fill;
    const style = isFill
      ? undefined
      : { width: props.width, height: props.height };

    return (
      <div
        className={isFill ? styles.fallbackFill : styles.fallbackFixed}
        style={style}
        aria-label={typeof props.alt === "string" ? props.alt : "Image not available"}
        role="img"
      >
        <span className={styles.text}>No image</span>
      </div>
    );
  }

  return <NextImage {...props} onError={() => setErrored(true)} />;
}
