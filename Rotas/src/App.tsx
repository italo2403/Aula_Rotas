import { Link, Routes, Route } from 'react-router-dom'
// Importa do React Router:
// - Link: cria links que trocam de rota sem recarregar a página.
// - Routes: “caixa” que contém as rotas da aplicação.
// - Route: define um caminho (URL) e qual componente mostrar nesse caminho.

import Home from '../src/pages/Home.tsx';
// Importa o componente de página "Home".
// OBS: se este arquivo App.tsx está dentro de "src/", o mais comum seria usar "./pages/Home".
// Esse caminho com "../src/..." funciona, mas é menos idiomático.

import Sobre from '../src/pages/Sobre.tsx';
// Importa o componente de página "Sobre" (onde está o seu formulário).
// Mesmo comentário do caminho acima.

export default function App() {
// Exporta o componente principal “App” como padrão (default).
// Isso permite importá-lo em outro arquivo como `import App from './App'`.

  return (
// Tudo que o componente App vai renderizar na tela é retornado daqui.

    <>
{/* // // Fragmento vazio (React Fragment). Serve como um “container” sem gerar
// // uma tag extra no HTML, evitando divs desnecessárias. */}

      <nav style={{ display: 'flex', gap: 12 }}>
{/* // <nav> é a área de navegação. */}
{/* // `style={{ display: 'flex', gap: 12 }}` aplica estilos inline em JS. */}
{/* // `display: 'flex'` coloca os itens na mesma linha.
// `gap: 12` é 12px de espaço entre os links. */}

        <Link to="/">Home</Link>
{/* // Cria um link de navegação para a rota "/" (página inicial). */}
{/* // Diferente de <a>, <Link> não recarrega a página; ele só troca a rota. */}

        <Link to="/sobre">Sobre</Link>
{/* // Link para a rota "/sobre" (sua página com formulário). */}
      </nav>
{/* // Fecha a barra de navegação. */}

      <main style={{ paddingTop: 16 }}>
{/* // Área principal do conteúdo da página.
// `paddingTop: 16` = 16px de espaçamento no topo. */}

        <Routes>
{/* // “Container” das rotas. O React Router v6 exige que <Route> fique dentro de <Routes>. */}

          <Route path="/" element={<Home />} />
{/* // Define a rota para o caminho "/".
// `element= */}
{<Home />}
{/* ` diz qual componente renderizar quando a URL for exatamente "/". */}

          <Route path="/sobre" element={<Sobre />} />
{/* // Define a rota para o caminho "/sobre".
// Renderiza o componente  */}
<Sobre /> 
{/* quando a URL for "/sobre". */}

        </Routes>
{/* // Fecha o conjunto de rotas. */}

      </main>
{/* // Fecha a área principal do conteúdo. */}

     </>


  );
{/* // Fecha o return. */}
''}
{/* // Fecha a função App. */}
{/* // Fecha o Fragmento. */}