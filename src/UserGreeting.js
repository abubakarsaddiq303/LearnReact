import React, { useState } from "react";

function UserGreeting() {
  const [login, setlogin] = useState(false);
  const [logged, setlogged] = useState(true);

  return (
    <div>
      <div>
        {logged && <p>abubakar</p>}
        <button onClick={(e) => setlogged((old) => !old)}>turn</button>
      </div>

      <div>
        {login ? <p>abubakar</p> : <p>saddiq</p>}
        <button onClick={(e) => setlogin((old) => !old)}>switch</button>
      </div>
    </div>
  );
}

export default UserGreeting;

// class UserGreeting extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoggedIn: true,
//     };
//   }

//   render() {

// < ------------------ Element Variable----------->
// let message;
// if (this.state.isLoggedIn) {
//   message = <div>welcome abubakar</div>;
// } else {
//   message = <div>welcome saddiq</div>;
// }
// return (
//   <div>
//     <h1>{message}</h1>
//   </div>
// );
// <-------------if/else condition------->
// if (this.state.isLoggedIn) {
//   return <div>welcome abubakar</div>;
// } else {
//   return <div>welcome saddiq</div>;
//     // }
//   }
// }
