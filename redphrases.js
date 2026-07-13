// ============================================================
// redphrases.js — ПОЛНАЯ БАЗА 500+ ФРАЗ + 15 ДИАЛОГОВ
// Красная книга + Аналоги + HSK + Диалоги
// ============================================================

// ============================================================
// 1. ВСЕ ФРАЗЫ (500+ шт.)
// ============================================================

const redBookData = [
    // ============================================================
    // ГРУППА 1: БЫТОВЫЕ ФРАЗЫ (1-30)
    // ============================================================
    { id: 1, chinese: "我决定了", pinyin: "wǒ juédìng le", translation: "Я решил", category: "life", red: true },
    { id: 2, chinese: "我拨回去", pinyin: "wǒ bō huíqù", translation: "Я перезвоню", category: "life", red: true },
    { id: 3, chinese: "我挺好的", pinyin: "wǒ tǐng hǎo de", translation: "У меня всё нормально", category: "life", red: true },
    { id: 4, chinese: "我听好了", pinyin: "wǒ tīng hǎo le", translation: "Я всё хорошо расслышал", category: "life", red: true },
    { id: 5, chinese: "对不起，迟到了", pinyin: "duìbuqǐ, chídào le", translation: "Извините, опоздал", category: "life", red: true },
    { id: 6, chinese: "危险", pinyin: "wēixiǎn", translation: "Опасно", category: "life", red: true },
    { id: 7, chinese: "我送你", pinyin: "wǒ sòng nǐ", translation: "Я тебя провожу", category: "life", red: true },
    { id: 8, chinese: "回家", pinyin: "huí jiā", translation: "Возвращаться домой", category: "life", red: true },
    { id: 9, chinese: "再考虑一下", pinyin: "zài kǎolǜ yīxià", translation: "Ещё раз подумать", category: "life", red: true },
    { id: 10, chinese: "我不吃了", pinyin: "wǒ bù chī le", translation: "Я не буду есть", category: "food", red: true },
    { id: 11, chinese: "别做梦了", pinyin: "bié zuò mèng le", translation: "Не мечтай", category: "life", red: true },
    { id: 12, chinese: "我不回去", pinyin: "wǒ bù huí qù", translation: "Я не вернусь", category: "life", red: true },
    { id: 13, chinese: "我赶时间", pinyin: "wǒ gǎn shíjiān", translation: "Я спешу", category: "life", red: true },
    { id: 14, chinese: "买单", pinyin: "mǎi dān", translation: "Счёт, пожалуйста", category: "food", red: true },
    { id: 15, chinese: "千真万确", pinyin: "qiān zhēn wàn què", translation: "Абсолютно точно", category: "life", red: true },
    { id: 16, chinese: "借过一下", pinyin: "jiè guò yī xià", translation: "Пропустите, пожалуйста", category: "travel", red: true },
    { id: 17, chinese: "来日方长", pinyin: "lái rì fāng cháng", translation: "Впереди ещё много дней", category: "life", red: true },
    { id: 18, chinese: "你确定", pinyin: "nǐ què dìng", translation: "Ты уверен?", category: "life", red: true },
    { id: 19, chinese: "做得好", pinyin: "zuò de hǎo", translation: "Отлично сработано", category: "work", red: true },
    { id: 20, chinese: "你好厉害", pinyin: "nǐ hǎo lì hài", translation: "Ты крут", category: "life", red: true },
    { id: 21, chinese: "庆祝一下", pinyin: "qìng zhù yī xià", translation: "Давай отпразднуем", category: "life", red: true },
    { id: 22, chinese: "我不同意", pinyin: "wǒ bù tóng yì", translation: "Я не согласен", category: "life", red: true },
    { id: 23, chinese: "我忘记了", pinyin: "wǒ wàng jì le", translation: "Я забыл", category: "life", red: true },
    { id: 24, chinese: "我累了", pinyin: "wǒ lèi le", translation: "Я устал", category: "life", red: true },
    { id: 25, chinese: "给你", pinyin: "gěi nǐ", translation: "Вот / Держи", category: "life", red: true },
    { id: 26, chinese: "看过去", pinyin: "kàn guò qù", translation: "Взглянуть туда", category: "life", red: true },
    { id: 27, chinese: "开过去", pinyin: "kāi guò qù", translation: "Проехать мимо", category: "travel", red: true },
    { id: 28, chinese: "开过来", pinyin: "kāi guò lái", translation: "Подъехать сюда", category: "travel", red: true },
    { id: 29, chinese: "你猜", pinyin: "nǐ cāi", translation: "Угадай", category: "life", red: true },
    { id: 30, chinese: "吃什么？", pinyin: "chī shén me?", translation: "Что будем есть?", category: "food", red: true },

    // ============================================================
    // ГРУППА 2: ОБЩЕНИЕ И ЧУВСТВА (31-60)
    // ============================================================
    { id: 31, chinese: "你放心吧", pinyin: "nǐ fàng xīn ba", translation: "Не волнуйся", category: "life", red: true },
    { id: 32, chinese: "关门", pinyin: "guān mén", translation: "Закрой дверь", category: "life", red: true },
    { id: 33, chinese: "你在哪？", pinyin: "nǐ zài nǎ?", translation: "Где ты?", category: "life", red: true },
    { id: 34, chinese: "儿童节快乐！", pinyin: "ér tóng jié kuài lè!", translation: "С Днём защиты детей!", category: "life", red: true },
    { id: 35, chinese: "你叫什么名字？", pinyin: "nǐ jiào shén me míng zi?", translation: "Как тебя зовут?", category: "life", red: true },
    { id: 36, chinese: "我不喜欢", pinyin: "wǒ bù xǐ huān", translation: "Мне не нравится", category: "life", red: true },
    { id: 37, chinese: "最近怎么样？", pinyin: "zuì jìn zěn me yàng?", translation: "Как дела?", category: "life", red: true },
    { id: 38, chinese: "别动", pinyin: "bié dòng", translation: "Не двигайся", category: "life", red: true },
    { id: 39, chinese: "准备好了吗？", pinyin: "zhǔn bèi hǎo le ma?", translation: "Ты готов?", category: "life", red: true },
    { id: 40, chinese: "起床了", pinyin: "qǐ chuáng le", translation: "Вставай", category: "life", red: true },
    { id: 41, chinese: "你觉得呢？", pinyin: "nǐ jué de ne?", translation: "А ты как думаешь?", category: "life", red: true },
    { id: 42, chinese: "我吃饱了", pinyin: "wǒ chī bǎo le", translation: "Я наелся", category: "food", red: true },
    { id: 43, chinese: "我饿了", pinyin: "wǒ è le", translation: "Я голоден", category: "food", red: true },
    { id: 44, chinese: "该回家了", pinyin: "gāi huí jiā le", translation: "Пора домой", category: "life", red: true },
    { id: 45, chinese: "帮我个忙", pinyin: "bāng wǒ gè máng", translation: "Сделай одолжение", category: "life", red: true },
    { id: 46, chinese: "我要走了", pinyin: "wǒ yào zǒu le", translation: "Мне пора идти", category: "life", red: true },
    { id: 47, chinese: "有时间吗？", pinyin: "yǒu shí jiān ma?", translation: "Есть время?", category: "life", red: true },
    { id: 48, chinese: "够了", pinyin: "gòu le", translation: "Хватит", category: "life", red: true },
    { id: 49, chinese: "下雨了", pinyin: "xià yǔ le", translation: "Пошёл дождь", category: "travel", red: true },
    { id: 50, chinese: "打扰了", pinyin: "dǎ rǎo le", translation: "Извините за беспокойство", category: "life", red: true },
    { id: 51, chinese: "干什么呢？", pinyin: "gàn shén me ne?", translation: "Что делаешь?", category: "life", red: true },
    { id: 52, chinese: "这是什么？", pinyin: "zhè shì shén me?", translation: "Что это?", category: "life", red: true },
    { id: 53, chinese: "你是谁？", pinyin: "nǐ shì shéi?", translation: "Кто ты?", category: "life", red: true },
    { id: 54, chinese: "试试看", pinyin: "shì shì kàn", translation: "Попробуй", category: "life", red: true },
    { id: 55, chinese: "太棒了", pinyin: "tài bàng le", translation: "Потрясающе", category: "life", red: true },
    { id: 56, chinese: "不用了", pinyin: "bù yòng le", translation: "Не надо", category: "life", red: true },
    { id: 57, chinese: "别担心", pinyin: "bié dān xīn", translation: "Не волнуйся", category: "life", red: true },
    { id: 58, chinese: "注意安全", pinyin: "zhù yì ān quán", translation: "Будь осторожен", category: "travel", red: true },
    { id: 59, chinese: "久等了", pinyin: "jiǔ děng le", translation: "Извините, что заставил ждать", category: "life", red: true },
    { id: 60, chinese: "一路顺风", pinyin: "yī lù shùn fēng", translation: "Счастливого пути", category: "travel", red: true },

    // ============================================================
    // ГРУППА 3: ВОПРОСЫ И ОТВЕТЫ (61-90)
    // ============================================================
    { id: 61, chinese: "怎么办？", pinyin: "zěn me bàn?", translation: "Что делать?", category: "life", red: true },
    { id: 62, chinese: "你怎么了？", pinyin: "nǐ zěn me le?", translation: "Что с тобой?", category: "life", red: true },
    { id: 63, chinese: "等一等", pinyin: "děng yi děng", translation: "Подожди", category: "life", red: true },
    { id: 64, chinese: "我不介意", pinyin: "wǒ bù jiè yì", translation: "Я не против", category: "life", red: true },
    { id: 65, chinese: "我答应你", pinyin: "wǒ dā ying nǐ", translation: "Я обещаю тебе", category: "life", red: true },
    { id: 66, chinese: "坐吧", pinyin: "zuò ba", translation: "Садись", category: "life", red: true },
    { id: 67, chinese: "吃饭了", pinyin: "chī fàn le", translation: "Пора есть", category: "food", red: true },
    { id: 68, chinese: "我不知道", pinyin: "wǒ bù zhī dào", translation: "Я не знаю", category: "life", red: true },
    { id: 69, chinese: "小心点", pinyin: "xiǎo xīn diǎn", translation: "Осторожнее", category: "life", red: true },
    { id: 70, chinese: "请进", pinyin: "qǐng jìn", translation: "Входите", category: "life", red: true },
    { id: 71, chinese: "辛苦了", pinyin: "xīn kǔ le", translation: "Спасибо за труды", category: "work", red: true },
    { id: 72, chinese: "明天见", pinyin: "míng tiān jiàn", translation: "Увидимся завтра", category: "life", red: true },
    { id: 73, chinese: "真厉害", pinyin: "zhēn lì hài", translation: "Круто", category: "life", red: true },
    { id: 74, chinese: "太贵了", pinyin: "tài guì le", translation: "Слишком дорого", category: "travel", red: true },
    { id: 75, chinese: "世界杯", pinyin: "shì jiè bēi", translation: "Чемпионат мира", category: "life", red: true },
    { id: 76, chinese: "关灯", pinyin: "guān dēng", translation: "Выключи свет", category: "life", red: true },
    { id: 77, chinese: "开灯", pinyin: "kāi dēng", translation: "Включи свет", category: "life", red: true },
    { id: 78, chinese: "我还没准备好", pinyin: "wǒ hái méi zhǔn bèi hǎo", translation: "Я ещё не готов", category: "life", red: true },
    { id: 79, chinese: "我马上到", pinyin: "wǒ mǎ shàng dào", translation: "Я сейчас буду", category: "life", red: true },
    { id: 80, chinese: "别着急", pinyin: "bié zháo jí", translation: "Не торопись", category: "life", red: true },
    { id: 81, chinese: "几点了？", pinyin: "jǐ diǎn le?", translation: "Который час?", category: "life", red: true },
    { id: 82, chinese: "新头像", pinyin: "xīn tóu xiàng", translation: "Новая аватарка", category: "life", red: true },
    { id: 83, chinese: "没关系", pinyin: "méi guān xi", translation: "Ничего", category: "life", red: true },
    { id: 84, chinese: "不好意思", pinyin: "bù hǎo yì si", translation: "Извините", category: "life", red: true },
    { id: 85, chinese: "你想吃什么？", pinyin: "nǐ xiǎng chī shén me?", translation: "Что хочешь поесть?", category: "food", red: true },
    { id: 86, chinese: "你决定吧", pinyin: "nǐ jué dìng ba", translation: "Ты решай", category: "life", red: true },
    { id: 87, chinese: "吃火锅", pinyin: "chī huǒ guō", translation: "Есть хого", category: "food", red: true },
    { id: 88, chinese: "时间不早了", pinyin: "shí jiān bù zǎo le", translation: "Уже поздно", category: "life", red: true },
    { id: 89, chinese: "路上小心", pinyin: "lù shang xiǎo xīn", translation: "Осторожно в дороге", category: "travel", red: true },
    { id: 90, chinese: "能帮我吗？", pinyin: "néng bāng wǒ ma?", translation: "Можешь мне помочь?", category: "life", red: true },

    // ============================================================
    // ГРУППА 4: РАБОТА И УЧЁБА (91-120)
    // ============================================================
    { id: 91, chinese: "没问题", pinyin: "méi wèn tí", translation: "Без проблем", category: "work", red: true },
    { id: 92, chinese: "谢谢你", pinyin: "xiè xiè nǐ", translation: "Спасибо", category: "life", red: true },
    { id: 93, chinese: "手机坏了", pinyin: "shǒu jī huài le", translation: "Телефон сломался", category: "life", red: true },
    { id: 94, chinese: "去修一下", pinyin: "qù xiū yī xià", translation: "Сходить починить", category: "life", red: true },
    { id: 95, chinese: "找到新工作", pinyin: "zhǎo dào xīn gōng zuò", translation: "Нашёл новую работу", category: "work", red: true },
    { id: 96, chinese: "很高兴认识你", pinyin: "hěn gāo xìng rèn shi nǐ", translation: "Приятно познакомиться", category: "life", red: true },
    { id: 97, chinese: "我也是", pinyin: "wǒ yě shì", translation: "Я тоже", category: "life", red: true },
    { id: 98, chinese: "欢迎欢迎", pinyin: "huān yíng huān yíng", translation: "Добро пожаловать", category: "life", red: true },
    { id: 99, chinese: "别客气", pinyin: "bié kè qi", translation: "Не стесняйся", category: "life", red: true },
    { id: 100, chinese: "太好吃了", pinyin: "tài hǎo chī le", translation: "Очень вкусно", category: "food", red: true },
    { id: 101, chinese: "谢谢款待", pinyin: "xiè xie kuǎn dài", translation: "Спасибо за угощение", category: "food", red: true },
    { id: 102, chinese: "多少钱？", pinyin: "duō shao qián?", translation: "Сколько стоит?", category: "travel", red: true },
    { id: 103, chinese: "快点", pinyin: "kuài diǎn", translation: "Быстрее", category: "life", red: true },
    { id: 104, chinese: "等一会儿", pinyin: "děng yī huìr", translation: "Подожди немного", category: "life", red: true },
    { id: 105, chinese: "好久不见", pinyin: "hǎo jiǔ bù jiàn", translation: "Давно не виделись", category: "life", red: true },
    { id: 106, chinese: "沟通", pinyin: "gōu tōng", translation: "Общаться", category: "work", red: true },
    { id: 107, chinese: "联系", pinyin: "lián xì", translation: "Связь", category: "work", red: true },
    { id: 108, chinese: "确认", pinyin: "què rèn", translation: "Подтвердить", category: "work", red: true },
    { id: 109, chinese: "邮件", pinyin: "yóu jiàn", translation: "Письмо", category: "work", red: true },
    { id: 110, chinese: "马上", pinyin: "mǎ shàng", translation: "Сейчас", category: "life", red: true },
    { id: 111, chinese: "发送", pinyin: "fā sòng", translation: "Отправить", category: "work", red: true },
    { id: 112, chinese: "推迟", pinyin: "tuī chí", translation: "Отложить", category: "work", red: true },
    { id: 113, chinese: "安排", pinyin: "ān pái", translation: "Организовать", category: "work", red: true },
    { id: 114, chinese: "很慢", pinyin: "hěn màn", translation: "Очень медленно", category: "life", red: true },
    { id: 115, chinese: "提前", pinyin: "tí qián", translation: "Заранее", category: "work", red: true },
    { id: 116, chinese: "尽快", pinyin: "jǐn kuài", translation: "Как можно скорее", category: "work", red: true },
    { id: 117, chinese: "议程", pinyin: "yì chéng", translation: "Повестка дня", category: "work", red: true },
    { id: 118, chinese: "主持", pinyin: "zhǔ chí", translation: "Ведущий", category: "work", red: true },
    { id: 119, chinese: "准时", pinyin: "zhǔn shí", translation: "Вовремя", category: "work", red: true },
    { id: 120, chinese: "记录", pinyin: "jì lù", translation: "Запись", category: "work", red: true },

    // ============================================================
    // ГРУППА 5: ПОГОДА И ПУТЕШЕСТВИЯ (121-150)
    // ============================================================
    { id: 121, chinese: "会议", pinyin: "huì yì", translation: "Совещание", category: "work", red: true },
    { id: 122, chinese: "开会", pinyin: "kāi huì", translation: "Проводить совещание", category: "work", red: true },
    { id: 123, chinese: "昨天下雨了", pinyin: "zuó tiān xià yǔ le", translation: "Вчера был дождь", category: "travel", red: true },
    { id: 124, chinese: "明天下雪", pinyin: "míng tiān xià xuě", translation: "Завтра будет снег", category: "travel", red: true },
    { id: 125, chinese: "阴天", pinyin: "yīn tiān", translation: "Пасмурно", category: "travel", red: true },
    { id: 126, chinese: "今天晴天", pinyin: "jīn tiān qíng tiān", translation: "Сегодня солнечно", category: "travel", red: true },
    { id: 127, chinese: "大风", pinyin: "dà fēng", translation: "Сильный ветер", category: "travel", red: true },
    { id: 128, chinese: "雨天", pinyin: "yǔ tiān", translation: "Дождливый день", category: "travel", red: true },
    { id: 129, chinese: "今天天气怎么样？", pinyin: "jīn tiān tiān qì zěn me yàng?", translation: "Какая сегодня погода?", category: "travel", red: true },
    { id: 130, chinese: "多云", pinyin: "duō yún", translation: "Облачно", category: "travel", red: true },
    { id: 131, chinese: "去机场", pinyin: "qù jī chǎng", translation: "Ехать в аэропорт", category: "travel", red: true },
    { id: 132, chinese: "火车站", pinyin: "huǒ chē zhàn", translation: "Вокзал", category: "travel", red: true },
    { id: 133, chinese: "出租车", pinyin: "chū zū chē", translation: "Такси", category: "travel", red: true },
    { id: 134, chinese: "地铁", pinyin: "dì tiě", translation: "Метро", category: "travel", red: true },
    { id: 135, chinese: "公交车", pinyin: "gōng jiāo chē", translation: "Автобус", category: "travel", red: true },
    { id: 136, chinese: "去哪儿？", pinyin: "qù nǎr?", translation: "Куда едем?", category: "travel", red: true },
    { id: 137, chinese: "左转", pinyin: "zuǒ zhuǎn", translation: "Повернуть налево", category: "travel", red: true },
    { id: 138, chinese: "右转", pinyin: "yòu zhuǎn", translation: "Повернуть направо", category: "travel", red: true },
    { id: 139, chinese: "直走", pinyin: "zhí zǒu", translation: "Идти прямо", category: "travel", red: true },
    { id: 140, chinese: "红绿灯", pinyin: "hóng lǜ dēng", translation: "Светофор", category: "travel", red: true },
    { id: 141, chinese: "走路", pinyin: "zǒu lù", translation: "Идти пешком", category: "travel", red: true },
    { id: 142, chinese: "开车", pinyin: "kāi chē", translation: "Вести машину", category: "travel", red: true },
    { id: 143, chinese: "停车", pinyin: "tíng chē", translation: "Парковаться", category: "travel", red: true },
    { id: 144, chinese: "加油站", pinyin: "jiā yóu zhàn", translation: "Заправка", category: "travel", red: true },
    { id: 145, chinese: "护照", pinyin: "hù zhào", translation: "Паспорт", category: "travel", red: true },
    { id: 146, chinese: "签证", pinyin: "qiān zhèng", translation: "Виза", category: "travel", red: true },
    { id: 147, chinese: "行李箱", pinyin: "xíng lǐ xiāng", translation: "Чемодан", category: "travel", red: true },
    { id: 148, chinese: "登机", pinyin: "dēng jī", translation: "Посадка на рейс", category: "travel", red: true },
    { id: 149, chinese: "飞机", pinyin: "fēi jī", translation: "Самолёт", category: "travel", red: true },
    { id: 150, chinese: "船", pinyin: "chuán", translation: "Корабль", category: "travel", red: true },

    // ============================================================
    // ГРУППА 6: МАГАЗИНЫ И ПОКУПКИ (151-180)
    // ============================================================
    { id: 151, chinese: "超市", pinyin: "chāo shì", translation: "Супермаркет", category: "shop", red: true },
    { id: 152, chinese: "商店", pinyin: "shāng diàn", translation: "Магазин", category: "shop", red: true },
    { id: 153, chinese: "买东西", pinyin: "mǎi dōng xi", translation: "Покупать вещи", category: "shop", red: true },
    { id: 154, chinese: "卖东西", pinyin: "mài dōng xi", translation: "Продавать вещи", category: "shop", red: true },
    { id: 155, chinese: "便宜", pinyin: "pián yi", translation: "Дёшево", category: "shop", red: true },
    { id: 156, chinese: "贵", pinyin: "guì", translation: "Дорого", category: "shop", red: true },
    { id: 157, chinese: "打折", pinyin: "dǎ zhé", translation: "Скидка", category: "shop", red: true },
    { id: 158, chinese: "现金", pinyin: "xiàn jīn", translation: "Наличные", category: "shop", red: true },
    { id: 159, chinese: "信用卡", pinyin: "xìn yòng kǎ", translation: "Кредитная карта", category: "shop", red: true },
    { id: 160, chinese: "微信支付", pinyin: "wēi xìn zhī fù", translation: "WeChat Pay", category: "shop", red: true },
    { id: 161, chinese: "支付宝", pinyin: "zhī fù bǎo", translation: "Alipay", category: "shop", red: true },
    { id: 162, chinese: "试一下", pinyin: "shì yī xià", translation: "Примерить", category: "shop", red: true },
    { id: 163, chinese: "尺码", pinyin: "chǐ mǎ", translation: "Размер", category: "shop", red: true },
    { id: 164, chinese: "颜色", pinyin: "yán sè", translation: "Цвет", category: "shop", red: true },
    { id: 165, chinese: "红色", pinyin: "hóng sè", translation: "Красный", category: "shop", red: true },
    { id: 166, chinese: "蓝色", pinyin: "lán sè", translation: "Синий", category: "shop", red: true },
    { id: 167, chinese: "白色", pinyin: "bái sè", translation: "Белый", category: "shop", red: true },
    { id: 168, chinese: "黑色", pinyin: "hēi sè", translation: "Чёрный", category: "shop", red: true },
    { id: 169, chinese: "黄色", pinyin: "huáng sè", translation: "Жёлтый", category: "shop", red: true },
    { id: 170, chinese: "绿色", pinyin: "lǜ sè", translation: "Зелёный", category: "shop", red: true },
    { id: 171, chinese: "衣服", pinyin: "yī fu", translation: "Одежда", category: "shop", red: true },
    { id: 172, chinese: "鞋子", pinyin: "xié zi", translation: "Обувь", category: "shop", red: true },
    { id: 173, chinese: "包", pinyin: "bāo", translation: "Сумка", category: "shop", red: true },
    { id: 174, chinese: "手机", pinyin: "shǒu jī", translation: "Телефон", category: "shop", red: true },
    { id: 175, chinese: "电脑", pinyin: "diàn nǎo", translation: "Компьютер", category: "shop", red: true },
    { id: 176, chinese: "多少钱一斤？", pinyin: "duō shao qián yī jīn?", translation: "Сколько за полкило?", category: "shop", red: true },
    { id: 177, chinese: "太贵了，便宜点", pinyin: "tài guì le, pián yi diǎn", translation: "Слишком дорого, дешевле", category: "shop", red: true },
    { id: 178, chinese: "我要这个", pinyin: "wǒ yào zhè ge", translation: "Я хочу это", category: "shop", red: true },
    { id: 179, chinese: "帮我包起来", pinyin: "bāng wǒ bāo qǐ lái", translation: "Упакуйте мне", category: "shop", red: true },
    { id: 180, chinese: "收据", pinyin: "shōu jù", translation: "Чек", category: "shop", red: true },

    // ============================================================
    // ГРУППА 7: ЕДА И НАПИТКИ (181-210)
    // ============================================================
    { id: 181, chinese: "米饭", pinyin: "mǐ fàn", translation: "Рис", category: "food", red: true },
    { id: 182, chinese: "面条", pinyin: "miàn tiáo", translation: "Лапша", category: "food", red: true },
    { id: 183, chinese: "饺子", pinyin: "jiǎo zi", translation: "Пельмени", category: "food", red: true },
    { id: 184, chinese: "包子", pinyin: "bāo zi", translation: "Паровые пирожки", category: "food", red: true },
    { id: 185, chinese: "汤", pinyin: "tāng", translation: "Суп", category: "food", red: true },
    { id: 186, chinese: "鱼", pinyin: "yú", translation: "Рыба", category: "food", red: true },
    { id: 187, chinese: "鸡肉", pinyin: "jī ròu", translation: "Курица", category: "food", red: true },
    { id: 188, chinese: "猪肉", pinyin: "zhū ròu", translation: "Свинина", category: "food", red: true },
    { id: 189, chinese: "牛肉", pinyin: "niú ròu", translation: "Говядина", category: "food", red: true },
    { id: 190, chinese: "蔬菜", pinyin: "shū cài", translation: "Овощи", category: "food", red: true },
    { id: 191, chinese: "水果", pinyin: "shuǐ guǒ", translation: "Фрукты", category: "food", red: true },
    { id: 192, chinese: "苹果", pinyin: "píng guǒ", translation: "Яблоко", category: "food", red: true },
    { id: 193, chinese: "香蕉", pinyin: "xiāng jiāo", translation: "Банан", category: "food", red: true },
    { id: 194, chinese: "水", pinyin: "shuǐ", translation: "Вода", category: "food", red: true },
    { id: 195, chinese: "茶", pinyin: "chá", translation: "Чай", category: "food", red: true },
    { id: 196, chinese: "咖啡", pinyin: "kā fēi", translation: "Кофе", category: "food", red: true },
    { id: 197, chinese: "啤酒", pinyin: "pí jiǔ", translation: "Пиво", category: "food", red: true },
    { id: 198, chinese: "果汁", pinyin: "guǒ zhī", translation: "Сок", category: "food", red: true },
    { id: 199, chinese: "菜单", pinyin: "cài dān", translation: "Меню", category: "food", red: true },
    { id: 200, chinese: "点菜", pinyin: "diǎn cài", translation: "Заказать еду", category: "food", red: true },
    { id: 201, chinese: "辣", pinyin: "là", translation: "Острый", category: "food", red: true },
    { id: 202, chinese: "咸", pinyin: "xián", translation: "Солёный", category: "food", red: true },
    { id: 203, chinese: "甜", pinyin: "tián", translation: "Сладкий", category: "food", red: true },
    { id: 204, chinese: "酸", pinyin: "suān", translation: "Кислый", category: "food", red: true },
    { id: 205, chinese: "好吃", pinyin: "hǎo chī", translation: "Вкусно", category: "food", red: true },
    { id: 206, chinese: "难吃", pinyin: "nán chī", translation: "Невкусно", category: "food", red: true },
    { id: 207, chinese: "点外卖", pinyin: "diǎn wài mài", translation: "Заказать доставку", category: "food", red: true },
    { id: 208, chinese: "服务员", pinyin: "fú wù yuán", translation: "Официант", category: "food", red: true },
    { id: 209, chinese: "筷子", pinyin: "kuài zi", translation: "Палочки для еды", category: "food", red: true },
    { id: 210, chinese: "碗", pinyin: "wǎn", translation: "Миска", category: "food", red: true },

    // ============================================================
    // ГРУППА 8: НОВЫЕ ФРАЗЫ (211-240) — включая ваши запросы
    // ============================================================
    { id: 211, chinese: "我懂了", pinyin: "wǒ dǒng le", translation: "Я понял", category: "life", red: true },
    { id: 212, chinese: "我明白了", pinyin: "wǒ míng bái le", translation: "Я понял (осознал)", category: "life", red: true },
    { id: 213, chinese: "我没听懂", pinyin: "wǒ méi tīng dǒng", translation: "Я не понял (на слух)", category: "life", red: true },
    { id: 214, chinese: "我不明白", pinyin: "wǒ bù míng bái", translation: "Я не понимаю", category: "life", red: true },
    { id: 215, chinese: "我没听清", pinyin: "wǒ méi tīng qīng", translation: "Я не расслышал", category: "life", red: true },
    { id: 216, chinese: "再说一遍", pinyin: "zài shuō yī biàn", translation: "Скажите ещё раз", category: "life", red: true },
    { id: 217, chinese: "我听你的", pinyin: "wǒ tīng nǐ de", translation: "Я слушаю тебя", category: "life", red: true },
    { id: 218, chinese: "你说吧", pinyin: "nǐ shuō ba", translation: "Говори / Я слушаю", category: "life", red: true },
    { id: 219, chinese: "我在听", pinyin: "wǒ zài tīng", translation: "Я слушаю", category: "life", red: true },
    { id: 220, chinese: "我告诉你", pinyin: "wǒ gào su nǐ", translation: "Я тебе скажу", category: "life", red: true },
    { id: 221, chinese: "跟你说", pinyin: "gēn nǐ shuō", translation: "Скажу тебе", category: "life", red: true },
    { id: 222, chinese: "我想睡觉", pinyin: "wǒ xiǎng shuì jiào", translation: "Я хочу спать", category: "life", red: true },
    { id: 223, chinese: "我困了", pinyin: "wǒ kùn le", translation: "Я хочу спать (устал)", category: "life", red: true },
    { id: 224, chinese: "我瞌睡了", pinyin: "wǒ kē shuì le", translation: "Меня клонит в сон", category: "life", red: true },
    { id: 225, chinese: "晚安", pinyin: "wǎn ān", translation: "Спокойной ночи", category: "life", red: true },
    { id: 226, chinese: "去超市", pinyin: "qù chāo shì", translation: "Пойти в супермаркет", category: "shop", red: true },
    { id: 227, chinese: "去商店", pinyin: "qù shāng diàn", translation: "Пойти в магазин", category: "shop", red: true },
    { id: 228, chinese: "去银行", pinyin: "qù yín háng", translation: "Пойти в банк", category: "life", red: true },
    { id: 229, chinese: "去医院", pinyin: "qù yī yuàn", translation: "Пойти в больницу", category: "life", red: true },
    { id: 230, chinese: "去公园", pinyin: "qù gōng yuán", translation: "Пойти в парк", category: "life", red: true },
    { id: 231, chinese: "去学校", pinyin: "qù xué xiào", translation: "Пойти в школу", category: "life", red: true },
    { id: 232, chinese: "去公司", pinyin: "qù gōng sī", translation: "Пойти на работу", category: "work", red: true },
    { id: 233, chinese: "回家去", pinyin: "huí jiā qù", translation: "Пойти домой", category: "life", red: true },
    { id: 234, chinese: "我走了", pinyin: "wǒ zǒu le", translation: "Я пошёл", category: "life", red: true },
    { id: 235, chinese: "我出发了", pinyin: "wǒ chū fā le", translation: "Я выезжаю", category: "travel", red: true },
    { id: 236, chinese: "我到了", pinyin: "wǒ dào le", translation: "Я пришёл / Приехал", category: "travel", red: true },
    { id: 237, chinese: "你在哪里？", pinyin: "nǐ zài nǎ lǐ?", translation: "Где ты?", category: "life", red: true },
    { id: 238, chinese: "需要帮忙吗？", pinyin: "xū yào bāng máng ma?", translation: "Нужна помощь?", category: "life", red: true },
    { id: 239, chinese: "不用谢", pinyin: "bù yòng xiè", translation: "Не за что", category: "life", red: true },
    { id: 240, chinese: "对不起", pinyin: "duì bu qǐ", translation: "Извините", category: "life", red: true },

    // ============================================================
    // ГРУППА 9: ДОПОЛНИТЕЛЬНЫЕ HSK-ФРАЗЫ (241-300)
    // ============================================================
    { id: 241, chinese: "今天", pinyin: "jīn tiān", translation: "Сегодня", category: "life", red: true },
    { id: 242, chinese: "明天", pinyin: "míng tiān", translation: "Завтра", category: "life", red: true },
    { id: 243, chinese: "昨天", pinyin: "zuó tiān", translation: "Вчера", category: "life", red: true },
    { id: 244, chinese: "现在", pinyin: "xiàn zài", translation: "Сейчас", category: "life", red: true },
    { id: 245, chinese: "马上", pinyin: "mǎ shàng", translation: "Немедленно", category: "life", red: true },
    { id: 246, chinese: "然后", pinyin: "rán hòu", translation: "Потом", category: "life", red: true },
    { id: 247, chinese: "以前", pinyin: "yǐ qián", translation: "Раньше", category: "life", red: true },
    { id: 248, chinese: "以后", pinyin: "yǐ hòu", translation: "Позже", category: "life", red: true },
    { id: 249, chinese: "经常", pinyin: "jīng cháng", translation: "Часто", category: "life", red: true },
    { id: 250, chinese: "有时候", pinyin: "yǒu shí hou", translation: "Иногда", category: "life", red: true },
    { id: 251, chinese: "很少", pinyin: "hěn shǎo", translation: "Редко", category: "life", red: true },
    { id: 252, chinese: "每天", pinyin: "měi tiān", translation: "Каждый день", category: "life", red: true },
    { id: 253, chinese: "今年", pinyin: "jīn nián", translation: "В этом году", category: "life", red: true },
    { id: 254, chinese: "明年", pinyin: "míng nián", translation: "В следующем году", category: "life", red: true },
    { id: 255, chinese: "去年", pinyin: "qù nián", translation: "В прошлом году", category: "life", red: true },
    { id: 256, chinese: "一", pinyin: "yī", translation: "Один", category: "num", red: true },
    { id: 257, chinese: "二", pinyin: "èr", translation: "Два", category: "num", red: true },
    { id: 258, chinese: "三", pinyin: "sān", translation: "Три", category: "num", red: true },
    { id: 259, chinese: "四", pinyin: "sì", translation: "Четыре", category: "num", red: true },
    { id: 260, chinese: "五", pinyin: "wǔ", translation: "Пять", category: "num", red: true },
    { id: 261, chinese: "六", pinyin: "liù", translation: "Шесть", category: "num", red: true },
    { id: 262, chinese: "七", pinyin: "qī", translation: "Семь", category: "num", red: true },
    { id: 263, chinese: "八", pinyin: "bā", translation: "Восемь", category: "num", red: true },
    { id: 264, chinese: "九", pinyin: "jiǔ", translation: "Девять", category: "num", red: true },
    { id: 265, chinese: "十", pinyin: "shí", translation: "Десять", category: "num", red: true },
    { id: 266, chinese: "百", pinyin: "bǎi", translation: "Сто", category: "num", red: true },
    { id: 267, chinese: "千", pinyin: "qiān", translation: "Тысяча", category: "num", red: true },
    { id: 268, chinese: "万", pinyin: "wàn", translation: "Десять тысяч", category: "num", red: true },
    { id: 269, chinese: "块", pinyin: "kuài", translation: "Куай (деньги)", category: "shop", red: true },
    { id: 270, chinese: "毛", pinyin: "máo", translation: "Мао (10 фэней)", category: "shop", red: true },

    // ============================================================
    // ГРУППА 10: ЕЩЁ БЫТОВЫЕ ФРАЗЫ (271-300)
    // ============================================================
    { id: 271, chinese: "你喜欢什么？", pinyin: "nǐ xǐ huān shén me?", translation: "Что ты любишь?", category: "life", red: true },
    { id: 272, chinese: "我喜欢你", pinyin: "wǒ xǐ huān nǐ", translation: "Я тебя люблю", category: "life", red: true },
    { id: 273, chinese: "你想去哪？", pinyin: "nǐ xiǎng qù nǎ?", translation: "Куда хочешь пойти?", category: "life", red: true },
    { id: 274, chinese: "我们一起吧", pinyin: "wǒ men yī qǐ ba", translation: "Давай вместе", category: "life", red: true },
    { id: 275, chinese: "你呢？", pinyin: "nǐ ne?", translation: "А ты?", category: "life", red: true },
    { id: 276, chinese: "好的", pinyin: "hǎo de", translation: "Хорошо", category: "life", red: true },
    { id: 277, chinese: "好的吧", pinyin: "hǎo de ba", translation: "Ну ладно", category: "life", red: true },
    { id: 278, chinese: "行", pinyin: "xíng", translation: "Окей / Можно", category: "life", red: true },
    { id: 279, chinese: "可以", pinyin: "kě yǐ", translation: "Можно", category: "life", red: true },
    { id: 280, chinese: "不行", pinyin: "bù xíng", translation: "Нельзя", category: "life", red: true },
    { id: 281, chinese: "等一下", pinyin: "děng yī xià", translation: "Подожди", category: "life", red: true },
    { id: 282, chinese: "很快", pinyin: "hěn kuài", translation: "Быстро", category: "life", red: true },
    { id: 283, chinese: "慢点", pinyin: "màn diǎn", translation: "Помедленнее", category: "life", red: true },
    { id: 284, chinese: "小心", pinyin: "xiǎo xīn", translation: "Осторожно", category: "life", red: true },
    { id: 285, chinese: "加油", pinyin: "jiā yóu", translation: "Держись!", category: "life", red: true },
    { id: 286, chinese: "放心", pinyin: "fàng xīn", translation: "Будь спокоен", category: "life", red: true },
    { id: 287, chinese: "真有意思", pinyin: "zhēn yǒu yì si", translation: "Очень интересно", category: "life", red: true },
    { id: 288, chinese: "真好笑", pinyin: "zhēn hǎo xiào", translation: "Очень смешно", category: "life", red: true },
    { id: 289, chinese: "别胡说", pinyin: "bié hú shuō", translation: "Не говори ерунду", category: "life", red: true },
    { id: 290, chinese: "开玩笑", pinyin: "kāi wán xiào", translation: "Шутить", category: "life", red: true },
    { id: 291, chinese: "真的吗？", pinyin: "zhēn de ma?", translation: "Правда?", category: "life", red: true },
    { id: 292, chinese: "当然", pinyin: "dāng rán", translation: "Конечно", category: "life", red: true },
    { id: 293, chinese: "也许", pinyin: "yě xǔ", translation: "Может быть", category: "life", red: true },
    { id: 294, chinese: "可能", pinyin: "kě néng", translation: "Возможно", category: "life", red: true },
    { id: 295, chinese: "一定", pinyin: "yī dìng", translation: "Обязательно", category: "life", red: true },
    { id: 296, chinese: "最好", pinyin: "zuì hǎo", translation: "Лучше всего", category: "life", red: true },
    { id: 297, chinese: "应该", pinyin: "yīng gāi", translation: "Следует / Должен", category: "life", red: true },
    { id: 298, chinese: "可以吗？", pinyin: "kě yǐ ma?", translation: "Можно?", category: "life", red: true },
    { id: 299, chinese: "没问题", pinyin: "méi wèn tí", translation: "Без проблем", category: "life", red: true },
    { id: 300, chinese: "再见", pinyin: "zài jiàn", translation: "До свидания", category: "life", red: true },

    // ============================================================
    // ГРУППА 11: ЭМОЦИИ И ЧУВСТВА (301-330)
    // ============================================================
    { id: 301, chinese: "我很开心", pinyin: "wǒ hěn kāixīn", translation: "Я очень рад", category: "emotion", red: true },
    { id: 302, chinese: "我很难过", pinyin: "wǒ hěn nánguò", translation: "Мне очень грустно", category: "emotion", red: true },
    { id: 303, chinese: "我生气", pinyin: "wǒ shēngqì", translation: "Я злюсь", category: "emotion", red: true },
    { id: 304, chinese: "我害怕", pinyin: "wǒ hàipà", translation: "Мне страшно", category: "emotion", red: true },
    { id: 305, chinese: "我很紧张", pinyin: "wǒ hěn jǐnzhāng", translation: "Я нервничаю", category: "emotion", red: true },
    { id: 306, chinese: "我很担心", pinyin: "wǒ hěn dānxīn", translation: "Я волнуюсь", category: "emotion", red: true },
    { id: 307, chinese: "我觉得好累", pinyin: "wǒ juéde hǎo lèi", translation: "Я чувствую себя уставшим", category: "emotion", red: true },
    { id: 308, chinese: "我觉得很开心", pinyin: "wǒ juéde hěn kāixīn", translation: "Я чувствую себя счастливым", category: "emotion", red: true },
    { id: 309, chinese: "不要生气", pinyin: "bùyào shēngqì", translation: "Не злись", category: "emotion", red: true },
    { id: 310, chinese: "别害怕", pinyin: "bié hàipà", translation: "Не бойся", category: "emotion", red: true },
    { id: 311, chinese: "放轻松", pinyin: "fàng qīngsōng", translation: "Расслабься", category: "emotion", red: true },
    { id: 312, chinese: "冷静一点", pinyin: "lěngjìng yīdiǎn", translation: "Успокойся", category: "emotion", red: true },
    { id: 313, chinese: "我羡慕你", pinyin: "wǒ xiànmù nǐ", translation: "Я тебе завидую", category: "emotion", red: true },
    { id: 314, chinese: "我觉得很幸福", pinyin: "wǒ juéde hěn xìngfú", translation: "Я чувствую себя счастливым", category: "emotion", red: true },
    { id: 315, chinese: "我失望了", pinyin: "wǒ shīwàng le", translation: "Я разочарован", category: "emotion", red: true },
    { id: 316, chinese: "我受够了", pinyin: "wǒ shòugòu le", translation: "С меня хватит", category: "emotion", red: true },
    { id: 317, chinese: "我很无聊", pinyin: "wǒ hěn wúliáo", translation: "Мне скучно", category: "emotion", red: true },
    { id: 318, chinese: "好无聊啊", pinyin: "hǎo wúliáo a", translation: "Как скучно", category: "emotion", red: true },
    { id: 319, chinese: "真烦", pinyin: "zhēn fán", translation: "Раздражает", category: "emotion", red: true },
    { id: 320, chinese: "气死我了", pinyin: "qì sǐ wǒ le", translation: "Бесит / Я в бешенстве", category: "emotion", red: true },
    { id: 321, chinese: "太好了！", pinyin: "tài hǎo le!", translation: "Замечательно!", category: "emotion", red: true },
    { id: 322, chinese: "真糟糕", pinyin: "zhēn zāogāo", translation: "Ужасно", category: "emotion", red: true },
    { id: 323, chinese: "太可惜了", pinyin: "tài kěxí le", translation: "Очень жаль", category: "emotion", red: true },
    { id: 324, chinese: "真让人担心", pinyin: "zhēn ràng rén dānxīn", translation: "Это вызывает беспокойство", category: "emotion", red: true },
    { id: 325, chinese: "别难过", pinyin: "bié nánguò", translation: "Не грусти", category: "emotion", red: true },
    { id: 326, chinese: "别担心", pinyin: "bié dānxīn", translation: "Не волнуйся", category: "emotion", red: true },
    { id: 327, chinese: "我觉得不错", pinyin: "wǒ juéde bùcuò", translation: "Я думаю, неплохо", category: "emotion", red: true },
    { id: 328, chinese: "我感觉很好", pinyin: "wǒ gǎnjué hěn hǎo", translation: "Я чувствую себя хорошо", category: "emotion", red: true },
    { id: 329, chinese: "我心情不好", pinyin: "wǒ xīnqíng bù hǎo", translation: "У меня плохое настроение", category: "emotion", red: true },
    { id: 330, chinese: "我心情很好", pinyin: "wǒ xīnqíng hěn hǎo", translation: "У меня хорошее настроение", category: "emotion", red: true },

    // ============================================================
    // ГРУППА 12: СЕМЬЯ И ДРУЗЬЯ (331-360)
    // ============================================================
    { id: 331, chinese: "爸爸", pinyin: "bàba", translation: "Папа", category: "family", red: true },
    { id: 332, chinese: "妈妈", pinyin: "māma", translation: "Мама", category: "family", red: true },
    { id: 333, chinese: "哥哥", pinyin: "gēge", translation: "Старший брат", category: "family", red: true },
    { id: 334, chinese: "姐姐", pinyin: "jiějie", translation: "Старшая сестра", category: "family", red: true },
    { id: 335, chinese: "弟弟", pinyin: "dìdi", translation: "Младший брат", category: "family", red: true },
    { id: 336, chinese: "妹妹", pinyin: "mèimei", translation: "Младшая сестра", category: "family", red: true },
    { id: 337, chinese: "朋友", pinyin: "péngyou", translation: "Друг", category: "family", red: true },
    { id: 338, chinese: "女朋友", pinyin: "nǚ péngyou", translation: "Девушка (партнёр)", category: "family", red: true },
    { id: 339, chinese: "男朋友", pinyin: "nán péngyou", translation: "Парень (партнёр)", category: "family", red: true },
    { id: 340, chinese: "老师", pinyin: "lǎoshī", translation: "Учитель", category: "family", red: true },
    { id: 341, chinese: "学生", pinyin: "xuésheng", translation: "Ученик", category: "family", red: true },
    { id: 342, chinese: "同事", pinyin: "tóngshì", translation: "Коллега", category: "work", red: true },
    { id: 343, chinese: "邻居", pinyin: "línjū", translation: "Сосед", category: "family", red: true },
    { id: 344, chinese: "我家人", pinyin: "wǒ jiārén", translation: "Моя семья", category: "family", red: true },
    { id: 345, chinese: "你的家人", pinyin: "nǐ de jiārén", translation: "Твоя семья", category: "family", red: true },
    { id: 346, chinese: "他有孩子吗？", pinyin: "tā yǒu háizi ma?", translation: "У него есть дети?", category: "family", red: true },
    { id: 347, chinese: "我结婚了", pinyin: "wǒ jiéhūn le", translation: "Я женат / Замужем", category: "family", red: true },
    { id: 348, chinese: "你结婚了吗？", pinyin: "nǐ jiéhūn le ma?", translation: "Ты женат/замужем?", category: "family", red: true },
    { id: 349, chinese: "我单身", pinyin: "wǒ dānshēn", translation: "Я холост / Не замужем", category: "family", red: true },
    { id: 350, chinese: "我爱我的家人", pinyin: "wǒ ài wǒ de jiārén", translation: "Я люблю свою семью", category: "family", red: true },

    // ============================================================
    // ГРУППА 13: ЗДОРОВЬЕ И ТЕЛО (361-390)
    // ============================================================
    { id: 361, chinese: "我生病了", pinyin: "wǒ shēngbìng le", translation: "Я заболел", category: "health", red: true },
    { id: 362, chinese: "我感冒了", pinyin: "wǒ gǎnmào le", translation: "Я простудился", category: "health", red: true },
    { id: 363, chinese: "我头痛", pinyin: "wǒ tóutòng", translation: "У меня болит голова", category: "health", red: true },
    { id: 364, chinese: "我肚子痛", pinyin: "wǒ dùzi tòng", translation: "У меня болит живот", category: "health", red: true },
    { id: 365, chinese: "我发烧了", pinyin: "wǒ fāshāo le", translation: "У меня температура", category: "health", red: true },
    { id: 366, chinese: "吃药", pinyin: "chī yào", translation: "Принимать лекарства", category: "health", red: true },
    { id: 367, chinese: "看医生", pinyin: "kàn yīshēng", translation: "Идти к врачу", category: "health", red: true },
    { id: 368, chinese: "去医院", pinyin: "qù yīyuàn", translation: "Идти в больницу", category: "health", red: true },
    { id: 369, chinese: "你怎么样？", pinyin: "nǐ zěnmeyàng?", translation: "Как ты себя чувствуешь?", category: "health", red: true },
    { id: 370, chinese: "我身体很好", pinyin: "wǒ shēntǐ hěn hǎo", translation: "Я здоров", category: "health", red: true },
    { id: 371, chinese: "多休息", pinyin: "duō xiūxi", translation: "Больше отдыхай", category: "health", red: true },
    { id: 372, chinese: "多喝水", pinyin: "duō hē shuǐ", translation: "Пей больше воды", category: "health", red: true },
    { id: 373, chinese: "注意身体", pinyin: "zhùyì shēntǐ", translation: "Береги здоровье", category: "health", red: true },
    { id: 374, chinese: "运动", pinyin: "yùndòng", translation: "Спорт / Заниматься спортом", category: "health", red: true },
    { id: 375, chinese: "跑步", pinyin: "pǎobù", translation: "Бегать", category: "health", red: true },
    { id: 376, chinese: "游泳", pinyin: "yóuyǒng", translation: "Плавать", category: "health", red: true },
    { id: 377, chinese: "健身房", pinyin: "jiànshēnfáng", translation: "Тренажёрный зал", category: "health", red: true },
    { id: 378, chinese: "健康", pinyin: "jiànkāng", translation: "Здоровый", category: "health", red: true },
    { id: 379, chinese: "不健康", pinyin: "bù jiànkāng", translation: "Нездоровый", category: "health", red: true },
    { id: 380, chinese: "我睡得不好", pinyin: "wǒ shuì de bù hǎo", translation: "Я плохо сплю", category: "health", red: true },

    // ============================================================
    // ГРУППА 14: ВРЕМЯ И ДАТЫ (391-420)
    // ============================================================
    { id: 391, chinese: "星期一", pinyin: "xīngqī yī", translation: "Понедельник", category: "time", red: true },
    { id: 392, chinese: "星期二", pinyin: "xīngqī èr", translation: "Вторник", category: "time", red: true },
    { id: 393, chinese: "星期三", pinyin: "xīngqī sān", translation: "Среда", category: "time", red: true },
    { id: 394, chinese: "星期四", pinyin: "xīngqī sì", translation: "Четверг", category: "time", red: true },
    { id: 395, chinese: "星期五", pinyin: "xīngqī wǔ", translation: "Пятница", category: "time", red: true },
    { id: 396, chinese: "星期六", pinyin: "xīngqī liù", translation: "Суббота", category: "time", red: true },
    { id: 397, chinese: "星期日", pinyin: "xīngqī rì", translation: "Воскресенье", category: "time", red: true },
    { id: 398, chinese: "周一", pinyin: "zhōu yī", translation: "Пн (коротко)", category: "time", red: true },
    { id: 399, chinese: "周末", pinyin: "zhōumò", translation: "Выходные", category: "time", red: true },
    { id: 400, chinese: "这周", pinyin: "zhè zhōu", translation: "На этой неделе", category: "time", red: true },
    { id: 401, chinese: "下周", pinyin: "xià zhōu", translation: "На следующей неделе", category: "time", red: true },
    { id: 402, chinese: "上周", pinyin: "shàng zhōu", translation: "На прошлой неделе", category: "time", red: true },
    { id: 403, chinese: "早上", pinyin: "zǎoshang", translation: "Утро", category: "time", red: true },
    { id: 404, chinese: "中午", pinyin: "zhōngwǔ", translation: "Полдень", category: "time", red: true },
    { id: 405, chinese: "下午", pinyin: "xiàwǔ", translation: "День", category: "time", red: true },
    { id: 406, chinese: "晚上", pinyin: "wǎnshang", translation: "Вечер", category: "time", red: true },
    { id: 407, chinese: "今天早上", pinyin: "jīntiān zǎoshang", translation: "Сегодня утром", category: "time", red: true },
    { id: 408, chinese: "今天晚上", pinyin: "jīntiān wǎnshang", translation: "Сегодня вечером", category: "time", red: true },
    { id: 409, chinese: "昨天早上", pinyin: "zuótiān zǎoshang", translation: "Вчера утром", category: "time", red: true },
    { id: 410, chinese: "明天晚上", pinyin: "míngtiān wǎnshang", translation: "Завтра вечером", category: "time", red: true },

    // ============================================================
    // ГРУППА 15: ИНТЕРНЕТ И ТЕХНОЛОГИИ (421-440)
    // ============================================================
    { id: 421, chinese: "网络", pinyin: "wǎngluò", translation: "Интернет", category: "tech", red: true },
    { id: 422, chinese: "WiFi", pinyin: "WiFi", translation: "WiFi", category: "tech", red: true },
    { id: 423, chinese: "密码", pinyin: "mìmǎ", translation: "Пароль", category: "tech", red: true },
    { id: 424, chinese: "电脑", pinyin: "diànnǎo", translation: "Компьютер", category: "tech", red: true },
    { id: 425, chinese: "手机", pinyin: "shǒujī", translation: "Телефон", category: "tech", red: true },
    { id: 426, chinese: "充电", pinyin: "chōngdiàn", translation: "Заряжать", category: "tech", red: true },
    { id: 427, chinese: "电池", pinyin: "diànchí", translation: "Батарея", category: "tech", red: true },
    { id: 428, chinese: "下载", pinyin: "xiàzài", translation: "Скачать", category: "tech", red: true },
    { id: 429, chinese: "上传", pinyin: "shàngchuán", translation: "Загрузить", category: "tech", red: true },
    { id: 430, chinese: "拍照", pinyin: "pāizhào", translation: "Фотографировать", category: "tech", red: true },
    { id: 431, chinese: "视频", pinyin: "shìpín", translation: "Видео", category: "tech", red: true },
    { id: 432, chinese: "打电话", pinyin: "dǎ diànhuà", translation: "Звонить по телефону", category: "tech", red: true },
    { id: 433, chinese: "发信息", pinyin: "fā xìnxī", translation: "Отправить сообщение", category: "tech", red: true },
    { id: 434, chinese: "微信", pinyin: "Wēixìn", translation: "WeChat", category: "tech", red: true },
    { id: 435, chinese: "抖音", pinyin: "Dǒuyīn", translation: "TikTok (китайский)", category: "tech", red: true },
    { id: 436, chinese: "上网", pinyin: "shàngwǎng", translation: "Выходить в интернет", category: "tech", red: true },
    { id: 437, chinese: "搜索", pinyin: "sōusuǒ", translation: "Искать (в интернете)", category: "tech", red: true },
    { id: 438, chinese: "导航", pinyin: "dǎoháng", translation: "Навигация", category: "tech", red: true },
    { id: 439, chinese: "应用", pinyin: "yìngyòng", translation: "Приложение", category: "tech", red: true },
    { id: 440, chinese: "软件", pinyin: "ruǎnjiàn", translation: "Программа", category: "tech", red: true },

    // ============================================================
    // ГРУППА 16: ПРИРОДА И ЖИВОТНЫЕ (441-460)
    // ============================================================
    { id: 441, chinese: "动物", pinyin: "dòngwù", translation: "Животное", category: "nature", red: true },
    { id: 442, chinese: "猫", pinyin: "māo", translation: "Кошка", category: "nature", red: true },
    { id: 443, chinese: "狗", pinyin: "gǒu", translation: "Собака", category: "nature", red: true },
    { id: 444, chinese: "鸟", pinyin: "niǎo", translation: "Птица", category: "nature", red: true },
    { id: 445, chinese: "花", pinyin: "huā", translation: "Цветок", category: "nature", red: true },
    { id: 446, chinese: "树", pinyin: "shù", translation: "Дерево", category: "nature", red: true },
    { id: 447, chinese: "草", pinyin: "cǎo", translation: "Трава", category: "nature", red: true },
    { id: 448, chinese: "山", pinyin: "shān", translation: "Гора", category: "nature", red: true },
    { id: 449, chinese: "水", pinyin: "shuǐ", translation: "Вода", category: "nature", red: true },
    { id: 450, chinese: "天空", pinyin: "tiānkōng", translation: "Небо", category: "nature", red: true },
    { id: 451, chinese: "月亮", pinyin: "yuèliang", translation: "Луна", category: "nature", red: true },
    { id: 452, chinese: "星星", pinyin: "xīngxing", translation: "Звезда", category: "nature", red: true },
    { id: 453, chinese: "太阳", pinyin: "tàiyáng", translation: "Солнце", category: "nature", red: true },
    { id: 454, chinese: "海", pinyin: "hǎi", translation: "Море", category: "nature", red: true },
    { id: 455, chinese: "河", pinyin: "hé", translation: "Река", category: "nature", red: true },
    { id: 456, chinese: "湖", pinyin: "hú", translation: "Озеро", category: "nature", red: true },
    { id: 457, chinese: "森林", pinyin: "sēnlín", translation: "Лес", category: "nature", red: true },
    { id: 458, chinese: "公园", pinyin: "gōngyuán", translation: "Парк", category: "nature", red: true },
    { id: 459, chinese: "花园", pinyin: "huāyuán", translation: "Сад", category: "nature", red: true },
    { id: 460, chinese: "大自然", pinyin: "dàzìrán", translation: "Природа", category: "nature", red: true },

    // ============================================================
    // ГРУППА 17: ЕЩЁ БЫТОВЫЕ ФРАЗЫ (461-500)
    // ============================================================
    { id: 461, chinese: "你忙吗？", pinyin: "nǐ máng ma?", translation: "Ты занят?", category: "life", red: true },
    { id: 462, chinese: "我有点忙", pinyin: "wǒ yǒudiǎn máng", translation: "Я немного занят", category: "life", red: true },
    { id: 463, chinese: "我不忙", pinyin: "wǒ bù máng", translation: "Я не занят", category: "life", red: true },
    { id: 464, chinese: "等很久了吗？", pinyin: "děng hěn jiǔ le ma?", translation: "Долго ждал?", category: "life", red: true },
    { id: 465, chinese: "你今天开心吗？", pinyin: "nǐ jīntiān kāixīn ma?", translation: "Ты сегодня рад?", category: "emotion", red: true },
    { id: 466, chinese: "你今天怎么样？", pinyin: "nǐ jīntiān zěnmeyàng?", translation: "Как твой день?", category: "life", red: true },
    { id: 467, chinese: "祝你生日快乐！", pinyin: "zhù nǐ shēngrì kuàilè!", translation: "С днём рождения!", category: "life", red: true },
    { id: 468, chinese: "新年快乐！", pinyin: "xīnnián kuàilè!", translation: "С Новым годом!", category: "life", red: true },
    { id: 469, chinese: "圣诞节快乐！", pinyin: "shèngdàn jié kuàilè!", translation: "С Рождеством!", category: "life", red: true },
    { id: 470, chinese: "我爱你", pinyin: "wǒ ài nǐ", translation: "Я тебя люблю", category: "life", red: true },
    { id: 471, chinese: "我想你", pinyin: "wǒ xiǎng nǐ", translation: "Я скучаю по тебе", category: "life", red: true },
    { id: 472, chinese: "我等你", pinyin: "wǒ děng nǐ", translation: "Я жду тебя", category: "life", red: true },
    { id: 473, chinese: "别走", pinyin: "bié zǒu", translation: "Не уходи", category: "life", red: true },
    { id: 474, chinese: "留下", pinyin: "liúxià", translation: "Остаться", category: "life", red: true },
    { id: 475, chinese: "等等我", pinyin: "děng děng wǒ", translation: "Подожди меня", category: "life", red: true },
    { id: 476, chinese: "我会回来的", pinyin: "wǒ huì huílái de", translation: "Я вернусь", category: "life", red: true },
    { id: 477, chinese: "我马上回来", pinyin: "wǒ mǎshàng huílái", translation: "Я скоро вернусь", category: "life", red: true },
    { id: 478, chinese: "你最近在忙什么？", pinyin: "nǐ zuìjìn zài máng shénme?", translation: "Чем ты занят в последнее время?", category: "life", red: true },
    { id: 479, chinese: "我最近很忙", pinyin: "wǒ zuìjìn hěn máng", translation: "Я последнее время очень занят", category: "life", red: true },
    { id: 480, chinese: "有空吗？", pinyin: "yǒu kòng ma?", translation: "Есть свободное время?", category: "life", red: true },

    // ============================================================
    // АНАЛОГИ (red: false) — 100+ шт.
    // ============================================================
    
    // ---- Аналоги к "я понял" ----
    { id: 481, chinese: "我知道了", pinyin: "wǒ zhīdào le", translation: "Я знаю / Понял", category: "life", red: false },
    { id: 482, chinese: "收到", pinyin: "shōudào", translation: "Понял (получил)", category: "life", red: false },
    { id: 483, chinese: "明白", pinyin: "míngbái", translation: "Понятно", category: "life", red: false },
    { id: 484, chinese: "懂了", pinyin: "dǒng le", translation: "Понял (коротко)", category: "life", red: false },

    // ---- Аналоги к "я не понял" ----
    { id: 485, chinese: "你说什么？", pinyin: "nǐ shuō shénme?", translation: "Что ты сказал?", category: "life", red: false },
    { id: 486, chinese: "什么意思？", pinyin: "shénme yìsi?", translation: "Что значит?", category: "life", red: false },
    { id: 487, chinese: "能再说一遍吗？", pinyin: "néng zài shuō yībiàn ma?", translation: "Можете повторить?", category: "life", red: false },

    // ---- Аналоги к "я хочу спать" ----
    { id: 488, chinese: "我想休息", pinyin: "wǒ xiǎng xiūxi", translation: "Я хочу отдохнуть", category: "life", red: false },
    { id: 489, chinese: "我很困", pinyin: "wǒ hěn kùn", translation: "Мне очень хочется спать", category: "life", red: false },
    { id: 490, chinese: "我瞌睡了", pinyin: "wǒ kēshuì le", translation: "Меня клонит в сон", category: "life", red: false },
    { id: 491, chinese: "我要睡了", pinyin: "wǒ yào shuì le", translation: "Я иду спать", category: "life", red: false },

    // ---- Аналоги к "я слушаю" ----
    { id: 492, chinese: "我洗耳恭听", pinyin: "wǒ xǐ'ěr gōngtīng", translation: "Я весь внимание", category: "life", red: false },
    { id: 493, chinese: "你说", pinyin: "nǐ shuō", translation: "Говори", category: "life", red: false },
    { id: 494, chinese: "请讲", pinyin: "qǐng jiǎng", translation: "Пожалуйста, говорите", category: "life", red: false },

    // ---- Аналоги к бытовым фразам ----
    { id: 495, chinese: "我选好了", pinyin: "wǒ xuǎn hǎo le", translation: "Я выбрал", category: "life", red: false },
    { id: 496, chinese: "我打回去", pinyin: "wǒ dǎ huíqù", translation: "Я перезвоню", category: "life", red: false },
    { id: 497, chinese: "我很好", pinyin: "wǒ hěn hǎo", translation: "У меня всё хорошо", category: "life", red: false },
    { id: 498, chinese: "我记住了", pinyin: "wǒ jì zhù le", translation: "Я запомнил", category: "life", red: false },
    { id: 499, chinese: "抱歉，来晚了", pinyin: "bàoqiàn, lái wǎn le", translation: "Простите, пришёл поздно", category: "life", red: false },
    { id: 500, chinese: "小心", pinyin: "xiǎoxīn", translation: "Осторожно", category: "travel", red: false },
    { id: 501, chinese: "我送你回家", pinyin: "wǒ sòng nǐ huí jiā", translation: "Я провожу тебя домой", category: "travel", red: false },
    { id: 502, chinese: "回家吧", pinyin: "huí jiā ba", translation: "Давай вернёмся домой", category: "travel", red: false },
    { id: 503, chinese: "我考虑考虑", pinyin: "wǒ kǎolǜ kǎolǜ", translation: "Я подумаю", category: "life", red: false },
    { id: 504, chinese: "我不饿", pinyin: "wǒ bù è", translation: "Я не голоден", category: "food", red: false },
    { id: 505, chinese: "别想了", pinyin: "bié xiǎng le", translation: "Даже не думай", category: "life", red: false },
    { id: 506, chinese: "我留在这儿", pinyin: "wǒ liú zài zhèr", translation: "Я останусь здесь", category: "life", red: false },
    { id: 507, chinese: "我时间很紧", pinyin: "wǒ shíjiān hěn jǐn", translation: "У меня мало времени", category: "life", red: false },
    { id: 508, chinese: "结账", pinyin: "jié zhàng", translation: "Счёт", category: "food", red: false },
    { id: 509, chinese: "绝对是真的", pinyin: "juéduì shì zhēn de", translation: "Абсолютно правда", category: "life", red: false },
    { id: 510, chinese: "让一下", pinyin: "ràng yī xià", translation: "Пропустите", category: "travel", red: false },
    { id: 511, chinese: "以后再说", pinyin: "yǐhòu zài shuō", translation: "Потом поговорим", category: "life", red: false },
    { id: 512, chinese: "你肯定吗？", pinyin: "nǐ kěndìng ma?", translation: "Ты уверен?", category: "life", red: false },
    { id: 513, chinese: "干得漂亮", pinyin: "gàn de piàoliang", translation: "Красиво сделано", category: "work", red: false },
    { id: 514, chinese: "你真牛", pinyin: "nǐ zhēn niú", translation: "Ты мощный", category: "life", red: false },
    { id: 515, chinese: "我们去庆祝吧", pinyin: "wǒmen qù qìngzhù ba", translation: "Давай отметим", category: "life", red: false },
    { id: 516, chinese: "我反对", pinyin: "wǒ fǎnduì", translation: "Я против", category: "life", red: false },
    { id: 517, chinese: "我忘了", pinyin: "wǒ wàng le", translation: "Я забыл", category: "life", red: false },
    { id: 518, chinese: "我困了", pinyin: "wǒ kùn le", translation: "Я хочу спать", category: "life", red: false },
    { id: 519, chinese: "拿去", pinyin: "ná qù", translation: "Возьми", category: "life", red: false },
    { id: 520, chinese: "猜猜看", pinyin: "cāi cāi kàn", translation: "Угадай", category: "life", red: false },
    { id: 521, chinese: "交给我吧", pinyin: "jiāo gěi wǒ ba", translation: "Оставь это мне", category: "life", red: false },
    { id: 522, chinese: "把门关上", pinyin: "bǎ mén guān shàng", translation: "Закрой дверь", category: "life", red: false },
    { id: 523, chinese: "你在哪里？", pinyin: "nǐ zài nǎlǐ?", translation: "Где ты?", category: "life", red: false },
    { id: 524, chinese: "我讨厌", pinyin: "wǒ tǎoyàn", translation: "Я ненавижу", category: "life", red: false },
    { id: 525, chinese: "最近好吗？", pinyin: "zuìjìn hǎo ma?", translation: "Как дела?", category: "life", red: false },
    { id: 526, chinese: "别说话", pinyin: "bié shuōhuà", translation: "Не говори", category: "life", red: false },
    { id: 527, chinese: "你好了吗？", pinyin: "nǐ hǎo le ma?", translation: "Ты готов?", category: "life", red: false },
    { id: 528, chinese: "快起床", pinyin: "kuài qǐchuáng", translation: "Быстро вставай", category: "life", red: false },
    { id: 529, chinese: "我吃好了", pinyin: "wǒ chī hǎo le", translation: "Я поел", category: "food", red: false },
    { id: 530, chinese: "我好饿", pinyin: "wǒ hǎo è", translation: "Я очень голоден", category: "food", red: false },
    { id: 531, chinese: "我该走了", pinyin: "wǒ gāi zǒu le", translation: "Мне пора идти", category: "travel", red: false },
    { id: 532, chinese: "帮个忙", pinyin: "bāng gè máng", translation: "Сделай одолжение", category: "life", red: false },
    { id: 533, chinese: "我得走了", pinyin: "wǒ děi zǒu le", translation: "Мне нужно идти", category: "travel", red: false },
    { id: 534, chinese: "够了够了", pinyin: "gòu le gòu le", translation: "Хватит-хватит", category: "life", red: false },
    { id: 535, chinese: "要下雨了", pinyin: "yào xià yǔ le", translation: "Собирается дождь", category: "travel", red: false },
    { id: 536, chinese: "打扰一下", pinyin: "dǎrǎo yīxià", translation: "Извините на секунду", category: "life", red: false },
    { id: 537, chinese: "你在干嘛？", pinyin: "nǐ zài gàn má?", translation: "Что делаешь?", category: "life", red: false },
    { id: 538, chinese: "这是什么意思？", pinyin: "zhè shì shénme yìsi?", translation: "Что это значит?", category: "life", red: false },
    { id: 539, chinese: "你哪位？", pinyin: "nǐ nǎ wèi?", translation: "Кто вы?", category: "life", red: false },
    { id: 540, chinese: "试试吧", pinyin: "shì shì ba", translation: "Попробуй", category: "life", red: false },
    { id: 541, chinese: "太好了", pinyin: "tài hǎo le", translation: "Отлично", category: "life", red: false },
    { id: 542, chinese: "不要了", pinyin: "bù yào le", translation: "Не надо", category: "life", red: false },
    { id: 543, chinese: "别着急", pinyin: "bié zháojí", translation: "Не переживай", category: "life", red: false },
    { id: 544, chinese: "小心安全", pinyin: "xiǎoxīn ānquán", translation: "Береги себя", category: "travel", red: false },
    { id: 545, chinese: "让你久等了", pinyin: "ràng nǐ jiǔ děng le", translation: "Заставил ждать", category: "life", red: false },
    { id: 546, chinese: "怎么处理？", pinyin: "zěnme chǔlǐ?", translation: "Как решить?", category: "life", red: false },
    { id: 547, chinese: "你没事吧？", pinyin: "nǐ méi shì ba?", translation: "Ты в порядке?", category: "life", red: false },
    { id: 548, chinese: "等一下", pinyin: "děng yīxià", translation: "Подожди", category: "life", red: false },
    { id: 549, chinese: "无所谓", pinyin: "wúsuǒwèi", translation: "Без разницы", category: "life", red: false },
    { id: 550, chinese: "我保证", pinyin: "wǒ bǎozhèng", translation: "Я гарантирую", category: "life", red: false },
];

// ============================================================
// 2. ДИАЛОГИ (15 шт.)
// ============================================================

const redBookDialogues = [
    // ----- ДИАЛОГ 1: Опоздание -----
    {
        id: "d1",
        title: "Опоздание на встречу",
        phrases: ["对不起，迟到了", "久等了", "我赶时间", "没关系"],
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
        phrases: ["吃什么？", "我饿了", "我吃饱了", "买单", "点菜", "菜单", "好吃"],
        lines: [
            { speaker: "A", chinese: "我饿了，我们吃什么？", pinyin: "wǒ è le, wǒmen chī shénme?", russian: "Я голоден, что будем есть?" },
            { speaker: "B", chinese: "你想吃什么？", pinyin: "nǐ xiǎng chī shénme?", russian: "Что хочешь?" },
            { speaker: "A", chinese: "随便，你决定吧。", pinyin: "suíbiàn, nǐ juédìng ba.", russian: "Мне всё равно, ты решай." },
            { speaker: "B", chinese: "那吃火锅吧！", pinyin: "nà chī huǒguō ba!", russian: "Тогда давай хого!" },
            { speaker: "A", chinese: "好的！我要点菜。", pinyin: "hǎo de! wǒ yào diǎn cài.", russian: "Хорошо! Я хочу заказать." },
            { speaker: "B", chinese: "服务员，菜单！", pinyin: "fúwùyuán, càidān!", russian: "Официант, меню!" },
            { speaker: "A", chinese: "这个鱼很好吃！", pinyin: "zhège yú hěn hǎochī!", russian: "Эта рыба очень вкусная!" },
            { speaker: "B", chinese: "我吃饱了，吃得太多了。", pinyin: "wǒ chī bǎo le, chī de tài duō le.", russian: "Я наелся, слишком много съел." },
            { speaker: "A", chinese: "那我们买单吧。", pinyin: "nà wǒmen mǎi dān ba.", russian: "Тогда давай оплатим." },
            { speaker: "B", chinese: "好，买单！", pinyin: "hǎo, mǎi dān!", russian: "Хорошо, счёт!" },
        ],
    },

    // ----- ДИАЛОГ 3: Прощание -----
    {
        id: "d3",
        title: "Прощание",
        phrases: ["我要走了", "明天见", "注意安全", "一路顺风", "再见"],
        lines: [
            { speaker: "A", chinese: "时间不早了，我要走了。", pinyin: "shíjiān bù zǎo le, wǒ yào zǒu le.", russian: "Уже поздно, мне пора идти." },
            { speaker: "B", chinese: "好的，明天见！", pinyin: "hǎo de, míngtiān jiàn!", russian: "Хорошо, увидимся завтра!" },
            { speaker: "A", chinese: "明天见！", pinyin: "míngtiān jiàn!", russian: "Увидимся завтра!" },
            { speaker: "B", chinese: "路上小心，注意安全！", pinyin: "lùshang xiǎoxīn, zhùyì ānquán!", russian: "Осторожно в дороге, береги себя!" },
            { speaker: "A", chinese: "谢谢，你也是！一路顺风！", pinyin: "xièxie, nǐ yě shì! yīlù shùnfēng!", russian: "Спасибо, ты тоже! Счастливого пути!" },
            { speaker: "B", chinese: "再见！", pinyin: "zàijiàn!", russian: "До свидания!" },
        ],
    },

    // ----- ДИАЛОГ 4: Помощь -----
    {
        id: "d4",
        title: "Просьба о помощи",
        phrases: ["帮我个忙", "你放心吧", "我答应你", "做得好", "需要帮忙吗？", "没问题"],
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
        phrases: ["怎么办？", "我不知道", "再考虑一下", "我不介意", "你说吧", "怎么处理？"],
        lines: [
            { speaker: "A", chinese: "我的手机坏了，怎么办？", pinyin: "wǒ de shǒujī huài le, zěnme bàn?", russian: "У меня телефон сломался, что делать?" },
            { speaker: "B", chinese: "我也不知道，去修一下吧。", pinyin: "wǒ yě bù zhīdào, qù xiū yīxià ba.", russian: "Я тоже не знаю, сходи почини." },
            { speaker: "A", chinese: "大概要花多少钱？", pinyin: "dàgài yào huā duōshao qián?", russian: "Сколько это примерно будет стоить?" },
            { speaker: "B", chinese: "再考虑一下，别急着修。", pinyin: "zài kǎolǜ yīxià, bié jízhe xiū.", russian: "Подумай ещё, не торопись чинить." },
            { speaker: "A", chinese: "好吧，我不介意等几天。", pinyin: "hǎo ba, wǒ bù jièyì děng jǐ tiān.", russian: "Ладно, я не против подождать несколько дней." },
            { speaker: "B", chinese: "你说吧，怎么处理？", pinyin: "nǐ shuō ba, zěnme chǔlǐ?", russian: "Говори, как решать?" },
        ],
    },

    // ----- ДИАЛОГ 6: Хорошие новости -----
    {
        id: "d6",
        title: "Хорошие новости",
        phrases: ["太棒了", "真厉害", "庆祝一下", "你确定", "千真万确", "太好了"],
        lines: [
            { speaker: "A", chinese: "我找到新工作了！", pinyin: "wǒ zhǎodào xīn gōngzuò le!", russian: "Я нашёл новую работу!" },
            { speaker: "B", chinese: "真的吗？太棒了！", pinyin: "zhēn de ma? tài bàng le!", russian: "Правда? Потрясающе!" },
            { speaker: "A", chinese: "你确定是真的？", pinyin: "nǐ quèdìng shì zhēn de?", russian: "Ты уверен, что это правда?" },
            { speaker: "B", chinese: "千真万确！", pinyin: "qiān zhēn wàn què!", russian: "Абсолютно точно!" },
            { speaker: "A", chinese: "你真厉害！我们庆祝一下！", pinyin: "nǐ zhēn lìhài! wǒmen qìngzhù yīxià!", russian: "Ты крут! Давай отметим!" },
            { speaker: "B", chinese: "好！今晚一起吃饭！太好了！", pinyin: "hǎo! jīn wǎn yīqǐ chīfàn! tài hǎo le!", russian: "Хорошо! Сегодня вечером вместе поужинаем! Отлично!" },
        ],
    },

    // ----- ДИАЛОГ 7: Знакомство -----
    {
        id: "d7",
        title: "Знакомство",
        phrases: ["你叫什么名字？", "很高兴认识你", "你好厉害", "我也是", "欢迎欢迎", "你哪位？"],
        lines: [
            { speaker: "A", chinese: "你好！你叫什么名字？", pinyin: "nǐ hǎo! nǐ jiào shénme míngzi?", russian: "Привет! Как тебя зовут?" },
            { speaker: "B", chinese: "我叫安娜，你呢？", pinyin: "wǒ jiào Ānnà, nǐ ne?", russian: "Меня зовут Анна, а ты?" },
            { speaker: "A", chinese: "我叫小明。你是哪里人？", pinyin: "wǒ jiào Xiǎomíng. nǐ shì nǎlǐ rén?", russian: "Меня зовут Сяомин. Откуда ты?" },
            { speaker: "B", chinese: "我是俄罗斯人。你中文真好！", pinyin: "wǒ shì Éluósī rén. nǐ zhōngwén zhēn hǎo!", russian: "Я из России. У тебя отличный китайский!" },
            { speaker: "A", chinese: "谢谢！我觉得还行。", pinyin: "xièxie! wǒ juéde hái xíng.", russian: "Спасибо! Я думаю, нормально." },
            { speaker: "B", chinese: "真厉害！很高兴认识你！", pinyin: "zhēn lìhài! hěn gāoxìng rènshi nǐ!", russian: "Круто! Приятно познакомиться!" },
            { speaker: "A", chinese: "我也是！欢迎欢迎！", pinyin: "wǒ yě shì! huānyíng huānyíng!", russian: "Я тоже! Добро пожаловать!" },
        ],
    },

    // ----- ДИАЛОГ 8: В гостях -----
    {
        id: "d8",
        title: "В гостях",
        phrases: ["请进", "坐吧", "吃饭了", "我吃饱了", "辛苦了", "别客气"],
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

    // ----- ДИАЛОГ 9: В магазине -----
    {
        id: "d9",
        title: "В магазине",
        phrases: ["多少钱？", "太贵了", "便宜点", "我要这个", "试一下", "收据", "颜色", "尺码"],
        lines: [
            { speaker: "A", chinese: "你好，这个多少钱？", pinyin: "nǐ hǎo, zhège duōshao qián?", russian: "Здравствуйте, сколько это стоит?" },
            { speaker: "B", chinese: "这个三百块。", pinyin: "zhège sān bǎi kuài.", russian: "Это триста юаней." },
            { speaker: "A", chinese: "太贵了，便宜点吧。", pinyin: "tài guì le, piányi diǎn ba.", russian: "Слишком дорого, дайте подешевле." },
            { speaker: "B", chinese: "二百五，行吗？", pinyin: "èr bǎi wǔ, xíng ma?", russian: "Двести пятьдесят, идёт?" },
            { speaker: "A", chinese: "行！我要这个。我可以试一下吗？", pinyin: "xíng! wǒ yào zhège. wǒ kěyǐ shì yīxià ma?", russian: "Идёт! Я возьму это. Можно примерить?" },
            { speaker: "B", chinese: "可以，试衣间在那边。", pinyin: "kěyǐ, shìyījiān zài nàbiān.", russian: "Можно, примерочная там." },
            { speaker: "A", chinese: "有别的颜色吗？", pinyin: "yǒu bié de yánsè ma?", russian: "Есть другие цвета?" },
            { speaker: "B", chinese: "有红色和蓝色，这个尺码可以吗？", pinyin: "yǒu hóngsè hé lánsè, zhège chǐmǎ kěyǐ ma?", russian: "Есть красный и синий, этот размер подходит?" },
            { speaker: "A", chinese: "可以，我要了。给我收据。", pinyin: "kěyǐ, wǒ yào le. gěi wǒ shōujù.", russian: "Можно, я беру. Дайте мне чек." },
            { speaker: "B", chinese: "给你。谢谢！", pinyin: "gěi nǐ. xièxie!", russian: "Держите. Спасибо!" },
        ],
    },

    // ----- ДИАЛОГ 10: Планы на день -----
    {
        id: "d10",
        title: "Планы на день",
        phrases: ["今天天气怎么样？", "下雨了", "去超市", "我想睡觉", "快点", "等一会儿", "马上"],
        lines: [
            { speaker: "A", chinese: "今天天气怎么样？", pinyin: "jīntiān tiānqì zěnmeyàng?", russian: "Какая сегодня погода?" },
            { speaker: "B", chinese: "今天下雨了。", pinyin: "jīntiān xiàyǔ le.", russian: "Сегодня идёт дождь." },
            { speaker: "A", chinese: "那我们去超市吧？", pinyin: "nà wǒmen qù chāoshì ba?", russian: "Тогда пойдём в супермаркет?" },
            { speaker: "B", chinese: "好，等一会儿，我还没准备好。", pinyin: "hǎo, děng yīhuìr, wǒ hái méi zhǔnbèi hǎo.", russian: "Хорошо, подожди немного, я ещё не готов." },
            { speaker: "A", chinese: "快点！我想睡觉了。", pinyin: "kuài diǎn! wǒ xiǎng shuìjiào le.", russian: "Быстрее! Я хочу спать." },
            { speaker: "B", chinese: "马上！我来了！", pinyin: "mǎshàng! wǒ lái le!", russian: "Сейчас! Я иду!" },
        ],
    },

    // ----- ДИАЛОГ 11: В кафе -----
    {
        id: "d11",
        title: "В кафе",
        phrases: ["咖啡", "水", "菜单", "点菜", "好吃", "买单", "茶"],
        lines: [
            { speaker: "A", chinese: "你想喝什么？", pinyin: "nǐ xiǎng hē shénme?", russian: "Что хочешь выпить?" },
            { speaker: "B", chinese: "我要咖啡，你呢？", pinyin: "wǒ yào kāfēi, nǐ ne?", russian: "Я хочу кофе, а ты?" },
            { speaker: "A", chinese: "我要茶，谢谢！", pinyin: "wǒ yào chá, xièxie!", russian: "Я хочу чай, спасибо!" },
            { speaker: "B", chinese: "服务员，菜单！", pinyin: "fúwùyuán, càidān!", russian: "Официант, меню!" },
            { speaker: "A", chinese: "我们要点菜。", pinyin: "wǒmen yào diǎn cài.", russian: "Мы хотим заказать." },
            { speaker: "B", chinese: "这个蛋糕很好吃！", pinyin: "zhège dàngāo hěn hǎochī!", russian: "Этот торт очень вкусный!" },
            { speaker: "A", chinese: "太好了！买单吧。", pinyin: "tài hǎo le! mǎidān ba.", russian: "Отлично! Давай оплатим." },
        ],
    },

    // ----- ДИАЛОГ 12: Новые фразы (понимание и сон) -----
    {
        id: "d12",
        title: "Урок китайского",
        phrases: ["我懂了", "我明白了", "我没听懂", "再说一遍", "我想睡觉", "晚安", "我听你的"],
        lines: [
            { speaker: "A", chinese: "你听懂了吗？", pinyin: "nǐ tīng dǒng le ma?", russian: "Ты понял?" },
            { speaker: "B", chinese: "我懂了！", pinyin: "wǒ dǒng le!", russian: "Я понял!" },
            { speaker: "A", chinese: "那这个呢？", pinyin: "nà zhège ne?", russian: "А это?" },
            { speaker: "B", chinese: "我没听懂，再说一遍吧。", pinyin: "wǒ méi tīng dǒng, zài shuō yībiàn ba.", russian: "Я не понял, скажите ещё раз." },
            { speaker: "A", chinese: "好的，我明白了。", pinyin: "hǎo de, wǒ míngbái le.", russian: "Хорошо, я понял." },
            { speaker: "B", chinese: "现在很晚了，我想睡觉。", pinyin: "xiànzài hěn wǎn le, wǒ xiǎng shuìjiào.", russian: "Сейчас поздно, я хочу спать." },
            { speaker: "A", chinese: "好，晚安！我听你的。", pinyin: "hǎo, wǎn'ān! wǒ tīng nǐ de.", russian: "Хорошо, спокойной ночи! Я слушаюсь тебя." },
            { speaker: "B", chinese: "晚安！明天见！", pinyin: "wǎn'ān! míngtiān jiàn!", russian: "Спокойной ночи! Увидимся завтра!" },
        ],
    },

    // ----- ДИАЛОГ 13: В больнице -----
    {
        id: "d13",
        title: "В больнице",
        phrases: ["我生病了", "我头痛", "发烧了", "吃药", "看医生", "多休息", "注意身体"],
        lines: [
            { speaker: "A", chinese: "你怎么了？", pinyin: "nǐ zěnme le?", russian: "Что с тобой?" },
            { speaker: "B", chinese: "我生病了，头痛。", pinyin: "wǒ shēngbìng le, tóutòng.", russian: "Я заболел, голова болит." },
            { speaker: "A", chinese: "你发烧了吗？", pinyin: "nǐ fāshāo le ma?", russian: "У тебя температура?" },
            { speaker: "B", chinese: "对，我发烧了。", pinyin: "duì, wǒ fāshāo le.", russian: "Да, у меня температура." },
            { speaker: "A", chinese: "我们应该去医院看医生。", pinyin: "wǒmen yīnggāi qù yīyuàn kàn yīshēng.", russian: "Нам нужно в больницу к врачу." },
            { speaker: "B", chinese: "要吃药吗？", pinyin: "yào chī yào ma?", russian: "Нужно принимать лекарства?" },
            { speaker: "A", chinese: "对，吃药，多休息，注意身体。", pinyin: "duì, chī yào, duō xiūxi, zhùyì shēntǐ.", russian: "Да, лекарства, больше отдыхай, береги здоровье." },
        ],
    },

    // ----- ДИАЛОГ 14: Семья и друзья -----
    {
        id: "d14",
        title: "Семья и друзья",
        phrases: ["爸爸", "妈妈", "朋友", "家人", "你结婚了吗？", "我单身", "我爱我的家人"],
        lines: [
            { speaker: "A", chinese: "这是你的家人吗？", pinyin: "zhè shì nǐ de jiārén ma?", russian: "Это твоя семья?" },
            { speaker: "B", chinese: "对，这是我爸爸和妈妈。", pinyin: "duì, zhè shì wǒ bàba hé māma.", russian: "Да, это мой папа и мама." },
            { speaker: "A", chinese: "你有兄弟吗？", pinyin: "nǐ yǒu xiōngdì ma?", russian: "У тебя есть братья?" },
            { speaker: "B", chinese: "我有一个哥哥。", pinyin: "wǒ yǒu yīgè gēge.", russian: "У меня есть старший брат." },
            { speaker: "A", chinese: "你结婚了吗？", pinyin: "nǐ jiéhūn le ma?", russian: "Ты женат/замужем?" },
            { speaker: "B", chinese: "我单身。你呢？", pinyin: "wǒ dānshēn. nǐ ne?", russian: "Я холост. А ты?" },
            { speaker: "A", chinese: "我结婚了。我爱我的家人！", pinyin: "wǒ jiéhūn le. wǒ ài wǒ de jiārén!", russian: "Я женат. Я люблю свою семью!" },
        ],
    },

    // ----- ДИАЛОГ 15: Выходные и планы -----
    {
        id: "d15",
        title: "Выходные и планы",
        phrases: ["周末", "这周", "下周", "早上", "晚上", "公园", "运动", "跑步", "游泳"],
        lines: [
            { speaker: "A", chinese: "周末你做什么？", pinyin: "zhōumò nǐ zuò shénme?", russian: "Что ты делаешь на выходных?" },
            { speaker: "B", chinese: "我想去公园运动。", pinyin: "wǒ xiǎng qù gōngyuán yùndòng.", russian: "Я хочу пойти в парк заниматься спортом." },
            { speaker: "A", chinese: "你做什么运动？", pinyin: "nǐ zuò shénme yùndòng?", russian: "Каким спортом занимаешься?" },
            { speaker: "B", chinese: "我早上跑步，下午游泳。", pinyin: "wǒ zǎoshang pǎobù, xiàwǔ yóuyǒng.", russian: "Утром бегаю, днём плаваю." },
            { speaker: "A", chinese: "这周我可以跟你一起吗？", pinyin: "zhè zhōu wǒ kěyǐ gēn nǐ yīqǐ ma?", russian: "На этой неделе я могу пойти с тобой?" },
            { speaker: "B", chinese: "当然！星期六早上见！", pinyin: "dāngrán! xīngqīliù zǎoshang jiàn!", russian: "Конечно! Встретимся в субботу утром!" },
            { speaker: "A", chinese: "好！晚上我们一起吃饭吧！", pinyin: "hǎo! wǎnshang wǒmen yīqǐ chīfàn ba!", russian: "Хорошо! Вечером поужинаем вместе!" },
        ],
    },
    // ============================================================
// ДОПОЛНИТЕЛЬНЫЕ ДИАЛОГИ (16-30)
// ============================================================

// ----- ДИАЛОГ 16: В такси -----
{
    id: "d16",
    title: "В такси",
    phrases: ["出租车", "去哪儿？", "左转", "右转", "直走", "停车", "多少钱？", "机场"],
    lines: [
        { speaker: "A", chinese: "师傅，去机场。", pinyin: "shīfu, qù jīchǎng.", russian: "Водитель, в аэропорт." },
        { speaker: "B", chinese: "好的，您赶时间吗？", pinyin: "hǎo de, nín gǎn shíjiān ma?", russian: "Хорошо, вы спешите?" },
        { speaker: "A", chinese: "对，我赶时间，请快点。", pinyin: "duì, wǒ gǎn shíjiān, qǐng kuài diǎn.", russian: "Да, я спешу, пожалуйста, быстрее." },
        { speaker: "B", chinese: "前面左转还是右转？", pinyin: "qiánmiàn zuǒzhuǎn háishì yòuzhuǎn?", russian: "Впереди налево или направо?" },
        { speaker: "A", chinese: "左转，然后直走。", pinyin: "zuǒzhuǎn, ránhòu zhí zǒu.", russian: "Налево, потом прямо." },
        { speaker: "B", chinese: "到了，停车吗？", pinyin: "dào le, tíngchē ma?", russian: "Приехали, парковаться?" },
        { speaker: "A", chinese: "对，停车。多少钱？", pinyin: "duì, tíngchē. duōshao qián?", russian: "Да, остановитесь. Сколько?" },
        { speaker: "B", chinese: "八十块。", pinyin: "bāshí kuài.", russian: "Восемьдесят юаней." },
        { speaker: "A", chinese: "给你，谢谢！", pinyin: "gěi nǐ, xièxie!", russian: "Держите, спасибо!" },
    ],
},

// ----- ДИАЛОГ 17: Заказ еды по телефону -----
{
    id: "d17",
    title: "Заказ еды по телефону",
    phrases: ["点外卖", "菜单", "好吃", "米饭", "水", "多少钱？", "送餐"],
    lines: [
        { speaker: "A", chinese: "你好，我想点外卖。", pinyin: "nǐ hǎo, wǒ xiǎng diǎn wàimài.", russian: "Здравствуйте, я хочу заказать доставку." },
        { speaker: "B", chinese: "好的，您想点什么？", pinyin: "hǎo de, nín xiǎng diǎn shénme?", russian: "Хорошо, что хотите заказать?" },
        { speaker: "A", chinese: "我要一份炒饭和一杯水。", pinyin: "wǒ yào yī fèn chǎofàn hé yī bēi shuǐ.", russian: "Я хочу жареный рис и стакан воды." },
        { speaker: "B", chinese: "还要别的吗？", pinyin: "háiyào bié de ma?", russian: "Что-нибудь ещё?" },
        { speaker: "A", chinese: "不要了，多少钱？", pinyin: "bùyào le, duōshao qián?", russian: "Нет, сколько?" },
        { speaker: "B", chinese: "三十五块。", pinyin: "sānshíwǔ kuài.", russian: "Тридцать пять юаней." },
        { speaker: "A", chinese: "好，多久送到？", pinyin: "hǎo, duō jiǔ sòng dào?", russian: "Хорошо, через сколько доставят?" },
        { speaker: "B", chinese: "三十分钟。", pinyin: "sānshí fēnzhōng.", russian: "Через тридцать минут." },
        { speaker: "A", chinese: "谢谢！", pinyin: "xièxie!", russian: "Спасибо!" },
    ],
},

// ----- ДИАЛОГ 18: В гостинице -----
{
    id: "d18",
    title: "В гостинице",
    phrases: ["房间", "多少钱？", "护照", "钥匙", "早餐", "洗澡", "睡觉"],
    lines: [
        { speaker: "A", chinese: "你好，我要一个房间。", pinyin: "nǐ hǎo, wǒ yào yīgè fángjiān.", russian: "Здравствуйте, мне нужен номер." },
        { speaker: "B", chinese: "单人间还是双人间？", pinyin: "dānrénjiān háishì shuāngrénjiān?", russian: "Одноместный или двухместный?" },
        { speaker: "A", chinese: "单人间，多少钱一晚？", pinyin: "dānrénjiān, duōshao qián yī wǎn?", russian: "Одноместный, сколько за ночь?" },
        { speaker: "B", chinese: "三百块一晚。", pinyin: "sān bǎi kuài yī wǎn.", russian: "Триста юаней за ночь." },
        { speaker: "A", chinese: "可以，给我护照。", pinyin: "kěyǐ, gěi wǒ hùzhào.", russian: "Можно, дайте мне паспорт." },
        { speaker: "B", chinese: "这是您的钥匙，房间在二楼。", pinyin: "zhè shì nín de yàoshi, fángjiān zài èr lóu.", russian: "Это ваш ключ, номер на втором этаже." },
        { speaker: "A", chinese: "早餐有吗？", pinyin: "zǎocān yǒu ma?", russian: "Завтрак есть?" },
        { speaker: "B", chinese: "有，早上七点到九点。", pinyin: "yǒu, zǎoshang qī diǎn dào jiǔ diǎn.", russian: "Да, с семи до девяти утра." },
        { speaker: "A", chinese: "太好了，我要洗澡睡觉了。", pinyin: "tài hǎo le, wǒ yào xǐzǎo shuìjiào le.", russian: "Отлично, я пойду мыться и спать." },
    ],
},

// ----- ДИАЛОГ 19: Разговор о погоде -----
{
    id: "d19",
    title: "Разговор о погоде",
    phrases: ["天气", "今天天气怎么样？", "下雨", "晴天", "冷", "热", "舒服", "出门"],
    lines: [
        { speaker: "A", chinese: "今天天气怎么样？", pinyin: "jīntiān tiānqì zěnmeyàng?", russian: "Какая сегодня погода?" },
        { speaker: "B", chinese: "今天很冷，还下雨。", pinyin: "jīntiān hěn lěng, hái xiàyǔ.", russian: "Сегодня холодно, ещё и дождь." },
        { speaker: "A", chinese: "真的吗？昨天还很热。", pinyin: "zhēn de ma? zuótiān hái hěn rè.", russian: "Правда? Вчера ещё было жарко." },
        { speaker: "B", chinese: "对，天气变化很大。", pinyin: "duì, tiānqì biànhuà hěn dà.", russian: "Да, погода очень меняется." },
        { speaker: "A", chinese: "明天会晴天吗？", pinyin: "míngtiān huì qíngtiān ma?", russian: "Завтра будет солнечно?" },
        { speaker: "B", chinese: "天气预报说，明天晴天。", pinyin: "tiānqì yùbào shuō, míngtiān qíngtiān.", russian: "Прогноз погоды говорит, завтра будет солнечно." },
        { speaker: "A", chinese: "那太好了，我们可以出门。", pinyin: "nà tài hǎo le, wǒmen kěyǐ chūmén.", russian: "Отлично, мы сможем выйти из дома." },
        { speaker: "B", chinese: "对，天气很舒服。", pinyin: "duì, tiānqì hěn shūfu.", russian: "Да, погода будет комфортной." },
    ],
},

// ----- ДИАЛОГ 20: В банке -----
{
    id: "d20",
    title: "В банке",
    phrases: ["银行", "换钱", "现金", "信用卡", "汇率", "护照", "排队", "等待"],
    lines: [
        { speaker: "A", chinese: "你好，我想换钱。", pinyin: "nǐ hǎo, wǒ xiǎng huàn qián.", russian: "Здравствуйте, я хочу обменять деньги." },
        { speaker: "B", chinese: "好的，您要换多少？", pinyin: "hǎo de, nín yào huàn duōshao?", russian: "Хорошо, сколько хотите обменять?" },
        { speaker: "A", chinese: "我要换五百美元。汇率多少？", pinyin: "wǒ yào huàn wǔbǎi měiyuán. huìlǜ duōshao?", russian: "Я хочу обменять пятьсот долларов. Какой курс?" },
        { speaker: "B", chinese: "今天的汇率是六点八。", pinyin: "jīntiān de huìlǜ shì liù diǎn bā.", russian: "Сегодняшний курс — шесть целых восемь десятых." },
        { speaker: "A", chinese: "可以，给我现金。", pinyin: "kěyǐ, gěi wǒ xiànjīn.", russian: "Хорошо, дайте мне наличные." },
        { speaker: "B", chinese: "请出示您的护照。", pinyin: "qǐng chūshì nín de hùzhào.", russian: "Пожалуйста, покажите ваш паспорт." },
        { speaker: "A", chinese: "给你。要排队吗？", pinyin: "gěi nǐ. yào páiduì ma?", russian: "Держите. Нужно стоять в очереди?" },
        { speaker: "B", chinese: "对，请排队等待。", pinyin: "duì, qǐng páiduì děngdài.", russian: "Да, пожалуйста, стойте в очереди и ждите." },
    ],
},

// ----- ДИАЛОГ 21: На почте -----
{
    id: "d21",
    title: "На почте",
    phrases: ["邮件", "寄", "包裹", "邮票", "地址", "多少钱？", "收到"],
    lines: [
        { speaker: "A", chinese: "你好，我想寄一个包裹。", pinyin: "nǐ hǎo, wǒ xiǎng jì yīgè bāoguǒ.", russian: "Здравствуйте, я хочу отправить посылку." },
        { speaker: "B", chinese: "寄到哪里？", pinyin: "jì dào nǎlǐ?", russian: "Куда отправляете?" },
        { speaker: "A", chinese: "寄到俄罗斯。", pinyin: "jì dào Éluósī.", russian: "В Россию." },
        { speaker: "B", chinese: "要寄什么？", pinyin: "yào jì shénme?", russian: "Что отправляете?" },
        { speaker: "A", chinese: "一件衣服和两本书。", pinyin: "yī jiàn yīfu hé liǎng běn shū.", russian: "Одежду и две книги." },
        { speaker: "B", chinese: "地址写好了吗？", pinyin: "dìzhǐ xiě hǎo le ma?", russian: "Адрес написали?" },
        { speaker: "A", chinese: "写好了，给你。", pinyin: "xiě hǎo le, gěi nǐ.", russian: "Написал, держите." },
        { speaker: "B", chinese: "邮费是一百二十块。", pinyin: "yóufèi shì yībǎi èrshí kuài.", russian: "Почтовые расходы — сто двадцать юаней." },
        { speaker: "A", chinese: "多久能收到？", pinyin: "duō jiǔ néng shōudào?", russian: "Через сколько получат?" },
        { speaker: "B", chinese: "大概两周。", pinyin: "dàgài liǎng zhōu.", russian: "Примерно две недели." },
        { speaker: "A", chinese: "好的，谢谢！", pinyin: "hǎo de, xièxie!", russian: "Хорошо, спасибо!" },
    ],
},

// ----- ДИАЛОГ 22: В аптеке -----
{
    id: "d22",
    title: "В аптеке",
    phrases: ["药店", "感冒", "发烧", "吃药", "头痛", "医生", "中药", "西药"],
    lines: [
        { speaker: "A", chinese: "你好，我感冒了。", pinyin: "nǐ hǎo, wǒ gǎnmào le.", russian: "Здравствуйте, я простудился." },
        { speaker: "B", chinese: "有什么症状？", pinyin: "yǒu shénme zhèngzhuàng?", russian: "Какие симптомы?" },
        { speaker: "A", chinese: "头痛，还发烧。", pinyin: "tóutòng, hái fāshāo.", russian: "Голова болит, ещё и температура." },
        { speaker: "B", chinese: "这是感冒药，一天三次。", pinyin: "zhè shì gǎnmào yào, yītiān sān cì.", russian: "Это лекарство от простуды, три раза в день." },
        { speaker: "A", chinese: "要喝热水吗？", pinyin: "yào hē rè shuǐ ma?", russian: "Нужно пить горячую воду?" },
        { speaker: "B", chinese: "对，多喝热水，多休息。", pinyin: "duì, duō hē rè shuǐ, duō xiūxi.", russian: "Да, больше пейте горячей воды и отдыхайте." },
        { speaker: "A", chinese: "中药还是西药好？", pinyin: "zhōngyào háishì xīyào hǎo?", russian: "Китайские или западные лекарства лучше?" },
        { speaker: "B", chinese: "西药效果快，中药效果好。", pinyin: "xīyào xiàoguǒ kuài, zhōngyào xiàoguǒ hǎo.", russian: "Западные быстрее действуют, китайские лучше эффект." },
        { speaker: "A", chinese: "我吃西药吧，谢谢！", pinyin: "wǒ chī xīyào ba, xièxie!", russian: "Я возьму западные, спасибо!" },
    ],
},

// ----- ДИАЛОГ 23: В парикмахерской -----
{
    id: "d23",
    title: "В парикмахерской",
    phrases: ["剪头发", "长", "短", "好看", "颜色", "染发", "镜子", "满意"],
    lines: [
        { speaker: "A", chinese: "你好，我要剪头发。", pinyin: "nǐ hǎo, wǒ yào jiǎn tóufa.", russian: "Здравствуйте, я хочу подстричься." },
        { speaker: "B", chinese: "要剪短吗？", pinyin: "yào jiǎn duǎn ma?", russian: "Короче?" },
        { speaker: "A", chinese: "对，剪短一点。", pinyin: "duì, jiǎn duǎn yīdiǎn.", russian: "Да, немного короче." },
        { speaker: "B", chinese: "洗头吗？", pinyin: "xǐ tóu ma?", russian: "Мыть голову?" },
        { speaker: "A", chinese: "洗，谢谢！", pinyin: "xǐ, xièxie!", russian: "Да, спасибо!" },
        { speaker: "B", chinese: "剪好了，您看满意吗？", pinyin: "jiǎn hǎo le, nín kàn mǎnyì ma?", russian: "Всё готово, вы довольны?" },
        { speaker: "A", chinese: "好看！很满意！", pinyin: "hǎokàn! hěn mǎnyì!", russian: "Красиво! Очень доволен!" },
        { speaker: "B", chinese: "要染发吗？", pinyin: "yào rǎnfà ma?", russian: "Покрасить волосы?" },
        { speaker: "A", chinese: "不要了，下次吧。多少钱？", pinyin: "bùyào le, xiàcì ba. duōshao qián?", russian: "Нет, в следующий раз. Сколько?" },
        { speaker: "B", chinese: "五十块。", pinyin: "wǔshí kuài.", russian: "Пятьдесят юаней." },
        { speaker: "A", chinese: "给你，谢谢！", pinyin: "gěi nǐ, xièxie!", russian: "Держите, спасибо!" },
    ],
},

// ----- ДИАЛОГ 24: Планирование путешествия -----
{
    id: "d24",
    title: "Планирование путешествия",
    phrases: ["旅游", "飞机", "酒店", "景点", "护照", "签证", "行李箱", "地图"],
    lines: [
        { speaker: "A", chinese: "假期你去哪旅游？", pinyin: "jiàqī nǐ qù nǎ lǚyóu?", russian: "Куда поедешь в отпуск?" },
        { speaker: "B", chinese: "我去北京旅游。", pinyin: "wǒ qù Běijīng lǚyóu.", russian: "Я еду в Пекин." },
        { speaker: "A", chinese: "坐飞机还是火车？", pinyin: "zuò fēijī háishì huǒchē?", russian: "Самолётом или поездом?" },
        { speaker: "B", chinese: "坐飞机，快一点。", pinyin: "zuò fēijī, kuài yīdiǎn.", russian: "Самолётом, быстрее." },
        { speaker: "A", chinese: "酒店订好了吗？", pinyin: "jiǔdiàn dìng hǎo le ma?", russian: "Отель забронировал?" },
        { speaker: "B", chinese: "订好了，在市中心。", pinyin: "dìng hǎo le, zài shìzhōngxīn.", russian: "Да, в центре города." },
        { speaker: "A", chinese: "带行李箱吗？", pinyin: "dài xínglǐxiāng ma?", russian: "Берёшь чемодан?" },
        { speaker: "B", chinese: "带！还要带地图。", pinyin: "dài! háiyào dài dìtú.", russian: "Да! И карту возьму." },
        { speaker: "A", chinese: "护照和签证呢？", pinyin: "hùzhào hé qiānzhèng ne?", russian: "Паспорт и виза?" },
        { speaker: "B", chinese: "都准备好了！", pinyin: "dōu zhǔnbèi hǎo le!", russian: "Всё готово!" },
    ],
},

// ----- ДИАЛОГ 25: В спортзале -----
{
    id: "d25",
    title: "В спортзале",
    phrases: ["健身房", "运动", "跑步", "游泳", "健身", "身体", "健康", "累"],
    lines: [
        { speaker: "A", chinese: "你经常运动吗？", pinyin: "nǐ jīngcháng yùndòng ma?", russian: "Ты часто занимаешься спортом?" },
        { speaker: "B", chinese: "对，我每天都去健身房。", pinyin: "duì, wǒ měitiān dōu qù jiànshēnfáng.", russian: "Да, я каждый день хожу в спортзал." },
        { speaker: "A", chinese: "你做什么运动？", pinyin: "nǐ zuò shénme yùndòng?", russian: "Каким спортом занимаешься?" },
        { speaker: "B", chinese: "跑步和游泳。", pinyin: "pǎobù hé yóuyǒng.", russian: "Бегаю и плаваю." },
        { speaker: "A", chinese: "你身体很好！", pinyin: "nǐ shēntǐ hěn hǎo!", russian: "У тебя хорошее здоровье!" },
        { speaker: "B", chinese: "谢谢！运动让我健康。", pinyin: "xièxie! yùndòng ràng wǒ jiànkāng.", russian: "Спасибо! Спорт делает меня здоровым." },
        { speaker: "A", chinese: "我也想去健身房。", pinyin: "wǒ yě xiǎng qù jiànshēnfáng.", russian: "Я тоже хочу ходить в спортзал." },
        { speaker: "B", chinese: "跟我一起吧！", pinyin: "gēn wǒ yīqǐ ba!", russian: "Пойдём вместе!" },
        { speaker: "A", chinese: "好！不过会很累吧？", pinyin: "hǎo! bùguò huì hěn lèi ba?", russian: "Хорошо! Но будет тяжело, правда?" },
        { speaker: "B", chinese: "慢慢来，不着急。", pinyin: "mànmàn lái, bù zháojí.", russian: "Потихоньку, не торопись." },
    ],
},

// ----- ДИАЛОГ 26: День рождения -----
{
    id: "d26",
    title: "День рождения",
    phrases: ["生日快乐", "礼物", "蛋糕", "朋友", "开心", "庆祝", "唱歌", "许愿"],
    lines: [
        { speaker: "A", chinese: "生日快乐！", pinyin: "shēngrì kuàilè!", russian: "С днём рождения!" },
        { speaker: "B", chinese: "谢谢！", pinyin: "xièxie!", russian: "Спасибо!" },
        { speaker: "A", chinese: "这是给你的礼物。", pinyin: "zhè shì gěi nǐ de lǐwù.", russian: "Это тебе подарок." },
        { speaker: "B", chinese: "哇！是什么？", pinyin: "wā! shì shénme?", russian: "Вау! Что?" },
        { speaker: "A", chinese: "打开看看吧！", pinyin: "dǎkāi kànkan ba!", russian: "Открой и посмотри!" },
        { speaker: "B", chinese: "太漂亮了！我很开心！", pinyin: "tài piàoliang le! wǒ hěn kāixīn!", russian: "Очень красиво! Я очень рад!" },
        { speaker: "A", chinese: "还有蛋糕！", pinyin: "háiyǒu dàngāo!", russian: "Ещё и торт!" },
        { speaker: "B", chinese: "太棒了！我们一起庆祝吧！", pinyin: "tài bàng le! wǒmen yīqǐ qìngzhù ba!", russian: "Отлично! Давайте вместе отпразднуем!" },
        { speaker: "A", chinese: "先许愿，再唱歌！", pinyin: "xiān xǔyuàn, zài chànggē!", russian: "Сначала загадай желание, потом пой песню!" },
        { speaker: "B", chinese: "好的！我许愿了！", pinyin: "hǎo de! wǒ xǔyuàn le!", russian: "Хорошо! Я загадал желание!" },
    ],
},

// ----- ДИАЛОГ 27: Потеря вещей -----
{
    id: "d27",
    title: "Потеря вещей",
    phrases: ["丢了", "手机", "钱包", "怎么办？", "找", "警察", "急", "别急"],
    lines: [
        { speaker: "A", chinese: "我的手机丢了！怎么办？", pinyin: "wǒ de shǒujī diū le! zěnme bàn?", russian: "Я потерял телефон! Что делать?" },
        { speaker: "B", chinese: "别急，你记得在哪丢的吗？", pinyin: "bié jí, nǐ jìde zài nǎ diū de ma?", russian: "Не волнуйся, помнишь, где потерял?" },
        { speaker: "A", chinese: "可能在咖啡厅。", pinyin: "kěnéng zài kāfēitīng.", russian: "Возможно, в кафе." },
        { speaker: "B", chinese: "那我们回去找找。", pinyin: "nà wǒmen huíqù zhǎozhao.", russian: "Тогда вернёмся и поищем." },
        { speaker: "A", chinese: "如果找不到怎么办？", pinyin: "rúguǒ zhǎo bù dào zěnme bàn?", russian: "А если не найдём?" },
        { speaker: "B", chinese: "那就报警！", pinyin: "nà jiù bàojǐng!", russian: "Тогда вызывай полицию!" },
        { speaker: "A", chinese: "我的钱包也在里面！", pinyin: "wǒ de qiánbāo yě zài lǐmiàn!", russian: "Мой кошелёк тоже там!" },
        { speaker: "B", chinese: "别急，我们马上去找！", pinyin: "bié jí, wǒmen mǎshàng qù zhǎo!", russian: "Не волнуйся, мы сейчас пойдём искать!" },
    ],
},

// ----- ДИАЛОГ 28: О работе -----
{
    id: "d28",
    title: "Разговор о работе",
    phrases: ["工作", "忙", "累", "同事", "老板", "工资", "加班", "辞职"],
    lines: [
        { speaker: "A", chinese: "你最近工作怎么样？", pinyin: "nǐ zuìjìn gōngzuò zěnmeyàng?", russian: "Как у тебя в последнее время с работой?" },
        { speaker: "B", chinese: "很忙，也很累。", pinyin: "hěn máng, yě hěn lèi.", russian: "Очень занят и устал." },
        { speaker: "A", chinese: "你经常加班吗？", pinyin: "nǐ jīngcháng jiābān ma?", russian: "Ты часто работаешь сверхурочно?" },
        { speaker: "B", chinese: "对，最近每天加班。", pinyin: "duì, zuìjìn měitiān jiābān.", russian: "Да, в последнее время каждый день." },
        { speaker: "A", chinese: "你的老板怎么样？", pinyin: "nǐ de lǎobǎn zěnmeyàng?", russian: "Как твой начальник?" },
        { speaker: "B", chinese: "老板很好，但是工资不高。", pinyin: "lǎobǎn hěn hǎo, dànshì gōngzī bù gāo.", russian: "Начальник хороший, но зарплата маленькая." },
        { speaker: "A", chinese: "你想辞职吗？", pinyin: "nǐ xiǎng cízhí ma?", russian: "Хочешь уволиться?" },
        { speaker: "B", chinese: "我在考虑。", pinyin: "wǒ zài kǎolǜ.", russian: "Я думаю об этом." },
        { speaker: "A", chinese: "同事怎么样？", pinyin: "tóngshì zěnmeyàng?", russian: "Как коллеги?" },
        { speaker: "B", chinese: "同事很好，我喜欢他们！", pinyin: "tóngshì hěn hǎo, wǒ xǐhuān tāmen!", russian: "Коллеги хорошие, я их люблю!" },
    ],
},

// ----- ДИАЛОГ 29: В парке -----
{
    id: "d29",
    title: "В парке",
    phrases: ["公园", "散步", "花", "树", "鸟", "大自然", "舒服", "拍照"],
    lines: [
        { speaker: "A", chinese: "今天天气真好，我们去公园吧。", pinyin: "jīntiān tiānqì zhēn hǎo, wǒmen qù gōngyuán ba.", russian: "Сегодня погода отличная, давайте пойдём в парк." },
        { speaker: "B", chinese: "好主意！我们可以散步。", pinyin: "hǎo zhǔyi! wǒmen kěyǐ sànbù.", russian: "Хорошая идея! Мы можем прогуляться." },
        { speaker: "A", chinese: "你看那些花，太漂亮了！", pinyin: "nǐ kàn nàxiē huā, tài piàoliang le!", russian: "Посмотри на эти цветы, очень красивые!" },
        { speaker: "B", chinese: "还有树和鸟！", pinyin: "háiyǒu shù hé niǎo!", russian: "Ещё деревья и птицы!" },
        { speaker: "A", chinese: "大自然真美！", pinyin: "dàzìrán zhēn měi!", russian: "Природа очень красивая!" },
        { speaker: "B", chinese: "在这里真舒服。", pinyin: "zài zhèlǐ zhēn shūfu.", russian: "Здесь очень комфортно." },
        { speaker: "A", chinese: "我们拍照吧！", pinyin: "wǒmen pāizhào ba!", russian: "Давайте сфотографируемся!" },
        { speaker: "B", chinese: "好！笑一个！", pinyin: "hǎo! xiào yīgè!", russian: "Хорошо! Улыбнись!" },
        { speaker: "A", chinese: "这张照片很好看！", pinyin: "zhè zhāng zhàopiàn hěn hǎokàn!", russian: "Эта фотография очень красивая!" },
    ],
},

// ----- ДИАЛОГ 30: Поздравления и пожелания -----
{
    id: "d30",
    title: "Поздравления и пожелания",
    phrases: ["恭喜", "祝你好运", "加油", "新年快乐", "圣诞节快乐", "生日快乐", "身体健康", "万事如意"],
    lines: [
        { speaker: "A", chinese: "恭喜你！你成功了！", pinyin: "gōngxǐ nǐ! nǐ chénggōng le!", russian: "Поздравляю! Ты добился успеха!" },
        { speaker: "B", chinese: "谢谢！你真好！", pinyin: "xièxie! nǐ zhēn hǎo!", russian: "Спасибо! Ты такой добрый!" },
        { speaker: "A", chinese: "祝你好运！", pinyin: "zhù nǐ hǎoyùn!", russian: "Удачи тебе!" },
        { speaker: "B", chinese: "也祝你好运！加油！", pinyin: "yě zhù nǐ hǎoyùn! jiāyóu!", russian: "И тебе удачи! Держись!" },
        { speaker: "A", chinese: "新年快乐！", pinyin: "xīnnián kuàilè!", russian: "С Новым годом!" },
        { speaker: "B", chinese: "新年快乐！身体健康！", pinyin: "xīnnián kuàilè! shēntǐ jiànkāng!", russian: "С Новым годом! Крепкого здоровья!" },
        { speaker: "A", chinese: "圣诞节快乐！", pinyin: "shèngdàn jié kuàilè!", russian: "С Рождеством!" },
        { speaker: "B", chinese: "也祝你圣诞节快乐！万事如意！", pinyin: "yě zhù nǐ shèngdàn jié kuàilè! wànshì rúyì!", russian: "И тебе счастливого Рождества! Пусть все желания сбудутся!" },
        { speaker: "A", chinese: "生日快乐！祝你开心！", pinyin: "shēngrì kuàilè! zhù nǐ kāixīn!", russian: "С днём рождения! Будь счастлив!" },
    ],
},
    // ============================================================
// ДОПОЛНИТЕЛЬНЫЕ ДИАЛОГИ (31-40) — ТЕХНОЛОГИИ И ЕДА
// ============================================================

// ----- ДИАЛОГ 31: Новый смартфон -----
{
    id: "d31",
    title: "Новый смартфон",
    phrases: ["手机", "新", "贵", "拍照", "好看", "上网", "下载", "电池", "充电"],
    lines: [
        { speaker: "A", chinese: "哇！你买新手机了？", pinyin: "wā! nǐ mǎi xīn shǒujī le?", russian: "Вау! Ты купил новый телефон?" },
        { speaker: "B", chinese: "对，刚买的。", pinyin: "duì, gāng mǎi de.", russian: "Да, только что купил." },
        { speaker: "A", chinese: "这个手机很贵吧？", pinyin: "zhège shǒujī hěn guì ba?", russian: "Этот телефон дорогой, правда?" },
        { speaker: "B", chinese: "有一点贵，但是很好用！", pinyin: "yǒu yīdiǎn guì, dànshì hěn hǎoyòng!", russian: "Немного дорогой, но очень удобный!" },
        { speaker: "A", chinese: "拍照怎么样？", pinyin: "pāizhào zěnmeyàng?", russian: "Как фото?" },
        { speaker: "B", chinese: "拍照特别好看！", pinyin: "pāizhào tèbié hǎokàn!", russian: "Фото получаются особенно красивыми!" },
        { speaker: "A", chinese: "可以上网吗？", pinyin: "kěyǐ shàngwǎng ma?", russian: "Можно выходить в интернет?" },
        { speaker: "B", chinese: "当然可以！还可以下载很多应用。", pinyin: "dāngrán kěyǐ! hái kěyǐ xiàzài hěnduō yìngyòng.", russian: "Конечно! Ещё можно скачать много приложений." },
        { speaker: "A", chinese: "电池能用多久？", pinyin: "diànchí néng yòng duō jiǔ?", russian: "Батарея на сколько хватает?" },
        { speaker: "B", chinese: "一天没问题，充电也很快。", pinyin: "yītiān méi wèntí, chōngdiàn yě hěn kuài.", russian: "На день хватает, заряжается тоже быстро." },
    ],
},

// ----- ДИАЛОГ 32: Социальные сети -----
{
    id: "d32",
    title: "Социальные сети",
    phrases: ["微信", "抖音", "视频", "拍照", "发信息", "朋友", "关注", "点赞"],
    lines: [
        { speaker: "A", chinese: "你用微信吗？", pinyin: "nǐ yòng Wēixìn ma?", russian: "Ты пользуешься WeChat?" },
        { speaker: "B", chinese: "当然用！中国人都用微信。", pinyin: "dāngrán yòng! Zhōngguó rén dōu yòng Wēixìn.", russian: "Конечно! Все китайцы пользуются WeChat." },
        { speaker: "A", chinese: "我加你好友吧？", pinyin: "wǒ jiā nǐ hǎoyǒu ba?", russian: "Давай добавлю тебя в друзья?" },
        { speaker: "B", chinese: "好！我扫你二维码。", pinyin: "hǎo! wǒ sǎo nǐ èrwéimǎ.", russian: "Хорошо! Я отсканирую твой QR-код." },
        { speaker: "A", chinese: "你看抖音吗？", pinyin: "nǐ kàn Dǒuyīn ma?", russian: "Ты смотришь TikTok/Douyin?" },
        { speaker: "B", chinese: "看！上面有很多有趣的视频。", pinyin: "kàn! shàngmiàn yǒu hěnduō yǒuqù de shìpín.", russian: "Да! Там много интересных видео." },
        { speaker: "A", chinese: "我喜欢拍视频，然后发到网上。", pinyin: "wǒ xǐhuān pāi shìpín, ránhòu fā dào wǎngshàng.", russian: "Я люблю снимать видео и выкладывать в интернет." },
        { speaker: "B", chinese: "我可以关注你吗？", pinyin: "wǒ kěyǐ guānzhù nǐ ma?", russian: "Можно я подпишусь на тебя?" },
        { speaker: "A", chinese: "可以！我给你点赞！", pinyin: "kěyǐ! wǒ gěi nǐ diǎnzàn!", russian: "Да! Я поставлю тебе лайк!" },
        { speaker: "B", chinese: "太好了！我们经常联系！", pinyin: "tài hǎo le! wǒmen jīngcháng liánxì!", russian: "Отлично! Будем на связи!" },
    ],
},

// ----- ДИАЛОГ 33: Компьютер и работа -----
{
    id: "d33",
    title: "Компьютер и работа",
    phrases: ["电脑", "软件", "邮件", "发送", "打印", "文件", "开会", "视频会议"],
    lines: [
        { speaker: "A", chinese: "你的电脑好用吗？", pinyin: "nǐ de diànnǎo hǎoyòng ma?", russian: "У тебя компьютер удобный?" },
        { speaker: "B", chinese: "很好用！速度快，屏幕大。", pinyin: "hěn hǎoyòng! sùdù kuài, píngmù dà.", russian: "Очень удобный! Быстрый, большой экран." },
        { speaker: "A", chinese: "你用什么软件？", pinyin: "nǐ yòng shénme ruǎnjiàn?", russian: "Какими программами пользуешься?" },
        { speaker: "B", chinese: "我用Word写文件，用邮箱发邮件。", pinyin: "wǒ yòng Word xiě wénjiàn, yòng yóuxiāng fā yóujiàn.", russian: "Я в Word пишу документы, через почту отправляю письма." },
        { speaker: "A", chinese: "可以打印吗？", pinyin: "kěyǐ dǎyìn ma?", russian: "Можно распечатать?" },
        { speaker: "B", chinese: "可以，旁边就有打印机。", pinyin: "kěyǐ, pángbiān jiù yǒu dǎyìnjī.", russian: "Да, рядом есть принтер." },
        { speaker: "A", chinese: "下午要开会吗？", pinyin: "xiàwǔ yào kāihuì ma?", russian: "Днём будет совещание?" },
        { speaker: "B", chinese: "对，三点有视频会议。", pinyin: "duì, sān diǎn yǒu shìpín huìyì.", russian: "Да, в три часа видеоконференция." },
        { speaker: "A", chinese: "好，我准备好了！", pinyin: "hǎo, wǒ zhǔnbèi hǎo le!", russian: "Хорошо, я готов!" },
        { speaker: "B", chinese: "别忘了带文件！", pinyin: "bié wàng le dài wénjiàn!", russian: "Не забудь взять документы!" },
    ],
},

// ----- ДИАЛОГ 34: Описание китайской еды -----
{
    id: "d34",
    title: "Описание китайской еды",
    phrases: ["好吃", "咸", "甜", "辣", "酸", "香味", "颜色", "饺子", "火锅", "米饭"],
    lines: [
        { speaker: "A", chinese: "你喜欢吃中国菜吗？", pinyin: "nǐ xǐhuān chī Zhōngguó cài ma?", russian: "Тебе нравится китайская кухня?" },
        { speaker: "B", chinese: "当然喜欢！太好吃了！", pinyin: "dāngrán xǐhuān! tài hǎochī le!", russian: "Конечно! Очень вкусно!" },
        { speaker: "A", chinese: "你觉得味道怎么样？", pinyin: "nǐ juéde wèidào zěnmeyàng?", russian: "Как тебе вкус?" },
        { speaker: "B", chinese: "这个菜有点辣，但是很香！", pinyin: "zhège cài yǒudiǎn là, dànshì hěn xiāng!", russian: "Это блюдо немного острое, но очень ароматное!" },
        { speaker: "A", chinese: "这个饺子是咸的还是甜的？", pinyin: "zhège jiǎozi shì xián de háishì tián de?", russian: "Эти пельмени солёные или сладкие?" },
        { speaker: "B", chinese: "是咸的，里面有肉和菜。", pinyin: "shì xián de, lǐmiàn yǒu ròu hé cài.", russian: "Солёные, внутри мясо и овощи." },
        { speaker: "A", chinese: "火锅的汤很好喝！", pinyin: "huǒguō de tāng hěn hǎohē!", russian: "Бульон в хого очень вкусный!" },
        { speaker: "B", chinese: "对，又酸又辣，很开胃！", pinyin: "duì, yòu suān yòu là, hěn kāiwèi!", russian: "Да, и кислый, и острый, возбуждает аппетит!" },
        { speaker: "A", chinese: "颜色也很漂亮！", pinyin: "yánsè yě hěn piàoliang!", russian: "Цвет тоже красивый!" },
        { speaker: "B", chinese: "配上米饭就完美了！", pinyin: "pèi shàng mǐfàn jiù wánměi le!", russian: "С рисом идеально!" },
    ],
},

// ----- ДИАЛОГ 35: Заказ в ресторане с описанием -----
{
    id: "d35",
    title: "Заказ в ресторане с описанием",
    phrases: ["菜单", "点菜", "鱼", "鸡肉", "猪肉", "牛肉", "蔬菜", "汤", "米饭", "饮料"],
    lines: [
        { speaker: "A", chinese: "服务员，我要点菜。", pinyin: "fúwùyuán, wǒ yào diǎn cài.", russian: "Официант, я хочу заказать." },
        { speaker: "B", chinese: "好的，您看菜单。", pinyin: "hǎo de, nín kàn càidān.", russian: "Хорошо, посмотрите меню." },
        { speaker: "A", chinese: "这个鱼是怎么做的？", pinyin: "zhège yú shì zěnme zuò de?", russian: "Как готовится эта рыба?" },
        { speaker: "B", chinese: "这是清蒸鱼，很清淡，很鲜。", pinyin: "zhè shì qīngzhēng yú, hěn qīngdàn, hěn xiān.", russian: "Это рыба на пару, лёгкая, очень свежая." },
        { speaker: "A", chinese: "有鸡肉吗？", pinyin: "yǒu jīròu ma?", russian: "Есть курица?" },
        { speaker: "B", chinese: "有，宫保鸡丁又辣又甜。", pinyin: "yǒu, Gōngbǎo jīdīng yòu là yòu tián.", russian: "Да, курица Гунбао — острая и сладкая." },
        { speaker: "A", chinese: "牛肉呢？", pinyin: "niúròu ne?", russian: "Говядина?" },
        { speaker: "B", chinese: "有红烧牛肉，很香很嫩。", pinyin: "yǒu hóngshāo niúròu, hěn xiāng hěn nèn.", russian: "Есть тушёная говядина, очень ароматная и нежная." },
        { speaker: "A", chinese: "蔬菜有什么？", pinyin: "shūcài yǒu shénme?", russian: "Какие овощи?" },
        { speaker: "B", chinese: "炒青菜，很脆很绿。", pinyin: "chǎo qīngcài, hěn cuì hěn lǜ.", russian: "Жареная зелень, хрустящая и зелёная." },
        { speaker: "A", chinese: "我还要一碗汤和米饭。", pinyin: "wǒ háiyào yī wǎn tāng hé mǐfàn.", russian: "Ещё хочу суп и рис." },
        { speaker: "B", chinese: "好的，马上来！", pinyin: "hǎo de, mǎshàng lái!", russian: "Хорошо, сейчас принесу!" },
    ],
},

// ----- ДИАЛОГ 36: Готовим дома -----
{
    id: "d36",
    title: "Готовим дома",
    phrases: ["做饭", "炒菜", "切菜", "放盐", "加糖", "酱油", "醋", "味道", "好吃"],
    lines: [
        { speaker: "A", chinese: "你今晚做什么饭？", pinyin: "nǐ jīn wǎn zuò shénme fàn?", russian: "Что ты готовишь на ужин?" },
        { speaker: "B", chinese: "我准备炒一个菜。", pinyin: "wǒ zhǔnbèi chǎo yīgè cài.", russian: "Я собираюсь приготовить жареное блюдо." },
        { speaker: "A", chinese: "我来帮你切菜吧？", pinyin: "wǒ lái bāng nǐ qiē cài ba?", russian: "Давай я помогу тебе порезать овощи?" },
        { speaker: "B", chinese: "好！你切菜，我来炒。", pinyin: "hǎo! nǐ qiē cài, wǒ lái chǎo.", russian: "Хорошо! Ты режешь, я жарю." },
        { speaker: "A", chinese: "要放盐和酱油吗？", pinyin: "yào fàng yán hé jiàngyóu ma?", russian: "Нужно добавить соль и соевый соус?" },
        { speaker: "B", chinese: "对，还要加一点点醋。", pinyin: "duì, háiyào jiā yīdiǎndiǎn cù.", russian: "Да, и ещё немного уксуса." },
        { speaker: "A", chinese: "你放糖吗？", pinyin: "nǐ fàng táng ma?", russian: "Ты добавляешь сахар?" },
        { speaker: "B", chinese: "少放一点糖，味道更好。", pinyin: "shǎo fàng yīdiǎn táng, wèidào gèng hǎo.", russian: "Немного сахара, будет вкуснее." },
        { speaker: "A", chinese: "我闻到了，好香啊！", pinyin: "wǒ wén dào le, hǎo xiāng a!", russian: "Я чувствую запах, очень ароматно!" },
        { speaker: "B", chinese: "好了！尝尝看好吃吗？", pinyin: "hǎo le! chángchang kàn hǎochī ma?", russian: "Готово! Попробуй, вкусно?" },
        { speaker: "A", chinese: "超级好吃！你太厉害了！", pinyin: "chāojí hǎochī! nǐ tài lìhài le!", russian: "Супер вкусно! Ты гений!" },
    ],
},

// ----- ДИАЛОГ 37: Онлайн-покупки -----
{
    id: "d37",
    title: "Онлайн-покупки",
    phrases: ["淘宝", "京东", "买东西", "便宜", "快递", "评价", "退货", "付款", "收货"],
    lines: [
        { speaker: "A", chinese: "你最近在网上买东西吗？", pinyin: "nǐ zuìjìn zài wǎngshàng mǎi dōngxi ma?", russian: "Ты в последнее время покупаешь вещи в интернете?" },
        { speaker: "B", chinese: "经常买！淘宝和京东很方便。", pinyin: "jīngcháng mǎi! Táobǎo hé Jīngdōng hěn fāngbiàn.", russian: "Часто! Taobao и JD очень удобны." },
        { speaker: "A", chinese: "什么东西便宜？", pinyin: "shénme dōngxi piányi?", russian: "Что дёшево?" },
        { speaker: "B", chinese: "衣服和电子产品很便宜。", pinyin: "yīfu hé diànzǐ chǎnpǐn hěn piányi.", russian: "Одежда и электроника дёшевы." },
        { speaker: "A", chinese: "快递快吗？", pinyin: "kuàidì kuài ma?", russian: "Доставка быстрая?" },
        { speaker: "B", chinese: "很快，一般两三天就到。", pinyin: "hěn kuài, yībān liǎng sān tiān jiù dào.", russian: "Быстро, обычно через два-три дня." },
        { speaker: "A", chinese: "你看评价吗？", pinyin: "nǐ kàn píngjià ma?", russian: "Ты читаешь отзывы?" },
        { speaker: "B", chinese: "当然看！好评多才买。", pinyin: "dāngrán kàn! hǎopíng duō cái mǎi.", russian: "Конечно! Покупаю только если много хороших отзывов." },
        { speaker: "A", chinese: "可以退货吗？", pinyin: "kěyǐ tuìhuò ma?", russian: "Можно вернуть товар?" },
        { speaker: "B", chinese: "可以，七天无理由退货。", pinyin: "kěyǐ, qī tiān wú lǐyóu tuìhuò.", russian: "Да, семь дней бесплатного возврата." },
        { speaker: "A", chinese: "怎么付款？", pinyin: "zěnme fùkuǎn?", russian: "Как оплатить?" },
        { speaker: "B", chinese: "用支付宝或微信支付。", pinyin: "yòng Zhīfùbǎo huò Wēixìn zhīfù.", russian: "Alipay или WeChat Pay." },
    ],
},

// ----- ДИАЛОГ 38: Десерты и сладости -----
{
    id: "d38",
    title: "Десерты и сладости",
    phrases: ["甜", "蛋糕", "冰淇淋", "水果", "糖", "巧克力", "香草", "草莓", "好吃"],
    lines: [
        { speaker: "A", chinese: "你吃甜食吗？", pinyin: "nǐ chī tiánshí ma?", russian: "Ты ешь сладости?" },
        { speaker: "B", chinese: "特别喜欢！尤其是蛋糕。", pinyin: "tèbié xǐhuān! yóuqí shì dàngāo.", russian: "Очень люблю! Особенно торты." },
        { speaker: "A", chinese: "这个巧克力蛋糕怎么样？", pinyin: "zhège qiǎokèlì dàngāo zěnmeyàng?", russian: "Как этот шоколадный торт?" },
        { speaker: "B", chinese: "很甜，很软，入口即化！", pinyin: "hěn tián, hěn ruǎn, rùkǒu jíhuà!", russian: "Очень сладкий, мягкий, тает во рту!" },
        { speaker: "A", chinese: "你喜欢冰淇淋吗？", pinyin: "nǐ xǐhuān bīngqílín ma?", russian: "Ты любишь мороженое?" },
        { speaker: "B", chinese: "喜欢！草莓味和香草味最好吃。", pinyin: "xǐhuān! cǎoméi wèi hé xiāngcǎo wèi zuì hǎochī.", russian: "Да! Клубничный и ванильный вкус самые вкусные." },
        { speaker: "A", chinese: "我也喜欢水果，特别是西瓜。", pinyin: "wǒ yě xǐhuān shuǐguǒ, tèbié shì xīguā.", russian: "Я тоже люблю фрукты, особенно арбуз." },
        { speaker: "B", chinese: "西瓜很甜很多汁！", pinyin: "xīguā hěn tián hěnduō zhī!", russian: "Арбуз сладкий и сочный!" },
        { speaker: "A", chinese: "这个糖太甜了！", pinyin: "zhège táng tài tián le!", russian: "Эта конфета слишком сладкая!" },
        { speaker: "B", chinese: "你少吃点糖，对身体不好。", pinyin: "nǐ shǎo chī diǎn táng, duì shēntǐ bù hǎo.", russian: "Меньше ешь сладкого, это вредно для здоровья." },
    ],
},

// ----- ДИАЛОГ 39: Сравнение еды (фастфуд vs полезная еда) -----
{
    id: "d39",
    title: "Сравнение еды",
    phrases: ["快餐", "汉堡", "薯条", "健康", "沙拉", "果汁", "好吃", "营养", "胖"],
    lines: [
        { speaker: "A", chinese: "你喜欢吃快餐吗？", pinyin: "nǐ xǐhuān chī kuàicān ma?", russian: "Ты любишь фастфуд?" },
        { speaker: "B", chinese: "喜欢，但是不健康。", pinyin: "xǐhuān, dànshì bù jiànkāng.", russian: "Люблю, но это не полезно." },
        { speaker: "A", chinese: "汉堡和薯条都很好吃！", pinyin: "hànbǎo hé shǔtiáo dōu hěn hǎochī!", russian: "Бургеры и картошка фри очень вкусные!" },
        { speaker: "B", chinese: "但是油太多，容易胖。", pinyin: "dànshì yóu tài duō, róngyì pàng.", russian: "Но там много масла, легко потолстеть." },
        { speaker: "A", chinese: "那什么比较健康？", pinyin: "nà shénme bǐjiào jiànkāng?", russian: "Тогда что полезнее?" },
        { speaker: "B", chinese: "沙拉和水果比较健康。", pinyin: "shālā hé shuǐguǒ bǐjiào jiànkāng.", russian: "Салаты и фрукты полезнее." },
        { speaker: "A", chinese: "果汁也比可乐好。", pinyin: "guǒzhī yě bǐ kělè hǎo.", russian: "Сок тоже лучше колы." },
        { speaker: "B", chinese: "对！果汁有营养。", pinyin: "duì! guǒzhī yǒu yíngyǎng.", russian: "Да! В соке есть питательные вещества." },
        { speaker: "A", chinese: "但是快餐更好吃！", pinyin: "dànshì kuàicān gèng hǎochī!", russian: "Но фастфуд вкуснее!" },
        { speaker: "B", chinese: "偶尔吃一次可以，不要天天吃。", pinyin: "ǒu'ěr chī yīcì kěyǐ, bùyào tiāntiān chī.", russian: "Изредка можно, не каждый день." },
    ],
},

// ----- ДИАЛОГ 40: Китайский чай -----
{
    id: "d40",
    title: "Китайский чай",
    phrases: ["茶", "绿茶", "红茶", "乌龙茶", "茶道", "味道", "香", "热水", "茶杯"],
    lines: [
        { speaker: "A", chinese: "你喝茶吗？", pinyin: "nǐ hē chá ma?", russian: "Ты пьёшь чай?" },
        { speaker: "B", chinese: "喝！中国茶非常好喝。", pinyin: "hē! Zhōngguó chá fēicháng hǎohē.", russian: "Да! Китайский чай очень вкусный." },
        { speaker: "A", chinese: "你喜欢绿茶还是红茶？", pinyin: "nǐ xǐhuān lǜchá háishì hóngchá?", russian: "Ты любишь зелёный чай или чёрный?" },
        { speaker: "B", chinese: "我喜欢绿茶，味道很清。", pinyin: "wǒ xǐhuān lǜchá, wèidào hěn qīng.", russian: "Я люблю зелёный, вкус свежий." },
        { speaker: "A", chinese: "红茶更香更浓。", pinyin: "hóngchá gèng xiāng gèng nóng.", russian: "Чёрный чай более ароматный и насыщенный." },
        { speaker: "B", chinese: "乌龙茶也很好喝！", pinyin: "wūlóngchá yě hěn hǎohē!", russian: "Улун тоже очень вкусный!" },
        { speaker: "A", chinese: "你知道茶道吗？", pinyin: "nǐ zhīdào chádào ma?", russian: "Ты знаешь чайную церемонию?" },
        { speaker: "B", chinese: "知道！中国茶道很讲究。", pinyin: "zhīdào! Zhōngguó chádào hěn jiǎngjiu.", russian: "Да! Китайская чайная церемония очень изысканная." },
        { speaker: "A", chinese: "泡茶要用热水。", pinyin: "pào chá yào yòng rè shuǐ.", russian: "Для заваривания чая нужна горячая вода." },
        { speaker: "B", chinese: "对，用好看的茶杯。", pinyin: "duì, yòng hǎokàn de chábēi.", russian: "Да, и красивая чашка." },
        { speaker: "A", chinese: "这茶好香啊！", pinyin: "zhè chá hǎo xiāng a!", russian: "Какой ароматный чай!" }
    ]
}  // ← НЕТ запятой (это последний элемент массива)
]; // ← Закрытие массива

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
