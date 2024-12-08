import { localStorageKeys } from "@/config/localStorageKeys";

export function getUserFromLocalStorage() {
    const user = localStorage.getItem(localStorageKeys.ACCESS_USER)
    const objectUser = user ? JSON.parse(user) : null
    return objectUser
}

export function removeUserFromStorage(){
    localStorage.removeItem(localStorageKeys.ACCESS_USER)
}