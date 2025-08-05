import Intro from "@/components/Intro";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
export default function Home() {
  return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background px-4 py-8 sm:px-8 min-h-screen">
      <main className="z-10 relative">
        <Intro />
      </main>
       <FlickeringGrid
          className="absolute inset-0 z-0 size-full "
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={.3}
          flickerChance={0.1}
          height={1600}
          width={3000}
      />
    </div>
  );
}
