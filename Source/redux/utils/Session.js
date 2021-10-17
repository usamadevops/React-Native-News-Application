// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth } from 'aws-amplify';
const Session = async () => {
	const AccessToken = (await Auth.currentSession()).getAccessToken().getJwtToken();
	return AccessToken;
};

export default Session;
