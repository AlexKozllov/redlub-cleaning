import React from "react";
import s from "./Loader.module.scss";
import LoaderSpinner from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={s.modalLoader}>
      <div className={s.loader}>
        <div className={s.modalLoader}>
          <LoaderSpinner
            className={s.loader}
            type="TailSpin"
            color="blue"
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
