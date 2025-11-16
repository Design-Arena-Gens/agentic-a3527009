export default function TopicCard({ title, points = [], hint, details }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <ul>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      {details?.callout ? (
        <div className="callout">
          <strong>{details.callout}</strong>
          {details.list && (
            <ul className="callout-list">
              {details.list.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
      {hint && <p className="hint">?? {hint}</p>}
    </article>
  );
}
