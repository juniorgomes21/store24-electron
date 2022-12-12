import { createContext, useState, useEffect } from 'react';

interface AuthContextData {
    loading: boolean;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: any) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    }, []);


    return (
        <AuthContext.Provider value={{ loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
