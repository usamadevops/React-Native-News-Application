import { storeDataSingleValue } from '../../Utils/AsyncStorage';
import {Auth} from 'aws-amplify';
const Session = async () => {

	let AccessToken;
	await Auth.currentSession().then((res) => {
		AccessToken = res.getAccessToken().getJwtToken();
		storeDataSingleValue('@Token', AccessToken);
		return AccessToken;
	}).catch((err) => {
    // throw new Error(err);
    AccessToken = null;
		return AccessToken;
	}
	);
};

export default Session;
