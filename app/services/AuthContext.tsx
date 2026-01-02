'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface UserData {
account:IUserProfile
user:IUser
success:boolean
}

interface AuthContextType {
  user: UserData | null;
  token: string | null;
  loading: boolean;
  updateUser: (data: Partial<UserData>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('token');
      
      const storedNumber = localStorage.getItem('number');

      if (!storedToken || !storedNumber) {
        setLoading(false);
        return;
      }

      setToken(storedToken);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URI}websiteuser/${JSON.parse(storedNumber)}`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        const data = await response.json();

        if (data?.success) {
          setUser({
            account: data?.account,
            user: data?.user,
            success: data?.success
          });
        }
      } catch (error) {
        console.error('Auth initialization failed:', error);
      } finally {
        setLoading(false);
      }
    };
    
    initAuth();
  }, []); // Empty dependency array - runs once on mount

  const updateUser = (data: Partial<UserData>) => {
    setUser(prev => prev ? { ...prev, ...data } : null);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('number');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export interface IUser {
  _id: string;
  full_name: string;
  name_number: number;
  gender: "Male" | "Female" | string;
  time_of_birth: string; // HH:mm
  place_of_birth: string;
  popular_name: string;
  state: string;
  country: string;

  number1: number;
  number2: number;
  number3: number;
  number4: number;
  number5: number;
  number6: number;
  number7: number;
  number8: number;
  number9: number;

  created_date: string | null;
  created_by: string;
  updated_date: string | null;
  updated_by: string;
  user_account_id: string | null;

  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  __v: number;

  date_of_birth: string; // ISO date
  destiny_number: number;
  psychic_number: number;
}

export interface IUserProfile {
  _id: string;
  country_code: string;
  user: IUser;

  id: string | null;
  mobile_number: string;
  email_id: string;

  otp: number;
  otpTime: string; // ISO date

  last_login: string | null;
  status: string; // e.g. "A"
  is_verified: boolean | string;

  fcm_token: string | null;
  user_token: string | null;

  platform_type: "Desktop" | "Mobile" | string;

  created_date: string | null;
  created_by: string;
  updated_date: string | null;
  updated_by: string;

  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  __v: number;
}
