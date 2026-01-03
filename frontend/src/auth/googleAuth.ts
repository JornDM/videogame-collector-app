import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);

    return result.user; // Firebase user object
  } catch (error) {
    console.error("Google Sign-In mislukt:", error);
    throw error;
  }
};
