// ==================== БАЗА ПРЕДЛОЖЕНИЙ ДЛЯ ДИКТАНТА ====================
const phrasesDB = [
    // Уровень 1: Простые фразы
    {
        chinese: "你好",
        pinyin: "nǐ hǎo",
        russian: "Привет",
        level: 1,
        words: ["你", "好"]
    },
    {
        chinese: "谢谢",
        pinyin: "xiè xie",
        russian: "Спасибо",
        level: 1,
        words: ["谢", "谢"]
    },
    {
        chinese: "对不起",
        pinyin: "duì bu qǐ",
        russian: "Извините",
        level: 1,
        words: ["对", "不", "起"]
    },
    {
        chinese: "没关系",
        pinyin: "méi guān xi",
        russian: "Ничего страшного",
        level: 1,
        words: ["没", "关", "系"]
    },
    {
        chinese: "我叫小明",
        pinyin: "wǒ jiào Xiǎomíng",
        russian: "Меня зовут Сяомин",
        level: 1,
        words: ["我", "叫", "小", "明"]
    },
    {
        chinese: "你叫什么名字",
        pinyin: "nǐ jiào shénme míngzi",
        russian: "Как тебя зовут?",
        level: 1,
        words: ["你", "叫", "什", "么", "名", "字"]
    },
    {
        chinese: "很高兴认识你",
        pinyin: "hěn gāoxìng rènshi nǐ",
        russian: "Приятно познакомиться",
        level: 2,
        words: ["很", "高", "兴", "认", "识", "你"]
    },
    
    // Уровень 2: Повседневные фразы
    {
        chinese: "今天天气很好",
        pinyin: "jīntiān tiānqì hěn hǎo",
        russian: "Сегодня хорошая погода",
        level: 2,
        words: ["今", "天", "天", "气", "很", "好"]
    },
    {
        chinese: "我想吃饭",
        pinyin: "wǒ xiǎng chīfàn",
        russian: "Я хочу есть",
        level: 2,
        words: ["我", "想", "吃", "饭"]
    },
    {
        chinese: "他是我朋友",
        pinyin: "tā shì wǒ péngyou",
        russian: "Он мой друг",
        level: 2,
        words: ["他", "是", "我", "朋", "友"]
    },
    {
        chinese: "我们去看电影吧",
        pinyin: "wǒmen qù kàn diànyǐng ba",
        russian: "Пойдём смотреть кино",
        level: 2,
        words: ["我", "们", "去", "看", "电", "影", "吧"]
    },
    {
        chinese: "这个多少钱",
        pinyin: "zhè ge duōshao qián",
        russian: "Сколько это стоит?",
        level: 2,
        words: ["这", "个", "多", "少", "钱"]
    },
    {
        chinese: "太贵了",
        pinyin: "tài guì le",
        russian: "Слишком дорого",
        level: 2,
        words: ["太", "贵", "了"]
    },
    {
        chinese: "我不会说中文",
        pinyin: "wǒ bú huì shuō zhōngwén",
        russian: "Я не говорю по-китайски",
        level: 2,
        words: ["我", "不", "会", "说", "中", "文"]
    },
    
    // Уровень 3: Посложнее
    {
        chinese: "明天我要去学校",
        pinyin: "míngtiān wǒ yào qù xuéxiào",
        russian: "Завтра я пойду в школу",
        level: 3,
        words: ["明", "天", "我", "要", "去", "学", "校"]
    },
    {
        chinese: "我喜欢学习汉语",
        pinyin: "wǒ xǐhuan xuéxí hànyǔ",
        russian: "Мне нравится учить китайский",
        level: 3,
        words: ["我", "喜", "欢", "学", "习", "汉", "语"]
    },
    {
        chinese: "请再说一遍",
        pinyin: "qǐng zài shuō yí biàn",
        russian: "Повторите ещё раз, пожалуйста",
        level: 3,
        words: ["请", "再", "说", "一", "遍"]
    },
    {
        chinese: "我坐地铁去上班",
        pinyin: "wǒ zuò dìtiě qù shàngbān",
        russian: "Я еду на метро на работу",
        level: 3,
        words: ["我", "坐", "地", "铁", "去", "上", "班"]
    },
    {
        chinese: "你的电话号码是多少",
        pinyin: "nǐ de diànhuà hàomǎ shì duōshao",
        russian: "Какой у тебя номер телефона?",
        level: 3,
        words: ["你", "的", "电", "话", "号", "码", "是", "多", "少"]
    }
];
