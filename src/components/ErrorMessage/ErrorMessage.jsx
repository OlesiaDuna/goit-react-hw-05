import css from "./ErrorMessage.module.css";
const ErrorMessage = () => {
  return (
    <div className={css.errormessage}>
      <p>Error</p>
      <p>404</p>
    </div>
  );
};
export default ErrorMessage;
