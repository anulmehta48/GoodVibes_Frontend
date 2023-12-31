import { useRouteError } from "react-router-dom";

const Error = () => {
  err = useRouteError();
  return (
    <div>
      <h1>Opps!</h1>
      <h1>Something went wrong</h1>
      <h1>{err.status + " " + err?.statusText}</h1>
    </div>
  );
};

export default Error;
