import { createContext, useState } from "react";

//Pré-Passo: Criar o tipo do seu contexto (isso se for necessário)
type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

//Passo1: Criar o Contexto (usando o createContext<>()) e dinifir o tipo dele()
export const ThemeContext = createContext<ThemeContextType | null>(null);

//Passo2: Criar o Provider (que armazena e fornece os valores para o contexto)
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
      {children}
    </ThemeContext.Provider>
  );
}