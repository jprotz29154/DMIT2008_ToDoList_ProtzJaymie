//create script to connect app to firebase

/*
    read data from RTDB
*/

import {ref, child, get} from "firebase/database";

import {db} from "./../../config/firebase/firebaseInit"

/*
// 1:connect to the to do list
    refrence ref
    const dbRef = ref(db, "/todos")

// asking for the data from the ref -> path to a node in the JSON file
    get(ref) -> returns data snapshot
//extracting the data
    extracting the data from the snapshot
    snapshot.val()
*/



async function getToDoData() { //becomes a promise
    const dbRef = ref(db, "/todos")
    const dataSnapshot = await get(dbRef); //get the data from the todos
    return await dataSnapshot.val() //becomes the promise for the data to be retrieved?
}

export {getToDoData};