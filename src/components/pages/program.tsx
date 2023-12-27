import Head from '../ui/Head';
import NavMenu from '../layout/nav-menu';
import Footer from '../layout/footer';

function Program() {
  return (
    <>
      <Head title="Program" />
      <NavMenu />
      <section className="p-4 lg:p-8 bg-white text-gray-900">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          {/* <Breadcrumb /> */}
          <nav aria-label="Breadcrumb" className="flex">
            <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
              <li className="flex items-center">
                <a href="/" className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>

                  <span className="ms-1.5 text-xs font-medium"> Home </span>
                </a>
              </li>

              <li className="relative flex items-center">
                <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

                <a href="#" className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900">
                  Program
                </a>
              </li>
            </ol>
          </nav>
          {/* <Breadcrumb /> */}
          <div className="max-w-xl mb-10 md:mx-auto text-center md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Program
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern id="d9d7687a-355f-4502-8ec4-7945db034688" x="0" y="0" width=".135" height=".30">
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)" width="52" height="24" />
                </svg>
                <span className="relative">Program Kami</span>
              </span>
            </h2>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-3xl font-bold">
                  <a href="#">Kurikulum</a>
                </h3>
                <p className="my-6 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.
                </p>
                <button type="button" className="self-start">
                  Selengkapnya
                </button>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                <h3 className="text-3xl font-bold">
                  <a href="#">Ekstrakurikuler</a>
                </h3>
                <p className="my-6 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.
                </p>
                <button type="button" className="self-start">
                  Selengkapnya
                </button>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                <h3 className="text-3xl font-bold">
                  <a href="#">Program Unggulan</a>
                </h3>
                <p className="my-6 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.
                </p>
                <button type="button" className="self-start">
                  Selengkapnya
                </button>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img src="https://source.unsplash.com/640x480/?4" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                <h3 className="text-3xl font-bold">
                  <a href="#">International Program</a>
                </h3>
                <p className="my-6 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.
                </p>
                <button type="button" className="self-start">
                  Selengkapnya
                </button>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img src="https://source.unsplash.com/640x480/?5" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                <h3 className="text-3xl font-bold">
                  <a href="#">Muatan Lokal</a>
                </h3>
                <p className="my-6 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.
                </p>
                <button type="button" className="self-start">
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Program;
