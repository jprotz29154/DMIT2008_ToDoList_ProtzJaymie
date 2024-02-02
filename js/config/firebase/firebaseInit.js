import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { firebaseConfig } from "./firebaseConfig";

// Initialize Firebase -> connects to project that was set up
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
//ref to the RTDE (realtime database)
const db = getDatabase(app); //connects to project and services -> realtime database

export { db };
