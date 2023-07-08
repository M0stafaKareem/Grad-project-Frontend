import { FunctionComponent, MouseEventHandler } from "react";
import Backdrop from "../Backdrop";
import style from "./Done.module.css";

type DoneType = {
  cardDiscription: string;
  btnLabel: string;
  onBtnClick?: MouseEventHandler;
};

const Done: FunctionComponent<DoneType> = ({
  cardDiscription,
  btnLabel,
  onBtnClick,
}) => {
  return (
    <>
      <Backdrop />
      <div className={style.card}>
        <div className={style.header}>
          <div className={style.image}>
            <svg fill="none" viewBox="0 0 24 24">
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  stroke="#000000"
                  d="M20 7L9.00004 18L3.99994 13"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className={style.content}>
            <span className={style.title}>{cardDiscription}</span>
          </div>
          <div className={style.actions}>
            <button
              type="button"
              className={style.history}
              onClick={onBtnClick}
            >
              {btnLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Done;
