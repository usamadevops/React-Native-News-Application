import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeDataSingleValue(key, value) {
  //This one to set single Value to LocalStorage
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
}
export async function ReadDataSingleString(key) {
  //This one to remove single Value from LocalStorage
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null || value!=={} || value!==unde) {
      return value;
    }
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
}

export async function clearAll() {
  //This one to clear all Values from LocalStorage
  try {
    await AsyncStorage.clear();
  } catch (e) {
    throw new Error(JSON.stringify(e));
  }
}

// export function* storeDataSingleObject(key, value) {
// 	try {
// 		const jsonValue = JSON.stringify(value);
// 		yield AsyncStorage.setItem(key, jsonValue);
// 	} catch (e) {
// 		// saving error
// 		yield put(authError(e));
// 	}
// }

// export function* ReadDataSingleObject(key) {
// 	try {
// 		const jsonValue = yield AsyncStorage.getItem(key);
// 		return jsonValue != null ? JSON.parse(jsonValue) : null;
// 	} catch (e) {
// 		// error reading value
// 		yield put(authError(e));
// 	}
// }

// export function* RemoveSingleItem(key) {
// 	try {
// 		yield AsyncStorage.removeItem(key);
// 	} catch (e) {
// 		// remove error
// 		yield put(authError(e));
// 	}

// }

// export function* mergeUsers(USER_1, USER_2) {
// 	try {
// 		//save first user
// 		yield AsyncStorage.setItem('@MyApp_user', JSON.stringify(USER_1));

// 		// merge USER_2 into saved USER_1
// 		yield AsyncStorage.mergeItem('@MyApp_user', JSON.stringify(USER_2));

// 		// read merged item
// 		yield AsyncStorage.getItem('@MyApp_user');

// 	} catch (e) {
// 		// error reading value
// 		yield put(authError(e));
// 	}
// }

// export function* getAllKeys() {
// 	let keys = [];
// 	try {
// 		keys = yield AsyncStorage.getAllKeys();
// 		return keys;
// 	} catch (e) {
// 		// read key error
// 		yield put(authError(e));
// 	}

// 	// example console.log result:
// 	// ['@MyApp_user', '@MyApp_key']
// }

// export function* getMultiple(Array) {

// 	try {
// 		// values = await AsyncStorage.multiGet(['@MyApp_user', '@MyApp_key'])
// 		yield AsyncStorage.multiGet(Array);
// 	} catch (e) {
// 		// read error
// 		yield put(authError(e));
// 	}

// 	// example console.log output:
// 	// [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
// }

// export function* multiSet(Array) {
// 	try {
// 		yield AsyncStorage.multiSet(Array);
// 	} catch (e) {
// 		//save error
// 		yield put(authError(e));
// 	}

// }

// export function* removeFew(keysArray) {
// 	//   const keys = ['@MyApp_USER_1', '@MyApp_USER_2']
// 	try {
// 		yield AsyncStorage.multiRemove(keysArray);
// 	} catch (e) {
// 		// remove error
// 		yield put(authError(e));
// 	}

// }
