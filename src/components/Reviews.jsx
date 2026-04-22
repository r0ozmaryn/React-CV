import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const variant = 28;

    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data.slice(0, 4)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-[900px] mx-auto mt-10 my-[30px] bg-card-bg shadow-2xl rounded-lg overflow-hidden">
      <h2 className="px-8 py-5 font-extrabold uppercase text-2xl text-primary-navy dark:text-primary-blue">
        Відгуки попередніх роботодавців
      </h2>
      <div className="grid gap-6 px-8 pb-8">
        {comments.map((comment) => (
          <div 
            key={comment.id} 
            className="bg-card-bg border border-border-subtle p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-5"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary-blue/20 flex items-center justify-center text-primary-blue font-bold text-xl uppercase">
                {comment.email[0]}
              </div>
            </div>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-1">
                <h3 className="font-bold text-text-base text-lg leading-tight">
                  {comment.email.split('@')[0]}
                </h3>
                <span className="text-xs font-mono text-text-muted opacity-70">
                  {comment.email}
                </span>
              </div>

              <h4 className="text-primary-blue dark:text-primary-blue text-sm font-semibold uppercase tracking-wide mb-2">
                {comment.name.slice(0, 30)}...
              </h4>

              <p className="text-text-base leading-relaxed italic text-sm md:text-base">
                "{comment.body}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
