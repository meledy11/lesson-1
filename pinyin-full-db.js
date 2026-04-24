// ПОЛНАЯ БАЗА ДАННЫХ ПИНЬИНЯ
// Все инициали с правильными sound (полными словами для тонов)

const pinyinFullDB = {
    // ==================== B ====================
    b: {
        desc: "b [p] — как «б» в слове «спорт» (без выдоха)",
        articulation: "🗣️ Губы плотно сомкнуты → резко размыкаются. ГОЛОС НЕ ВКЛЮЧЁН.",
        sound: "bo",
        syllables: {
            ba: { tones: [
                { tone: "1-й", pinyin: "bā", char: "八", meaning: "восемь", example: "八个 bā ge", sound: "ba ge" },
                { tone: "2-й", pinyin: "bá", char: "拔", meaning: "вытаскивать", example: "拔草 bá cǎo", sound: "ba cao" },
                { tone: "3-й", pinyin: "bǎ", char: "把", meaning: "держать", example: "把手 bǎ shǒu", sound: "ba shou" },
                { tone: "4-й", pinyin: "bà", char: "爸", meaning: "папа", example: "爸爸 bàba", sound: "baba" }
            ] },
            bo: { tones: [
                { tone: "1-й", pinyin: "bō", char: "波", meaning: "волна", example: "波浪 bō làng", sound: "bo lang" },
                { tone: "2-й", pinyin: "bó", char: "伯", meaning: "дядя", example: "伯伯 bó bo", sound: "bo bo" },
                { tone: "3-й", pinyin: "bǒ", char: "跛", meaning: "хромой", example: "跛脚 bǒ jiǎo", sound: "bo jiao" },
                { tone: "4-й", pinyin: "bò", char: "薄", meaning: "мята", example: "薄荷 bò he", sound: "bo he" }
            ] },
            bai: { tones: [
                { tone: "1-й", pinyin: "bāi", char: "掰", meaning: "разломить", example: "掰开 bāi kāi", sound: "bai kai" },
                { tone: "2-й", pinyin: "bái", char: "白", meaning: "белый", example: "白色 bái sè", sound: "bai se" },
                { tone: "3-й", pinyin: "bǎi", char: "百", meaning: "сто", example: "一百 yī bǎi", sound: "yi bai" },
                { tone: "4-й", pinyin: "bài", char: "败", meaning: "провал", example: "失败 shī bài", sound: "shi bai" }
            ] },
            bao: { tones: [
                { tone: "1-й", pinyin: "bāo", char: "包", meaning: "сумка", example: "包子 bāo zi", sound: "bao zi" },
                { tone: "2-й", pinyin: "báo", char: "薄", meaning: "тонкий", example: "薄厚 báo hòu", sound: "bao hou" },
                { tone: "3-й", pinyin: "bǎo", char: "饱", meaning: "сытый", example: "吃饱 chī bǎo", sound: "chi bao" },
                { tone: "4-й", pinyin: "bào", char: "报", meaning: "сообщать", example: "报纸 bào zhǐ", sound: "bao zhi" }
            ] },
            bi: { tones: [
                { tone: "1-й", pinyin: "bī", char: "逼", meaning: "заставлять", example: "逼迫 bī pò", sound: "bi po" },
                { tone: "2-й", pinyin: "bí", char: "鼻", meaning: "нос", example: "鼻子 bí zi", sound: "bi zi" },
                { tone: "3-й", pinyin: "bǐ", char: "笔", meaning: "ручка", example: "铅笔 qiān bǐ", sound: "qian bi" },
                { tone: "4-й", pinyin: "bì", char: "必", meaning: "обязательно", example: "必须 bì xū", sound: "bi xu" }
            ] },
            bu: { tones: [
                { tone: "1-й", pinyin: "bū", char: "逋", meaning: "—", example: "—", sound: "bu" },
                { tone: "2-й", pinyin: "bú", char: "醭", meaning: "плесень", example: "醭子 bú zi", sound: "bu zi" },
                { tone: "3-й", pinyin: "bǔ", char: "补", meaning: "дополнять", example: "补充 bǔ chōng", sound: "bu chong" },
                { tone: "4-й", pinyin: "bù", char: "不", meaning: "не", example: "不是 bù shì", sound: "bu shi" }
            ] }
        }
    },
    // ==================== P ====================
    p: {
        desc: "p [pʰ] — как «п» с сильным выдохом",
        articulation: "💨 Губы с сильным выдохом (положи руку перед ртом)",
        sound: "po",
        syllables: {
            pa: { tones: [
                { tone: "1-й", pinyin: "pā", char: "趴", meaning: "лежать", example: "趴下 pā xià", sound: "pa xia" },
                { tone: "2-й", pinyin: "pá", char: "爬", meaning: "ползать", example: "爬山 pá shān", sound: "pa shan" },
                { tone: "3-й", pinyin: "pǎ", char: "啪", meaning: "хлоп", example: "啪啪 pā pā", sound: "pa pa" },
                { tone: "4-й", pinyin: "pà", char: "怕", meaning: "бояться", example: "害怕 hài pà", sound: "hai pa" }
            ] },
            po: { tones: [
                { tone: "1-й", pinyin: "pō", char: "坡", meaning: "склон", example: "山坡 shān pō", sound: "shan po" },
                { tone: "2-й", pinyin: "pó", char: "婆", meaning: "бабушка", example: "婆婆 pó po", sound: "po po" },
                { tone: "3-й", pinyin: "pǒ", char: "叵", meaning: "нельзя", example: "叵测 pǒ cè", sound: "po ce" },
                { tone: "4-й", pinyin: "pò", char: "破", meaning: "сломанный", example: "破坏 pò huài", sound: "po huai" }
            ] },
            pai: { tones: [
                { tone: "1-й", pinyin: "pāi", char: "拍", meaning: "хлопать", example: "拍照 pāi zhào", sound: "pai zhao" },
                { tone: "2-й", pinyin: "pái", char: "排", meaning: "ряд", example: "排队 pái duì", sound: "pai dui" },
                { tone: "3-й", pinyin: "pǎi", char: "迫", meaning: "миномёт", example: "迫击炮 pǎi jī pào", sound: "pai ji pao" },
                { tone: "4-й", pinyin: "pài", char: "派", meaning: "отправлять", example: "派人 pài rén", sound: "pai ren" }
            ] },
            pi: { tones: [
                { tone: "1-й", pinyin: "pī", char: "批", meaning: "критиковать", example: "批评 pī píng", sound: "pi ping" },
                { tone: "2-й", pinyin: "pí", char: "皮", meaning: "кожа", example: "皮肤 pí fū", sound: "pi fu" },
                { tone: "3-й", pinyin: "pǐ", char: "匹", meaning: "счётное слово", example: "一匹 yī pǐ", sound: "yi pi" },
                { tone: "4-й", pinyin: "pì", char: "屁", meaning: "пердеть", example: "屁股 pì gu", sound: "pi gu" }
            ] },
            pu: { tones: [
                { tone: "1-й", pinyin: "pū", char: "扑", meaning: "бросаться", example: "扑倒 pū dǎo", sound: "pu dao" },
                { tone: "2-й", pinyin: "pú", char: "葡", meaning: "виноград", example: "葡萄 pú tao", sound: "pu tao" },
                { tone: "3-й", pinyin: "pǔ", char: "普", meaning: "везде", example: "普通 pǔ tōng", sound: "pu tong" },
                { tone: "4-й", pinyin: "pù", char: "铺", meaning: "магазин", example: "店铺 diàn pù", sound: "dian pu" }
            ] }
        }
    },
    // ==================== M ====================
    m: {
        desc: "m [m] — как русская «м»",
        articulation: "👄 Губы сомкнуты, воздух через нос.",
        sound: "mo",
        syllables: {
            ma: { tones: [
                { tone: "1-й", pinyin: "mā", char: "妈", meaning: "мама", example: "妈妈 māma", sound: "mama" },
                { tone: "2-й", pinyin: "má", char: "麻", meaning: "конопля", example: "麻木 má mù", sound: "ma mu" },
                { tone: "3-й", pinyin: "mǎ", char: "马", meaning: "лошадь", example: "马上 mǎ shàng", sound: "ma shang" },
                { tone: "4-й", pinyin: "mà", char: "骂", meaning: "ругать", example: "骂人 mà rén", sound: "ma ren" }
            ] },
            mo: { tones: [
                { tone: "1-й", pinyin: "mō", char: "摸", meaning: "трогать", example: "摸黑 mō hēi", sound: "mo hei" },
                { tone: "2-й", pinyin: "mó", char: "模", meaning: "модель", example: "模型 mó xíng", sound: "mo xing" },
                { tone: "3-й", pinyin: "mǒ", char: "抹", meaning: "мазать", example: "抹布 mǒ bù", sound: "mo bu" },
                { tone: "4-й", pinyin: "mò", char: "莫", meaning: "не", example: "莫怕 mò pà", sound: "mo pa" }
            ] },
            mai: { tones: [
                { tone: "1-й", pinyin: "māi", char: "埋", meaning: "закапывать", example: "埋没 mái mò", sound: "mai mo" },
                { tone: "2-й", pinyin: "mái", char: "埋", meaning: "закапывать", example: "埋没 mái mò", sound: "mai mo" },
                { tone: "3-й", pinyin: "mǎi", char: "买", meaning: "покупать", example: "买票 mǎi piào", sound: "mai piao" },
                { tone: "4-й", pinyin: "mài", char: "卖", meaning: "продавать", example: "卖东西 mài dōng xi", sound: "mai dong xi" }
            ] },
            mi: { tones: [
                { tone: "1-й", pinyin: "mī", char: "咪", meaning: "мяу", example: "咪咪 mī mī", sound: "mi mi" },
                { tone: "2-й", pinyin: "mí", char: "迷", meaning: "теряться", example: "迷路 mí lù", sound: "mi lu" },
                { tone: "3-й", pinyin: "mǐ", char: "米", meaning: "рис", example: "米饭 mǐ fàn", sound: "mi fan" },
                { tone: "4-й", pinyin: "mì", char: "密", meaning: "секрет", example: "秘密 mì mì", sound: "mi mi" }
            ] }
        }
    },
    // ==================== D ====================
    d: {
        desc: "d [t] — как «д» в слове «футбол»",
        articulation: "👅 Кончик языка у верхних зубов. ГОЛОС НЕ ВКЛЮЧЁН.",
        sound: "de",
        syllables: {
            da: { tones: [
                { tone: "1-й", pinyin: "dā", char: "搭", meaning: "строить", example: "搭车 dā chē", sound: "da che" },
                { tone: "2-й", pinyin: "dá", char: "答", meaning: "отвечать", example: "回答 huí dá", sound: "hui da" },
                { tone: "3-й", pinyin: "dǎ", char: "打", meaning: "бить", example: "打篮球 dǎ lán qiú", sound: "da lan qiu" },
                { tone: "4-й", pinyin: "dà", char: "大", meaning: "большой", example: "大家 dà jiā", sound: "da jia" }
            ] },
            de: { tones: [
                { tone: "1-й", pinyin: "dē", char: "的", meaning: "частица", example: "我的 wǒ de", sound: "wo de" },
                { tone: "2-й", pinyin: "dé", char: "得", meaning: "получать", example: "得到 dé dào", sound: "de dao" },
                { tone: "3-й", pinyin: "dě", char: "得", meaning: "нужно", example: "得去 dě qù", sound: "de qu" },
                { tone: "4-й", pinyin: "dè", char: "地", meaning: "суффикс", example: "慢慢地 màn màn de", sound: "man man de" }
            ] },
            di: { tones: [
                { tone: "1-й", pinyin: "dī", char: "低", meaning: "низкий", example: "低头 dī tóu", sound: "di tou" },
                { tone: "2-й", pinyin: "dí", char: "敌", meaning: "враг", example: "敌人 dí rén", sound: "di ren" },
                { tone: "3-й", pinyin: "dǐ", char: "底", meaning: "дно", example: "底下 dǐ xià", sound: "di xia" },
                { tone: "4-й", pinyin: "dì", char: "地", meaning: "земля", example: "地方 dì fāng", sound: "di fang" }
            ] },
            du: { tones: [
                { tone: "1-й", pinyin: "dū", char: "都", meaning: "столица", example: "首都 shǒu dū", sound: "shou du" },
                { tone: "2-й", pinyin: "dú", char: "读", meaning: "читать", example: "读书 dú shū", sound: "du shu" },
                { tone: "3-й", pinyin: "dǔ", char: "堵", meaning: "закрывать", example: "堵车 dǔ chē", sound: "du che" },
                { tone: "4-й", pinyin: "dù", char: "度", meaning: "степень", example: "温度 wēn dù", sound: "wen du" }
            ] }
        }
    },
    // ==================== T ====================
    t: {
        desc: "t [tʰ] — «т» с сильным выдохом",
        articulation: "💨 Кончик языка у зубов → резкий выдох.",
        sound: "te",
        syllables: {
            ta: { tones: [
                { tone: "1-й", pinyin: "tā", char: "他", meaning: "он", example: "他们 tā men", sound: "ta men" },
                { tone: "2-й", pinyin: "tá", char: "塌", meaning: "обвал", example: "塌方 tā fāng", sound: "ta fang" },
                { tone: "3-й", pinyin: "tǎ", char: "塔", meaning: "башня", example: "宝塔 bǎo tǎ", sound: "bao ta" },
                { tone: "4-й", pinyin: "tà", char: "踏", meaning: "ступать", example: "踏步 tà bù", sound: "ta bu" }
            ] },
            ti: { tones: [
                { tone: "1-й", pinyin: "tī", char: "踢", meaning: "пинать", example: "踢球 tī qiú", sound: "ti qiu" },
                { tone: "2-й", pinyin: "tí", char: "提", meaning: "поднимать", example: "提高 tí gāo", sound: "ti gao" },
                { tone: "3-й", pinyin: "tǐ", char: "体", meaning: "тело", example: "体育 tǐ yù", sound: "ti yu" },
                { tone: "4-й", pinyin: "tì", char: "替", meaning: "заменять", example: "代替 dài tì", sound: "dai ti" }
            ] },
            tian: { tones: [
                { tone: "1-й", pinyin: "tiān", char: "天", meaning: "небо", example: "天空 tiān kōng", sound: "tian kong" },
                { tone: "2-й", pinyin: "tián", char: "田", meaning: "поле", example: "田地 tián dì", sound: "tian di" },
                { tone: "3-й", pinyin: "tiǎn", char: "舔", meaning: "лизать", example: "舔一下 tiǎn yī xià", sound: "tian yi xia" },
                { tone: "4-й", pinyin: "tiàn", char: "—", meaning: "—", example: "—", sound: "tian" }
            ] },
            ting: { tones: [
                { tone: "1-й", pinyin: "tīng", char: "听", meaning: "слушать", example: "听见 tīng jiàn", sound: "ting jian" },
                { tone: "2-й", pinyin: "tíng", char: "停", meaning: "останавливаться", example: "停止 tíng zhǐ", sound: "ting zhi" },
                { tone: "3-й", pinyin: "tǐng", char: "挺", meaning: "очень", example: "挺好 tǐng hǎo", sound: "ting hao" },
                { tone: "4-й", pinyin: "tìng", char: "—", meaning: "—", example: "—", sound: "ting" }
            ] }
        }
    },
    // ==================== N ====================
    n: {
        desc: "n [n] — как русская «н»",
        articulation: "👅 Кончик языка у верхних зубов, воздух через нос.",
        sound: "ne",
        syllables: {
            na: { tones: [
                { tone: "1-й", pinyin: "nā", char: "那", meaning: "тот", example: "那么 nà me", sound: "na me" },
                { tone: "2-й", pinyin: "ná", char: "拿", meaning: "брать", example: "拿来 ná lái", sound: "na lai" },
                { tone: "3-й", pinyin: "nǎ", char: "哪", meaning: "который", example: "哪里 nǎ lǐ", sound: "na li" },
                { tone: "4-й", pinyin: "nà", char: "那", meaning: "тот", example: "那里 nà lǐ", sound: "na li" }
            ] },
            ni: { tones: [
                { tone: "1-й", pinyin: "nī", char: "—", meaning: "—", example: "—", sound: "ni" },
                { tone: "2-й", pinyin: "ní", char: "泥", meaning: "грязь", example: "泥土 ní tǔ", sound: "ni tu" },
                { tone: "3-й", pinyin: "nǐ", char: "你", meaning: "ты", example: "你好 nǐ hǎo", sound: "ni hao" },
                { tone: "4-й", pinyin: "nì", char: "腻", meaning: "жирный", example: "油腻 yóu nì", sound: "you ni" }
            ] },
            nu: { tones: [
                { tone: "1-й", pinyin: "nū", char: "—", meaning: "—", example: "—", sound: "nu" },
                { tone: "2-й", pinyin: "nú", char: "奴", meaning: "раб", example: "奴隶 nú lì", sound: "nu li" },
                { tone: "3-й", pinyin: "nǔ", char: "努", meaning: "стараться", example: "努力 nǔ lì", sound: "nu li" },
                { tone: "4-й", pinyin: "nù", char: "怒", meaning: "злой", example: "愤怒 fèn nù", sound: "fen nu" }
            ] }
        }
    },
    // ==================== G ====================
    g: {
        desc: "g [k] — как «г» в слове «год»",
        articulation: "👅 Задняя часть языка к нёбу. ГОЛОС НЕ ВКЛЮЧЁН.",
        sound: "ge",
        syllables: {
            ga: { tones: [
                { tone: "1-й", pinyin: "gā", char: "嘎", meaning: "кря", example: "嘎嘎 gā gā", sound: "ga ga" },
                { tone: "2-й", pinyin: "gá", char: "轧", meaning: "давить", example: "轧钢 gá gāng", sound: "ga gang" },
                { tone: "3-й", pinyin: "gǎ", char: "尕", meaning: "маленький", example: "尕娃 gǎ wá", sound: "ga wa" },
                { tone: "4-й", pinyin: "gà", char: "尬", meaning: "неловкий", example: "尴尬 gān gà", sound: "gan ga" }
            ] },
            ge: { tones: [
                { tone: "1-й", pinyin: "gē", char: "哥", meaning: "брат", example: "哥哥 gē ge", sound: "ge ge" },
                { tone: "2-й", pinyin: "gé", char: "格", meaning: "клетка", example: "格子 gé zi", sound: "ge zi" },
                { tone: "3-й", pinyin: "gě", char: "葛", meaning: "фамилия", example: "葛优 Gě Yōu", sound: "ge you" },
                { tone: "4-й", pinyin: "gè", char: "个", meaning: "счётное слово", example: "一个 yī gè", sound: "yi ge" }
            ] },
            gu: { tones: [
                { tone: "1-й", pinyin: "gū", char: "姑", meaning: "тётя", example: "姑娘 gū niang", sound: "gu niang" },
                { tone: "2-й", pinyin: "gú", char: "骨", meaning: "кость", example: "骨头 gǔ tou", sound: "gu tou" },
                { tone: "3-й", pinyin: "gǔ", char: "古", meaning: "древний", example: "古代 gǔ dài", sound: "gu dai" },
                { tone: "4-й", pinyin: "gù", char: "故", meaning: "поэтому", example: "故事 gù shì", sound: "gu shi" }
            ] },
            guo: { tones: [
                { tone: "1-й", pinyin: "guō", char: "锅", meaning: "котелок", example: "火锅 huǒ guō", sound: "huo guo" },
                { tone: "2-й", pinyin: "guó", char: "国", meaning: "страна", example: "国家 guó jiā", sound: "guo jia" },
                { tone: "3-й", pinyin: "guǒ", char: "果", meaning: "фрукт", example: "苹果 píng guǒ", sound: "ping guo" },
                { tone: "4-й", pinyin: "guò", char: "过", meaning: "проходить", example: "过去 guò qù", sound: "guo qu" }
            ] }
        }
    },
    // ==================== K ====================
    k: {
        desc: "k [kʰ] — «к» с сильным выдохом",
        articulation: "💨 Задняя часть языка к нёбу → выдох.",
        sound: "ke",
        syllables: {
            ka: { tones: [
                { tone: "1-й", pinyin: "kā", char: "咖", meaning: "кофе", example: "咖啡 kā fēi", sound: "ka fei" },
                { tone: "2-й", pinyin: "ká", char: "卡", meaning: "застревать", example: "卡住 kǎ zhù", sound: "ka zhu" },
                { tone: "3-й", pinyin: "kǎ", char: "卡", meaning: "карта", example: "卡片 kǎ piàn", sound: "ka pian" },
                { tone: "4-й", pinyin: "kà", char: "喀", meaning: "кашлять", example: "喀嚓 kā chā", sound: "ka cha" }
            ] },
            ke: { tones: [
                { tone: "1-й", pinyin: "kē", char: "科", meaning: "наука", example: "科学 kē xué", sound: "ke xue" },
                { tone: "2-й", pinyin: "ké", char: "壳", meaning: "скорлупа", example: "贝壳 bèi ké", sound: "bei ke" },
                { tone: "3-й", pinyin: "kě", char: "可", meaning: "можно", example: "可以 kě yǐ", sound: "ke yi" },
                { tone: "4-й", pinyin: "kè", char: "课", meaning: "урок", example: "上课 shàng kè", sound: "shang ke" }
            ] },
            ku: { tones: [
                { tone: "1-й", pinyin: "kū", char: "哭", meaning: "плакать", example: "哭泣 kū qì", sound: "ku qi" },
                { tone: "2-й", pinyin: "kú", char: "—", meaning: "—", example: "—", sound: "ku" },
                { tone: "3-й", pinyin: "kǔ", char: "苦", meaning: "горький", example: "苦瓜 kǔ guā", sound: "ku gua" },
                { tone: "4-й", pinyin: "kù", char: "酷", meaning: "крутой", example: "酷热 kù rè", sound: "ku re" }
            ] },
            kuai: { tones: [
                { tone: "1-й", pinyin: "kuāi", char: "—", meaning: "—", example: "—", sound: "kuai" },
                { tone: "2-й", pinyin: "kuái", char: "—", meaning: "—", example: "—", sound: "kuai" },
                { tone: "3-й", pinyin: "kuǎi", char: "—", meaning: "—", example: "—", sound: "kuai" },
                { tone: "4-й", pinyin: "kuài", char: "快", meaning: "быстрый", example: "快乐 kuài lè", sound: "kuai le" }
            ] }
        }
    },
    // ==================== H ====================
    h: {
        desc: "h [x] — как русская «х»",
        articulation: "👅 Задняя часть языка близко к нёбу.",
        sound: "he",
        syllables: {
            ha: { tones: [
                { tone: "1-й", pinyin: "hā", char: "哈", meaning: "ха", example: "哈哈 hā hā", sound: "ha ha" },
                { tone: "2-й", pinyin: "há", char: "蛤", meaning: "жаба", example: "蛤蟆 há ma", sound: "ha ma" },
                { tone: "3-й", pinyin: "hǎ", char: "哈", meaning: "ха", example: "哈巴狗 hǎ ba gǒu", sound: "ha ba gou" },
                { tone: "4-й", pinyin: "hà", char: "哈", meaning: "ха", example: "哈气 hā qì", sound: "ha qi" }
            ] },
            he: { tones: [
                { tone: "1-й", pinyin: "hē", char: "喝", meaning: "пить", example: "喝水 hē shuǐ", sound: "he shui" },
                { tone: "2-й", pinyin: "hé", char: "和", meaning: "и", example: "和平 hé píng", sound: "he ping" },
                { tone: "3-й", pinyin: "hě", char: "—", meaning: "—", example: "—", sound: "he" },
                { tone: "4-й", pinyin: "hè", char: "贺", meaning: "поздравлять", example: "祝贺 zhù hè", sound: "zhu he" }
            ] },
            hai: { tones: [
                { tone: "1-й", pinyin: "hāi", char: "嗨", meaning: "привет", example: "嗨！ hāi", sound: "hai" },
                { tone: "2-й", pinyin: "hái", char: "还", meaning: "ещё", example: "还有 hái yǒu", sound: "hai you" },
                { tone: "3-й", pinyin: "hǎi", char: "海", meaning: "море", example: "大海 dà hǎi", sound: "da hai" },
                { tone: "4-й", pinyin: "hài", char: "害", meaning: "вредить", example: "害怕 hài pà", sound: "hai pa" }
            ] },
            hao: { tones: [
                { tone: "1-й", pinyin: "hāo", char: "蒿", meaning: "полынь", example: "蒿子 hāo zi", sound: "hao zi" },
                { tone: "2-й", pinyin: "háo", char: "毫", meaning: "волосок", example: "丝毫 sī háo", sound: "si hao" },
                { tone: "3-й", pinyin: "hǎo", char: "好", meaning: "хороший", example: "好人 hǎo rén", sound: "hao ren" },
                { tone: "4-й", pinyin: "hào", char: "号", meaning: "номер", example: "号码 hào mǎ", sound: "hao ma" }
            ] }
        }
    },
    // ==================== J ====================
    j: {
        desc: "j [tɕ] — мягкое «цзь»",
        articulation: "😊 Улыбнись! Язык внизу, кончик у нижних зубов.",
        sound: "ji",
        syllables: {
            ji: { tones: [
                { tone: "1-й", pinyin: "jī", char: "鸡", meaning: "курица", example: "鸡肉 jī ròu", sound: "ji rou" },
                { tone: "2-й", pinyin: "jí", char: "级", meaning: "уровень", example: "年级 nián jí", sound: "nian ji" },
                { tone: "3-й", pinyin: "jǐ", char: "几", meaning: "сколько", example: "几个 jǐ ge", sound: "ji ge" },
                { tone: "4-й", pinyin: "jì", char: "记", meaning: "помнить", example: "记住 jì zhù", sound: "ji zhu" }
            ] },
            jia: { tones: [
                { tone: "1-й", pinyin: "jiā", char: "家", meaning: "дом", example: "家里 jiā lǐ", sound: "jia li" },
                { tone: "2-й", pinyin: "jiá", char: "夹", meaning: "зажимать", example: "夹子 jiā zi", sound: "jia zi" },
                { tone: "3-й", pinyin: "jiǎ", char: "假", meaning: "фальшивый", example: "假期 jià qī", sound: "jia qi" },
                { tone: "4-й", pinyin: "jià", char: "价", meaning: "цена", example: "价格 jià gé", sound: "jia ge" }
            ] },
            jiao: { tones: [
                { tone: "1-й", pinyin: "jiāo", char: "教", meaning: "учить", example: "教室 jiào shì", sound: "jiao shi" },
                { tone: "2-й", pinyin: "jiáo", char: "嚼", meaning: "жевать", example: "嚼东西 jiáo dōng xi", sound: "jiao dong xi" },
                { tone: "3-й", pinyin: "jiǎo", char: "脚", meaning: "нога", example: "脚丫 jiǎo yā", sound: "jiao ya" },
                { tone: "4-й", pinyin: "jiào", char: "叫", meaning: "звать", example: "叫声 jiào shēng", sound: "jiao sheng" }
            ] }
        }
    },
    // ==================== Q ====================
    q: {
        desc: "q [tɕʰ] — мягкое «ць» с выдохом",
        articulation: "😊 Улыбнись! Язык внизу + сильный выдох.",
        sound: "qi",
        syllables: {
            qi: { tones: [
                { tone: "1-й", pinyin: "qī", char: "七", meaning: "семь", example: "七个 qī ge", sound: "qi ge" },
                { tone: "2-й", pinyin: "qí", char: "骑", meaning: "ехать", example: "骑马 qí mǎ", sound: "qi ma" },
                { tone: "3-й", pinyin: "qǐ", char: "起", meaning: "вставать", example: "起来 qǐ lái", sound: "qi lai" },
                { tone: "4-й", pinyin: "qì", char: "气", meaning: "воздух", example: "空气 kōng qì", sound: "kong qi" }
            ] },
            qie: { tones: [
                { tone: "1-й", pinyin: "qiē", char: "切", meaning: "резать", example: "切菜 qiē cài", sound: "qie cai" },
                { tone: "2-й", pinyin: "qié", char: "茄", meaning: "баклажан", example: "茄子 qié zi", sound: "qie zi" },
                { tone: "3-й", pinyin: "qiě", char: "且", meaning: "к тому же", example: "并且 bìng qiě", sound: "bing qie" },
                { tone: "4-й", pinyin: "qiè", char: "切", meaning: "настоящий", example: "亲切 qīn qiè", sound: "qin qie" }
            ] },
            qu: { tones: [
                { tone: "1-й", pinyin: "qū", char: "区", meaning: "район", example: "地区 dì qū", sound: "di qu" },
                { tone: "2-й", pinyin: "qú", char: "渠", meaning: "канал", example: "渠道 qú dào", sound: "qu dao" },
                { tone: "3-й", pinyin: "qǔ", char: "取", meaning: "брать", example: "取得 qǔ dé", sound: "qu de" },
                { tone: "4-й", pinyin: "qù", char: "去", meaning: "идти", example: "出去 chū qù", sound: "chu qu" }
            ] }
        }
    },
    // ==================== X ====================
    x: {
        desc: "x [ɕ] — мягкое «сь»",
        articulation: "😊 Улыбнись! Воздух проходит через щель.",
        sound: "xi",
        syllables: {
            xi: { tones: [
                { tone: "1-й", pinyin: "xī", char: "西", meaning: "запад", example: "西方 xī fāng", sound: "xi fang" },
                { tone: "2-й", pinyin: "xí", char: "习", meaning: "учиться", example: "学习 xué xí", sound: "xue xi" },
                { tone: "3-й", pinyin: "xǐ", char: "洗", meaning: "мыть", example: "洗澡 xǐ zǎo", sound: "xi zao" },
                { tone: "4-й", pinyin: "xì", char: "戏", meaning: "спектакль", example: "游戏 yóu xì", sound: "you xi" }
            ] },
            xia: { tones: [
                { tone: "1-й", pinyin: "xiā", char: "虾", meaning: "креветка", example: "龙虾 lóng xiā", sound: "long xia" },
                { tone: "2-й", pinyin: "xiá", char: "霞", meaning: "заря", example: "彩霞 cǎi xiá", sound: "cai xia" },
                { tone: "3-й", pinyin: "xiǎ", char: "—", meaning: "—", example: "—", sound: "xia" },
                { tone: "4-й", pinyin: "xià", char: "下", meaning: "вниз", example: "下面 xià mian", sound: "xia mian" }
            ] },
            xie: { tones: [
                { tone: "1-й", pinyin: "xiē", char: "些", meaning: "несколько", example: "一些 yī xiē", sound: "yi xie" },
                { tone: "2-й", pinyin: "xié", char: "鞋", meaning: "туфли", example: "鞋子 xié zi", sound: "xie zi" },
                { tone: "3-й", pinyin: "xiě", char: "写", meaning: "писать", example: "写字 xiě zì", sound: "xie zi" },
                { tone: "4-й", pinyin: "xiè", char: "谢", meaning: "спасибо", example: "谢谢 xiè xie", sound: "xie xie" }
            ] }
        }
    },
    // ==================== ZH ====================
    zh: {
        desc: "zh [ʈʂ] — твёрдое «чж»",
        articulation: "👅 Кончик языка ЗАВЁРНУТ НАЗАД. Губы округлены.",
        sound: "zhi",
        syllables: {
            zhi: { tones: [
                { tone: "1-й", pinyin: "zhī", char: "知", meaning: "знать", example: "知道 zhī dào", sound: "zhi dao" },
                { tone: "2-й", pinyin: "zhí", char: "直", meaning: "прямой", example: "直接 zhí jiē", sound: "zhi jie" },
                { tone: "3-й", pinyin: "zhǐ", char: "纸", meaning: "бумага", example: "纸张 zhǐ zhāng", sound: "zhi zhang" },
                { tone: "4-й", pinyin: "zhì", char: "志", meaning: "воля", example: "志愿 zhì yuàn", sound: "zhi yuan" }
            ] },
            zha: { tones: [
                { tone: "1-й", pinyin: "zhā", char: "扎", meaning: "втыкать", example: "扎根 zhā gēn", sound: "zha gen" },
                { tone: "2-й", pinyin: "zhá", char: "炸", meaning: "жарить", example: "炸酱 zhá jiàng", sound: "zha jiang" },
                { tone: "3-й", pinyin: "zhǎ", char: "眨", meaning: "моргать", example: "眨眼 zhǎ yǎn", sound: "zha yan" },
                { tone: "4-й", pinyin: "zhà", char: "炸", meaning: "взрывать", example: "炸弹 zhà dàn", sound: "zha dan" }
            ] },
            zhe: { tones: [
                { tone: "1-й", pinyin: "zhē", char: "遮", meaning: "закрывать", example: "遮挡 zhē dǎng", sound: "zhe dang" },
                { tone: "2-й", pinyin: "zhé", char: "折", meaning: "ломать", example: "折断 zhé duàn", sound: "zhe duan" },
                { tone: "3-й", pinyin: "zhě", char: "这", meaning: "этот", example: "这个 zhè ge", sound: "zhe ge" },
                { tone: "4-й", pinyin: "zhè", char: "这", meaning: "этот", example: "这里 zhè lǐ", sound: "zhe li" }
            ] },
            zhu: { tones: [
                { tone: "1-й", pinyin: "zhū", char: "猪", meaning: "свинья", example: "猪肉 zhū ròu", sound: "zhu rou" },
                { tone: "2-й", pinyin: "zhú", char: "竹", meaning: "бамбук", example: "竹子 zhú zi", sound: "zhu zi" },
                { tone: "3-й", pinyin: "zhǔ", char: "主", meaning: "главный", example: "主人 zhǔ rén", sound: "zhu ren" },
                { tone: "4-й", pinyin: "zhù", char: "住", meaning: "жить", example: "住房 zhù fáng", sound: "zhu fang" }
            ] }
        }
    },
    // ==================== CH ====================
    ch: {
        desc: "ch [ʈʂʰ] — твёрдое «ч» с выдохом",
        articulation: "👅 Язык назад + сильный выдох.",
        sound: "chi",
        syllables: {
            chi: { tones: [
                { tone: "1-й", pinyin: "chī", char: "吃", meaning: "есть", example: "吃饭 chī fàn", sound: "chi fan" },
                { tone: "2-й", pinyin: "chí", char: "迟", meaning: "опаздывать", example: "迟到 chí dào", sound: "chi dao" },
                { tone: "3-й", pinyin: "chǐ", char: "尺", meaning: "линейка", example: "尺子 chǐ zi", sound: "chi zi" },
                { tone: "4-й", pinyin: "chì", char: "赤", meaning: "красный", example: "赤色 chì sè", sound: "chi se" }
            ] },
            cha: { tones: [
                { tone: "1-й", pinyin: "chā", char: "差", meaning: "разница", example: "差别 chā bié", sound: "cha bie" },
                { tone: "2-й", pinyin: "chá", char: "查", meaning: "проверять", example: "查找 chá zhǎo", sound: "cha zhao" },
                { tone: "3-й", pinyin: "chǎ", char: "叉", meaning: "вилка", example: "叉子 chā zi", sound: "cha zi" },
                { tone: "4-й", pinyin: "chà", char: "差", meaning: "плохой", example: "差劲 chà jìn", sound: "cha jin" }
            ] },
            che: { tones: [
                { tone: "1-й", pinyin: "chē", char: "车", meaning: "машина", example: "汽车 qì chē", sound: "qi che" },
                { tone: "2-й", pinyin: "ché", char: "扯", meaning: "тянуть", example: "扯开 chě kāi", sound: "che kai" },
                { tone: "3-й", pinyin: "chě", char: "扯", meaning: "тянуть", example: "扯淡 chě dàn", sound: "che dan" },
                { tone: "4-й", pinyin: "chè", char: "撤", meaning: "убирать", example: "撤走 chè zǒu", sound: "che zou" }
            ] }
        }
    },
    // ==================== SH ====================
    sh: {
        desc: "sh [ʂ] — твёрдая «ш»",
        articulation: "👅 Кончик языка ЗАВЁРНУТ НАЗАД, губы округлены.",
        sound: "shi",
        syllables: {
            shi: { tones: [
                { tone: "1-й", pinyin: "shī", char: "师", meaning: "учитель", example: "老师 lǎo shī", sound: "lao shi" },
                { tone: "2-й", pinyin: "shí", char: "十", meaning: "десять", example: "十个 shí ge", sound: "shi ge" },
                { tone: "3-й", pinyin: "shǐ", char: "使", meaning: "заставлять", example: "使用 shǐ yòng", sound: "shi yong" },
                { tone: "4-й", pinyin: "shì", char: "是", meaning: "быть", example: "是不是 shì bu shì", sound: "shi bu shi" }
            ] },
            sha: { tones: [
                { tone: "1-й", pinyin: "shā", char: "沙", meaning: "песок", example: "沙子 shā zi", sound: "sha zi" },
                { tone: "2-й", pinyin: "shá", char: "啥", meaning: "что", example: "啥事 shá shì", sound: "sha shi" },
                { tone: "3-й", pinyin: "shǎ", char: "傻", meaning: "глупый", example: "傻瓜 shǎ guā", sound: "sha gua" },
                { tone: "4-й", pinyin: "shà", char: "煞", meaning: "злой дух", example: "煞车 shā chē", sound: "sha che" }
            ] },
            shu: { tones: [
                { tone: "1-й", pinyin: "shū", char: "书", meaning: "книга", example: "书本 shū běn", sound: "shu ben" },
                { tone: "2-й", pinyin: "shú", char: "熟", meaning: "спелый", example: "熟悉 shú xī", sound: "shu xi" },
                { tone: "3-й", pinyin: "shǔ", char: "数", meaning: "считать", example: "数字 shù zì", sound: "shu zi" },
                { tone: "4-й", pinyin: "shù", char: "树", meaning: "дерево", example: "树木 shù mù", sound: "shu mu" }
            ] }
        }
    },
    // ==================== R ====================
    r: {
        desc: "r [ʐ] — как русская «ж»",
        articulation: "👅 Та же позиция, что у sh, но ГОЛОС ВКЛЮЧЁН.",
        sound: "ri",
        syllables: {
            ri: { tones: [
                { tone: "1-й", pinyin: "rī", char: "日", meaning: "солнце", example: "日本 Rì běn", sound: "ri ben" },
                { tone: "2-й", pinyin: "rí", char: "日", meaning: "солнце", example: "日子 rì zi", sound: "ri zi" },
                { tone: "3-й", pinyin: "rǐ", char: "日", meaning: "солнце", example: "日日 rì rì", sound: "ri ri" },
                { tone: "4-й", pinyin: "rì", char: "日", meaning: "солнце", example: "星期日 xīng qī rì", sound: "xing qi ri" }
            ] },
            re: { tones: [
                { tone: "1-й", pinyin: "rē", char: "—", meaning: "—", example: "—", sound: "re" },
                { tone: "2-й", pinyin: "ré", char: "热", meaning: "горячий", example: "热水 rè shuǐ", sound: "re shui" },
                { tone: "3-й", pinyin: "rě", char: "惹", meaning: "провоцировать", example: "惹事 rě shì", sound: "re shi" },
                { tone: "4-й", pinyin: "rè", char: "热", meaning: "горячий", example: "热闹 rè nào", sound: "re nao" }
            ] },
            ren: { tones: [
                { tone: "1-й", pinyin: "rēn", char: "—", meaning: "—", example: "—", sound: "ren" },
                { tone: "2-й", pinyin: "rén", char: "人", meaning: "человек", example: "人们 rén men", sound: "ren men" },
                { tone: "3-й", pinyin: "rěn", char: "忍", meaning: "терпеть", example: "忍受 rěn shòu", sound: "ren shou" },
                { tone: "4-й", pinyin: "rèn", char: "认", meaning: "узнавать", example: "认识 rèn shi", sound: "ren shi" }
            ] }
        }
    },
    // ==================== Z ====================
    z: {
        desc: "z [ts] — «цз»",
        articulation: "👅 Кончик языка у нижних зубов.",
        sound: "zi",
        syllables: {
            zi: { tones: [
                { tone: "1-й", pinyin: "zī", char: "资", meaning: "капитал", example: "资本 zī běn", sound: "zi ben" },
                { tone: "2-й", pinyin: "zí", char: "子", meaning: "сын", example: "儿子 ér zi", sound: "er zi" },
                { tone: "3-й", pinyin: "zǐ", char: "子", meaning: "семя", example: "子女 zǐ nǚ", sound: "zi nü" },
                { tone: "4-й", pinyin: "zì", char: "字", meaning: "иероглиф", example: "汉字 Hàn zì", sound: "han zi" }
            ] },
            zai: { tones: [
                { tone: "1-й", pinyin: "zāi", char: "灾", meaning: "бедствие", example: "灾难 zāi nàn", sound: "zai nan" },
                { tone: "2-й", pinyin: "zái", char: "—", meaning: "—", example: "—", sound: "zai" },
                { tone: "3-й", pinyin: "zǎi", char: "仔", meaning: "парень", example: "牛仔 niú zǎi", sound: "niu zai" },
                { tone: "4-й", pinyin: "zài", char: "在", meaning: "в", example: "在家 zài jiā", sound: "zai jia" }
            ] },
            zuo: { tones: [
                { tone: "1-й", pinyin: "zuō", char: "作", meaning: "делать", example: "作坊 zuō fang", sound: "zuo fang" },
                { tone: "2-й", pinyin: "zuó", char: "昨", meaning: "вчера", example: "昨天 zuó tiān", sound: "zuo tian" },
                { tone: "3-й", pinyin: "zuǒ", char: "左", meaning: "левый", example: "左边 zuǒ biān", sound: "zuo bian" },
                { tone: "4-й", pinyin: "zuò", char: "做", meaning: "делать", example: "做事 zuò shì", sound: "zuo shi" }
            ] }
        }
    },
    // ==================== C ====================
    c: {
        desc: "c [tsʰ] — «ц» с выдохом",
        articulation: "👅 Кончик языка у нижних зубов + выдох.",
        sound: "ci",
        syllables: {
            ci: { tones: [
                { tone: "1-й", pinyin: "cī", char: "呲", meaning: "шипеть", example: "呲牙 cī yá", sound: "ci ya" },
                { tone: "2-й", pinyin: "cí", char: "词", meaning: "слово", example: "词语 cí yǔ", sound: "ci yu" },
                { tone: "3-й", pinyin: "cǐ", char: "此", meaning: "этот", example: "此处 cǐ chù", sound: "ci chu" },
                { tone: "4-й", pinyin: "cì", char: "次", meaning: "раз", example: "一次 yī cì", sound: "yi ci" }
            ] },
            cai: { tones: [
                { tone: "1-й", pinyin: "cāi", char: "猜", meaning: "угадывать", example: "猜谜 cāi mí", sound: "cai mi" },
                { tone: "2-й", pinyin: "cái", char: "才", meaning: "талант", example: "才能 cái néng", sound: "cai neng" },
                { tone: "3-й", pinyin: "cǎi", char: "采", meaning: "собирать", example: "采访 cǎi fǎng", sound: "cai fang" },
                { tone: "4-й", pinyin: "cài", char: "菜", meaning: "овощ", example: "蔬菜 shū cài", sound: "shu cai" }
            ] },
            cu: { tones: [
                { tone: "1-й", pinyin: "cū", char: "粗", meaning: "грубый", example: "粗心 cū xīn", sound: "cu xin" },
                { tone: "2-й", pinyin: "cú", char: "—", meaning: "—", example: "—", sound: "cu" },
                { tone: "3-й", pinyin: "cǔ", char: "—", meaning: "—", example: "—", sound: "cu" },
                { tone: "4-й", pinyin: "cù", char: "促", meaning: "торопить", example: "促进 cù jìn", sound: "cu jin" }
            ] }
        }
    },
    // ==================== S ====================
    s: {
        desc: "s [s] — как русская «с»",
        articulation: "👅 Кончик языка у нижних зубов.",
        sound: "si",
        syllables: {
            si: { tones: [
                { tone: "1-й", pinyin: "sī", char: "思", meaning: "думать", example: "思考 sī kǎo", sound: "si kao" },
                { tone: "2-й", pinyin: "sí", char: "死", meaning: "смерть", example: "死人 sǐ rén", sound: "si ren" },
                { tone: "3-й", pinyin: "sǐ", char: "死", meaning: "смерть", example: "死亡 sǐ wáng", sound: "si wang" },
                { tone: "4-й", pinyin: "sì", char: "四", meaning: "четыре", example: "四个 sì ge", sound: "si ge" }
            ] },
            san: { tones: [
                { tone: "1-й", pinyin: "sān", char: "三", meaning: "три", example: "三个 sān ge", sound: "san ge" },
                { tone: "2-й", pinyin: "sán", char: "—", meaning: "—", example: "—", sound: "san" },
                { tone: "3-й", pinyin: "sǎn", char: "伞", meaning: "зонт", example: "雨伞 yǔ sǎn", sound: "yu san" },
                { tone: "4-й", pinyin: "sàn", char: "散", meaning: "расходиться", example: "散开 sàn kāi", sound: "san kai" }
            ] },
            su: { tones: [
                { tone: "1-й", pinyin: "sū", char: "苏", meaning: "Су", example: "苏州 Sū zhōu", sound: "su zhou" },
                { tone: "2-й", pinyin: "sú", char: "俗", meaning: "вульгарный", example: "俗气 sú qi", sound: "su qi" },
                { tone: "3-й", pinyin: "sǔ", char: "—", meaning: "—", example: "—", sound: "su" },
                { tone: "4-й", pinyin: "sù", char: "速", meaning: "скорость", example: "速度 sù dù", sound: "su du" }
            ] }
        }
    }
};

// Экспортируем для использования
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pinyinFullDB;
}
