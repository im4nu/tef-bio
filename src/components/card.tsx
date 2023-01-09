import IconInsta from '../assets/icons/instagram.svg'
import IconLinkedin from '../assets/icons/linkedin.svg'
import IconWhats from '../assets/icons/whatsapp.svg'
import IconMail from '../assets/icons/mail.svg'

export default function Card(){
    return(
        <>
            <a href='https://www.instagram.com/feijaokarroz/'  target="_blank" className="flex flex-row w-screen h-28" rel="noreferrer">
                <div className="flex flex-row z-20 w-1/2 items-center justify-center gap-5 pl-5">
                    <img src={IconInsta} alt="Logomarca do Instagram" />

                    <div className="flex flex-col">
                        <p>@feijaokarroz</p>
                        <h2 className='instagramTitle'>Instagram</h2>
                    </div>
                </div>

                <aside className="flex w-4/6 bgInstagram">
                    <p className='-z-10'>.</p>
                </aside>

                <div className="flex InstagramRetangle"></div>
            </a>

            <a href='https://www.linkedin.com/in/estefany-david-aba34b1b4/' target="_blank" className="flex flex-row w-screen h-28" rel="noreferrer">
                <div className="flex flex-row z-20 w-1/2 items-center justify-center gap-5 pl-5">
                    <img src={IconLinkedin} alt="Logomarca do Instagram" />

                    <div className="flex flex-col">
                        <p>Estefany David</p>
                        <h2 className='text-white'>Linkedin</h2>
                    </div>
                </div>

                <aside className="flex w-5/6 bg-linkedin bg-cover bg-no-repeat">
                    <p className='-z-10'>.</p>
                </aside>

                <div className="flex LinkedinRetangle"></div>
            </a>

            <a href='https://api.whatsapp.com/send/?phone=5588997179651&text&type=phone_number&app_absent=0' target="_blank" className="flex flex-row w-screen h-28" rel="noreferrer">
                <div className="flex flex-row z-20 w-1/2 items-center justify-center gap-5 pl-8">
                    <img src={IconWhats} alt="Logomarca do Instagram" />

                    <div className="flex flex-col">
                        <p className='whitespace-nowrap'>+55 88 99717 9651</p>
                        <h2 className='text-white'>Whatsapp</h2>
                    </div>
                </div>

                <aside className="flex w-4/6 bg-whatsapp bg-cover bg-no-repeat">
                    <p className='-z-10'>.</p>
                </aside>

                <div className="flex WhatsappRetangle"></div>
            </a>

            <a href='mailto:estefany.david@aluno.fapce.edu.br' target="_blank" className="flex flex-row w-screen h-28" rel="noreferrer">
                <div className="flex flex-row z-20 w-1/2 items-center justify-center gap-5 pl-8">
                    <img src={IconMail} alt="Logomarca do Instagram" />

                    <div className="flex flex-col">
                        <p>doritos@gmail.com</p>
                        <h2 className='text-white'>Gmail</h2>
                    </div>
                </div>

                <aside className="flex w-4/6 bg-gmail bg-cover bg-no-repeat">
                    <p className='-z-10'>.</p>
                </aside>

                <div className="flex mailRetangle"></div>
            </a>
        </>
    )
}