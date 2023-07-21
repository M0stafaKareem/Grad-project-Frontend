import { FunctionComponent, MouseEventHandler } from "react";
import Backdrop from "../Backdrop";
import style from "./Done.module.css";

type DoneType = {
  type?: "done" | "error";
  cardDiscription: string;
  btnLabel: string;
  onBtnClick?: MouseEventHandler;
};

const Done: FunctionComponent<DoneType> = ({
  type = "done",
  cardDiscription,
  btnLabel,
  onBtnClick,
}) => {
  return (
    <>
      <Backdrop />
      <div
        className={style.card}
        style={type === "error" ? { backgroundColor: "#fef2f2" } : undefined}
      >
        <div className={style.header}>
          <div className={style.image}>
            {type === "done" ? (
              <svg fill="none" viewBox="0 0 24 24">
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    stroke="#000000"
                    d="M20 7L9.00004 18L3.99994 13"
                  ></path>
                </g>
              </svg>
            ) : (
              <img alt="" src="./error-svgrepo-com.svg" />
            )}
          </div>
          <div className={style.content}>
            <span
              className={style.title}
              style={type === "error" ? { color: "#991b1b" } : undefined}
            >
              {cardDiscription}
            </span>
          </div>
          <div className={style.actions}>
            <button
              type="button"
              className={style.history}
              style={
                type === "error" ? { backgroundColor: "#d75a4a" } : undefined
              }
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
