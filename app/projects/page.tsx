import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Services | Madden & Mangan Construction Ltd",
  description:
    "Professional building contractors, roofers & slaters providing construction and restoration services across Munster.",
};

const projects = [
  "Muckross Glass House, Killarney, Co. Kerry",
  "Muckross Gate Lodge, Killarney, Co. Kerry",
  "Derrycunnihy Church, Killarney, Co. Kerry",
  "Cottage 22, Muckross, Killarney, Co. Kerry",
];


export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <Navbar />

      <section className="bg-stone-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Selected Projects
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Previous work and specialist project experience
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            The company has experience working on notable projects and alongside
            RIAI Conservation Accredited architects on restoration and
            conservation work.
          </p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project}
                className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold">{project}</h2>
                <p className="mt-3 leading-7 text-stone-600">
                  A completed project showcasing the company’s experience in
                  quality construction, restoration, and specialist work.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}