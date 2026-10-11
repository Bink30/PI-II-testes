'use client'

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/src/components/Button';
import Input from '@/src/components/Input';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ username: '', password: '' });
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ username: '', password: '' });

    let hasError = false;
    const newErrors = { username: '', password: '' };

    if (!username.trim()) {
      newErrors.username = 'Por favor, informe seu usuário.';
      hasError = true;
    }
    if (!password.trim()) {
      newErrors.password = 'Por favor, informe sua senha.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      // TODO: Substituir pela chamada de autenticação do Firebase
      await new Promise(resolve => setTimeout(resolve, 1500));
      // router.push('/');
    } catch (error) {
      console.error('Erro de autenticação:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    if (!username.trim()) {
      setErrors(prev => ({ ...prev, username: 'Preencha este campo para recuperar a senha.' }));
      return;
    }
    console.log(`Mock: Link de recuperação enviado para ${username}`);
  };

  const handleGoToRegister = () => {
    router.push('/register');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <div className="w-full max-w-sm flex flex-col items-center">
        
        <div className="mb-8 w-full flex justify-center">
          <Image
            src="/images/Logo.svg"
            alt="Logo da Dádiva Aromaterapia"
            width={280}
            height={100}
            priority
            className="h-auto w-64 md:w-80 object-contain"
          />
        </div>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-5" noValidate>
          
          <Input 
            id="username"
            label="Usuário"
            type="text"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={errors.username}
          />

          <Input 
            id="password"
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <div className="flex justify-end w-full mb-2">
            <button 
              type="button" 
              onClick={handleForgotPassword}
              className="text-sm text-red-900 hover:text-red-700 hover:underline transition-colors focus:outline-none"
            >
              Esqueceu a senha?
            </button>
          </div>

          <Button type="submit" disabled={loading} className="w-full py-3 text-lg font-medium">
            {loading ? 'Aguarde...' : 'Entrar'}
          </Button>
        </form>

        <div className="mt-6 w-full text-center">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{' '}
            <button 
              type="button"
              onClick={handleGoToRegister}
              className="text-red-900 font-semibold hover:text-red-700 hover:underline transition-colors focus:outline-none"
            >
              Cadastre-se
            </button>
          </p>
        </div>

      </div>
    </main>
  );
}