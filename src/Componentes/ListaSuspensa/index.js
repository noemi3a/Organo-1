import './ListaSuspensa.css'
const ListaSuspensa = ({ itens }) => {
    return (
      <div className='lista-suspensa'>
        <label>Escolha seu time:</label>
        <select>
          {itens.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    );
  };
  
  export default ListaSuspensa;