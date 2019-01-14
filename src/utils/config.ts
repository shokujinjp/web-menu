import firebase from "firebase";
import "firebase/auth";

const apiKey = process.env.API_KEY;
const authDomain = process.env.AUTH_DOMAIN;
const projectId = process.env.PROJECT_ID;

const fbconfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId
};

const providerTwitter = new firebase.auth.TwitterAuthProvider();

const firebaseApp = (!firebase.apps.length
  ? firebase.initializeApp(fbconfig)
  : firebase.app());
export default firebaseApp
export { providerTwitter };
