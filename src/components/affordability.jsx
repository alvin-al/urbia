import React from "react";
import * as styles from '@/components/styles'

const Affordability = ({title, content, number}) => {
  return (
    <div className="flex gap-4 flex-col border-t border-black py-8 md:flex-row md:justify-around">
        <div className={`${styles.headpoints2xl} order-2 md:order-1 md:w-[25%]`}>{title}</div>
        <div className="order-3 md:order-2 md:w-[50%]">{content}</div>
        <div className={`${styles.headpoints5xl} text-right order-1 md:order-3 md:w-[25%] md:align-middle`}>{number}</div>
    </div>
  );
};

export default Affordability;