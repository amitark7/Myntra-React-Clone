import { useEffect } from "react";
import { fetchAction } from "../reducer/fetching";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../reducer/itemReducer";

const FetchItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus)
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchingDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchAction.Fetching_Start())
    fetch('http://localhost:8080/items', { signal })
      .then(res => res.json())
      .then(data => {
        dispatch(fetchAction.Fetching_Done());
        dispatch(fetchAction.Fetching_Finished())
        dispatch(itemAction.setInitial(data.items));
      }
      );

    return () => {
      controller.abort()
    }
  }, [fetchStatus])

  return (
    <>
    </>
  )
}

export default FetchItems
