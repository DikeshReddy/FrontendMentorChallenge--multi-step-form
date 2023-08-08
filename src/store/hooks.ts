import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState, AppDispatch} from "./store";

export const userAppDispatch = () => useDispatch<AppDispatch>();
export const userAppSelector: TypedUseSelectorHook<RootState> = useSelector;
