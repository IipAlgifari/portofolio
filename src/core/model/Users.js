// models/User.js
class User {
    constructor(id, username, email, fullName, dateOfBirth) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.fullName = fullName;
      this.dateOfBirth = dateOfBirth;
    }
  
    // Contoh metode untuk mendapatkan umur pengguna
    getAge() {
      // Logika untuk menghitung umur berdasarkan tanggal lahir
      // Misalnya, asumsi tahun sekarang dikurangi tahun lahir
      const currentYear = new Date().getFullYear();
      const birthYear = new Date(this.dateOfBirth).getFullYear();
      return currentYear - birthYear;
    }
  }
  
  export default User;

  
// ==== Example ====
// components/UserProfile.js
// import React from 'react';
// import User from '../models/User';

// const UserProfile = () => {
//   // Membuat instance dari model User
//   const currentUser = new User(1, 'john_doe', 'john@example.com', 'John Doe', '1990-01-01');

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>ID: {currentUser.id}</p>
//       <p>Username: {currentUser.username}</p>
//       <p>Email: {currentUser.email}</p>
//       <p>Full Name: {currentUser.fullName}</p>
//       <p>Date of Birth: {currentUser.dateOfBirth}</p>
//       <p>Age: {currentUser.getAge()}</p>
//     </div>
//   );
// };

// export default UserProfile;
