import React, { useEffect } from 'react';
import mermaid from 'mermaid';
import { Link } from 'react-router-dom';

const Graph = () => {
    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
        });

        mermaid.run({
            querySelector: '.mermaid'
        });
    }, []);

    return (
        <div className="font-sans flex flex-col justify-center items-center min-h-screen m-0 bg-[#f0f2f5]">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-[95%] w-full overflow-auto">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-center text-[#333] text-2xl font-bold flex-grow">Moneywork Architecture</h1>
                    <Link to="/" className="text-blue-500 hover:underline">Back to Landing</Link>
                </div>
                <div className="mermaid">
                    {`graph TD
            subgraph Frontend ["Frontend (Client-Side)"]
            User["User Browser"]
            Landing["Landing.html"]
            Dash["Dashboard.html"]

            User -->|Visits| Landing
            User -->|Logs in| Dash

            subgraph UI ["UI Technologies"]
            Tailwind["Tailwind CSS (CDN)"]
            GoogleFonts["Google Fonts"]
            VanillaJS["Vanilla JavaScript"]
            end

            Dash -.->|Uses| Tailwind
            Dash -.->|Uses| GoogleFonts
            end

            subgraph Backend ["Backend (Server-Side)"]
            FastAPI["FastAPI Server"]
            Router["API Router (v1)"]

            Dash -->|"HTTP Requests (JSON)"| FastAPI
            FastAPI -->|Routes| Router

            subgraph API ["API Endpoints (backend/app/api/v1)"]
            E1["/connect-bank (POST)"]
            E2["/dashboard/{id} (GET)"]
            E3["/forecast/{id} (GET)"]
            E4["/copilot/chat (POST)"]
            E5["/finance/request (POST)"]
            end

            Router --> E1
            Router --> E2
            Router --> E3
            Router --> E4
            Router --> E5
            end

            subgraph Data ["Data & External Services"]
            DB[("Database / SQLAlchemy")]
            AI["Gemini AI"]
            BankAPI["Powens API"]

            E1 -.->|Connects| BankAPI
            E2 -.->|Queries| DB
            E3 -.->|Predicts| AI
            E4 -.->|Chats| AI
            end`}
                </div>
            </div>
        </div>
    );
};

export default Graph;
