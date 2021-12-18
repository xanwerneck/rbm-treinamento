import { collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';
import { firestoreDB } from '../../config/DataBase';
import { IPlanoDeContas } from '../interfaces/IPlanoDeContas';

export async function getPlanoDeContas() {
    const citiesCol = collection(firestoreDB, 'planodecontas');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

export async function setPlanoDeContas(planodecontas : IPlanoDeContas) {
    await setDoc(doc(firestoreDB, 'planodecontas', (new Date()).getTime().toString()), {...planodecontas})
    .then(data => console.log(data))
    .catch(error => console.log(error))
}