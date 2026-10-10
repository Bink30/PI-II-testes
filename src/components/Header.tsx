
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-[#F7F7F7]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-1 py-2">

        {/* Logo da loja */}
        <a href="/" aria-label="Página inicial da Dádiva">
            <Image
                src="/images/Logo Dádiva.jpeg"
                alt="Logo da Dádiva"
                width={160}
                height={60}
                priority
                className="h-auto w-60 object-contain"
            />
        </a>

        {/* Ações do lado direito */}
        <div className="flex items-center gap-5">

          {/* Carrinho */}
          <button
            type="button"
            aria-label="Abrir carrinho"
            className="text-gray-700 transition hover:text-red-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>

          {/* Perfil administrativo */}
          <button
            type="button"
            aria-label="Acesso administrativo"
            title="Acesso administrativo"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-red-950 text-white transition hover:bg-red-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
            </svg>
          </button>

        </div>
      </div>
    </header>
  );
}