import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="A portfolio showcasing projects, skills, and experience." />
        <meta name="keywords" content="Hristo Hristov, portfolio, personal website, projects, skills, CV, developer" />
        <meta property="og:title" content="H.Hristov - Portfolio" />
        <meta property="og:description" content="A portfolio showcasing projects, skills, and experience." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div>
        <Header />
        <main>
          <Content />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
