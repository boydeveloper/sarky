import './checkbox.css';

function Checkbox() {
  return (
    <div className="check-conc">
      <input type="checkbox" name="checkbox" id="monthly" />
      <label htmlFor="monthly" id="label">
        <div className="box">monthly</div>
        <span>Yearly</span>
      </label>
    </div>
  );
}

export default Checkbox;
