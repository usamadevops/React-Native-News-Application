import { createSelector } from 'reselect';

const auth = (state) => state.Auth;


export const errorSelector = createSelector(
	auth,
	data => ({
		data: data?.get('error')
	})
);

export const isLoadingSelector = createSelector(
	auth,
	data => ({
		isLoading: data?.get('isLoading')
	})
);


export const loginAutherizationSelector = createSelector(
	auth,
	data => ({
		Authorize: data?.get('isAuthenticated')
	})
);

export const authUserNameFullNameEmailAndPasswordSelector = createSelector(
	auth,
	data => ({
		userName: data?.get('data')?.get('username'),
		fullName: data?.get('data')?.get('Fullname'),
		email: data?.get('data')?.get('email'),
		password: data?.get('data')?.get('password'),
		userId: data.get('data')?.get('userId'),
	})
);