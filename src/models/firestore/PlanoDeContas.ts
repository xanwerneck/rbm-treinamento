import { collection, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore/lite';
import { firestoreDB } from '../../config/DataBase';
import { IPlanoDeContas } from '../interfaces/IPlanoDeContas';

export async function get() {
    const planodecontas = collection(firestoreDB, 'planodecontas');
    const planodecontasDocs = await getDocs(planodecontas);
    const planodecontasList = planodecontasDocs.docs.map(doc => ({id : doc.id, ...doc.data()} as IPlanoDeContas));
    return planodecontasList;
}

export async function create(planodecontas : IPlanoDeContas) {
    return await setDoc(doc(firestoreDB, 'planodecontas', planodecontas.id), { ...planodecontas })
}

export async function remove(planodecontas : IPlanoDeContas) {
    return await updateDoc(doc(firestoreDB, 'planodecontas', planodecontas.id), { status : false })
}
