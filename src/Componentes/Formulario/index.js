import CampoTexto from '../CampoTexto'

import './Formulario.css';

import ListaSuspensa from '../ListaSuspensa'

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    ' Inovação e Gestão'
    ]
    


const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
               

                <ListaSuspensa itens={times} />




            </form>

        </section>
    )

}

export default Formulario;

