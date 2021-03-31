import Card from '../Card';

import './index.css';

export default function Guests() {
  return (
    <section id="guests">
      <h3>Guests</h3>
      <ul>
        <Card name="Lisa Alvin" title="Cofounder, Jea" image="lisa-alvin.png" />
        <Card name="Jenny Pick" title="Head of Education, Jea" image="jenny-pick.png" />
        <Card name="Peter Scott" title="Founder, Jea" image="peter-scott.png" />
      </ul>
    </section>
  );
}
