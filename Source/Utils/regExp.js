
export const regularExp = {
	userName: /^[a-zA-Z0-9]+([_]?[a-zA-Z0-9])*$/,
	fullName: /^[a-zA-Z ]+[a-zA-Z ]$/,
	// eslint-disable-next-line max-len
	email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	alphaBit: /^[A-Za-z\sÅÄÖåäö]*$/,
	digit: /^[0-9\b]+$/,
};
