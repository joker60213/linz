const BOT_TOKEN = '8053910443:AAGfD7jnsQikfXdY6jGl27fANIs_gjHX80s'
const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}`

// ID моего Telegram 
const ADMIN_CHAT_ID = 497045316

// Основная функция отправки
export const sendOrderToTelegram = async (
  message: string,
  chatId: number = ADMIN_CHAT_ID
) => {
  try {
    const response = await fetch(`${API_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    const data = await response.json()

    if (!data.ok) {
      if (chatId !== ADMIN_CHAT_ID) {
        alert(
          '⚠️ Мы не смогли отправить вам копию в Telegram.\n\nПожалуйста, напишите сначала боту @linz_tg_bot, чтобы он мог отправлять вам сообщения.'
        )
      } else {
        console.error('Ошибка отправки в Telegram:', data)
      }
    }
  } catch (error) {
    console.error('Telegram fetch error:', error)
  }
}
