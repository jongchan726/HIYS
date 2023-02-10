// import React from 'react';

// const Signup = () => {
//     return (
//       <div>
//         <h1>회원가입 페이지</h1>
//         <p>선생님 회원가입 창입니다</p>
//       </div>
//     );
//   };
  
//   export default Signup;
import React, { useState } from 'react';

interface Props {
  onSubmit: (username: string, password: string) => void;
}

const MembershipWindow: React.FC<Props> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-input">Username:</label>
        <input
          id="username-input"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password-input">Password:</label>
        <input
          id="password-input"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MembershipWindow;
