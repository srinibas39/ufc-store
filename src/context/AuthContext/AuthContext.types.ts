 export type AuthProviderType = {
    children: React.ReactNode;
  };
  
 export type userType={
          _id: string;
          firstName: string;
          lastName: string;
          email: string;
          password: string;
          createdAt: string;
          updatedAt: string;
        } 
  
  
 export type AuthContextType = {
    token: string;
    user: userType | null;
    handleLogin: (email: string, password: string) => void;
    handleSignup: (
      firstName: string,
      lastName: string,
      email: string,
      password: string
    ) => void;
    handleLogout: () => void;
    loggedIn: boolean;
  };