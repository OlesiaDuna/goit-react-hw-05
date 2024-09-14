import css from "./CastCard.module.css";
import { IMG_URL } from "../../constants/constants";

const CastCard = ({ data: { profile_path, name, character } }) => {
  return (
    <>
      <img
        className={css.castcard}
        src={
          profile_path !== null
            ? IMG_URL + profile_path
            : " https://ec.europa.eu/info/funding-tenders/opportunities/portal/assets/img/user-icon.png"
        }
        alt={"avatar" + name}
      />
      <div>
        <hr />
        <p>{name}</p>
        <p>{character}</p>
      </div>
    </>
  );
};
export default CastCard;
