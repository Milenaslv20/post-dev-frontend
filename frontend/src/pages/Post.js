import React, { useState } from 'react'
import './styles/post_styles.css'
import  Axios from 'axios'

function Post() {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')

    const register = async () =>{
        const data = new FormData();
        data.append("nome", nome);
        data.append("idade", idade);

            try{
            console.log("Enviando req");
            const response = await Axios.post(`https://post-dev-backend-production.up.railway.app/register`, data, {
                headers: { 
                "Content-Type": 'application/json', 
                }
            })

            //ñ funciona 
            if(response.status === 204){
                console.log("Sucesso ao enviar req")
                console.log(data)
            } else{
                console.log("Falha ao enviar req")
            }
        } catch(err){
            console.error("Erro:", err);
        }
    }

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
    </div>
  )
}

export default Post