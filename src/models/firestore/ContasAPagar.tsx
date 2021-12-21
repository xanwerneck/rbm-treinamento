import { collection, getDocs, updateDoc, doc, deleteDoc, query, where } from 'firebase/firestore/lite';
import { firestoreDB } from '../../config/DataBase';
import { IContasAPagar } from '../interfaces/IContasAPagar';

export async function getContasAPagar() {
    const contasapagar = collection(firestoreDB, 'contasapagar');
    const contasapagarDocs = await getDocs(contasapagar);
    const contasapagarList = contasapagarDocs.docs.map(doc => (doc.data() as IContasAPagar));
    return contasapagarList;
}

export async function setContasAPagar(contasapagar: IContasAPagar) {
    // const contas = collection(firestoreDB, 'contasapagar');
    // const conta = query(contas, where("descricao", "==", contasapagar.descricao),where("data", "==", contasapagar.data),
    //     where("valor", "==", contasapagar.valor)
    // )
    // console.log(contas);
    // const whereUp = doc(firestoreDB, 'contasapagar', conta.documentId());
    // await updateDoc(whereUp, {
    //     status: false
    // })
    // .then(data => console.log(data))
    // .catch(error => console.log(error))
}

// export async function deleteContasAPagar(contasapagar: IContasAPagar){
//     // const contas = collection(firestoreDB, 'contasapagar');
//     // const conta = query(contas, where("descricao", "==", contasapagar.descricao),where("data", "==", contasapagar.data),
//     //     where("valor", "==", contasapagar.valor)
//     // )
//     // await deleteDoc(doc(contas, "contasapagar", conta));
// }