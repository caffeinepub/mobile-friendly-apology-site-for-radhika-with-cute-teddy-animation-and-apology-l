import TeddyAnimation from './components/TeddyAnimation';
import ApologyLetterCard from './components/ApologyLetterCard';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background with pastel hearts */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/assets/generated/pastel-hearts-bg.dim_1920x1080.png)' }}
      />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-romantic-peach via-romantic-pink to-romantic-cream" />
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Header Section */}
        <header className="pt-6 pb-3 px-4 text-center sm:pt-8 sm:pb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-romantic-deep mb-2 font-serif">
            Dear Radhika
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-romantic-medium font-light italic">
            My Love, My Everything ❤️
          </p>
        </header>

        {/* Teddy Animation Section */}
        <section className="py-4 px-4 flex justify-center sm:py-6">
          <TeddyAnimation />
        </section>

        {/* Apology Letter Section */}
        <main className="pb-8 px-4 max-w-3xl mx-auto sm:pb-12">
          <ApologyLetterCard />
        </main>
      </div>
    </div>
  );
}
