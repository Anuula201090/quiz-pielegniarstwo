import { useState } from 'react';
import questions from '../questions.json';

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];

  const handleAnswer = (idx) => {
    if (idx === q.correct) setScore(score + 1);
    const next = current + 1;
    if (next < questions.length) setCurrent(next);
    else setDone(true);
  };

  if (done) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Twój wynik: {score}/{questions.length}</h1>
        {score >= 61 && <p>🎉 Super! Udało Ci się – zdałeś!</p>}
        {score < 61 && <p>❗Niestety, nie udało się tym razem. Spróbuj ponownie.</p>}
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Pytanie {current + 1} z {questions.length}</h2>
      <p>{q.question}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        {q.answers.map((a, i) => (
          <button key={i} onClick={() => handleAnswer(i)} style={{ padding: '0.5rem', fontSize: '1rem' }}>
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}