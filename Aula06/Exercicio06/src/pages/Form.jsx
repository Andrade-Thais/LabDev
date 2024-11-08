import React from 'react';
import "./Form.css";
import { useState } from 'react';


const Form = () => {
    const [nome, setNome] = useState ("")
    const [email, setEmail] = useState("")
    const [mensagem, setMessage] = useState("")

    const handleSubmit = (e)=>{

        e.preventDefault()
        console.log("Enviando formulário...")
        console.log(nome, email, mensagem)

        setNome("")
        setEmail("")
        setMessage("")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <h2>Fromulário de Contato</h2>
                    <span>Nome:</span>
                    <input type="text" name="nome" id="nome" onChange={(e)=>setNome(e.target.value)} value={nome} />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                </label>
                <label>
                    <span>Mensagem:</span>
                    <textarea name="mensagem" id="mensagem" cols="30" rows="10" onChange={(e)=>setMessage(e.target.value)} value={mensagem}></textarea>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Form;
