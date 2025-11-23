import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="font-sans font-light antialiased overflow-x-hidden selection:bg-indigo-500 selection:text-white bg-[#f8fafc] text-[#0f172a] min-h-screen relative">
            <div className="blob w-96 h-96 bg-indigo-300 top-0 left-0 rounded-full mix-blend-multiply animate-blob"></div>
            <div className="blob w-96 h-96 bg-pink-200 top-0 right-0 rounded-full mix-blend-multiply animate-blob animation-delay-2000"></div>
            <div className="blob w-96 h-96 bg-blue-200 -bottom-32 left-20 rounded-full mix-blend-multiply animate-blob animation-delay-4000"></div>

            <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/20 bg-white/60 backdrop-blur-md">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/assets/img/logo.jpg" className="h-10 rounded-lg" alt="Beferly Logo" />
                        <span className="self-center text-2xl font-bold tracking-widest text-black uppercase">
                            Beferly
                        </span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="text-slate-900 border border-slate-200 hover:border-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-light rounded-full text-sm px-6 py-2 text-center bg-white/50 backdrop-blur transition-all duration-300"
                        >
                            Connexion
                        </button>
                        <button
                            type="button"
                            className="ml-4 text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full text-sm px-6 py-2 text-center transition-transform hover:scale-105 shadow-lg shadow-indigo-500/20"
                        >
                            Essayer Basic
                        </button>
                    </div>
                </div>
            </nav>

            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left space-y-8">
                            <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-100 bg-indigo-50/50 text-indigo-600 text-xs font-medium tracking-wide uppercase backdrop-blur-sm">
                                <span className="w-2 h-2 mr-2 rounded-full bg-indigo-500 animate-pulse"></span>
                                Nouveau : Copilote IA v2.0
                            </div>

                            <h1 className="text-5xl md:text-7xl font-thin tracking-tight text-slate-900 leading-[1.1]">
                                La trésorerie en <br />
                                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 neon-text">
                                    pilote automatique.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-500 font-light max-w-lg leading-relaxed">
                                Anticipez les découverts grâce à l'IA. Financez vos factures en 1 clic. Le Business Plan généré
                                automatiquement pour les TPE ambitieuses.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#"
                                    className="inline-flex justify-center items-center py-4 px-8 text-base font-medium text-white rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50"
                                >
                                    Lancer le copilote
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                    </svg>
                                </a>
                                <Link
                                    to="/graph"
                                    className="inline-flex justify-center items-center py-4 px-8 text-base font-light text-slate-900 rounded-full border border-slate-200 hover:bg-white hover:border-indigo-300 transition-all bg-white/40 backdrop-blur-sm"
                                >
                                    Voir l'architecture
                                </Link>
                            </div>

                            <div className="pt-6 flex items-center gap-4 text-sm text-slate-400 font-light">
                                <span>Propulsé par</span>
                                <div className="flex gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
                                    <span className="font-semibold text-slate-600">POWENS</span>
                                    <span className="font-semibold text-slate-600">Google Cloud</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative perspective-1000">
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>

                            <div className="gradient-border p-1 shadow-2xl shadow-indigo-200/50 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">
                                <div className="bg-white/80 backdrop-blur-xl rounded-[1.4rem] p-6 h-full w-full border border-white/40">
                                    <div className="flex justify-between items-center mb-8">
                                        <div>
                                            <h3 className="text-sm text-slate-400 font-light uppercase tracking-wider">Bienvenue</h3>
                                            <p className="text-xl font-normal text-slate-800">Plomberie Vanessa SAS</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 p-[1px]">
                                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xs font-bold text-indigo-600">
                                                    V
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8 relative">
                                        <div className="flex justify-between items-end mb-2">
                                            <div>
                                                <p className="text-xs text-slate-400 mb-1">Solde Prévisionnel (J+30)</p>
                                                <p className="text-4xl font-thin text-slate-900">
                                                    12 450 <span className="text-lg text-slate-400">€</span>
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-50 text-red-500 text-xs border border-red-100">
                                                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                                                        />
                                                    </svg>
                                                    Risque J+12
                                                </span>
                                            </div>
                                        </div>

                                        <div className="h-40 w-full relative flex items-end justify-between gap-1 pt-4 border-b border-slate-100 overflow-hidden">
                                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                                <div className="h-px bg-slate-100 w-full"></div>
                                                <div className="h-px bg-slate-100 w-full"></div>
                                                <div className="h-px bg-slate-100 w-full"></div>
                                            </div>

                                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                                <defs>
                                                    <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#3b82f6" />
                                                        <stop offset="50%" stopColor="#6366f1" />
                                                        <stop offset="100%" stopColor="#ec4899" />
                                                    </linearGradient>
                                                    <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
                                                        <stop offset="0%" stopColor="rgba(99, 102, 241, 0.2)" />
                                                        <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                                                    </linearGradient>
                                                </defs>
                                                <path
                                                    d="M0,80 C50,80 100,40 150,60 C200,80 250,120 300,110 C350,100 400,20 450,10 L450,160 L0,160 Z"
                                                    fill="url(#gradientFill)"
                                                />
                                                <path
                                                    d="M0,80 C50,80 100,40 150,60 C200,80 250,120 300,110 C350,100 400,20 450,10"
                                                    fill="none"
                                                    stroke="url(#gradientStroke)"
                                                    strokeWidth="3"
                                                    className="chart-line"
                                                    strokeLinecap="round"
                                                />
                                                <circle
                                                    cx="300"
                                                    cy="110"
                                                    r="4"
                                                    fill="#ef4444"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    className="animate-ping"
                                                />
                                                <circle cx="300" cy="110" r="4" fill="#ef4444" stroke="white" strokeWidth="2" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="relative md:absolute md:-bottom-6 md:-left-6 w-full md:w-72 glass-card p-4 border border-white/50 shadow-xl shadow-indigo-200/40 animate-bounce-slow mt-4 md:mt-0">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-indigo-600 mb-1">COPILOTE IA</p>
                                                <p className="text-sm text-slate-700 leading-snug">
                                                    Attention, déficit de <strong>3 000€</strong> prévu le 24 nov. Je lance un financement ?
                                                </p>
                                                <div className="mt-3 flex gap-2">
                                                    <button className="px-3 py-1 rounded-md bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition">
                                                        Oui, financer
                                                    </button>
                                                    <button className="px-3 py-1 rounded-md bg-slate-100 text-slate-500 text-xs hover:bg-slate-200 transition">
                                                        Ignorer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mt-6">
                                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                                            <p className="text-xs text-slate-400">Factures en attente</p>
                                            <p className="text-lg font-medium text-slate-800">15 200€</p>
                                        </div>
                                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                                            <p className="text-xs text-slate-400">Capacité d'emprunt</p>
                                            <p className="text-lg font-medium text-green-600">20 000€</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white/50 relative">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-indigo-100 transition-all hover:shadow-xl hover:shadow-indigo-100/50 duration-500">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-blue-600">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-slate-900 mb-3">IA Prédictive</h3>
                            <p className="text-slate-500 font-light leading-relaxed">
                                Ne subissez plus vos découverts. Notre algorithme croise vos factures et vos comptes pour voir l'avenir à
                                J+30.
                            </p>
                        </div>

                        <div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-pink-100 transition-all hover:shadow-xl hover:shadow-pink-100/50 duration-500">
                            <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-pink-600">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-slate-900 mb-3">Financement Éclair</h3>
                            <p className="text-slate-500 font-light leading-relaxed">
                                Un besoin de cash ? Votre dossier est déjà prêt. Débloquez des fonds en 24h grâce à nos partenaires
                                bancaires.
                            </p>
                        </div>

                        <div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-purple-100 transition-all hover:shadow-xl hover:shadow-purple-100/50 duration-500">
                            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-purple-600">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-slate-900 mb-3">Optimisation Yield</h3>
                            <p className="text-slate-500 font-light leading-relaxed">
                                Ne laissez pas dormir votre trésorerie. Beferly place vos excédents automatiquement quand c'est
                                possible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
