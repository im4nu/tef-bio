import IconInsta from '../assets/icons/instagram.svg'
import IconLinkedin from '../assets/icons/linkedin.svg'
import IconSpotify from '../assets/icons/spotify.svg'
import IconMail from '../assets/icons/mail.svg'
import { motion } from "framer-motion"

export default function Card(){
    return(
        <>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
                <a href='https://www.instagram.com/feijaokarroz/' target="_blank" className="flex flex-row cardHeight" rel="noreferrer">
                    <div className="flex flex-row z-20 w-1/2 items-center justify-center gap-5 pl-10">
                        <img style={{width: 53, height: 53}} src={IconInsta} alt="Logomarca do Instagram" />

                        <div className="flex flex-col">
                            <p className='font-medium'>@feijaokarroz</p>
                            <h2 className='font-semibold instagramTitle'>Instagram</h2>
                        </div>
                    </div>

                    <aside className="flex w-4/6 bgInstagram bg-instagram bg-cover bg-center bg-no-repeat">
                        <p className='-z-10'>.</p>
                    </aside>

                    <div className="InstagramRetangle"></div>
                </a>
            </motion.div>

            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
                <a href='https://www.linkedin.com/in/estefany-david-aba34b1b4/' target="_blank" className="flex flex-row cardHeight" rel="noreferrer">
                    <div className="flex flex-row z-20 w-1/2 items-center justify-center gap-5 pl-10">
                        <img style={{width: 53, height: 53}} src={IconLinkedin} alt="Logomarca do Instagram" />

                        <div className="flex flex-col">
                            <p className='font-medium'>Estefany David</p>
                            <h2 className='font-semibold text-white'>Linkedin</h2>
                        </div>
                    </div>

                    <aside className="flex w-5/6 bg-linkedin bg-cover bg-center bg-no-repeat">
                        <p className='-z-10'>.</p>
                    </aside>

                    <div className="LinkedinRetangle"></div>
                </a>
            </motion.div>

            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            >
                <a href='https://open.spotify.com/user/21puovbavailamy5fy3hl22ei?si=c0e75712ce164a28' target="_blank" className="flex flex-row cardHeight" rel="noreferrer">
                    <div className="flex flex-row z-20 w-1/2 items-center justify-center gap-5 pl-10">
                        <img style={{width: 53, height: 53}} src={IconSpotify} alt="Logomarca do Instagram" />

                        <div className="flex flex-col">
                            <p className='whitespace-nowrap font-medium'>Feijaokarroz</p>
                            <h2 className='font-semibold SpotifyTitle'>Spotify</h2>
                        </div>
                    </div>

                    <aside className="flex w-4/6 bg-spotify bg-cover bg-center bg-no-repeat">
                        <p className='-z-10'>.</p>
                    </aside>

                    <div className="SpotifyRetangle"></div>
                </a>
            </motion.div>

            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            >
                <a href='mailto:estefany.david@aluno.fapce.edu.br' target="_blank" className="flex flex-row cardHeight" rel="noreferrer">
                    <div className="flex flex-row z-20 w-1/2 items-center justify-center gap-5 pl-10">
                        <img style={{width: 53, height: 53}} src={IconMail} alt="Logomarca do Instagram" />

                        <div className="flex flex-col">
                            <p className='MailTitleAndSub font-bold'>doritos@gmail.com</p>
                            <h2 className='font-semibold MailTitleAndSub'>Gmail</h2>
                        </div>
                    </div>

                    <aside className="flex w-4/6 bg-gmail bg-cover bg-center bg-no-repeat">
                        <p className='-z-10'>.</p>
                    </aside>

                    <div className="mailRetangle"></div>
                </a>
            </motion.div>
        </>
    )
}