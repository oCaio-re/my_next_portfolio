'use client';

import { useState, FormEvent } from "react";
import { IoIosGlobe } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { FiSmartphone, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

export default function ContactForm({ dictionary }: { dictionary: any }) {
    const [services, setServices] = useState<string[]>([]);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleServiceChange = (service: string) => {
        setServices(prev =>
            prev.includes(service)
                ? prev.filter(item => item !== service)
                : [...prev, service]
        );
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    services,
                    message,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setStatus('error');
                setErrorMessage(data.error || 'Ocorreu um erro ao enviar a mensagem.');
            } else {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
                setServices([]);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage('Falha de conexão com o servidor. Por favor, tente novamente.');
        }
    };

    return (
        <div className="relative border border-white/15 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 text-sm rounded-3xl z-40 max-w-2xl mx-auto shadow-2xl">
            {status === 'success' ? (
                <div className="py-8 px-4 text-center flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                        <FiCheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                        Mensagem Enviada com Sucesso!
                    </h3>
                    <p className="text-gray-300 text-sm max-w-md leading-relaxed">
                        Obrigado pelo contato! Recebi sua mensagem e entrarei em contato o mais breve possível.
                    </p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-4 px-6 py-2.5 rounded-2xl font-bold text-xs text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer"
                    >
                        Enviar Outra Mensagem
                    </button>
                </div>
            ) : (
                <form className="w-full space-y-5" onSubmit={handleSubmit}>
                    {status === 'error' && (
                        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 flex items-start gap-3 text-xs leading-relaxed">
                            <FiAlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
                            <div>
                                <strong className="font-bold block text-red-200 mb-0.5">Erro ao enviar:</strong>
                                <span>{errorMessage}</span>
                            </div>
                        </div>
                    )}

                    <div>
                        <label htmlFor="name" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                            Seu Nome
                        </label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={dictionary.page.contact.form.name_placeholder}
                            className="w-full bg-black/60 text-white placeholder-gray-500 border border-white/15 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#609BE3] focus:ring-1 focus:ring-[#609BE3] transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                            Seu E-mail
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={dictionary.page.contact.form.email_placeholder}
                            className="w-full bg-black/60 text-white placeholder-gray-500 border border-white/15 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#609BE3] focus:ring-1 focus:ring-[#609BE3] transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-gray-300 mb-2 font-semibold">
                            {dictionary.page.contact.form.services_needed || 'Desired Services'}
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {[
                                {"name": dictionary.page.contact.details.websites, "icon": <IoIosGlobe size={18}/>},
                                {"name": dictionary.page.contact.details.branding, "icon": <FaRegLightbulb size={18}/>},
                                {"name": dictionary.page.contact.details.ecommerce, "icon": <FiSmartphone size={18}/>},
                                {"name": dictionary.page.contact.details.seo, "icon": <FaGoogle size={18}/>},
                                {"name": dictionary.page.contact.details.hire_me, "icon": <FaHandshakeSimple size={18}/>},
                            ].map(item => (
                                <button
                                    key={item.name}
                                    type="button"
                                    onClick={() => handleServiceChange(item.name)}
                                    className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300 font-semibold text-xs gap-1.5 cursor-pointer
                                     ${
                                        services.includes(item.name)
                                            ? 'bg-gradient-to-r from-[#609BE3] to-[#646DD2] text-white border-transparent shadow-lg shadow-[#646DD2]/30 scale-[1.02]'
                                            : 'bg-black/40 text-gray-300 border-white/15 hover:bg-white/10 hover:border-white/30'
                                    }`}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="project" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                            Detalhes do Projeto / Mensagem
                        </label>
                        <textarea
                            id="project"
                            name="message"
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={dictionary.page.contact.form.project_placeholder}
                            className="w-full bg-black/60 text-white placeholder-gray-500 border border-white/15 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#609BE3] focus:ring-1 focus:ring-[#609BE3] transition-all"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#609BE3] via-[#646DD2] to-[#C9AA71] shadow-xl shadow-[#646DD2]/30 hover:shadow-[#646DD2]/50 transition-all duration-300 transform hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === 'submitting' ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Enviando...</span>
                            </>
                        ) : (
                            dictionary.page.contact.form.submit_button
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}
