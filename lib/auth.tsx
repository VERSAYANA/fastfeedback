import { createContext, useContext, useEffect, useState } from 'react';
import firebase from './firebase';

const authContext = createContext<AuthContext | null>(null);

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth(): AuthContext {
  const [user, setUser] = useState(null);

  const signInWithGithub = (): Promise<firebase.User> => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signOut = (): Promise<void> => {
    return firebase
      .auth()
      .signOut()
      .then(() => setUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    return () => unsubscribe();
  });

  return {
    user,
    signInWithGithub,
    signOut
  };
}

type AuthContext = {
  user: firebase.User;
  signInWithGithub: () => Promise<firebase.User>;
  signOut: () => Promise<void>;
};
