import {db} from "../firebase";
import { ref } from "firebase/database";

import {
    collection,
    onSnapshot,
    query,
  } from "firebase/firestore";
  

const fetchCities=(collec)=>{
    const snapshot=collection(db,collec);
    const q=query(snapshot,ref);
    
    const arr=new Array;
     
    onSnapshot(q,snapshot=>{
         snapshot.docs.forEach(doc=>{
            arr.push(doc.data());
         })
    })
    return arr;
}

export {fetchCities};