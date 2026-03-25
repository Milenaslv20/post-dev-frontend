import React, { useState } from 'react'
import './styles/post_styles.css'
import Modal from '../components/Modal.js'
import  Axios from 'axios'

function Post() {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [message, setMessage] = useState('')
    const [statusColor, setStatusColor] = useState('')

    const register = async () =>{
        const data = new FormData();
        data.append("nome", nome);
        data.append("idade", idade);

            try{
            console.log("Enviando req");
            const response = await Axios.post(`https://post-dev-backend-production.up.railway.app/register`, 
                {
                    nome: nome,
                    idade: idade
                }
            );

            console.log("Status: ", response.status);
            console.log("Response: ", response.data);
            
            if(response.status === 200){
                statusColor("sucess");
                setMessage("Cadastro enviado com sucesso");
                setOpenModal(true);
                console.log("Sucesso ao enviar req");
                console.log(data);
            }; 
        } catch(err){
            if (err.response){
                statusColor("error");
                setMessage("Erro ao enviar cadastro, tente novamente");
                setOpenModal(true);
                console.log("Erro na resposta: ", err.response.data);
            }
        };
    };

  return (
    <div className='container'>
        <div className='container_inputs'>
            <div className='input'>
                <label>Nome</label>
                <input type='text' name='nome' id='nome' value={nome} onChange={(e) => setNome(e.target.value)}></input>
            </div>

            <div className='input'>
                <label>Idade</label>
                <input type='text' name='idade' id='idade' value={idade} onChange={(e) => setIdade(e.target.value)}></input>
            </div>

            <button type='submit' className='button' id='button' onClick={register}>Send</button>
        </div>

        <Modal openModal={openModal} setOpenModal={setOpenModal} message={message} statuscolor={statusColor} reload={true}/>
        <button onClick={() => setOpenModal(true)}>Open Modal</button>
    </div>
  )
}

export default Post