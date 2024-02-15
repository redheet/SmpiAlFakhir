import { Helmet, HelmetProvider } from 'react-helmet-async';
import icon from '/src/favicon.ico';

function Head({ title }) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title} - SMPI Modern Al-Fakhir</title>
          <meta
            name="description"
            content="SMP Islam yang mengusung konsep modern, mengadopsi model kelas dan program internasional, namun tetap mengutamakan pendidikan karakter, moral, akhlak dan nilai-nilai keislaman."
          />
          <meta property="og:site_name" content="School Center" />
          <link rel="shortcut icon" href={icon} />
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default Head;
