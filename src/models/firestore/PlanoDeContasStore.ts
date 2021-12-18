import { collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';
import { firestoreDB } from '../../config/DataBase';
import { IPlanoDeContas } from '../interfaces/IPlanoDeContas';

export async function getPlanoDeContas() {
    const planodecontas = collection(firestoreDB, 'planodecontas');
    const planodecontasDocs = await getDocs(planodecontas);
    const planodecontasList = planodecontasDocs.docs.map(doc => (doc.data() as IPlanoDeContas));
    return planodecontasList;
}

export async function setPlanoDeContas(planodecontas: IPlanoDeContas) {
    await setDoc(doc(firestoreDB, 'planodecontas', (new Date()).getTime().toString()), { ...planodecontas })
        .then(data => console.log(data))
        .catch(error => console.log(error))
}