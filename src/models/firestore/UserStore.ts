import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firestoreDB } from '../../config/DataBase';

async function getCities() {
    const citiesCol = collection(firestoreDB, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}