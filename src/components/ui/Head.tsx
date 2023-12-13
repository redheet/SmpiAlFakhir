import { Helmet } from 'react-helmet';

function Head({ title }) {
  return (
    <>
      <Helmet>
        <title>{title} - SMPI Modern Al-Fakhir</title>
      </Helmet>
    </>
  );
}

export default Head;
