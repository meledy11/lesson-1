// ============================================================
// ===== ПОЛНАЯ БАЗА ДАННЫХ: ВСЕ КЛЮЧИ СО ВСЕМИ ЗНАЧЕНИЯМИ =====
// ============================================================

const WORDS_BY_KEY = {

    // ============================================================
    // ===== 吃 — ЕСТЬ + ВСЕ ПЕРЕНОСНЫЕ ЗНАЧЕНИЯ =====
    // ============================================================
    '吃': {
        emoji: '🍽️',
        meaning: 'есть, кушать, принимать + устойчивые выражения',
        words: [
            // === ПРЯМЫЕ ЗНАЧЕНИЯ (ЕДА) ===
            { chinese: '吃饭', pinyin: 'chī fàn', translation: 'есть (принимать пищу)', emoji: '🍚', hsk: '1' },
            { chinese: '吃面', pinyin: 'chī miàn', translation: 'есть лапшу', emoji: '🍜', hsk: '2' },
            { chinese: '吃肉', pinyin: 'chī ròu', translation: 'есть мясо', emoji: '🥩', hsk: '2' },
            { chinese: '吃蛋', pinyin: 'chī dàn', translation: 'есть яйцо', emoji: '🥚', hsk: '3' },
            { chinese: '吃鱼', pinyin: 'chī yú', translation: 'есть рыбу', emoji: '🐟', hsk: '2' },
            { chinese: '吃水果', pinyin: 'chī shuǐ guǒ', translation: 'есть фрукты', emoji: '🍇', hsk: '2' },
            { chinese: '吃零食', pinyin: 'chī líng shí', translation: 'есть снеки', emoji: '🍿', hsk: '4' },
            { chinese: '吃糖', pinyin: 'chī táng', translation: 'есть конфету', emoji: '🍬', hsk: '3' },
            { chinese: '吃药', pinyin: 'chī yào', translation: 'принимать лекарство', emoji: '💊', hsk: '2' },
            { chinese: '吃早饭', pinyin: 'chī zǎo fàn', translation: 'завтракать', emoji: '🥣', hsk: '2' },
            { chinese: '吃午饭', pinyin: 'chī wǔ fàn', translation: 'обедать', emoji: '🍱', hsk: '2' },
            { chinese: '吃晚饭', pinyin: 'chī wǎn fàn', translation: 'ужинать', emoji: '🍽️', hsk: '2' },
            { chinese: '吃土', pinyin: 'chī tǔ', translation: 'есть землю (быть бедным)', emoji: '😂', hsk: '6' },
            
            // === ПЕРЕНОСНЫЕ ЗНАЧЕНИЯ (НЕ ЕДА) ===
            { chinese: '吃惊', pinyin: 'chī jīng', translation: 'удивляться, поражаться', emoji: '😮', hsk: '3' },
            { chinese: '吃亏', pinyin: 'chī kuī', translation: 'терпеть убыток, быть в проигрыше', emoji: '😔', hsk: '4' },
            { chinese: '吃力', pinyin: 'chī lì', translation: 'с трудом, тяжело', emoji: '😓', hsk: '4' },
            { chinese: '吃醋', pinyin: 'chī cù', translation: 'ревновать', emoji: '😏', hsk: '5' },
            { chinese: '吃香', pinyin: 'chī xiāng', translation: 'быть популярным, иметь успех', emoji: '🔥', hsk: '5' },
            { chinese: '吃紧', pinyin: 'chī jǐn', translation: 'напряжённый, критический', emoji: '⚡', hsk: '6' },
            { chinese: '吃透', pinyin: 'chī tòu', translation: 'глубоко понять, усвоить', emoji: '🧠', hsk: '6' },
            { chinese: '吃水', pinyin: 'chī shuǐ', translation: 'осадка (корабля)', emoji: '⛴️', hsk: '6' },
            { chinese: '吃素', pinyin: 'chī sù', translation: 'быть вегетарианцем', emoji: '🥗', hsk: '5' },
            { chinese: '吃荤', pinyin: 'chī hūn', translation: 'есть мясное', emoji: '🥩', hsk: '6' },
            { chinese: '吃喝', pinyin: 'chī hē', translation: 'есть и пить', emoji: '🍽️', hsk: '4' },
            { chinese: '吃喝玩乐', pinyin: 'chī hē wán lè', translation: 'есть, пить, веселиться', emoji: '🎉', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 打 — БИТЬ + ВСЕ ДЕЙСТВИЯ =====
    // ============================================================
    '打': {
        emoji: '✊',
        meaning: 'бить, делать, звонить, ловить, играть',
        words: [
            // === ПРЯМЫЕ ЗНАЧЕНИЯ ===
            { chinese: '打人', pinyin: 'dǎ rén', translation: 'бить человека', emoji: '👊', hsk: '3' },
            { chinese: '打架', pinyin: 'dǎ jià', translation: 'драться', emoji: '🥊', hsk: '3' },
            { chinese: '打鼓', pinyin: 'dǎ gǔ', translation: 'бить в барабан', emoji: '🥁', hsk: '4' },
            { chinese: '打鱼', pinyin: 'dǎ yú', translation: 'ловить рыбу', emoji: '🎣', hsk: '4' },
            { chinese: '打猎', pinyin: 'dǎ liè', translation: 'охотиться', emoji: '🏹', hsk: '5' },
            { chinese: '打伞', pinyin: 'dǎ sǎn', translation: 'держать зонт', emoji: '☂️', hsk: '4' },
            
            // === ДЕЙСТВИЯ С ТЕХНИКОЙ ===
            { chinese: '打电话', pinyin: 'dǎ diàn huà', translation: 'звонить по телефону', emoji: '📞', hsk: '3' },
            { chinese: '打开', pinyin: 'dǎ kāi', translation: 'открывать', emoji: '🔓', hsk: '3' },
            { chinese: '打印', pinyin: 'dǎ yìn', translation: 'печатать', emoji: '🖨️', hsk: '4' },
            { chinese: '打字', pinyin: 'dǎ zì', translation: 'печатать текст', emoji: '⌨️', hsk: '3' },
            { chinese: '打车', pinyin: 'dǎ chē', translation: 'брать такси', emoji: '🚕', hsk: '3' },
            
            // === ДЕЙСТВИЯ С ИГРАМИ ===
            { chinese: '打牌', pinyin: 'dǎ pái', translation: 'играть в карты', emoji: '🃏', hsk: '4' },
            { chinese: '打球', pinyin: 'dǎ qiú', translation: 'играть в мяч', emoji: '⚽', hsk: '2' },
            { chinese: '打篮球', pinyin: 'dǎ lán qiú', translation: 'играть в баскетбол', emoji: '🏀', hsk: '3' },
            { chinese: '打乒乓球', pinyin: 'dǎ pīng pāng qiú', translation: 'играть в настольный теннис', emoji: '🏓', hsk: '4' },
            
            // === ДРУГИЕ ДЕЙСТВИЯ ===
            { chinese: '打扫', pinyin: 'dǎ sǎo', translation: 'убирать, подметать', emoji: '🧹', hsk: '4' },
            { chinese: '打针', pinyin: 'dǎ zhēn', translation: 'делать укол', emoji: '💉', hsk: '4' },
            { chinese: '打包', pinyin: 'dǎ bāo', translation: 'упаковывать', emoji: '📦', hsk: '3' },
            { chinese: '打湿', pinyin: 'dǎ shī', translation: 'намочить', emoji: '💧', hsk: '5' },
            { chinese: '打扰', pinyin: 'dǎ rǎo', translation: 'беспокоить', emoji: '🫣', hsk: '4' },
            { chinese: '打算', pinyin: 'dǎ suàn', translation: 'планировать, намереваться', emoji: '📋', hsk: '2' },
            { chinese: '打赌', pinyin: 'dǎ dǔ', translation: 'спорить, держать пари', emoji: '🤝', hsk: '5' },
            { chinese: '打扮', pinyin: 'dǎ bàn', translation: 'наряжаться, украшать себя', emoji: '💄', hsk: '4' },
            { chinese: '打发', pinyin: 'dǎ fa', translation: 'отправлять, проводить время', emoji: '🕐', hsk: '5' },
            { chinese: '打哈欠', pinyin: 'dǎ hā qiàn', translation: 'зевать', emoji: '🥱', hsk: '5' },
            { chinese: '打喷嚏', pinyin: 'dǎ pēn tì', translation: 'чихать', emoji: '🤧', hsk: '5' },
            { chinese: '打嗝', pinyin: 'dǎ gé', translation: 'икать', emoji: '😅', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 开 — ОТКРЫВАТЬ + ВСЕ ЗНАЧЕНИЯ =====
    // ============================================================
    '开': {
        emoji: '🔓',
        meaning: 'открывать, начинать, вести, проводить',
        words: [
            // === ОТКРЫВАТЬ ===
            { chinese: '打开', pinyin: 'dǎ kāi', translation: 'открывать', emoji: '🔓', hsk: '3' },
            { chinese: '开门', pinyin: 'kāi mén', translation: 'открыть дверь', emoji: '🚪', hsk: '2' },
            { chinese: '开窗', pinyin: 'kāi chuāng', translation: 'открыть окно', emoji: '🪟', hsk: '3' },
            { chinese: '开花', pinyin: 'kāi huā', translation: 'цвести', emoji: '🌸', hsk: '3' },
            
            // === НАЧИНАТЬ ===
            { chinese: '开始', pinyin: 'kāi shǐ', translation: 'начинать', emoji: '▶️', hsk: '1' },
            { chinese: '开学', pinyin: 'kāi xué', translation: 'начало учебного года', emoji: '📚', hsk: '3' },
            { chinese: '开课', pinyin: 'kāi kè', translation: 'начало занятий', emoji: '📖', hsk: '4' },
            { chinese: '开工', pinyin: 'kāi gōng', translation: 'начать работу', emoji: '🔨', hsk: '4' },
            
            // === ВЕСТИ, УПРАВЛЯТЬ ===
            { chinese: '开车', pinyin: 'kāi chē', translation: 'вести машину', emoji: '🚗', hsk: '2' },
            { chinese: '开飞机', pinyin: 'kāi fēi jī', translation: 'управлять самолётом', emoji: '✈️', hsk: '4' },
            { chinese: '开船', pinyin: 'kāi chuán', translation: 'управлять кораблём', emoji: '⛴️', hsk: '5' },
            
            // === ПРОВОДИТЬ, ОРГАНИЗОВЫВАТЬ ===
            { chinese: '开会', pinyin: 'kāi huì', translation: 'проводить собрание', emoji: '📋', hsk: '2' },
            { chinese: '开party', pinyin: 'kāi pà tī', translation: 'устраивать вечеринку', emoji: '🎉', hsk: '4' },
            { chinese: '开音乐会', pinyin: 'kāi yīn yuè huì', translation: 'проводить концерт', emoji: '🎵', hsk: '5' },
            
            // === ДРУГИЕ ===
            { chinese: '开心', pinyin: 'kāi xīn', translation: 'радостный, счастливый', emoji: '😄', hsk: '2' },
            { chinese: '开放', pinyin: 'kāi fàng', translation: 'открытый, открывать', emoji: '🆓', hsk: '4' },
            { chinese: '开玩笑', pinyin: 'kāi wán xiào', translation: 'шутить', emoji: '😂', hsk: '3' },
            { chinese: '开明', pinyin: 'kāi míng', translation: 'прогрессивный, просвещённый', emoji: '💡', hsk: '5' },
            { chinese: '开胃', pinyin: 'kāi wèi', translation: 'возбуждать аппетит', emoji: '😋', hsk: '5' },
            { chinese: '开发', pinyin: 'kāi fā', translation: 'развивать, осваивать', emoji: '📈', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 关 — ЗАКРЫВАТЬ + ВСЕ ЗНАЧЕНИЯ =====
    // ============================================================
    '关': {
        emoji: '🔒',
        meaning: 'закрывать, выключать, заботиться, отношение',
        words: [
            // === ЗАКРЫВАТЬ ===
            { chinese: '关门', pinyin: 'guān mén', translation: 'закрыть дверь', emoji: '🚪', hsk: '2' },
            { chinese: '关窗', pinyin: 'guān chuāng', translation: 'закрыть окно', emoji: '🪟', hsk: '3' },
            { chinese: '关闭', pinyin: 'guān bì', translation: 'закрывать', emoji: '🔐', hsk: '4' },
            { chinese: '关灯', pinyin: 'guān dēng', translation: 'выключить свет', emoji: '💡', hsk: '3' },
            { chinese: '关机', pinyin: 'guān jī', translation: 'выключить (телефон/компьютер)', emoji: '📱', hsk: '3' },
            { chinese: '关电视', pinyin: 'guān diàn shì', translation: 'выключить телевизор', emoji: '📺', hsk: '3' },
            
            // === ЗАБОТА, ОТНОШЕНИЕ ===
            { chinese: '关心', pinyin: 'guān xīn', translation: 'заботиться, интересоваться', emoji: '💗', hsk: '3' },
            { chinese: '关系', pinyin: 'guān xi', translation: 'отношение, связь', emoji: '🔗', hsk: '3' },
            { chinese: '关于', pinyin: 'guān yú', translation: 'о, касательно', emoji: '📌', hsk: '3' },
            { chinese: '关注', pinyin: 'guān zhù', translation: 'обращать внимание, следить', emoji: '👀', hsk: '4' },
            { chinese: '关怀', pinyin: 'guān huái', translation: 'забота, внимание', emoji: '❤️', hsk: '4' },
            { chinese: '关切', pinyin: 'guān qiè', translation: 'беспокоиться, тревожиться', emoji: '😟', hsk: '5' },
            
            // === ДРУГИЕ ===
            { chinese: '关税', pinyin: 'guān shuì', translation: 'пошлина, таможенный сбор', emoji: '🛃', hsk: '5' },
            { chinese: '机关', pinyin: 'jī guān', translation: 'учреждение, механизм', emoji: '🏛️', hsk: '4' },
            { chinese: '难关', pinyin: 'nán guān', translation: 'трудность, препятствие', emoji: '🧗', hsk: '5' },
            { chinese: '海关', pinyin: 'hǎi guān', translation: 'таможня', emoji: '🛃', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 上 — ВВЕРХ, ПОДНИМАТЬСЯ =====
    // ============================================================
    '上': {
        emoji: '⬆️',
        meaning: 'наверху, подниматься, идти на (урок/работу)',
        words: [
            { chinese: '上', pinyin: 'shàng', translation: 'наверху', emoji: '⬆️', hsk: '1' },
            { chinese: '上课', pinyin: 'shàng kè', translation: 'идти на урок', emoji: '📚', hsk: '1' },
            { chinese: '上班', pinyin: 'shàng bān', translation: 'идти на работу', emoji: '💼', hsk: '2' },
            { chinese: '上网', pinyin: 'shàng wǎng', translation: 'выходить в интернет', emoji: '🌐', hsk: '2' },
            { chinese: '上海', pinyin: 'Shàng hǎi', translation: 'Шанхай', emoji: '🏙️', hsk: '2' },
            { chinese: '上面', pinyin: 'shàng miàn', translation: 'сверху, наверху', emoji: '🔝', hsk: '2' },
            { chinese: '上学', pinyin: 'shàng xué', translation: 'идти в школу', emoji: '🏫', hsk: '1' },
            { chinese: '上楼', pinyin: 'shàng lóu', translation: 'подниматься наверх', emoji: '⬆️', hsk: '3' },
            { chinese: '上升', pinyin: 'shàng shēng', translation: 'подниматься, расти', emoji: '📈', hsk: '3' },
            { chinese: '上年纪', pinyin: 'shàng nián jì', translation: 'стареть', emoji: '👴', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 下 — ВНИЗ, СПУСКАТЬСЯ =====
    // ============================================================
    '下': {
        emoji: '⬇️',
        meaning: 'внизу, спускаться, заканчивать',
        words: [
            { chinese: '下', pinyin: 'xià', translation: 'внизу', emoji: '⬇️', hsk: '1' },
            { chinese: '下课', pinyin: 'xià kè', translation: 'заканчивать урок', emoji: '🔚', hsk: '1' },
            { chinese: '下班', pinyin: 'xià bān', translation: 'заканчивать работу', emoji: '🏠', hsk: '2' },
            { chinese: '下载', pinyin: 'xià zài', translation: 'скачивать', emoji: '⬇️', hsk: '3' },
            { chinese: '下面', pinyin: 'xià miàn', translation: 'снизу, внизу', emoji: '🔽', hsk: '2' },
            { chinese: '下雨', pinyin: 'xià yǔ', translation: 'идёт дождь', emoji: '🌧️', hsk: '1' },
            { chinese: '下雪', pinyin: 'xià xuě', translation: 'идёт снег', emoji: '❄️', hsk: '2' },
            { chinese: '下楼', pinyin: 'xià lóu', translation: 'спускаться вниз', emoji: '⬇️', hsk: '3' },
            { chinese: '下降', pinyin: 'xià jiàng', translation: 'опускаться, падать', emoji: '📉', hsk: '3' },
            { chinese: '下决定', pinyin: 'xià jué dìng', translation: 'принимать решение', emoji: '⚖️', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 中 — СЕРЕДИНА, КИТАЙ =====
    // ============================================================
    '中': {
        emoji: '🔲',
        meaning: 'середина, центр, Китай',
        words: [
            { chinese: '中国', pinyin: 'Zhōng guó', translation: 'Китай', emoji: '🇨🇳', hsk: '1' },
            { chinese: '中文', pinyin: 'zhōng wén', translation: 'китайский язык', emoji: '📝', hsk: '1' },
            { chinese: '中间', pinyin: 'zhōng jiān', translation: 'середина', emoji: '🔲', hsk: '2' },
            { chinese: '中心', pinyin: 'zhōng xīn', translation: 'центр', emoji: '🎯', hsk: '3' },
            { chinese: '中午', pinyin: 'zhōng wǔ', translation: 'полдень', emoji: '☀️', hsk: '1' },
            { chinese: '中年', pinyin: 'zhōng nián', translation: 'средний возраст', emoji: '🧑', hsk: '4' },
            { chinese: '中学', pinyin: 'zhōng xué', translation: 'средняя школа', emoji: '🏫', hsk: '2' },
            { chinese: '中央', pinyin: 'zhōng yāng', translation: 'центр, центральный', emoji: '📍', hsk: '3' },
            { chinese: '其中', pinyin: 'qí zhōng', translation: 'среди них, в том числе', emoji: '🔹', hsk: '3' },
            { chinese: '空中', pinyin: 'kōng zhōng', translation: 'в воздухе', emoji: '☁️', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 心 — СЕРДЦЕ, ДУША =====
    // ============================================================
    '心': {
        emoji: '❤️',
        meaning: 'сердце, душа, эмоции',
        words: [
            { chinese: '心跳', pinyin: 'xīn tiào', translation: 'сердцебиение', emoji: '💓', hsk: '4' },
            { chinese: '心情', pinyin: 'xīn qíng', translation: 'настроение', emoji: '😊', hsk: '3' },
            { chinese: '心里', pinyin: 'xīn lǐ', translation: 'в душе', emoji: '💭', hsk: '3' },
            { chinese: '开心', pinyin: 'kāi xīn', translation: 'радостный', emoji: '😄', hsk: '2' },
            { chinese: '小心', pinyin: 'xiǎo xīn', translation: 'осторожный', emoji: '⚠️', hsk: '2' },
            { chinese: '关心', pinyin: 'guān xīn', translation: 'заботиться', emoji: '💗', hsk: '3' },
            { chinese: '信心', pinyin: 'xìn xīn', translation: 'уверенность', emoji: '💪', hsk: '3' },
            { chinese: '爱心', pinyin: 'ài xīn', translation: 'любовь, доброта', emoji: '💕', hsk: '3' },
            { chinese: '用心', pinyin: 'yòng xīn', translation: 'старательный', emoji: '🧠', hsk: '4' },
            { chinese: '心情', pinyin: 'xīn qíng', translation: 'настроение', emoji: '😊', hsk: '3' },
            { chinese: '细心', pinyin: 'xì xīn', translation: 'внимательный', emoji: '🔍', hsk: '4' },
            { chinese: '耐心', pinyin: 'nài xīn', translation: 'терпение', emoji: '🧘', hsk: '4' },
            { chinese: '伤心', pinyin: 'shāng xīn', translation: 'печальный, расстроенный', emoji: '😢', hsk: '3' },
            { chinese: '担心', pinyin: 'dān xīn', translation: 'беспокоиться, волноваться', emoji: '😟', hsk: '3' },
            { chinese: '放心', pinyin: 'fàng xīn', translation: 'быть спокойным', emoji: '😌', hsk: '3' },
            { chinese: '开心', pinyin: 'kāi xīn', translation: 'радостный', emoji: '😄', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 水 — ВОДА =====
    // ============================================================
    '水': {
        emoji: '💧',
        meaning: 'вода, жидкость',
        words: [
            { chinese: '水果', pinyin: 'shuǐ guǒ', translation: 'фрукты', emoji: '🍉', hsk: '2' },
            { chinese: '水平', pinyin: 'shuǐ píng', translation: 'уровень', emoji: '📊', hsk: '3' },
            { chinese: '水杯', pinyin: 'shuǐ bēi', translation: 'стакан', emoji: '🥤', hsk: '3' },
            { chinese: '水库', pinyin: 'shuǐ kù', translation: 'водохранилище', emoji: '🌊', hsk: '4' },
            { chinese: '水分', pinyin: 'shuǐ fèn', translation: 'влага', emoji: '💦', hsk: '4' },
            { chinese: '水利', pinyin: 'shuǐ lì', translation: 'ирригация', emoji: '🚰', hsk: '5' },
            { chinese: '水灾', pinyin: 'shuǐ zāi', translation: 'наводнение', emoji: '🌊', hsk: '5' },
            { chinese: '水果汁', pinyin: 'shuǐ guǒ zhī', translation: 'фруктовый сок', emoji: '🧃', hsk: '3' },
            { chinese: '自来水', pinyin: 'zì lái shuǐ', translation: 'водопроводная вода', emoji: '🚰', hsk: '4' },
            { chinese: '矿泉水', pinyin: 'kuàng quán shuǐ', translation: 'минеральная вода', emoji: '💧', hsk: '4' },
            { chinese: '雨水', pinyin: 'yǔ shuǐ', translation: 'дождевая вода', emoji: '💧', hsk: '3' },
            { chinese: '海水', pinyin: 'hǎi shuǐ', translation: 'морская вода', emoji: '🌊', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 火 — ОГОНЬ =====
    // ============================================================
    '火': {
        emoji: '🔥',
        meaning: 'огонь, пламя, жар',
        words: [
            { chinese: '火锅', pinyin: 'huǒ guō', translation: 'горячий котелок', emoji: '🍲', hsk: '3' },
            { chinese: '火灾', pinyin: 'huǒ zāi', translation: 'пожар', emoji: '🚒', hsk: '4' },
            { chinese: '火箭', pinyin: 'huǒ jiàn', translation: 'ракета', emoji: '🚀', hsk: '4' },
            { chinese: '火山', pinyin: 'huǒ shān', translation: 'вулкан', emoji: '🌋', hsk: '4' },
            { chinese: '灭火器', pinyin: 'miè huǒ qì', translation: 'огнетушитель', emoji: '🧯', hsk: '5' },
            { chinese: '火车', pinyin: 'huǒ chē', translation: 'поезд', emoji: '🚂', hsk: '2' },
            { chinese: '火热', pinyin: 'huǒ rè', translation: 'горячий, страстный', emoji: '🌡️', hsk: '4' },
            { chinese: '火气', pinyin: 'huǒ qì', translation: 'гнев, раздражение', emoji: '😡', hsk: '5' },
            { chinese: '火爆', pinyin: 'huǒ bào', translation: 'взрывной, популярный', emoji: '💥', hsk: '5' },
            { chinese: '火速', pinyin: 'huǒ sù', translation: 'срочно, быстро', emoji: '⚡', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 风 — ВЕТЕР =====
    // ============================================================
    '风': {
        emoji: '🌬️',
        meaning: 'ветер, стиль, обычай',
        words: [
            { chinese: '春风', pinyin: 'chūn fēng', translation: 'весенний ветер', emoji: '🍃', hsk: '3' },
            { chinese: '风', pinyin: 'fēng', translation: 'ветер', emoji: '🌬️', hsk: '2' },
            { chinese: '风景', pinyin: 'fēng jǐng', translation: 'пейзаж', emoji: '🏞️', hsk: '3' },
            { chinese: '风格', pinyin: 'fēng gé', translation: 'стиль', emoji: '🎨', hsk: '4' },
            { chinese: '风雨', pinyin: 'fēng yǔ', translation: 'ветер и дождь', emoji: '🌧️', hsk: '4' },
            { chinese: '台风', pinyin: 'tái fēng', translation: 'тайфун', emoji: '🌀', hsk: '4' },
            { chinese: '风车', pinyin: 'fēng chē', translation: 'ветряная мельница', emoji: '🌀', hsk: '4' },
            { chinese: '风扇', pinyin: 'fēng shàn', translation: 'вентилятор', emoji: '🌀', hsk: '4' },
            { chinese: '风险', pinyin: 'fēng xiǎn', translation: 'риск', emoji: '⚠️', hsk: '4' },
            { chinese: '风光', pinyin: 'fēng guāng', translation: 'вид, пейзаж', emoji: '🌄', hsk: '4' },
            { chinese: '风俗', pinyin: 'fēng sú', translation: 'обычай, традиция', emoji: '🎎', hsk: '4' },
            { chinese: '风采', pinyin: 'fēng cǎi', translation: 'обаяние, шарм', emoji: '✨', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 电 — ЭЛЕКТРИЧЕСТВО =====
    // ============================================================
    '电': {
        emoji: '⚡',
        meaning: 'электричество, молния, электронный',
        words: [
            { chinese: '电话', pinyin: 'diàn huà', translation: 'телефон', emoji: '📱', hsk: '1' },
            { chinese: '电视', pinyin: 'diàn shì', translation: 'телевизор', emoji: '📺', hsk: '1' },
            { chinese: '电脑', pinyin: 'diàn nǎo', translation: 'компьютер', emoji: '💻', hsk: '2' },
            { chinese: '电影', pinyin: 'diàn yǐng', translation: 'кино, фильм', emoji: '🎬', hsk: '2' },
            { chinese: '电梯', pinyin: 'diàn tī', translation: 'лифт', emoji: '🛗', hsk: '3' },
            { chinese: '电池', pinyin: 'diàn chí', translation: 'батарейка', emoji: '🔋', hsk: '4' },
            { chinese: '电台', pinyin: 'diàn tái', translation: 'радиостанция', emoji: '📻', hsk: '4' },
            { chinese: '电扇', pinyin: 'diàn shàn', translation: 'вентилятор', emoji: '🌀', hsk: '5' },
            { chinese: '冰箱', pinyin: 'bīng xiāng', translation: 'холодильник', emoji: '🧊', hsk: '3' },
            { chinese: '电子', pinyin: 'diàn zǐ', translation: 'электронный', emoji: '💾', hsk: '3' },
            { chinese: '电工', pinyin: 'diàn gōng', translation: 'электрик', emoji: '🔧', hsk: '5' },
            { chinese: '电线', pinyin: 'diàn xiàn', translation: 'провод', emoji: '🔌', hsk: '4' },
            { chinese: '电灯', pinyin: 'diàn dēng', translation: 'электрическая лампа', emoji: '💡', hsk: '3' },
            { chinese: '电脑', pinyin: 'diàn nǎo', translation: 'компьютер', emoji: '💻', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 老 — СТАРЫЙ =====
    // ============================================================
    '老': {
        emoji: '👴',
        meaning: 'старый, опытный, уважаемый',
        words: [
            { chinese: '老公', pinyin: 'lǎo gōng', translation: 'муж', emoji: '💑', hsk: '3' },
            { chinese: '老婆', pinyin: 'lǎo pó', translation: 'жена', emoji: '💑', hsk: '3' },
            { chinese: '老人', pinyin: 'lǎo rén', translation: 'пожилой человек', emoji: '👴', hsk: '2' },
            { chinese: '老同学', pinyin: 'lǎo tóng xué', translation: 'старый одноклассник', emoji: '🎓', hsk: '4' },
            { chinese: '老爸', pinyin: 'lǎo bà', translation: 'папа', emoji: '👨', hsk: '4' },
            { chinese: '老师', pinyin: 'lǎo shī', translation: 'учитель', emoji: '👨‍🏫', hsk: '1' },
            { chinese: '老板', pinyin: 'lǎo bǎn', translation: 'начальник, босс', emoji: '💼', hsk: '2' },
            { chinese: '老外', pinyin: 'lǎo wài', translation: 'иностранец (разг.)', emoji: '🌍', hsk: '4' },
            { chinese: '老朋友', pinyin: 'lǎo péng you', translation: 'старый друг', emoji: '🤝', hsk: '3' },
            { chinese: '老年', pinyin: 'lǎo nián', translation: 'пожилой возраст', emoji: '👴', hsk: '3' },
            { chinese: '老家', pinyin: 'lǎo jiā', translation: 'родной дом', emoji: '🏡', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 大 — БОЛЬШОЙ =====
    // ============================================================
    '大': {
        emoji: '🐘',
        meaning: 'большой, великий, важный',
        words: [
            { chinese: '大家', pinyin: 'dà jiā', translation: 'все, каждый', emoji: '👥', hsk: '1' },
            { chinese: '大学', pinyin: 'dà xué', translation: 'университет', emoji: '🏫', hsk: '1' },
            { chinese: '大山', pinyin: 'dà shān', translation: 'большая гора', emoji: '🏔️', hsk: '2' },
            { chinese: '大雨', pinyin: 'dà yǔ', translation: 'сильный дождь', emoji: '🌧️', hsk: '2' },
            { chinese: '大鱼', pinyin: 'dà yú', translation: 'большая рыба', emoji: '🐋', hsk: '2' },
            { chinese: '大人', pinyin: 'dà ren', translation: 'взрослый', emoji: '🧑', hsk: '2' },
            { chinese: '大小', pinyin: 'dà xiǎo', translation: 'размер', emoji: '📏', hsk: '2' },
            { chinese: '大约', pinyin: 'dà yuē', translation: 'приблизительно', emoji: '⏳', hsk: '3' },
            { chinese: '大餐', pinyin: 'dà cān', translation: 'большой обед', emoji: '🍽️', hsk: '4' },
            { chinese: '大公司', pinyin: 'dà gōng sī', translation: 'крупная компания', emoji: '🏢', hsk: '3' },
            { chinese: '大城市', pinyin: 'dà chéng shì', translation: 'большой город', emoji: '🏙️', hsk: '3' },
            { chinese: '大衣', pinyin: 'dà yī', translation: 'пальто', emoji: '🧥', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 小 — МАЛЕНЬКИЙ =====
    // ============================================================
    '小': {
        emoji: '🔽',
        meaning: 'маленький, мелкий, младший',
        words: [
            { chinese: '小', pinyin: 'xiǎo', translation: 'маленький', emoji: '🔽', hsk: '1' },
            { chinese: '小孩', pinyin: 'xiǎo hái', translation: 'ребёнок', emoji: '👶', hsk: '1' },
            { chinese: '小学', pinyin: 'xiǎo xué', translation: 'начальная школа', emoji: '🏫', hsk: '1' },
            { chinese: '小心', pinyin: 'xiǎo xīn', translation: 'осторожный', emoji: '⚠️', hsk: '2' },
            { chinese: '小鸟', pinyin: 'xiǎo niǎo', translation: 'птичка', emoji: '🐦', hsk: '2' },
            { chinese: '小时', pinyin: 'xiǎo shí', translation: 'час', emoji: '🕐', hsk: '1' },
            { chinese: '小姐', pinyin: 'xiǎo jiě', translation: 'барышня, девушка', emoji: '👩', hsk: '2' },
            { chinese: '小猫', pinyin: 'xiǎo māo', translation: 'котёнок', emoji: '🐱', hsk: '2' },
            { chinese: '小狗', pinyin: 'xiǎo gǒu', translation: 'щенок', emoji: '🐶', hsk: '2' },
            { chinese: '小菜', pinyin: 'xiǎo cài', translation: 'закуска', emoji: '🥗', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 多 — МНОГО =====
    // ============================================================
    '多': {
        emoji: '🔢',
        meaning: 'много, больше, сколько',
        words: [
            { chinese: '多', pinyin: 'duō', translation: 'много', emoji: '🔢', hsk: '1' },
            { chinese: '多少', pinyin: 'duō shǎo', translation: 'сколько', emoji: '❓', hsk: '1' },
            { chinese: '很多', pinyin: 'hěn duō', translation: 'очень много', emoji: '📊', hsk: '1' },
            { chinese: '多久', pinyin: 'duō jiǔ', translation: 'как долго', emoji: '⏳', hsk: '2' },
            { chinese: '多数', pinyin: 'duō shù', translation: 'большинство', emoji: '📈', hsk: '3' },
            { chinese: '多种', pinyin: 'duō zhǒng', translation: 'много видов', emoji: '🌈', hsk: '4' },
            { chinese: '多少', pinyin: 'duō shǎo', translation: 'сколько', emoji: '❓', hsk: '1' },
        ]
    },

    // ============================================================
    // ===== 少 — МАЛО =====
    // ============================================================
    '少': {
        emoji: '🔽',
        meaning: 'мало, меньше, недостаточно',
        words: [
            { chinese: '少', pinyin: 'shǎo', translation: 'мало', emoji: '🔽', hsk: '1' },
            { chinese: '多少', pinyin: 'duō shǎo', translation: 'сколько', emoji: '❓', hsk: '1' },
            { chinese: '很少', pinyin: 'hěn shǎo', translation: 'очень мало', emoji: '📉', hsk: '2' },
            { chinese: '少年', pinyin: 'shào nián', translation: 'юноша, подросток', emoji: '🧑', hsk: '3' },
            { chinese: '少数', pinyin: 'shǎo shù', translation: 'меньшинство', emoji: '📉', hsk: '3' },
            { chinese: '少量', pinyin: 'shǎo liàng', translation: 'небольшое количество', emoji: '🔽', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 快 — БЫСТРЫЙ, СКОРЫЙ =====
    // ============================================================
    '快': {
        emoji: '⚡',
        meaning: 'быстрый, скорый, радостный',
        words: [
            { chinese: '快', pinyin: 'kuài', translation: 'быстро', emoji: '⚡', hsk: '2' },
            { chinese: '快乐', pinyin: 'kuài lè', translation: 'счастливый, радостный', emoji: '😊', hsk: '1' },
            { chinese: '快速', pinyin: 'kuài sù', translation: 'быстрый, скоростной', emoji: '🚀', hsk: '3' },
            { chinese: '快点', pinyin: 'kuài diǎn', translation: 'побыстрее', emoji: '⏩', hsk: '2' },
            { chinese: '快走', pinyin: 'kuài zǒu', translation: 'идти быстро', emoji: '🏃', hsk: '3' },
            { chinese: '快车', pinyin: 'kuài chē', translation: 'скорый поезд', emoji: '🚄', hsk: '4' },
            { chinese: '快递', pinyin: 'kuài dì', translation: 'экспресс-доставка', emoji: '📦', hsk: '3' },
            { chinese: '快餐', pinyin: 'kuài cān', translation: 'фастфуд', emoji: '🍔', hsk: '3' },
            { chinese: '快活', pinyin: 'kuài huo', translation: 'весёлый, жизнерадостный', emoji: '😄', hsk: '5' },
            { chinese: '赶快', pinyin: 'gǎn kuài', translation: 'поскорее', emoji: '⏰', hsk: '3' },
            { chinese: '愉快', pinyin: 'yú kuài', translation: 'приятный, радостный', emoji: '😊', hsk: '4' },
            { chinese: '不快', pinyin: 'bù kuài', translation: 'недовольный', emoji: '😒', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 天 — НЕБО, ДЕНЬ =====
    // ============================================================
    '天': {
        emoji: '🌞',
        meaning: 'небо, день, погода, природа',
        words: [
            { chinese: '今天', pinyin: 'jīn tiān', translation: 'сегодня', emoji: '📅', hsk: '1' },
            { chinese: '明天', pinyin: 'míng tiān', translation: 'завтра', emoji: '⏰', hsk: '1' },
            { chinese: '昨天', pinyin: 'zuó tiān', translation: 'вчера', emoji: '⏪', hsk: '1' },
            { chinese: '夏天', pinyin: 'xià tiān', translation: 'лето', emoji: '🌻', hsk: '2' },
            { chinese: '白天', pinyin: 'bái tiān', translation: 'день', emoji: '☀️', hsk: '2' },
            { chinese: '每天', pinyin: 'měi tiān', translation: 'каждый день', emoji: '📆', hsk: '2' },
            { chinese: '天气', pinyin: 'tiān qì', translation: 'погода', emoji: '🌤️', hsk: '1' },
            { chinese: '春天', pinyin: 'chūn tiān', translation: 'весна', emoji: '🌸', hsk: '1' },
            { chinese: '秋天', pinyin: 'qiū tiān', translation: 'осень', emoji: '🍂', hsk: '2' },
            { chinese: '冬天', pinyin: 'dōng tiān', translation: 'зима', emoji: '❄️', hsk: '2' },
            { chinese: '天空', pinyin: 'tiān kōng', translation: 'небо', emoji: '🌌', hsk: '2' },
            { chinese: '天才', pinyin: 'tiān cái', translation: 'гений, талант', emoji: '🌟', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 年 — ГОД =====
    // ============================================================
    '年': {
        emoji: '📅',
        meaning: 'год, возраст, Новый год',
        words: [
            { chinese: '今年', pinyin: 'jīn nián', translation: 'в этом году', emoji: '📆', hsk: '1' },
            { chinese: '去年', pinyin: 'qù nián', translation: 'в прошлом году', emoji: '📅', hsk: '2' },
            { chinese: '明年', pinyin: 'míng nián', translation: 'в следующем году', emoji: '📅', hsk: '1' },
            { chinese: '新年', pinyin: 'xīn nián', translation: 'Новый год', emoji: '🎆', hsk: '2' },
            { chinese: '年龄', pinyin: 'nián líng', translation: 'возраст', emoji: '🎂', hsk: '3' },
            { chinese: '年级', pinyin: 'nián jí', translation: 'класс (в школе)', emoji: '📚', hsk: '2' },
            { chinese: '年糕', pinyin: 'nián gāo', translation: 'новогодний пирог', emoji: '🍰', hsk: '4' },
            { chinese: '年货', pinyin: 'nián huò', translation: 'новогодние товары', emoji: '🧧', hsk: '5' },
            { chinese: '年终', pinyin: 'nián zhōng', translation: 'конец года', emoji: '📅', hsk: '4' },
            { chinese: '年轻', pinyin: 'nián qīng', translation: 'молодой', emoji: '🧑', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 月 — ЛУНА, МЕСЯЦ =====
    // ============================================================
    '月': {
        emoji: '🌙',
        meaning: 'луна, месяц, мясо',
        words: [
            { chinese: '月亮', pinyin: 'yuè liang', translation: 'луна', emoji: '🌕', hsk: '2' },
            { chinese: '每月', pinyin: 'měi yuè', translation: 'каждый месяц', emoji: '📅', hsk: '3' },
            { chinese: '月份', pinyin: 'yuè fèn', translation: 'месяц', emoji: '🗓️', hsk: '3' },
            { chinese: '月票', pinyin: 'yuè piào', translation: 'проездной на месяц', emoji: '🎫', hsk: '4' },
            { chinese: '月光', pinyin: 'yuè guāng', translation: 'лунный свет', emoji: '🌙', hsk: '4' },
            { chinese: '月圆', pinyin: 'yuè yuán', translation: 'полнолуние', emoji: '🌕', hsk: '4' },
            { chinese: '月饼', pinyin: 'yuè bǐng', translation: 'лунный пряник', emoji: '🥮', hsk: '3' },
            { chinese: '月球', pinyin: 'yuè qiú', translation: 'луна (планета)', emoji: '🌕', hsk: '4' },
            { chinese: '月份', pinyin: 'yuè fèn', translation: 'месяц', emoji: '📅', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 日 — СОЛНЦЕ, ДЕНЬ =====
    // ============================================================
    '日': {
        emoji: '☀️',
        meaning: 'солнце, день, Япония',
        words: [
            { chinese: '今天', pinyin: 'jīn tiān', translation: 'сегодня', emoji: '📅', hsk: '1' },
            { chinese: '明天', pinyin: 'míng tiān', translation: 'завтра', emoji: '⏰', hsk: '1' },
            { chinese: '昨天', pinyin: 'zuó tiān', translation: 'вчера', emoji: '⏪', hsk: '1' },
            { chinese: '日子', pinyin: 'rì zi', translation: 'день, дата', emoji: '📆', hsk: '2' },
            { chinese: '日记', pinyin: 'rì jì', translation: 'дневник', emoji: '📓', hsk: '3' },
            { chinese: '日出', pinyin: 'rì chū', translation: 'восход солнца', emoji: '🌅', hsk: '3' },
            { chinese: '日落', pinyin: 'rì luò', translation: 'закат', emoji: '🌇', hsk: '3' },
            { chinese: '日本', pinyin: 'Rì běn', translation: 'Япония', emoji: '🇯🇵', hsk: '2' },
            { chinese: '日语', pinyin: 'rì yǔ', translation: 'японский язык', emoji: '🗣️', hsk: '3' },
            { chinese: '星期日', pinyin: 'xīng qī rì', translation: 'воскресенье', emoji: '📅', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 人 — ЧЕЛОВЕК =====
    // ============================================================
    '人': {
        emoji: '👤',
        meaning: 'человек, люди, население',
        words: [
            { chinese: '大人', pinyin: 'dà ren', translation: 'взрослый', emoji: '🧑', hsk: '2' },
            { chinese: '老人', pinyin: 'lǎo rén', translation: 'пожилой человек', emoji: '👴', hsk: '2' },
            { chinese: '人们', pinyin: 'rén men', translation: 'люди', emoji: '👥', hsk: '2' },
            { chinese: '人民', pinyin: 'rén mín', translation: 'народ', emoji: '🏛️', hsk: '3' },
            { chinese: '人才', pinyin: 'rén cái', translation: 'талантливый человек', emoji: '🌟', hsk: '4' },
            { chinese: '人口', pinyin: 'rén kǒu', translation: 'население', emoji: '👫', hsk: '3' },
            { chinese: '人生', pinyin: 'rén shēng', translation: 'жизнь (человека)', emoji: '🌅', hsk: '3' },
            { chinese: '人情', pinyin: 'rén qíng', translation: 'человеческие чувства', emoji: '💕', hsk: '4' },
            { chinese: '工人', pinyin: 'gōng rén', translation: 'рабочий', emoji: '👷', hsk: '2' },
            { chinese: '客人', pinyin: 'kè rén', translation: 'гость', emoji: '🧑‍🤝‍🧑', hsk: '2' },
            { chinese: '爱人', pinyin: 'ài rén', translation: 'любимый человек', emoji: '💑', hsk: '4' },
            { chinese: '家人', pinyin: 'jiā rén', translation: 'члены семьи', emoji: '👨‍👩‍👧', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 手 — РУКА =====
    // ============================================================
    '手': {
        emoji: '✋',
        meaning: 'рука, ручной, делать руками',
        words: [
            { chinese: '手机', pinyin: 'shǒu jī', translation: 'мобильный телефон', emoji: '📱', hsk: '1' },
            { chinese: '手表', pinyin: 'shǒu biǎo', translation: 'часы', emoji: '⌚', hsk: '2' },
            { chinese: '手指', pinyin: 'shǒu zhǐ', translation: 'палец', emoji: '🖐️', hsk: '3' },
            { chinese: '手工', pinyin: 'shǒu gōng', translation: 'ручная работа', emoji: '🧵', hsk: '4' },
            { chinese: '手术', pinyin: 'shǒu shù', translation: 'операция (хирургия)', emoji: '🏥', hsk: '4' },
            { chinese: '手套', pinyin: 'shǒu tào', translation: 'перчатки', emoji: '🧤', hsk: '3' },
            { chinese: '手帕', pinyin: 'shǒu pà', translation: 'носовой платок', emoji: '🧣', hsk: '5' },
            { chinese: '手纸', pinyin: 'shǒu zhǐ', translation: 'туалетная бумага', emoji: '🧻', hsk: '4' },
            { chinese: '手册', pinyin: 'shǒu cè', translation: 'справочник, руководство', emoji: '📘', hsk: '4' },
            { chinese: '手法', pinyin: 'shǒu fǎ', translation: 'метод, техника', emoji: '🎯', hsk: '5' },
            { chinese: '手艺', pinyin: 'shǒu yì', translation: 'мастерство', emoji: '🔧', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 车 — МАШИНА, ТРАНСПОРТ =====
    // ============================================================
    '车': {
        emoji: '🚗',
        meaning: 'машина, транспорт, средство передвижения',
        words: [
            { chinese: '打车', pinyin: 'dǎ chē', translation: 'взять такси', emoji: '🚕', hsk: '3' },
            { chinese: '汽车', pinyin: 'qì chē', translation: 'автомобиль', emoji: '🚗', hsk: '2' },
            { chinese: '火车', pinyin: 'huǒ chē', translation: 'поезд', emoji: '🚂', hsk: '2' },
            { chinese: '自行车', pinyin: 'zì xíng chē', translation: 'велосипед', emoji: '🚲', hsk: '2' },
            { chinese: '车站', pinyin: 'chē zhàn', translation: 'станция, вокзал', emoji: '🚉', hsk: '3' },
            { chinese: '出租车', pinyin: 'chū zū chē', translation: 'такси', emoji: '🚕', hsk: '3' },
            { chinese: '地铁', pinyin: 'dì tiě', translation: 'метро', emoji: '🚇', hsk: '2' },
            { chinese: '校车', pinyin: 'xiào chē', translation: 'школьный автобус', emoji: '🚌', hsk: '4' },
            { chinese: '骑自行车', pinyin: 'qí zì xíng chē', translation: 'кататься на велосипеде', emoji: '🚲', hsk: '3' },
            { chinese: '开车', pinyin: 'kāi chē', translation: 'вести машину', emoji: '🚗', hsk: '2' },
            { chinese: '停车', pinyin: 'tíng chē', translation: 'парковаться', emoji: '🅿️', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 家 — ДОМ, СЕМЬЯ =====
    // ============================================================
    '家': {
        emoji: '🏠',
        meaning: 'дом, семья, семьянин',
        words: [
            { chinese: '大家', pinyin: 'dà jiā', translation: 'все', emoji: '👥', hsk: '1' },
            { chinese: '国家', pinyin: 'guó jiā', translation: 'страна', emoji: '🗺️', hsk: '2' },
            { chinese: '回家', pinyin: 'huí jiā', translation: 'возвращаться домой', emoji: '🏡', hsk: '2' },
            { chinese: '家庭', pinyin: 'jiā tíng', translation: 'семья', emoji: '👪', hsk: '3' },
            { chinese: '家具', pinyin: 'jiā jù', translation: 'мебель', emoji: '🪑', hsk: '3' },
            { chinese: '家人', pinyin: 'jiā rén', translation: 'семья, родные', emoji: '👨‍👩‍👧', hsk: '2' },
            { chinese: '家乡', pinyin: 'jiā xiāng', translation: 'родной город', emoji: '🏡', hsk: '3' },
            { chinese: '家务', pinyin: 'jiā wù', translation: 'домашние дела', emoji: '🧹', hsk: '3' },
            { chinese: '家电', pinyin: 'jiā diàn', translation: 'бытовая техника', emoji: '📺', hsk: '4' },
            { chinese: '家长', pinyin: 'jiā zhǎng', translation: 'родитель', emoji: '👨‍👦', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 学 — УЧИТЬСЯ, ШКОЛА =====
    // ============================================================
    '学': {
        emoji: '📚',
        meaning: 'учиться, школа, наука',
        words: [
            { chinese: '大学', pinyin: 'dà xué', translation: 'университет', emoji: '🏫', hsk: '1' },
            { chinese: '学生', pinyin: 'xué shēng', translation: 'ученик', emoji: '🧑‍🎓', hsk: '1' },
            { chinese: '学习', pinyin: 'xué xí', translation: 'учиться', emoji: '📖', hsk: '1' },
            { chinese: '学校', pinyin: 'xué xiào', translation: 'школа', emoji: '🏫', hsk: '1' },
            { chinese: '学问', pinyin: 'xué wèn', translation: 'знания', emoji: '🧠', hsk: '4' },
            { chinese: '学期', pinyin: 'xué qī', translation: 'семестр', emoji: '📅', hsk: '3' },
            { chinese: '科学', pinyin: 'kē xué', translation: 'наука', emoji: '🔬', hsk: '3' },
            { chinese: '文学', pinyin: 'wén xué', translation: 'литература', emoji: '📖', hsk: '4' },
            { chinese: '数学', pinyin: 'shù xué', translation: 'математика', emoji: '📐', hsk: '3' },
            { chinese: '化学', pinyin: 'huà xué', translation: 'химия', emoji: '🧪', hsk: '4' },
            { chinese: '物理', pinyin: 'wù lǐ', translation: 'физика', emoji: '⚛️', hsk: '4' },
            { chinese: '学生', pinyin: 'xué shēng', translation: 'ученик', emoji: '🧑‍🎓', hsk: '1' },
        ]
    },

    // ============================================================
    // ===== 国 — СТРАНА =====
    // ============================================================
    '国': {
        emoji: '🌍',
        meaning: 'страна, государство, родина',
        words: [
            { chinese: '中国', pinyin: 'Zhōng guó', translation: 'Китай', emoji: '🇨🇳', hsk: '1' },
            { chinese: '国家', pinyin: 'guó jiā', translation: 'страна', emoji: '🗺️', hsk: '2' },
            { chinese: '国外', pinyin: 'guó wài', translation: 'за границей', emoji: '✈️', hsk: '3' },
            { chinese: '国际', pinyin: 'guó jì', translation: 'международный', emoji: '🌐', hsk: '3' },
            { chinese: '国旗', pinyin: 'guó qí', translation: 'флаг', emoji: '🏳️', hsk: '4' },
            { chinese: '国语', pinyin: 'guó yǔ', translation: 'государственный язык', emoji: '🗣️', hsk: '4' },
            { chinese: '国民', pinyin: 'guó mín', translation: 'народ, граждане', emoji: '👥', hsk: '4' },
            { chinese: '国务院', pinyin: 'guó wù yuàn', translation: 'Государственный совет', emoji: '🏛️', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 文 — КУЛЬТУРА, ПИСЬМЕННОСТЬ =====
    // ============================================================
    '文': {
        emoji: '📝',
        meaning: 'письменность, культура, язык',
        words: [
            { chinese: '中文', pinyin: 'zhōng wén', translation: 'китайский язык', emoji: '🇨🇳', hsk: '1' },
            { chinese: '文化', pinyin: 'wén huà', translation: 'культура', emoji: '🎭', hsk: '3' },
            { chinese: '文字', pinyin: 'wén zì', translation: 'письменность', emoji: '✍️', hsk: '3' },
            { chinese: '文学', pinyin: 'wén xué', translation: 'литература', emoji: '📖', hsk: '4' },
            { chinese: '文章', pinyin: 'wén zhāng', translation: 'статья', emoji: '📄', hsk: '3' },
            { chinese: '文明', pinyin: 'wén míng', translation: 'цивилизация', emoji: '🏛️', hsk: '4' },
            { chinese: '文化', pinyin: 'wén huà', translation: 'культура', emoji: '🎭', hsk: '3' },
            { chinese: '语文', pinyin: 'yǔ wén', translation: 'язык и литература', emoji: '📚', hsk: '2' },
            { chinese: '英文', pinyin: 'yīng wén', translation: 'английский язык', emoji: '🇬🇧', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 言 — РЕЧЬ, ЯЗЫК =====
    // ============================================================
    '言': {
        emoji: '💬',
        meaning: 'речь, язык, высказывание',
        words: [
            { chinese: '语言', pinyin: 'yǔ yán', translation: 'язык', emoji: '🗣️', hsk: '3' },
            { chinese: '言论', pinyin: 'yán lùn', translation: 'высказывание', emoji: '📢', hsk: '4' },
            { chinese: '言语', pinyin: 'yán yǔ', translation: 'речь', emoji: '💬', hsk: '4' },
            { chinese: '名言', pinyin: 'míng yán', translation: 'известное высказывание', emoji: '⭐', hsk: '5' },
            { chinese: '发言', pinyin: 'fā yán', translation: 'выступать, говорить', emoji: '🎤', hsk: '4' },
            { chinese: '谣言', pinyin: 'yáo yán', translation: 'слухи', emoji: '📢', hsk: '5' },
            { chinese: '传言', pinyin: 'chuán yán', translation: 'молва, слухи', emoji: '💬', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 音 — ЗВУК, ТОН =====
    // ============================================================
    '音': {
        emoji: '🔊',
        meaning: 'звук, тон, музыка',
        words: [
            { chinese: '音乐', pinyin: 'yīn yuè', translation: 'музыка', emoji: '🎶', hsk: '1' },
            { chinese: '声音', pinyin: 'shēng yīn', translation: 'звук', emoji: '🔊', hsk: '3' },
            { chinese: '口音', pinyin: 'kǒu yīn', translation: 'акцент', emoji: '🗣️', hsk: '4' },
            { chinese: '拼音', pinyin: 'pīn yīn', translation: 'пиньинь', emoji: '🔤', hsk: '2' },
            { chinese: '音响', pinyin: 'yīn xiǎng', translation: 'аудиосистема', emoji: '🔊', hsk: '4' },
            { chinese: '音调', pinyin: 'yīn diào', translation: 'тон, интонация', emoji: '🎵', hsk: '5' },
            { chinese: '音乐家', pinyin: 'yīn yuè jiā', translation: 'музыкант', emoji: '🎵', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 空 — НЕБО, ПУСТОТА =====
    // ============================================================
    '空': {
        emoji: '☁️',
        meaning: 'небо, пустой, свободный, воздух',
        words: [
            { chinese: '天空', pinyin: 'tiān kōng', translation: 'небо', emoji: '🌌', hsk: '2' },
            { chinese: '空气', pinyin: 'kōng qì', translation: 'воздух', emoji: '🌬️', hsk: '3' },
            { chinese: '空调', pinyin: 'kōng tiáo', translation: 'кондиционер', emoji: '❄️', hsk: '4' },
            { chinese: '空间', pinyin: 'kōng jiān', translation: 'пространство', emoji: '🌌', hsk: '3' },
            { chinese: '空白', pinyin: 'kòng bái', translation: 'пустое место, пробел', emoji: '📄', hsk: '4' },
            { chinese: '空闲', pinyin: 'kòng xián', translation: 'свободное время', emoji: '🆓', hsk: '4' },
            { chinese: '空中', pinyin: 'kōng zhōng', translation: 'в воздухе', emoji: '☁️', hsk: '3' },
            { chinese: '空军', pinyin: 'kōng jūn', translation: 'военно-воздушные силы', emoji: '✈️', hsk: '5' },
            { chinese: '空手', pinyin: 'kōng shǒu', translation: 'с пустыми руками', emoji: '✋', hsk: '4' },
            { chinese: '空气', pinyin: 'kōng qì', translation: 'воздух', emoji: '🌬️', hsk: '3' },
            { chinese: '有空', pinyin: 'yǒu kòng', translation: 'иметь свободное время', emoji: '🕐', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 店 — МАГАЗИН =====
    // ============================================================
    '店': {
        emoji: '🏪',
        meaning: 'магазин, лавка, заведение',
        words: [
            { chinese: '商店', pinyin: 'shāng diàn', translation: 'магазин', emoji: '🏪', hsk: '1' },
            { chinese: '饭店', pinyin: 'fàn diàn', translation: 'ресторан', emoji: '🍽️', hsk: '2' },
            { chinese: '书店', pinyin: 'shū diàn', translation: 'книжный магазин', emoji: '📚', hsk: '2' },
            { chinese: '酒店', pinyin: 'jiǔ diàn', translation: 'гостиница, отель', emoji: '🏨', hsk: '2' },
            { chinese: '药店', pinyin: 'yào diàn', translation: 'аптека', emoji: '💊', hsk: '3' },
            { chinese: '鞋店', pinyin: 'xié diàn', translation: 'обувной магазин', emoji: '👟', hsk: '4' },
            { chinese: '花店', pinyin: 'huā diàn', translation: 'цветочный магазин', emoji: '🌸', hsk: '4' },
            { chinese: '咖啡馆', pinyin: 'kā fēi guǎn', translation: 'кафе', emoji: '☕', hsk: '3' },
            { chinese: '便利店', pinyin: 'biàn lì diàn', translation: 'круглосуточный магазин', emoji: '🛒', hsk: '4' },
            { chinese: '店长', pinyin: 'diàn zhǎng', translation: 'директор магазина', emoji: '🧑‍💼', hsk: '5' },
            { chinese: '店员', pinyin: 'diàn yuán', translation: 'продавец', emoji: '🧑‍💼', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 海 — МОРЕ =====
    // ============================================================
    '海': {
        emoji: '🌊',
        meaning: 'море, океан, много',
        words: [
            { chinese: '大海', pinyin: 'dà hǎi', translation: 'море', emoji: '🌊', hsk: '2' },
            { chinese: '上海', pinyin: 'Shàng hǎi', translation: 'Шанхай', emoji: '🏙️', hsk: '2' },
            { chinese: '海边', pinyin: 'hǎi biān', translation: 'морской берег', emoji: '🏖️', hsk: '3' },
            { chinese: '海水', pinyin: 'hǎi shuǐ', translation: 'морская вода', emoji: '🌊', hsk: '3' },
            { chinese: '海鲜', pinyin: 'hǎi xiān', translation: 'морепродукты', emoji: '🦐', hsk: '3' },
            { chinese: '海洋', pinyin: 'hǎi yáng', translation: 'океан', emoji: '🌊', hsk: '3' },
            { chinese: '海风', pinyin: 'hǎi fēng', translation: 'морской бриз', emoji: '🌬️', hsk: '4' },
            { chinese: '海鸥', pinyin: 'hǎi ōu', translation: 'чайка', emoji: '🐦', hsk: '5' },
            { chinese: '海外', pinyin: 'hǎi wài', translation: 'за границей', emoji: '✈️', hsk: '4' },
            { chinese: '海关', pinyin: 'hǎi guān', translation: 'таможня', emoji: '🛃', hsk: '4' },
            { chinese: '海峡', pinyin: 'hǎi xiá', translation: 'пролив', emoji: '🌊', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 看 — СМОТРЕТЬ =====
    // ============================================================
    '看': {
        emoji: '👀',
        meaning: 'смотреть, видеть, читать, полагать',
        words: [
            { chinese: '看', pinyin: 'kàn', translation: 'смотреть', emoji: '👀', hsk: '1' },
            { chinese: '看书', pinyin: 'kàn shū', translation: 'читать книгу', emoji: '📖', hsk: '1' },
            { chinese: '看电视', pinyin: 'kàn diàn shì', translation: 'смотреть телевизор', emoji: '📺', hsk: '1' },
            { chinese: '看电影', pinyin: 'kàn diàn yǐng', translation: 'смотреть кино', emoji: '🎬', hsk: '2' },
            { chinese: '看病', pinyin: 'kàn bìng', translation: 'обращаться к врачу', emoji: '🏥', hsk: '3' },
            { chinese: '看见', pinyin: 'kàn jiàn', translation: 'увидеть', emoji: '👁️', hsk: '1' },
            { chinese: '看法', pinyin: 'kàn fǎ', translation: 'мнение, точка зрения', emoji: '💭', hsk: '3' },
            { chinese: '看门', pinyin: 'kān mén', translation: 'сторожить', emoji: '🔑', hsk: '4' },
            { chinese: '看情况', pinyin: 'kàn qíng kuàng', translation: 'смотреть по ситуации', emoji: '📊', hsk: '4' },
            { chinese: '看不起', pinyin: 'kàn bù qǐ', translation: 'презирать', emoji: '🙄', hsk: '5' },
            { chinese: '看得起', pinyin: 'kàn de qǐ', translation: 'уважать', emoji: '👍', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 听 — СЛУШАТЬ =====
    // ============================================================
    '听': {
        emoji: '👂',
        meaning: 'слушать, слышать, позволять',
        words: [
            { chinese: '听', pinyin: 'tīng', translation: 'слушать', emoji: '👂', hsk: '1' },
            { chinese: '听音乐', pinyin: 'tīng yīn yuè', translation: 'слушать музыку', emoji: '🎵', hsk: '2' },
            { chinese: '听说', pinyin: 'tīng shuō', translation: 'слышать, говорят', emoji: '🗣️', hsk: '2' },
            { chinese: '听课', pinyin: 'tīng kè', translation: 'слушать урок', emoji: '📚', hsk: '3' },
            { chinese: '听话', pinyin: 'tīng huà', translation: 'слушаться', emoji: '🙋', hsk: '3' },
            { chinese: '听见', pinyin: 'tīng jiàn', translation: 'услышать', emoji: '👂', hsk: '2' },
            { chinese: '听写', pinyin: 'tīng xiě', translation: 'писать под диктовку', emoji: '✍️', hsk: '4' },
            { chinese: '听力', pinyin: 'tīng lì', translation: 'слух', emoji: '👂', hsk: '3' },
            { chinese: '听懂', pinyin: 'tīng dǒng', translation: 'понять на слух', emoji: '✅', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 说 — ГОВОРИТЬ =====
    // ============================================================
    '说': {
        emoji: '🗣️',
        meaning: 'говорить, сказать, объяснять',
        words: [
            { chinese: '说话', pinyin: 'shuō huà', translation: 'говорить', emoji: '💬', hsk: '1' },
            { chinese: '说', pinyin: 'shuō', translation: 'сказать', emoji: '🗣️', hsk: '1' },
            { chinese: '小说', pinyin: 'xiǎo shuō', translation: 'роман, повесть', emoji: '📖', hsk: '3' },
            { chinese: '说明', pinyin: 'shuō míng', translation: 'объяснять', emoji: '📝', hsk: '3' },
            { chinese: '说法', pinyin: 'shuō fǎ', translation: 'способ говорить, мнение', emoji: '🗣️', hsk: '4' },
            { chinese: '听说', pinyin: 'tīng shuō', translation: 'слышать, говорят', emoji: '🗣️', hsk: '2' },
            { chinese: '说笑', pinyin: 'shuō xiào', translation: 'шутя говорить', emoji: '😂', hsk: '4' },
            { chinese: '说谎', pinyin: 'shuō huǎng', translation: 'лгать', emoji: '🤥', hsk: '4' },
            { chinese: '说服', pinyin: 'shuō fú', translation: 'убеждать', emoji: '💪', hsk: '4' },
            { chinese: '说穿', pinyin: 'shuō chuān', translation: 'разоблачить', emoji: '🔍', hsk: '6' },
            { chinese: '说实在', pinyin: 'shuō shí zài', translation: 'честно говоря', emoji: '💯', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 话 — РЕЧЬ, РАЗГОВОР =====
    // ============================================================
    '话': {
        emoji: '💬',
        meaning: 'речь, разговор, слово',
        words: [
            { chinese: '电话', pinyin: 'diàn huà', translation: 'телефон', emoji: '📱', hsk: '1' },
            { chinese: '说话', pinyin: 'shuō huà', translation: 'говорить', emoji: '💬', hsk: '1' },
            { chinese: '笑话', pinyin: 'xiào huà', translation: 'шутка', emoji: '😂', hsk: '3' },
            { chinese: '普通话', pinyin: 'pǔ tōng huà', translation: 'путунхуа', emoji: '🇨🇳', hsk: '2' },
            { chinese: '对话', pinyin: 'duì huà', translation: 'диалог', emoji: '💬', hsk: '3' },
            { chinese: '讲话', pinyin: 'jiǎng huà', translation: 'выступать', emoji: '🎤', hsk: '3' },
            { chinese: '会话', pinyin: 'huì huà', translation: 'разговор', emoji: '💬', hsk: '4' },
            { chinese: '话题', pinyin: 'huà tí', translation: 'тема разговора', emoji: '📌', hsk: '4' },
            { chinese: '话语', pinyin: 'huà yǔ', translation: 'слова, речь', emoji: '💬', hsk: '4' },
            { chinese: '说话', pinyin: 'shuō huà', translation: 'говорить', emoji: '💬', hsk: '1' },
        ]
    },

    // ============================================================
    // ===== 想 — ДУМАТЬ, ХОТЕТЬ =====
    // ============================================================
    '想': {
        emoji: '💭',
        meaning: 'думать, хотеть, скучать, полагать',
        words: [
            { chinese: '想', pinyin: 'xiǎng', translation: 'хотеть, думать', emoji: '💭', hsk: '1' },
            { chinese: '想法', pinyin: 'xiǎng fǎ', translation: 'мысль, идея', emoji: '💡', hsk: '3' },
            { chinese: '想象', pinyin: 'xiǎng xiàng', translation: 'воображать', emoji: '🌈', hsk: '4' },
            { chinese: '想念', pinyin: 'xiǎng niàn', translation: 'скучать, тосковать', emoji: '😢', hsk: '3' },
            { chinese: '梦想', pinyin: 'mèng xiǎng', translation: 'мечта', emoji: '🌟', hsk: '4' },
            { chinese: '理想', pinyin: 'lǐ xiǎng', translation: 'идеал', emoji: '⭐', hsk: '4' },
            { chinese: '思考', pinyin: 'sī kǎo', translation: 'размышлять', emoji: '🧠', hsk: '4' },
            { chinese: '猜想', pinyin: 'cāi xiǎng', translation: 'предполагать', emoji: '🤔', hsk: '5' },
            { chinese: '想想', pinyin: 'xiǎng xiǎng', translation: 'подумать', emoji: '💭', hsk: '2' },
            { chinese: '想要', pinyin: 'xiǎng yào', translation: 'хотеть', emoji: '🙋', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 会 — УМЕТЬ, ВСТРЕЧАТЬСЯ =====
    // ============================================================
    '会': {
        emoji: '👥',
        meaning: 'уметь, встречаться, собрание, общество',
        words: [
            { chinese: '开会', pinyin: 'kāi huì', translation: 'проводить собрание', emoji: '📋', hsk: '2' },
            { chinese: '不会', pinyin: 'bù huì', translation: 'не уметь, не будет', emoji: '❌', hsk: '1' },
            { chinese: '会议', pinyin: 'huì yì', translation: 'собрание, конференция', emoji: '📊', hsk: '3' },
            { chinese: '社会', pinyin: 'shè huì', translation: 'общество', emoji: '🌍', hsk: '3' },
            { chinese: '会见', pinyin: 'huì jiàn', translation: 'встречаться', emoji: '🤝', hsk: '4' },
            { chinese: '聚会', pinyin: 'jù huì', translation: 'встреча, вечеринка', emoji: '🎉', hsk: '3' },
            { chinese: '工会', pinyin: 'gōng huì', translation: 'профсоюз', emoji: '🏛️', hsk: '5' },
            { chinese: '学会', pinyin: 'xué huì', translation: 'научиться', emoji: '🎓', hsk: '3' },
            { chinese: '会计', pinyin: 'kuài jì', translation: 'бухгалтер', emoji: '🧮', hsk: '4' },
            { chinese: '会议', pinyin: 'huì yì', translation: 'собрание', emoji: '📊', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 做 — ДЕЛАТЬ =====
    // ============================================================
    '做': {
        emoji: '✍️',
        meaning: 'делать, заниматься, работать, быть (кем-то)',
        words: [
            { chinese: '做', pinyin: 'zuò', translation: 'делать', emoji: '✍️', hsk: '1' },
            { chinese: '做饭', pinyin: 'zuò fàn', translation: 'готовить еду', emoji: '🍳', hsk: '2' },
            { chinese: '做作业', pinyin: 'zuò zuò yè', translation: 'делать домашнее задание', emoji: '📝', hsk: '2' },
            { chinese: '做家务', pinyin: 'zuò jiā wù', translation: 'делать работу по дому', emoji: '🏠', hsk: '3' },
            { chinese: '做生意', pinyin: 'zuò shēng yì', translation: 'заниматься бизнесом', emoji: '💼', hsk: '4' },
            { chinese: '做朋友', pinyin: 'zuò péng you', translation: 'дружить', emoji: '🤝', hsk: '3' },
            { chinese: '做菜', pinyin: 'zuò cài', translation: 'готовить', emoji: '👨‍🍳', hsk: '3' },
            { chinese: '做决定', pinyin: 'zuò jué dìng', translation: 'принимать решение', emoji: '⚖️', hsk: '4' },
            { chinese: '做爱', pinyin: 'zuò ài', translation: 'заниматься любовью', emoji: '💕', hsk: '6' },
            { chinese: '做官', pinyin: 'zuò guān', translation: 'быть чиновником', emoji: '👔', hsk: '5' },
            { chinese: '做老师', pinyin: 'zuò lǎo shī', translation: 'быть учителем', emoji: '👨‍🏫', hsk: '2' },
            { chinese: '做医生', pinyin: 'zuò yī shēng', translation: 'быть врачом', emoji: '👨‍⚕️', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 知 — ЗНАТЬ =====
    // ============================================================
    '知': {
        emoji: '🧠',
        meaning: 'знать, понимать, осознавать',
        words: [
            { chinese: '知道', pinyin: 'zhī dào', translation: 'знать', emoji: '💡', hsk: '1' },
            { chinese: '知识', pinyin: 'zhī shi', translation: 'знание', emoji: '📚', hsk: '3' },
            { chinese: '不知', pinyin: 'bù zhī', translation: 'не знать', emoji: '❓', hsk: '2' },
            { chinese: '知名', pinyin: 'zhī míng', translation: 'известный', emoji: '⭐', hsk: '4' },
            { chinese: '知己', pinyin: 'zhī jǐ', translation: 'близкий друг', emoji: '💕', hsk: '5' },
            { chinese: '知觉', pinyin: 'zhī jué', translation: 'восприятие', emoji: '👁️', hsk: '5' },
            { chinese: '知足', pinyin: 'zhī zú', translation: 'довольствоваться', emoji: '😌', hsk: '5' },
            { chinese: '知名', pinyin: 'zhī míng', translation: 'известный', emoji: '⭐', hsk: '4' },
            { chinese: '知情', pinyin: 'zhī qíng', translation: 'знать о чём-то', emoji: '🤔', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 道 — ПУТЬ, ДОРОГА =====
    // ============================================================
    '道': {
        emoji: '🛤️',
        meaning: 'путь, дорога, способ, говорить',
        words: [
            { chinese: '知道', pinyin: 'zhī dào', translation: 'знать', emoji: '💡', hsk: '1' },
            { chinese: '道路', pinyin: 'dào lù', translation: 'дорога', emoji: '🛣️', hsk: '3' },
            { chinese: '道德', pinyin: 'dào dé', translation: 'мораль', emoji: '📜', hsk: '4' },
            { chinese: '道理', pinyin: 'dào lǐ', translation: 'принцип, истина', emoji: '⚖️', hsk: '3' },
            { chinese: '味道', pinyin: 'wèi dào', translation: 'вкус, запах', emoji: '👃', hsk: '3' },
            { chinese: '道歉', pinyin: 'dào qiàn', translation: 'извиняться', emoji: '🙏', hsk: '3' },
            { chinese: '报道', pinyin: 'bào dào', translation: 'репортаж', emoji: '📢', hsk: '4' },
            { chinese: '通道', pinyin: 'tōng dào', translation: 'проход', emoji: '🚪', hsk: '4' },
            { chinese: '道理', pinyin: 'dào lǐ', translation: 'принцип', emoji: '⚖️', hsk: '3' },
            { chinese: '道士', pinyin: 'dào shì', translation: 'даосский монах', emoji: '🧘', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 间 — КОМНАТА, ПРОМЕЖУТОК =====
    // ============================================================
    '间': {
        emoji: '🚪',
        meaning: 'комната, промежуток, между',
        words: [
            { chinese: '房间', pinyin: 'fáng jiān', translation: 'комната', emoji: '🛏️', hsk: '2' },
            { chinese: '时间', pinyin: 'shí jiān', translation: 'время', emoji: '⏰', hsk: '1' },
            { chinese: '中间', pinyin: 'zhōng jiān', translation: 'середина', emoji: '🔲', hsk: '2' },
            { chinese: '空间', pinyin: 'kōng jiān', translation: 'пространство', emoji: '🌌', hsk: '3' },
            { chinese: '人间', pinyin: 'rén jiān', translation: 'мир (земной)', emoji: '🌍', hsk: '4' },
            { chinese: '夜间', pinyin: 'yè jiān', translation: 'ночью', emoji: '🌙', hsk: '3' },
            { chinese: '期间', pinyin: 'qī jiān', translation: 'в течение', emoji: '📅', hsk: '3' },
            { chinese: '卫生间', pinyin: 'wèi shēng jiān', translation: 'туалет, ванная', emoji: '🚻', hsk: '2' },
            { chinese: '时间', pinyin: 'shí jiān', translation: 'время', emoji: '⏰', hsk: '1' },
            { chinese: '瞬间', pinyin: 'shùn jiān', translation: 'мгновение', emoji: '⚡', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 房 — ДОМ, КОМНАТА =====
    // ============================================================
    '房': {
        emoji: '🏠',
        meaning: 'дом, комната, строение',
        words: [
            { chinese: '房子', pinyin: 'fáng zi', translation: 'дом', emoji: '🏠', hsk: '1' },
            { chinese: '房间', pinyin: 'fáng jiān', translation: 'комната', emoji: '🛏️', hsk: '2' },
            { chinese: '房东', pinyin: 'fáng dōng', translation: 'арендодатель', emoji: '🔑', hsk: '4' },
            { chinese: '房租', pinyin: 'fáng zū', translation: 'арендная плата', emoji: '💵', hsk: '4' },
            { chinese: '厨房', pinyin: 'chú fáng', translation: 'кухня', emoji: '🍳', hsk: '2' },
            { chinese: '书房', pinyin: 'shū fáng', translation: 'кабинет', emoji: '📚', hsk: '3' },
            { chinese: '病房', pinyin: 'bìng fáng', translation: 'палата (больничная)', emoji: '🏥', hsk: '4' },
            { chinese: '楼房', pinyin: 'lóu fáng', translation: 'многоэтажное здание', emoji: '🏢', hsk: '3' },
            { chinese: '房屋', pinyin: 'fáng wū', translation: 'здание, дом', emoji: '🏠', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 路 — ДОРОГА =====
    // ============================================================
    '路': {
        emoji: '🛣️',
        meaning: 'дорога, путь, маршрут',
        words: [
            { chinese: '马路', pinyin: 'mǎ lù', translation: 'улица, дорога', emoji: '🛣️', hsk: '3' },
            { chinese: '道路', pinyin: 'dào lù', translation: 'дорога', emoji: '🛣️', hsk: '3' },
            { chinese: '路线', pinyin: 'lù xiàn', translation: 'маршрут', emoji: '📍', hsk: '4' },
            { chinese: '路程', pinyin: 'lù chéng', translation: 'расстояние', emoji: '📏', hsk: '4' },
            { chinese: '路口', pinyin: 'lù kǒu', translation: 'перекрёсток', emoji: '🚦', hsk: '4' },
            { chinese: '公路', pinyin: 'gōng lù', translation: 'шоссе', emoji: '🛣️', hsk: '4' },
            { chinese: '铁路', pinyin: 'tiě lù', translation: 'железная дорога', emoji: '🚂', hsk: '4' },
            { chinese: '走路', pinyin: 'zǒu lù', translation: 'ходить пешком', emoji: '🚶', hsk: '2' },
            { chinese: '路过', pinyin: 'lù guò', translation: 'проходить мимо', emoji: '🚶', hsk: '3' },
            { chinese: '路上', pinyin: 'lù shàng', translation: 'на дороге, в пути', emoji: '🛣️', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 钱 — ДЕНЬГИ =====
    // ============================================================
    '钱': {
        emoji: '💰',
        meaning: 'деньги, монета, сумма',
        words: [
            { chinese: '钱', pinyin: 'qián', translation: 'деньги', emoji: '💰', hsk: '1' },
            { chinese: '有钱', pinyin: 'yǒu qián', translation: 'богатый', emoji: '💵', hsk: '3' },
            { chinese: '没钱', pinyin: 'méi qián', translation: 'бедный', emoji: '😔', hsk: '3' },
            { chinese: '花钱', pinyin: 'huā qián', translation: 'тратить деньги', emoji: '💸', hsk: '2' },
            { chinese: '挣钱', pinyin: 'zhèng qián', translation: 'зарабатывать', emoji: '💼', hsk: '3' },
            { chinese: '钱包', pinyin: 'qián bāo', translation: 'кошелёк', emoji: '👛', hsk: '3' },
            { chinese: '学费', pinyin: 'xué fèi', translation: 'плата за обучение', emoji: '📚', hsk: '3' },
            { chinese: '价钱', pinyin: 'jià qián', translation: 'цена', emoji: '🏷️', hsk: '3' },
            { chinese: '赚钱', pinyin: 'zhuàn qián', translation: 'зарабатывать деньги', emoji: '💰', hsk: '3' },
            { chinese: '现金', pinyin: 'xiàn jīn', translation: 'наличные', emoji: '💵', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 习 — ИЗУЧАТЬ, ПРИВЫКАТЬ =====
    // ============================================================
    '习': {
        emoji: '📖',
        meaning: 'изучать, привыкать, практиковать',
        words: [
            { chinese: '学习', pinyin: 'xué xí', translation: 'учиться', emoji: '📖', hsk: '1' },
            { chinese: '习惯', pinyin: 'xí guàn', translation: 'привычка', emoji: '🔄', hsk: '3' },
            { chinese: '练习', pinyin: 'liàn xí', translation: 'упражняться', emoji: '✍️', hsk: '2' },
            { chinese: '复习', pinyin: 'fù xí', translation: 'повторять', emoji: '🔄', hsk: '3' },
            { chinese: '自习', pinyin: 'zì xí', translation: 'самостоятельно заниматься', emoji: '📚', hsk: '4' },
            { chinese: '补习', pinyin: 'bǔ xí', translation: 'брать дополнительные уроки', emoji: '📝', hsk: '5' },
            { chinese: '预习', pinyin: 'yù xí', translation: 'подготовиться к уроку', emoji: '📖', hsk: '4' },
            { chinese: '习惯性', pinyin: 'xí guàn xìng', translation: 'привычный', emoji: '🔄', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== КЛЮЧ: 洗 (МЫТЬ) =====
    // ============================================================
    '洗': {
        emoji: '🧼',
        meaning: 'мыть, стирать, умываться',
        words: [
            { chinese: '洗脸', pinyin: 'xǐ liǎn', translation: 'умываться', emoji: '🧖', hsk: '2' },
            { chinese: '洗手', pinyin: 'xǐ shǒu', translation: 'мыть руки', emoji: '🧴', hsk: '2' },
            { chinese: '洗澡', pinyin: 'xǐ zǎo', translation: 'принимать душ/ванну', emoji: '🚿', hsk: '2' },
            { chinese: '洗衣服', pinyin: 'xǐ yī fu', translation: 'стирать одежду', emoji: '👕', hsk: '3' },
            { chinese: '洗头', pinyin: 'xǐ tóu', translation: 'мыть голову', emoji: '🧴', hsk: '3' },
            { chinese: '洗面奶', pinyin: 'xǐ miàn nǎi', translation: 'очищающее средство для лица', emoji: '🧴', hsk: '5' },
            { chinese: '洗发水', pinyin: 'xǐ fà shuǐ', translation: 'шампунь', emoji: '🧴', hsk: '4' },
            { chinese: '洗洁精', pinyin: 'xǐ jié jīng', translation: 'средство для мытья посуды', emoji: '🧴', hsk: '5' },
            { chinese: '洗衣机', pinyin: 'xǐ yī jī', translation: 'стиральная машина', emoji: '👚', hsk: '3' },
            { chinese: '洗手间', pinyin: 'xǐ shǒu jiān', translation: 'туалет/умывальня', emoji: '🚻', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== КЛЮЧ: 刷 (ЧИСТИТЬ) =====
    // ============================================================
    '刷': {
        emoji: '🪥',
        meaning: 'чистить, щётка, кисть',
        words: [
            { chinese: '刷牙', pinyin: 'shuā yá', translation: 'чистить зубы', emoji: '🪥', hsk: '2' },
            { chinese: '牙刷', pinyin: 'yá shuā', translation: 'зубная щётка', emoji: '🪥', hsk: '2' },
            { chinese: '刷子', pinyin: 'shuā zi', translation: 'щётка', emoji: '🪥', hsk: '3' },
            { chinese: '鞋刷', pinyin: 'xié shuā', translation: 'щётка для обуви', emoji: '👟', hsk: '5' },
            { chinese: '油漆刷', pinyin: 'yóu qī shuā', translation: 'кисть для краски', emoji: '🖌️', hsk: '5' },
            { chinese: '刷新', pinyin: 'shuā xīn', translation: 'обновлять', emoji: '🔄', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== КЛЮЧ: 护 (ЗАЩИЩАТЬ) =====
    // ============================================================
    '护': {
        emoji: '🛡️',
        meaning: 'защищать, ухаживать, заботиться',
        words: [
            { chinese: '护肤', pinyin: 'hù fū', translation: 'уход за кожей', emoji: '🧴', hsk: '4' },
            { chinese: '护肤霜', pinyin: 'hù fū shuāng', translation: 'крем для лица', emoji: '🧴', hsk: '5' },
            { chinese: '防晒霜', pinyin: 'fáng shài shuāng', translation: 'солнцезащитный крем', emoji: '🧴', hsk: '4' },
            { chinese: '护发素', pinyin: 'hù fà sù', translation: 'кондиционер для волос', emoji: '🧴', hsk: '5' },
            { chinese: '护理', pinyin: 'hù lǐ', translation: 'уход', emoji: '💆', hsk: '4' },
            { chinese: '保护', pinyin: 'bǎo hù', translation: 'защищать', emoji: '🛡️', hsk: '3' },
            { chinese: '爱护', pinyin: 'ài hù', translation: 'беречь, заботиться', emoji: '❤️', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== КЛЮЧ: 洗 (МЫТЬ) — ДУБЛИРУЕМ ДЛЯ ВСЕХ СЛОВ =====
    // ============================================================
    // (уже есть выше)

}; // КОНЕЦ WORDS_BY_KEY

// ============================================================
// ===== СОРТИРОВКА И ЭКСПОРТ =====
// ============================================================

// Сортировка ключей по алфавиту
const KEY_NAMES = Object.keys(WORDS_BY_KEY).sort((a, b) => a.localeCompare(b));

// Функция для получения общего количества слов
function getTotalWords() {
    let total = 0;
    for (const key in WORDS_BY_KEY) {
        total += WORDS_BY_KEY[key].words.length;
    }
    return total;
}

console.log(`✅ Загружено ${KEY_NAMES.length} ключей и ${getTotalWords()} слов!`);
