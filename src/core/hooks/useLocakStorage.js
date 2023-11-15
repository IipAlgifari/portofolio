// hooks/useLocalStorage.js
import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // Membaca nilai dari localStorage saat komponen di-mount
  const storedValue = localStorage.getItem(key);
  // Inisialisasi state dengan nilai dari localStorage atau nilai awal jika tidak ada
  const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

  // Fungsi untuk menyimpan nilai ke localStorage dan juga meng-update state
  const setStoredValue = (newValue) => {
    // Mengupdate state
    setValue(newValue);
    // Menyimpan nilai ke localStorage dalam bentuk JSON
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

export default useLocalStorage;




// components/ExampleComponent.js
// import React from 'react';
// import useLocalStorage from '../hooks/useLocalStorage';

// const ExampleComponent = () => {
//   // Menggunakan custom hook untuk menyimpan dan mendapatkan nilai dari localStorage
//   const [storedData, setStoredData] = useLocalStorage('myDataKey', 'default value');

//   // Menggunakan nilai dari localStorage dalam komponen
//   return (
//     <div>
//       <p>Data from localStorage: {storedData}</p>
//       <button onClick={() => setStoredData('new value')}>Update Data</button>
//     </div>
//   );
// };

// export default ExampleComponent;
