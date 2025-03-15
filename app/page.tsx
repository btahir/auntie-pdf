import { OCRDocumentProcessor } from '@/components/ocr-document-processor'
import { Github } from 'lucide-react'

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-amber-50 to-white'>
      {/* Sponsorship Banner */}
      <div className='w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-2 text-center'>
        <a
          href='https://www.you-tldr.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline font-medium'
        >
          Sponsored by You-TLDR - Get the TLDR of any YouTube video in seconds!
        </a>
      </div>

      <div className='container mx-auto py-10 px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='mb-8 text-center'>
            <div className='flex justify-center mb-4'>
              <div className='relative'>
                <div className='absolute -top-1 -right-6 bg-red-100 text-red-600 rounded-full px-1 py-0.5 text-[0.6rem] font-medium transform rotate-30 border-2 border-red-300'>
                  She knows best!
                </div>
                <div className='h-24 w-24 bg-red-600 rounded-full flex items-center justify-center shadow-lg border-4 border-amber-200 overflow-hidden'>
                  <img
                    src='/logo.svg'
                    alt='Auntie PDF Logo'
                    className='h-24 w-24 object-cover rounded-full'
                  />
                </div>
              </div>
            </div>
            <h1 className='text-3xl md:text-5xl font-bold mb-4 text-red-600 font-serif'>
              Welcome to Auntie PDF!
            </h1>
            <p className='text-xl text-amber-800 max-w-2xl mx-auto font-medium'>
              Your all-knowing guide that unpacks every PDF into clear,
              actionable insights. Just like your favorite aunt, but for
              documents!
            </p>

            {/* GitHub link moved here */}
            <div className='mt-4 flex justify-center'>
              <a
                href='https://github.com/btahir/auntie-pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md hover:shadow-lg transition-all text-amber-800 border border-amber-200'
              >
                <Github className='h-5 w-5' />
                <span className='font-medium'>View on GitHub</span>
              </a>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-red-200 relative'>
            <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full font-medium shadow-md text-sm whitespace-nowrap'>
              Auntie&apos;s Reading Room
            </div>
            <div className='mb-6 text-center'>
              <h2 className='text-xl font-serif font-semibold text-red-600 mb-2'>
                Upload Your PDF
              </h2>
              <p className='text-amber-700 italic'>
                &quot;Honey, let me take a look at that document for you!&quot;
              </p>
            </div>
            <OCRDocumentProcessor />
          </div>

          <div className='mt-10 grid gap-6 md:grid-cols-2'>
            <div className='bg-red-50 rounded-lg p-5 border-2 border-red-200 shadow-md relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-16 h-16'>
                <div className='absolute transform rotate-45 bg-red-600 text-white text-xs font-bold text-center py-1 right-[-35px] top-[15px] w-[130px]'>
                  Helpful!
                </div>
              </div>
              <h3 className='font-medium text-red-800 mb-2 text-lg font-serif'>
                How Auntie Helps
              </h3>
              <p className='text-amber-700'>
                I&apos;ll extract all that important text from your PDF
                documents while keeping everything organized, just like I do
                with family recipes! I&apos;m powered by top-notch OCR
                technology, darling.
              </p>
            </div>

            <div className='bg-amber-50 rounded-lg p-5 border-2 border-amber-300 shadow-md relative'>
              <div className='absolute -top-3 -left-3 bg-amber-400 text-amber-900 rounded-full h-10 w-10 flex items-center justify-center font-bold border-2 border-white'>
                Tip!
              </div>
              <h3 className='font-medium text-amber-800 mb-2 text-lg font-serif pl-6'>
                Auntie&apos;s Tips
              </h3>
              <p className='text-amber-700'>
                For best results, make sure your PDFs are not password
                protected. And remember, I work best with documents that have
                clear text - just like how I prefer my gossip!
              </p>
            </div>
          </div>

          <div className='mt-10 text-center text-amber-700 italic'>
            &quot;Let Auntie take care of all your document needs,
            sweetie!&quot;
          </div>
        </div>
      </div>
    </div>
  )
}
