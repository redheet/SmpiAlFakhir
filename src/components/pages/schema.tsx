import Footer from '../layout/footer';
import NavMenu from '../layout/nav-menu';
import Head from '../ui/Head';
import user from '../../assets/img/profile.png';

function Schema() {
  return (
    <>
      <Head title="Struktur Organisasi Sekolah" />
      <NavMenu />
      <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">
            Struktur Organisasi Sekolah
          </h1>

          <div className="flex flex-row flex-wrap-reverse justify-center ">
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={user}
              />
              <p className="text-xl font-semibold leadi">Deni Irawan</p>
              <p className="dark:text-gray-400">OWNER</p>
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <div className="flex flex-row flex-wrap-reverse justify-center ">
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={user}
              />
              <p className="text-xl font-semibold leadi">Anshori bin Zainab</p>
              <p className="dark:text-gray-400">Pembina Yayasan</p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={user}
              />
              <p className="text-xl font-semibold leadi">Arsid Tabroni</p>
              <p className="dark:text-gray-400">Pengawas Yayasan</p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={user}
              />
              <p className="text-xl font-semibold leadi">Deni Irawan</p>
              <p className="dark:text-gray-400">Ketua Yayasan</p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={user}
              />
              <p className="text-xl font-semibold leadi">Siti Rokoyah</p>
              <p className="dark:text-gray-400">Bendahara Yayasan</p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={user}
              />
              <p className="text-xl font-semibold leadi">Astini</p>
              <p className="dark:text-gray-400">Sekretaris Yayasan</p>
            </div>
          </div>
        </div>

        {/* KEPALA SEKOLAH SECTION */}
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <div className="flex flex-row flex-wrap-reverse justify-center ">
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={user}
              />
              <p className="text-xl font-semibold leadi">Anggraini</p>
              <p className="dark:text-gray-400">Kepala Sekolah</p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={user}
              />
              <p className="text-xl font-semibold leadi">Deni Rahmat</p>
              <p className="dark:text-gray-400">Wakabid Kesiswaan</p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={user}
              />
              <p className="text-xl font-semibold leadi">Siti Rokoyah</p>
              <p className="dark:text-gray-400">Wakabid Kurikulum</p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={user}
              />
              <p className="text-xl font-semibold leadi">Arsid Tabroni</p>
              <p className="dark:text-gray-400">Wakabid Sarpas</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Schema;
