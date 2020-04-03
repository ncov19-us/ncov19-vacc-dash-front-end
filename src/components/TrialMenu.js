import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

function TrialMenu() {
  const [active, setActive] = useState('all');

  // Semantic calls onClick with event, object containing all props
  const handleClick = (evt, { name }) => {
    setActive(name);
  };

  return (
    <div className="ui center aligned container">
      <h3 className="trials">COVID-19 Trials</h3>
      <Menu compact pointing secondary inverted>
        <Menu.Item
          name="all"
          active={active === 'all'}
          onClick={handleClick}
        >
          Trials
        </Menu.Item>
        <Menu.Item
          name="vaccines"
          active={active === 'vaccines'}
          onClick={handleClick}
        >
          Vaccines
        </Menu.Item>
        <Menu.Item
          name="treatments"
          active={active === 'treatments'}
          onClick={handleClick}
        >
          Treatments
        </Menu.Item>
        <Menu.Item
          name="alternatives"
          active={active === 'alternatives'}
          onClick={handleClick}
        >
          Alternatives
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default TrialMenu;
