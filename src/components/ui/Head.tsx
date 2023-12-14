import { Helmet, HelmetProvider } from 'react-helmet-async';

function Head({ title }) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title} - SMPI Modern Al-Fakhir</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default Head;
