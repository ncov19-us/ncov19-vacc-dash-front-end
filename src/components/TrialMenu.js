import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

function TrialMenu() {
  const [active, setActive] = useState('all');

  const handleClick = (evt, { name }) => {
    setActive(name);
  };

  return (
    <div className="ui center aligned container">
    <Menu compact inverted>
      <Menu.Item name="all" active={active === 'all'} onClick={handleClick} className="trials">
        COVID-19 Trials
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
