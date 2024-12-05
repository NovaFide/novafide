import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="border-lg rounded-lg"
          src="/1.JPG"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mt-8">
          Vision is bold: NovaFide is intended to grow indefinitely, establishing itself as a true store of value and a long-term investment. The expected growth trajectory is designed to see the coin reach $50 per coin within one year, fueled by active community engagement, innovative use cases, and our commitment to transparency.{" "}
 
            
          </li>
          <li className="mt-8">Unlike typical meme coins that fizzle out after the initial hype, NovaFide is designed to grow and thrive over time, offering true value to its holders.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="dexpagetocome"
            target="_blank"
            rel="noopener noreferrer"
          >
 
           Check it out 
          </a>
 
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       NovaFide
      </footer>
    </div>
  );
}
