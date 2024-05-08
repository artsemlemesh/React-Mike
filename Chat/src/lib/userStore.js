import { doc, getDoc } from 'firebase/firestore';
import { create } from "zustand";
import {db} from './firebase'

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ currentUser: null, isLoading: false });

    try {
        //creates a reference to the user document in Firestore using 'doc'
      const docRef = doc(db, "users", uid);
      //it retrieves the document snapshot using 'getDoc'
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        //if the doc exists it sets the currentUser state to the data of the document
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      console.log(err);
      return set({ currentUser: null, isLoading: false });
    }
  },
}));
