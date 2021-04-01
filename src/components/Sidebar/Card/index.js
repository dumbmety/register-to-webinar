import { FormattedMessage } from 'react-intl';
import ImageZoom from 'react-medium-image-zoom';

import './index.css';

const Card = ({ name, title, image }) => {
  return (
    <li className="card">
      <ImageZoom
        image={{ src: `/img/${image}`, alt: name }}
        zoomImage={{ src: `/img/${image}`, alt: name }}
      />
      <div>
        <h4>
          <FormattedMessage id={name} />
        </h4>
        <p>
          <FormattedMessage id={title} />
        </p>
      </div>
    </li>
  );
};

export default Card;
