import React, { useState } from 'react';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Initialize minimized if screen is small (mobile)
    const [isCopilotMinimized, setIsCopilotMinimized] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="font-sans font-light antialiased h-screen overflow-hidden flex bg-slate-50 relative">
            {/* Background Blobs */}
            <div className="blob w-96 h-96 bg-indigo-300 top-0 left-0 rounded-full mix-blend-multiply animate-blob absolute filter blur-[80px] z-0 opacity-40"></div>

            {/* Main Content */}
            <main className="flex-1 relative z-10 overflow-y-auto p-8">
                {/* Header */}
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-light text-slate-900">Bonjour, <span className="font-medium">Vanessa</span></h1>
                        <p className="text-slate-500 font-light mt-1">Voici la situation de votre trésorerie aujourd'hui.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full bg-white shadow-sm text-slate-400 hover:text-indigo-600 transition">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <button
                            className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition shadow-lg shadow-indigo-500/20">
                            + Nouvelle Facture
                        </button>
                    </div>
                </header>

                {/* AI Copilot Section */}
                <section className="mb-10">
                    <div
                        className="glass-panel rounded-2xl p-6 border border-indigo-100 relative overflow-hidden group hover:border-indigo-300 transition-all duration-500 bg-white/70 backdrop-blur-xl">
                        <div
                            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100 to-pink-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20">
                        </div>

                        <div className="relative z-10 flex items-start gap-6">
                            <div
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-pink-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/30 animate-pulse">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-lg font-medium text-slate-900 mb-1">Analyse du Copilote IA</h2>
                                        <p className="text-slate-500 font-light">J'ai détecté un risque de découvert dans 12 jours
                                            basé sur vos échéances.</p>
                                    </div>
                                    <span
                                        className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium border border-indigo-100">Priorité
                                        Haute</span>
                                </div>

                                <div
                                    className="mt-6 p-4 rounded-xl bg-white/50 border border-white/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                    <div
                                        className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full md:w-auto">
                                        <div className="text-2xl font-bold text-slate-800 whitespace-nowrap">-3 000 €</div>
                                        <div className="text-sm text-slate-500">Déficit prévu le 24 Nov</div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                        <button
                                            onClick={openModal}
                                            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition shadow-md shadow-indigo-500/20 whitespace-nowrap">Financer
                                            cette échéance</button>
                                        <button
                                            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white text-slate-600 text-sm font-medium border border-slate-200 hover:bg-slate-50 transition whitespace-nowrap">Voir
                                            les détails</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {/* Card 1 */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl">
                        <p className="text-sm text-slate-400 font-light mb-2">Solde Actuel</p>
                        <h3 className="text-3xl font-normal text-slate-900 mb-4">24 500 €</h3>
                        <div className="h-16 w-full relative overflow-hidden">
                            <svg className="w-full h-full" preserveAspectRatio="none">
                                <path d="M0,40 Q40,30 80,35 T160,20 T240,30 T320,10" fill="none" stroke="#10b981"
                                    strokeWidth="2" className="chart-line" />
                            </svg>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl">
                        <p className="text-sm text-slate-400 font-light mb-2">Factures en attente</p>
                        <h3 className="text-3xl font-normal text-slate-900 mb-4">15 200 €</h3>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                            3 clients en retard
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl">
                        <p className="text-sm text-slate-400 font-light mb-2">Capacité d'emprunt</p>
                        <h3 className="text-3xl font-normal text-slate-900 mb-4">20 000 €</h3>
                        <button
                            className="w-full py-2 rounded-lg border border-indigo-100 text-indigo-600 text-sm hover:bg-indigo-50 transition">Simuler
                            un prêt</button>
                    </div>
                </div>

                {/* Main Chart Section */}
                <section className="glass-panel rounded-2xl p-8 border border-white/60 bg-white/70 backdrop-blur-xl">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-light text-slate-900">Évolution de la Trésorerie</h3>
                        <select
                            className="bg-transparent border-none text-slate-500 text-sm font-medium focus:ring-0 cursor-pointer outline-none">
                            <option>30 derniers jours</option>
                            <option>3 prochains mois</option>
                        </select>
                    </div>

                    <div className="h-64 w-full relative overflow-hidden">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            <div className="h-px bg-slate-100 w-full"></div>
                            <div className="h-px bg-slate-100 w-full"></div>
                            <div className="h-px bg-slate-100 w-full"></div>
                            <div className="h-px bg-slate-100 w-full"></div>
                        </div>

                        {/* Chart */}
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="mainChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0.2)" />
                                    <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                                </linearGradient>
                                <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3b82f6" />
                                    <stop offset="50%" stopColor="#6366f1" />
                                    <stop offset="100%" stopColor="#ec4899" />
                                </linearGradient>
                            </defs>

                            {/* Axis Labels (Static for demo) */}
                            <text x="10" y="20" fill="#94a3b8" fontSize="12">30k €</text>
                            <text x="10" y="80" fill="#94a3b8" fontSize="12">20k €</text>
                            <text x="10" y="140" fill="#94a3b8" fontSize="12">10k €</text>
                            <text x="10" y="200" fill="#94a3b8" fontSize="12">0 €</text>

                            <text x="10" y="240" fill="#94a3b8" fontSize="12">1 Nov</text>
                            <text x="25%" y="240" fill="#94a3b8" fontSize="12">8 Nov</text>
                            <text x="50%" y="240" fill="#94a3b8" fontSize="12">15 Nov</text>
                            <text x="75%" y="240" fill="#94a3b8" fontSize="12">22 Nov</text>
                            <text x="95%" y="240" fill="#94a3b8" fontSize="12" textAnchor="end">30 Nov</text>

                            <path
                                d="M0,150 C100,150 150,100 250,120 C350,140 450,50 550,80 C650,110 750,30 850,40 C950,50 1000,20 1200,10 L1200,250 L0,250 Z"
                                fill="url(#mainChartGradient)" />
                            <path
                                d="M0,150 C100,150 150,100 250,120 C350,140 450,50 550,80 C650,110 750,30 850,40 C950,50 1000,20 1200,10"
                                fill="none" stroke="url(#gradientStroke)" strokeWidth="3" className="chart-line"
                                strokeLinecap="round" />
                        </svg>
                    </div>
                </section>
            </main>

            {/* Copilot Overlay */}
            <div className="fixed bottom-4 left-4 right-4 md:left-auto md:bottom-8 md:right-8 md:w-96 z-50">
                <div className="relative bg-white/90 backdrop-blur-xl border border-indigo-200 rounded-2xl shadow-2xl shadow-indigo-500/20 overflow-hidden transform transition-all md:hover:scale-105 duration-300">

                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-white font-medium text-sm tracking-wide">Moneywork Copilot</span>
                        </div>
                        <svg
                            onClick={() => setIsCopilotMinimized(!isCopilotMinimized)}
                            className={`w-5 h-5 text-white/80 cursor-pointer hover:text-white transform transition-transform duration-300 ${isCopilotMinimized ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <div className={`transition-all duration-300 ease-in-out ${isCopilotMinimized ? 'h-0 opacity-0 overflow-hidden' : 'h-80 opacity-100'}`}>
                        <div className="p-4 space-y-4 h-full overflow-y-auto bg-slate-50/50">

                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 border border-indigo-200">
                                    <span className="text-xs">🤖</span>
                                </div>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-sm text-slate-600">
                                    Bonjour Vanessa. J'ai analysé les factures Pennylane. <span className="font-bold text-indigo-600">Un trou de 3 000€</span> est prévu le 24/11.
                                </div>
                            </div>

                            <div className="flex gap-3 flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shrink-0 border border-pink-200">
                                    <span className="text-xs text-pink-600 font-bold">V</span>
                                </div>
                                <div className="bg-indigo-600 p-3 rounded-2xl rounded-tr-none shadow-md text-sm text-white">
                                    Peux-tu me proposer une solution ?
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 border border-indigo-200">
                                    <span className="text-xs">🤖</span>
                                </div>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-indigo-200 shadow-md text-sm text-slate-800 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                                    <p className="mb-2">Bien sûr. Voici deux options :</p>
                                    <ul className="space-y-2">
                                        <li
                                            onClick={openModal}
                                            className="flex items-center gap-2 p-2 rounded bg-indigo-50 hover:bg-indigo-100 cursor-pointer transition border border-indigo-100">
                                            <span className="w-4 h-4 rounded-full border border-indigo-400"></span>
                                            <span>Financer la facture "Client Z" (30j)</span>
                                        </li>
                                        <li className="flex items-center gap-2 p-2 rounded bg-slate-50 hover:bg-slate-100 cursor-pointer transition border border-slate-200">
                                            <span className="w-4 h-4 rounded-full border border-slate-400"></span>
                                            <span>Décaler le prélèvement URSSAF</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {!isCopilotMinimized && (
                        <div className="p-3 border-t border-slate-100 bg-white">
                            <div className="relative">
                                <input type="text" placeholder="Répondre à Copilot..." className="w-full pl-4 pr-10 py-2 rounded-full border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-sm transition-all" disabled />
                                <button className="absolute right-2 top-1.5 p-1 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Financing Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={closeModal}></div>

                    <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-white/50">
                        <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-light text-slate-900">Financer la facture <span className="font-medium">#F2024-89</span></h2>
                                    <p className="text-slate-500 text-sm mt-1">Partenaire : <span className="font-semibold text-indigo-600">Defacto</span></p>
                                </div>
                                <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">
                                    PRÉ-APPROUVÉ
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6 relative overflow-hidden">
                                <div className="grid grid-cols-2 gap-8 relative z-10">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Montant Reçu</p>
                                        <p className="text-3xl font-light text-slate-900">8 000 <span className="text-lg">€</span></p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Coût Total</p>
                                        <p className="text-3xl font-light text-slate-900">120 <span className="text-lg">€</span></p>
                                        <p className="text-[10px] text-slate-400">(Dont commission Moneywork 1%)</p>
                                    </div>
                                </div>
                                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"></div>
                            </div>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Virement instantané sur compte FR76...</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Remboursement automatique à J+30</span>
                                </div>
                            </div>

                            <button onClick={closeModal} className="w-full py-4 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 hover:scale-[1.01] transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 group">
                                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                Débloquer les fonds
                            </button>
                            <p className="text-center text-xs text-slate-400 mt-4">En cliquant, vous acceptez les CGU de Defacto et Moneywork.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
