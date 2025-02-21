import { FormEvent, useRef } from "react"
import { FaWhatsapp, FaLinkedin, FaMailBulk } from "react-icons/fa";
import emailjs from '@emailjs/browser'

const Contacto = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    emailjs
      .sendForm('service_sfl0dpb', 'template_ypr8pr1', form.current, 'Uz1PxRjY_kwdr19gN')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="flex gap-4 flex-col">
      <h2 className="text-4xl text-center neon">Contactame</h2>
      <div className="flex justify-center gap-2">
        <FaWhatsapp className="text-green-500 size-12" />
        <FaLinkedin className="text-blue-600 size-12" />
      </div>
      <form className="relative flex flex-col" ref={form} onSubmit={sendEmail}>
        <FaMailBulk className="absolute size-8 right-0 -top-4" />
        <label>Nombre</label>
        <input className="bg-gray-200" type="text" name="user_name" />
        <label>Email</label>
        <input className="bg-gray-200" type="email" name="user_email" />
        <label>Message</label>
        <textarea className="bg-gray-200" name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contacto