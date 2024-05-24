// AuthService.js (Service for managing authentication)
import { db } from "@/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"
import { doc, updateDoc, deleteDoc } from "firebase/firestore"

export async function getUserData(firebaseId) {
    const querySnapshot = await getDocs(query(collection(db, "users"), where("firebaseId", "==", firebaseId)))
    if (querySnapshot.docs.length == 0) return null
    for (const userDoc of querySnapshot.docs) {
        let userData = userDoc.data()
        userData["id"] = userDoc.id
        return userData
    }
}

export async function editUserData(id, data) {
    try {
        await updateDoc(doc(db, "users", id), {
          name: data.name
        })
        console.log(`Edited user of id ${id}`)
    
      } catch (error) {
        console.error("Error editing document: ", error)
      }
}

export async function getUserArts(firebaseId) {
    let arts = []
    const querySnapshot = await getDocs(query(collection(db, "arts"), where("authorId", "==", firebaseId)))
    for (const artDoc of querySnapshot.docs) {
        let artData = artDoc.data()
        artData["id"] = artDoc.id
        arts.push(artData)
    }
    return arts
}

export async function deleteCurrentUserArt(artId) {
    try {
        await deleteDoc(doc(db, "arts", artId))
        console.log(`Deleted art of id ${artId}`)
    } catch (error) {
        console.error("Error deleting document: ", error)
    }
}

