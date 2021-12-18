import { getFirestore } from 'firebase/firestore/lite';
import { firebaseApp } from './Params';

export const firestoreDB = getFirestore(firebaseApp);