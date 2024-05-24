// Set user session data
export function setSessionData(userData) {
  localStorage.setItem('userData', JSON.stringify(userData));
}

// Retrieve user session data
export function getSessionData() {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
}

// Retrieve current user firebase id
export function getSessionFirebaseId() {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData).firebaseId : null;
}

// Clear user session data
export function clearSessionData() {
  localStorage.removeItem('userData');
}

