export function DashboardPage() {
  const cards = [
    ['Utilisateurs', '124'],
    ['Parties sauvegardées', '38'],
    ['Difficulté la plus jouée', 'Normal'],
    ['Incidents', '0 critique']
  ];

  return (
    <main className="admin-shell">
      <header>
        <h1>Minos — Administration</h1>
        <p>Panneau de pilotage initial pour le projet.</p>
      </header>
      <section className="card-grid">
        {cards.map(([label, value]) => (
          <article className="card" key={label}>
            <h2>{label}</h2>
            <strong>{value}</strong>
          </article>
        ))}
      </section>
      <section className="panel">
        <h2>Modules prévus</h2>
        <ul>
          <li>Gestion des comptes joueurs</li>
          <li>Réglage des difficultés du labyrinthe</li>
          <li>Suivi des sauvegardes</li>
          <li>Statistiques et modération</li>
        </ul>
      </section>
    </main>
  );
}
