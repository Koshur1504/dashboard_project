import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  setDoc,
  doc,
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
  apiKey: "AIzaSyDF7L7_QQbSbTfEqLN7LRUWRc7lw7n5XvM",
  authDomain: "dashboard-project-397922.firebaseapp.com",
  projectId: "dashboard-project-397922",
  storageBucket: "dashboard-project-397922.appspot.com",
  messagingSenderId: "888186405822",
  appId: "1:888186405822:web:f722fd34877961824fafef",
};

const googleAuth = new GoogleAuthProvider();
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getFirestore(firebaseApp);
const usersRef = await getDocs(collection(database, "users"));
let userCollectionref = null;

//context provider
export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [profile, setProfile] = useState(null);

  //get users
  const getUsers = async () => {
    try {
      const usersRef = await getDocs(collection(database, "users"));
      const data = usersRef.docs.map((doc) => doc.data());
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // get auth details
  const getAuth = onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      setUser(user);
      userCollectionref = doc(database, "users", user.uid);
    } else setUser(null);
  });
  //get Profile
  const getProfile = async () => {
    if (user) {
      const docRef = doc(database, "users", user.uid);
      const docSnap = await getDoc(docRef);
      setProfile(docSnap.data());
    }
  };

  const loggedIn = user ? true : false;

  // signin function
  async function signInWithGoogle() {
    await signInWithPopup(firebaseAuth, googleAuth);
  }

  // signout function
  const signOutFn = () => {
    return signOut(firebaseAuth);
  };

  //add profile data
  const writeProfile = async ({ profileData }) => {
    if (user) {
      await setDoc(doc(database, "users", user.uid), {
        name: profileData.name,
        email: profileData.email,
        number: profileData.phone,
        ig: profileData.ig ? profileData.ig : "",
        yt: profileData.yt ? profileData.yt : "",
      }).then((res) => getProfile())

      // await updateDoc(userCollectionref, {
      //   name: profileData.name,
      //   email: profileData.email,
      //   number: profileData.phone,
      //   ig: profileData.ig ? profileData.ig : "",
      //   yt: profileData.yt ? profileData.yt : "",
      // }).then((res) => getProfile());
    }
  };

  useEffect(() => {
    getUsers();
    getAuth();
    getProfile();
  }, [user, usersRef]);

  return (
    <FirebaseContext.Provider
      value={{
        signInWithGoogle,
        user,
        loggedIn,
        writeProfile,
        profile,
        signOutFn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
