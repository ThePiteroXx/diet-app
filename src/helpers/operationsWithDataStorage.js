export const pushDataToLocalStorage = (data, keyName) => {
  // Parse the serialized data into an aray of objects
  const arrayOfStorageData = JSON.parse(localStorage.getItem(keyName)) || [];
  // Push new data
  arrayOfStorageData.push(data);
  // Set local storage with new data
  localStorage.setItem(keyName, JSON.stringify(arrayOfStorageData));
};

export const removesDataFromLocalStorage = (dataID, keyName) => {
  // Parse the serialized data into an aray of objects
  const arrayOfStorageData = JSON.parse(localStorage.getItem(keyName)) || [];
  // Remove element from array
  const arrayAfterDataDeletion = arrayOfStorageData.filter((item) => item.id !== dataID);
  // Set local storage with new data
  localStorage.setItem(keyName, JSON.stringify(arrayAfterDataDeletion));
};

// Remove data storage
export const clearStorageData = (keyName) => localStorage.removeItem(keyName);
