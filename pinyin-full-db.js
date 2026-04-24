// ПОЛНАЯ БАЗА ДАННЫХ ПИНЬИНЯ (ЧАСТЬ 1)
// Инициали: B, P, M, F, D
// Каждый звук — реальное китайское слово, TTS произносит правильно

const pinyinFullDB = {
    // ==================== B ====================
    b: {
        desc: "b [p] — как «б» в слове «спорт» (без выдоха, без голоса)",
        articulation: "🗣️ Губы плотно сомкнуты → резко размыкаются. ГОЛОС НЕ ВКЛЮЧЁН. Язык лежит на дне.",
        sound: "bā",
        syllables: {
            ba: { tones: [
                { tone: "1-й — ровный высокий", pinyin: "bā", char: "八", meaning: "восемь", example: "八个 — 8 штук", sound: "八" },
                { tone: "2-й — восходящий (как вопрос)", pinyin: "bá", char: "拔", meaning: "вытаскивать", example: "拔草 — выдёргивать траву", sound: "拔" },
                { tone: "3-й — вниз-вверх", pinyin: "bǎ", char: "把", meaning: "держать", example: "把手 — ручка", sound: "把" },
                { tone: "4-й — резкий нисходящий", pinyin: "bà", char: "爸", meaning: "папа", example: "爸爸 — папа", sound: "爸爸" }
            ] },
            bo: { tones: [
                { tone: "1-й", pinyin: "bō", char: "波", meaning: "волна", example: "波浪 — волны", sound: "波浪" },
                { tone: "2-й", pinyin: "bó", char: "伯", meaning: "дядя", example: "伯伯 — дядя", sound: "伯伯" },
                { tone: "3-й", pinyin: "bǒ", char: "跛", meaning: "хромой", example: "跛脚 — хромая нога", sound: "跛脚" },
                { tone: "4-й", pinyin: "bò", char: "薄", meaning: "мята", example: "薄荷 — мята", sound: "薄荷" }
            ] },
            bai: { tones: [
                { tone: "1-й", pinyin: "bāi", char: "掰", meaning: "разломить", example: "掰开 — разломить", sound: "掰开" },
                { tone: "2-й", pinyin: "bái", char: "白", meaning: "белый", example: "白色 — белый цвет", sound: "白色" },
                { tone: "3-й", pinyin: "bǎi", char: "百", meaning: "сто", example: "一百 — сто", sound: "一百" },
                { tone: "4-й", pinyin: "bài", char: "败", meaning: "провал", example: "失败 — провал", sound: "失败" }
            ] },
            bao: { tones: [
                { tone: "1-й", pinyin: "bāo", char: "包", meaning: "сумка", example: "包子 — баоцзы", sound: "包子" },
                { tone: "2-й", pinyin: "báo", char: "薄", meaning: "тонкий", example: "薄厚 — толщина", sound: "薄厚" },
                { tone: "3-й", pinyin: "bǎo", char: "饱", meaning: "сытый", example: "吃饱 — наесться", sound: "吃饱" },
                { tone: "4-й", pinyin: "bào", char: "报", meaning: "сообщать", example: "报纸 — газета", sound: "报纸" }
            ] },
            bei: { tones: [
                { tone: "1-й", pinyin: "bēi", char: "杯", meaning: "чашка", example: "杯子 — чашка", sound: "杯子" },
                { tone: "2-й", pinyin: "béi", char: "—", meaning: "—", example: "—", sound: "杯" },
                { tone: "3-й", pinyin: "běi", char: "北", meaning: "
