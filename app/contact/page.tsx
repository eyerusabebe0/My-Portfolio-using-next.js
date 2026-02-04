export default function Contact() {
  return (
    <section className="py-30 px-6 bg-zinc-900 text-center">
      <div className="max-w-2xl mx-auto bg-zinc-950 border border-indigo-400 rounded-2xl py-12 px-8 shadow-lg">
        
        <h3 className="text-3xl font-semibold mb-4 text-indigo-400 underline decoration-indigo-400 decoration-4 underline-offset-8">
          Contact
        </h3>

        <p className="text-zinc-400 mb-8">
          Feel free to reach out for collaboration, opportunities, or just to say hello.
        </p>

        <p className="mb-4 text-zinc-300 text-lg">
          Email:
          <a
            href="mailto:jeryabebe1321@gmail.com"
            className="ml-2 text-indigo-400 hover:underline"
          >
            jeryabebe1321@gmail.com
          </a>
        </p>

        <p className="text-zinc-300 text-lg">
          GitHub:
          <a
            href="https://github.com/jeryabebe1321"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-indigo-400 hover:underline"
          >
            jeryabebe1321
          </a>
        </p>

      </div>
    </section>
  );
}
