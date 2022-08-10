import { useEffect, useState } from "react"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { config } from "../../../config";

import './contact.css';

export function Contact(){

    const [fields, setFields] = useState({message: {value: '', valid: false}, email: {value:'', valid: false}});
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);


    function handleChange(e){
        setFields({...fields, message: {valid: e.target.value === "" ? false : true, value: e.target.value}});
    }

    function handleEmailChange(e){
        const validation = isValidEmail(e.target.value);
        setFields({...fields, email: {valid: validation, value: e.target.value}});
    }

    function isValidEmail(string){
        const regexExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/;
        return regexExp.test(string);
    }


    async function submit(e){
        e.preventDefault();
        setSuccess("");
        setLoading(true);
        try {
            let response = await fetch(config.url + '/api/gmail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message: fields.message.value, email: fields.email.value})
            })
            response = await response.json();
            setSuccess(response);
            setLoading(false);
        } catch (error) {
            setSuccess("error");
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(success === "success"){
            setFields({message: {value: '', valid: false}, email: {value:'', valid: false}});
        }
    }, [success])

    

    return(
        <div className="contact">
            <h2>Contact</h2>
            <div>Pour me contacter, envoyez un email à <strong>corentin.barbaud@gmail.com</strong> ou utilisez le formulaire ci-dessous</div>

            {loading &&(
                <div className="loading-icon">
                    <FontAwesomeIcon icon={faSpinner} spin/>
                </div>
            )}
            

            {success==="success" && (
                <div className="msg-status success">
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <span>Votre message a bien été envoyé, merci 😁</span>
                </div>
            )}

            {success==="error" && (
                <div className="msg-status error">
                    <FontAwesomeIcon icon={faCircleXmark} />
                    <span>Un problème a été rencontré, votre message n'a pas été envoyé 😕</span>
                    </div>
            )}



            <form className="msg-form"> 

                <label htmlFor="email-input">
                    <span>Adresse e-mail&nbsp;</span>
                    {fields.email.value.includes("@") && fields.email.valid && (
                        <span className="email-validation success"><FontAwesomeIcon icon={faCircleCheck} /></span>
                    )}
                    {fields.email.value.includes("@") && !fields.email.valid && (
                        <span className="email-validation error"><FontAwesomeIcon icon={faCircleXmark} /></span>
                    )}
                </label>
                
                <input 
                    id="email-input" 
                    className="email-input" 
                    placeholder="Votre adresse email ici..." 
                    type="email" 
                    value={fields.email.value} 
                    onChange={handleEmailChange}
                />


                <label htmlFor="msg-input">Votre message {fields.message.valid && (
                    <span className="msg-validation success"><FontAwesomeIcon icon={faCircleCheck} /></span>
                )}</label>
                
                <textarea
                    id="msg-input"
                    placeholder="Votre message ici..."
                    className="msg-input"
                    value={fields.message.value}
                    onChange={handleChange}  
                />


                <button 
                    className="msg-submit" 
                    onClick={submit} 
                    disabled={(loading || !fields.message.valid || !fields.email.valid ) ? true  : false}
                >
                    Envoyer
                </button>

                
            </form>
        </div>
    )
}