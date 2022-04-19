
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';


const auth = getAuth(app)

function App() {

  const [user, setUser] = useState({})

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)

      })

      .catch((error) => {
        console.log(error)
      })
  }


  const handleGitHubSignIn = () => {

    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)

      })
      .catch((error) => {

        console.log(error)

      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch((error) => {

        console.log(error)
        setUser({})

      })

  }

  console.log(user)


  return (
    <div className="App">

      {
        user.uid ? <button onClick={handleSignOut}>Sign Out</button> : <><button onClick={handleGoogleSignIn}>google Mama </button> <button onClick={handleGitHubSignIn}>Gitto Mama</button></>
      }






      <div>
        <p>Name: {user.displayName}</p>
        <p>{user.email}</p>
      </div>

    </div>
  );
}

export default App;
