import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div className='lista-suspensa'>
            <label>Time{props.label}</label>
            <select>
                <option value="" disabled selected>{props.placeholder}</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>

        </div>
    )

}

export default ListaSuspensa