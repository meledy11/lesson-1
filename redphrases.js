// ============================================================
// allPhrases.js — ПОЛНАЯ КРАСНАЯ КНИГА + ДИАЛОГИ
// Все фразы из переписки (101 шт.) + 8 диалогов
// ============================================================

// ============================================================
// 1. ВСЕ ФРАЗЫ (КРАСНАЯ КНИГА)
// ============================================================

const allPhrases = [
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
];

// ============================================================
// 2. ДИАЛОГИ (8 шт.) — с привязкой к фразам
// ============================================================

const dialogues = [
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
            { speaker: "A", chinese
