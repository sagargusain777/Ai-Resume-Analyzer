import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback for your dream" },
  ];
}

export default function Home() {
  return <main>
      <section className= "main-section">
          <div className= "page-heading">
              <h1>Track Your Applications And Resume Rating</h1>
              <h2> AI-driven feedback to perfect your applications and stand out to recruiters.</h2>/

          </div>
      </section>

  </main>
}
