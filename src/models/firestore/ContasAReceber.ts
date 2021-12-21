import { collection, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore/lite';
import { firestoreDB } from '../../config/DataBase';
import { IContas } from '../interfaces/IContas';

export async function get() {
    const contasareceber = collection(firestoreDB, 'contasareceber');
    const contasareceberDocs = await getDocs(contasareceber);
    const contasareceberList = contasareceberDocs.docs.map(doc => ({id : doc.id, ...doc.data()} as IContas));
    return contasareceberList;
}

export async function create(contasareceber : IContas) {
    return await setDoc(doc(firestoreDB, 'contasareceber', contasareceber.id), { ...contasareceber })
}

export async function remove(contasareceber : IContas) {
    return await updateDoc(doc(firestoreDB, 'contasareceber', contasareceber.id), { status : false })
}