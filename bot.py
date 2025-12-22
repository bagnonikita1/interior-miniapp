import asyncio
import json
from aiogram import Bot, Dispatcher, types
from aiogram.filters import CommandStart

TOKEN = "8181530128:AAFpOvxcnBP2fnfJZd6KUVUj9TLHPjGGUlU"

bot = Bot(token=TOKEN)
dp = Dispatcher()


@dp.message(CommandStart())
async def start(message: types.Message):
    kb = types.ReplyKeyboardMarkup(
        keyboard=[
            [
                types.KeyboardButton(
                    text="Открыть приложение",
                    web_app=types.WebAppInfo(
                        url="https://bagnonikita1.github.io/interior-miniapp/"
                    )
                )
            ]
        ],
        resize_keyboard=True
    )

    await message.answer(
        "Привет! Я дизайнер интерьеров.\n"
        "Нажмите кнопку ниже, чтобы посмотреть портфолио и оставить заявку.",
        reply_markup=kb
    )


@dp.message()
async def handle_webapp_data(message: types.Message):
    if message.web_app_data:
        data = json.loads(message.web_app_data.data)

        text = (
            "📩 <b>Новая заявка</b>\n\n"
            f"👤 Имя: {data.get('name')}\n"
            f"📞 Телефон: {data.get('phone')}\n"
            f"🏠 Объект: {data.get('type')}\n"
            f"📐 Площадь: {data.get('area')} м²\n"
            f"💬 Комментарий: {data.get('comment') or '—'}"
        )

        await message.answer(text, parse_mode="HTML")


async def main():
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())