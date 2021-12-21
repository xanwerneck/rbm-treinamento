import { collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';
import { firestoreDB } from '../../config/DataBase';
import { IReceitas } from '../interfaces/IReceitas';

export async function getReceitas() {
    const receitas = collection(firestoreDB, 'contasareceber');
    const receitasDocs = await getDocs(receitas);
    const receitasList = receitasDocs.docs.map(doc => (doc.data() as IReceitas));
    return receitasList;
}

export async function setReceitas(receitas : IReceitas) {
    await setDoc(doc(firestoreDB, 'receitas', (new Date()).getTime().toString()), {...receitas})
    .then(data => console.log(data))
    .catch(error => console.log(error))
}