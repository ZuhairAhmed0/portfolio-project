import { setSuccessOrError } from "../store";

function deleteCallback(dispatch, queryClient, queryParams) {
  const time = () => setTimeout(() => dispatch(setSuccessOrError(null)), 3000);
  return {
    onSuccess: (res) => {
      dispatch(setSuccessOrError(res.message));
      time();
      queryClient.invalidateQueries(queryParams);
    },
    onError: (err) => {
      dispatch(setSuccessOrError(err.response.data.message));
      time();
    },
  };
}

export default deleteCallback;
