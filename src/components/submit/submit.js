import React, {useState} from "react";
import './index_sub.scss'
import {BsInstagram, BsTelephoneInbound, BsWhatsapp} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {PiTelegramLogoDuotone} from "react-icons/pi";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {IoCopyOutline} from "react-icons/io5";
import emailjs from "@emailjs/browser";
import {useLanguage} from "../Lang/LanguageContext";

const Message = () => {
    const [iconsValue, setIconsValue] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [isError, setIsError] = useState(false);
    const triggerEmail = async (data) => {
        await emailjs.send("service_eent9gh", 'template_67ii9if', data, '1xmzYNkvqvEhVAtWC').then((success) => {
            alert('Email Sent Successfully');
        }).catch((err) => {
            alert('Something Went Wrong')
            console.log(err)
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            FirstName: e.target[0].value,
            LastName: e.target[1].value,
            phone: e.target[2].value,
            email: e.target[3].value,
            GroupOrCompany: e.target[4].value,
            howCanWeHelp: e.target[5].value,
        }
        console.log(data)
        triggerEmail(data)
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        if (value.length < 5 || value.length > 10) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };
    const {language} = useLanguage()
    const languageCard = {
        en : {
          send :'Send a message',
            name:'First Name',
            one:'Last Name',
            car:'phone',
            email :'email',
            com:'Group or Company',
            hel:'how can we help?',
            buttons:'Submit',
            info :'contact Info'
        },
        ru :{
            send:'Отправить сообщение',
            name :'Имя\n',
            one :'Фамилия\n',
            car:'телефон\n',
            email:'электронная почта\n',
            com:'Группа или Компания\n',
            hel:'как мы можем помочь?\n',
            buttons:'Представлять',
            info: 'Контактная информация\n'
        }

    }

    return (
        <div id="message">
            <div className="container">
                <div className="message">
                    <div className='message--block'>
                        <h4>{languageCard[language].send}</h4>
                        <form onSubmit={onFormSubmit} action='#'>
                            <div className='message--block__car'>
                                <div className='message--block__car--input'>
                                    <input value={inputValue} onChange={handleInputChange}
                                           className={isError ? 'error' : ''} type="text" placeholder={languageCard[language].name}/>
                                </div>
                                <div className='message--block__car--input'>
                                    <input type="text" placeholder={languageCard[language].one}/>
                                </div>
                            </div>

                            <div className='message--block__car'>
                                <div className='message--block__car--input'>
                                    <input type="number" placeholder={languageCard[language].car}/>
                                </div>
                                <div className='message--block__car--input'>
                                    <input type="email" placeholder={languageCard[language].email}/>
                                </div>

                            </div>
                            <div className='message--block__tools'>
                                <input type="text" placeholder={languageCard[language].com}/>
                            </div>
                            <div className='message--block__tools'>
                                <input type="text" placeholder={languageCard[language].hel}/>
                            </div>
                            <button>{languageCard[language].buttons}</button>
                        </form>
                    </div>
                    <div className='message--help'>
                        <h3>{languageCard[language].info}</h3>
                        <div className='message--help__icons'>
                            <BsTelephoneInbound className='text-3xl' style={{color: 'white'}}/>
                            <a onClick={() => setIconsValue(true)} href="tel:+996 500 34 84 39">+996 500 34 84 39</a>
                            <div className='message--help__icons--copy'>
                                <CopyToClipboard text='+996 500 34 84 39'>
                                    <IoCopyOutline className='text-2xl' style={{marginLeft:'10px' , color:'white' , cursor:'pointer'}}/>
                                </CopyToClipboard>
                            </div>
                        </div>
                        <div className='message--help__icons'>
                            <div className='message--ai'>
                                <AiOutlineMail className='text-3xl' style={{color: 'white'}}/>
                            </div>
                            <h4 onClick={() => setIconsValue(true)}>motionweb312@gmail.com</h4>
                            <div className='message--help__icons--copy'>
                                <CopyToClipboard text='motionweb312@gmail.com'>
                                    <IoCopyOutline className='text-2xl' style={{marginLeft:'10px' , color:'white' , cursor:'pointer'}}/>
                                </CopyToClipboard>
                            </div>
                        </div>
                        <div className='massage--help__view' style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'start',
                        }}>
                            <PiTelegramLogoDuotone className='text-3xl' style={{color: 'white'}}/>
                            <BsWhatsapp className='text-3xl' style={{color: 'white', margin: ' 42px'}}/>
                            <BsInstagram className='text-3xl' style={{color: 'white'}}/>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5848.508298798211!2d74.5708881!3d42.8674796!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1692165023738!5m2!1sru!2skg"
                            width="370" height="230" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className='message--help__cop'>
                            <div className='message--submit'>
                                <div style={{cursor: 'pointer'}} className='message--help__cop--com'>
                                   <CopyToClipboard text='+996 500 34 84 39 , motionweb312@gmail.com'>
                                       <svg className='message--carta' xmlns="http://www.w3.org/2000/svg" width="56"
                                            height="56" viewBox="0 0 56 56"
                                            fill="none">
                                           <rect width="56" height="56" rx="28" fill="#E5EA00"/>
                                           <path
                                               d="M28.5766 31.0701C28.7446 32.3354 28.3424 33.662 27.3701 34.6343L23.5814 38.423C21.9232 40.0811 19.2348 40.0811 17.5766 38.423C15.9185 36.7648 15.9185 34.0764 17.5766 32.4182L21.3653 28.6295C22.3376 27.6572 23.6642 27.255 24.9295 27.423M27.4227 24.9297C27.2548 23.6644 27.657 22.3379 28.6293 21.3656L32.418 17.5769C34.0761 15.9187 36.7645 15.9187 38.4227 17.5769C40.0809 19.235 40.0809 21.9235 38.4227 23.5816L34.634 27.3703C33.6617 28.3426 32.3352 28.7448 31.0698 28.5768M24.9295 31.0701L31.0698 24.9297"
                                               stroke="#212121" strokeWidth="1.3" strokeLinecap="square"/>
                                       </svg>
                                   </CopyToClipboard>
                                    <h4>Copy the link</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Message;