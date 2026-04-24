// БАЗА ДАННЫХ ВСЕХ УРОКОВ

const lessonsDB = {
    // ========== УРОК 0: Пиньинь. Инициали и финали ==========
    lesson0: {
        id: "lesson0",
        title: "Введение: Пиньинь и фонетика",
        description: "Инициали, финали, тоны, буквы и правила чтения. Основа китайской фонетики!",
        icon: "🎓",
        isSpecial: true  // особый урок без карточек иероглифов
    },
    
    // ========== УРОК 1: Топ-10 иероглифов ==========
    lesson1: {
        id: "lesson1",
        title: "Топ-10 основных иероглифов",
        description: "Самые важные иероглифы для начинающих: частицы, местоимения, глаголы",
        icon: "🍎",
        data: [
            { char: "的", pinyin: "de", tone: "5-й нейтр.", meaning: "⭐ частица: чей? какой?",
              stroke: "ノ 丨 𠃍 一 一 ㇂ ノ 丶 + ノ 𠃌 一 一 丨 一 ㇂ ノ 丶",
              assoc: "🎯🥏 МЕТКИЙ ВЫСТРЕЛ В БЕЛУЮ ЦЕЛЬ (白 + 勺)",
              phrases: [
                  { ch_display: "🚗 我的车", ch_clean: "我的车", py: "wǒ de chē", ru: "Моя машина" },
                  { ch_display: "🍎 红色的苹果", ch_clean: "红色的苹果", py: "hóngsè de píngguǒ", ru: "Красное яблоко" },
                  { ch_display: "👍 好的！", ch_clean: "好的", py: "hǎo de", ru: "Хорошо!" },
                  { ch_display: "☕ 给我的咖啡", ch_clean: "给我的咖啡", py: "gěi wǒ de kāfēi", ru: "Кофе для меня" }
              ] },
            { char: "一", pinyin: "yī", tone: "1-й высокий", meaning: "🔢 ОДИН, первый",
              stroke: "一 (горизонтальная черта)", assoc: "📏📦 ПОЛКА С ОДНИМ ПРЕДМЕТОМ",
              phrases: [
                  { ch_display: "👤 一个人", ch_clean: "一个人", py: "yī gè rén", ru: "Один человек" },
                  { ch_display: "⏳ 等一下", ch_clean: "等一下", py: "děng yī xià", ru: "Подожди секунду" },
                  { ch_display: "🥇 第一名", ch_clean: "第一名", py: "dì yī míng", ru: "Первое место" },
                  { ch_display: "💘 一见钟情", ch_clean: "一见钟情", py: "yī jiàn zhōngqíng", ru: "Любовь с первого взгляда" }
              ] },
            { char: "是", pinyin: "shì", tone: "4-й резкий", meaning: "✅ БЫТЬ, ЯВЛЯТЬСЯ",
              stroke: "日 + 正", assoc: "☀️👑 СОЛНЦЕ ПРЯМО НАД ГОЛОВОЙ = ИСТИНА",
              phrases: [
                  { ch_display: "👩‍⚕️ 她是医生", ch_clean: "她是医生", py: "tā shì yīshēng", ru: "Она врач" },
                  { ch_display: "❓ 这是什么？", ch_clean: "这是什么", py: "zhè shì shénme", ru: "Что это?" },
                  { ch_display: "✔️ 是的", ch_clean: "是的", py: "shì de", ru: "Да / верно" },
                  { ch_display: "🏛️ 北京是首都", ch_clean: "北京是首都", py: "Běijīng shì shǒudū", ru: "Пекин — столица" }
              ] },
            { char: "不", pinyin: "bù", tone: "4-й", meaning: "🚫 НЕТ, НЕ",
              stroke: "一 ノ 丨 丶", assoc: "🐦🙅‍♀️ ПТИЧКА ОТВЕРНУЛАСЬ",
              phrases: [
                  { ch_display: "🙏 不好意思", ch_clean: "不好意思", py: "bù hǎoyìsi", ru: "Извините" },
                  { ch_display: "❌ 不是我的错", ch_clean: "不是我的错", py: "bùshì wǒ de cuò", ru: "Не моя вина" },
                  { ch_display: "📚 学不好", ch_clean: "学不好", py: "xué bù hǎo", ru: "Плохо учится" },
                  { ch_display: "☕ 我不喝咖啡", ch_clean: "我不喝咖啡", py: "wǒ bù hē kāfēi", ru: "Я не пью кофе" }
              ] },
            { char: "了", pinyin: "le", tone: "нейтр.", meaning: "✨ УЖЕ / ИЗМЕНИЛОСЬ",
              stroke: "𠃋 亅", assoc: "🎣 КРЮЧОК ВЫТАЩИЛ СОБЫТИЕ",
              phrases: [
                  { ch_display: "🍜 吃了吗", ch_clean: "吃了吗", py: "chī le ma", ru: "Поел?" },
                  { ch_display: "🤩 太棒了", ch_clean: "太棒了", py: "tài bàng le", ru: "Потрясающе!" },
                  { ch_display: "😴 我累了", ch_clean: "我累了", py: "wǒ lèi le", ru: "Я устал" },
                  { ch_display: "🌧️ 下雨了", ch_clean: "下雨了", py: "xiàyǔ le", ru: "Дождь пошёл" }
              ] },
            { char: "在", pinyin: "zài", tone: "4-й", meaning: "📍 НАХОДИТЬСЯ В",
              stroke: "𠂇 + 土", assoc: "🌱🙋 ЧЕЛОВЕК НА ЗЕМЛЕ",
              phrases: [
                  { ch_display: "🏠 在家", ch_clean: "在家", py: "zài jiā", ru: "Дома" },
                  { ch_display: "📱 你在干嘛", ch_clean: "你在干嘛", py: "nǐ zài gàn ma", ru: "Что делаешь?" },
                  { ch_display: "🍚 他在吃饭", ch_clean: "他在吃饭", py: "tā zài chīfàn", ru: "Он ест" },
                  { ch_display: "⏳ 我在这里等你", ch_clean: "我在这里等你", py: "wǒ zài zhèlǐ děng nǐ", ru: "Я жду тебя" }
              ] },
            { char: "人", pinyin: "rén", tone: "2-й восх.", meaning: "🧑 ЧЕЛОВЕК, ЛЮДИ",
              stroke: "ノ ㇏", assoc: "🚶 ЧЕЛОВЕК ИДЁТ В ПРОФИЛЬ",
              phrases: [
                  { ch_display: "🇨🇳 中国人", ch_clean: "中国人", py: "Zhōngguó rén", ru: "Китаец" },
                  { ch_display: "🏠 家人", ch_clean: "家人", py: "jiā rén", ru: "Семья" },
                  { ch_display: "😇 好人", ch_clean: "好人", py: "hǎo rén", ru: "Хороший человек" },
                  { ch_display: "👩 大人", ch_clean: "大人", py: "dà rén", ru: "Взрослый" }
              ] },
            { char: "有", pinyin: "yǒu", tone: "3-й", meaning: "🫴 ИМЕТЬ, ЕСТЬ",
              stroke: "𠂇 + 月", assoc: "✋🍖 РУКА ДЕРЖИТ МЯСО",
              phrases: [
                  { ch_display: "❓ 有没有", ch_clean: "有没有", py: "yǒu méiyǒu", ru: "Есть или нет?" },
                  { ch_display: "💰 我有钱", ch_clean: "我有钱", py: "wǒ yǒu qián", ru: "У меня есть деньги" },
                  { ch_display: "⏰ 有时间吗", ch_clean: "有时间吗", py: "yǒu shíjiān ma", ru: "Есть время?" },
                  { ch_display: "📖 有一本书", ch_clean: "有一本书", py: "yǒu yī běn shū", ru: "Есть одна книга" }
              ] },
            { char: "我", pinyin: "wǒ", tone: "3-й", meaning: "🙋 Я, МОЙ, МЕНЯ",
              stroke: "手 + 戈", assoc: "🛡️⚔️ Я ЗАЩИЩАЮ СЕБЯ КОПЬЁМ",
              phrases: [
                  { ch_display: "❤️ 我爱你", ch_clean: "我爱你", py: "wǒ ài nǐ", ru: "Я тебя люблю" },
                  { ch_display: "🎓 我是学生", ch_clean: "我是学生", py: "wǒ shì xuésheng", ru: "Я студент" },
                  { ch_display: "🤷 我不知道", ch_clean: "我不知道", py: "wǒ bù zhīdào", ru: "Я не знаю" },
                  { ch_display: "💪 我自己做", ch_clean: "我自己做", py: "wǒ zìjǐ zuò", ru: "Я сам сделаю" }
              ] },
            { char: "他", pinyin: "tā", tone: "1-й", meaning: "👨 ОН (про людей)",
              stroke: "亻 + 也", assoc: "🐍 ЧЕЛОВЕК И ЗМЕЯ",
              phrases: [
                  { ch_display: "👥 他们", ch_clean: "他们", py: "tā men", ru: "Они" },
                  { ch_display: "🏃 他跑了", ch_clean: "他跑了", py: "tā pǎo le", ru: "Он убежал" },
                  { ch_display: "👬 他的朋友", ch_clean: "他的朋友", py: "tā de péngyou", ru: "Его друг" },
                  { ch_display: "🤔 他怎么了", ch_clean: "他怎么了", py: "tā zěnme le", ru: "Что с ним?" }
              ] }
        ]
    }
};
