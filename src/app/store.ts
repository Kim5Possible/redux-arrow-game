import { configureStore, type Action, type ThunkAction } from "@reduxjs/toolkit"

import playgroundReducer from "../components/Playground/store/slices"

export const store = configureStore({
  reducer: {
    playground: playgroundReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
