import asyncio

from aiogram import Bot, Dispatcher
from aiogram.filters import CommandStart
from aiogram.types import Message, ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

from config import BOT_TOKEN, WEB_APP_URL

print("BOT ISHLAYAPTI")

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()

main_keyboard = ReplyKeyboardMarkup(
    keyboard=[
        [KeyboardButton(text="📊 Spend AI ni ochish", web_app=WebAppInfo(url=WEB_APP_URL))]
    ],
    resize_keyboard=True
)

@dp.message(CommandStart())
async def start_handler(message: Message):
    await message.answer(
        "Assalomu alaykum. Spend AI web appni ochish uchun tugmani bosing.",
        reply_markup=main_keyboard
    )

async def main():
    print("POLLING STARTED")
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())