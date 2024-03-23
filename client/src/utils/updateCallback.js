import { setSuccessOrError } from "../store";

function updateCallback(setIsEdited, dispatch, queryClient, queryParams) {
  const time = () => setTimeout(() => dispatch(setSuccessOrError(null)), 3000);
  return {
    onSuccess: (res) => {
      dispatch(setSuccessOrError(res.message));
      setIsEdited((edited) => !edited);
      time();
      queryClient.invalidateQueries(queryParams);
    },
    onError: (err) => {
      dispatch(setSuccessOrError(err.response.data.message || err.response.data || err.message ));
      time();
    },
  };
}

export default updateCallback;
