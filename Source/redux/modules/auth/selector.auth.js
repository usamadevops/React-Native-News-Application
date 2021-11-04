import {createSelector} from 'reselect';

const auth = state => state.Auth;

export const errorSelector = createSelector(auth, data => ({
  data: data?.get('error'),
}));

export const isLoadingSelector = createSelector(auth, data => ({
  isLoading: data?.get('isLoading'),
}));

export const Authorization = createSelector(auth, data => ({
  User: data?.get('isAuthenticated'),
}));
export const isConfirmed = createSelector(auth, data => ({
  isUserConfirmed: data?.get('isConfirm'),
}));

export const authSelector = createSelector(
  auth,
  data => ({
    fullName: data?.get('name'),
    email: data?.get('username'),
    password: data?.get('password'),
    userId: data.get('userId'),
  }),
);
