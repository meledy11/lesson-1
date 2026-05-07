// frequency-db.js — 30 самых частотных слов с полным разбором

const frequencyDB = [
    {
        id: 1,
        char: "的",
        pinyin: "de",
        meaning: "притяжательная частица",
        level: 1,
        parts: [
            { char: "白", meaning: "белый", note: "смысловая часть" },
            { char: "勺", meaning: "ковш", note: "фонетическая часть" }
        ],
        radical: { char: "白", name: "белый" },
        phonetic: { char: "勺", reading: "sháo", note: "связь ослабла (sháo → de)" },
        type: "фонетический (ослабленный)",
        explanation: "Белый + ковш = притяжательная частица (самый частый иероглиф в языке)",
        examples: ["我的", "你的", "他的"],
        exampleMeanings: ["моё", "твоё", "его"]
    },
    {
        id: 2,
        char: "了",
        pinyin: "le",
        meaning: "показатель завершённого действия",
        level: 1,
        parts: [
            { char: "子", meaning: "ребёнок", note: "историческая форма свёрнутого младенца" }
        ],
        radical: { char: "乛", name: "крюк" },
        phonetic: null,
        type: "пиктограмма",
        explanation: "Древний рисунок свёрнутого младенца → завершение, конец действия",
        examples: ["吃了", "走了", "好了"],
        exampleMeanings: ["съел", "ушёл", "готово"]
    },
    {
        id: 3,
        char: "不",
        pinyin: "bù",
        meaning: "не, нет",
        level: 1,
        parts: [
            { char: "一", meaning: "один / небо", note: "верхняя черта" },
            { char: "小", meaning: "маленький", note: "внизу три точки" }
        ],
        radical: { char: "一", name: "один" },
        phonetic: null,
        type: "идеограмма",
        explanation: "Птица, улетающая вверх → отрицание 'не'",
        examples: ["不是", "不好", "不对"],
        exampleMeanings: ["не является", "нехорошо", "неправильно"]
    },
    {
        id: 4,
        char: "也",
        pinyin: "yě",
        meaning: "тоже",
        level: 1,
        parts: [
            { char: "乛", meaning: "крюк", note: "змея" },
            { char: "丨", meaning: "вертикаль", note: "тело" }
        ],
        radical: { char: "乛", name: "крюк" },
        phonetic: null,
        type: "пиктограмма",
        explanation: "Древний рисунок змеи → 'тоже' (звук заимствован)",
        examples: ["我也是", "他也"],
        exampleMeanings: ["я тоже", "он тоже"]
    },
    {
        id: 5,
        char: "就",
        pinyin: "jiù",
        meaning: "именно, сразу, тогда",
        level: 1,
        parts: [
            { char: "京", meaning: "столица", note: "фонетическая часть" },
            { char: "尤", meaning: "особенно", note: "смысловая часть" }
        ],
        radical: { char: "尢", name: "хромой" },
        phonetic: { char: "京", reading: "jīng", note: "связь: jīng → jiù" },
        type: "фонетический",
        explanation: "Столица + особенно = 'именно, сразу'",
        examples: ["就是", "就要", "我就来"],
        exampleMeanings: ["именно", "сразу хочу", "я сейчас приду"]
    },
    {
        id: 6,
        char: "都",
        pinyin: "dōu",
        meaning: "все, оба",
        level: 1,
        parts: [
            { char: "者", meaning: "тот, кто", note: "фонетическая часть" },
            { char: "阝", meaning: "город", note: "смысловой ключ" }
        ],
        radical: { char: "阝", name: "город" },
        phonetic: { char: "者", reading: "zhě", note: "изменилось: zhě → dōu" },
        type: "фонетический",
        explanation: "Город + 'тот, кто' = 'все' (все жители города)",
        examples: ["都是", "都好", "都来"],
        exampleMeanings: ["все являются", "всё хорошо", "все приходят"]
    },
    {
        id: 7,
        char: "还",
        pinyin: "hái",
        meaning: "ещё, всё ещё",
        level: 1,
        parts: [
            { char: "不", meaning: "не", note: "сверху" },
            { char: "辶", meaning: "движение", note: "снизу" }
        ],
        radical: { char: "辶", name: "движение" },
        phonetic: null,
        type: "идеограмма",
        explanation: "Не уходить → 'ещё (здесь)'",
        examples: ["还好", "还是", "还有"],
        exampleMeanings: ["ещё неплохо", "всё ещё", "ещё есть"]
    },
    {
        id: 8,
        char: "只",
        pinyin: "zhǐ",
        meaning: "только",
        level: 1,
        parts: [
            { char: "口", meaning: "рот", note: "ключ" },
            { char: "八", meaning: "восемь", note: "две ноги" }
        ],
        radical: { char: "口", name: "рот" },
        phonetic: null,
        type: "пиктограмма",
        explanation: "Рот + две ноги = птица → со временем получило значение 'только'",
        examples: ["只有", "只是", "只吃"],
        exampleMeanings: ["только есть", "просто", "только есть"]
    },
    {
        id: 9,
        char: "很",
        pinyin: "hěn",
        meaning: "очень, довольно",
        level: 1,
        parts: [
            { char: "彳", meaning: "шаг", note: "смысловой ключ" },
            { char: "艮", meaning: "граница", note: "фонетическая часть" }
        ],
        radical: { char: "彳", name: "шаг" },
        phonetic: { char: "艮", reading: "gèn", note: "gèn → hěn" },
        type: "фонетический",
        explanation: "Шаг + граница = 'очень' (идти до границы)",
        examples: ["很好", "很大", "很快"],
        exampleMeanings: ["очень хорошо", "очень большой", "очень быстро"]
    },
    {
        id: 10,
        char: "没",
        pinyin: "méi",
        meaning: "не иметь, ещё не",
        level: 1,
        parts: [
            { char: "氵", meaning: "вода", note: "смысловой ключ" },
            { char: "殳", meaning: "ударять", note: "фонетическая часть" }
        ],
        radical: { char: "氵", name: "вода" },
        phonetic: { char: "殳", reading: "shū", note: "shū → méi (сильное изменение)" },
        type: "фонетический",
        explanation: "Вода + ударять = 'утонуть' → отрицание наличия",
        examples: ["没有", "没来", "没吃"],
        exampleMeanings: ["не иметь", "не пришёл", "не ел"]
    },
    {
        id: 11,
        char: "我",
        pinyin: "wǒ",
        meaning: "я, мы",
        level: 1,
        parts: [
            { char: "手", meaning: "рука", note: "левая часть (исторически)" },
            { char: "戈", meaning: "копьё", note: "правая часть" }
        ],
        radical: { char: "戈", name: "копьё" },
        phonetic: null,
        type: "идеограмма",
        explanation: "Рука, держащая копьё → 'я' как воин, личность",
        examples: ["我们", "我的", "我家"],
        exampleMeanings: ["мы", "моё", "мой дом"]
    },
    {
        id: 12,
        char: "你",
        pinyin: "nǐ",
        meaning: "ты",
        level: 1,
        parts: [
            { char: "亻", meaning: "человек", note: "смысловой ключ" },
            { char: "尔", meaning: "ты (древн.)", note: "фонетическая часть" }
        ],
        radical: { char: "亻", name: "человек" },
        phonetic: { char: "尔", reading: "ěr", note: "ěr → nǐ" },
        type: "фонетический",
        explanation: "Человек + фонетика 'ты' = 'ты'",
        examples: ["你好", "你们", "你的"],
        exampleMeanings: ["привет", "вы (мн.ч.)", "твой"]
    },
    {
        id: 13,
        char: "他",
        pinyin: "tā",
        meaning: "он",
        level: 1,
        parts: [
            { char: "亻", meaning: "человек", note: "смысловой ключ" },
            { char: "也", meaning: "тоже", note: "фонетическая часть" }
        ],
        radical: { char: "亻", name: "человек" },
        phonetic: { char: "也", reading: "yě", note: "yě → tā" },
        type: "фонетический",
        explanation: "Человек + тоже = 'он'",
        examples: ["他们", "他的", "他家"],
        exampleMeanings: ["они (муж.)", "его", "его дом"]
    },
    {
        id: 14,
        char: "她",
        pinyin: "tā",
        meaning: "она",
        level: 1,
        parts: [
            { char: "女", meaning: "женщина", note: "смысловой ключ" },
            { char: "也", meaning: "тоже", note: "фонетическая часть" }
        ],
        radical: { char: "女", name: "женщина" },
        phonetic: { char: "也", reading: "yě", note: "yě → tā" },
        type: "фонетический",
        explanation: "Женщина + тоже = 'она'",
        examples: ["她们", "她的", "她家"],
        exampleMeanings: ["они (жен.)", "её", "её дом"]
    },
    {
        id: 15,
        char: "这",
        pinyin: "zhè",
        meaning: "этот, это",
        level: 1,
        parts: [
            { char: "辶", meaning: "движение", note: "смысловой ключ" },
            { char: "文", meaning: "текст", note: "фонетическая часть" }
        ],
        radical: { char: "辶", name: "движение" },
        phonetic: { char: "文", reading: "wén", note: "wén → zhè" },
        type: "фонетический",
        explanation: "Движение + текст = 'это' (указание на предмет)",
        examples: ["这个", "这里", "这么"],
        exampleMeanings: ["этот", "здесь", "так"]
    },
    {
        id: 16,
        char: "那",
        pinyin: "nà",
        meaning: "тот, то",
        level: 1,
        parts: [
            { char: "阝", meaning: "город", note: "смысловой ключ" },
            { char: "二", meaning: "два", note: "часть" }
        ],
        radical: { char: "阝", name: "город" },
        phonetic: null,
        type: "идеограмма",
        explanation: "Указание на удалённый предмет",
        examples: ["那个", "那里", "那么"],
        exampleMeanings: ["тот", "там", "так (удалённо)"]
    },
    {
        id: 17,
        char: "哪",
        pinyin: "nǎ",
        meaning: "который?",
        level: 1,
        parts: [
            { char: "口", meaning: "рот", note: "смысловой ключ" },
            { char: "那", meaning: "тот", note: "фонетическая часть" }
        ],
        radical: { char: "口", name: "рот" },
        phonetic: { char: "那", reading: "nà", note: "nà → nǎ (смена тона)" },
        type: "фонетический",
        explanation: "Рот + тот = вопросительное 'который?'",
        examples: ["哪个", "哪里", "哪位"],
        exampleMeanings: ["который", "где", "кто (вежливо)"]
    },
    {
        id: 18,
        char: "是",
        pinyin: "shì",
        meaning: "быть (глагол-связка)",
        level: 1,
        parts: [
            { char: "日", meaning: "солнце", note: "смысловой ключ" },
            { char: "正", meaning: "прямой", note: "часть" }
        ],
        radical: { char: "日", name: "солнце" },
        phonetic: null,
        type: "идеограмма",
        explanation: "Солнце, идущее прямо → 'правильно' → глагол 'быть'",
        examples: ["我是", "他是", "不是"],
        exampleMeanings: ["я есть", "он есть", "не является"]
    },
    {
        id: 19,
        char: "有",
        pinyin: "yǒu",
        meaning: "иметь, есть (наличие)",
        level: 1,
        parts: [
            { char: "月", meaning: "мясо (не луна!)", note: "смысловой ключ" },
            { char: "又", meaning: "рука", note: "фонетическая часть" }
        ],
        radical: { char: "月 (мясо)", name: "мясо" },
        phonetic: { char: "又", reading: "yòu", note: "yòu → yǒu (смена тона)" },
        type: "идеограмма + фонетик",
        explanation: "Рука, держащая мясо → 'иметь'",
        examples: ["我有", "他有", "没有"],
        exampleMeanings: ["у меня есть", "у него есть", "нет"]
    },
    {
        id: 20,
        char: "在",
        pinyin: "zài",
        meaning: "находиться в",
        level: 1,
        parts: [
            { char: "土", meaning: "земля", note: "смысловой ключ" },
            { char: "有", meaning: "иметь", note: "фонетическая часть" }
        ],
        radical: { char: "土", name: "земля" },
        phonetic: { char: "有", reading: "yǒu", note: "yǒu → zài (сильное изменение)" },
        type: "фонетический",
        explanation: "Земля + иметь = 'находиться где-то'",
        examples: ["在家", "在这里", "在哪"],
        exampleMeanings: ["дома", "здесь", "где"]
    

    },
    {
        id: 21,
        char: "去",
        pinyin: "qù",
        meaning: "идти (туда)",
        level: 1,
        parts: [
            { char: "土", meaning: "земля", note: "сверху" },
            { char: "厶", meaning: "я (древн.)", note: "снизу" }
        ],
        radical: { char: "厶", name: "частный" },
        phonetic: null,
        type: "идеограмма",
        explanation: "Древний рисунок: человек, уходящий от земли → 'идти'",
        examples: ["去北京", "去哪儿", "去了"],
        exampleMeanings: ["ехать в Пекин", "куда идти?", "ушёл"]
    },
    {
        id: 22,
        char: "来",
        pinyin: "lái",
        meaning: "приходить",
        level: 1,
        parts: [
            { char: "一", meaning: "один", note: "верхняя черта" },
            { char: "米", meaning: "рис", note: "фонетическая и смысловая часть" }
        ],
        radical: { char: "木", name: "дерево" },
        phonetic: { char: "米", reading: "mǐ", note: "mǐ → lái (сильное изменение)" },
        type: "фонетический",
        explanation: "Приходить как созревший рис (колос)",
        examples: ["来北京", "来这里", "来了"],
        exampleMeanings: ["приехать в Пекин", "прийти сюда", "пришёл"]
    },
    {
        id: 23,
        char: "回",
        pinyin: "huí",
        meaning: "возвращаться",
        level: 1,
        parts: [
            { char: "囗", meaning: "ограда", note: "смысловой ключ" },
            { char: "口", meaning: "рот", note: "внутренняя часть" }
        ],
        radical: { char: "囗", name: "ограда" },
        phonetic: null,
        type: "пиктограмма",
        explanation: "Рисунок спирали / витка → 'возвращаться'",
        examples: ["回家", "回来", "回去"],
        exampleMeanings: ["вернуться домой", "вернуться", "вернуться обратно"]
    },
    {
        id: 24,
        char: "走",
        pinyin: "zǒu",
        meaning: "идти пешком, уходить",
        level: 1,
        parts: [
            { char: "土", meaning: "земля", note: "сверху" },
            { char: "止", meaning: "стопа", note: "снизу" }
        ],
        radical: { char: "走", name: "идти" },
        phonetic: null,
        type: "пиктограмма",
        explanation: "Рисунок человека с трясущимися ногами → 'идти'",
        examples: ["走路", "走吧", "走了"],
        exampleMeanings: ["идти пешком", "пойдём", "ушёл"]
    },
    {
        id: 25,
        char: "看",
        pinyin: "kàn",
        meaning: "смотреть",
        level: 1,
        parts: [
            { char: "手", meaning: "рука", note: "сверху" },
            { char: "目", meaning: "глаз", note: "снизу" }
        ],
        radical: { char: "目", name: "глаз" },
        phonetic: null,
        type: "идеограмма",
        explanation: "Рука над глазом → 'смотреть'",
        examples: ["看书", "看电视", "看看"],
        exampleMeanings: ["читать книгу", "смотреть телевизор", "посмотреть"]
    },
    {
        id: 26,
        char: "听",
        pinyin: "tīng",
        meaning: "слушать",
        level: 1,
        parts: [
            { char: "口", meaning: "рот", note: "слева" },
            { char: "斤", meaning: "топор", note: "справа" }
        ],
        radical: { char: "口", name: "рот" },
        phonetic: null,
        type: "упрощённый (был сложный 聽)",
        explanation: "Упрощение: рот + топор. Раньше писалось как 'ухо + сердце'",
        examples: ["听音乐", "听见", "好听"],
        exampleMeanings: ["слушать музыку", "услышать", "приятно слушать"]
    },
    {
        id: 27,
        char: "说",
        pinyin: "shuō",
        meaning: "говорить",
        level: 1,
        parts: [
            { char: "讠", meaning: "речь", note: "смысловой ключ" },
            { char: "兑", meaning: "обменивать", note: "фонетическая часть" }
        ],
        radical: { char: "讠", name: "речь" },
        phonetic: { char: "兑", reading: "duì", note: "duì → shuō (сильное изменение)" },
        type: "фонетический",
        explanation: "Речь + обменивать = 'говорить, объяснять'",
        examples: ["说话", "说中文", "说明"],
        exampleMeanings: ["говорить", "говорить по-китайски", "объяснять"]
    },
    {
        id: 28,
        char: "吃",
        pinyin: "chī",
        meaning: "есть, кушать",
        level: 1,
        parts: [
            { char: "口", meaning: "рот", note: "смысловой ключ" },
            { char: "乞", meaning: "просить", note: "фонетическая часть" }
        ],
        radical: { char: "口", name: "рот" },
        phonetic: { char: "乞", reading: "qǐ", note: "qǐ → chī" },
        type: "фонетический",
        explanation: "Рот + просить = 'есть' (то, что просит рот)",
        examples: ["吃饭", "好吃", "吃面"],
        exampleMeanings: ["есть еду", "вкусно", "есть лапшу"]
    },
    {
        id: 29,
        char: "人",
        pinyin: "rén",
        meaning: "человек",
        level: 1,
        parts: [
            { char: "人", meaning: "человек", note: "рисунок человека сбоку" }
        ],
        radical: { char: "人", name: "человек" },
        phonetic: null,
        type: "пиктограмма",
        explanation: "Рисунок человека, стоящего сбоку",
        examples: ["中国人", "大人", "好人"],
        exampleMeanings: ["китаец", "взрослый", "хороший человек"]
    },
    {
        id: 30,
        char: "家",
        pinyin: "jiā",
        meaning: "дом, семья",
        level: 1,
        parts: [
            { char: "宀", meaning: "крыша", note: "смысловой ключ" },
            { char: "豕", meaning: "свинья", note: "смысловая часть" }
        ],
        radical: { char: "宀", name: "крыша" },
        phonetic: null,
        type: "идеограмма",
        explanation: "Крыша над свиньёй → 'дом' (у древних китайцев свинья была символом богатства и дома)",
        examples: ["我家", "家里", "回家"],
        exampleMeanings: ["мой дом", "дома", "вернуться домой"]
    }
];

// Сохраняем в localStorage
if (typeof localStorage !== 'undefined') {
    localStorage.setItem('frequencyDB', JSON.stringify(frequencyDB));
}
