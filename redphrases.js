// ============================================================
// redphrases.js — ПОЛНАЯ КРАСНАЯ КНИГА + АНАЛОГИ + ДИАЛОГИ
// Все фразы из переписки (101 шт.) + аналоги (138 шт.) + 8 диалогов
// ============================================================

// ============================================================
// 1. ВСЕ ФРАЗЫ (КРАСНАЯ КНИГА) — 101 шт.
// ============================================================

const redBookData = [
    // ==================== 1. ПЕРВАЯ ПАРТИЯ ====================
    { id: 1, chinese: "我决定了", pinyin: "wǒ juédìng le", translation: "Я решил", category: "phrase", red: true },
    { id: 2, chinese: "我拨回去", pinyin: "wǒ bō huíqù", translation: "Я перезвоню", category: "phrase", red: true },
    { id: 3, chinese: "我挺好的", pinyin: "wǒ tǐng hǎo de", translation: "У меня всё нормально", category: "phrase", red: true },
    { id: 4, chinese: "我听好了", pinyin: "wǒ tīng hǎo le", translation: "Я всё хорошо расслышал", category: "phrase", red: true },

    // ==================== 2. ВТОРАЯ ПАРТИЯ ====================
    { id: 5, chinese: "对不起，迟到了", pinyin: "duìbuqǐ, chídào le", translation: "Извините, опоздал", category: "phrase", red: true },
    { id: 6, chinese: "危险", pinyin: "wēixiǎn", translation: "Опасно", category: "phrase", red: true },
    { id: 7, chinese: "我送你", pinyin: "wǒ sòng nǐ", translation: "Я тебя провожу", category: "phrase", red: true },
    { id: 8, chinese: "回家", pinyin: "huí jiā", translation: "Возвращаться домой", category: "phrase", red: true },
    { id: 9, chinese: "再考虑一下", pinyin: "zài kǎolǜ yīxià", translation: "Ещё раз подумать", category: "phrase", red: true },
    { id: 10, chinese: "我不吃了", pinyin: "wǒ bù chī le", translation: "Я не буду есть", category: "food", red: true },

    // ==================== 3. ТРЕТЬЯ ПАРТИЯ ====================
    { id: 11, chinese: "别做梦了", pinyin: "bié zuò mèng le", translation: "Не мечтай / In your dreams", category: "phrase", red: true },
    { id: 12, chinese: "我不回去", pinyin: "wǒ bù huí qù", translation: "Я не вернусь", category: "phrase", red: true },
    { id: 13, chinese: "我赶时间", pinyin: "wǒ gǎn shíjiān", translation: "Я спешу", category: "phrase", red: true },
    { id: 14, chinese: "买单", pinyin: "mǎi dān", translation: "Счёт, пожалуйста", category: "food", red: true },

    // ==================== 4. ЧЕТВЁРТАЯ ПАРТИЯ ====================
    { id: 15, chinese: "千真万确", pinyin: "qiān zhēn wàn què", translation: "Абсолютно точно", category: "phrase", red: true },
    { id: 16, chinese: "借过一下", pinyin: "jiè guò yī xià", translation: "Пропустите, пожалуйста", category: "travel", red: true },
    { id: 17, chinese: "来日方长", pinyin: "lái rì fāng cháng", translation: "Впереди ещё много дней", category: "phrase", red: true },
    { id: 18, chinese: "你确定", pinyin: "nǐ què dìng", translation: "Ты уверен?", category: "phrase", red: true },
    { id: 19, chinese: "做得好", pinyin: "zuò de hǎo", translation: "Отлично сработано", category: "work", red: true },
    { id: 20, chinese: "你好厉害", pinyin: "nǐ hǎo lì hài", translation: "Ты крут / Потрясающий", category: "phrase", red: true },
    { id: 21, chinese: "庆祝一下", pinyin: "qìng zhù yī xià", translation: "Отметим / Давай отпразднуем", category: "phrase", red: true },

    // ==================== 5. ПЯТАЯ ПАРТИЯ ====================
    { id: 22, chinese: "我不同意", pinyin: "wǒ bù tóng yì", translation: "Я не согласен", category: "phrase", red: true },
    { id: 23, chinese: "我忘记了", pinyin: "wǒ wàng jì le", translation: "Я забыл", category: "phrase", red: true },
    { id: 24, chinese: "我累了", pinyin: "wǒ lèi le", translation: "Я устал", category: "phrase", red: true },
    { id: 25, chinese: "给你", pinyin: "gěi nǐ", translation: "Вот / Держи", category: "phrase", red: true },
    { id: 26, chinese: "看过去", pinyin: "kàn guò qù", translation: "Взглянуть туда", category: "phrase", red: true },
    { id: 27, chinese: "开过去", pinyin: "kāi guò qù", translation: "Проехать мимо", category: "travel", red: true },
    { id: 28, chinese: "开过来", pinyin: "kāi guò lái", translation: "Подъехать сюда", category: "travel", red: true },
    { id: 29, chinese: "你猜", pinyin: "nǐ cāi", translation: "Угадай", category: "phrase", red: true },
    { id: 30, chinese: "吃什么？", pinyin: "chī shén me?", translation: "Что будем есть?", category: "food", red: true },
    { id: 31, chinese: "你放心吧", pinyin: "nǐ fàng xīn ba", translation: "Не волнуйся", category: "phrase", red: true },

    // ==================== 6. ШЕСТАЯ ПАРТИЯ ====================
    { id: 32, chinese: "关门", pinyin: "guān mén", translation: "Закрой дверь", category: "phrase", red: true },
    { id: 33, chinese: "你在哪？", pinyin: "nǐ zài nǎ?", translation: "Где ты?", category: "phrase", red: true },
    { id: 34, chinese: "儿童节快乐！", pinyin: "ér tóng jié kuài lè!", translation: "С Днём защиты детей!", category: "phrase", red: true },
    { id: 35, chinese: "你叫什么名字？", pinyin: "nǐ jiào shén me míng zi?", translation: "Как тебя зовут?", category: "phrase", red: true },

    // ==================== 7. СЕДЬМАЯ ПАРТИЯ ====================
    { id: 36, chinese: "我不喜欢", pinyin: "wǒ bù xǐ huān", translation: "Мне не нравится", category: "phrase", red: true },
    { id: 37, chinese: "最近怎么样？", pinyin: "zuì jìn zěn me yàng?", translation: "Как дела в последнее время?", category: "phrase", red: true },
    { id: 38, chinese: "别动", pinyin: "bié dòng", translation: "Не двигайся", category: "phrase", red: true },
    { id: 39, chinese: "准备好了吗？", pinyin: "zhǔn bèi hǎo le ma?", translation: "Ты готов?", category: "phrase", red: true },

    // ==================== 8. ВОСЬМАЯ ПАРТИЯ ====================
    { id: 40, chinese: "起床了", pinyin: "qǐ chuáng le", translation: "Вставай / Пора вставать", category: "phrase", red: true },
    { id: 41, chinese: "你觉得呢？", pinyin: "nǐ jué de ne?", translation: "А ты как думаешь?", category: "phrase", red: true },
    { id: 42, chinese: "我吃饱了", pinyin: "wǒ chī bǎo le", translation: "Я наелся / Я сыт", category: "food", red: true },
    { id: 43, chinese: "我饿了", pinyin: "wǒ è le", translation: "Я голоден", category: "food", red: true },

    // ==================== 9. ДЕВЯТАЯ ПАРТИЯ ====================
    { id: 44, chinese: "该回家了", pinyin: "gāi huí jiā le", translation: "Пора возвращаться домой", category: "phrase", red: true },
    { id: 45, chinese: "帮我个忙", pinyin: "bāng wǒ gè máng", translation: "Сделай мне одолжение", category: "phrase", red: true },
    { id: 46, chinese: "我要走了", pinyin: "wǒ yào zǒu le", translation: "Мне пора идти", category: "phrase", red: true },
    { id: 47, chinese: "有时间吗？", pinyin: "yǒu shí jiān ma?", translation: "Есть время?", category: "phrase", red: true },

    // ==================== 10. ДЕСЯТАЯ ПАРТИЯ ====================
    { id: 48, chinese: "够了", pinyin: "gòu le", translation: "Хватит / Достаточно", category: "phrase", red: true },
    { id: 49, chinese: "下雨了", pinyin: "xià yǔ le", translation: "Пошёл дождь", category: "travel", red: true },
    { id: 50, chinese: "打扰了", pinyin: "dǎ rǎo le", translation: "Извините за беспокойство", category: "phrase", red: true },
    { id: 51, chinese: "干什么呢？", pinyin: "gàn shén me ne?", translation: "Что делаешь?", category: "phrase", red: true },

    // ==================== 11. ОДИННАДЦАТАЯ ПАРТИЯ ====================
    { id: 52, chinese: "这是什么？", pinyin: "zhè shì shén me?", translation: "Что это?", category: "phrase", red: true },
    { id: 53, chinese: "你是谁？", pinyin: "nǐ shì shéi?", translation: "Кто ты?", category: "phrase", red: true },
    { id: 54, chinese: "试试看", pinyin: "shì shì kàn", translation: "Попробуй / Давай попробуем", category: "phrase", red: true },

    // ==================== 12. ДВЕНАДЦАТАЯ ПАРТИЯ ====================
    { id: 55, chinese: "太棒了", pinyin: "tài bàng le", translation: "Потрясающе / Супер", category: "phrase", red: true },
    { id: 56, chinese: "不用了", pinyin: "bù yòng le", translation: "Не надо / Спасибо, не нужно", category: "phrase", red: true },
    { id: 57, chinese: "别担心", pinyin: "bié dān xīn", translation: "Не волнуйся", category: "phrase", red: true },
    { id: 58, chinese: "注意安全", pinyin: "zhù yì ān quán", translation: "Будь осторожен", category: "travel", red: true },

    // ==================== 13. ТРИНАДЦАТАЯ ПАРТИЯ ====================
    { id: 59, chinese: "久等了", pinyin: "jiǔ děng le", translation: "Извините, что заставил ждать", category: "phrase", red: true },
    { id: 60, chinese: "一路顺风", pinyin: "yī lù shùn fēng", translation: "Счастливого пути", category: "travel", red: true },
    { id: 61, chinese: "怎么办？", pinyin: "zěn me bàn?", translation: "Что делать? / Как быть?", category: "phrase", red: true },
    { id: 62, chinese: "你怎么了？", pinyin: "nǐ zěn me le?", translation: "Что с тобой?", category: "phrase", red: true },

    // ==================== 14. ЧЕТЫРНАДЦАТАЯ ПАРТИЯ ====================
    { id: 63, chinese: "等一等", pinyin: "děng yi děng", translation: "Подожди / Подождите", category: "phrase", red: true },
    { id: 64, chinese: "我不介意", pinyin: "wǒ bù jiè yì", translation: "Я не против", category: "phrase", red: true },
    { id: 65, chinese: "我答应你", pinyin: "wǒ dā ying nǐ", translation: "Я обещаю тебе", category: "phrase", red: true },
    { id: 66, chinese: "坐吧", pinyin: "zuò ba", translation: "Садись / Присаживайся", category: "phrase", red: true },

    // ==================== 15. ПЯТНАДЦАТАЯ ПАРТИЯ ====================
    { id: 67, chinese: "吃饭了", pinyin: "chī fàn le", translation: "Пора есть / Еда готова", category: "food", red: true },
    { id: 68, chinese: "我不知道", pinyin: "wǒ bù zhī dào", translation: "Я не знаю", category: "phrase", red: true },
    { id: 69, chinese: "小心点", pinyin: "xiǎo xīn diǎn", translation: "Осторожнее / Будь аккуратнее", category: "phrase", red: true },
    { id: 70, chinese: "请进", pinyin: "qǐng jìn", translation: "Входите / Заходите", category: "phrase", red: true },

    // ==================== 16. ШЕСТНАДЦАТАЯ ПАРТИЯ ====================
    { id: 71, chinese: "辛苦了", pinyin: "xīn kǔ le", translation: "Спасибо за труды", category: "work", red: true },
    { id: 72, chinese: "明天见", pinyin: "míng tiān jiàn", translation: "Увидимся завтра", category: "phrase", red: true },
    { id: 73, chinese: "真厉害", pinyin: "zhēn lì hài", translation: "Круто / Здорово / Молодец", category: "phrase", red: true },
    { id: 74, chinese: "太贵了", pinyin: "tài guì le", translation: "Слишком дорого", category: "travel", red: true },

    // ==================== 17. ДОПОЛНИТЕЛЬНЫЕ (ИЗ СКРИНШОТОВ) ====================
    { id: 75, chinese: "世界杯", pinyin: "shì jiè bēi", translation: "Чемпионат мира", category: "phrase", red: true },
    { id: 76, chinese: "关灯", pinyin: "guān dēng", translation: "Выключи свет", category: "phrase", red: true },
    { id: 77, chinese: "开灯", pinyin: "kāi dēng", translation: "Включи свет", category: "phrase", red: true },
    { id: 78, chinese: "我还没准备好", pinyin: "wǒ hái méi zhǔn bèi hǎo", translation: "Я ещё не готов", category: "phrase", red: true },
    { id: 79, chinese: "我马上到", pinyin: "wǒ mǎ shàng dào", translation: "Я сейчас буду", category: "phrase", red: true },
    { id: 80, chinese: "别着急", pinyin: "bié zháo jí", translation: "Не торопись / Не переживай", category: "phrase", red: true },
    { id: 81, chinese: "几点了？", pinyin: "jǐ diǎn le?", translation: "Который час?", category: "phrase", red: true },
    { id: 82, chinese: "新头像", pinyin: "xīn tóu xiàng", translation: "Новая аватарка", category: "phrase", red: true },

    // ==================== 18. ФРАЗЫ ИЗ ДИАЛОГОВ ====================
    { id: 83, chinese: "没关系", pinyin: "méi guān xi", translation: "Ничего / Не за что", category: "phrase", red: true },
    { id: 84, chinese: "不好意思", pinyin: "bù hǎo yì si", translation: "Извините / Прошу прощения", category: "phrase", red: true },
    { id: 85, chinese: "你想吃什么？", pinyin: "nǐ xiǎng chī shén me?", translation: "Что хочешь поесть?", category: "food", red: true },
    { id: 86, chinese: "你决定吧", pinyin: "nǐ jué dìng ba", translation: "Ты решай", category: "phrase", red: true },
    { id: 87, chinese: "吃火锅", pinyin: "chī huǒ guō", translation: "Есть хого / Идти на хого", category: "food", red: true },
    { id: 88, chinese: "时间不早了", pinyin: "shí jiān bù zǎo le", translation: "Уже поздно", category: "phrase", red: true },
    { id: 89, chinese: "路上小心", pinyin: "lù shang xiǎo xīn", translation: "Осторожно в дороге", category: "travel", red: true },
    { id: 90, chinese: "能帮我吗？", pinyin: "néng bāng wǒ ma?", translation: "Можешь мне помочь?", category: "phrase", red: true },
    { id: 91, chinese: "没问题", pinyin: "méi wèn tí", translation: "Без проблем", category: "phrase", red: true },
    { id: 92, chinese: "谢谢你", pinyin: "xiè xiè nǐ", translation: "Спасибо тебе", category: "phrase", red: true },
    { id: 93, chinese: "手机坏了", pinyin: "shǒu jī huài le", translation: "Телефон сломался", category: "phrase", red: true },
    { id: 94, chinese: "去修一下", pinyin: "qù xiū yī xià", translation: "Сходить починить", category: "phrase", red: true },
    { id: 95, chinese: "找到新工作", pinyin: "zhǎo dào xīn gōng zuò", translation: "Нашёл новую работу", category: "work", red: true },
    { id: 96, chinese: "很高兴认识你", pinyin: "hěn gāo xìng rèn shi nǐ", translation: "Приятно познакомиться", category: "phrase", red: true },
    { id: 97, chinese: "我也是", pinyin: "wǒ yě shì", translation: "Я тоже", category: "phrase", red: true },
    { id: 98, chinese: "欢迎欢迎", pinyin: "huān yíng huān yíng", translation: "Добро пожаловать", category: "phrase", red: true },
    { id: 99, chinese: "别客气", pinyin: "bié kè qi", translation: "Не стесняйся / Не стоит", category: "phrase", red: true },
    { id: 100, chinese: "太好吃了", pinyin: "tài hǎo chī le", translation: "Очень вкусно", category: "food", red: true },
    { id: 101, chinese: "谢谢款待", pinyin: "xiè xie kuǎn dài", translation: "Спасибо за угощение", category: "food", red: true },

    // ============================================================
    // 19. АНАЛОГИ (red: false) — 138 шт.
    // ============================================================

    // ---- Аналоги к "我决定了" ----
    { id: 102, chinese: "我选好了", pinyin: "wǒ xuǎn hǎo le", translation: "Я выбрал", category: "phrase", red: false },
    { id: 103, chinese: "我想好了", pinyin: "wǒ xiǎng hǎo le", translation: "Я придумал / Я решил", category: "phrase", red: false },

    // ---- Аналоги к "我拨回去" ----
    { id: 104, chinese: "我打回去", pinyin: "wǒ dǎ huíqù", translation: "Я перезвоню", category: "phrase", red: false },
    { id: 105, chinese: "我回电话", pinyin: "wǒ huí diànhuà", translation: "Я перезвоню", category: "phrase", red: false },

    // ---- Аналоги к "我挺好的" ----
    { id: 106, chinese: "我很好", pinyin: "wǒ hěn hǎo", translation: "У меня всё хорошо", category: "phrase", red: false },
    { id: 107, chinese: "我还不错", pinyin: "wǒ hái bù cuò", translation: "У меня неплохо", category: "phrase", red: false },

    // ---- Аналоги к "我听好了" ----
    { id: 108, chinese: "我记住了", pinyin: "wǒ jì zhù le", translation: "Я запомнил", category: "phrase", red: false },
    { id: 109, chinese: "我明白了", pinyin: "wǒ míng bái le", translation: "Я понял", category: "phrase", red: false },

    // ---- Аналоги к "对不起，迟到了" ----
    { id: 110, chinese: "抱歉，来晚了", pinyin: "bàoqiàn, lái wǎn le", translation: "Простите, пришёл поздно", category: "phrase", red: false },
    { id: 111, chinese: "不好意思，迟到了", pinyin: "bù hǎoyìsi, chídào le", translation: "Извините, опоздал", category: "phrase", red: false },

    // ---- Аналоги к "危险" ----
    { id: 112, chinese: "小心", pinyin: "xiǎoxīn", translation: "Осторожно", category: "travel", red: false },
    { id: 113, chinese: "有危险", pinyin: "yǒu wēixiǎn", translation: "Есть опасность", category: "travel", red: false },

    // ---- Аналоги к "我送你" ----
    { id: 114, chinese: "我送你回家", pinyin: "wǒ sòng nǐ huí jiā", translation: "Я провожу тебя домой", category: "travel", red: false },
    { id: 115, chinese: "我陪你去", pinyin: "wǒ péi nǐ qù", translation: "Я провожу тебя / Пойду с тобой", category: "travel", red: false },

    // ---- Аналоги к "回家" ----
    { id: 116, chinese: "回家吧", pinyin: "huí jiā ba", translation: "Давай вернёмся домой", category: "travel", red: false },
    { id: 117, chinese: "该回家了", pinyin: "gāi huí jiā le", translation: "Пора возвращаться домой", category: "travel", red: false },

    // ---- Аналоги к "再考虑一下" ----
    { id: 118, chinese: "我考虑考虑", pinyin: "wǒ kǎolǜ kǎolǜ", translation: "Я подумаю (ещё)", category: "phrase", red: false },
    { id: 119, chinese: "让我想想", pinyin: "ràng wǒ xiǎng xiǎng", translation: "Дай мне подумать", category: "phrase", red: false },

    // ---- Аналоги к "我不吃了" ----
    { id: 120, chinese: "我不饿", pinyin: "wǒ bù è", translation: "Я не голоден", category: "food", red: false },
    { id: 121, chinese: "我饱了", pinyin: "wǒ bǎo le", translation: "Я сыт", category: "food", red: false },
    { id: 122, chinese: "我吃够了", pinyin: "wǒ chī gòu le", translation: "Я наелся", category: "food", red: false },

    // ---- Аналоги к "别做梦了" ----
    { id: 123, chinese: "别想了", pinyin: "bié xiǎng le", translation: "Даже не думай", category: "phrase", red: false },
    { id: 124, chinese: "不可能", pinyin: "bù kěnéng", translation: "Невозможно", category: "phrase", red: false },
    { id: 125, chinese: "想得美", pinyin: "xiǎng dé měi", translation: "Размечтался", category: "phrase", red: false },

    // ---- Аналоги к "我不回去" ----
    { id: 126, chinese: "我不走了", pinyin: "wǒ bù zǒu le", translation: "Я не ухожу", category: "phrase", red: false },
    { id: 127, chinese: "我留在这儿", pinyin: "wǒ liú zài zhèr", translation: "Я останусь здесь", category: "phrase", red: false },

    // ---- Аналоги к "我赶时间" ----
    { id: 128, chinese: "我时间很紧", pinyin: "wǒ shíjiān hěn jǐn", translation: "У меня мало времени", category: "phrase", red: false },
    { id: 129, chinese: "我没时间", pinyin: "wǒ méi shíjiān", translation: "У меня нет времени", category: "phrase", red: false },

    // ---- Аналоги к "买单" ----
    { id: 130, chinese: "结账", pinyin: "jié zhàng", translation: "Счёт / Рассчитаться", category: "food", red: false },
    { id: 131, chinese: "我来买单", pinyin: "wǒ lái mǎi dān", translation: "Я плачу", category: "food", red: false },

    // ---- Аналоги к "千真万确" ----
    { id: 132, chinese: "绝对是真的", pinyin: "juéduì shì zhēn de", translation: "Абсолютно правда", category: "phrase", red: false },
    { id: 133, chinese: "没错", pinyin: "méi cuò", translation: "Правильно / Не ошибся", category: "phrase", red: false },

    // ---- Аналоги к "借过一下" ----
    { id: 134, chinese: "让一下", pinyin: "ràng yī xià", translation: "Пропустите / Уступите", category: "travel", red: false },
    { id: 135, chinese: "请让一让", pinyin: "qǐng ràng yī ràng", translation: "Пожалуйста, посторонитесь", category: "travel", red: false },

    // ---- Аналоги к "来日方长" ----
    { id: 136, chinese: "以后再说", pinyin: "yǐhòu zài shuō", translation: "Потом поговорим", category: "phrase", red: false },
    { id: 137, chinese: "有的是时间", pinyin: "yǒu de shì shíjiān", translation: "Времени полно", category: "phrase", red: false },

    // ---- Аналоги к "你确定" ----
    { id: 138, chinese: "你肯定吗？", pinyin: "nǐ kěndìng ma?", translation: "Ты уверен?", category: "phrase", red: false },
    { id: 139, chinese: "真的假的？", pinyin: "zhēn de jiǎ de?", translation: "Правда или нет?", category: "phrase", red: false },

    // ---- Аналоги к "做得好" ----
    { id: 140, chinese: "干得漂亮", pinyin: "gàn de piàoliang", translation: "Красиво сделано", category: "work", red: false },
    { id: 141, chinese: "真棒", pinyin: "zhēn bàng", translation: "Отлично / Молодец", category: "phrase", red: false },

    // ---- Аналоги к "你好厉害" ----
    { id: 142, chinese: "你真牛", pinyin: "nǐ zhēn niú", translation: "Ты мощный", category: "phrase", red: false },
    { id: 143, chinese: "你真棒", pinyin: "nǐ zhēn bàng", translation: "Ты молодец", category: "phrase", red: false },

    // ---- Аналоги к "庆祝一下" ----
    { id: 144, chinese: "我们去庆祝吧", pinyin: "wǒmen qù qìngzhù ba", translation: "Давай отметим", category: "phrase", red: false },
    { id: 145, chinese: "喝一杯吧", pinyin: "hē yī bēi ba", translation: "Давай выпьем", category: "phrase", red: false },

    // ---- Аналоги к "我不同意" ----
    { id: 146, chinese: "我反对", pinyin: "wǒ fǎnduì", translation: "Я против", category: "phrase", red: false },
    { id: 147, chinese: "我不赞成", pinyin: "wǒ bù zànchéng", translation: "Я не поддерживаю", category: "phrase", red: false },

    // ---- Аналоги к "我忘记了" ----
    { id: 148, chinese: "我忘了", pinyin: "wǒ wàng le", translation: "Я забыл (коротко)", category: "phrase", red: false },
    { id: 149, chinese: "我想不起来了", pinyin: "wǒ xiǎng bù qǐlái le", translation: "Я не могу вспомнить", category: "phrase", red: false },

    // ---- Аналоги к "我累了" ----
    { id: 150, chinese: "我困了", pinyin: "wǒ kùn le", translation: "Я хочу спать", category: "phrase", red: false },
    { id: 151, chinese: "我累死了", pinyin: "wǒ lèi sǐ le", translation: "Я смертельно устал", category: "phrase", red: false },

    // ---- Аналоги к "给你" ----
    { id: 152, chinese: "拿去", pinyin: "ná qù", translation: "Возьми / Забирай", category: "phrase", red: false },
    { id: 153, chinese: "送给你", pinyin: "sòng gěi nǐ", translation: "Дарю тебе", category: "phrase", red: false },

    // ---- Аналоги к "你猜" ----
    { id: 154, chinese: "猜猜看", pinyin: "cāi cāi kàn", translation: "Угадай-ка", category: "phrase", red: false },
    { id: 155, chinese: "你猜猜", pinyin: "nǐ cāi cāi", translation: "Ты угадай", category: "phrase", red: false },

    // ---- Аналоги к "你放心吧" ----
    { id: 156, chinese: "你放心", pinyin: "nǐ fàng xīn", translation: "Будь спокоен", category: "phrase", red: false },
    { id: 157, chinese: "交给我吧", pinyin: "jiāo gěi wǒ ba", translation: "Оставь это мне", category: "phrase", red: false },

    // ---- Аналоги к "关门" ----
    { id: 158, chinese: "把门关上", pinyin: "bǎ mén guān shàng", translation: "Закрой дверь (до конца)", category: "phrase", red: false },
    { id: 159, chinese: "门关好了吗？", pinyin: "mén guān hǎo le ma?", translation: "Дверь закрыта?", category: "phrase", red: false },

    // ---- Аналоги к "你在哪？" ----
    { id: 160, chinese: "你在哪里？", pinyin: "nǐ zài nǎlǐ?", translation: "Где ты? (формально)", category: "phrase", red: false },
    { id: 161, chinese: "你在哪儿？", pinyin: "nǐ zài nǎr?", translation: "Где ты? (разговорно)", category: "phrase", red: false },

    // ---- Аналоги к "我不喜欢" ----
    { id: 162, chinese: "我讨厌", pinyin: "wǒ tǎoyàn", translation: "Я ненавижу", category: "phrase", red: false },
    { id: 163, chinese: "我不爱吃", pinyin: "wǒ bù ài chī", translation: "Я не люблю есть (что-то)", category: "food", red: false },

    // ---- Аналоги к "最近怎么样？" ----
    { id: 164, chinese: "最近好吗？", pinyin: "zuì jìn hǎo ma?", translation: "Как дела? (в последнее время)", category: "phrase", red: false },
    { id: 165, chinese: "你怎么样？", pinyin: "nǐ zěnme yàng?", translation: "Как ты? / Как дела?", category: "phrase", red: false },

    // ---- Аналоги к "别动" ----
    { id: 166, chinese: "别说话", pinyin: "bié shuō huà", translation: "Не говори / Молчи", category: "phrase", red: false },
    { id: 167, chinese: "站着别动", pinyin: "zhàn zhe bié dòng", translation: "Стой и не двигайся", category: "phrase", red: false },

    // ---- Аналоги к "准备好了吗？" ----
    { id: 168, chinese: "你好了吗？", pinyin: "nǐ hǎo le ma?", translation: "Ты готов? (коротко)", category: "phrase", red: false },
    { id: 169, chinese: "准备好了", pinyin: "zhǔn bèi hǎo le", translation: "Готов", category: "phrase", red: false },

    // ---- Аналоги к "起床了" ----
    { id: 170, chinese: "快起床", pinyin: "kuài qǐ chuáng", translation: "Быстро вставай", category: "phrase", red: false },
    { id: 171, chinese: "该起床了", pinyin: "gāi qǐ chuáng le", translation: "Пора вставать", category: "phrase", red: false },

    // ---- Аналоги к "我吃饱了" ----
    { id: 172, chinese: "我吃好了", pinyin: "wǒ chī hǎo le", translation: "Я поел (хорошо)", category: "food", red: false },
    { id: 173, chinese: "我吃够了", pinyin: "wǒ chī gòu le", translation: "Я наелся", category: "food", red: false },

    // ---- Аналоги к "我饿了" ----
    { id: 174, chinese: "我好饿", pinyin: "wǒ hǎo è", translation: "Я очень голоден", category: "food", red: false },
    { id: 175, chinese: "我饿死了", pinyin: "wǒ è sǐ le", translation: "Умираю с голоду", category: "food", red: false },

    // ---- Аналоги к "该回家了" ----
    { id: 176, chinese: "我该走了", pinyin: "wǒ gāi zǒu le", translation: "Мне пора идти", category: "travel", red: false },
    { id: 177, chinese: "时候不早了", pinyin: "shíhòu bù zǎo le", translation: "Уже поздно", category: "travel", red: false },

    // ---- Аналоги к "帮我个忙" ----
    { id: 178, chinese: "帮个忙", pinyin: "bāng gè máng", translation: "Сделай одолжение", category: "phrase", red: false },
    { id: 179, chinese: "帮我一下", pinyin: "bāng wǒ yī xià", translation: "Помоги на секунду", category: "phrase", red: false },

    // ---- Аналоги к "我要走了" ----
    { id: 180, chinese: "我得走了", pinyin: "wǒ děi zǒu le", translation: "Мне нужно идти", category: "travel", red: false },
    { id: 181, chinese: "我先走了", pinyin: "wǒ xiān zǒu le", translation: "Я пойду первый", category: "travel", red: false },

    // ---- Аналоги к "够了" ----
    { id: 182, chinese: "够了够了", pinyin: "gòu le gòu le", translation: "Хватит-хватит", category: "phrase", red: false },
    { id: 183, chinese: "别再说了", pinyin: "bié zài shuō le", translation: "Хватит говорить", category: "phrase", red: false },

    // ---- Аналоги к "下雨了" ----
    { id: 184, chinese: "要下雨了", pinyin: "yào xià yǔ le", translation: "Собирается дождь", category: "travel", red: false },
    { id: 185, chinese: "雨停了", pinyin: "yǔ tíng le", translation: "Дождь перестал", category: "travel", red: false },

    // ---- Аналоги к "打扰了" ----
    { id: 186, chinese: "打扰一下", pinyin: "dǎ rǎo yī xià", translation: "Извините на секунду", category: "phrase", red: false },
    { id: 187, chinese: "抱歉", pinyin: "bào qiàn", translation: "Прошу прощения", category: "phrase", red: false },

    // ---- Аналоги к "干什么呢？" ----
    { id: 188, chinese: "你在干嘛？", pinyin: "nǐ zài gàn má?", translation: "Что делаешь? (разговорно)", category: "phrase", red: false },
    { id: 189, chinese: "你在做什么？", pinyin: "nǐ zài zuò shénme?", translation: "Что делаешь? (формально)", category: "phrase", red: false },

    // ---- Аналоги к "这是什么？" ----
    { id: 190, chinese: "这什么东西？", pinyin: "zhè shénme dōngxi?", translation: "Что это за штука?", category: "phrase", red: false },
    { id: 191, chinese: "这是什么意思？", pinyin: "zhè shì shénme yìsi?", translation: "Что это значит?", category: "phrase", red: false },

    // ---- Аналоги к "你是谁？" ----
    { id: 192, chinese: "你哪位？", pinyin: "nǐ nǎ wèi?", translation: "Кто вы? (вежливо)", category: "phrase", red: false },
    { id: 193, chinese: "他是谁？", pinyin: "tā shì shéi?", translation: "Кто он?", category: "phrase", red: false },

    // ---- Аналоги к "试试看" ----
    { id: 194, chinese: "试试吧", pinyin: "shì shì ba", translation: "Попробуй", category: "phrase", red: false },
    { id: 195, chinese: "试一下", pinyin: "shì yī xià", translation: "Попробуй на секунду", category: "phrase", red: false },

    // ---- Аналоги к "太棒了" ----
    { id: 196, chinese: "太好了", pinyin: "tài hǎo le", translation: "Отлично / Замечательно", category: "phrase", red: false },
    { id: 197, chinese: "很棒", pinyin: "hěn bàng", translation: "Отлично / Супер", category: "phrase", red: false },

    // ---- Аналоги к "不用了" ----
    { id: 198, chinese: "不要了", pinyin: "bù yào le", translation: "Не хочу / Не надо", category: "phrase", red: false },
    { id: 199, chinese: "算了吧", pinyin: "suàn le ba", translation: "Забей / Оставь", category: "phrase", red: false },

    // ---- Аналоги к "别担心" ----
    { id: 200, chinese: "别着急", pinyin: "bié zháo jí", translation: "Не переживай", category: "phrase", red: false },
    { id: 201, chinese: "没事的", pinyin: "méi shì de", translation: "Всё нормально", category: "phrase", red: false },

    // ---- Аналоги к "注意安全" ----
    { id: 202, chinese: "小心安全", pinyin: "xiǎoxīn ānquán", translation: "Береги себя", category: "travel", red: false },
    { id: 203, chinese: "注意身体", pinyin: "zhùyì shēntǐ", translation: "Береги здоровье", category: "travel", red: false },

    // ---- Аналоги к "久等了" ----
    { id: 204, chinese: "让你久等了", pinyin: "ràng nǐ jiǔ děng le", translation: "Заставил тебя долго ждать", category: "phrase", red: false },
    { id: 205, chinese: "等很久了吗？", pinyin: "děng hěn jiǔ le ma?", translation: "Долго ждал?", category: "phrase", red: false },

    // ---- Аналоги к "怎么办？" ----
    { id: 206, chinese: "怎么处理？", pinyin: "zěnme chǔlǐ?", translation: "Как решить?", category: "phrase", red: false },
    { id: 207, chinese: "有什么办法？", pinyin: "yǒu shénme bànfǎ?", translation: "Есть какой-то выход?", category: "phrase", red: false },

    // ---- Аналоги к "你怎么了？" ----
    { id: 208, chinese: "你没事吧？", pinyin: "nǐ méi shì ba?", translation: "Ты в порядке?", category: "phrase", red: false },
    { id: 209, chinese: "你还好吗？", pinyin: "nǐ hái hǎo ma?", translation: "Ты как?", category: "phrase", red: false },

    // ---- Аналоги к "等一等" ----
    { id: 210, chinese: "等一下", pinyin: "děng yī xià", translation: "Подожди секунду", category: "phrase", red: false },
    { id: 211, chinese: "等等我", pinyin: "děng děng wǒ", translation: "Подожди меня", category: "phrase", red: false },

    // ---- Аналоги к "我不介意" ----
    { id: 212, chinese: "无所谓", pinyin: "wú suǒ wèi", translation: "Без разницы", category: "phrase", red: false },
    { id: 213, chinese: "没问题", pinyin: "méi wèntí", translation: "Без проблем", category: "phrase", red: false },

    // ---- Аналоги к "我答应你" ----
    { id: 214, chinese: "我保证", pinyin: "wǒ bǎozhèng", translation: "Я гарантирую", category: "phrase", red: false },
    { id: 215, chinese: "一言为定", pinyin: "yī yán wéi dìng", translation: "Договорились", category: "phrase", red: false },

    // ---- Аналоги к "坐吧" ----
    { id: 216, chinese: "请坐", pinyin: "qǐng zuò", translation: "Присаживайтесь, пожалуйста", category: "phrase", red: false },
    { id: 217, chinese: "坐下来吧", pinyin: "zuò xiàlái ba", translation: "Садись", category: "phrase", red: false },

    // ---- Аналоги к "吃饭了" ----
    { id: 218, chinese: "开饭了", pinyin: "kāi fàn le", translation: "Еда готова", category: "food", red: false },
    { id: 219, chinese: "来吃饭吧", pinyin: "lái chīfàn ba", translation: "Идите есть", category: "food", red: false },

    // ---- Аналоги к "我不知道" ----
    { id: 220, chinese: "我不清楚", pinyin: "wǒ bù qīngchu", translation: "Я не в курсе", category: "phrase", red: false },
    { id: 221, chinese: "我不确定", pinyin: "wǒ bù quèdìng", translation: "Я не уверен", category: "phrase", red: false },

    // ---- Аналоги к "小心点" ----
    { id: 222, chinese: "小心", pinyin: "xiǎoxīn", translation: "Осторожно", category: "travel", red: false },
    { id: 223, chinese: "注意安全", pinyin: "zhùyì ānquán", translation: "Береги себя", category: "travel", red: false },

    // ---- Аналоги к "请进" ----
    { id: 224, chinese: "进来吧", pinyin: "jìnlái ba", translation: "Заходи", category: "phrase", red: false },
    { id: 225, chinese: "欢迎光临", pinyin: "huānyíng guānglín", translation: "Добро пожаловать", category: "phrase", red: false },

    // ---- Аналоги к "辛苦了" ----
    { id: 226, chinese: "你辛苦了", pinyin: "nǐ xīnkǔ le", translation: "Ты устал / Спасибо за труд", category: "work", red: false },
    { id: 227, chinese: "辛苦辛苦", pinyin: "xīnkǔ xīnkǔ", translation: "Спасибо за труды", category: "work", red: false },

    // ---- Аналоги к "明天见" ----
    { id: 228, chinese: "回头见", pinyin: "huítóu jiàn", translation: "Увидимся позже", category: "phrase", red: false },
    { id: 229, chinese: "一会儿见", pinyin: "yīhuìr jiàn", translation: "Увидимся скоро", category: "phrase", red: false },

    // ---- Аналоги к "真厉害" ----
    { id: 230, chinese: "太厉害了", pinyin: "tài lìhai le", translation: "Очень круто", category: "phrase", red: false },
    { id: 231, chinese: "真棒", pinyin: "zhēn bàng", translation: "Молодец", category: "phrase", red: false },

    // ---- Аналоги к "太贵了" ----
    { id: 232, chinese: "有点贵", pinyin: "yǒu diǎn guì", translation: "Дороговато", category: "travel", red: false },
    { id: 233, chinese: "太便宜了", pinyin: "tài piányi le", translation: "Слишком дёшево", category: "travel", red: false },

    // ---- Аналоги к "关灯" ----
    { id: 234, chinese: "把灯关上", pinyin: "bǎ dēng guān shàng", translation: "Выключи свет", category: "phrase", red: false },
    { id: 235, chinese: "灯关了", pinyin: "dēng guān le", translation: "Свет выключился", category: "phrase", red: false },

    // ---- Аналоги к "开灯" ----
    { id: 236, chinese: "把灯打开", pinyin: "bǎ dēng dǎ kāi", translation: "Включи свет", category: "phrase", red: false },
    { id: 237, chinese: "灯开了", pinyin: "dēng kāi le", translation: "Свет включился", category: "phrase", red: false },

    // ---- Аналоги к "几点了？" ----
    { id: 238, chinese: "现在几点？", pinyin: "xiànzài jǐ diǎn?", translation: "Который сейчас час?", category: "phrase", red: false },
    { id: 239, chinese: "几点了？", pinyin: "jǐ diǎn le?", translation: "Который час?", category: "phrase", red: false },
];

// ============================================================
// 2. ДИАЛОГИ (8 шт.) — с привязкой к фразам
// ============================================================

const redBookDialogues = [
    // ----- ДИАЛОГ 1: Опоздание -----
    {
        id: "d1",
        title: "Опоздание на встречу",
        phrases: ["对不起，迟到了", "久等了", "我赶时间"],
        lines: [
            { speaker: "A", chinese: "对不起，迟到了！路上堵车。", pinyin: "duìbuqǐ, chídào le! lùshang dǔchē.", russian: "Извини, опоздал! В пробке стоял." },
            { speaker: "B", chinese: "没关系，我也刚到。", pinyin: "méiguānxi, wǒ yě gāng dào.", russian: "Ничего, я тоже только что пришёл." },
            { speaker: "A", chinese: "久等了，不好意思。", pinyin: "jiǔ děng le, bù hǎoyìsi.", russian: "Заставил ждать, извини." },
            { speaker: "B", chinese: "没事，你赶时间吗？", pinyin: "méi shì, nǐ gǎn shíjiān ma?", russian: "Ничего, ты спешишь?" },
            { speaker: "A", chinese: "不赶，我们慢慢聊。", pinyin: "bù gǎn, wǒmen mànmàn liáo.", russian: "Не спешу, мы не торопимся." },
        ],
    },

    // ----- ДИАЛОГ 2: В ресторане -----
    {
        id: "d2",
        title: "В ресторане",
        phrases: ["吃什么？", "我饿了", "我吃饱了", "买单"],
        lines: [
            { speaker: "A", chinese: "我饿了，我们吃什么？", pinyin: "wǒ è le, wǒmen chī shénme?", russian: "Я голоден, что будем есть?" },
            { speaker: "B", chinese: "你想吃什么？", pinyin: "nǐ xiǎng chī shénme?", russian: "Что хочешь?" },
            { speaker: "A", chinese: "随便，你决定吧。", pinyin: "suíbiàn, nǐ juédìng ba.", russian: "Мне всё равно, ты решай." },
            { speaker: "B", chinese: "那吃火锅吧！", pinyin: "nà chī huǒguō ba!", russian: "Тогда давай хого!" },
            { speaker: "A", chinese: "好的！", pinyin: "hǎo de!", russian: "Хорошо!" },
            { speaker: "A", chinese: "我吃饱了，吃得太多了。", pinyin: "wǒ chī bǎo le, chī de tài duō le.", russian: "Я наелся, слишком много съел." },
            { speaker: "B", chinese: "那我们买单吧。", pinyin: "nà wǒmen mǎi dān ba.", russian: "Тогда давай оплатим." },
            { speaker: "A", chinese: "好，买单！", pinyin: "hǎo, mǎi dān!", russian: "Хорошо, счёт!" },
        ],
    },

    // ----- ДИАЛОГ 3: Прощание -----
    {
        id: "d3",
        title: "Прощание",
        phrases: ["我要走了", "明天见", "注意安全", "一路顺风"],
        lines: [
            { speaker: "A", chinese: "时间不早了，我要走了。", pinyin: "shíjiān bù zǎo le, wǒ yào zǒu le.", russian: "Уже поздно, мне пора идти." },
            { speaker: "B", chinese: "好的，明天见！", pinyin: "hǎo de, míngtiān jiàn!", russian: "Хорошо, увидимся завтра!" },
            { speaker: "A", chinese: "明天见！", pinyin: "míngtiān jiàn!", russian: "Увидимся завтра!" },
            { speaker: "B", chinese: "路上小心，注意安全！", pinyin: "lùshang xiǎoxīn, zhùyì ānquán!", russian: "Осторожно в дороге, береги себя!" },
            { speaker: "A", chinese: "谢谢，你也是！一路顺风！", pinyin: "xièxie, nǐ yě shì! yīlù shùnfēng!", russian: "Спасибо, ты тоже! Счастливого пути!" },
        ],
    },

    // ----- ДИАЛОГ 4: Помощь -----
    {
        id: "d4",
        title: "Просьба о помощи",
        phrases: ["帮我个忙", "你放心吧", "我答应你", "做得好"],
        lines: [
            { speaker: "A", chinese: "能帮我个忙吗？", pinyin: "néng bāng wǒ gè máng ma?", russian: "Можешь сделать мне одолжение?" },
            { speaker: "B", chinese: "什么忙？你说。", pinyin: "shénme máng? nǐ shuō.", russian: "Какое? Говори." },
            { speaker: "A", chinese: "帮我搬一下这个箱子。", pinyin: "bāng wǒ bān yīxià zhège xiāngzi.", russian: "Помоги перенести эту коробку." },
            { speaker: "B", chinese: "没问题，你放心吧！", pinyin: "méi wèntí, nǐ fàngxīn ba!", russian: "Без проблем, не волнуйся!" },
            { speaker: "A", chinese: "谢谢你！我答应你下次请你吃饭。", pinyin: "xièxie nǐ! wǒ dāying nǐ xiàcì qǐng nǐ chīfàn.", russian: "Спасибо! Обещаю в следующий раз угостить тебя." },
            { speaker: "B", chinese: "做得好！搬完了！", pinyin: "zuò de hǎo! bān wán le!", russian: "Отлично сработано! Перенесли!" },
        ],
    },

    // ----- ДИАЛОГ 5: Что делать? -----
    {
        id: "d5",
        title: "Что делать?",
        phrases: ["怎么办？", "我不知道", "再考虑一下", "我不介意"],
        lines: [
            { speaker: "A", chinese: "我的手机坏了，怎么办？", pinyin: "wǒ de shǒujī huài le, zěnme bàn?", russian: "У меня телефон сломался, что делать?" },
            { speaker: "B", chinese: "我也不知道，去修一下吧。", pinyin: "wǒ yě bù zhīdào, qù xiū yīxià ba.", russian: "Я тоже не знаю, сходи почини." },
            { speaker: "A", chinese: "大概要花多少钱？", pinyin: "dàgài yào huā duōshao qián?", russian: "Сколько это примерно будет стоить?" },
            { speaker: "B", chinese: "再考虑一下，别急着修。", pinyin: "zài kǎolǜ yīxià, bié jízhe xiū.", russian: "Подумай ещё, не торопись чинить." },
            { speaker: "A", chinese: "好吧，我不介意等几天。", pinyin: "hǎo ba, wǒ bù jièyì děng jǐ tiān.", russian: "Ладно, я не против подождать несколько дней." },
        ],
    },

    // ----- ДИАЛОГ 6: Хорошие новости -----
    {
        id: "d6",
        title: "Хорошие новости",
        phrases: ["太棒了", "真厉害", "庆祝一下", "你确定"],
        lines: [
            { speaker: "A", chinese: "我找到新工作了！", pinyin: "wǒ zhǎodào xīn gōngzuò le!", russian: "Я нашёл новую работу!" },
            { speaker: "B", chinese: "真的吗？太棒了！", pinyin: "zhēn de ma? tài bàng le!", russian: "Правда? Потрясающе!" },
            { speaker: "A", chinese: "你确定是真的？", pinyin: "nǐ quèdìng shì zhēn de?", russian: "Ты уверен, что это правда?" },
            { speaker: "B", chinese: "千真万确！", pinyin: "qiān zhēn wàn què!", russian: "Абсолютно точно!" },
            { speaker: "A", chinese: "你真厉害！我们庆祝一下！", pinyin: "nǐ zhēn lìhài! wǒmen qìngzhù yīxià!", russian: "Ты крут! Давай отметим!" },
            { speaker: "B", chinese: "好！今晚一起吃饭！", pinyin: "hǎo! jīn wǎn yīqǐ chīfàn!", russian: "Хорошо! Сегодня вечером вместе поужинаем!" },
        ],
    },

    // ----- ДИАЛОГ 7: Знакомство -----
    {
        id: "d7",
        title: "Знакомство",
        phrases: ["你叫什么名字？", "你确定", "你好厉害", "很高兴认识你"],
        lines: [
            { speaker: "A", chinese: "你好！你叫什么名字？", pinyin: "nǐ hǎo! nǐ jiào shénme míngzi?", russian: "Привет! Как тебя зовут?" },
            { speaker: "B", chinese: "我叫安娜，你呢？", pinyin: "wǒ jiào Ānnà, nǐ ne?", russian: "Меня зовут Анна, а тебя?" },
            { speaker: "A", chinese: "我叫小明。你是哪里人？", pinyin: "wǒ jiào Xiǎomíng. nǐ shì nǎlǐ rén?", russian: "Меня зовут Сяомин. Откуда ты?" },
            { speaker: "B", chinese: "我是俄罗斯人。你中文真好！", pinyin: "wǒ shì Éluósī rén. nǐ zhōngwén zhēn hǎo!", russian: "Я из России. У тебя отличный китайский!" },
            { speaker: "A", chinese: "谢谢！你确定吗？我觉得还行。", pinyin: "xièxie! nǐ quèdìng ma? wǒ juéde hái xíng.", russian: "Спасибо! Ты уверен? Я думаю, нормально." },
            { speaker: "B", chinese: "真厉害！很高兴认识你！", pinyin: "zhēn lìhài! hěn gāoxìng rènshi nǐ!", russian: "Круто! Приятно познакомиться!" },
            { speaker: "A", chinese: "我也是！", pinyin: "wǒ yě shì!", russian: "Я тоже!" },
        ],
    },

    // ----- ДИАЛОГ 8: В гостях -----
    {
        id: "d8",
        title: "В гостях",
        phrases: ["请进", "坐吧", "吃饭了", "我吃饱了", "辛苦了"],
        lines: [
            { speaker: "A", chinese: "请进！欢迎欢迎！", pinyin: "qǐng jìn! huānyíng huānyíng!", russian: "Входите! Добро пожаловать!" },
            { speaker: "B", chinese: "谢谢！打扰了！", pinyin: "xièxie! dǎrǎo le!", russian: "Спасибо! Прошу прощения за беспокойство!" },
            { speaker: "A", chinese: "不打扰！坐吧，别客气！", pinyin: "bù dǎrǎo! zuò ba, bié kèqi!", russian: "Не беспокоишь! Садись, не стесняйся!" },
            { speaker: "B", chinese: "好的，谢谢！", pinyin: "hǎo de, xièxie!", russian: "Хорошо, спасибо!" },
            { speaker: "A", chinese: "吃饭了！快来尝尝我做的菜！", pinyin: "chīfàn le! kuài lái chángchang wǒ zuò de cài!", russian: "Пора есть! Идите попробуйте мои блюда!" },
            { speaker: "B", chinese: "太好吃了！", pinyin: "tài hǎochī le!", russian: "Очень вкусно!" },
            { speaker: "A", chinese: "再吃点吧！", pinyin: "zài chī diǎn ba!", russian: "Ещё поешь!" },
            { speaker: "B", chinese: "我吃饱了，真的吃不下了。", pinyin: "wǒ chī bǎo le, zhēn de chī bù xià le.", russian: "Я наелся, реально больше не могу." },
            { speaker: "A", chinese: "那好吧，辛苦了！", pinyin: "nà hǎo ba, xīnkǔ le!", russian: "Ну ладно, спасибо за труды!" },
            { speaker: "B", chinese: "谢谢你的款待！", pinyin: "xièxie nǐ de kuǎndài!", russian: "Спасибо за угощение!" },
        ],
    },
];

// ============================================================
// ЭКСПОРТ
// ============================================================

if (typeof module !== "undefined" && module.exports) {
    module.exports = { redBookData, redBookDialogues };
}

if (typeof window !== "undefined") {
    window.redBookData = redBookData;
    window.redBookDialogues = redBookDialogues;
}

console.log("✅ redphrases.js загружен!");
console.log("📄 Всего фраз:", redBookData.length);
console.log("🔴 Красная книга:", redBookData.filter(p => p.red === true).length);
console.log("🔵 Аналоги:", redBookData.filter(p => p.red === false).length);
console.log("💬 Всего диалогов:", redBookDialogues.length);
