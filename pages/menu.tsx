import Navigation from "../components/Navigation";

export default function Menu() {
  return (
    <main className="relative flex flex-1 flex-col items-center focus:outline-none overflow-y-auto">
      <div className="pt-4 px-4 w-full max-w-6xl sm:pt-0 sm:px-6 lg:px-10">
        <article className="m-auto">
          <Navigation />
        </article>
      </div>
    </main>
  );
}
