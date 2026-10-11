'use client'

import { useState } from 'react';
import Button from '@/src/components/Button';
import Input from '@/src/components/Input';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setErrors({ name: '', email: '', password: '', confirmPassword: '' });

    let hasError = false;
    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };

    if (!name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
      hasError = true;
    }
    
    // Validação de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Por favor, informe seu e-mail.';
      hasError = true;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Por favor, informe um e-mail válido.';
      hasError = true;
    }

    if (!password.trim()) {
      newErrors.password = 'Por favor, crie uma senha.';
      hasError = true;
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres.';
      hasError = true;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      // TODO: Substituir pela chamada de criação de conta no Firebase
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Mock: Conta criada com sucesso!');
      router.push('/login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <div className="w-full max-w-sm flex flex-col items-center">
        
        <div className="w-full mb-8">
          <h1 className="text-2xl font-bold text-gray-800 text-center">Criar Conta</h1>
        </div>

        <form onSubmit={handleRegister} className="w-full flex flex-col gap-4" noValidate>
          
          <Input 
            id="name"
            label="Nome Completo"
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />

          <Input 
            id="email"
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <Input 
            id="password"
            label="Senha"
            type="password"
            placeholder="Crie uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <Input 
            id="confirmPassword"
            label="Confirmar Senha"
            type="password"
            placeholder="Repita sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
          />

          <Button type="submit" disabled={loading} className="w-full py-3 mt-4 text-lg font-medium">
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
        </form>

      </div>
    </main>
  );
}