import Head from "next/head"

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Clipboard website</title>
      </Head>
      <main>

        {/* hero section */}
        <section id="hero">
          <div className="section-container mb-40 pt-16">

            <img src="logo.svg" alt="" className="mx-auto my-16" />

            <h3>A history of everything you copy</h3>

            <p className="section-content mb-10 text-2xl">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices!</p>

            {/* buttons container */}
            <div className="button-container">
              <a href="#" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
                Download for iOS
              </a>
              <a href="#" className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
                Download for Mac
              </a>
            </div>
          </div>
        </section>

        {/* snippet section */}
        <section id="snippets">
          <div className="section-container my-20">
            <h3>Keep track of your snippets</h3>

            <p className="section-content text-xl mb-24">
              Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets inmediately on all your devices. our Mac and iOS apps will help you organize everything.
            </p>
          </div>
        </section>

        {/* features section */}
        <section id="features">
          <div className="section-container my-20">
            <div className="relative flex flex-col md:flex-row md:space-x-32">
              {/* image */}
              <div className="md:w-1/2">
                <img src="image-computer.png" className="md:absolute top-0 right-[50%]" alt="" />
              </div>
              {/* items container */}
              <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
                {/* item 1 */}
                <div>
                  <h5>Quick Search</h5>

                  <p className="max-w-md text-grayishBlue">
                    Easily search your snippets by content, category, web address, application, and more.
                  </p>
                </div>

                {/* item 2 */}
                <div>
                  <h5>iCloud Sync
                  </h5>

                  <p className="max-w-md text-grayishBlue">
                    Instantly saves and syncs snippets across all your devices.
                  </p>
                </div>

                {/* item 3 */}
                <div>
                  <h5>Completely History</h5>

                  <p className="max-w-md text-grayishBlue">
                    Retrieve any snippets from the first moment you started using the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* access anywhere section */}
        <section id="access">
          <div className="section-container my-20">
            <h3>Access Clipboard Anywhere</h3>
            
            <p className="section-content text-xl mb-24">Wether you`re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>

            <img src="image-devices.png" alt="" className="mx-auto" />
          </div>
        </section>

        {/* supercharge sec */}
        <section id="supercharge">
          <div className="section-container text-xl my-20">
            <h3>Supercharge your workflow</h3>
            <p className="section-content mb-16">
              we`ve got tools to boost your productivity.
            </p>
            {/* items container */}
            <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
              {/* item 1  */}
              <div className="flex flex-col items-center space-y-5">
                <img src="icon-blacklist.svg" alt="" className="mb-6" />
                <h5>Create Blacklists</h5>
                <p className="max-w-md text-grayishBlue">
                  Easily search your snippets by content, category, web address, application, and more.
                </p>
              </div>
              {/* item 2  */}
              <div className="flex flex-col items-center space-y-5">
                <img src="icon-text.svg" alt="" className="mb-6" />
                <h5>Plain Text Snippets</h5>
                <p className="max-w-md text-grayishBlue">
                  Remove unwanted formatting from copied text for a consistent look.
                </p>
              </div>
              {/* item 3  */}
              <div className="flex flex-col items-center space-y-5">
                <img src="icon-preview.svg" alt="" className="mb-6" />
                <h5>Sneak Preview</h5>
                <p className="max-w-md text-grayishBlue">
                  Quick preview of all snippets on your Clipboard for easy access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* references section */}
        <section id="references">
          <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
            <img src="logo-google.png" alt="" />
            <img src="logo-ibm.png" alt="" />
            <img src="logo-microsoft.png" alt="" />
            <img src="logo-hp.png" alt="" />
            <img src="logo-vector-graphics.png" alt="" />
          </div>
        </section>

        {/* bottom CTA */}
        <section id="bottom">
          <div className="section-container my-20">
            <h3>Clipboard for iOS and MacOS</h3>
            <p className="section-content text-xl mb-10">
              Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you`re ready to start adding to your clipboard.
            </p>

            {/* button container */}
            <div className="button-container">
              <a href="#" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
                Download for iOS
              </a>
              <a href="#" className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
                Download for Mac
              </a>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="bg-gray-100">
          <div className="section-container">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <img src="logo.svg" alt="" className="scale-50" />
              {/* container for menus n social */}
              <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
                {/* menus */}
                <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                  {/* menu 1 */}
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div><a href="#" className="hover:text-strongCyan">FAQs</a></div>
                    <div><a href="#" className="hover:text-strongCyan">Contact Us</a>
                    </div>
                  </div>
                  {/* menu 2 */}
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div><a href="#" className="hover:text-strongCyan">Privacy Policy</a></div>
                    <div><a href="#" className="hover:text-strongCyan">Press Kit</a>
                    </div>
                  </div>
                  {/* menu 3 */}
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div><a href="#" className="hover:text-strongCyan">Install Guide</a></div>
                  </div>
                </div>
                {/* social icons */}
                <div className="flex justify-between w-32 py-1">
                  <a href="#"><img src="icon-facebook.svg" alt="" className="duration-200 ficon" /></a>
                  <a href="#"><img src="icon-twitter.svg" alt="" className="duration-200 ficon" /></a>
                  <a href="#"><img src="icon-instagram.svg" alt="" className="duration-200 ficon" /></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
