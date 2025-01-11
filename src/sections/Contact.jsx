import React from 'react';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MdSend, MdHourglassTop } from 'react-icons/md';

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Contact = ({texts}) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_3tb5xog',
        'template_1bzvmpl',
        {
          from_name: form.name,
          to_name: 'Jakub',
          from_email: form.email,
          to_email: 'kubadewerendaa@gmail.com',
          message: form.message,
        },
        '2U4UA1-PTMmaElKqf'
      );
      setLoading(false);
      alert('Wiadomość została wysłana');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Wiadomość nie została wysłana');
    }
  };

  return (
    <motion.section
      className="c-space sm:py-10 py-6"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariant}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <motion.img
          src="/assets/terminal.png"
          alt="terminal background"
          className="terminal-bg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        />
        <motion.div
          className="contact-container z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariant}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        >
          <h3 className="contact-headtext">{texts.c_header}</h3>
          <p className="contact-subtext">{texts.c_header_sub}</p>
          <motion.div
            className="flex justify-center items-center relative h-full mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
          >
            <div className="led-line_poz"></div>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="sm:mt-6 flex flex-col align-center space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariant}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
          >
            <label className="space-y-3">
              <span className="field-label">{texts.name_surname}</span>
              <div className="relative w-full">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder={`${texts.name_surname_ph}`}
                />
                <div className="field-glow"></div>
              </div>
            </label>
            <label className="space-y-3">
              <span className="field-label">{texts.email}</span>
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder={`${texts.email_ph}`}
                />
                <div className="field-glow"></div>
              </div>
            </label>
            <label className="space-y-3 w-full">
              <span className="field-label">{texts.message}</span>
              <div className="relative w-full">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input resize-none"
                  placeholder={`${texts.message_ph}`}
                />
                <div className="field-glow"></div>
              </div>
            </label>
            <button
              className="button-anim flex justify-center items-center gap-2 py-3 text-xl mt-12 group"
              type="submit"
              disabled={loading}
            >
              <span className="button-a-glow"></span>
              {loading ? (
                <>
                  <span className="send-btn_text">{texts.c_button_sending}</span>
                  <MdHourglassTop className="icon-btn" />
                </>
              ) : (
                <>
                  <span className="send-btn_text">{texts.c_button}</span>
                  <MdSend className="icon-btn" />
                </>
              )}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
