
 export default function Project(){
        return(
<section className="py-20 px-6 bg-zinc-900">
        <h3 className="text-3xl font-semibold mb-12 text-center text-indigo-400 underline decoration-indigo-400 decoration-4 underline-offset-8">Projects</h3>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="p-6 rounded-xl shadow-lg bg-zinc-950 hover:shadow-2xl transition hover:scale-[1.02] ">
          <h4 className="text-2xl font-bold mb-3 text-indigo-400">Bahir Dar University Student Union Selection System</h4>
          <ul className="list-disc list-inside mb-3 text-zinc-100">
      <li>Real-time voting features</li>
      <li>Admin dashboard for election management</li>
      <li>Result visualization and analytics</li>
    </ul>
          <p  className="text-indigo-400"><strong>Tech:  </strong>
  <span className="px-3 py-1 text-sm rounded-full bg-indigo-400/10 text-indigo-400 mr-3">React </span>
  <span className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-zinc-300"> CSS</span>
 </p>

        </article>


        <article className="p-6 rounded-xl shadow-lg bg-zinc-950 hover:shadow-2xl transition hover:scale-[1.02] ">
          <h4 className="text-2xl font-bold mb-3 text-indigo-400">Church Website</h4>
          <ul className="list-disc list-inside mb-3 text-zinc-100">
      <li>Content management system</li>
      <li>Event scheduling</li>
      <li>Member communication features</li>
    </ul>
    <p className="text-indigo-400"><strong>Tech:</strong>  <span className="px-3 py-1 text-sm rounded-full bg-indigo-400/10 text-indigo-400 mr-3">React </span>
  <span className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-zinc-300"> CSS</span></p>

        </article>
           </div>
      </section>
        );
      }