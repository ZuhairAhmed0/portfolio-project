import { useSelector } from "react-redux";

function Alerts() {
  const { success, error } = useSelector((store) => store.responseMessage);

  return (
    <>
      {!error && success && <div className="alert-success">{success}</div>}
      {!success && error && <div className="alert-error">{error}</div>}
    </>
  );
}

export default Alerts;
