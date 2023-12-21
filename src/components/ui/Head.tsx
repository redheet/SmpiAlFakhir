import { Helmet, HelmetProvider } from 'react-helmet-async';
import icon from '/src/favicon.ico';

function Head({ title }) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title} - SMPI Modern Al-Fakhir</title>
          <link rel="shortcut icon" href={icon} />
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default Head;
