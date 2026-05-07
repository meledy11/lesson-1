// frequency-db.js — 50 самых частотных слов китайского языка
// Полный разбор: части, фонетик, объяснение, примеры

const frequencyDB = [
    // ========== 1-10 ==========
    {
        id: 1, char: "的", pinyin: "de", meaning: "притяжательная частица",
        parts: [{ char: "白", meaning: "белый" }, { char: "勺", meaning: "ковш" }],
        radical: { char: "白", name: "белый" },
        phonetic: { char: "勺", reading: "sháo", note: "связь ослабла (sháo → de)" },
        type: "фонетический (ослабленный)",
        explanation: "Белый + ковш = притяжательная частица (самый частый иероглиф)",
        examples: ["我的", "你的", "他的"], exampleMeanings: ["моё", "твоё", "его"]
    },
    {
        id: 2, char: "了", pinyin: "le", meaning: "показатель завершённого действия",
        parts: [{ char: "子", meaning: "ребёнок", note: "историческая форма" }],
        radical: { char: "乛", name: "крюк" }, phonetic: null,
        type: "пиктограмма",
        explanation: "Древний рисунок свёрнутого младенца → завершение",
        examples: ["吃了", "走了", "好了"], exampleMeanings: ["съел", "ушёл", "готово"]
    },
    {
        id: 3, char: "不", pinyin: "bù", meaning: "не, нет",
        parts: [{ char: "一", meaning: "небо" }, { char: "小", meaning: "маленький" }],
        radical: { char: "一", name: "один" }, phonetic: null,
        type: "идеограмма",
        explanation: "Птица, улетающая вверх → отрицание",
        examples: ["不是", "不好", "不对"], exampleMeanings: ["не является", "нехорошо", "неправильно"]
    },
    {
        id: 4, char: "也", pinyin: "yě", meaning: "тоже",
        parts: [{ char: "乛", meaning: "крюк" }, { char: "丨", meaning: "вертикаль" }],
        radical: { char: "乛", name: "крюк" }, phonetic: null,
        type: "пиктограмма",
        explanation: "Древний рисунок змеи → 'тоже'",
        examples: ["我也是", "他也"], exampleMeanings: ["я тоже", "он тоже"]
    },
    {
        id: 5, char: "就", pinyin: "jiù", meaning: "именно, сразу",
        parts: [{ char: "京", meaning: "столица" }, { char: "尤", meaning: "особенно" }],
        radical: { char: "尢", name: "хромой" },
        phonetic: { char: "京", reading: "jīng", note: "jīng → jiù" },
        type: "фонетический",
        explanation: "Столица + особенно = 'именно, сразу'",
        examples: ["就是", "就要"], exampleMeanings: ["именно", "сразу хочу"]
    },
    {
        id: 6, char: "都", pinyin: "dōu", meaning: "все, оба",
        parts: [{ char: "者", meaning: "тот, кто" }, { char: "阝", meaning: "город" }],
        radical: { char: "阝", name: "город" },
        phonetic: { char: "者", reading: "zhě", note: "zhě → dōu" },
        type: "фонетический",
        explanation: "Город + 'тот, кто' = 'все'",
        examples: ["都是", "都好"], exampleMeanings: ["все являются", "всё хорошо"]
    },
    {
        id: 7, char: "还", pinyin: "hái", meaning: "ещё, всё ещё",
        parts: [{ char: "不", meaning: "не" }, { char: "辶", meaning: "движение" }],
        radical: { char: "辶", name: "движение" }, phonetic: null,
        type: "идеограмма",
        explanation: "Не уходить → 'ещё'",
        examples: ["还好", "还是"], exampleMeanings: ["ещё неплохо", "всё ещё"]
    },
    {
        id: 8, char: "只", pinyin: "zhǐ", meaning: "только",
        parts: [{ char: "口", meaning: "рот" }, { char: "八", meaning: "восемь" }],
        radical: { char: "口", name: "рот" }, phonetic: null,
        type: "пиктограмма",
        explanation: "Рот + две ноги = птица → 'только'",
        examples: ["只有", "只是"], exampleMeanings: ["только есть", "просто"]
    },
    {
        id: 9, char: "很", pinyin: "hěn", meaning: "очень",
        parts: [{ char: "彳", meaning: "шаг" }, { char: "艮", meaning: "граница" }],
        radical: { char: "彳", name: "шаг" },
        phonetic: { char: "艮", reading: "gèn", note: "gèn → hěn" },
        type: "фонетический",
        explanation: "Шаг + граница = 'очень'",
        examples: ["很好", "很大"], exampleMeanings: ["очень хорошо", "очень большой"]
    },
    {
        id: 10, char: "没", pinyin: "méi", meaning: "не иметь",
        parts: [{ char: "氵", meaning: "вода" }, { char: "殳", meaning: "ударять" }],
        radical: { char: "氵", name: "вода" },
        phonetic: { char: "殳", reading: "shū", note: "shū → méi" },
        type: "фонетический",
        explanation: "Вода + ударять = 'утонуть' → отрицание",
        examples: ["没有", "没来"], exampleMeanings: ["не иметь", "не пришёл"]
    },

    // ========== 11-20 ==========
    {
        id: 11, char: "我", pinyin: "wǒ", meaning: "я",
        parts: [{ char: "手", meaning: "рука" }, { char: "戈", meaning: "копьё" }],
        radical: { char: "戈", name: "копьё" }, phonetic: null,
        type: "идеограмма",
        explanation: "Рука, держащая копьё → 'я' как воин",
        examples: ["我们", "我的"], exampleMeanings: ["мы", "моё"]
    },
    {
        id: 12, char: "你", pinyin: "nǐ", meaning: "ты",
        parts: [{ char: "亻", meaning: "человек" }, { char: "尔", meaning: "ты (древн.)" }],
        radical: { char: "亻", name: "человек" },
        phonetic: { char: "尔", reading: "ěr", note: "ěr → nǐ" },
        type: "фонетический",
        explanation: "Человек + 'ты' = 'ты'",
        examples: ["你好", "你的"], exampleMeanings: ["привет", "твой"]
    },
    {
        id: 13, char: "他", pinyin: "tā", meaning: "он",
        parts: [{ char: "亻", meaning: "человек" }, { char: "也", meaning: "тоже" }],
        radical: { char: "亻", name: "человек" },
        phonetic: { char: "也", reading: "yě", note: "yě → tā" },
        type: "фонетический",
        explanation: "Человек + тоже = 'он'",
        examples: ["他们", "他的"], exampleMeanings: ["они", "его"]
    },
    {
        id: 14, char: "她", pinyin: "tā", meaning: "она",
        parts: [{ char: "女", meaning: "женщина" }, { char: "也", meaning: "тоже" }],
        radical: { char: "女", name: "женщина" },
        phonetic: { char: "也", reading: "yě", note: "yě → tā" },
        type: "фонетический",
        explanation: "Женщина + тоже = 'она'",
        examples: ["她们", "她的"], exampleMeanings: ["они (жен.)", "её"]
    },
    {
        id: 15, char: "这", pinyin: "zhè", meaning: "этот",
        parts: [{ char: "辶", meaning: "движение" }, { char: "文", meaning: "текст" }],
        radical: { char: "辶", name: "движение" },
        phonetic: { char: "文", reading: "wén", note: "wén → zhè" },
        type: "фонетический",
        explanation: "Движение + текст = 'это'",
        examples: ["这个", "这里"], exampleMeanings: ["этот", "здесь"]
    },
    {
        id: 16, char: "那", pinyin: "nà", meaning: "тот",
        parts: [{ char: "阝", meaning: "город" }, { char: "二", meaning: "два" }],
        radical: { char: "阝", name: "город" }, phonetic: null,
        type: "идеограмма",
        explanation: "Указание на удалённый предмет",
        examples: ["那个", "那里"], exampleMeanings: ["тот", "там"]
    },
    {
        id: 17, char: "哪", pinyin: "nǎ", meaning: "который?",
        parts: [{ char: "口", meaning: "рот" }, { char: "那", meaning: "тот" }],
        radical: { char: "口", name: "рот" },
        phonetic: { char: "那", reading: "nà", note: "nà → nǎ" },
        type: "фонетический",
        explanation: "Рот + тот = вопросительное",
        examples: ["哪个", "哪里"], exampleMeanings: ["который", "где"]
    },
    {
        id: 18, char: "是", pinyin: "shì", meaning: "быть",
        parts: [{ char: "日", meaning: "солнце" }, { char: "正", meaning: "прямой" }],
        radical: { char: "日", name: "солнце" }, phonetic: null,
        type: "идеограмма",
        explanation: "Солнце идёт прямо → 'правильно' → 'быть'",
        examples: ["我是", "不是"], exampleMeanings: ["я есть", "не является"]
    },
    {
        id: 19, char: "有", pinyin: "yǒu", meaning: "иметь",
        parts: [{ char: "月", meaning: "мясо" }, { char: "又", meaning: "рука" }],
        radical: { char: "月(мясо)", name: "мясо" },
        phonetic: { char: "又", reading: "yòu", note: "yòu → yǒu" },
        type: "фонетический+идеограмма",
        explanation: "Рука, держащая мясо → 'иметь'",
        examples: ["我有", "没有"], exampleMeanings: ["у меня есть", "нет"]
    },
    {
        id: 20, char: "在", pinyin: "zài", meaning: "находиться в",
        parts: [{ char: "土", meaning: "земля" }, { char: "有", meaning: "иметь" }],
        radical: { char: "土", name: "земля" }, phonetic: null,
        type: "идеограмма",
        explanation: "Земля + иметь = 'находиться где-то'",
        examples: ["在家", "在这里"], exampleMeanings: ["дома", "здесь"]
    },

    // ========== 21-30 ==========
    {
        id: 21, char: "去", pinyin: "qù", meaning: "идти (туда)",
        parts: [{ char: "土", meaning: "земля" }, { char: "厶", meaning: "я" }],
        radical: { char: "厶", name: "частный" }, phonetic: null,
        type: "идеограмма",
        explanation: "Человек уходит от земли → 'идти'",
        examples: ["去北京", "去哪儿"], exampleMeanings: ["ехать в Пекин", "куда идти?"]
    },
    {
        id: 22, char: "来", pinyin: "lái", meaning: "приходить",
        parts: [{ char: "米", meaning: "рис" }],
        radical: { char: "木", name: "дерево" },
        phonetic: { char: "米", reading: "mǐ", note: "mǐ → lái" },
        type: "фонетический",
        explanation: "Созревший рис → 'приходить'",
        examples: ["来北京", "来了"], exampleMeanings: ["приехать", "пришёл"]
    },
    {
        id: 23, char: "回", pinyin: "huí", meaning: "возвращаться",
        parts: [{ char: "囗", meaning: "ограда" }, { char: "口", meaning: "рот" }],
        radical: { char: "囗", name: "ограда" }, phonetic: null,
        type: "пиктограмма",
        explanation: "Спираль → 'возвращаться'",
        examples: ["回家", "回来"], exampleMeanings: ["вернуться домой", "вернуться"]
    },
    {
        id: 24, char: "走", pinyin: "zǒu", meaning: "идти пешком",
        parts: [{ char: "土", meaning: "земля" }, { char: "止", meaning: "стопа" }],
        radical: { char: "走", name: "идти" }, phonetic: null,
        type: "пиктограмма",
        explanation: "Человек с трясущимися ногами → 'идти'",
        examples: ["走路", "走吧"], exampleMeanings: ["идти", "пойдём"]
    },
    {
        id: 25, char: "看", pinyin: "kàn", meaning: "смотреть",
        parts: [{ char: "手", meaning: "рука" }, { char: "目", meaning: "глаз" }],
        radical: { char: "目", name: "глаз" }, phonetic: null,
        type: "идеограмма",
        explanation: "Рука над глазом → 'смотреть'",
        examples: ["看书", "看电视"], exampleMeanings: ["читать", "смотреть TV"]
    },
    {
        id: 26, char: "听", pinyin: "tīng", meaning: "слушать",
        parts: [{ char: "口", meaning: "рот" }, { char: "斤", meaning: "топор" }],
        radical: { char: "口", name: "рот" }, phonetic: null,
        type: "упрощённый",
        explanation: "Упрощение сложного иероглифа 'ухо+сердце'",
        examples: ["听音乐", "好听"], exampleMeanings: ["слушать музыку", "приятно слушать"]
    },
    {
        id: 27, char: "说", pinyin: "shuō", meaning: "говорить",
        parts: [{ char: "讠", meaning: "речь" }, { char: "兑", meaning: "обменивать" }],
        radical: { char: "讠", name: "речь" },
        phonetic: { char: "兑", reading: "duì", note: "duì → shuō" },
        type: "фонетический",
        explanation: "Речь + обменивать = 'говорить'",
        examples: ["说话", "说中文"], exampleMeanings: ["говорить", "говорить по-китайски"]
    },
    {
        id: 28, char: "吃", pinyin: "chī", meaning: "есть",
        parts: [{ char: "口", meaning: "рот" }, { char: "乞", meaning: "просить" }],
        radical: { char: "口", name: "рот" },
        phonetic: { char: "乞", reading: "qǐ", note: "qǐ → chī" },
        type: "фонетический",
        explanation: "Рот + просить = 'есть'",
        examples: ["吃饭", "好吃"], exampleMeanings: ["есть еду", "вкусно"]
    },
    {
        id: 29, char: "人", pinyin: "rén", meaning: "человек",
        parts: [{ char: "人", meaning: "человек" }],
        radical: { char: "人", name: "человек" }, phonetic: null,
        type: "пиктограмма",
        explanation: "Рисунок человека сбоку",
        examples: ["中国人", "好人"], exampleMeanings: ["китаец", "хороший человек"]
    },
    {
        id: 30, char: "家", pinyin: "jiā", meaning: "дом, семья",
        parts: [{ char: "宀", meaning: "крыша" }, { char: "豕", meaning: "свинья" }],
        radical: { char: "宀", name: "крыша" }, phonetic: null,
        type: "идеограмма",
        explanation: "Крыша над свиньёй → символ дома и богатства",
        examples: ["我家", "回家"], exampleMeanings: ["мой дом", "вернуться домой"]
    },

    // ========== 31-40 ==========
    {
        id: 31, char: "一", pinyin: "yī", meaning: "один",
        parts: [{ char: "一", meaning: "одна черта" }],
        radical: { char: "一", name: "один" }, phonetic: null,
        type: "пиктограмма",
        explanation: "Одна горизонтальная черта → число один",
        examples: ["一个", "一起"], exampleMeanings: ["один", "вместе"]
    },
    {
        id: 32, char: "二", pinyin: "èr", meaning: "два",
        parts: [{ char: "二", meaning: "две черты" }],
        radical: { char: "二", name: "два" }, phonetic: null,
        type: "пиктограмма",
        explanation: "Две горизонтальные черты → число два",
        examples: ["二个", "第二"], exampleMeanings: ["два", "второй"]
    },
    {
        id: 33, char: "三", pinyin: "sān", meaning: "три",
        parts: [{ char: "三", meaning: "три черты" }],
        radical: { char: "一", name: "один" }, phonetic: null,
        type: "пиктограмма",
        explanation: "Три горизонтальные черты → число три",
        examples: ["三个", "第三"], exampleMeanings: ["три", "третий"]
    },
    {
        id: 34, char: "十", pinyin: "shí", meaning: "десять",
        parts: [{ char: "十", meaning: "крест" }],
        radical: { char: "十", name: "десять" }, phonetic: null,
        type: "пиктограмма",
        explanation: "Крест → полнота, завершение → десять",
        examples: ["十个", "十点"], exampleMeanings: ["десять", "десять часов"]
    },
    {
        id: 35, char: "大", pinyin: "dà", meaning: "большой",
        parts: [{ char: "人", meaning: "человек" }, { char: "一", meaning: "один" }],
        radical: { char: "大", name: "большой" }, phonetic: null,
        type: "идеограмма",
        explanation: "Человек с раскинутыми руками → большой",
        examples: ["大人", "大学"], exampleMeanings: ["взрослый", "университет"]
    },
    {
        id: 36, char: "小", pinyin: "xiǎo", meaning: "маленький",
        parts: [{ char: "小", meaning: "три маленькие точки" }],
        radical: { char: "小", name: "маленький" }, phonetic: null,
        type: "пиктограмма",
        explanation: "Три маленькие точки → что-то мелкое",
        examples: ["小孩", "小时"], exampleMeanings: ["ребёнок", "час"]
    },
    {
        id: 37, char: "多", pinyin: "duō", meaning: "много",
        parts: [{ char: "夕", meaning: "вечер" }, { char: "夕", meaning: "вечер" }],
        radical: { char: "夕", name: "вечер" }, phonetic: null,
        type: "идеограмма",
        explanation: "Два вечера → много (долгое время)",
        examples: ["很多", "多少"], exampleMeanings: ["очень много", "сколько"]
    },
    {
        id: 38, char: "少", pinyin: "shǎo", meaning: "мало",
        parts: [{ char: "小", meaning: "маленький" }, { char: "丿", meaning: "черта" }],
        radical: { char: "小", name: "маленький" }, phonetic: null,
        type: "идеограмма",
        explanation: "Маленький + черта → мало",
        examples: ["很少", "少量"], exampleMeanings: ["очень мало", "небольшое количество"]
    },
    {
        id: 39, char: "好", pinyin: "hǎo", meaning: "хороший",
        parts: [{ char: "女", meaning: "женщина" }, { char: "子", meaning: "ребёнок" }],
        radical: { char: "女", name: "женщина" }, phonetic: null,
        type: "идеограмма",
        explanation: "Женщина с ребёнком → хорошо",
        examples: ["很好", "好吗"], exampleMeanings: ["очень хорошо", "хорошо?"]
    },
    {
        id: 40, char: "坏", pinyin: "huài", meaning: "плохой",
        parts: [{ char: "土", meaning: "земля" }, { char: "不", meaning: "не" }],
        radical: { char: "土", name: "земля" }, phonetic: null,
        type: "фонетический",
        explanation: "Земля + не = разрушение → плохой",
        examples: ["坏人", "破坏"], exampleMeanings: ["плохой человек", "разрушать"]
    },

    // ========== 41-50 ==========
    {
        id: 41, char: "对", pinyin: "duì", meaning: "правильный, к",
        parts: [{ char: "又", meaning: "рука" }, { char: "寸", meaning: "дюйм" }],
        radical: { char: "寸", name: "дюйм" }, phonetic: null,
        type: "идеограмма",
        explanation: "Рука, отмеряющая дюймы → правильно, соответствовать",
        examples: ["对了", "对不起"], exampleMeanings: ["правильно", "извините"]
    },
    {
        id: 42, char: "错", pinyin: "cuò", meaning: "неправильный",
        parts: [{ char: "钅", meaning: "металл" }, { char: "昔", meaning: "прошлое" }],
        radical: { char: "钅", name: "металл" },
        phonetic: { char: "昔", reading: "xī", note: "xī → cuò" },
        type: "фонетический",
        explanation: "Металл + прошлое = ошибка (как грубая обработка металла)",
        examples: ["错了", "错误"], exampleMeanings: ["неправильно", "ошибка"]
    },
    {
        id: 43, char: "会", pinyin: "huì", meaning: "уметь, мочь",
        parts: [{ char: "人", meaning: "человек" }, { char: "云", meaning: "облако" }],
        radical: { char: "人", name: "человек" },
        phonetic: { char: "云", reading: "yún", note: "yún → huì" },
        type: "фонетический",
        explanation: "Человек + облако → собираться, уметь",
        examples: ["我会", "开会"], exampleMeanings: ["я умею", "собрание"]
    },
    {
        id: 44, char: "能", pinyin: "néng", meaning: "мочь",
        parts: [{ char: "月", meaning: "мясо" }, { char: "匕", meaning: "ложка" }, { char: "长", meaning: "длинный" }],
        radical: { char: "月", name: "мясо" }, phonetic: null,
        type: "идеограмма",
        explanation: "Медведь → сила, возможность",
        examples: ["我能", "能力"], exampleMeanings: ["я могу", "способность"]
    },
    {
        id: 45, char: "要", pinyin: "yào", meaning: "хотеть, нуждаться",
        parts: [{ char: "女", meaning: "женщина" }, { char: "西", meaning: "запад" }],
        radical: { char: "女", name: "женщина" }, phonetic: null,
        type: "идеограмма",
        explanation: "Женщина на западе → требовать",
        examples: ["我要", "重要"], exampleMeanings: ["я хочу", "важный"]
    },
    {
        id: 46, char: "可", pinyin: "kě", meaning: "можно, мочь",
        parts: [{ char: "丁", meaning: "гвоздь" }, { char: "口", meaning: "рот" }],
        radical: { char: "口", name: "рот" },
        phonetic: { char: "丁", reading: "dīng", note: "связь ослабла" },
        type: "фонетический",
        explanation: "Гвоздь + рот → можно, разрешено",
        examples: ["可以", "可是"], exampleMeanings: ["можно", "но"]
    },
    {
        id: 47, char: "以", pinyin: "yǐ", meaning: "чтобы, с помощью",
        parts: [{ char: "人", meaning: "человек" }],
        radical: { char: "人", name: "человек" }, phonetic: null,
        type: "идеограмма",
        explanation: "Древний плуг → использовать, чтобы",
        examples: ["可以", "以前"], exampleMeanings: ["можно", "раньше"]
    },
    {
        id: 48, char: "到", pinyin: "dào", meaning: "достигать, до",
        parts: [{ char: "至", meaning: "достигать" }, { char: "刂", meaning: "нож" }],
        radical: { char: "刂", name: "нож" },
        phonetic: { char: "至", reading: "zhì", note: "zhì → dào" },
        type: "фонетический",
        explanation: "Достигать + нож → достигать цели",
        examples: ["到了", "到哪儿"], exampleMeanings: ["прибыл", "куда?"]
    },
    {
        id: 49, char: "过", pinyin: "guò", meaning: "проходить",
        parts: [{ char: "辶", meaning: "движение" }, { char: "寸", meaning: "дюйм" }],
        radical: { char: "辶", name: "движение" }, phonetic: null,
        type: "идеограмма",
        explanation: "Движение + дюйм → пройти мимо",
        examples: ["过了", "过去"], exampleMeanings: ["прошёл", "прошлое"]
    },
    {
        id: 50, char: "时", pinyin: "shí", meaning: "время",
        parts: [{ char: "日", meaning: "солнце" }, { char: "寸", meaning: "дюйм" }],
        radical: { char: "日", name: "солнце" }, phonetic: null,
        type: "идеограмма",
        explanation: "Солнце движется на дюйм → время",
        examples: ["时间", "小时"], exampleMeanings: ["время", "час"]
    }
];

// Сохраняем в localStorage для использования в других файлах
if (typeof localStorage !== 'undefined') {
    localStorage.setItem('frequencyDB', JSON.stringify(frequencyDB));
}

// Выводим информацию в консоль
console.log(`📊 frequency-db.js загружена! Количество слов: ${frequencyDB.length}`);
