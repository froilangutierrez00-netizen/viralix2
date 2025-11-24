import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: () => Promise<void>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
//este login debe ser mediante las banderas de FeatureFlag de configcat

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('viralix_user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                localStorage.removeItem('viralix_user');
            }
        }
        setIsLoading(false);
    }, []);

    const login = async () => {

        const name = prompt('Ingresa tu nombre (Aca debe ir a OAuth):');

        if (name && name.trim()) {
            const mockUser: User = {
                name: name.trim(),
                email: `${name.trim().toLowerCase().replace(/\s+/g, '.')}@example.com`
            };

            setUser(mockUser);
            localStorage.setItem('viralix_user', JSON.stringify(mockUser));
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('viralix_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
