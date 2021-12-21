import { collection, getDocs, updateDoc, doc, deleteDoc, query, where, setDoc } from 'firebase/firestore/lite';
import { firestoreDB } from '../../config/DataBase';
import { IContas } from '../interfaces/IContas';

export async function get() {
    const contasapagar = collection(firestoreDB, 'contasapagar');
    const contasapagarDocs = await getDocs(contasapagar);
    const contasapagarList = contasapagarDocs.docs.map(doc => ({id : doc.id, ...doc.data()} as IContas));
    return contasapagarList;
}

export async function create(contasapagar : IContas) {
    return await setDoc(doc(firestoreDB, 'contasapagar', contasapagar.id), { ...contasapagar })
}

export async function remove(contasapagar : IContas) {
    return await updateDoc(doc(firestoreDB, 'contasapagar', contasapagar.id), { status : false })
}