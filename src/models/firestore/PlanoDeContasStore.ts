import { collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';
import { firestoreDB } from '../../config/DataBase';

import { IPlanoDeContas } from '../interfaces/IPlanoDeContas';
import { IContasAPagar } from '../../components/AddContasAPagar';

export async function getPlanoDeContas() {
	const planodecontas = collection(firestoreDB, 'planodecontas');
	const planodecontasDocs = await getDocs(planodecontas);
	const planodecontasList = planodecontasDocs.docs.map((doc) => doc.data() as IPlanoDeContas);
	return planodecontasList;
}

export async function setPlanoDeContas(planodecontas: IPlanoDeContas) {
	await setDoc(doc(firestoreDB, 'planodecontas', new Date().getTime().toString()), { ...planodecontas })
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
}

export async function setContaAPagar(contaAPagar: IContasAPagar) {
	await setDoc(doc(firestoreDB, 'contaAPagar', new Date().getTime().toString()), { ...contaAPagar })
		.then((data) => console.log(data))
		.catch((error) => console.log(error));
}

export async function getContaAPagar() {
	const planodecontas = collection(firestoreDB, 'contaAPagar');
	const planodecontasDocs = await getDocs(planodecontas);
	const planodecontasList = planodecontasDocs.docs.map((doc) => doc.data() as IPlanoDeContas);
	return planodecontasList;
}
