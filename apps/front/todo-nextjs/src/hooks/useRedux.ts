import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState, wrapper } from '~/store/root';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppWrappedStore = wrapper.useWrappedStore;
