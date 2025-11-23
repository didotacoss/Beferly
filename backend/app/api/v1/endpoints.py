from fastapi import APIRouter, Depends, HTTPException
from typing import Any, Dict

router = APIRouter()

@router.post("/connect-bank")
async def connect_bank() -> Dict[str, str]:
    """
    Mock Powens integration.
    """
    return {"status": "connected", "provider": "Powens (Mock)"}

@router.get("/dashboard/{company_id}")
async def get_dashboard(company_id: int) -> Dict[str, Any]:
    """
    Aggregation of banking data for the dashboard.
    """
    return {
        "company_id": company_id,
        "balance": 24500.00,
        "cash_runway_days": 45,
        "alerts": ["Risk of overdraft in 12 days"]
    }

@router.get("/forecast/{company_id}")
async def get_forecast(company_id: int) -> Dict[str, Any]:
    """
    AI Predictive forecast (Mock).
    """
    return {
        "company_id": company_id,
        "forecast_30d": [
            {"date": "2023-11-01", "amount": 24000},
            {"date": "2023-11-15", "amount": 12000},
            {"date": "2023-11-30", "amount": -3000}
        ]
    }

@router.post("/copilot/chat")
async def copilot_chat(query: Dict[str, str]) -> Dict[str, str]:
    """
    Gemini AI Copilot interface.
    """
    return {
        "response": "Based on your cash flow, I recommend financing the invoice #402."
    }

@router.post("/finance/request")
async def request_finance(data: Dict[str, Any]) -> Dict[str, str]:
    """
    Generate credit application dossier.
    """
    return {
        "status": "submitted",
        "dossier_id": "REQ-12345",
        "message": "Dossier sent to partners."
    }
