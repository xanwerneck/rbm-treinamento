import { collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';
import { firestoreDB } from '../../config/DataBase';
import { IContasAReceber } from '../interfaces/iContasAReceber';

export async function getContasAReceberStore() {
    const contasareceber = collection(firestoreDB, 'contasareceber');
    const contasareceberDocs = await getDocs(contasareceber);
    const contasareceberList = contasareceberDocs.docs.map(doc => doc.data());
    return contasareceberList;
}

export async function setContasAReceberStore(contasareceber : IContasAReceber) {
    await setDoc(doc(firestoreDB, 'contasareceber', (new Date()).getTime().toString()), {...contasareceber})
    .then(data => console.log(data))
    .catch(error => console.log(error))
}