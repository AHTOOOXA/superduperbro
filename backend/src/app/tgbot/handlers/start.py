from typing import Any

from aiogram import types, Router
from aiogram.filters import CommandStart

from app.tgbot.keyboards.inline import main_menu
from app.infrastructure.database.repo.requests import RequestsRepo
from app.infrastructure.database.models.users import User

start_router = Router()


@start_router.message(CommandStart())
async def send_webapp(message: types.Message, user: User, repo: RequestsRepo):
    print(user)
    await message.answer(
        "Hi Bro!",
        reply_markup=main_menu(),
    )
