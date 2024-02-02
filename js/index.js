import { getToDoData } from "./lib/firebase/api";

//single source of truth from data
let store = []

async function appInit() {
    const toDos = await getToDoData()
    console.log(toDos)
}

appInit()

/*
    RTDB returns object of objects
    [objects] -> need to convert to an array
    once object is collected, can build out a template
*/
