import { useState } from 'react';
import './checkbox.css';

function Checkbox() {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <div className="check-conc">
      <span
        className={toggleActive ? 'month' : 'month active'}
        onClick={() => setToggleActive(false)}
      >
        monthly
      </span>
      <span
        className={toggleActive ? 'year active' : 'year'}
        onClick={() => {
          setToggleActive(!toggleActive);
        }}
      >
        Yearly
      </span>
    </div>
  );
}

export default Checkbox;
