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
    },
   // ========== 51-60 ==========
{
    id: 51, char: "出", pinyin: "chū", meaning: "выходить",
    parts: [{ char: "山", meaning: "гора" }, { char: "山", meaning: "гора" }],
    radical: { char: "凵", name: "коробка" }, phonetic: null,
    type: "идеограмма",
    explanation: "Две горы → выходить наружу",
    examples: ["出来", "出去"], exampleMeanings: ["выйти (сюда)", "выйти (туда)"]
},
{
    id: 52, char: "见", pinyin: "jiàn", meaning: "видеть",
    parts: [{ char: "目", meaning: "глаз" }, { char: "儿", meaning: "ноги" }],
    radical: { char: "见", name: "видеть" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Глаз на ногах → видеть",
    examples: ["看见", "见面"], exampleMeanings: ["увидеть", "встретиться"]
},
{
    id: 53, char: "面", pinyin: "miàn", meaning: "лицо, сторона",
    parts: [{ char: "一", meaning: "один" }, { char: "口", meaning: "рот" }, { char: "自", meaning: "сам" }],
    radical: { char: "面", name: "лицо" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Рисунок лица с глазами и ртом",
    examples: ["前面", "对面"], exampleMeanings: ["впереди", "напротив"]
},
{
    id: 54, char: "车", pinyin: "chē", meaning: "машина, транспорт",
    parts: [{ char: "车", meaning: "колесница" }],
    radical: { char: "车", name: "машина" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Вид колесницы сверху → транспорт",
    examples: ["汽车", "火车"], exampleMeanings: ["автомобиль", "поезд"]
},
{
    id: 55, char: "路", pinyin: "lù", meaning: "дорога",
    parts: [{ char: "足", meaning: "нога" }, { char: "各", meaning: "каждый" }],
    radical: { char: "足", name: "нога" },
    phonetic: { char: "各", reading: "gè", note: "gè → lù" },
    type: "фонетический",
    explanation: "Нога + каждый = дорога, по которой ходят все",
    examples: ["马路", "走路"], exampleMeanings: ["улица", "идти по дороге"]
},
{
    id: 56, char: "门", pinyin: "mén", meaning: "дверь",
    parts: [{ char: "门", meaning: "дверь" }],
    radical: { char: "门", name: "дверь" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Рисунок двухстворчатой двери",
    examples: ["门口", "开门"], exampleMeanings: ["вход", "открыть дверь"]
},
{
    id: 57, char: "开", pinyin: "kāi", meaning: "открывать",
    parts: [{ char: "一", meaning: "один" }, { char: "廾", meaning: "две руки" }],
    radical: { char: "廾", name: "две руки" }, phonetic: null,
    type: "идеограмма",
    explanation: "Две руки открывают засов → открывать",
    examples: ["开门", "开始"], exampleMeanings: ["открыть дверь", "начинать"]
},
{
    id: 58, char: "关", pinyin: "guān", meaning: "закрывать",
    parts: [{ char: "丷", meaning: "восемь" }, { char: "天", meaning: "небо" }],
    radical: { char: "丷", name: "восемь" }, phonetic: null,
    type: "идеограмма",
    explanation: "Дверь с засовом поперёк → закрывать",
    examples: ["关门", "关心"], exampleMeanings: ["закрыть дверь", "заботиться"]
},
{
    id: 59, char: "事", pinyin: "shì", meaning: "дело",
    parts: [{ char: "一", meaning: "один" }, { char: "口", meaning: "рот" }, { char: "彐", meaning: "рука" }],
    radical: { char: "亅", name: "крюк" }, phonetic: null,
    type: "идеограмма",
    explanation: "Рука с инструментом → работа, дело",
    examples: ["事情", "好事"], exampleMeanings: ["дело", "хорошее дело"]
},
{
    id: 60, char: "情", pinyin: "qíng", meaning: "чувство",
    parts: [{ char: "忄", meaning: "сердце" }, { char: "青", meaning: "зелёный" }],
    radical: { char: "忄", name: "сердце" },
    phonetic: { char: "青", reading: "qīng", note: "qīng → qíng" },
    type: "фонетический",
    explanation: "Сердце + зелёный = чувство, эмоция",
    examples: ["感情", "心情"], exampleMeanings: ["чувства", "настроение"]
},

// ========== 61-70 ==========
{
    id: 61, char: "想", pinyin: "xiǎng", meaning: "думать, хотеть",
    parts: [{ char: "相", meaning: "взаимный" }, { char: "心", meaning: "сердце" }],
    radical: { char: "心", name: "сердце" },
    phonetic: { char: "相", reading: "xiāng", note: "xiāng → xiǎng" },
    type: "фонетический",
    explanation: "Взаимный + сердце = думать, скучать",
    examples: ["想家", "想法"], exampleMeanings: ["скучать по дому", "мысль"]
},
{
    id: 62, char: "知", pinyin: "zhī", meaning: "знать",
    parts: [{ char: "矢", meaning: "стрела" }, { char: "口", meaning: "рот" }],
    radical: { char: "矢", name: "стрела" }, phonetic: null,
    type: "идеограмма",
    explanation: "Стрела изо рта → знание передаётся быстро",
    examples: ["知道", "不知"], exampleMeanings: ["знать", "не знать"]
},
{
    id: 63, char: "道", pinyin: "dào", meaning: "путь, говорить",
    parts: [{ char: "辶", meaning: "движение" }, { char: "首", meaning: "голова" }],
    radical: { char: "辶", name: "движение" },
    phonetic: { char: "首", reading: "shǒu", note: "shǒu → dào" },
    type: "фонетический",
    explanation: "Движение + голова = путь, дорога, Дао",
    examples: ["道路", "知道"], exampleMeanings: ["дорога", "знать"]
},
{
    id: 64, char: "理", pinyin: "lǐ", meaning: "логика, управлять",
    parts: [{ char: "王", meaning: "нефрит" }, { char: "里", meaning: "внутри" }],
    radical: { char: "王", name: "нефрит" },
    phonetic: { char: "里", reading: "lǐ", note: "идеограмма+фонетик" },
    type: "фонетический",
    explanation: "Нефрит + внутри = узор на нефрите → логика",
    examples: ["理由", "道理"], exampleMeanings: ["причина", "принцип"]
},
{
    id: 65, char: "解", pinyin: "jiě", meaning: "разъединять, понимать",
    parts: [{ char: "角", meaning: "рог" }, { char: "刀", meaning: "нож" }, { char: "牛", meaning: "корова" }],
    radical: { char: "角", name: "рог" }, phonetic: null,
    type: "идеограмма",
    explanation: "Нож разделывает корову по рогу → разбирать, понимать",
    examples: ["解决", "了解"], exampleMeanings: ["решать", "понимать"]
},
{
    id: 66, char: "意", pinyin: "yì", meaning: "смысл, намерение",
    parts: [{ char: "音", meaning: "звук" }, { char: "心", meaning: "сердце" }],
    radical: { char: "心", name: "сердце" },
    phonetic: { char: "音", reading: "yīn", note: "yīn → yì" },
    type: "фонетический",
    explanation: "Звук + сердце = смысл, идея",
    examples: ["意思", "意见"], exampleMeanings: ["значение", "мнение"]
},
{
    id: 67, char: "思", pinyin: "sī", meaning: "мыслить",
    parts: [{ char: "田", meaning: "поле" }, { char: "心", meaning: "сердце" }],
    radical: { char: "心", name: "сердце" }, phonetic: null,
    type: "идеограмма",
    explanation: "Сердце размышляет над полем → думать",
    examples: ["思考", "思想"], exampleMeanings: ["размышлять", "мысль"]
},
{
    id: 68, char: "心", pinyin: "xīn", meaning: "сердце",
    parts: [{ char: "心", meaning: "сердце" }],
    radical: { char: "心", name: "сердце" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Рисунок сердца и сосудов",
    examples: ["心里", "小心"], exampleMeanings: ["в душе", "осторожно"]
},
{
    id: 69, char: "爱", pinyin: "ài", meaning: "любовь",
    parts: [{ char: "爫", meaning: "рука" }, { char: "冖", meaning: "крыша" }, { char: "友", meaning: "друг" }],
    radical: { char: "爫", name: "рука" }, phonetic: null,
    type: "идеограмма",
    explanation: "Рука накрывает друга с любовью",
    examples: ["爱情", "爱人"], exampleMeanings: ["любовь", "возлюбленный"]
},
{
    id: 70, char: "友", pinyin: "yǒu", meaning: "друг",
    parts: [{ char: "一", meaning: "один" }, { char: "又", meaning: "рука" }],
    radical: { char: "又", name: "рука" }, phonetic: null,
    type: "идеограмма",
    explanation: "Две руки, пожимающие друг друга → друг",
    examples: ["朋友", "友好"], exampleMeanings: ["друг", "дружелюбный"]
},

// ========== 71-80 ==========
{
    id: 71, char: "高", pinyin: "gāo", meaning: "высокий",
    parts: [{ char: "亠", meaning: "крыша" }, { char: "口", meaning: "рот" }, { char: "冂", meaning: "рамка" }],
    radical: { char: "高", name: "высокий" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Рисунок высокого здания с башней",
    examples: ["高兴", "高大"], exampleMeanings: ["радостный", "высокий и большой"]
},
{
    id: 72, char: "低", pinyin: "dī", meaning: "низкий",
    parts: [{ char: "亻", meaning: "человек" }, { char: "氐", meaning: "основание" }],
    radical: { char: "亻", name: "человек" },
    phonetic: { char: "氐", reading: "dǐ", note: "dǐ → dī" },
    type: "фонетический",
    explanation: "Человек + основание = низкий рост",
    examples: ["低头", "高低"], exampleMeanings: ["опустить голову", "высота"]
},
{
    id: 73, char: "长", pinyin: "cháng", meaning: "длинный",
    parts: [{ char: "长", meaning: "длинные волосы" }],
    radical: { char: "长", name: "длинный" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Старик с длинными волосами → длинный",
    examples: ["很长", "长跑"], exampleMeanings: ["очень длинный", "бег на длинную дистанцию"]
},
{
    id: 74, char: "短", pinyin: "duǎn", meaning: "короткий",
    parts: [{ char: "矢", meaning: "стрела" }, { char: "豆", meaning: "боб" }],
    radical: { char: "矢", name: "стрела" },
    phonetic: { char: "豆", reading: "dòu", note: "dòu → duǎn" },
    type: "фонетический",
    explanation: "Стрела + боб = короткий (боб короче стрелы)",
    examples: ["很短", "短裤"], exampleMeanings: ["очень короткий", "шорты"]
},
{
    id: 75, char: "新", pinyin: "xīn", meaning: "новый",
    parts: [{ char: "亲", meaning: "родственник" }, { char: "斤", meaning: "топор" }],
    radical: { char: "斤", name: "топор" },
    phonetic: { char: "亲", reading: "qīn", note: "qīn → xīn" },
    type: "фонетический",
    explanation: "Топор рубит дерево для нового дома",
    examples: ["新年", "新衣服"], exampleMeanings: ["Новый год", "новая одежда"]
},
{
    id: 76, char: "旧", pinyin: "jiù", meaning: "старый",
    parts: [{ char: "丨", meaning: "вертикаль" }, { char: "日", meaning: "день" }],
    radical: { char: "日", name: "день" }, phonetic: null,
    type: "идеограмма",
    explanation: "Солнце, которое уже прошло → старый",
    examples: ["旧书", "旧衣服"], exampleMeanings: ["старая книга", "старая одежда"]
},
{
    id: 77, char: "老", pinyin: "lǎo", meaning: "старый (о людях)",
    parts: [{ char: "耂", meaning: "старый" }, { char: "匕", meaning: "ложка" }],
    radical: { char: "老", name: "старый" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Старик с палкой и волосами → старый",
    examples: ["老师", "老人"], exampleMeanings: ["учитель", "старик"]
},
{
    id: 78, char: "年", pinyin: "nián", meaning: "год",
    parts: [{ char: "禾", meaning: "зерно" }, { char: "人", meaning: "человек" }],
    radical: { char: "干", name: "сухой" }, phonetic: null,
    type: "идеограмма",
    explanation: "Человек несёт урожай → год (урожайный цикл)",
    examples: ["今年", "明年"], exampleMeanings: ["в этом году", "в будущем году"]
},
{
    id: 79, char: "月", pinyin: "yuè", meaning: "месяц, луна",
    parts: [{ char: "月", meaning: "луна" }],
    radical: { char: "月", name: "луна" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Рисунок полумесяца",
    examples: ["月亮", "一个月"], exampleMeanings: ["луна", "один месяц"]
},
{
    id: 80, char: "日", pinyin: "rì", meaning: "день, солнце",
    parts: [{ char: "日", meaning: "солнце" }],
    radical: { char: "日", name: "солнце" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Круг с точкой — древний рисунок солнца",
    examples: ["日子", "星期日"], exampleMeanings: ["день", "воскресенье"]
},

// ========== 81-90 ==========
{
    id: 81, char: "天", pinyin: "tiān", meaning: "небо, день",
    parts: [{ char: "一", meaning: "один" }, { char: "大", meaning: "большой" }],
    radical: { char: "一", name: "один" }, phonetic: null,
    type: "идеограмма",
    explanation: "Великий один → небо",
    examples: ["今天", "天气"], exampleMeanings: ["сегодня", "погода"]
},
{
    id: 82, char: "地", pinyin: "dì", meaning: "земля",
    parts: [{ char: "土", meaning: "земля" }, { char: "也", meaning: "тоже" }],
    radical: { char: "土", name: "земля" },
    phonetic: { char: "也", reading: "yě", note: "yě → dì" },
    type: "фонетический",
    explanation: "Земля + тоже = земля (основа всего)",
    examples: ["地方", "大地"], exampleMeanings: ["место", "великая земля"]
},
{
    id: 83, char: "上", pinyin: "shàng", meaning: "верх, на",
    parts: [{ char: "一", meaning: "один" }, { char: "卜", meaning: "гадание" }],
    radical: { char: "一", name: "один" }, phonetic: null,
    type: "указательный",
    explanation: "Короткая черта над длинной → сверху",
    examples: ["上面", "上车"], exampleMeanings: ["сверху", "сесть в машину"]
},
{
    id: 84, char: "下", pinyin: "xià", meaning: "низ, под",
    parts: [{ char: "一", meaning: "один" }, { char: "卜", meaning: "гадание" }],
    radical: { char: "一", name: "один" }, phonetic: null,
    type: "указательный",
    explanation: "Короткая черта под длинной → снизу",
    examples: ["下面", "下车"], exampleMeanings: ["снизу", "выйти из машины"]
},
{
    id: 85, char: "中", pinyin: "zhōng", meaning: "середина, в",
    parts: [{ char: "口", meaning: "рот" }, { char: "丨", meaning: "вертикаль" }],
    radical: { char: "丨", name: "вертикаль" }, phonetic: null,
    type: "указательный",
    explanation: "Вертикаль проходит через центр рта → середина",
    examples: ["中国", "中午"], exampleMeanings: ["Китай", "полдень"]
},
{
    id: 86, char: "里", pinyin: "lǐ", meaning: "внутри",
    parts: [{ char: "日", meaning: "солнце" }, { char: "土", meaning: "земля" }],
    radical: { char: "里", name: "внутри" }, phonetic: null,
    type: "идеограмма",
    explanation: "Солнце над землёй в деревне → внутри",
    examples: ["里面", "这里"], exampleMeanings: ["внутри", "здесь"]
},
{
    id: 87, char: "外", pinyin: "wài", meaning: "снаружи",
    parts: [{ char: "夕", meaning: "вечер" }, { char: "卜", meaning: "гадание" }],
    radical: { char: "夕", name: "вечер" }, phonetic: null,
    type: "идеограмма",
    explanation: "Вечернее гадание на улице → снаружи",
    examples: ["外面", "外国"], exampleMeanings: ["снаружи", "заграница"]
},
{
    id: 88, char: "前", pinyin: "qián", meaning: "перед, впереди",
    parts: [{ char: "丷", meaning: "восемь" }, { char: "月", meaning: "луна" }, { char: "刂", meaning: "нож" }],
    radical: { char: "刂", name: "нож" }, phonetic: null,
    type: "идеограмма",
    explanation: "Нож отрезает переднюю часть",
    examples: ["前面", "前天"], exampleMeanings: ["впереди", "позавчера"]
},
{
    id: 89, char: "后", pinyin: "hòu", meaning: "после, сзади",
    parts: [{ char: "厂", meaning: "скала" }, { char: "口", meaning: "рот" }],
    radical: { char: "厂", name: "скала" }, phonetic: null,
    type: "идеограмма",
    explanation: "Король, идущий позади → сзади, после",
    examples: ["后面", "后天"], exampleMeanings: ["сзади", "послезавтра"]
},
{
    id: 90, char: "左", pinyin: "zuǒ", meaning: "левый",
    parts: [{ char: "工", meaning: "работа" }, { char: "手", meaning: "рука" }],
    radical: { char: "工", name: "работа" }, phonetic: null,
    type: "идеограмма",
    explanation: "Рука, помогающая при работе → левая рука",
    examples: ["左边", "左右"], exampleMeanings: ["слева", "слева и справа"]
},

// ========== 91-100 ==========
{
    id: 91, char: "右", pinyin: "yòu", meaning: "правый",
    parts: [{ char: "口", meaning: "рот" }, { char: "手", meaning: "рука" }],
    radical: { char: "口", name: "рот" }, phonetic: null,
    type: "идеограмма",
    explanation: "Рука у рта → правый (правой рукой едят)",
    examples: ["右边", "右手"], exampleMeanings: ["справа", "правая рука"]
},
{
    id: 92, char: "东", pinyin: "dōng", meaning: "восток",
    parts: [{ char: "七", meaning: "семь" }, { char: "小", meaning: "маленький" }],
    radical: { char: "木", name: "дерево" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Рисунок солнца за деревом → восток",
    examples: ["东方", "东西"], exampleMeanings: ["восток", "вещь"]
},
{
    id: 93, char: "西", pinyin: "xī", meaning: "запад",
    parts: [{ char: "西", meaning: "запад" }],
    radical: { char: "西", name: "запад" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Птица садится в гнездо на закате → запад",
    examples: ["西方", "东西"], exampleMeanings: ["запад", "вещь"]
},
{
    id: 94, char: "南", pinyin: "nán", meaning: "юг",
    parts: [{ char: "十", meaning: "десять" }, { char: "门", meaning: "дверь" }, { char: "羊", meaning: "овца" }],
    radical: { char: "十", name: "десять" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Растение, растущее на юге",
    examples: ["南方", "南京"], exampleMeanings: ["юг", "Нанкин (южная столица)"]
},
{
    id: 95, char: "北", pinyin: "běi", meaning: "север",
    parts: [{ char: "匕", meaning: "ложка" }, { char: "匕", meaning: "ложка" }],
    radical: { char: "匕", name: "ложка" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Два человека спиной друг к другу → север",
    examples: ["北方", "北京"], exampleMeanings: ["север", "Пекин (северная столица)"]
},
{
    id: 96, char: "水", pinyin: "shuǐ", meaning: "вода",
    parts: [{ char: "水", meaning: "вода" }],
    radical: { char: "水", name: "вода" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Рисунок текущей воды",
    examples: ["水果", "水杯"], exampleMeanings: ["фрукты", "стакан воды"]
},
{
    id: 97, char: "火", pinyin: "huǒ", meaning: "огонь",
    parts: [{ char: "火", meaning: "огонь" }],
    radical: { char: "火", name: "огонь" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Рисунок языка пламени",
    examples: ["火车", "火锅"], exampleMeanings: ["поезд", "китайский фондю"]
},
{
    id: 98, char: "风", pinyin: "fēng", meaning: "ветер",
    parts: [{ char: "几", meaning: "несколько" }, { char: "乂", meaning: "резать" }],
    radical: { char: "风", name: "ветер" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Рисунок ветра, дующего в парусе",
    examples: ["大风", "风景"], exampleMeanings: ["сильный ветер", "пейзаж"]
},
{
    id: 99, char: "雨", pinyin: "yǔ", meaning: "дождь",
    parts: [{ char: "一", meaning: "один" }, { char: "门", meaning: "дверь" }, { char: "丨", meaning: "вертикаль" }],
    radical: { char: "雨", name: "дождь" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Рисунок дождя с неба",
    examples: ["下雨", "雨天"], exampleMeanings: ["идёт дождь", "дождливый день"]
},
{
    id: 100, char: "雪", pinyin: "xuě", meaning: "снег",
    parts: [{ char: "雨", meaning: "дождь" }, { char: "彐", meaning: "рука" }],
    radical: { char: "雨", name: "дождь" },
    phonetic: { char: "彐", reading: "jì", note: "связано с очисткой" },
    type: "идеограмма",
    explanation: "Дождь + рука метёт = снег (который метут)",
    examples: ["大雪", "雪白"], exampleMeanings: ["большой снег", "белоснежный"]
},
    // ========== Дополнительные иероглифы для ТОП-100 ==========

{
    id: 101, char: "把", pinyin: "bǎ", meaning: "брать; счётное слово для предметов с ручкой",
    parts: [{ char: "扌", meaning: "рука" }, { char: "巴", meaning: "змея" }],
    radical: { char: "扌", name: "рука" },
    phonetic: { char: "巴", reading: "bā", note: "bā → bǎ" },
    type: "фонетический",
    explanation: "Рука + змея = держать, хватать",
    examples: ["把门打开", "一把刀"], exampleMeanings: ["открыть дверь", "один нож"]
},
{
    id: 102, char: "被", pinyin: "bèi", meaning: "пассивный показатель; одеяло",
    parts: [{ char: "衤", meaning: "одежда" }, { char: "皮", meaning: "кожа" }],
    radical: { char: "衤", name: "одежда" },
    phonetic: { char: "皮", reading: "pí", note: "pí → bèi" },
    type: "фонетический",
    explanation: "Одежда + кожа = одеяло → показатель пассива",
    examples: ["被打", "被子"], exampleMeanings: ["быть битым", "одеяло"]
},
{
    id: 103, char: "之", pinyin: "zhī", meaning: "частица (книжн.), его",
    parts: [{ char: "丶", meaning: "точка" }, { char: "乙", meaning: "изгиб" }],
    radical: { char: "丶", name: "точка" }, phonetic: null,
    type: "идеограмма",
    explanation: "Нога, уходящая от земли → указка на предмет",
    examples: ["之后", "之前"], exampleMeanings: ["после этого", "до этого"]
},
{
    id: 104, char: "等", pinyin: "děng", meaning: "ждать; и так далее",
    parts: [{ char: "⺮", meaning: "бамбук" }, { char: "寺", meaning: "храм" }],
    radical: { char: "⺮", name: "бамбук" },
    phonetic: { char: "寺", reading: "sì", note: "sì → děng" },
    type: "фонетический",
    explanation: "Бамбук + храм = ждать (бамбуковые палочки для счёта)",
    examples: ["等等", "等一等"], exampleMeanings: ["подожди", "подожди немного"]
},
{
    id: 105, char: "于", pinyin: "yú", meaning: "в, на, для (книжн.)",
    parts: [{ char: "二", meaning: "два" }, { char: "亅", meaning: "крюк" }],
    radical: { char: "二", name: "два" }, phonetic: null,
    type: "идеограмма",
    explanation: "Воздух, выходящий изо рта → предлог места",
    examples: ["对于", "关于"], exampleMeanings: ["касательно", "относительно"]
},
{
    id: 106, char: "由", pinyin: "yóu", meaning: "через, из-за, от",
    parts: [{ char: "曰", meaning: "сказать" }, { char: "丨", meaning: "вертикаль" }],
    radical: { char: "田", name: "поле" }, phonetic: null,
    type: "идеограмма",
    explanation: "Масло выходит из семян → происходить из",
    examples: ["由于", "理由"], exampleMeanings: ["из-за", "причина"]
},
{
    id: 107, char: "与", pinyin: "yǔ", meaning: "и, с (книжн.)",
    parts: [{ char: "一", meaning: "один" }, { char: "勺", meaning: "ковш" }],
    radical: { char: "一", name: "один" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Три руки, работающие вместе → соединение",
    examples: ["与别人", "参与"], exampleMeanings: ["с другими", "участвовать"]
},
{
    id: 108, char: "但", pinyin: "dàn", meaning: "но, однако",
    parts: [{ char: "亻", meaning: "человек" }, { char: "旦", meaning: "рассвет" }],
    radical: { char: "亻", name: "человек" },
    phonetic: { char: "旦", reading: "dàn", note: "полное совпадение" },
    type: "фонетический",
    explanation: "Человек + рассвет = однако (смысл ослаб)",
    examples: ["但是", "不但"], exampleMeanings: ["но", "не только"]
},
{
    id: 109, char: "而", pinyin: "ér", meaning: "и, но (книжн.)",
    parts: [{ char: "一", meaning: "один" }, { char: "丨", meaning: "вертикаль" }],
    radical: { char: "而", name: "борода" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Рисунок бороды → связка (и, но)",
    examples: ["然而", "而已"], exampleMeanings: ["однако", "и всё"]
},
{
    id: 110, char: "如", pinyin: "rú", meaning: "как, подобно, если",
    parts: [{ char: "女", meaning: "женщина" }, { char: "口", meaning: "рот" }],
    radical: { char: "女", name: "женщина" },
    phonetic: { char: "口", reading: "kǒu", note: "связь ослабла" },
    type: "фонетический",
    explanation: "Женщина + рот = слушаться → как, подобно",
    examples: ["如果", "比如"], exampleMeanings: ["если", "например"]
},
{
    id: 111, char: "间", pinyin: "jiān", meaning: "между, промежуток",
    parts: [{ char: "门", meaning: "дверь" }, { char: "日", meaning: "солнце" }],
    radical: { char: "门", name: "дверь" }, phonetic: null,
    type: "идеограмма",
    explanation: "Солнце в двери → промежуток, комната",
    examples: ["时间", "房间"], exampleMeanings: ["время", "комната"]
},
{
    id: 112, char: "得", pinyin: "de/dé/děi", meaning: "получать; суффикс; должен",
    parts: [{ char: "彳", meaning: "шаг" }, { char: "日", meaning: "солнце" }, { char: "一寸", meaning: "дюйм" }],
    radical: { char: "彳", name: "шаг" },
    phonetic: { char: "㝵", reading: "dé", note: "фонетик" },
    type: "фонетический",
    explanation: "Шаг + солнце + дюйм = достигать, получать",
    examples: ["得到", "很好得"], exampleMeanings: ["получить", "очень хорошо (суфф.)"]
},
{
    id: 113, char: "着", pinyin: "zhe", meaning: "показатель длительного действия",
    parts: [{ char: "羊", meaning: "овца" }, { char: "目", meaning: "глаз" }],
    radical: { char: "羊", name: "овца" }, phonetic: null,
    type: "идеограмма",
    explanation: "Овца с глазами → состояние (как шерсть прилегает)",
    examples: ["看着", "躺着"], exampleMeanings: ["смотрит", "лежит"]
},
{
    id: 114, char: "起", pinyin: "qǐ", meaning: "подниматься",
    parts: [{ char: "走", meaning: "идти" }, { char: "己", meaning: "сам" }],
    radical: { char: "走", name: "идти" },
    phonetic: { char: "己", reading: "jǐ", note: "jǐ → qǐ" },
    type: "фонетический",
    explanation: "Идти + сам = вставать, подниматься",
    examples: ["起来", "起床"], exampleMeanings: ["вставать", "подняться с кровати"]
},
{
    id: 115, char: "作", pinyin: "zuò", meaning: "делать, работать",
    parts: [{ char: "亻", meaning: "человек" }, { char: "乍", meaning: "внезапно" }],
    radical: { char: "亻", name: "человек" },
    phonetic: { char: "乍", reading: "zhà", note: "zhà → zuò" },
    type: "фонетический",
    explanation: "Человек + внезапно = начинать работу",
    examples: ["工作", "作家"], exampleMeanings: ["работа", "писатель"]
},
{
    id: 116, char: "问", pinyin: "wèn", meaning: "спрашивать",
    parts: [{ char: "门", meaning: "дверь" }, { char: "口", meaning: "рот" }],
    radical: { char: "门", name: "дверь" }, phonetic: null,
    type: "идеограмма",
    explanation: "Рот в дверях → спрашивать (стучаться)",
    examples: ["问题", "请问"], exampleMeanings: ["вопрос", "разрешите спросить"]
},
{
    id: 117, char: "答", pinyin: "dá", meaning: "отвечать",
    parts: [{ char: "⺮", meaning: "бамбук" }, { char: "合", meaning: "соединять" }],
    radical: { char: "⺮", name: "бамбук" },
    phonetic: { char: "合", reading: "hé", note: "hé → dá" },
    type: "фонетический",
    explanation: "Бамбук + соединять = ответ (на бамбуковой табличке)",
    examples: ["回答", "答案"], exampleMeanings: ["отвечать", "ответ"]
},
{
    id: 118, char: "入", pinyin: "rù", meaning: "входить",
    parts: [{ char: "人", meaning: "человек" }],
    radical: { char: "入", name: "входить" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Остриё, входящее во что-то → входить",
    examples: ["进入", "入口"], exampleMeanings: ["войти", "вход"]
},
{
    id: 119, char: "进", pinyin: "jìn", meaning: "входить, продвигаться",
    parts: [{ char: "辶", meaning: "движение" }, { char: "井", meaning: "колодец" }],
    radical: { char: "辶", name: "движение" },
    phonetic: { char: "井", reading: "jǐng", note: "jǐng → jìn" },
    type: "фонетический",
    explanation: "Движение + колодец = войти, двигаться вперёд",
    examples: ["进来", "进步"], exampleMeanings: ["войти", "прогресс"]
},
{
    id: 120, char: "坐", pinyin: "zuò", meaning: "сидеть",
    parts: [{ char: "人", meaning: "человек" }, { char: "土", meaning: "земля" }],
    radical: { char: "土", name: "земля" }, phonetic: null,
    type: "идеограмма",
    explanation: "Два человека на земле → сидеть",
    examples: ["坐下", "请坐"], exampleMeanings: ["сесть", "садитесь"]
},
{
    id: 121, char: "站", pinyin: "zhàn", meaning: "стоять, станция",
    parts: [{ char: "立", meaning: "стоять" }, { char: "占", meaning: "занимать" }],
    radical: { char: "立", name: "стоять" },
    phonetic: { char: "占", reading: "zhān", note: "zhān → zhàn" },
    type: "фонетический",
    explanation: "Стоять + занимать = стоять, станция",
    examples: ["车站", "站着"], exampleMeanings: ["станция", "стоять"]
},
{
    id: 122, char: "放", pinyin: "fàng", meaning: "ставить, отпускать",
    parts: [{ char: "方", meaning: "квадрат" }, { char: "攵", meaning: "рука с палкой" }],
    radical: { char: "攵", name: "ударять" },
    phonetic: { char: "方", reading: "fāng", note: "fāng → fàng" },
    type: "фонетический",
    explanation: "Квадрат + рука = отпускать, ставить",
    examples: ["放学", "放心"], exampleMeanings: ["закончить школу", "расслабиться"]
},
{
    id: 123, char: "拿", pinyin: "ná", meaning: "брать, держать",
    parts: [{ char: "合", meaning: "соединять" }, { char: "手", meaning: "рука" }],
    radical: { char: "手", name: "рука" }, phonetic: null,
    type: "идеограмма",
    explanation: "Соединить руку → брать",
    examples: ["拿东西", "拿来"], exampleMeanings: ["взять вещь", "принести"]
},
{
    id: 124, char: "给", pinyin: "gěi", meaning: "давать",
    parts: [{ char: "纟", meaning: "шёлк" }, { char: "合", meaning: "соединять" }],
    radical: { char: "纟", name: "шёлк" },
    phonetic: { char: "合", reading: "hé", note: "hé → gěi" },
    type: "фонетический",
    explanation: "Шёлк + соединять = давать (как передавать связь)",
    examples: ["给你", "送给"], exampleMeanings: ["дать тебе", "подарить"]
},
{
    id: 125, char: "找", pinyin: "zhǎo", meaning: "искать",
    parts: [{ char: "扌", meaning: "рука" }, { char: "戈", meaning: "копьё" }],
    radical: { char: "扌", name: "рука" }, phonetic: null,
    type: "идеограмма",
    explanation: "Рука ищет копьё → искать",
    examples: ["找到", "找工作"], exampleMeanings: ["найти", "искать работу"]
},
{
    id: 126, char: "用", pinyin: "yòng", meaning: "использовать",
    parts: [{ char: "用", meaning: "использовать" }],
    radical: { char: "用", name: "использовать" }, phonetic: null,
    type: "пиктограмма",
    explanation: "Колокол → годный к использованию",
    examples: ["用钱", "使用"], exampleMeanings: ["тратить деньги", "использовать"]
},
{
    id: 127, char: "做", pinyin: "zuò", meaning: "делать",
    parts: [{ char: "亻", meaning: "человек" }, { char: "故", meaning: "старый" }],
    radical: { char: "亻", name: "человек" },
    phonetic: { char: "故", reading: "gù", note: "gù → zuò" },
    type: "фонетический",
    explanation: "Человек делает что-то → делать",
    examples: ["做工作", "做菜"], exampleMeanings: ["делать работу", "готовить еду"]
}
];

// Сохраняем в localStorage для использования в других файлах
if (typeof localStorage !== 'undefined') {
    localStorage.setItem('frequencyDB', JSON.stringify(frequencyDB));
}

// Выводим информацию в консоль
console.log(`📊 frequency-db.js загружена! Количество слов: ${frequencyDB.length}`);
