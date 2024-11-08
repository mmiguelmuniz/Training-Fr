import './drop.css'

export function Dropdown() {
  return (
    <>
      <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id="supertTest" data-bs-toggle="dropdown" aria-expanded="false">
          Languagem
        </button>
        <ul className="dropdown-menu" aria-labelledby="supertTest">
          <li><a className="dropdown-item" href="#">English</a></li>
          <li><a className="dropdown-item" href="#">Brasil</a></li>
        </ul>
      </div>
    </>
  )
}

export default Dropdown;
