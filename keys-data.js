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
            { chinese: '打人', pinyin: 'dǎ rén', translation: 'бить человека', emoji: '👊', hsk: '3' },
            { chinese: '打架', pinyin: 'dǎ jià', translation: 'драться', emoji: '🥊', hsk: '3' },
            { chinese: '打鼓', pinyin: 'dǎ gǔ', translation: 'бить в барабан', emoji: '🥁', hsk: '4' },
            { chinese: '打鱼', pinyin: 'dǎ yú', translation: 'ловить рыбу', emoji: '🎣', hsk: '4' },
            { chinese: '打猎', pinyin: 'dǎ liè', translation: 'охотиться', emoji: '🏹', hsk: '5' },
            { chinese: '打伞', pinyin: 'dǎ sǎn', translation: 'держать зонт', emoji: '☂️', hsk: '4' },
            { chinese: '打电话', pinyin: 'dǎ diàn huà', translation: 'звонить по телефону', emoji: '📞', hsk: '3' },
            { chinese: '打开', pinyin: 'dǎ kāi', translation: 'открывать', emoji: '🔓', hsk: '3' },
            { chinese: '打印', pinyin: 'dǎ yìn', translation: 'печатать', emoji: '🖨️', hsk: '4' },
            { chinese: '打字', pinyin: 'dǎ zì', translation: 'печатать текст', emoji: '⌨️', hsk: '3' },
            { chinese: '打车', pinyin: 'dǎ chē', translation: 'брать такси', emoji: '🚕', hsk: '3' },
            { chinese: '打牌', pinyin: 'dǎ pái', translation: 'играть в карты', emoji: '🃏', hsk: '4' },
            { chinese: '打球', pinyin: 'dǎ qiú', translation: 'играть в мяч', emoji: '⚽', hsk: '2' },
            { chinese: '打篮球', pinyin: 'dǎ lán qiú', translation: 'играть в баскетбол', emoji: '🏀', hsk: '3' },
            { chinese: '打乒乓球', pinyin: 'dǎ pīng pāng qiú', translation: 'играть в настольный теннис', emoji: '🏓', hsk: '4' },
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
            { chinese: '打开', pinyin: 'dǎ kāi', translation: 'открывать', emoji: '🔓', hsk: '3' },
            { chinese: '开门', pinyin: 'kāi mén', translation: 'открыть дверь', emoji: '🚪', hsk: '2' },
            { chinese: '开窗', pinyin: 'kāi chuāng', translation: 'открыть окно', emoji: '🪟', hsk: '3' },
            { chinese: '开花', pinyin: 'kāi huā', translation: 'цвести', emoji: '🌸', hsk: '3' },
            { chinese: '开始', pinyin: 'kāi shǐ', translation: 'начинать', emoji: '▶️', hsk: '1' },
            { chinese: '开学', pinyin: 'kāi xué', translation: 'начало учебного года', emoji: '📚', hsk: '3' },
            { chinese: '开课', pinyin: 'kāi kè', translation: 'начало занятий', emoji: '📖', hsk: '4' },
            { chinese: '开工', pinyin: 'kāi gōng', translation: 'начать работу', emoji: '🔨', hsk: '4' },
            { chinese: '开车', pinyin: 'kāi chē', translation: 'вести машину', emoji: '🚗', hsk: '2' },
            { chinese: '开飞机', pinyin: 'kāi fēi jī', translation: 'управлять самолётом', emoji: '✈️', hsk: '4' },
            { chinese: '开船', pinyin: 'kāi chuán', translation: 'управлять кораблём', emoji: '⛴️', hsk: '5' },
            { chinese: '开会', pinyin: 'kāi huì', translation: 'проводить собрание', emoji: '📋', hsk: '2' },
            { chinese: '开party', pinyin: 'kāi pà tī', translation: 'устраивать вечеринку', emoji: '🎉', hsk: '4' },
            { chinese: '开音乐会', pinyin: 'kāi yīn yuè huì', translation: 'проводить концерт', emoji: '🎵', hsk: '5' },
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
            { chinese: '关门', pinyin: 'guān mén', translation: 'закрыть дверь', emoji: '🚪', hsk: '2' },
            { chinese: '关窗', pinyin: 'guān chuāng', translation: 'закрыть окно', emoji: '🪟', hsk: '3' },
            { chinese: '关闭', pinyin: 'guān bì', translation: 'закрывать', emoji: '🔐', hsk: '4' },
            { chinese: '关灯', pinyin: 'guān dēng', translation: 'выключить свет', emoji: '💡', hsk: '3' },
            { chinese: '关机', pinyin: 'guān jī', translation: 'выключить (телефон/компьютер)', emoji: '📱', hsk: '3' },
            { chinese: '关电视', pinyin: 'guān diàn shì', translation: 'выключить телевизор', emoji: '📺', hsk: '3' },
            { chinese: '关心', pinyin: 'guān xīn', translation: 'заботиться, интересоваться', emoji: '💗', hsk: '3' },
            { chinese: '关系', pinyin: 'guān xi', translation: 'отношение, связь', emoji: '🔗', hsk: '3' },
            { chinese: '关于', pinyin: 'guān yú', translation: 'о, касательно', emoji: '📌', hsk: '3' },
            { chinese: '关注', pinyin: 'guān zhù', translation: 'обращать внимание, следить', emoji: '👀', hsk: '4' },
            { chinese: '关怀', pinyin: 'guān huái', translation: 'забота, внимание', emoji: '❤️', hsk: '4' },
            { chinese: '关切', pinyin: 'guān qiè', translation: 'беспокоиться, тревожиться', emoji: '😟', hsk: '5' },
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
            { chinese: '细心', pinyin: 'xì xīn', translation: 'внимательный', emoji: '🔍', hsk: '4' },
            { chinese: '耐心', pinyin: 'nài xīn', translation: 'терпение', emoji: '🧘', hsk: '4' },
            { chinese: '伤心', pinyin: 'shāng xīn', translation: 'печальный, расстроенный', emoji: '😢', hsk: '3' },
            { chinese: '担心', pinyin: 'dān xīn', translation: 'беспокоиться, волноваться', emoji: '😟', hsk: '3' },
            { chinese: '放心', pinyin: 'fàng xīn', translation: 'быть спокойным', emoji: '😌', hsk: '3' },
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
            { chinese: '电子', pinyin: 'diàn zǐ', translation: 'электронный', emoji: '💾', hsk: '3' },
            { chinese: '电工', pinyin: 'diàn gōng', translation: 'электрик', emoji: '🔧', hsk: '5' },
            { chinese: '电线', pinyin: 'diàn xiàn', translation: 'провод', emoji: '🔌', hsk: '4' },
            { chinese: '电灯', pinyin: 'diàn dēng', translation: 'электрическая лампа', emoji: '💡', hsk: '3' },
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
        ]
    },

    // ============================================================
    // ===== 日 — СОЛНЦЕ, ДЕНЬ =====
    // ============================================================
    '日': {
        emoji: '☀️',
        meaning: 'солнце, день, Япония',
        words: [
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
            { chinese: '会面', pinyin: 'huì miàn', translation: 'встречаться лично', emoji: '🤝', hsk: '4' },
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
            { chinese: '道士', pinyin: 'dào shì', translation: 'даосский монах', emoji: '🧘', hsk: '5' },
            { chinese: '门道', pinyin: 'mén dào', translation: 'секрет, способ', emoji: '🔑', hsk: '5' },
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
            { chinese: '瞬间', pinyin: 'shùn jiān', translation: 'мгновение', emoji: '⚡', hsk: '5' },
            { chinese: '之间', pinyin: 'zhī jiān', translation: 'между', emoji: '🔗', hsk: '3' },
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
            { chinese: '新房', pinyin: 'xīn fáng', translation: 'новая квартира', emoji: '🏡', hsk: '4' },
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
            { chinese: '价钱', pinyin: 'jià qián', translation: 'цена', emoji: '🏷️', hsk: '3' },
            { chinese: '赚钱', pinyin: 'zhuàn qián', translation: 'зарабатывать деньги', emoji: '💰', hsk: '3' },
            { chinese: '现金', pinyin: 'xiàn jīn', translation: 'наличные', emoji: '💵', hsk: '4' },
            { chinese: '存钱', pinyin: 'cún qián', translation: 'копить деньги', emoji: '🏦', hsk: '4' },
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
    // ===== 洗 — МЫТЬ =====
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
    // ===== 刷 — ЧИСТИТЬ =====
    // ============================================================
    '刷': {
        emoji: '🪥',
        meaning: 'чистить, щётка, кисть',
        words: [
            { chinese: '刷牙', pinyin: 'shuā yá', translation: 'чистить зубы', emoji: '🪥', hsk: '2' },
            { chinese: '牙刷', pinyin: 'yá shuā', translation: 'зубная щётка', emoji: '🪥', hsk: '2' },
            { chinese: '刷子', pinyin: 'shuā zi', translation: 'щётка', emoji: '🪥', hsk: '3' },
            { chinese: '鞋刷', pinyin: 'xié shuā', translation: 'щётка для обуви', emoji: '👟', hsk: '5' },
            { chinese: '刷新', pinyin: 'shuā xīn', translation: 'обновлять', emoji: '🔄', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 点 — ТОЧКА, ЧАС, НЕМНОГО =====
    // ============================================================
    '点': {
        emoji: '📍',
        meaning: 'точка, указывать, немного, час',
        words: [
            { chinese: '一点', pinyin: 'yī diǎn', translation: 'немного', emoji: '🔸', hsk: '1' },
            { chinese: '地点', pinyin: 'dì diǎn', translation: 'место', emoji: '📍', hsk: '3' },
            { chinese: '点心', pinyin: 'diǎn xīn', translation: 'десерт, закуска', emoji: '🍰', hsk: '3' },
            { chinese: '点钟', pinyin: 'diǎn zhōng', translation: 'час (время)', emoji: '🕐', hsk: '1' },
            { chinese: '点头', pinyin: 'diǎn tóu', translation: 'кивать головой', emoji: '🙂', hsk: '3' },
            { chinese: '点击', pinyin: 'diǎn jī', translation: 'кликать (мышкой)', emoji: '🖱️', hsk: '4' },
            { chinese: '点亮', pinyin: 'diǎn liàng', translation: 'зажечь, осветить', emoji: '💡', hsk: '4' },
            { chinese: '优点', pinyin: 'yōu diǎn', translation: 'преимущество, достоинство', emoji: '⭐', hsk: '4' },
            { chinese: '缺点', pinyin: 'quē diǎn', translation: 'недостаток', emoji: '❌', hsk: '4' },
            { chinese: '特点', pinyin: 'tè diǎn', translation: 'особенность, характерная черта', emoji: '🔵', hsk: '3' },
            { chinese: '早点', pinyin: 'zǎo diǎn', translation: 'завтрак / пораньше', emoji: '⏰', hsk: '2' },
            { chinese: '晚点', pinyin: 'wǎn diǎn', translation: 'опаздывать', emoji: '⏳', hsk: '4' },
            { chinese: '点菜', pinyin: 'diǎn cài', translation: 'заказывать еду', emoji: '📋', hsk: '3' },
            { chinese: '点名', pinyin: 'diǎn míng', translation: 'перекличка', emoji: '📢', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 护 — ЗАЩИЩАТЬ =====
    // ============================================================
    '护': {
        emoji: '🛡️',
        meaning: 'защищать, ухаживать, заботиться',
        words: [
            { chinese: '护肤', pinyin: 'hù fū', translation: 'уход за кожей', emoji: '🧴', hsk: '4' },
            { chinese: '防晒霜', pinyin: 'fáng shài shuāng', translation: 'солнцезащитный крем', emoji: '🧴', hsk: '4' },
            { chinese: '护发素', pinyin: 'hù fà sù', translation: 'кондиционер для волос', emoji: '🧴', hsk: '5' },
            { chinese: '护理', pinyin: 'hù lǐ', translation: 'уход', emoji: '💆', hsk: '4' },
            { chinese: '保护', pinyin: 'bǎo hù', translation: 'защищать', emoji: '🛡️', hsk: '3' },
            { chinese: '爱护', pinyin: 'ài hù', translation: 'беречь, заботиться', emoji: '❤️', hsk: '4' },
            { chinese: '护士', pinyin: 'hù shi', translation: 'медсестра', emoji: '👩‍⚕️', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 信 — ПИСЬМО, ВЕРИТЬ =====
    // ============================================================
    '信': {
        emoji: '✉️',
        meaning: 'письмо, верить, доверять, информация',
        words: [
            { chinese: '写信', pinyin: 'xiě xìn', translation: 'писать письмо', emoji: '✉️', hsk: '2' },
            { chinese: '相信', pinyin: 'xiāng xìn', translation: 'верить, доверять', emoji: '🤝', hsk: '3' },
            { chinese: '信心', pinyin: 'xìn xīn', translation: 'уверенность', emoji: '💪', hsk: '3' },
            { chinese: '信用', pinyin: 'xìn yòng', translation: 'кредит, доверие', emoji: '💳', hsk: '4' },
            { chinese: '信息', pinyin: 'xìn xī', translation: 'информация, сообщение', emoji: '📨', hsk: '3' },
            { chinese: '信封', pinyin: 'xìn fēng', translation: 'конверт', emoji: '✉️', hsk: '4' },
            { chinese: '短信', pinyin: 'duǎn xìn', translation: 'SMS, сообщение', emoji: '📱', hsk: '3' },
            { chinese: '微信', pinyin: 'wēi xìn', translation: 'WeChat', emoji: '💬', hsk: '3' },
            { chinese: '信任', pinyin: 'xìn rèn', translation: 'доверять', emoji: '🤝', hsk: '4' },
            { chinese: '信仰', pinyin: 'xìn yǎng', translation: 'вера, убеждение', emoji: '🙏', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 名 — ИМЯ, ИЗВЕСТНЫЙ =====
    // ============================================================
    '名': {
        emoji: '📛',
        meaning: 'имя, известный, знаменитый',
        words: [
            { chinese: '名字', pinyin: 'míng zi', translation: 'имя', emoji: '📛', hsk: '1' },
            { chinese: '有名', pinyin: 'yǒu míng', translation: 'известный, знаменитый', emoji: '⭐', hsk: '3' },
            { chinese: '名片', pinyin: 'míng piàn', translation: 'визитная карточка', emoji: '🪪', hsk: '3' },
            { chinese: '名人', pinyin: 'míng rén', translation: 'знаменитость', emoji: '🌟', hsk: '4' },
            { chinese: '姓名', pinyin: 'xìng míng', translation: 'фамилия и имя', emoji: '📛', hsk: '3' },
            { chinese: '名称', pinyin: 'míng chēng', translation: 'название', emoji: '🏷️', hsk: '4' },
            { chinese: '名次', pinyin: 'míng cì', translation: 'место (в соревновании)', emoji: '🏅', hsk: '5' },
            { chinese: '著名', pinyin: 'zhù míng', translation: 'известный', emoji: '⭐', hsk: '4' },
            { chinese: '命名', pinyin: 'mìng míng', translation: 'называть, давать имя', emoji: '📝', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 意 — МЫСЛЬ, ЗНАЧЕНИЕ =====
    // ============================================================
    '意': {
        emoji: '💭',
        meaning: 'мысль, значение, желание, намерение',
        words: [
            { chinese: '意思', pinyin: 'yì si', translation: 'значение, смысл', emoji: '📖', hsk: '2' },
            { chinese: '意见', pinyin: 'yì jiàn', translation: 'мнение, замечание', emoji: '💬', hsk: '3' },
            { chinese: '注意', pinyin: 'zhù yì', translation: 'обращать внимание', emoji: '⚠️', hsk: '2' },
            { chinese: '同意', pinyin: 'tóng yì', translation: 'соглашаться', emoji: '👍', hsk: '3' },
            { chinese: '意义', pinyin: 'yì yì', translation: 'значение, смысл', emoji: '📌', hsk: '3' },
            { chinese: '愿意', pinyin: 'yuàn yì', translation: 'желать, быть готовым', emoji: '🙋', hsk: '3' },
            { chinese: '意味', pinyin: 'yì wèi', translation: 'означать', emoji: '🔍', hsk: '4' },
            { chinese: '意图', pinyin: 'yì tú', translation: 'намерение, замысел', emoji: '🎯', hsk: '5' },
            { chinese: '意识', pinyin: 'yì shí', translation: 'сознание, осознавать', emoji: '🧠', hsk: '4' },
            { chinese: '意外', pinyin: 'yì wài', translation: 'неожиданность', emoji: '😲', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 情 — ЧУВСТВО, ЭМОЦИЯ =====
    // ============================================================
    '情': {
        emoji: '💕',
        meaning: 'чувство, эмоция, ситуация',
        words: [
            { chinese: '心情', pinyin: 'xīn qíng', translation: 'настроение', emoji: '😊', hsk: '3' },
            { chinese: '感情', pinyin: 'gǎn qíng', translation: 'чувство, эмоция', emoji: '❤️', hsk: '3' },
            { chinese: '爱情', pinyin: 'ài qíng', translation: 'любовь', emoji: '💕', hsk: '3' },
            { chinese: '热情', pinyin: 'rè qíng', translation: 'энтузиазм, страсть', emoji: '🔥', hsk: '4' },
            { chinese: '情况', pinyin: 'qíng kuàng', translation: 'ситуация, обстоятельства', emoji: '📊', hsk: '3' },
            { chinese: '事情', pinyin: 'shì qing', translation: 'дело, вещь', emoji: '📋', hsk: '1' },
            { chinese: '友情', pinyin: 'yǒu qíng', translation: 'дружба', emoji: '🤝', hsk: '4' },
            { chinese: '亲情', pinyin: 'qīn qíng', translation: 'родственная любовь', emoji: '👨‍👩‍👦', hsk: '4' },
            { chinese: '同情', pinyin: 'tóng qíng', translation: 'сочувствие', emoji: '😢', hsk: '4' },
            { chinese: '情绪', pinyin: 'qíng xù', translation: 'эмоции, настроение', emoji: '😄', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 头 — ГОЛОВА, НАЧАЛО =====
    // ============================================================
    '头': {
        emoji: '🧑',
        meaning: 'голова, начало, конец, глава',
        words: [
            { chinese: '头', pinyin: 'tóu', translation: 'голова', emoji: '🧑', hsk: '1' },
            { chinese: '头发', pinyin: 'tóu fa', translation: 'волосы', emoji: '💇', hsk: '2' },
            { chinese: '头脑', pinyin: 'tóu nǎo', translation: 'голова, ум', emoji: '🧠', hsk: '4' },
            { chinese: '开头', pinyin: 'kāi tóu', translation: 'начало', emoji: '▶️', hsk: '3' },
            { chinese: '到头来', pinyin: 'dào tóu lái', translation: 'в конце концов', emoji: '🏁', hsk: '5' },
            { chinese: '头一次', pinyin: 'tóu yī cì', translation: 'впервые', emoji: '1️⃣', hsk: '4' },
            { chinese: '点头', pinyin: 'diǎn tóu', translation: 'кивать головой', emoji: '🙂', hsk: '3' },
            { chinese: '摇头', pinyin: 'yáo tóu', translation: 'качать головой', emoji: '🙃', hsk: '4' },
            { chinese: '头痛', pinyin: 'tóu tòng', translation: 'головная боль', emoji: '🤕', hsk: '4' },
            { chinese: '头等', pinyin: 'tóu děng', translation: 'первый класс', emoji: '1️⃣', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 面 — ЛИЦО, СТОРОНА, ЛАПША =====
    // ============================================================
    '面': {
        emoji: '🍜',
        meaning: 'лицо, сторона, поверхность, лапша',
        words: [
            { chinese: '面包', pinyin: 'miàn bāo', translation: 'хлеб', emoji: '🍞', hsk: '1' },
            { chinese: '面条', pinyin: 'miàn tiáo', translation: 'лапша', emoji: '🍜', hsk: '2' },
            { chinese: '方面', pinyin: 'fāng miàn', translation: 'аспект, сторона', emoji: '📌', hsk: '4' },
            { chinese: '面前', pinyin: 'miàn qián', translation: 'перед (лицом)', emoji: '👀', hsk: '3' },
            { chinese: '面对', pinyin: 'miàn duì', translation: 'сталкиваться с', emoji: '🤝', hsk: '3' },
            { chinese: '表面', pinyin: 'biǎo miàn', translation: 'поверхность', emoji: '📄', hsk: '3' },
            { chinese: '见面', pinyin: 'jiàn miàn', translation: 'встречаться', emoji: '👋', hsk: '2' },
            { chinese: '面子', pinyin: 'miàn zi', translation: 'лицо, репутация', emoji: '😊', hsk: '5' },
            { chinese: '全面', pinyin: 'quán miàn', translation: 'всесторонний', emoji: '🔵', hsk: '4' },
            { chinese: '对面', pinyin: 'duì miàn', translation: 'напротив', emoji: '🔀', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 地 — ЗЕМЛЯ, МЕСТО =====
    // ============================================================
    '地': {
        emoji: '🌍',
        meaning: 'земля, место, территория',
        words: [
            { chinese: '地方', pinyin: 'dì fāng', translation: 'место', emoji: '📍', hsk: '2' },
            { chinese: '地球', pinyin: 'dì qiú', translation: 'Земля (планета)', emoji: '🌍', hsk: '3' },
            { chinese: '地面', pinyin: 'dì miàn', translation: 'поверхность земли', emoji: '🏞️', hsk: '3' },
            { chinese: '地址', pinyin: 'dì zhǐ', translation: 'адрес', emoji: '📬', hsk: '3' },
            { chinese: '大地', pinyin: 'dà dì', translation: 'земля, родина', emoji: '🌾', hsk: '3' },
            { chinese: '土地', pinyin: 'tǔ dì', translation: 'земля, почва', emoji: '🌱', hsk: '3' },
            { chinese: '地点', pinyin: 'dì diǎn', translation: 'место, пункт', emoji: '📍', hsk: '3' },
            { chinese: '地铁', pinyin: 'dì tiě', translation: 'метро', emoji: '🚇', hsk: '2' },
            { chinese: '地下', pinyin: 'dì xià', translation: 'под землёй', emoji: '⬇️', hsk: '3' },
            { chinese: '地图', pinyin: 'dì tú', translation: 'карта', emoji: '🗺️', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 动 — ДВИГАТЬСЯ =====
    // ============================================================
    '动': {
        emoji: '🏃',
        meaning: 'двигаться, действие, двигать',
        words: [
            { chinese: '动', pinyin: 'dòng', translation: 'двигаться', emoji: '🏃', hsk: '2' },
            { chinese: '运动', pinyin: 'yùn dòng', translation: 'спорт, движение', emoji: '⚽', hsk: '2' },
            { chinese: '行动', pinyin: 'xíng dòng', translation: 'действие', emoji: '💪', hsk: '3' },
            { chinese: '动物', pinyin: 'dòng wù', translation: 'животное', emoji: '🐾', hsk: '2' },
            { chinese: '移动', pinyin: 'yí dòng', translation: 'перемещать', emoji: '📱', hsk: '3' },
            { chinese: '活动', pinyin: 'huó dòng', translation: 'мероприятие, активность', emoji: '🎯', hsk: '3' },
            { chinese: '动手', pinyin: 'dòng shǒu', translation: 'начинать делать', emoji: '✋', hsk: '4' },
            { chinese: '动车', pinyin: 'dòng chē', translation: 'скоростной поезд', emoji: '🚄', hsk: '4' },
            { chinese: '感动', pinyin: 'gǎn dòng', translation: 'трогать, растрогать', emoji: '😢', hsk: '4' },
            { chinese: '激动', pinyin: 'jī dòng', translation: 'волноваться', emoji: '😆', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 来 — ПРИХОДИТЬ =====
    // ============================================================
    '来': {
        emoji: '🏃',
        meaning: 'приходить, направляться, будущий',
        words: [
            { chinese: '来', pinyin: 'lái', translation: 'приходить', emoji: '🏃', hsk: '1' },
            { chinese: '来到', pinyin: 'lái dào', translation: 'прибывать', emoji: '📍', hsk: '3' },
            { chinese: '来源', pinyin: 'lái yuán', translation: 'источник, происхождение', emoji: '🌊', hsk: '4' },
            { chinese: '本来', pinyin: 'běn lái', translation: 'изначально, вообще-то', emoji: '📜', hsk: '3' },
            { chinese: '将来', pinyin: 'jiāng lái', translation: 'будущее', emoji: '🔮', hsk: '3' },
            { chinese: '未来', pinyin: 'wèi lái', translation: 'будущее', emoji: '🚀', hsk: '3' },
            { chinese: '来不及', pinyin: 'lái bu jí', translation: 'не успеть', emoji: '⏳', hsk: '3' },
            { chinese: '来得及', pinyin: 'lái de jí', translation: 'успеть', emoji: '⏰', hsk: '3' },
            { chinese: '起来', pinyin: 'qǐ lái', translation: 'вставать, начинать', emoji: '⬆️', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 放 — КЛАСТЬ, ОСВОБОЖДАТЬ =====
    // ============================================================
    '放': {
        emoji: '🖐️',
        meaning: 'класть, освобождать, выпускать, отпускать',
        words: [
            { chinese: '放学', pinyin: 'fàng xué', translation: 'заканчиваться (об уроках)', emoji: '🏫', hsk: '2' },
            { chinese: '放假', pinyin: 'fàng jià', translation: 'быть на каникулах', emoji: '🏖️', hsk: '2' },
            { chinese: '放心', pinyin: 'fàng xīn', translation: 'быть спокойным', emoji: '😌', hsk: '3' },
            { chinese: '放松', pinyin: 'fàng sōng', translation: 'расслабляться', emoji: '🧘', hsk: '4' },
            { chinese: '放弃', pinyin: 'fàng qì', translation: 'сдаваться, отказываться', emoji: '🏳️', hsk: '4' },
            { chinese: '放火', pinyin: 'fàng huǒ', translation: 'поджигать', emoji: '🔥', hsk: '5' },
            { chinese: '播放', pinyin: 'bō fàng', translation: 'транслировать, воспроизводить', emoji: '▶️', hsk: '4' },
            { chinese: '存放', pinyin: 'cún fàng', translation: 'хранить, складывать', emoji: '📦', hsk: '5' },
            { chinese: '解放', pinyin: 'jiě fàng', translation: 'освобождать', emoji: '🕊️', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 生 — РОЖДАТЬ, ЖИЗНЬ =====
    // ============================================================
    '生': {
        emoji: '🌱',
        meaning: 'рождать, жизнь, сырой, учиться',
        words: [
            { chinese: '生活', pinyin: 'shēng huó', translation: 'жизнь, жить', emoji: '🏞️', hsk: '2' },
            { chinese: '学生', pinyin: 'xué shēng', translation: 'ученик', emoji: '🧑‍🎓', hsk: '1' },
            { chinese: '生日', pinyin: 'shēng rì', translation: 'день рождения', emoji: '🎂', hsk: '1' },
            { chinese: '生病', pinyin: 'shēng bìng', translation: 'заболеть', emoji: '🤒', hsk: '2' },
            { chinese: '生产', pinyin: 'shēng chǎn', translation: 'производить, рожать', emoji: '🏭', hsk: '4' },
            { chinese: '生气', pinyin: 'shēng qì', translation: 'злиться, обижаться', emoji: '😡', hsk: '3' },
            { chinese: '发生', pinyin: 'fā shēng', translation: 'происходить, случаться', emoji: '💥', hsk: '3' },
            { chinese: '一生', pinyin: 'yī shēng', translation: 'вся жизнь', emoji: '⏳', hsk: '4' },
            { chinese: '陌生', pinyin: 'mò shēng', translation: 'незнакомый', emoji: '🧐', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 见 — ВИДЕТЬ, ВСТРЕЧАТЬ =====
    // ============================================================
    '见': {
        emoji: '👁️',
        meaning: 'видеть, встречать, мнение',
        words: [
            { chinese: '看见', pinyin: 'kàn jiàn', translation: 'увидеть', emoji: '👀', hsk: '1' },
            { chinese: '见面', pinyin: 'jiàn miàn', translation: 'встречаться', emoji: '👋', hsk: '2' },
            { chinese: '再见', pinyin: 'zài jiàn', translation: 'до свидания', emoji: '👋', hsk: '1' },
            { chinese: '发现', pinyin: 'fā xiàn', translation: 'обнаруживать', emoji: '💡', hsk: '2' },
            { chinese: '意见', pinyin: 'yì jiàn', translation: 'мнение, замечание', emoji: '💬', hsk: '3' },
            { chinese: '见识', pinyin: 'jiàn shi', translation: 'опыт, кругозор', emoji: '🦉', hsk: '5' },
            { chinese: '罕见', pinyin: 'hǎn jiàn', translation: 'редкий', emoji: '💎', hsk: '5' },
            { chinese: '主见', pinyin: 'zhǔ jiàn', translation: 'собственное мнение', emoji: '🧠', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 事 — ДЕЛО, СОБЫТИЕ =====
    // ============================================================
    '事': {
        emoji: '📋',
        meaning: 'дело, событие, работа',
        words: [
            { chinese: '事情', pinyin: 'shì qing', translation: 'дело, вещь', emoji: '📋', hsk: '1' },
            { chinese: '事业', pinyin: 'shì yè', translation: 'карьера, дело', emoji: '💼', hsk: '4' },
            { chinese: '事件', pinyin: 'shì jiàn', translation: 'событие, инцидент', emoji: '📰', hsk: '4' },
            { chinese: '从事', pinyin: 'cóng shì', translation: 'заниматься (чем-л.)', emoji: '🛠️', hsk: '5' },
            { chinese: '没事', pinyin: 'méi shì', translation: 'ничего, всё в порядке', emoji: '👌', hsk: '2' },
            { chinese: '故事', pinyin: 'gù shi', translation: 'история, рассказ', emoji: '📖', hsk: '3' },
            { chinese: '事实', pinyin: 'shì shí', translation: 'факт, действительность', emoji: '💯', hsk: '4' },
            { chinese: '事故', pinyin: 'shì gù', translation: 'авария, несчастный случай', emoji: '🚨', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 好 — ХОРОШИЙ =====
    // ============================================================
    '好': {
        emoji: '👍',
        meaning: 'хороший, хороший друг, любить',
        words: [
            { chinese: '好', pinyin: 'hǎo', translation: 'хороший', emoji: '👍', hsk: '1' },
            { chinese: '好人', pinyin: 'hǎo rén', translation: 'хороший человек', emoji: '😇', hsk: '2' },
            { chinese: '好像', pinyin: 'hǎo xiàng', translation: 'как будто, похоже', emoji: '🤔', hsk: '3' },
            { chinese: '爱好', pinyin: 'ài hào', translation: 'хобби, увлечение', emoji: '🎯', hsk: '3' },
            { chinese: '好奇', pinyin: 'hào qí', translation: 'любопытный', emoji: '🧐', hsk: '4' },
            { chinese: '好看', pinyin: 'hǎo kàn', translation: 'красивый', emoji: '💅', hsk: '2' },
            { chinese: '好吃', pinyin: 'hào chī', translation: 'вкусный', emoji: '😋', hsk: '2' },
            { chinese: '好处', pinyin: 'hǎo chù', translation: 'выгода, польза', emoji: '💎', hsk: '4' },
            { chinese: '最好', pinyin: 'zuì hǎo', translation: 'лучше всего', emoji: '🏆', hsk: '2' },
            { chinese: '友好', pinyin: 'yǒu hǎo', translation: 'дружеский', emoji: '🤝', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 长 — ДЛИННЫЙ, РОСТИ =====
    // ============================================================
    '长': {
        emoji: '📏',
        meaning: 'длинный, расти, начальник',
        words: [
            { chinese: '长', pinyin: 'cháng', translation: 'длинный', emoji: '📏', hsk: '2' },
            { chinese: '长大', pinyin: 'zhǎng dà', translation: 'взрослеть', emoji: '🧒', hsk: '3' },
            { chinese: '长短', pinyin: 'cháng duǎn', translation: 'длина', emoji: '📐', hsk: '4' },
            { chinese: '生长', pinyin: 'shēng zhǎng', translation: 'расти', emoji: '🌱', hsk: '4' },
            { chinese: '校长', pinyin: 'xiào zhǎng', translation: 'директор школы', emoji: '🏫', hsk: '4' },
            { chinese: '长江', pinyin: 'Cháng jiāng', translation: 'река Янцзы', emoji: '🌊', hsk: '4' },
            { chinese: '长途', pinyin: 'cháng tú', translation: 'дальний путь', emoji: '🛣️', hsk: '5' },
            { chinese: '长期', pinyin: 'cháng qī', translation: 'долгосрочный', emoji: '📅', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 冷 — ХОЛОДНЫЙ =====
    // ============================================================
    '冷': {
        emoji: '🥶',
        meaning: 'холодный, холод',
        words: [
            { chinese: '冷', pinyin: 'lěng', translation: 'холодный', emoji: '🥶', hsk: '2' },
            { chinese: '冷水', pinyin: 'lěng shuǐ', translation: 'холодная вода', emoji: '🧊', hsk: '3' },
            { chinese: '冷淡', pinyin: 'lěng dàn', translation: 'равнодушный', emoji: '😐', hsk: '5' },
            { chinese: '冷静', pinyin: 'lěng jìng', translation: 'спокойный, хладнокровный', emoji: '🧘', hsk: '4' },
            { chinese: '寒冷', pinyin: 'hán lěng', translation: 'холодный (о погоде)', emoji: '❄️', hsk: '5' },
            { chinese: '冷门', pinyin: 'lěng mén', translation: 'непопулярный', emoji: '🚪', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 白 — БЕЛЫЙ, ЯСНЫЙ =====
    // ============================================================
    '白': {
        emoji: '⚪',
        meaning: 'белый, ясный, напрасно',
        words: [
            { chinese: '白色', pinyin: 'bái sè', translation: 'белый цвет', emoji: '⚪', hsk: '2' },
            { chinese: '白天', pinyin: 'bái tiān', translation: 'день', emoji: '☀️', hsk: '2' },
            { chinese: '白费', pinyin: 'bái fèi', translation: 'напрасно тратить', emoji: '💸', hsk: '5' },
            { chinese: '明白', pinyin: 'míng bai', translation: 'понятный, понимать', emoji: '💡', hsk: '2' },
            { chinese: '白酒', pinyin: 'bái jiǔ', translation: 'байцзю (китайская водка)', emoji: '🍶', hsk: '5' },
            { chinese: '白云', pinyin: 'bái yún', translation: 'белое облако', emoji: '☁️', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 山 — ГОРА =====
    // ============================================================
    '山': {
        emoji: '⛰️',
        meaning: 'гора, горный',
        words: [
            { chinese: '山', pinyin: 'shān', translation: 'гора', emoji: '⛰️', hsk: '2' },
            { chinese: '大山', pinyin: 'dà shān', translation: 'большая гора', emoji: '🏔️', hsk: '2' },
            { chinese: '山水', pinyin: 'shān shuǐ', translation: 'горы и реки, пейзаж', emoji: '🏞️', hsk: '4' },
            { chinese: '火山', pinyin: 'huǒ shān', translation: 'вулкан', emoji: '🌋', hsk: '4' },
            { chinese: '爬山', pinyin: 'pá shān', translation: 'подниматься в горы', emoji: '🧗', hsk: '4' },
            { chinese: '山林', pinyin: 'shān lín', translation: 'горный лес', emoji: '🌲', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 花 — ЦВЕТОК, ТРАТИТЬ =====
    // ============================================================
    '花': {
        emoji: '🌸',
        meaning: 'цветок, тратить, пёстрый',
        words: [
            { chinese: '花', pinyin: 'huā', translation: 'цветок', emoji: '🌸', hsk: '2' },
            { chinese: '花园', pinyin: 'huā yuán', translation: 'сад', emoji: '🌷', hsk: '3' },
            { chinese: '花钱', pinyin: 'huā qián', translation: 'тратить деньги', emoji: '💸', hsk: '2' },
            { chinese: '开花', pinyin: 'kāi huā', translation: 'цвести', emoji: '🌺', hsk: '3' },
            { chinese: '鲜花', pinyin: 'xiān huā', translation: 'свежие цветы', emoji: '💐', hsk: '4' },
            { chinese: '花生', pinyin: 'huā shēng', translation: 'арахис', emoji: '🥜', hsk: '4' },
            { chinese: '花费', pinyin: 'huā fèi', translation: 'расход, тратить', emoji: '💰', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 光 — СВЕТ =====
    // ============================================================
    '光': {
        emoji: '💡',
        meaning: 'свет, луч, только, голый',
        words: [
            { chinese: '阳光', pinyin: 'yáng guāng', translation: 'солнечный свет', emoji: '☀️', hsk: '3' },
            { chinese: '光明', pinyin: 'guāng míng', translation: 'светлый, блестящий', emoji: '✨', hsk: '4' },
            { chinese: '时光', pinyin: 'shí guāng', translation: 'время, эпоха', emoji: '⏳', hsk: '4' },
            { chinese: '光盘', pinyin: 'guāng pán', translation: 'CD/DVD диск', emoji: '💿', hsk: '4' },
            { chinese: '月光', pinyin: 'yuè guāng', translation: 'лунный свет', emoji: '🌙', hsk: '4' },
            { chinese: '光荣', pinyin: 'guāng róng', translation: 'почётный, славный', emoji: '🏅', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 米 — РИС, МЕТР =====
    // ============================================================
    '米': {
        emoji: '🍚',
        meaning: 'рис, метр',
        words: [
            { chinese: '大米', pinyin: 'dà mǐ', translation: 'рис (крупа)', emoji: '🍚', hsk: '3' },
            { chinese: '玉米', pinyin: 'yù mǐ', translation: 'кукуруза', emoji: '🌽', hsk: '4' },
            { chinese: '厘米', pinyin: 'lí mǐ', translation: 'сантиметр', emoji: '📏', hsk: '4' },
            { chinese: '千米', pinyin: 'qiān mǐ', translation: 'километр', emoji: '🛣️', hsk: '4' },
            { chinese: '米饭', pinyin: 'mǐ fàn', translation: 'варёный рис', emoji: '🍚', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 茶 — ЧАЙ =====
    // ============================================================
    '茶': {
        emoji: '🍵',
        meaning: 'чай',
        words: [
            { chinese: '茶', pinyin: 'chá', translation: 'чай', emoji: '🍵', hsk: '2' },
            { chinese: '茶叶', pinyin: 'chá yè', translation: 'чайные листья', emoji: '🍃', hsk: '4' },
            { chinese: '绿茶', pinyin: 'lǜ chá', translation: 'зелёный чай', emoji: '🍵', hsk: '3' },
            { chinese: '茶馆', pinyin: 'chá guǎn', translation: 'чайная', emoji: '🏮', hsk: '4' },
            { chinese: '奶茶', pinyin: 'nǎi chá', translation: 'молочный чай', emoji: '🧋', hsk: '3' },
            { chinese: '喝茶', pinyin: 'hē chá', translation: 'пить чай', emoji: '🍵', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 酒 — АЛКОГОЛЬ =====
    // ============================================================
    '酒': {
        emoji: '🍷',
        meaning: 'алкоголь, вино, спиртное',
        words: [
            { chinese: '酒', pinyin: 'jiǔ', translation: 'алкоголь', emoji: '🍷', hsk: '3' },
            { chinese: '酒店', pinyin: 'jiǔ diàn', translation: 'гостиница, отель', emoji: '🏨', hsk: '2' },
            { chinese: '白酒', pinyin: 'bái jiǔ', translation: 'байцзю', emoji: '🍶', hsk: '5' },
            { chinese: '啤酒', pinyin: 'pí jiǔ', translation: 'пиво', emoji: '🍺', hsk: '3' },
            { chinese: '葡萄酒', pinyin: 'pú tao jiǔ', translation: 'виноградное вино', emoji: '🍷', hsk: '4' },
            { chinese: '喝酒', pinyin: 'hē jiǔ', translation: 'пить алкоголь', emoji: '🥂', hsk: '3' },
            { chinese: '酒精', pinyin: 'jiǔ jīng', translation: 'спирт, алкоголь', emoji: '🧪', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 拿 — БРАТЬ =====
    // ============================================================
    '拿': {
        emoji: '🤲',
        meaning: 'брать, держать, ловить',
        words: [
            { chinese: '拿', pinyin: 'ná', translation: 'брать, держать', emoji: '🤲', hsk: '2' },
            { chinese: '拿走', pinyin: 'ná zǒu', translation: 'унести, забрать', emoji: '🏃', hsk: '3' },
            { chinese: '拿手', pinyin: 'ná shǒu', translation: 'мастер в чём-л.', emoji: '🏆', hsk: '5' },
            { chinese: '拿到', pinyin: 'ná dào', translation: 'получить, достать', emoji: '✅', hsk: '3' },
            { chinese: '拿主意', pinyin: 'ná zhǔ yi', translation: 'принимать решение', emoji: '💡', hsk: '4' },
            { chinese: '捉拿', pinyin: 'zhuō ná', translation: 'арестовывать', emoji: '👮', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 带 — НЕСТИ, БРАТЬ С СОБОЙ =====
    // ============================================================
    '带': {
        emoji: '🎒',
        meaning: 'нести, брать с собой, вести, пояс',
        words: [
            { chinese: '带', pinyin: 'dài', translation: 'нести, брать с собой', emoji: '🎒', hsk: '2' },
            { chinese: '带来', pinyin: 'dài lái', translation: 'приносить', emoji: '📦', hsk: '3' },
            { chinese: '带走', pinyin: 'dài zǒu', translation: 'уносить', emoji: '🏃', hsk: '3' },
            { chinese: '带领', pinyin: 'dài lǐng', translation: 'вести за собой', emoji: '🧭', hsk: '4' },
            { chinese: '海带', pinyin: 'hǎi dài', translation: 'морская капуста', emoji: '🌿', hsk: '5' },
            { chinese: '皮带', pinyin: 'pí dài', translation: 'кожаный ремень', emoji: '👔', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 穿 — НОСИТЬ ОДЕЖДУ, ПРОХОДИТЬ =====
    // ============================================================
    '穿': {
        emoji: '👕',
        meaning: 'носить (одежду), проходить, пронзать',
        words: [
            { chinese: '穿衣', pinyin: 'chuān yī', translation: 'одеваться', emoji: '👕', hsk: '2' },
            { chinese: '穿越', pinyin: 'chuān yuè', translation: 'пересекать, переходить', emoji: '🚶', hsk: '5' },
            { chinese: '看穿', pinyin: 'kàn chuān', translation: 'разгадать, видеть насквозь', emoji: '🔍', hsk: '6' },
            { chinese: '穿上', pinyin: 'chuān shàng', translation: 'надеть', emoji: '🧥', hsk: '3' },
            { chinese: '穿透', pinyin: 'chuān tòu', translation: 'пронзать', emoji: '🗡️', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 换 — МЕНЯТЬ =====
    // ============================================================
    '换': {
        emoji: '🔄',
        meaning: 'менять, обменивать',
        words: [
            { chinese: '换钱', pinyin: 'huàn qián', translation: 'менять деньги', emoji: '💱', hsk: '3' },
            { chinese: '交换', pinyin: 'jiāo huàn', translation: 'обмен, обмениваться', emoji: '🤝', hsk: '4' },
            { chinese: '换衣服', pinyin: 'huàn yī fu', translation: 'переодеваться', emoji: '👕', hsk: '3' },
            { chinese: '更换', pinyin: 'gēng huàn', translation: 'заменять', emoji: '🔄', hsk: '5' },
            { chinese: '换算', pinyin: 'huàn suàn', translation: 'конвертировать', emoji: '🧮', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 用 — ИСПОЛЬЗОВАТЬ =====
    // ============================================================
    '用': {
        emoji: '🛠️',
        meaning: 'использовать, применение, нужда',
        words: [
            { chinese: '使用', pinyin: 'shǐ yòng', translation: 'использовать', emoji: '🛠️', hsk: '3' },
            { chinese: '用处', pinyin: 'yòng chù', translation: 'применение, польза', emoji: '💡', hsk: '4' },
            { chinese: '用户', pinyin: 'yòng hù', translation: 'пользователь', emoji: '👤', hsk: '4' },
            { chinese: '有用', pinyin: 'yǒu yòng', translation: 'полезный', emoji: '✅', hsk: '3' },
            { chinese: '不用', pinyin: 'bù yòng', translation: 'не нужно', emoji: '❌', hsk: '2' },
            { chinese: '应用', pinyin: 'yìng yòng', translation: 'применение, приложение', emoji: '📱', hsk: '4' },
            { chinese: '费用', pinyin: 'fèi yòng', translation: 'расход, плата', emoji: '💰', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 门 — ДВЕРЬ =====
    // ============================================================
    '门': {
        emoji: '🚪',
        meaning: 'дверь, ворота, отрасль',
        words: [
            { chinese: '开门', pinyin: 'kāi mén', translation: 'открыть дверь', emoji: '🚪', hsk: '2' },
            { chinese: '关门', pinyin: 'guān mén', translation: 'закрыть дверь', emoji: '🚪', hsk: '2' },
            { chinese: '部门', pinyin: 'bù mén', translation: 'отдел, департамент', emoji: '🏢', hsk: '4' },
            { chinese: '专门', pinyin: 'zhuān mén', translation: 'специально', emoji: '🎯', hsk: '4' },
            { chinese: '热门', pinyin: 'rè mén', translation: 'популярный, ходовой', emoji: '🔥', hsk: '5' },
            { chinese: '门口', pinyin: 'mén kǒu', translation: 'у двери, у входа', emoji: '🚪', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 里 — ВНУТРИ =====
    // ============================================================
    '里': {
        emoji: '🔲',
        meaning: 'внутри, внутренность, ли (мера длины)',
        words: [
            { chinese: '里面', pinyin: 'lǐ miàn', translation: 'внутри', emoji: '🔲', hsk: '1' },
            { chinese: '心里', pinyin: 'xīn lǐ', translation: 'в душе', emoji: '💭', hsk: '3' },
            { chinese: '家里', pinyin: 'jiā lǐ', translation: 'дома, в доме', emoji: '🏠', hsk: '2' },
            { chinese: '这里', pinyin: 'zhè lǐ', translation: 'здесь', emoji: '📍', hsk: '1' },
            { chinese: '那里', pinyin: 'nà lǐ', translation: 'там', emoji: '📍', hsk: '1' },
            { chinese: '公里', pinyin: 'gōng lǐ', translation: 'километр', emoji: '🛣️', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 前 — ПЕРЕД, ДО =====
    // ============================================================
    '前': {
        emoji: '🔜',
        meaning: 'перед, впереди, прошлый, до',
        words: [
            { chinese: '前面', pinyin: 'qián miàn', translation: 'впереди, перед', emoji: '🔜', hsk: '2' },
            { chinese: '以前', pinyin: 'yǐ qián', translation: 'раньше, до', emoji: '⏪', hsk: '2' },
            { chinese: '之前', pinyin: 'zhī qián', translation: 'перед, до', emoji: '⏪', hsk: '3' },
            { chinese: '前进', pinyin: 'qián jìn', translation: 'продвигаться вперёд', emoji: '🚀', hsk: '4' },
            { chinese: '前提', pinyin: 'qián tí', translation: 'предпосылка, условие', emoji: '📌', hsk: '5' },
            { chinese: '眼前', pinyin: 'yǎn qián', translation: 'перед глазами', emoji: '👁️', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 后 — ПОТОМ, ЗАДНИЙ =====
    // ============================================================
    '后': {
        emoji: '🔙',
        meaning: 'после, задний, потом',
        words: [
            { chinese: '后面', pinyin: 'hòu miàn', translation: 'сзади, позади', emoji: '🔙', hsk: '2' },
            { chinese: '以后', pinyin: 'yǐ hòu', translation: 'после, потом', emoji: '⏩', hsk: '2' },
            { chinese: '后来', pinyin: 'hòu lái', translation: 'потом, позже', emoji: '⏩', hsk: '2' },
            { chinese: '后悔', pinyin: 'hòu huǐ', translation: 'сожалеть', emoji: '😔', hsk: '4' },
            { chinese: '后果', pinyin: 'hòu guǒ', translation: 'последствия', emoji: '⚠️', hsk: '5' },
            { chinese: '皇后', pinyin: 'huáng hòu', translation: 'императрица', emoji: '👸', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 男 — МУЖЧИНА =====
    // ============================================================
    '男': {
        emoji: '👨',
        meaning: 'мужчина, мужской',
        words: [
            { chinese: '男人', pinyin: 'nán rén', translation: 'мужчина', emoji: '👨', hsk: '2' },
            { chinese: '男孩', pinyin: 'nán hái', translation: 'мальчик', emoji: '👦', hsk: '2' },
            { chinese: '男生', pinyin: 'nán shēng', translation: 'студент/школьник (парень)', emoji: '🧑‍🎓', hsk: '2' },
            { chinese: '男性', pinyin: 'nán xìng', translation: 'мужской пол', emoji: '♂️', hsk: '4' },
            { chinese: '男朋友', pinyin: 'nán péng you', translation: 'парень, бойфренд', emoji: '💑', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 父 — ОТЕЦ =====
    // ============================================================
    '父': {
        emoji: '👨',
        meaning: 'отец, родитель',
        words: [
            { chinese: '父亲', pinyin: 'fù qīn', translation: 'отец', emoji: '👨', hsk: '3' },
            { chinese: '父母', pinyin: 'fù mǔ', translation: 'родители', emoji: '👨‍👩‍👧', hsk: '3' },
            { chinese: '父子', pinyin: 'fù zǐ', translation: 'отец и сын', emoji: '👨‍👦', hsk: '5' },
            { chinese: '祖父', pinyin: 'zǔ fù', translation: 'дедушка (по отцу)', emoji: '👴', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 冰 — ЛЁД, ХОЛОД =====
    // ============================================================
    '冰': {
        emoji: '🧊',
        meaning: 'лёд, холодный, замораживать',
        words: [
            { chinese: '冰箱', pinyin: 'bīng xiāng', translation: 'холодильник', emoji: '🧊', hsk: '3' },
            { chinese: '冰块', pinyin: 'bīng kuài', translation: 'кубик льда', emoji: '🧊', hsk: '4' },
            { chinese: '冰淇淋', pinyin: 'bīng qí lín', translation: 'мороженое', emoji: '🍦', hsk: '3' },
            { chinese: '结冰', pinyin: 'jié bīng', translation: 'замерзать', emoji: '❄️', hsk: '5' },
            { chinese: '冰冷', pinyin: 'bīng lěng', translation: 'ледяной', emoji: '🥶', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 走 — ХОДИТЬ, УХОДИТЬ =====
    // ============================================================
    '走': {
        emoji: '🚶',
        meaning: 'ходить, уходить, идти пешком',
        words: [
            { chinese: '走路', pinyin: 'zǒu lù', translation: 'ходить пешком', emoji: '🚶', hsk: '2' },
            { chinese: '走开', pinyin: 'zǒu kāi', translation: 'уйти', emoji: '🚶', hsk: '3' },
            { chinese: '走廊', pinyin: 'zǒu láng', translation: 'коридор', emoji: '🚪', hsk: '4' },
            { chinese: '行走', pinyin: 'xíng zǒu', translation: 'ходить, передвигаться', emoji: '🚶', hsk: '5' },
            { chinese: '走私', pinyin: 'zǒu sī', translation: 'контрабанда', emoji: '🚢', hsk: '6' },
            { chinese: '走运', pinyin: 'zǒu yùn', translation: 'повезло', emoji: '🍀', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 去 — УХОДИТЬ, ЕХАТЬ =====
    // ============================================================
    '去': {
        emoji: '🏃',
        meaning: 'уходить, ехать, прошлый',
        words: [
            { chinese: '去', pinyin: 'qù', translation: 'идти, ехать', emoji: '🏃', hsk: '1' },
            { chinese: '去年', pinyin: 'qù nián', translation: 'в прошлом году', emoji: '📅', hsk: '2' },
            { chinese: '出去', pinyin: 'chū qù', translation: 'выйти', emoji: '🚪', hsk: '2' },
            { chinese: '进去', pinyin: 'jìn qù', translation: 'войти', emoji: '🚪', hsk: '2' },
            { chinese: '过去', pinyin: 'guò qù', translation: 'прошлое, проходить', emoji: '⏪', hsk: '2' },
            { chinese: '回去', pinyin: 'huí qù', translation: 'вернуться (туда)', emoji: '🏠', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 回 — ВОЗВРАЩАТЬСЯ =====
    // ============================================================
    '回': {
        emoji: '🔙',
        meaning: 'возвращаться, раз (счёт действий)',
        words: [
            { chinese: '回家', pinyin: 'huí jiā', translation: 'возвращаться домой', emoji: '🏡', hsk: '2' },
            { chinese: '回答', pinyin: 'huí dá', translation: 'отвечать', emoji: '💬', hsk: '2' },
            { chinese: '回来', pinyin: 'huí lái', translation: 'вернуться (сюда)', emoji: '🔙', hsk: '2' },
            { chinese: '回去', pinyin: 'huí qù', translation: 'вернуться (туда)', emoji: '🏠', hsk: '2' },
            { chinese: '回头', pinyin: 'huí tóu', translation: 'оглянуться, позже', emoji: '🔙', hsk: '4' },
            { chinese: '一回', pinyin: 'yī huí', translation: 'один раз', emoji: '1️⃣', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 给 — ДАВАТЬ =====
    // ============================================================
    '给': {
        emoji: '🎁',
        meaning: 'давать, для, передать',
        words: [
            { chinese: '给', pinyin: 'gěi', translation: 'давать, для', emoji: '🎁', hsk: '1' },
            { chinese: '交给', pinyin: 'jiāo gěi', translation: 'передать, вручить', emoji: '🤝', hsk: '4' },
            { chinese: '送给', pinyin: 'sòng gěi', translation: 'дарить', emoji: '🎁', hsk: '3' },
            { chinese: '发给', pinyin: 'fā gěi', translation: 'выдавать, рассылать', emoji: '📨', hsk: '4' },
            { chinese: '给予', pinyin: 'jǐ yǔ', translation: 'предоставлять, давать', emoji: '🤲', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 让 — ПОЗВОЛЯТЬ, ПРОСИТЬ =====
    // ============================================================
    '让': {
        emoji: '🙏',
        meaning: 'позволять, просить, уступать',
        words: [
            { chinese: '让', pinyin: 'ràng', translation: 'позволять, пусть', emoji: '🙏', hsk: '2' },
            { chinese: '让开', pinyin: 'ràng kāi', translation: 'отойти, пропустить', emoji: '🚶', hsk: '4' },
            { chinese: '转让', pinyin: 'zhuǎn ràng', translation: 'передавать, уступать', emoji: '🔄', hsk: '5' },
            { chinese: '忍让', pinyin: 'rěn ràng', translation: 'уступать, терпеть', emoji: '🧘', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 把 — БА (конструкция) =====
    // ============================================================
    '把': {
        emoji: '🤲',
        meaning: 'частица 把, ручка, держать',
        words: [
            { chinese: '把', pinyin: 'bǎ', translation: 'частица 把', emoji: '🤲', hsk: '2' },
            { chinese: '把手', pinyin: 'bǎ shǒu', translation: 'ручка, рукоятка', emoji: '🚪', hsk: '4' },
            { chinese: '把握', pinyin: 'bǎ wò', translation: 'уверенность, держать', emoji: '💪', hsk: '5' },
            { chinese: '把守', pinyin: 'bǎ shǒu', translation: 'охранять', emoji: '🛡️', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 被 — БЫТЬ (пассив) =====
    // ============================================================
    '被': {
        emoji: '🛌',
        meaning: 'быть (пассив), одеяло',
        words: [
            { chinese: '被', pinyin: 'bèi', translation: 'быть (пассивный залог)', emoji: '🛌', hsk: '3' },
            { chinese: '被动', pinyin: 'bèi dòng', translation: 'пассивный', emoji: '🧘', hsk: '5' },
            { chinese: '被告', pinyin: 'bèi gào', translation: 'подсудимый', emoji: '⚖️', hsk: '6' },
            { chinese: '被子', pinyin: 'bèi zi', translation: 'одеяло', emoji: '🛌', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 得 — ПОЛУЧАТЬ, -О =====
    // ============================================================
    '得': {
        emoji: '✅',
        meaning: 'получать, суффикс -о, должен',
        words: [
            { chinese: '得到', pinyin: 'dé dào', translation: 'получать', emoji: '✅', hsk: '3' },
            { chinese: '觉得', pinyin: 'jué de', translation: 'считать, думать', emoji: '💭', hsk: '1' },
            { chinese: '记得', pinyin: 'jì de', translation: 'помнить', emoji: '🧠', hsk: '2' },
            { chinese: '懂得', pinyin: 'dǒng de', translation: 'понимать', emoji: '💡', hsk: '3' },
            { chinese: '值得', pinyin: 'zhí dé', translation: 'стоить (того)', emoji: '💎', hsk: '4' },
            { chinese: '获得', pinyin: 'huò dé', translation: 'получать, обретать', emoji: '🏆', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 着 — -ЕТ (процесс) =====
    // ============================================================
    '着': {
        emoji: '🔄',
        meaning: 'суффикс -ет (процесс), касаться',
        words: [
            { chinese: '看着', pinyin: 'kàn zhe', translation: 'смотреть (в процессе)', emoji: '👀', hsk: '2' },
            { chinese: '听着', pinyin: 'tīng zhe', translation: 'слушать (в процессе)', emoji: '👂', hsk: '3' },
            { chinese: '着急', pinyin: 'zháo jí', translation: 'волноваться, спешить', emoji: '😰', hsk: '3' },
            { chinese: '睡着', pinyin: 'shuì zháo', translation: 'засыпать', emoji: '😴', hsk: '4' },
            { chinese: '着凉', pinyin: 'zháo liáng', translation: 'простудиться', emoji: '🤧', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 机 — МАШИНА, МЕХАНИЗМ =====
    // ============================================================
    '机': {
        emoji: '⚙️',
        meaning: 'машина, механизм, шанс',
        words: [
            { chinese: '手机', pinyin: 'shǒu jī', translation: 'мобильный телефон', emoji: '📱', hsk: '1' },
            { chinese: '飞机', pinyin: 'fēi jī', translation: 'самолёт', emoji: '✈️', hsk: '2' },
            { chinese: '电脑', pinyin: 'diàn nǎo', translation: 'компьютер', emoji: '💻', hsk: '2' },
            { chinese: '机会', pinyin: 'jī huì', translation: 'шанс, возможность', emoji: '🎯', hsk: '3' },
            { chinese: '司机', pinyin: 'sī jī', translation: 'водитель', emoji: '🚗', hsk: '2' },
            { chinese: '机器', pinyin: 'jī qì', translation: 'машина, механизм', emoji: '⚙️', hsk: '4' },
            { chinese: '洗衣机', pinyin: 'xǐ yī jī', translation: 'стиральная машина', emoji: '👚', hsk: '3' },
            { chinese: '相机', pinyin: 'xiàng jī', translation: 'фотоаппарат', emoji: '📷', hsk: '3' },
            { chinese: '录音机', pinyin: 'lù yīn jī', translation: 'магнитофон', emoji: '📼', hsk: '4' },
            { chinese: '计算机', pinyin: 'jì suàn jī', translation: 'компьютер', emoji: '🖥️', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 玩 — ИГРАТЬ, РАЗВЛЕКАТЬСЯ =====
    // ============================================================
    '玩': {
        emoji: '🎮',
        meaning: 'играть, развлекаться, забавляться',
        words: [
            { chinese: '玩', pinyin: 'wán', translation: 'играть, развлекаться', emoji: '🎮', hsk: '2' },
            { chinese: '玩具', pinyin: 'wán jù', translation: 'игрушка', emoji: '🧸', hsk: '3' },
            { chinese: '好玩', pinyin: 'hǎo wán', translation: 'интересный, забавный', emoji: '😄', hsk: '2' },
            { chinese: '玩手机', pinyin: 'wán shǒu jī', translation: 'играть в телефон', emoji: '📱', hsk: '3' },
            { chinese: '玩耍', pinyin: 'wán shuǎ', translation: 'играть, резвиться', emoji: '🤸', hsk: '5' },
            { chinese: '玩笑', pinyin: 'wán xiào', translation: 'шутка', emoji: '😂', hsk: '3' },
            { chinese: '玩游戏', pinyin: 'wán yóu xì', translation: 'играть в игру', emoji: '🎮', hsk: '3' },
            { chinese: '玩火', pinyin: 'wán huǒ', translation: 'играть с огнём', emoji: '🔥', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 站 — СТОЯТЬ, ВОКЗАЛ =====
    // ============================================================
    '站': {
        emoji: '🚉',
        meaning: 'стоять, вокзал, станция',
        words: [
            { chinese: '站', pinyin: 'zhàn', translation: 'стоять', emoji: '🧍', hsk: '2' },
            { chinese: '车站', pinyin: 'chē zhàn', translation: 'вокзал, станция', emoji: '🚉', hsk: '3' },
            { chinese: '地铁站', pinyin: 'dì tiě zhàn', translation: 'станция метро', emoji: '🚇', hsk: '3' },
            { chinese: '火车站', pinyin: 'huǒ chē zhàn', translation: 'железнодорожный вокзал', emoji: '🚂', hsk: '3' },
            { chinese: '站起来', pinyin: 'zhàn qǐ lái', translation: 'встать', emoji: '⬆️', hsk: '3' },
            { chinese: '站长', pinyin: 'zhàn zhǎng', translation: 'начальник станции', emoji: '🧑‍💼', hsk: '5' },
            { chinese: '加油站', pinyin: 'jiā yóu zhàn', translation: 'заправочная станция', emoji: '⛽', hsk: '4' },
            { chinese: '服务站', pinyin: 'fú wù zhàn', translation: 'сервисный центр', emoji: '🛠️', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 喝 — ПИТЬ =====
    // ============================================================
    '喝': {
        emoji: '🥤',
        meaning: 'пить, выпивать',
        words: [
            { chinese: '喝', pinyin: 'hē', translation: 'пить', emoji: '🥤', hsk: '1' },
            { chinese: '喝茶', pinyin: 'hē chá', translation: 'пить чай', emoji: '🍵', hsk: '2' },
            { chinese: '喝水', pinyin: 'hē shuǐ', translation: 'пить воду', emoji: '💧', hsk: '2' },
            { chinese: '喝咖啡', pinyin: 'hē kā fēi', translation: 'пить кофе', emoji: '☕', hsk: '2' },
            { chinese: '喝酒', pinyin: 'hē jiǔ', translation: 'пить алкоголь', emoji: '🍷', hsk: '3' },
            { chinese: '喝汤', pinyin: 'hē tāng', translation: 'пить суп', emoji: '🍜', hsk: '3' },
            { chinese: '喝醉', pinyin: 'hē zuì', translation: 'напиться, быть пьяным', emoji: '🥴', hsk: '4' },
            { chinese: '喝彩', pinyin: 'hè cǎi', translation: 'аплодировать, одобрять', emoji: '👏', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 写 — ПИСАТЬ =====
    // ============================================================
    '写': {
        emoji: '✍️',
        meaning: 'писать, записывать',
        words: [
            { chinese: '写', pinyin: 'xiě', translation: 'писать', emoji: '✍️', hsk: '1' },
            { chinese: '写字', pinyin: 'xiě zì', translation: 'писать иероглифы', emoji: '🖊️', hsk: '2' },
            { chinese: '写信', pinyin: 'xiě xìn', translation: 'писать письмо', emoji: '✉️', hsk: '2' },
            { chinese: '写作', pinyin: 'xiě zuò', translation: 'писать, сочинять', emoji: '📝', hsk: '4' },
            { chinese: '写作业', pinyin: 'xiě zuò yè', translation: 'делать письменное задание', emoji: '📚', hsk: '2' },
            { chinese: '写日记', pinyin: 'xiě rì jì', translation: 'вести дневник', emoji: '📓', hsk: '3' },
            { chinese: '写生', pinyin: 'xiě shēng', translation: 'рисовать с натуры', emoji: '🎨', hsk: '6' },
            { chinese: '写书', pinyin: 'xiě shū', translation: 'писать книгу', emoji: '📖', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 读 — ЧИТАТЬ =====
    // ============================================================
    '读': {
        emoji: '📖',
        meaning: 'читать, учиться, читать вслух',
        words: [
            { chinese: '读书', pinyin: 'dú shū', translation: 'читать книгу, учиться', emoji: '📚', hsk: '1' },
            { chinese: '读', pinyin: 'dú', translation: 'читать', emoji: '📖', hsk: '2' },
            { chinese: '朗读', pinyin: 'lǎng dú', translation: 'читать вслух', emoji: '🗣️', hsk: '5' },
            { chinese: '阅读', pinyin: 'yuè dú', translation: 'чтение, читать', emoji: '📖', hsk: '4' },
            { chinese: '读物', pinyin: 'dú wù', translation: 'книга, литература', emoji: '📚', hsk: '5' },
            { chinese: '读书人', pinyin: 'dú shū rén', translation: 'интеллигентный человек', emoji: '🧑‍🎓', hsk: '6' },
            { chinese: '读者', pinyin: 'dú zhě', translation: 'читатель', emoji: '👤', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 视 — СМОТРЕТЬ, ВИДЕТЬ =====
    // ============================================================
    '视': {
        emoji: '👁️',
        meaning: 'смотреть, видеть, рассматривать',
        words: [
            { chinese: '电视', pinyin: 'diàn shì', translation: 'телевизор', emoji: '📺', hsk: '1' },
            { chinese: '视力', pinyin: 'shì lì', translation: 'зрение', emoji: '👀', hsk: '4' },
            { chinese: '视觉', pinyin: 'shì jué', translation: 'зрительное восприятие', emoji: '👁️', hsk: '5' },
            { chinese: '视线', pinyin: 'shì xiàn', translation: 'линия взгляда', emoji: '👀', hsk: '5' },
            { chinese: '视野', pinyin: 'shì yě', translation: 'кругозор, поле зрения', emoji: '🌅', hsk: '5' },
            { chinese: '忽视', pinyin: 'hū shì', translation: 'игнорировать', emoji: '🙈', hsk: '5' },
            { chinese: '重视', pinyin: 'zhòng shì', translation: 'придавать значение', emoji: '⭐', hsk: '4' },
            { chinese: '监视', pinyin: 'jiān shì', translation: 'следить, наблюдать', emoji: '👁️', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 发 — ПОСЫЛАТЬ, ВЫПУСКАТЬ =====
    // ============================================================
    '发': {
        emoji: '📨',
        meaning: 'посылать, выпускать, проявлять',
        words: [
            { chinese: '发现', pinyin: 'fā xiàn', translation: 'обнаруживать', emoji: '💡', hsk: '2' },
            { chinese: '发生', pinyin: 'fā shēng', translation: 'происходить', emoji: '💥', hsk: '3' },
            { chinese: '发展', pinyin: 'fā zhǎn', translation: 'развиваться', emoji: '📈', hsk: '3' },
            { chinese: '发送', pinyin: 'fā sòng', translation: 'отправлять', emoji: '📤', hsk: '4' },
            { chinese: '发音', pinyin: 'fā yīn', translation: 'произношение', emoji: '🔊', hsk: '3' },
            { chinese: '发票', pinyin: 'fā piào', translation: 'чек, квитанция', emoji: '🧾', hsk: '4' },
            { chinese: '发财', pinyin: 'fā cái', translation: 'разбогатеть', emoji: '💰', hsk: '4' },
            { chinese: '发火', pinyin: 'fā huǒ', translation: 'злиться, сердиться', emoji: '😡', hsk: '4' },
            { chinese: '发抖', pinyin: 'fā dǒu', translation: 'дрожать', emoji: '🥶', hsk: '5' },
            { chinese: '发明', pinyin: 'fā míng', translation: 'изобретать', emoji: '💡', hsk: '4' },
            { chinese: '出发', pinyin: 'chū fā', translation: 'отправляться', emoji: '🚀', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 收 — ПОЛУЧАТЬ, СОБИРАТЬ =====
    // ============================================================
    '收': {
        emoji: '📥',
        meaning: 'получать, собирать, убирать',
        words: [
            { chinese: '收到', pinyin: 'shōu dào', translation: 'получить', emoji: '📥', hsk: '3' },
            { chinese: '收入', pinyin: 'shōu rù', translation: 'доход', emoji: '💰', hsk: '4' },
            { chinese: '收拾', pinyin: 'shōu shi', translation: 'убирать, приводить в порядок', emoji: '🧹', hsk: '4' },
            { chinese: '收费', pinyin: 'shōu fèi', translation: 'взимать плату', emoji: '💲', hsk: '4' },
            { chinese: '收件人', pinyin: 'shōu jiàn rén', translation: 'получатель', emoji: '👤', hsk: '5' },
            { chinese: '收藏', pinyin: 'shōu cáng', translation: 'коллекционировать', emoji: '🏺', hsk: '5' },
            { chinese: '收获', pinyin: 'shōu huò', translation: 'урожай, результат', emoji: '🌾', hsk: '5' },
            { chinese: '收钱', pinyin: 'shōu qián', translation: 'получать деньги', emoji: '💵', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 送 — ДАРИТЬ, ПРОВОЖАТЬ =====
    // ============================================================
    '送': {
        emoji: '🎁',
        meaning: 'дарить, провожать, отправлять',
        words: [
            { chinese: '送', pinyin: 'sòng', translation: 'дарить, провожать', emoji: '🎁', hsk: '2' },
            { chinese: '送礼物', pinyin: 'sòng lǐ wù', translation: 'дарить подарок', emoji: '🎁', hsk: '3' },
            { chinese: '送行', pinyin: 'sòng xíng', translation: 'провожать в дорогу', emoji: '👋', hsk: '5' },
            { chinese: '传送', pinyin: 'chuán sòng', translation: 'передавать, пересылать', emoji: '📤', hsk: '5' },
            { chinese: '发送', pinyin: 'fā sòng', translation: 'отправлять', emoji: '📤', hsk: '4' },
            { chinese: '赠送', pinyin: 'zèng sòng', translation: 'преподносить в подарок', emoji: '🎁', hsk: '5' },
            { chinese: '送别', pinyin: 'sòng bié', translation: 'прощаться, провожать', emoji: '👋', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 坐 — СИДЕТЬ =====
    // ============================================================
    '坐': {
        emoji: '🪑',
        meaning: 'сидеть, садиться, ехать (на транспорте)',
        words: [
            { chinese: '坐', pinyin: 'zuò', translation: 'сидеть', emoji: '🪑', hsk: '2' },
            { chinese: '坐下', pinyin: 'zuò xià', translation: 'садиться', emoji: '🪑', hsk: '2' },
            { chinese: '坐车', pinyin: 'zuò chē', translation: 'ехать на машине/автобусе', emoji: '🚗', hsk: '3' },
            { chinese: '坐飞机', pinyin: 'zuò fēi jī', translation: 'лететь на самолёте', emoji: '✈️', hsk: '3' },
            { chinese: '坐地铁', pinyin: 'zuò dì tiě', translation: 'ехать на метро', emoji: '🚇', hsk: '3' },
            { chinese: '坐火车', pinyin: 'zuò huǒ chē', translation: 'ехать на поезде', emoji: '🚂', hsk: '3' },
            { chinese: '坐船', pinyin: 'zuò chuán', translation: 'плыть на корабле', emoji: '⛴️', hsk: '4' },
            { chinese: '座位', pinyin: 'zuò wèi', translation: 'место (сидячее)', emoji: '💺', hsk: '3' },
            { chinese: '坐月', pinyin: 'zuò yuè', translation: 'послеродовой период', emoji: '👶', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 行 — ИДТИ, ХОДИТЬ, РЯД =====
    // ============================================================
    '行': {
        emoji: '🚶',
        meaning: 'идти, ходить, ряд, строка',
        words: [
            { chinese: '不行', pinyin: 'bù xíng', translation: 'нельзя, не получается', emoji: '❌', hsk: '2' },
            { chinese: '银行', pinyin: 'yín háng', translation: 'банк', emoji: '🏦', hsk: '2' },
            { chinese: '行动', pinyin: 'xíng dòng', translation: 'действие', emoji: '💪', hsk: '3' },
            { chinese: '行李', pinyin: 'xíng li', translation: 'багаж', emoji: '🧳', hsk: '3' },
            { chinese: '行业', pinyin: 'háng yè', translation: 'отрасль, профессия', emoji: '🏢', hsk: '4' },
            { chinese: '行人', pinyin: 'xíng rén', translation: 'пешеход', emoji: '🚶', hsk: '4' },
            { chinese: '自行车', pinyin: 'zì xíng chē', translation: 'велосипед', emoji: '🚲', hsk: '2' },
            { chinese: '进行', pinyin: 'jìn xíng', translation: 'проводить, вести', emoji: '🔄', hsk: '3' },
            { chinese: '旅行', pinyin: 'lǚ xíng', translation: 'путешествовать', emoji: '✈️', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 飞 — ЛЕТАТЬ =====
    // ============================================================
    '飞': {
        emoji: '✈️',
        meaning: 'летать, лететь, быстро',
        words: [
            { chinese: '飞机', pinyin: 'fēi jī', translation: 'самолёт', emoji: '✈️', hsk: '2' },
            { chinese: '飞', pinyin: 'fēi', translation: 'лететь', emoji: '✈️', hsk: '3' },
            { chinese: '飞行', pinyin: 'fēi xíng', translation: 'полёт, летать', emoji: '✈️', hsk: '4' },
            { chinese: '飞车', pinyin: 'fēi chē', translation: 'быстрая езда', emoji: '🏎️', hsk: '5' },
            { chinese: '飞船', pinyin: 'fēi chuán', translation: 'космический корабль', emoji: '🚀', hsk: '5' },
            { chinese: '飞快', pinyin: 'fēi kuài', translation: 'очень быстрый', emoji: '⚡', hsk: '5' },
            { chinese: '飞翔', pinyin: 'fēi xiáng', translation: 'парить, летать', emoji: '🕊️', hsk: '5' },
            { chinese: '飞机场', pinyin: 'fēi jī chǎng', translation: 'аэропорт', emoji: '🛫', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 校 — ШКОЛА =====
    // ============================================================
    '校': {
        emoji: '🏫',
        meaning: 'школа, учебное заведение, проверять',
        words: [
            { chinese: '学校', pinyin: 'xué xiào', translation: 'школа', emoji: '🏫', hsk: '1' },
            { chinese: '校长', pinyin: 'xiào zhǎng', translation: 'директор школы', emoji: '🧑‍🏫', hsk: '4' },
            { chinese: '校服', pinyin: 'xiào fú', translation: 'школьная форма', emoji: '👕', hsk: '4' },
            { chinese: '校车', pinyin: 'xiào chē', translation: 'школьный автобус', emoji: '🚌', hsk: '4' },
            { chinese: '校园', pinyin: 'xiào yuán', translation: 'школьный двор, кампус', emoji: '🌳', hsk: '3' },
            { chinese: '校友', pinyin: 'xiào yǒu', translation: 'выпускник', emoji: '🎓', hsk: '5' },
            { chinese: '校对', pinyin: 'jiào duì', translation: 'выверять, сверять', emoji: '📝', hsk: '6' },
            { chinese: '校门', pinyin: 'xiào mén', translation: 'школьные ворота', emoji: '🚪', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 教 — УЧИТЬ, ПРЕПОДАВАТЬ =====
    // ============================================================
    '教': {
        emoji: '👨‍🏫',
        meaning: 'учить, преподавать, учить (чему-л.)',
        words: [
            { chinese: '教师', pinyin: 'jiào shī', translation: 'учитель, преподаватель', emoji: '👨‍🏫', hsk: '3' },
            { chinese: '教育', pinyin: 'jiào yù', translation: 'образование', emoji: '📚', hsk: '3' },
            { chinese: '教课', pinyin: 'jiào kè', translation: 'вести урок', emoji: '📖', hsk: '4' },
            { chinese: '教学', pinyin: 'jiào xué', translation: 'преподавание, обучение', emoji: '🏫', hsk: '4' },
            { chinese: '教堂', pinyin: 'jiào táng', translation: 'церковь, храм', emoji: '⛪', hsk: '4' },
            { chinese: '教师节', pinyin: 'jiào shī jié', translation: 'День учителя', emoji: '🎉', hsk: '4' },
            { chinese: '教会', pinyin: 'jiào huì', translation: 'церковь, учить', emoji: '⛪', hsk: '5' },
            { chinese: '教授', pinyin: 'jiào shòu', translation: 'профессор', emoji: '👨‍🏫', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 观 — СМОТРЕТЬ, НАБЛЮДАТЬ =====
    // ============================================================
    '观': {
        emoji: '🔭',
        meaning: 'смотреть, наблюдать, взгляд',
        words: [
            { chinese: '观看', pinyin: 'guān kàn', translation: 'смотреть, наблюдать', emoji: '👀', hsk: '4' },
            { chinese: '观点', pinyin: 'guān diǎn', translation: 'точка зрения', emoji: '💭', hsk: '4' },
            { chinese: '观众', pinyin: 'guān zhòng', translation: 'зрители, публика', emoji: '👥', hsk: '4' },
            { chinese: '观察', pinyin: 'guān chá', translation: 'наблюдать', emoji: '🔭', hsk: '4' },
            { chinese: '乐观', pinyin: 'lè guān', translation: 'оптимистичный', emoji: '😊', hsk: '5' },
            { chinese: '悲观', pinyin: 'bēi guān', translation: 'пессимистичный', emoji: '😔', hsk: '5' },
            { chinese: '观光', pinyin: 'guān guāng', translation: 'экскурсия, осмотр', emoji: '🏞️', hsk: '5' },
            { chinese: '参观', pinyin: 'cān guān', translation: 'посещать, осматривать', emoji: '🏛️', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 笑 — СМЕЯТЬСЯ =====
    // ============================================================
    '笑': {
        emoji: '😄',
        meaning: 'смеяться, улыбаться',
        words: [
            { chinese: '笑', pinyin: 'xiào', translation: 'смеяться, улыбаться', emoji: '😄', hsk: '2' },
            { chinese: '笑话', pinyin: 'xiào huà', translation: 'шутка, анекдот', emoji: '😂', hsk: '3' },
            { chinese: '笑容', pinyin: 'xiào róng', translation: 'улыбка', emoji: '😊', hsk: '4' },
            { chinese: '搞笑', pinyin: 'gǎo xiào', translation: 'смешной, забавный', emoji: '🤣', hsk: '5' },
            { chinese: '嘲笑', pinyin: 'cháo xiào', translation: 'насмехаться', emoji: '🙃', hsk: '5' },
            { chinese: '微笑', pinyin: 'wēi xiào', translation: 'улыбаться', emoji: '🙂', hsk: '4' },
            { chinese: '大笑', pinyin: 'dà xiào', translation: 'громко смеяться', emoji: '🤣', hsk: '4' },
            { chinese: '笑声', pinyin: 'xiào shēng', translation: 'смех', emoji: '😄', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 哭 — ПЛАКАТЬ =====
    // ============================================================
    '哭': {
        emoji: '😢',
        meaning: 'плакать, рыдать',
        words: [
            { chinese: '哭', pinyin: 'kū', translation: 'плакать', emoji: '😢', hsk: '3' },
            { chinese: '哭泣', pinyin: 'kū qì', translation: 'плакать, рыдать', emoji: '😭', hsk: '4' },
            { chinese: '大哭', pinyin: 'dà kū', translation: 'громко плакать', emoji: '😭', hsk: '4' },
            { chinese: '哭鼻子', pinyin: 'kū bí zi', translation: 'хныкать', emoji: '👃', hsk: '5' },
            { chinese: '哭诉', pinyin: 'kū sù', translation: 'жаловаться со слезами', emoji: '😢', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 跑 — БЕГАТЬ =====
    // ============================================================
    '跑': {
        emoji: '🏃',
        meaning: 'бегать, бежать, убегать',
        words: [
            { chinese: '跑', pinyin: 'pǎo', translation: 'бежать, бегать', emoji: '🏃', hsk: '2' },
            { chinese: '跑步', pinyin: 'pǎo bù', translation: 'бегать, пробежка', emoji: '🏃‍♂️', hsk: '2' },
            { chinese: '跑车', pinyin: 'pǎo chē', translation: 'спортивная машина', emoji: '🏎️', hsk: '5' },
            { chinese: '逃跑', pinyin: 'táo pǎo', translation: 'сбежать, убежать', emoji: '🏃', hsk: '4' },
            { chinese: '跑路', pinyin: 'pǎo lù', translation: 'сбежать, скрыться', emoji: '🏃', hsk: '6' },
            { chinese: '跑腿', pinyin: 'pǎo tuǐ', translation: 'бегать за поручениями', emoji: '🏃', hsk: '6' },
            { chinese: '跑道', pinyin: 'pǎo dào', translation: 'беговая дорожка', emoji: '🏟️', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 舞 — ТАНЦЕВАТЬ =====
    // ============================================================
    '舞': {
        emoji: '💃',
        meaning: 'танцевать, танец, размахивать',
        words: [
            { chinese: '舞', pinyin: 'wǔ', translation: 'танцевать', emoji: '💃', hsk: '4' },
            { chinese: '舞蹈', pinyin: 'wǔ dǎo', translation: 'танец, танцевальное искусство', emoji: '🕺', hsk: '4' },
            { chinese: '跳舞', pinyin: 'tiào wǔ', translation: 'танцевать', emoji: '💃', hsk: '2' },
            { chinese: '舞会', pinyin: 'wǔ huì', translation: 'танцевальный вечер, бал', emoji: '🎉', hsk: '5' },
            { chinese: '舞者', pinyin: 'wǔ zhě', translation: 'танцор', emoji: '🕺', hsk: '5' },
            { chinese: '跳舞机', pinyin: 'tiào wǔ jī', translation: 'танцевальный автомат', emoji: '🎮', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 病 — БОЛЕЗНЬ =====
    // ============================================================
    '病': {
        emoji: '🤒',
        meaning: 'болезнь, болеть, больной',
        words: [
            { chinese: '病', pinyin: 'bìng', translation: 'болезнь, болеть', emoji: '🤒', hsk: '3' },
            { chinese: '生病', pinyin: 'shēng bìng', translation: 'заболеть', emoji: '🤒', hsk: '2' },
            { chinese: '病人', pinyin: 'bìng rén', translation: 'больной, пациент', emoji: '🏥', hsk: '3' },
            { chinese: '看病', pinyin: 'kàn bìng', translation: 'обратиться к врачу', emoji: '👨‍⚕️', hsk: '3' },
            { chinese: '病房', pinyin: 'bìng fáng', translation: 'больничная палата', emoji: '🏥', hsk: '4' },
            { chinese: '病床', pinyin: 'bìng chuáng', translation: 'больничная койка', emoji: '🛏️', hsk: '5' },
            { chinese: '病毒', pinyin: 'bìng dú', translation: 'вирус', emoji: '🦠', hsk: '5' },
            { chinese: '病历', pinyin: 'bìng lì', translation: 'история болезни', emoji: '📋', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 院 — УЧРЕЖДЕНИЕ, ДВОР =====
    // ============================================================
    '院': {
        emoji: '🏛️',
        meaning: 'учреждение, двор, институт',
        words: [
            { chinese: '医院', pinyin: 'yī yuàn', translation: 'больница', emoji: '🏥', hsk: '2' },
            { chinese: '学院', pinyin: 'xué yuàn', translation: 'институт, колледж', emoji: '🏫', hsk: '4' },
            { chinese: '法院', pinyin: 'fǎ yuàn', translation: 'суд', emoji: '⚖️', hsk: '4' },
            { chinese: '电影院', pinyin: 'diàn yǐng yuàn', translation: 'кинотеатр', emoji: '🎬', hsk: '3' },
            { chinese: '院子', pinyin: 'yuàn zi', translation: 'двор', emoji: '🏡', hsk: '3' },
            { chinese: '院长', pinyin: 'yuàn zhǎng', translation: 'директор института/больницы', emoji: '🧑‍💼', hsk: '5' },
            { chinese: '剧院', pinyin: 'jù yuàn', translation: 'театр', emoji: '🎭', hsk: '4' },
            { chinese: '养老院', pinyin: 'yǎng lǎo yuàn', translation: 'дом престарелых', emoji: '🏠', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 医 — ВРАЧ, МЕДИЦИНА =====
    // ============================================================
    '医': {
        emoji: '👨‍⚕️',
        meaning: 'врач, медицина, лечить',
        words: [
            { chinese: '医生', pinyin: 'yī shēng', translation: 'врач', emoji: '👨‍⚕️', hsk: '1' },
            { chinese: '医院', pinyin: 'yī yuàn', translation: 'больница', emoji: '🏥', hsk: '2' },
            { chinese: '医学', pinyin: 'yī xué', translation: 'медицина', emoji: '💉', hsk: '4' },
            { chinese: '医疗', pinyin: 'yī liáo', translation: 'лечение, медицинский', emoji: '🏥', hsk: '4' },
            { chinese: '中医', pinyin: 'zhōng yī', translation: 'китайская медицина', emoji: '🇨🇳', hsk: '4' },
            { chinese: '西医', pinyin: 'xī yī', translation: 'западная медицина', emoji: '🌍', hsk: '5' },
            { chinese: '医药', pinyin: 'yī yào', translation: 'лекарства, медицина', emoji: '💊', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 食 — ЕДА, ПИЩА =====
    // ============================================================
    '食': {
        emoji: '🍽️',
        meaning: 'еда, пища, питание',
        words: [
            { chinese: '食品', pinyin: 'shí pǐn', translation: 'продукты питания', emoji: '🛒', hsk: '3' },
            { chinese: '食物', pinyin: 'shí wù', translation: 'еда, пища', emoji: '🍽️', hsk: '3' },
            { chinese: '食堂', pinyin: 'shí táng', translation: 'столовая', emoji: '🍽️', hsk: '3' },
            { chinese: '美食', pinyin: 'měi shí', translation: 'деликатес, вкусная еда', emoji: '😋', hsk: '4' },
            { chinese: '零食', pinyin: 'líng shí', translation: 'снеки, закуски', emoji: '🍿', hsk: '4' },
            { chinese: '主食', pinyin: 'zhǔ shí', translation: 'основное блюдо', emoji: '🍚', hsk: '5' },
            { chinese: '饮食', pinyin: 'yǐn shí', translation: 'еда и питьё, диета', emoji: '🥤', hsk: '4' },
            { chinese: '食欲', pinyin: 'shí yù', translation: 'аппетит', emoji: '😋', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 衣 — ОДЕЖДА =====
    // ============================================================
    '衣': {
        emoji: '👕',
        meaning: 'одежда, костюм, покрытие',
        words: [
            { chinese: '衣服', pinyin: 'yī fu', translation: 'одежда', emoji: '👕', hsk: '1' },
            { chinese: '大衣', pinyin: 'dà yī', translation: 'пальто', emoji: '🧥', hsk: '3' },
            { chinese: '上衣', pinyin: 'shàng yī', translation: 'верхняя одежда', emoji: '👚', hsk: '3' },
            { chinese: '内衣', pinyin: 'nèi yī', translation: 'нижнее бельё', emoji: '🩲', hsk: '4' },
            { chinese: '毛衣', pinyin: 'máo yī', translation: 'свитер', emoji: '🧶', hsk: '3' },
            { chinese: '雨衣', pinyin: 'yǔ yī', translation: 'дождевик', emoji: '🧥', hsk: '4' },
            { chinese: '洗衣', pinyin: 'xǐ yī', translation: 'стирать', emoji: '🧼', hsk: '2' },
            { chinese: '衣架', pinyin: 'yī jià', translation: 'вешалка', emoji: '🪝', hsk: '5' },
            { chinese: '衣橱', pinyin: 'yī chú', translation: 'шкаф для одежды', emoji: '🪑', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 住 — ЖИТЬ, ПРОЖИВАТЬ =====
    // ============================================================
    '住': {
        emoji: '🏠',
        meaning: 'жить, проживать, останавливаться',
        words: [
            { chinese: '住', pinyin: 'zhù', translation: 'жить, проживать', emoji: '🏠', hsk: '1' },
            { chinese: '住房', pinyin: 'zhù fáng', translation: 'жильё, квартира', emoji: '🏡', hsk: '3' },
            { chinese: '住宿', pinyin: 'zhù sù', translation: 'проживание, ночлег', emoji: '🏨', hsk: '4' },
            { chinese: '住宅', pinyin: 'zhù zhái', translation: 'жилой дом', emoji: '🏠', hsk: '4' },
            { chinese: '住址', pinyin: 'zhù zhǐ', translation: 'адрес проживания', emoji: '📬', hsk: '4' },
            { chinese: '记住', pinyin: 'jì zhù', translation: 'запомнить', emoji: '🧠', hsk: '2' },
            { chinese: '站住', pinyin: 'zhàn zhù', translation: 'остановиться', emoji: '🧍', hsk: '4' },
            { chinese: '住手', pinyin: 'zhù shǒu', translation: 'прекратить, остановиться', emoji: '✋', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 对 — ПРАВИЛЬНЫЙ, К =====
    // ============================================================
    '对': {
        emoji: '✅',
        meaning: 'правильный, к, по отношению к',
        words: [
            { chinese: '对', pinyin: 'duì', translation: 'правильный, к', emoji: '✅', hsk: '1' },
            { chinese: '对方', pinyin: 'duì fāng', translation: 'другая сторона', emoji: '🤝', hsk: '4' },
            { chinese: '对话', pinyin: 'duì huà', translation: 'диалог', emoji: '💬', hsk: '3' },
            { chinese: '对待', pinyin: 'duì dài', translation: 'относиться к', emoji: '🔍', hsk: '4' },
            { chinese: '对面', pinyin: 'duì miàn', translation: 'напротив', emoji: '🔀', hsk: '3' },
            { chinese: '对比', pinyin: 'duì bǐ', translation: 'сравнение', emoji: '📊', hsk: '4' },
            { chinese: '对不起', pinyin: 'duì bu qǐ', translation: 'извините', emoji: '🙏', hsk: '1' },
            { chinese: '对手', pinyin: 'duì shǒu', translation: 'противник, соперник', emoji: '🥊', hsk: '5' },
            { chinese: '对错', pinyin: 'duì cuò', translation: 'правильно и неправильно', emoji: '✅❌', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 书 — КНИГА, ПИСАТЬ =====
    // ============================================================
    '书': {
        emoji: '📖',
        meaning: 'книга, письмо, документ',
        words: [
            { chinese: '书', pinyin: 'shū', translation: 'книга', emoji: '📖', hsk: '1' },
            { chinese: '书房', pinyin: 'shū fáng', translation: 'кабинет, библиотека', emoji: '📚', hsk: '3' },
            { chinese: '书店', pinyin: 'shū diàn', translation: 'книжный магазин', emoji: '📚', hsk: '2' },
            { chinese: '书包', pinyin: 'shū bāo', translation: 'рюкзак, портфель', emoji: '🎒', hsk: '2' },
            { chinese: '书写', pinyin: 'shū xiě', translation: 'писать', emoji: '✍️', hsk: '4' },
            { chinese: '读书', pinyin: 'dú shū', translation: 'читать книгу, учиться', emoji: '📚', hsk: '1' },
            { chinese: '看书', pinyin: 'kàn shū', translation: 'читать книгу', emoji: '📖', hsk: '1' },
            { chinese: '书桌', pinyin: 'shū zhuō', translation: 'письменный стол', emoji: '🪑', hsk: '4' },
            { chinese: '借书', pinyin: 'jiè shū', translation: 'брать книгу в библиотеке', emoji: '📚', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 歌 — ПЕСНЯ =====
    // ============================================================
    '歌': {
        emoji: '🎵',
        meaning: 'песня, петь',
        words: [
            { chinese: '唱歌', pinyin: 'chàng gē', translation: 'петь', emoji: '🎤', hsk: '2' },
            { chinese: '歌曲', pinyin: 'gē qǔ', translation: 'песня', emoji: '🎵', hsk: '4' },
            { chinese: '歌手', pinyin: 'gē shǒu', translation: 'певец, певица', emoji: '🎤', hsk: '4' },
            { chinese: '歌星', pinyin: 'gē xīng', translation: 'звезда эстрады', emoji: '⭐', hsk: '5' },
            { chinese: '歌词', pinyin: 'gē cí', translation: 'слова песни', emoji: '📝', hsk: '4' },
            { chinese: '歌迷', pinyin: 'gē mí', translation: 'фанат певца', emoji: '🎶', hsk: '5' },
            { chinese: '唱歌比赛', pinyin: 'chàng gē bǐ sài', translation: 'конкурс пения', emoji: '🏆', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 乐 — МУЗЫКА, РАДОСТЬ =====
    // ============================================================
    '乐': {
        emoji: '🎶',
        meaning: 'музыка, радость, веселье',
        words: [
            { chinese: '音乐', pinyin: 'yīn yuè', translation: 'музыка', emoji: '🎶', hsk: '1' },
            { chinese: '快乐', pinyin: 'kuài lè', translation: 'радостный, счастливый', emoji: '😊', hsk: '1' },
            { chinese: '乐趣', pinyin: 'lè qù', translation: 'удовольствие, интерес', emoji: '😄', hsk: '4' },
            { chinese: '乐器', pinyin: 'yuè qì', translation: 'музыкальный инструмент', emoji: '🎸', hsk: '4' },
            { chinese: '乐队', pinyin: 'yuè duì', translation: 'музыкальная группа', emoji: '🎸', hsk: '4' },
            { chinese: '乐谱', pinyin: 'yuè pǔ', translation: 'ноты, партитура', emoji: '🎼', hsk: '5' },
            { chinese: '乐观', pinyin: 'lè guān', translation: 'оптимистичный', emoji: '😊', hsk: '5' },
            { chinese: '欢乐', pinyin: 'huān lè', translation: 'весёлый, радостный', emoji: '🥳', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 影 — ТЕНЬ, ИЗОБРАЖЕНИЕ =====
    // ============================================================
    '影': {
        emoji: '🎬',
        meaning: 'тень, изображение, фильм',
        words: [
            { chinese: '电影', pinyin: 'diàn yǐng', translation: 'кино, фильм', emoji: '🎬', hsk: '2' },
            { chinese: '影子', pinyin: 'yǐng zi', translation: 'тень', emoji: '🌑', hsk: '4' },
            { chinese: '影响', pinyin: 'yǐng xiǎng', translation: 'влиять, влияние', emoji: '💪', hsk: '3' },
            { chinese: '摄影', pinyin: 'shè yǐng', translation: 'фотография, съёмка', emoji: '📷', hsk: '5' },
            { chinese: '影院', pinyin: 'yǐng yuàn', translation: 'кинотеатр', emoji: '🎬', hsk: '4' },
            { chinese: '影视', pinyin: 'yǐng shì', translation: 'кино и телевидение', emoji: '📺', hsk: '5' },
            { chinese: '影片', pinyin: 'yǐng piān', translation: 'фильм, лента', emoji: '🎞️', hsk: '5' },
            { chinese: '阴影', pinyin: 'yīn yǐng', translation: 'тень, мрак', emoji: '🌑', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 场 — МЕСТО, ПЛОЩАДКА =====
    // ============================================================
    '场': {
        emoji: '🏟️',
        meaning: 'место, площадка, поле',
        words: [
            { chinese: '市场', pinyin: 'shì chǎng', translation: 'рынок', emoji: '🛒', hsk: '3' },
            { chinese: '广场', pinyin: 'guǎng chǎng', translation: 'площадь', emoji: '🏛️', hsk: '3' },
            { chinese: '剧场', pinyin: 'jù chǎng', translation: 'театр', emoji: '🎭', hsk: '4' },
            { chinese: '球场', pinyin: 'qiú chǎng', translation: 'спортивная площадка', emoji: '⚽', hsk: '4' },
            { chinese: '机场', pinyin: 'jī chǎng', translation: 'аэропорт', emoji: '✈️', hsk: '3' },
            { chinese: '工厂', pinyin: 'gōng chǎng', translation: 'фабрика, завод', emoji: '🏭', hsk: '3' },
            { chinese: '现场', pinyin: 'xiàn chǎng', translation: 'место происшествия', emoji: '🚨', hsk: '4' },
            { chinese: '场合', pinyin: 'chǎng hé', translation: 'обстановка, ситуация', emoji: '📌', hsk: '5' },
            { chinese: '农场', pinyin: 'nóng chǎng', translation: 'ферма', emoji: '🌾', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 新 — НОВЫЙ =====
    // ============================================================
    '新': {
        emoji: '🆕',
        meaning: 'новый, свежий, недавний',
        words: [
            { chinese: '新', pinyin: 'xīn', translation: 'новый', emoji: '🆕', hsk: '1' },
            { chinese: '新年', pinyin: 'xīn nián', translation: 'Новый год', emoji: '🎆', hsk: '2' },
            { chinese: '新闻', pinyin: 'xīn wén', translation: 'новости', emoji: '📰', hsk: '3' },
            { chinese: '新鲜', pinyin: 'xīn xiān', translation: 'свежий, новый', emoji: '🌿', hsk: '4' },
            { chinese: '新手', pinyin: 'xīn shǒu', translation: 'новичок', emoji: '👶', hsk: '4' },
            { chinese: '新书', pinyin: 'xīn shū', translation: 'новая книга', emoji: '📖', hsk: '3' },
            { chinese: '新房子', pinyin: 'xīn fáng zi', translation: 'новый дом', emoji: '🏡', hsk: '3' },
            { chinese: '新朋友', pinyin: 'xīn péng you', translation: 'новый друг', emoji: '🤝', hsk: '2' },
            { chinese: '最新', pinyin: 'zuì xīn', translation: 'самый новый, последний', emoji: '🆕', hsk: '4' },
            { chinese: '创新', pinyin: 'chuàng xīn', translation: 'инновация, творить новое', emoji: '💡', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 旧 — СТАРЫЙ (не по возрасту) =====
    // ============================================================
    '旧': {
        emoji: '📅',
        meaning: 'старый, бывший, старый (о вещах)',
        words: [
            { chinese: '旧', pinyin: 'jiù', translation: 'старый, бывший', emoji: '📅', hsk: '3' },
            { chinese: '旧书', pinyin: 'jiù shū', translation: 'старая книга', emoji: '📚', hsk: '4' },
            { chinese: '旧衣服', pinyin: 'jiù yī fu', translation: 'старая одежда', emoji: '👕', hsk: '4' },
            { chinese: '旧时代', pinyin: 'jiù shí dài', translation: 'старая эпоха', emoji: '⏳', hsk: '5' },
            { chinese: '旧友', pinyin: 'jiù yǒu', translation: 'старый друг', emoji: '🤝', hsk: '5' },
            { chinese: '旧习惯', pinyin: 'jiù xí guàn', translation: 'старая привычка', emoji: '🔄', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 网 — СЕТЬ, ИНТЕРНЕТ =====
    // ============================================================
    '网': {
        emoji: '🌐',
        meaning: 'сеть, интернет, паутина',
        words: [
            { chinese: '上网', pinyin: 'shàng wǎng', translation: 'выходить в интернет', emoji: '🌐', hsk: '2' },
            { chinese: '网络', pinyin: 'wǎng luò', translation: 'интернет, сеть', emoji: '🌐', hsk: '3' },
            { chinese: '网站', pinyin: 'wǎng zhàn', translation: 'веб-сайт', emoji: '💻', hsk: '3' },
            { chinese: '网友', pinyin: 'wǎng yǒu', translation: 'друг по интернету', emoji: '👥', hsk: '4' },
            { chinese: '网吧', pinyin: 'wǎng bā', translation: 'интернет-кафе', emoji: '💻', hsk: '4' },
            { chinese: '网速', pinyin: 'wǎng sù', translation: 'скорость интернета', emoji: '⚡', hsk: '5' },
            { chinese: '网页', pinyin: 'wǎng yè', translation: 'веб-страница', emoji: '📄', hsk: '4' },
            { chinese: '网购', pinyin: 'wǎng gòu', translation: 'покупать через интернет', emoji: '🛒', hsk: '4' },
            { chinese: '鱼网', pinyin: 'yú wǎng', translation: 'рыболовная сеть', emoji: '🎣', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 线 — ЛИНИЯ, НИТЬ =====
    // ============================================================
    '线': {
        emoji: '🧵',
        meaning: 'линия, нить, маршрут',
        words: [
            { chinese: '路线', pinyin: 'lù xiàn', translation: 'маршрут', emoji: '📍', hsk: '4' },
            { chinese: '在线', pinyin: 'zài xiàn', translation: 'онлайн', emoji: '🌐', hsk: '3' },
            { chinese: '电线', pinyin: 'diàn xiàn', translation: 'электропровод', emoji: '🔌', hsk: '4' },
            { chinese: '线条', pinyin: 'xiàn tiáo', translation: 'линия, контур', emoji: '📏', hsk: '5' },
            { chinese: '界线', pinyin: 'jiè xiàn', translation: 'граница', emoji: '🚧', hsk: '5' },
            { chinese: '热线', pinyin: 'rè xiàn', translation: 'горячая линия', emoji: '📞', hsk: '5' },
            { chinese: '前线', pinyin: 'qián xiàn', translation: 'передовая', emoji: '⚔️', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 课 — УРОК =====
    // ============================================================
    '课': {
        emoji: '📚',
        meaning: 'урок, занятие, предмет',
        words: [
            { chinese: '上课', pinyin: 'shàng kè', translation: 'идти на урок', emoji: '📚', hsk: '1' },
            { chinese: '下课', pinyin: 'xià kè', translation: 'заканчивать урок', emoji: '🔚', hsk: '1' },
            { chinese: '功课', pinyin: 'gōng kè', translation: 'уроки, школьное задание', emoji: '📝', hsk: '3' },
            { chinese: '课本', pinyin: 'kè běn', translation: 'учебник', emoji: '📖', hsk: '2' },
            { chinese: '课程', pinyin: 'kè chéng', translation: 'курс, программа', emoji: '📋', hsk: '3' },
            { chinese: '课间', pinyin: 'kè jiān', translation: 'перемена', emoji: '⏳', hsk: '4' },
            { chinese: '课堂', pinyin: 'kè táng', translation: 'классная комната', emoji: '🏫', hsk: '3' },
            { chinese: '课桌', pinyin: 'kè zhuō', translation: 'парта', emoji: '🪑', hsk: '4' },
            { chinese: '课外', pinyin: 'kè wài', translation: 'внеклассный', emoji: '📚', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 室 — КОМНАТА, ПОМЕЩЕНИЕ =====
    // ============================================================
    '室': {
        emoji: '🚪',
        meaning: 'комната, помещение, кабинет',
        words: [
            { chinese: '教室', pinyin: 'jiào shì', translation: 'классная комната', emoji: '🏫', hsk: '2' },
            { chinese: '办公室', pinyin: 'bàn gōng shì', translation: 'офис, кабинет', emoji: '💼', hsk: '3' },
            { chinese: '卧室', pinyin: 'wò shì', translation: 'спальня', emoji: '🛏️', hsk: '3' },
            { chinese: '厨房', pinyin: 'chú fáng', translation: 'кухня', emoji: '🍳', hsk: '2' },
            { chinese: '浴室', pinyin: 'yù shì', translation: 'ванная комната', emoji: '🚿', hsk: '4' },
            { chinese: '实验室', pinyin: 'shí yàn shì', translation: 'лаборатория', emoji: '🔬', hsk: '4' },
            { chinese: '会议室', pinyin: 'huì yì shì', translation: 'конференц-зал', emoji: '📋', hsk: '4' },
            { chinese: '休息室', pinyin: 'xiū xi shì', translation: 'комната отдыха', emoji: '🛋️', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 楼 — ЗДАНИЕ, ЭТАЖ =====
    // ============================================================
    '楼': {
        emoji: '🏢',
        meaning: 'здание, этаж, башня',
        words: [
            { chinese: '楼', pinyin: 'lóu', translation: 'здание, этаж', emoji: '🏢', hsk: '2' },
            { chinese: '楼上', pinyin: 'lóu shàng', translation: 'наверху, на верхнем этаже', emoji: '⬆️', hsk: '3' },
            { chinese: '楼下', pinyin: 'lóu xià', translation: 'внизу, на нижнем этаже', emoji: '⬇️', hsk: '3' },
            { chinese: '大楼', pinyin: 'dà lóu', translation: 'большое здание', emoji: '🏢', hsk: '3' },
            { chinese: '高楼', pinyin: 'gāo lóu', translation: 'высокое здание', emoji: '🏢', hsk: '3' },
            { chinese: '楼梯', pinyin: 'lóu tī', translation: 'лестница', emoji: '🪜', hsk: '3' },
            { chinese: '楼房', pinyin: 'lóu fáng', translation: 'многоэтажное здание', emoji: '🏢', hsk: '3' },
            { chinese: '上楼', pinyin: 'shàng lóu', translation: 'подниматься наверх', emoji: '⬆️', hsk: '3' },
            { chinese: '下楼', pinyin: 'xià lóu', translation: 'спускаться', emoji: '⬇️', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 爱 — ЛЮБОВЬ =====
    // ============================================================
    '爱': {
        emoji: '❤️',
        meaning: 'любить, любовь, дорожить',
        words: [
            { chinese: '爱', pinyin: 'ài', translation: 'любить', emoji: '❤️', hsk: '1' },
            { chinese: '爱人', pinyin: 'ài rén', translation: 'любимый человек, супруг(а)', emoji: '💑', hsk: '4' },
            { chinese: '爱情', pinyin: 'ài qíng', translation: 'любовь (чувство)', emoji: '💕', hsk: '3' },
            { chinese: '爱好', pinyin: 'ài hào', translation: 'хобби, увлечение', emoji: '🎯', hsk: '3' },
            { chinese: '可爱', pinyin: 'kě ài', translation: 'милый, симпатичный', emoji: '🥰', hsk: '2' },
            { chinese: '热爱', pinyin: 'rè ài', translation: 'горячо любить', emoji: '🔥', hsk: '4' },
            { chinese: '喜爱', pinyin: 'xǐ ài', translation: 'любить, нравиться', emoji: '😍', hsk: '4' },
            { chinese: '爱心', pinyin: 'ài xīn', translation: 'любовь, доброта', emoji: '💗', hsk: '3' },
            { chinese: '爱护', pinyin: 'ài hù', translation: 'заботиться, беречь', emoji: '🤗', hsk: '4' },
            { chinese: '恋爱', pinyin: 'liàn ài', translation: 'быть влюблённым, встречаться', emoji: '💖', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 友 — ДРУГ =====
    // ============================================================
    '友': {
        emoji: '🤝',
        meaning: 'друг, дружба, дружеский',
        words: [
            { chinese: '朋友', pinyin: 'péng you', translation: 'друг', emoji: '🤝', hsk: '1' },
            { chinese: '好友', pinyin: 'hǎo yǒu', translation: 'хороший друг', emoji: '👫', hsk: '3' },
            { chinese: '友情', pinyin: 'yǒu qíng', translation: 'дружба', emoji: '💕', hsk: '4' },
            { chinese: '友爱', pinyin: 'yǒu ài', translation: 'дружелюбие', emoji: '🤗', hsk: '5' },
            { chinese: '网友', pinyin: 'wǎng yǒu', translation: 'друг по интернету', emoji: '💻', hsk: '4' },
            { chinese: '校友', pinyin: 'xiào yǒu', translation: 'выпускник, однокашник', emoji: '🎓', hsk: '5' },
            { chinese: '室友', pinyin: 'shì yǒu', translation: 'сосед по комнате', emoji: '🏠', hsk: '4' },
            { chinese: '友好', pinyin: 'yǒu hǎo', translation: 'дружелюбный', emoji: '😊', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 亲 — РОДНОЙ, БЛИЗКИЙ =====
    // ============================================================
    '亲': {
        emoji: '👨‍👩‍👦',
        meaning: 'родной, близкий, сам, поцеловать',
        words: [
            { chinese: '父亲', pinyin: 'fù qīn', translation: 'отец', emoji: '👨', hsk: '3' },
            { chinese: '母亲', pinyin: 'mǔ qīn', translation: 'мать', emoji: '👩', hsk: '3' },
            { chinese: '亲人', pinyin: 'qīn rén', translation: 'родственник, близкий', emoji: '👨‍👩‍👦', hsk: '3' },
            { chinese: '亲爱', pinyin: 'qīn ài', translation: 'дорогой, любимый', emoji: '❤️', hsk: '4' },
            { chinese: '亲自', pinyin: 'qīn zì', translation: 'лично, сам', emoji: '👤', hsk: '4' },
            { chinese: '亲密', pinyin: 'qīn mì', translation: 'близкий, интимный', emoji: '💕', hsk: '5' },
            { chinese: '亲吻', pinyin: 'qīn wěn', translation: 'целовать', emoji: '💋', hsk: '5' },
            { chinese: '亲戚', pinyin: 'qīn qi', translation: 'родственник', emoji: '👪', hsk: '3' },
            { chinese: '亲近', pinyin: 'qīn jìn', translation: 'сближаться', emoji: '🤗', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 母 — МАТЬ =====
    // ============================================================
    '母': {
        emoji: '👩',
        meaning: 'мать, женский, родительница',
        words: [
            { chinese: '母亲', pinyin: 'mǔ qīn', translation: 'мать', emoji: '👩', hsk: '3' },
            { chinese: '父母', pinyin: 'fù mǔ', translation: 'родители', emoji: '👨‍👩‍👦', hsk: '3' },
            { chinese: '母语', pinyin: 'mǔ yǔ', translation: 'родной язык', emoji: '🗣️', hsk: '4' },
            { chinese: '母校', pinyin: 'mǔ xiào', translation: 'альма-матер, родная школа', emoji: '🏫', hsk: '5' },
            { chinese: '母鸡', pinyin: 'mǔ jī', translation: 'курица', emoji: '🐔', hsk: '4' },
            { chinese: '字母', pinyin: 'zì mǔ', translation: 'буква', emoji: '🔤', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 子 — СЫН, РЕБЁНОК, ЧАСТИЦА =====
    // ============================================================
    '子': {
        emoji: '👶',
        meaning: 'сын, ребёнок, частица, суффикс',
        words: [
            { chinese: '儿子', pinyin: 'ér zi', translation: 'сын', emoji: '👦', hsk: '2' },
            { chinese: '孩子', pinyin: 'hái zi', translation: 'ребёнок', emoji: '👶', hsk: '1' },
            { chinese: '女子', pinyin: 'nǚ zǐ', translation: 'девушка, женщина', emoji: '👩', hsk: '2' },
            { chinese: '男子', pinyin: 'nán zǐ', translation: 'мужчина', emoji: '👨', hsk: '3' },
            { chinese: '子女', pinyin: 'zǐ nǚ', translation: 'дети, сыновья и дочери', emoji: '👨‍👩‍👧', hsk: '4' },
            { chinese: '种子', pinyin: 'zhǒng zi', translation: 'семя', emoji: '🌱', hsk: '4' },
            { chinese: '桌子', pinyin: 'zhuō zi', translation: 'стол', emoji: '🪑', hsk: '1' },
            { chinese: '椅子', pinyin: 'yǐ zi', translation: 'стул', emoji: '🪑', hsk: '2' },
            { chinese: '房子', pinyin: 'fáng zi', translation: 'дом', emoji: '🏠', hsk: '1' },
            { chinese: '兔子', pinyin: 'tù zi', translation: 'кролик', emoji: '🐰', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 公 — ОБЩЕСТВЕННЫЙ, МУЖСКОЙ =====
    // ============================================================
    '公': {
        emoji: '🏛️',
        meaning: 'общественный, мужской, публичный',
        words: [
            { chinese: '公共', pinyin: 'gōng gòng', translation: 'общественный', emoji: '🏛️', hsk: '4' },
            { chinese: '公园', pinyin: 'gōng yuán', translation: 'парк', emoji: '🌳', hsk: '2' },
            { chinese: '公司', pinyin: 'gōng sī', translation: 'компания', emoji: '🏢', hsk: '2' },
            { chinese: '公车', pinyin: 'gōng chē', translation: 'автобус', emoji: '🚌', hsk: '3' },
            { chinese: '公开', pinyin: 'gōng kāi', translation: 'открытый, публичный', emoji: '📢', hsk: '4' },
            { chinese: '公平', pinyin: 'gōng píng', translation: 'справедливый', emoji: '⚖️', hsk: '4' },
            { chinese: '公寓', pinyin: 'gōng yù', translation: 'квартира, апартаменты', emoji: '🏢', hsk: '4' },
            { chinese: '公共汽车', pinyin: 'gōng gòng qì chē', translation: 'автобус', emoji: '🚌', hsk: '2' },
            { chinese: '公里', pinyin: 'gōng lǐ', translation: 'километр', emoji: '📏', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 共 — СОВМЕСТНЫЙ =====
    // ============================================================
    '共': {
        emoji: '🤝',
        meaning: 'совместный, общий, вместе',
        words: [
            { chinese: '共同', pinyin: 'gòng tóng', translation: 'совместный, общий', emoji: '🤝', hsk: '4' },
            { chinese: '共度', pinyin: 'gòng dù', translation: 'проводить вместе (время)', emoji: '⏳', hsk: '5' },
            { chinese: '总共', pinyin: 'zǒng gòng', translation: 'всего, в общей сложности', emoji: '📊', hsk: '3' },
            { chinese: '共产党', pinyin: 'gòng chǎn dǎng', translation: 'коммунистическая партия', emoji: '🇨🇳', hsk: '5' },
            { chinese: '共享', pinyin: 'gòng xiǎng', translation: 'совместно использовать', emoji: '🔄', hsk: '5' },
            { chinese: '共和', pinyin: 'gòng hé', translation: 'республика', emoji: '🏛️', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 合 — СОЕДИНЯТЬ, ПОДХОДИТЬ =====
    // ============================================================
    '合': {
        emoji: '🔗',
        meaning: 'соединять, подходить, соответствовать',
        words: [
            { chinese: '合作', pinyin: 'hé zuò', translation: 'сотрудничать', emoji: '🤝', hsk: '4' },
            { chinese: '合同', pinyin: 'hé tong', translation: 'контракт', emoji: '📝', hsk: '4' },
            { chinese: '合适', pinyin: 'hé shì', translation: 'подходящий', emoji: '✅', hsk: '3' },
            { chinese: '合理', pinyin: 'hé lǐ', translation: 'разумный, логичный', emoji: '💡', hsk: '4' },
            { chinese: '结合', pinyin: 'jié hé', translation: 'объединять, комбинировать', emoji: '🔗', hsk: '4' },
            { chinese: '合租', pinyin: 'hé zū', translation: 'совместно арендовать', emoji: '🏠', hsk: '5' },
            { chinese: '合唱', pinyin: 'hé chàng', translation: 'хор, петь вместе', emoji: '🎤', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 作 — РАБОТАТЬ, ДЕЛАТЬ =====
    // ============================================================
    '作': {
        emoji: '✍️',
        meaning: 'работать, делать, выступать',
        words: [
            { chinese: '工作', pinyin: 'gōng zuò', translation: 'работа', emoji: '💼', hsk: '1' },
            { chinese: '作业', pinyin: 'zuò yè', translation: 'домашнее задание', emoji: '📝', hsk: '2' },
            { chinese: '作家', pinyin: 'zuò jiā', translation: 'писатель', emoji: '✍️', hsk: '3' },
            { chinese: '作品', pinyin: 'zuò pǐn', translation: 'произведение', emoji: '🎨', hsk: '4' },
            { chinese: '作用', pinyin: 'zuò yòng', translation: 'роль, функция', emoji: '⚙️', hsk: '4' },
            { chinese: '操作', pinyin: 'cāo zuò', translation: 'работать, управлять', emoji: '🛠️', hsk: '4' },
            { chinese: '动作', pinyin: 'dòng zuò', translation: 'движение, действие', emoji: '🏃', hsk: '3' },
            { chinese: '作文', pinyin: 'zuò wén', translation: 'сочинение', emoji: '📝', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 品 — ТОВАР, ВКУШАТЬ =====
    // ============================================================
    '品': {
        emoji: '📦',
        meaning: 'товар, изделие, пробовать, качество',
        words: [
            { chinese: '食品', pinyin: 'shí pǐn', translation: 'продукты питания', emoji: '🍽️', hsk: '3' },
            { chinese: '商品', pinyin: 'shāng pǐn', translation: 'товар, продукт', emoji: '🛒', hsk: '4' },
            { chinese: '作品', pinyin: 'zuò pǐn', translation: 'произведение', emoji: '🎨', hsk: '4' },
            { chinese: '用品', pinyin: 'yòng pǐn', translation: 'принадлежности, предметы', emoji: '📦', hsk: '4' },
            { chinese: '品质', pinyin: 'pǐn zhì', translation: 'качество', emoji: '⭐', hsk: '4' },
            { chinese: '品味', pinyin: 'pǐn wèi', translation: 'вкус, стиль', emoji: '👅', hsk: '5' },
            { chinese: '品尝', pinyin: 'pǐn cháng', translation: 'пробовать (на вкус)', emoji: '😋', hsk: '4' },
            { chinese: '产品', pinyin: 'chǎn pǐn', translation: 'продукция', emoji: '🏭', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 商 — ТОРГОВЛЯ, БИЗНЕС =====
    // ============================================================
    '商': {
        emoji: '💼',
        meaning: 'торговля, бизнес, обсуждать',
        words: [
            { chinese: '商店', pinyin: 'shāng diàn', translation: 'магазин', emoji: '🏪', hsk: '1' },
            { chinese: '商业', pinyin: 'shāng yè', translation: 'коммерция, бизнес', emoji: '📈', hsk: '4' },
            { chinese: '商人', pinyin: 'shāng rén', translation: 'торговец, бизнесмен', emoji: '💼', hsk: '4' },
            { chinese: '商量', pinyin: 'shāng liang', translation: 'обсуждать, советоваться', emoji: '💬', hsk: '4' },
            { chinese: '商品', pinyin: 'shāng pǐn', translation: 'товар', emoji: '🛒', hsk: '4' },
            { chinese: '商场', pinyin: 'shāng chǎng', translation: 'торговый центр', emoji: '🏬', hsk: '3' },
            { chinese: '商家', pinyin: 'shāng jiā', translation: 'продавец, торговая фирма', emoji: '🏪', hsk: '4' },
            { chinese: '商标', pinyin: 'shāng biāo', translation: 'товарный знак', emoji: '🏷️', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 物 — ВЕЩЬ, ПРЕДМЕТ =====
    // ============================================================
    '物': {
        emoji: '📦',
        meaning: 'вещь, предмет, существо',
        words: [
            { chinese: '动物', pinyin: 'dòng wù', translation: 'животное', emoji: '🐾', hsk: '2' },
            { chinese: '食物', pinyin: 'shí wù', translation: 'еда, пища', emoji: '🍽️', hsk: '3' },
            { chinese: '礼物', pinyin: 'lǐ wù', translation: 'подарок', emoji: '🎁', hsk: '2' },
            { chinese: '物品', pinyin: 'wù pǐn', translation: 'предмет, вещь', emoji: '📦', hsk: '4' },
            { chinese: '物体', pinyin: 'wù tǐ', translation: 'предмет, тело', emoji: '⚪', hsk: '5' },
            { chinese: '物理', pinyin: 'wù lǐ', translation: 'физика', emoji: '⚛️', hsk: '4' },
            { chinese: '物质', pinyin: 'wù zhì', translation: 'материя, вещество', emoji: '🧪', hsk: '5' },
            { chinese: '人物', pinyin: 'rén wù', translation: 'личность, персонаж', emoji: '👤', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 理 — ЛОГИКА, УПРАВЛЯТЬ =====
    // ============================================================
    '理': {
        emoji: '🧠',
        meaning: 'логика, управлять, принцип',
        words: [
            { chinese: '道理', pinyin: 'dào lǐ', translation: 'принцип, истина', emoji: '⚖️', hsk: '3' },
            { chinese: '理解', pinyin: 'lǐ jiě', translation: 'понимать', emoji: '💡', hsk: '3' },
            { chinese: '理想', pinyin: 'lǐ xiǎng', translation: 'идеал, идеальный', emoji: '⭐', hsk: '4' },
            { chinese: '理由', pinyin: 'lǐ yóu', translation: 'причина, основание', emoji: '📌', hsk: '4' },
            { chinese: '理发', pinyin: 'lǐ fà', translation: 'стричься', emoji: '💇', hsk: '4' },
            { chinese: '经理', pinyin: 'jīng lǐ', translation: 'управляющий, менеджер', emoji: '🧑‍💼', hsk: '4' },
            { chinese: '心理', pinyin: 'xīn lǐ', translation: 'психология, душевный', emoji: '🧠', hsk: '3' },
            { chinese: '管理', pinyin: 'guǎn lǐ', translation: 'управлять, управление', emoji: '📋', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 科 — НАУКА =====
    // ============================================================
    '科': {
        emoji: '🔬',
        meaning: 'наука, отрасль, предмет',
        words: [
            { chinese: '科学', pinyin: 'kē xué', translation: 'наука', emoji: '🔬', hsk: '3' },
            { chinese: '科技', pinyin: 'kē jì', translation: 'наука и техника', emoji: '💻', hsk: '4' },
            { chinese: '科目', pinyin: 'kē mù', translation: 'предмет, дисциплина', emoji: '📚', hsk: '4' },
            { chinese: '科研', pinyin: 'kē yán', translation: 'научные исследования', emoji: '🧪', hsk: '5' },
            { chinese: '科普', pinyin: 'kē pǔ', translation: 'научно-популярный', emoji: '📖', hsk: '5' },
            { chinese: '科学家', pinyin: 'kē xué jiā', translation: 'учёный', emoji: '👨‍🔬', hsk: '4' },
            { chinese: '内科', pinyin: 'nèi kē', translation: 'терапия', emoji: '🏥', hsk: '5' },
            { chinese: '外科', pinyin: 'wài kē', translation: 'хирургия', emoji: '🏥', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 园 — САД, ПАРК =====
    // ============================================================
    '园': {
        emoji: '🌳',
        meaning: 'сад, парк, место',
        words: [
            { chinese: '公园', pinyin: 'gōng yuán', translation: 'парк', emoji: '🌳', hsk: '2' },
            { chinese: '花园', pinyin: 'huā yuán', translation: 'сад', emoji: '🌸', hsk: '3' },
            { chinese: '校园', pinyin: 'xiào yuán', translation: 'кампус', emoji: '🏫', hsk: '3' },
            { chinese: '动物园', pinyin: 'dòng wù yuán', translation: 'зоопарк', emoji: '🐘', hsk: '3' },
            { chinese: '菜园', pinyin: 'cài yuán', translation: 'огород', emoji: '🥬', hsk: '5' },
            { chinese: '果园', pinyin: 'guǒ yuán', translation: 'фруктовый сад', emoji: '🍎', hsk: '5' },
            { chinese: '园区', pinyin: 'yuán qū', translation: 'промзона, парк', emoji: '🏭', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 果 — ФРУКТ, РЕЗУЛЬТАТ =====
    // ============================================================
    '果': {
        emoji: '🍎',
        meaning: 'фрукт, результат, на самом деле',
        words: [
            { chinese: '水果', pinyin: 'shuǐ guǒ', translation: 'фрукты', emoji: '🍉', hsk: '2' },
            { chinese: '苹果', pinyin: 'píng guǒ', translation: 'яблоко', emoji: '🍎', hsk: '2' },
            { chinese: '果汁', pinyin: 'guǒ zhī', translation: 'фруктовый сок', emoji: '🧃', hsk: '3' },
            { chinese: '结果', pinyin: 'jié guǒ', translation: 'результат, итог', emoji: '📊', hsk: '3' },
            { chinese: '果然', pinyin: 'guǒ rán', translation: 'действительно, как и ожидалось', emoji: '✅', hsk: '4' },
            { chinese: '如果', pinyin: 'rú guǒ', translation: 'если', emoji: '🤔', hsk: '3' },
            { chinese: '后果', pinyin: 'hòu guǒ', translation: 'последствия', emoji: '⚠️', hsk: '5' },
            { chinese: '成果', pinyin: 'chéng guǒ', translation: 'достижение, результат', emoji: '🏆', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 实 — РЕАЛЬНЫЙ, НАСТОЯЩИЙ =====
    // ============================================================
    '实': {
        emoji: '💯',
        meaning: 'реальный, настоящий, честный',
        words: [
            { chinese: '实在', pinyin: 'shí zài', translation: 'настоящий, честный', emoji: '💯', hsk: '3' },
            { chinese: '实际', pinyin: 'shí jì', translation: 'фактический, реальный', emoji: '📊', hsk: '4' },
            { chinese: '实现', pinyin: 'shí xiàn', translation: 'реализовать, осуществить', emoji: '✅', hsk: '4' },
            { chinese: '实验', pinyin: 'shí yàn', translation: 'эксперимент', emoji: '🔬', hsk: '4' },
            { chinese: '实力', pinyin: 'shí lì', translation: 'сила, мощь', emoji: '💪', hsk: '4' },
            { chinese: '实习', pinyin: 'shí xí', translation: 'стажировка, практика', emoji: '📚', hsk: '4' },
            { chinese: '实话', pinyin: 'shí huà', translation: 'правда', emoji: '🗣️', hsk: '4' },
            { chinese: '果实', pinyin: 'guǒ shí', translation: 'плод, результат', emoji: '🍎', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 验 — ПРОВЕРЯТЬ =====
    // ============================================================
    '验': {
        emoji: '🔍',
        meaning: 'проверять, осматривать, экзамен',
        words: [
            { chinese: '经验', pinyin: 'jīng yàn', translation: 'опыт', emoji: '📚', hsk: '3' },
            { chinese: '实验', pinyin: 'shí yàn', translation: 'эксперимент', emoji: '🔬', hsk: '4' },
            { chinese: '考验', pinyin: 'kǎo yàn', translation: 'испытание', emoji: '🧗', hsk: '5' },
            { chinese: '化验', pinyin: 'huà yàn', translation: 'анализ (медицинский)', emoji: '🧪', hsk: '5' },
            { chinese: '验证', pinyin: 'yàn zhèng', translation: 'подтверждать, проверять', emoji: '✅', hsk: '5' },
            { chinese: '体验', pinyin: 'tǐ yàn', translation: 'испытывать, пробовать', emoji: '🎢', hsk: '4' },
            { chinese: '体检', pinyin: 'tǐ jiǎn', translation: 'медосмотр', emoji: '🏥', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 考 — ЭКЗАМЕН =====
    // ============================================================
    '考': {
        emoji: '📝',
        meaning: 'экзамен, проверять, рассматривать',
        words: [
            { chinese: '考试', pinyin: 'kǎo shì', translation: 'экзамен', emoji: '📝', hsk: '1' },
            { chinese: '考虑', pinyin: 'kǎo lǜ', translation: 'обдумывать, рассматривать', emoji: '💭', hsk: '3' },
            { chinese: '考验', pinyin: 'kǎo yàn', translation: 'испытание', emoji: '🧗', hsk: '5' },
            { chinese: '考级', pinyin: 'kǎo jí', translation: 'сдавать экзамен на уровень', emoji: '📚', hsk: '5' },
            { chinese: '考生', pinyin: 'kǎo shēng', translation: 'экзаменующийся', emoji: '👤', hsk: '4' },
            { chinese: '考场', pinyin: 'kǎo chǎng', translation: 'экзаменационная аудитория', emoji: '🏫', hsk: '4' },
            { chinese: '思考', pinyin: 'sī kǎo', translation: 'размышлять', emoji: '🧠', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 试 — ПРОБОВАТЬ, ЭКЗАМЕН =====
    // ============================================================
    '试': {
        emoji: '🧪',
        meaning: 'пробовать, пытаться, экзамен',
        words: [
            { chinese: '考试', pinyin: 'kǎo shì', translation: 'экзамен', emoji: '📝', hsk: '1' },
            { chinese: '试验', pinyin: 'shì yàn', translation: 'испытание, эксперимент', emoji: '🧪', hsk: '5' },
            { chinese: '面试', pinyin: 'miàn shì', translation: 'собеседование', emoji: '💼', hsk: '4' },
            { chinese: '试穿', pinyin: 'shì chuān', translation: 'примерять', emoji: '👕', hsk: '4' },
            { chinese: '尝试', pinyin: 'cháng shì', translation: 'пробовать, пытаться', emoji: '💪', hsk: '4' },
            { chinese: '试试', pinyin: 'shì shì', translation: 'попробовать', emoji: '🤔', hsk: '2' },
            { chinese: '试用', pinyin: 'shì yòng', translation: 'пробное использование', emoji: '🆕', hsk: '5' },
            { chinese: '笔试', pinyin: 'bǐ shì', translation: 'письменный экзамен', emoji: '✍️', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 问 — СПРАШИВАТЬ =====
    // ============================================================
    '问': {
        emoji: '❓',
        meaning: 'спрашивать, вопрос, заботиться',
        words: [
            { chinese: '问', pinyin: 'wèn', translation: 'спрашивать', emoji: '❓', hsk: '1' },
            { chinese: '问题', pinyin: 'wèn tí', translation: 'вопрос, проблема', emoji: '🤔', hsk: '2' },
            { chinese: '问候', pinyin: 'wèn hòu', translation: 'приветствовать, передавать привет', emoji: '👋', hsk: '4' },
            { chinese: '请问', pinyin: 'qǐng wèn', translation: 'разрешите спросить', emoji: '🙋', hsk: '2' },
            { chinese: '问答', pinyin: 'wèn dá', translation: 'вопрос-ответ', emoji: '💬', hsk: '4' },
            { chinese: '追问', pinyin: 'zhuī wèn', translation: 'допрашивать, дорасспрашивать', emoji: '🔍', hsk: '5' },
            { chinese: '提问', pinyin: 'tí wèn', translation: 'задавать вопрос', emoji: '🙋', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 答 — ОТВЕЧАТЬ =====
    // ============================================================
    '答': {
        emoji: '💬',
        meaning: 'отвечать, ответ, реакция',
        words: [
            { chinese: '回答', pinyin: 'huí dá', translation: 'отвечать', emoji: '💬', hsk: '2' },
            { chinese: '答案', pinyin: 'dá àn', translation: 'ответ', emoji: '✅', hsk: '2' },
            { chinese: '问答', pinyin: 'wèn dá', translation: 'вопрос-ответ', emoji: '💬', hsk: '4' },
            { chinese: '答应', pinyin: 'dā ying', translation: 'соглашаться, обещать', emoji: '🤝', hsk: '3' },
            { chinese: '答谢', pinyin: 'dá xiè', translation: 'благодарить в ответ', emoji: '🙏', hsk: '5' },
            { chinese: '答复', pinyin: 'dá fù', translation: 'ответ, реагировать', emoji: '📨', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 找 — ИСКАТЬ =====
    // ============================================================
    '找': {
        emoji: '🔍',
        meaning: 'искать, находить, обращаться к',
        words: [
            { chinese: '找', pinyin: 'zhǎo', translation: 'искать', emoji: '🔍', hsk: '1' },
            { chinese: '找到', pinyin: 'zhǎo dào', translation: 'найти', emoji: '✅', hsk: '2' },
            { chinese: '找工作', pinyin: 'zhǎo gōng zuò', translation: 'искать работу', emoji: '💼', hsk: '3' },
            { chinese: '找零', pinyin: 'zhǎo líng', translation: 'сдача (деньги)', emoji: '💰', hsk: '4' },
            { chinese: '找麻烦', pinyin: 'zhǎo má fán', translation: 'искать проблемы', emoji: '😤', hsk: '5' },
            { chinese: '找人', pinyin: 'zhǎo rén', translation: 'искать человека', emoji: '👤', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 等 — ЖДАТЬ, РАВНЫЙ =====
    // ============================================================
    '等': {
        emoji: '⏳',
        meaning: 'ждать, равный, уровень',
        words: [
            { chinese: '等', pinyin: 'děng', translation: 'ждать', emoji: '⏳', hsk: '1' },
            { chinese: '等待', pinyin: 'děng dài', translation: 'ожидать', emoji: '⏳', hsk: '4' },
            { chinese: '等级', pinyin: 'děng jí', translation: 'уровень, класс', emoji: '📊', hsk: '4' },
            { chinese: '等于', pinyin: 'děng yú', translation: 'равняться, равнозначно', emoji: '➡️', hsk: '3' },
            { chinese: '等候', pinyin: 'děng hòu', translation: 'ожидать, дожидаться', emoji: '⏳', hsk: '4' },
            { chinese: '平等', pinyin: 'píng děng', translation: 'равенство', emoji: '⚖️', hsk: '4' },
            { chinese: '等等', pinyin: 'děng děng', translation: 'подождите, и так далее', emoji: '⏳', hsk: '2' },
        ]
    },

    // ============================================================
    // ===== 急 — ТОРОПИТЬСЯ, СРОЧНО =====
    // ============================================================
    '急': {
        emoji: '😰',
        meaning: 'спешить, срочный, беспокоиться',
        words: [
            { chinese: '着急', pinyin: 'zháo jí', translation: 'волноваться, спешить', emoji: '😰', hsk: '3' },
            { chinese: '急忙', pinyin: 'jí máng', translation: 'поспешно, быстро', emoji: '🏃', hsk: '4' },
            { chinese: '紧急', pinyin: 'jǐn jí', translation: 'срочный, аварийный', emoji: '🚨', hsk: '4' },
            { chinese: '急事', pinyin: 'jí shì', translation: 'срочное дело', emoji: '📋', hsk: '4' },
            { chinese: '急性子', pinyin: 'jí xìng zi', translation: 'нетерпеливый человек', emoji: '😤', hsk: '5' },
            { chinese: '急救', pinyin: 'jí jiù', translation: 'скорая помощь', emoji: '🚑', hsk: '4' },
            { chinese: '急用', pinyin: 'jí yòng', translation: 'срочно нужно', emoji: '⏰', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 慢 — МЕДЛЕННЫЙ =====
    // ============================================================
    '慢': {
        emoji: '🐢',
        meaning: 'медленный, не торопиться',
        words: [
            { chinese: '慢', pinyin: 'màn', translation: 'медленный', emoji: '🐢', hsk: '2' },
            { chinese: '慢慢', pinyin: 'màn màn', translation: 'медленно, постепенно', emoji: '🐢', hsk: '2' },
            { chinese: '慢走', pinyin: 'màn zǒu', translation: 'прощайте (идите не спеша)', emoji: '👋', hsk: '3' },
            { chinese: '慢性', pinyin: 'màn xìng', translation: 'хронический (о болезни)', emoji: '🩺', hsk: '5' },
            { chinese: '慢跑', pinyin: 'màn pǎo', translation: 'бег трусцой', emoji: '🏃', hsk: '4' },
            { chinese: '缓慢', pinyin: 'huǎn màn', translation: 'медленный, неторопливый', emoji: '🐢', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 总 — ВСЕГДА, ГЛАВНЫЙ =====
    // ============================================================
    '总': {
        emoji: '📊',
        meaning: 'всегда, главный, общий, итог',
        words: [
            { chinese: '总是', pinyin: 'zǒng shì', translation: 'всегда', emoji: '🔄', hsk: '2' },
            { chinese: '总统', pinyin: 'zǒng tǒng', translation: 'президент', emoji: '👨‍💼', hsk: '4' },
            { chinese: '总结', pinyin: 'zǒng jié', translation: 'подводить итоги, резюмировать', emoji: '📊', hsk: '4' },
            { chinese: '总共', pinyin: 'zǒng gòng', translation: 'всего, в общей сложности', emoji: '📊', hsk: '3' },
            { chinese: '总理', pinyin: 'zǒng lǐ', translation: 'премьер-министр', emoji: '👨‍💼', hsk: '5' },
            { chinese: '总部', pinyin: 'zǒng bù', translation: 'главный офис', emoji: '🏢', hsk: '4' },
            { chinese: '总算', pinyin: 'zǒng suàn', translation: 'наконец-то, в итоге', emoji: '✅', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 经 — ПРОХОДИТЬ, ИСПЫТЫВАТЬ =====
    // ============================================================
    '经': {
        emoji: '📚',
        meaning: 'проходить, испытывать, менструация',
        words: [
            { chinese: '经常', pinyin: 'jīng cháng', translation: 'часто', emoji: '🔄', hsk: '2' },
            { chinese: '经过', pinyin: 'jīng guò', translation: 'проходить через', emoji: '🚶', hsk: '3' },
            { chinese: '经验', pinyin: 'jīng yàn', translation: 'опыт', emoji: '📚', hsk: '3' },
            { chinese: '经理', pinyin: 'jīng lǐ', translation: 'управляющий', emoji: '🧑‍💼', hsk: '4' },
            { chinese: '经济', pinyin: 'jīng jì', translation: 'экономика', emoji: '📈', hsk: '3' },
            { chinese: '经典', pinyin: 'jīng diǎn', translation: 'классический', emoji: '⭐', hsk: '4' },
            { chinese: '经历', pinyin: 'jīng lì', translation: 'переживать, опыт', emoji: '🎢', hsk: '4' },
            { chinese: '神经', pinyin: 'shén jīng', translation: 'нерв', emoji: '🧠', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 常 — ЧАСТО, ПОСТОЯННЫЙ =====
    // ============================================================
    '常': {
        emoji: '🔄',
        meaning: 'часто, постоянный, обычный',
        words: [
            { chinese: '经常', pinyin: 'jīng cháng', translation: 'часто', emoji: '🔄', hsk: '2' },
            { chinese: '常常', pinyin: 'cháng cháng', translation: 'часто', emoji: '🔄', hsk: '2' },
            { chinese: '常识', pinyin: 'cháng shí', translation: 'здравый смысл', emoji: '💡', hsk: '4' },
            { chinese: '平常', pinyin: 'píng cháng', translation: 'обычный, обычно', emoji: '📅', hsk: '3' },
            { chinese: '正常', pinyin: 'zhèng cháng', translation: 'нормальный', emoji: '✅', hsk: '3' },
            { chinese: '日常', pinyin: 'rì cháng', translation: 'повседневный', emoji: '📅', hsk: '3' },
            { chinese: '往常', pinyin: 'wǎng cháng', translation: 'как обычно', emoji: '🔄', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 正 — ПРАВИЛЬНЫЙ, ПРЯМОЙ =====
    // ============================================================
    '正': {
        emoji: '✅',
        meaning: 'правильный, прямой, как раз',
        words: [
            { chinese: '正', pinyin: 'zhèng', translation: 'правильный, как раз', emoji: '✅', hsk: '2' },
            { chinese: '正在', pinyin: 'zhèng zài', translation: 'в данный момент', emoji: '🔄', hsk: '2' },
            { chinese: '正好', pinyin: 'zhèng hǎo', translation: 'как раз, удачно', emoji: '👍', hsk: '3' },
            { chinese: '正常', pinyin: 'zhèng cháng', translation: 'нормальный', emoji: '✅', hsk: '3' },
            { chinese: '正式', pinyin: 'zhèng shì', translation: 'официальный', emoji: '📝', hsk: '4' },
            { chinese: '正确', pinyin: 'zhèng què', translation: 'правильный, верный', emoji: '✅', hsk: '3' },
            { chinese: '真正', pinyin: 'zhēn zhèng', translation: 'настоящий, истинный', emoji: '💯', hsk: '3' },
            { chinese: '正方形', pinyin: 'zhèng fāng xíng', translation: 'квадрат', emoji: '⬜', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 真 — НАСТОЯЩИЙ, ИСТИННЫЙ =====
    // ============================================================
    '真': {
        emoji: '💯',
        meaning: 'настоящий, истинный, честный',
        words: [
            { chinese: '真', pinyin: 'zhēn', translation: 'настоящий, правда', emoji: '💯', hsk: '2' },
            { chinese: '真正', pinyin: 'zhēn zhèng', translation: 'настоящий, истинный', emoji: '💯', hsk: '3' },
            { chinese: '真实', pinyin: 'zhēn shí', translation: 'реальный, настоящий', emoji: '✅', hsk: '4' },
            { chinese: '真相', pinyin: 'zhēn xiàng', translation: 'правда, истина', emoji: '🔍', hsk: '4' },
            { chinese: '认真', pinyin: 'rèn zhēn', translation: 'серьёзный, старательный', emoji: '🧐', hsk: '2' },
            { chinese: '天真', pinyin: 'tiān zhēn', translation: 'наивный, бесхитростный', emoji: '😇', hsk: '4' },
            { chinese: '真诚', pinyin: 'zhēn chéng', translation: 'искренний', emoji: '💕', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 假 — ЛОЖНЫЙ, ВЫХОДНОЙ =====
    // ============================================================
    '假': {
        emoji: '❌',
        meaning: 'ложный, ненастоящий, каникулы',
        words: [
            { chinese: '放假', pinyin: 'fàng jià', translation: 'быть на каникулах', emoji: '🏖️', hsk: '2' },
            { chinese: '假期', pinyin: 'jià qī', translation: 'каникулы, отпуск', emoji: '🏖️', hsk: '3' },
            { chinese: '假', pinyin: 'jiǎ', translation: 'ложный, поддельный', emoji: '❌', hsk: '3' },
            { chinese: '假如', pinyin: 'jiǎ rú', translation: 'если, предположим', emoji: '🤔', hsk: '4' },
            { chinese: '假的', pinyin: 'jiǎ de', translation: 'поддельный, ненастоящий', emoji: '❌', hsk: '3' },
            { chinese: '假装', pinyin: 'jiǎ zhuāng', translation: 'притворяться', emoji: '🎭', hsk: '4' },
            { chinese: '寒假', pinyin: 'hán jià', translation: 'зимние каникулы', emoji: '❄️', hsk: '3' },
            { chinese: '暑假', pinyin: 'shǔ jià', translation: 'летние каникулы', emoji: '☀️', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 应 — ОТВЕЧАТЬ, ДОЛЖЕН =====
    // ============================================================
    '应': {
        emoji: '📢',
        meaning: 'отвечать, должен, реагировать',
        words: [
            { chinese: '应该', pinyin: 'yīng gāi', translation: 'должен, следует', emoji: '📋', hsk: '2' },
            { chinese: '答应', pinyin: 'dā ying', translation: 'соглашаться, обещать', emoji: '🤝', hsk: '3' },
            { chinese: '反应', pinyin: 'fǎn yìng', translation: 'реакция', emoji: '⚡', hsk: '4' },
            { chinese: '应用', pinyin: 'yìng yòng', translation: 'применение, приложение', emoji: '📱', hsk: '4' },
            { chinese: '适应', pinyin: 'shì yìng', translation: 'приспосабливаться', emoji: '🔄', hsk: '4' },
            { chinese: '对应', pinyin: 'duì yìng', translation: 'соответствовать', emoji: '🔗', hsk: '4' },
            { chinese: '回应', pinyin: 'huí yìng', translation: 'отвечать, реагировать', emoji: '💬', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 该 — ДОЛЖЕН, ЭТОТ =====
    // ============================================================
    '该': {
        emoji: '📋',
        meaning: 'должен, следует, этот (вопросит.)',
        words: [
            { chinese: '应该', pinyin: 'yīng gāi', translation: 'должен, следует', emoji: '📋', hsk: '2' },
            { chinese: '该', pinyin: 'gāi', translation: 'должен, следует', emoji: '📋', hsk: '2' },
            { chinese: '该死', pinyin: 'gāi sǐ', translation: 'проклятый, чтоб ему', emoji: '💀', hsk: '4' },
            { chinese: '该有', pinyin: 'gāi yǒu', translation: 'должен быть, следует иметь', emoji: '✅', hsk: '3' },
            { chinese: '该说', pinyin: 'gāi shuō', translation: 'следует сказать', emoji: '🗣️', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 别 — НЕ, ДРУГОЙ, ПРОЩАТЬСЯ =====
    // ============================================================
    '别': {
        emoji: '❌',
        meaning: 'не (приказ), другой, прощаться',
        words: [
            { chinese: '别', pinyin: 'bié', translation: 'не (приказ)', emoji: '❌', hsk: '2' },
            { chinese: '别人', pinyin: 'bié ren', translation: 'другой человек', emoji: '👤', hsk: '2' },
            { chinese: '别的', pinyin: 'bié de', translation: 'другой, иной', emoji: '🔄', hsk: '2' },
            { chinese: '别走', pinyin: 'bié zǒu', translation: 'не уходи', emoji: '🛑', hsk: '3' },
            { chinese: '区别', pinyin: 'qū bié', translation: 'различие', emoji: '🔀', hsk: '4' },
            { chinese: '告别', pinyin: 'gào bié', translation: 'прощаться', emoji: '👋', hsk: '4' },
            { chinese: '离别', pinyin: 'lí bié', translation: 'расставание', emoji: '😢', hsk: '5' },
            { chinese: '特别', pinyin: 'tè bié', translation: 'особенный, особенно', emoji: '⭐', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 特 — ОСОБЕННЫЙ =====
    // ============================================================
    '特': {
        emoji: '⭐',
        meaning: 'особенный, специальный',
        words: [
            { chinese: '特别', pinyin: 'tè bié', translation: 'особенно, специальный', emoji: '⭐', hsk: '3' },
            { chinese: '特点', pinyin: 'tè diǎn', translation: 'особенность, черта', emoji: '🔵', hsk: '3' },
            { chinese: '特色', pinyin: 'tè sè', translation: 'особенность, специфика', emoji: '🌈', hsk: '4' },
            { chinese: '特殊', pinyin: 'tè shū', translation: 'особый, специальный', emoji: '⭐', hsk: '4' },
            { chinese: '特产', pinyin: 'tè chǎn', translation: 'местный продукт', emoji: '🛍️', hsk: '4' },
            { chinese: '特务', pinyin: 'tè wù', translation: 'шпион, агент', emoji: '🕵️', hsk: '5' },
            { chinese: '特快', pinyin: 'tè kuài', translation: 'экспресс, очень быстрый', emoji: '⚡', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 所 — МЕСТО, -СТВО =====
    // ============================================================
    '所': {
        emoji: '📍',
        meaning: 'место, то, что, учреждение',
        words: [
            { chinese: '所以', pinyin: 'suǒ yǐ', translation: 'поэтому, следовательно', emoji: '➡️', hsk: '2' },
            { chinese: '所有', pinyin: 'suǒ yǒu', translation: 'все, весь', emoji: '📦', hsk: '3' },
            { chinese: '场所', pinyin: 'chǎng suǒ', translation: 'место, помещение', emoji: '📍', hsk: '4' },
            { chinese: '住所', pinyin: 'zhù suǒ', translation: 'место жительства', emoji: '🏠', hsk: '4' },
            { chinese: '研究所', pinyin: 'yán jiū suǒ', translation: 'НИИ', emoji: '🔬', hsk: '5' },
            { chinese: '厕所', pinyin: 'cè suǒ', translation: 'туалет', emoji: '🚽', hsk: '2' },
            { chinese: '无所谓', pinyin: 'wú suǒ wèi', translation: 'всё равно, не важно', emoji: '🤷', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 以 — С ПОМОЩЬЮ, ЧТОБЫ =====
    // ============================================================
    '以': {
        emoji: '📌',
        meaning: 'использовать, чтобы, начиная с',
        words: [
            { chinese: '可以', pinyin: 'kě yǐ', translation: 'можно, мочь', emoji: '✅', hsk: '1' },
            { chinese: '以为', pinyin: 'yǐ wéi', translation: 'считать, ошибочно полагать', emoji: '💭', hsk: '3' },
            { chinese: '以上', pinyin: 'yǐ shàng', translation: 'выше, сверх', emoji: '⬆️', hsk: '3' },
            { chinese: '以下', pinyin: 'yǐ xià', translation: 'ниже, менее', emoji: '⬇️', hsk: '3' },
            { chinese: '以前', pinyin: 'yǐ qián', translation: 'раньше, до', emoji: '⏪', hsk: '2' },
            { chinese: '以后', pinyin: 'yǐ hòu', translation: 'потом, после', emoji: '⏩', hsk: '2' },
            { chinese: '所以', pinyin: 'suǒ yǐ', translation: 'поэтому', emoji: '➡️', hsk: '2' },
            { chinese: '以及', pinyin: 'yǐ jí', translation: 'а также, и', emoji: '🔗', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 为 — ДЛЯ, ДЕЛАТЬ =====
    // ============================================================
    '为': {
        emoji: '🎯',
        meaning: 'для, ради, делать, быть',
        words: [
            { chinese: '因为', pinyin: 'yīn wèi', translation: 'потому что', emoji: '📌', hsk: '2' },
            { chinese: '为什么', pinyin: 'wèi shén me', translation: 'почему', emoji: '❓', hsk: '1' },
            { chinese: '为了', pinyin: 'wèi le', translation: 'для, ради', emoji: '🎯', hsk: '3' },
            { chinese: '成为', pinyin: 'chéng wéi', translation: 'становиться', emoji: '📈', hsk: '3' },
            { chinese: '行为', pinyin: 'xíng wéi', translation: 'поведение', emoji: '🔄', hsk: '4' },
            { chinese: '为人', pinyin: 'wéi rén', translation: 'характер, личность', emoji: '👤', hsk: '4' },
            { chinese: '以为', pinyin: 'yǐ wéi', translation: 'думать, полагать', emoji: '💭', hsk: '3' },
            { chinese: '作为', pinyin: 'zuò wéi', translation: 'в качестве, поступок', emoji: '📋', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 因 — ПРИЧИНА, ПОТОМУ ЧТО =====
    // ============================================================
    '因': {
        emoji: '📌',
        meaning: 'причина, из-за, потому что',
        words: [
            { chinese: '因为', pinyin: 'yīn wèi', translation: 'потому что', emoji: '📌', hsk: '2' },
            { chinese: '原因', pinyin: 'yuán yīn', translation: 'причина', emoji: '🔍', hsk: '3' },
            { chinese: '因此', pinyin: 'yīn cǐ', translation: 'следовательно, поэтому', emoji: '➡️', hsk: '4' },
            { chinese: '因素', pinyin: 'yīn sù', translation: 'фактор', emoji: '⚙️', hsk: '4' },
            { chinese: '起因', pinyin: 'qǐ yīn', translation: 'происхождение, причина', emoji: '📌', hsk: '5' },
            { chinese: '因爱', pinyin: 'yīn ài', translation: 'из любви', emoji: '❤️', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 件 — ВЕЩЬ, ШТУКА (счётное слово) =====
    // ============================================================
    '件': {
        emoji: '📦',
        meaning: 'вещь, предмет, дело (сч. слово)',
        words: [
            { chinese: '一件衣服', pinyin: 'yī jiàn yī fu', translation: 'одна вещь одежды', emoji: '👕', hsk: '3' },
            { chinese: '事情', pinyin: 'shì qing', translation: 'дело, событие', emoji: '📋', hsk: '1' },
            { chinese: '文件', pinyin: 'wén jiàn', translation: 'документ, файл', emoji: '📄', hsk: '4' },
            { chinese: '案件', pinyin: 'àn jiàn', translation: 'дело (юридическое)', emoji: '⚖️', hsk: '5' },
            { chinese: '邮件', pinyin: 'yóu jiàn', translation: 'письмо, почта', emoji: '✉️', hsk: '4' },
            { chinese: '一件礼物', pinyin: 'yī jiàn lǐ wù', translation: 'один подарок', emoji: '🎁', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 息 — ВЗДОХ, НОВОСТЬ =====
    // ============================================================
    '息': {
        emoji: '💨',
        meaning: 'вздох, новость, проценты',
        words: [
            { chinese: '信息', pinyin: 'xìn xī', translation: 'информация', emoji: '📨', hsk: '3' },
            { chinese: '消息', pinyin: 'xiāo xi', translation: 'новость', emoji: '📢', hsk: '4' },
            { chinese: '休息', pinyin: 'xiū xi', translation: 'отдыхать', emoji: '😌', hsk: '2' },
            { chinese: '利息', pinyin: 'lì xī', translation: 'проценты (банковские)', emoji: '💰', hsk: '5' },
            { chinese: '平息', pinyin: 'píng xī', translation: 'успокаиваться', emoji: '😌', hsk: '6' },
            { chinese: '叹息', pinyin: 'tàn xī', translation: 'вздыхать', emoji: '😮‍💨', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 休 — ОТДЫХАТЬ =====
    // ============================================================
    '休': {
        emoji: '😌',
        meaning: 'отдыхать, прекращать',
        words: [
            { chinese: '休息', pinyin: 'xiū xi', translation: 'отдыхать', emoji: '😌', hsk: '2' },
            { chinese: '休假', pinyin: 'xiū jià', translation: 'быть в отпуске', emoji: '🏖️', hsk: '3' },
            { chinese: '休学', pinyin: 'xiū xué', translation: 'взять академический отпуск', emoji: '📚', hsk: '5' },
            { chinese: '休止', pinyin: 'xiū zhǐ', translation: 'останавливаться, пауза', emoji: '⏸️', hsk: '6' },
            { chinese: '退休', pinyin: 'tuì xiū', translation: 'выйти на пенсию', emoji: '👴', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 停 — ОСТАНАВЛИВАТЬСЯ =====
    // ============================================================
    '停': {
        emoji: '🛑',
        meaning: 'останавливаться, стоять, парковаться',
        words: [
            { chinese: '停车', pinyin: 'tíng chē', translation: 'парковаться, остановить машину', emoji: '🅿️', hsk: '3' },
            { chinese: '停止', pinyin: 'tíng zhǐ', translation: 'останавливаться, прекращать', emoji: '🛑', hsk: '4' },
            { chinese: '停水', pinyin: 'tíng shuǐ', translation: 'отключение воды', emoji: '💧', hsk: '4' },
            { chinese: '停电', pinyin: 'tíng diàn', translation: 'отключение электричества', emoji: '⚡', hsk: '4' },
            { chinese: '停车场', pinyin: 'tíng chē chǎng', translation: 'парковка', emoji: '🅿️', hsk: '4' },
            { chinese: '停住', pinyin: 'tíng zhù', translation: 'остановиться', emoji: '🧍', hsk: '5' },
            { chinese: '停留', pinyin: 'tíng liú', translation: 'остановиться, задержаться', emoji: '⏳', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 始 — НАЧИНАТЬ =====
    // ============================================================
    '始': {
        emoji: '▶️',
        meaning: 'начинать, начало, впервые',
        words: [
            { chinese: '开始', pinyin: 'kāi shǐ', translation: 'начинать', emoji: '▶️', hsk: '1' },
            { chinese: '最初', pinyin: 'zuì chū', translation: 'в самом начале', emoji: '1️⃣', hsk: '4' },
            { chinese: '始发', pinyin: 'shǐ fā', translation: 'отправляться (о поезде)', emoji: '🚂', hsk: '5' },
            { chinese: '始终', pinyin: 'shǐ zhōng', translation: 'всегда, от начала до конца', emoji: '🔄', hsk: '4' },
            { chinese: '原始', pinyin: 'yuán shǐ', translation: 'первоначальный, первобытный', emoji: '🦴', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 终 — КОНЕЦ =====
    // ============================================================
    '终': {
        emoji: '🏁',
        meaning: 'конец, наконец, смерть',
        words: [
            { chinese: '终于', pinyin: 'zhōng yú', translation: 'наконец, в конце концов', emoji: '🏁', hsk: '3' },
            { chinese: '终点', pinyin: 'zhōng diǎn', translation: 'конечная точка', emoji: '🏁', hsk: '4' },
            { chinese: '最终', pinyin: 'zuì zhōng', translation: 'окончательный, конечный', emoji: '🏁', hsk: '4' },
            { chinese: '终身', pinyin: 'zhōng shēn', translation: 'всю жизнь', emoji: '⏳', hsk: '4' },
            { chinese: '终止', pinyin: 'zhōng zhǐ', translation: 'прекращать, заканчивать', emoji: '🛑', hsk: '5' },
            { chinese: '始终', pinyin: 'shǐ zhōng', translation: 'всегда, с начала до конца', emoji: '🔄', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 表 — ТАБЛИЦА, ВЫРАЖАТЬ =====
    // ============================================================
    '表': {
        emoji: '📊',
        meaning: 'таблица, выражение, показывать',
        words: [
            { chinese: '手表', pinyin: 'shǒu biǎo', translation: 'часы', emoji: '⌚', hsk: '2' },
            { chinese: '表示', pinyin: 'biǎo shì', translation: 'выражать, показывать', emoji: '💬', hsk: '3' },
            { chinese: '表现', pinyin: 'biǎo xiàn', translation: 'проявлять, представление', emoji: '🎭', hsk: '4' },
            { chinese: '表演', pinyin: 'biǎo yǎn', translation: 'выступать, представление', emoji: '🎤', hsk: '3' },
            { chinese: '表格', pinyin: 'biǎo gé', translation: 'таблица, анкета', emoji: '📊', hsk: '4' },
            { chinese: '表情', pinyin: 'biǎo qíng', translation: 'выражение лица', emoji: '😊', hsk: '4' },
            { chinese: '表面', pinyin: 'biǎo miàn', translation: 'поверхность', emoji: '📄', hsk: '3' },
            { chinese: '表白', pinyin: 'biǎo bái', translation: 'объясняться в любви', emoji: '💕', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 示 — ПОКАЗЫВАТЬ =====
    // ============================================================
    '示': {
        emoji: '👆',
        meaning: 'показывать, указывать, демонстрация',
        words: [
            { chinese: '表示', pinyin: 'biǎo shì', translation: 'выражать, показывать', emoji: '💬', hsk: '3' },
            { chinese: '指示', pinyin: 'zhǐ shì', translation: 'указывать, инструкция', emoji: '📋', hsk: '4' },
            { chinese: '显示', pinyin: 'xiǎn shì', translation: 'показывать, отображать', emoji: '🖥️', hsk: '4' },
            { chinese: '提示', pinyin: 'tí shì', translation: 'подсказка, напоминание', emoji: '💡', hsk: '4' },
            { chinese: '示爱', pinyin: 'shì ài', translation: 'проявлять любовь', emoji: '❤️', hsk: '5' },
            { chinese: '告示', pinyin: 'gào shì', translation: 'объявление', emoji: '📢', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 解 — РЕШАТЬ, ПОНИМАТЬ =====
    // ============================================================
    '解': {
        emoji: '🧩',
        meaning: 'решать, понимать, разъяснять',
        words: [
            { chinese: '解决', pinyin: 'jiě jué', translation: 'решать (проблему)', emoji: '✅', hsk: '3' },
            { chinese: '理解', pinyin: 'lǐ jiě', translation: 'понимать', emoji: '💡', hsk: '3' },
            { chinese: '了解', pinyin: 'liǎo jiě', translation: 'знать, понимать', emoji: '🧠', hsk: '3' },
            { chinese: '解放', pinyin: 'jiě fàng', translation: 'освобождать', emoji: '🕊️', hsk: '5' },
            { chinese: '解释', pinyin: 'jiě shì', translation: 'объяснять, толковать', emoji: '📝', hsk: '4' },
            { chinese: '解散', pinyin: 'jiě sàn', translation: 'распускать, расходиться', emoji: '👋', hsk: '5' },
            { chinese: '讲解', pinyin: 'jiǎng jiě', translation: 'разъяснять, комментировать', emoji: '🗣️', hsk: '5' },
            { chinese: '解答', pinyin: 'jiě dá', translation: 'отвечать (на вопрос)', emoji: '💬', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 决 — РЕШАТЬ, ОПРЕДЕЛЯТЬ =====
    // ============================================================
    '决': {
        emoji: '⚖️',
        meaning: 'решать, определять, обязательно',
        words: [
            { chinese: '决定', pinyin: 'jué dìng', translation: 'решать, решение', emoji: '⚖️', hsk: '3' },
            { chinese: '解决', pinyin: 'jiě jué', translation: 'решать (проблему)', emoji: '✅', hsk: '3' },
            { chinese: '决心', pinyin: 'jué xīn', translation: 'решимость, твёрдое решение', emoji: '💪', hsk: '4' },
            { chinese: '坚决', pinyin: 'jiān jué', translation: 'твёрдый, решительный', emoji: '💪', hsk: '5' },
            { chinese: '决赛', pinyin: 'jué sài', translation: 'финал', emoji: '🏆', hsk: '5' },
            { chinese: '绝望', pinyin: 'jué wàng', translation: 'отчаяние', emoji: '😩', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 定 — ОПРЕДЕЛЯТЬ, СТАБИЛЬНЫЙ =====
    // ============================================================
    '定': {
        emoji: '📌',
        meaning: 'определять, стабильный, установленный',
        words: [
            { chinese: '一定', pinyin: 'yī dìng', translation: 'обязательно, определённо', emoji: '💯', hsk: '2' },
            { chinese: '决定', pinyin: 'jué dìng', translation: 'решать, решение', emoji: '⚖️', hsk: '3' },
            { chinese: '定义', pinyin: 'dìng yì', translation: 'определение', emoji: '📖', hsk: '4' },
            { chinese: '稳定', pinyin: 'wěn dìng', translation: 'стабильный', emoji: '📊', hsk: '4' },
            { chinese: '固定', pinyin: 'gù dìng', translation: 'фиксированный, постоянный', emoji: '🔒', hsk: '4' },
            { chinese: '定时', pinyin: 'dìng shí', translation: 'в установленное время', emoji: '⏰', hsk: '4' },
            { chinese: '约定', pinyin: 'yuē dìng', translation: 'договорённость', emoji: '🤝', hsk: '4' },
            { chinese: '规定', pinyin: 'guī dìng', translation: 'правило, предписание', emoji: '📋', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 规 — ПРАВИЛО, РЕГУЛИРОВАТЬ =====
    // ============================================================
    '规': {
        emoji: '📋',
        meaning: 'правило, регулировать, планировать',
        words: [
            { chinese: '规定', pinyin: 'guī dìng', translation: 'правило, предписание', emoji: '📋', hsk: '4' },
            { chinese: '规律', pinyin: 'guī lǜ', translation: 'закономерность', emoji: '🔄', hsk: '4' },
            { chinese: '规模', pinyin: 'guī mó', translation: 'масштаб, размер', emoji: '📊', hsk: '4' },
            { chinese: '规划', pinyin: 'guī huà', translation: 'планировать, план', emoji: '📝', hsk: '5' },
            { chinese: '规范', pinyin: 'guī fàn', translation: 'норма, стандарт', emoji: '📐', hsk: '5' },
            { chinese: '常规', pinyin: 'cháng guī', translation: 'обычный, стандартный', emoji: '🔄', hsk: '5' },
            { chinese: '规则', pinyin: 'guī zé', translation: 'правило', emoji: '📋', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 则 — ПРАВИЛО =====
    // ============================================================
    '则': {
        emoji: '📋',
        meaning: 'правило, принцип, то (в сложных словах)',
        words: [
            { chinese: '规则', pinyin: 'guī zé', translation: 'правило', emoji: '📋', hsk: '4' },
            { chinese: '原则', pinyin: 'yuán zé', translation: 'принцип', emoji: '⚖️', hsk: '4' },
            { chinese: '准则', pinyin: 'zhǔn zé', translation: 'норма, критерий', emoji: '📐', hsk: '5' },
            { chinese: '否则', pinyin: 'fǒu zé', translation: 'иначе, в противном случае', emoji: '⚠️', hsk: '4' },
            { chinese: '细则', pinyin: 'xì zé', translation: 'детальные правила', emoji: '📋', hsk: '6' },
        ]
    },

    // ============================================================
    // ===== 求 — ПРОСИТЬ, ИСКАТЬ =====
    // ============================================================
    '求': {
        emoji: '🙏',
        meaning: 'просить, искать, требовать',
        words: [
            { chinese: '要求', pinyin: 'yāo qiú', translation: 'требовать, требование', emoji: '📋', hsk: '3' },
            { chinese: '请求', pinyin: 'qǐng qiú', translation: 'просить, просьба', emoji: '🙏', hsk: '4' },
            { chinese: '求助', pinyin: 'qiú zhù', translation: 'просить о помощи', emoji: '🆘', hsk: '4' },
            { chinese: '追求', pinyin: 'zhuī qiú', translation: 'стремиться, добиваться', emoji: '🏃', hsk: '5' },
            { chinese: '求学', pinyin: 'qiú xué', translation: 'учиться, получать образование', emoji: '📚', hsk: '5' },
            { chinese: '求职', pinyin: 'qiú zhí', translation: 'искать работу', emoji: '💼', hsk: '4' },
            { chinese: '求婚', pinyin: 'qiú hūn', translation: 'делать предложение', emoji: '💍', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 助 — ПОМОГАТЬ =====
    // ============================================================
    '助': {
        emoji: '🤝',
        meaning: 'помогать, помощь, поддерживать',
        words: [
            { chinese: '帮助', pinyin: 'bāng zhù', translation: 'помогать', emoji: '🤝', hsk: '1' },
            { chinese: '助手', pinyin: 'zhù shǒu', translation: 'помощник', emoji: '👤', hsk: '4' },
            { chinese: '助理', pinyin: 'zhù lǐ', translation: 'ассистент', emoji: '🧑‍💼', hsk: '4' },
            { chinese: '互助', pinyin: 'hù zhù', translation: 'взаимопомощь', emoji: '🤝', hsk: '5' },
            { chinese: '援助', pinyin: 'yuán zhù', translation: 'помощь, поддержка', emoji: '🆘', hsk: '5' },
            { chinese: '自助', pinyin: 'zì zhù', translation: 'самообслуживание', emoji: '🛒', hsk: '5' },
            { chinese: '助教', pinyin: 'zhù jiào', translation: 'ассистент преподавателя', emoji: '👨‍🏫', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 帮 — ПОМОГАТЬ, БАНДА =====
    // ============================================================
    '帮': {
        emoji: '🤝',
        meaning: 'помогать, группа, банда',
        words: [
            { chinese: '帮助', pinyin: 'bāng zhù', translation: 'помогать', emoji: '🤝', hsk: '1' },
            { chinese: '帮忙', pinyin: 'bāng máng', translation: 'помогать, делать одолжение', emoji: '💪', hsk: '2' },
            { chinese: '帮手', pinyin: 'bāng shǒu', translation: 'помощник', emoji: '👤', hsk: '4' },
            { chinese: '帮派', pinyin: 'bāng pài', translation: 'банда, группировка', emoji: '👥', hsk: '6' },
            { chinese: '帮主', pinyin: 'bāng zhǔ', translation: 'главарь банды', emoji: '👨‍💼', hsk: '6' },
            { chinese: '帮人', pinyin: 'bāng rén', translation: 'помогать людям', emoji: '🤝', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 忙 — ЗАНЯТОЙ, СПЕШИТЬ =====
    // ============================================================
    '忙': {
        emoji: '😰',
        meaning: 'занятой, спешить, торопиться',
        words: [
            { chinese: '忙', pinyin: 'máng', translation: 'занятой', emoji: '😰', hsk: '2' },
            { chinese: '帮忙', pinyin: 'bāng máng', translation: 'помогать, делать одолжение', emoji: '💪', hsk: '2' },
            { chinese: '忙碌', pinyin: 'máng lù', translation: 'занятой, хлопотливый', emoji: '🏃', hsk: '4' },
            { chinese: '忙人', pinyin: 'máng rén', translation: 'занятой человек', emoji: '👤', hsk: '3' },
            { chinese: '赶忙', pinyin: 'gǎn máng', translation: 'поспешно, торопливо', emoji: '🏃', hsk: '4' },
            { chinese: '匆忙', pinyin: 'cōng máng', translation: 'поспешный, торопливый', emoji: '🏃', hsk: '4' },
            { chinese: '繁忙', pinyin: 'fán máng', translation: 'очень занятой', emoji: '😰', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 思 — ДУМАТЬ, МЫСЛИТЬ =====
    // ============================================================
    '思': {
        emoji: '🧠',
        meaning: 'думать, мыслить, размышлять',
        words: [
            { chinese: '思想', pinyin: 'sī xiǎng', translation: 'мысль, идеология', emoji: '💭', hsk: '4' },
            { chinese: '思考', pinyin: 'sī kǎo', translation: 'размышлять', emoji: '🧠', hsk: '4' },
            { chinese: '思维', pinyin: 'sī wéi', translation: 'мышление', emoji: '🧠', hsk: '5' },
            { chinese: '意思', pinyin: 'yì si', translation: 'значение, смысл', emoji: '📖', hsk: '2' },
            { chinese: '思乡', pinyin: 'sī xiāng', translation: 'тосковать по родине', emoji: '🏡', hsk: '5' },
            { chinese: '思念', pinyin: 'sī niàn', translation: 'скучать, вспоминать', emoji: '😢', hsk: '4' },
            { chinese: '深思', pinyin: 'shēn sī', translation: 'глубоко задуматься', emoji: '🤔', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 念 — ЧИТАТЬ, ВСПОМИНАТЬ =====
    // ============================================================
    '念': {
        emoji: '🧠',
        meaning: 'читать, вспоминать, мысль',
        words: [
            { chinese: '念', pinyin: 'niàn', translation: 'читать, вспоминать', emoji: '🧠', hsk: '3' },
            { chinese: '想念', pinyin: 'xiǎng niàn', translation: 'скучать, тосковать', emoji: '😢', hsk: '3' },
            { chinese: '念头', pinyin: 'niàn tou', translation: 'мысль, идея', emoji: '💭', hsk: '5' },
            { chinese: '念书', pinyin: 'niàn shū', translation: 'учиться, читать книгу', emoji: '📖', hsk: '3' },
            { chinese: '纪念', pinyin: 'jì niàn', translation: 'помнить, отмечать', emoji: '📅', hsk: '4' },
            { chinese: '思念', pinyin: 'sī niàn', translation: 'тосковать, скучать', emoji: '😢', hsk: '4' },
            { chinese: '概念', pinyin: 'gài niàn', translation: 'понятие, концепция', emoji: '💡', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 久 — ДОЛГО =====
    // ============================================================
    '久': {
        emoji: '⏳',
        meaning: 'долго, давно, длительный',
        words: [
            { chinese: '好久', pinyin: 'hǎo jiǔ', translation: 'давно, долго', emoji: '⏳', hsk: '2' },
            { chinese: '多久', pinyin: 'duō jiǔ', translation: 'как долго', emoji: '⏳', hsk: '2' },
            { chinese: '永久', pinyin: 'yǒng jiǔ', translation: 'навсегда, вечный', emoji: '♾️', hsk: '4' },
            { chinese: '悠久', pinyin: 'yōu jiǔ', translation: 'долгий, давний', emoji: '⏳', hsk: '5' },
            { chinese: '久别', pinyin: 'jiǔ bié', translation: 'долгая разлука', emoji: '😢', hsk: '5' },
            { chinese: '久而久之', pinyin: 'jiǔ ér jiǔ zhī', translation: 'со временем', emoji: '🔄', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 永 — ВЕЧНЫЙ =====
    // ============================================================
    '永': {
        emoji: '♾️',
        meaning: 'вечный, всегда, навсегда',
        words: [
            { chinese: '永远', pinyin: 'yǒng yuǎn', translation: 'всегда, навсегда', emoji: '♾️', hsk: '3' },
            { chinese: '永久', pinyin: 'yǒng jiǔ', translation: 'навсегда, вечный', emoji: '♾️', hsk: '4' },
            { chinese: '永恒', pinyin: 'yǒng héng', translation: 'вечность, вечный', emoji: '♾️', hsk: '5' },
            { chinese: '永别', pinyin: 'yǒng bié', translation: 'прощай навсегда', emoji: '😢', hsk: '5' },
            { chinese: '永生', pinyin: 'yǒng shēng', translation: 'бессмертие', emoji: '🌟', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 远 — ДАЛЁКИЙ =====
    // ============================================================
    '远': {
        emoji: '🌍',
        meaning: 'далёкий, далеко, отдалённый',
        words: [
            { chinese: '远', pinyin: 'yuǎn', translation: 'далёкий', emoji: '🌍', hsk: '2' },
            { chinese: '远点', pinyin: 'yuǎn diǎn', translation: 'подальше', emoji: '📏', hsk: '3' },
            { chinese: '永远', pinyin: 'yǒng yuǎn', translation: 'всегда, навсегда', emoji: '♾️', hsk: '3' },
            { chinese: '远处', pinyin: 'yuǎn chù', translation: 'вдалеке', emoji: '🌍', hsk: '3' },
            { chinese: '远方', pinyin: 'yuǎn fāng', translation: 'дальние края', emoji: '✈️', hsk: '4' },
            { chinese: '远路', pinyin: 'yuǎn lù', translation: 'дальняя дорога', emoji: '🛣️', hsk: '5' },
            { chinese: '远近', pinyin: 'yuǎn jìn', translation: 'близко и далеко', emoji: '📏', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 近 — БЛИЗКИЙ =====
    // ============================================================
    '近': {
        emoji: '📏',
        meaning: 'близкий, недавний, почти',
        words: [
            { chinese: '近', pinyin: 'jìn', translation: 'близкий, недавний', emoji: '📏', hsk: '2' },
            { chinese: '最近', pinyin: 'zuì jìn', translation: 'недавно, в последнее время', emoji: '🆕', hsk: '2' },
            { chinese: '附近', pinyin: 'fù jìn', translation: 'поблизости, рядом', emoji: '📍', hsk: '3' },
            { chinese: '近处', pinyin: 'jìn chù', translation: 'поблизости', emoji: '📍', hsk: '4' },
            { chinese: '近乎', pinyin: 'jìn hū', translation: 'почти', emoji: '⚠️', hsk: '5' },
            { chinese: '亲近', pinyin: 'qīn jìn', translation: 'близкий, сближаться', emoji: '💕', hsk: '5' },
            { chinese: '远近', pinyin: 'yuǎn jìn', translation: 'близко и далеко', emoji: '📏', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 离 — ПОКИДАТЬ, ОТ =====
    // ============================================================
    '离': {
        emoji: '🚶',
        meaning: 'покидать, уходить, от (расстояние)',
        words: [
            { chinese: '离开', pinyin: 'lí kāi', translation: 'уйти, покинуть', emoji: '🚶', hsk: '2' },
            { chinese: '距离', pinyin: 'jù lí', translation: 'расстояние', emoji: '📏', hsk: '4' },
            { chinese: '离婚', pinyin: 'lí hūn', translation: 'развод', emoji: '💔', hsk: '4' },
            { chinese: '离别', pinyin: 'lí bié', translation: 'расставание', emoji: '😢', hsk: '5' },
            { chinese: '离任', pinyin: 'lí rèn', translation: 'уйти с должности', emoji: '👋', hsk: '5' },
            { chinese: '离家', pinyin: 'lí jiā', translation: 'уйти из дома', emoji: '🏠', hsk: '3' },
            { chinese: '离校', pinyin: 'lí xiào', translation: 'покинуть школу', emoji: '🏫', hsk: '4' },
        ]
    },

    // ============================================================
    // ===== 再 — СНОВА, ЕЩЁ =====
    // ============================================================
    '再': {
        emoji: '🔄',
        meaning: 'снова, ещё, тогда (в будущем)',
        words: [
            { chinese: '再见', pinyin: 'zài jiàn', translation: 'до свидания', emoji: '👋', hsk: '1' },
            { chinese: '再次', pinyin: 'zài cì', translation: 'снова, ещё раз', emoji: '🔄', hsk: '3' },
            { chinese: '再会', pinyin: 'zài huì', translation: 'до встречи', emoji: '👋', hsk: '4' },
            { chinese: '再好', pinyin: 'zài hǎo', translation: 'лучше, ещё лучше', emoji: '⭐', hsk: '3' },
            { chinese: '再问', pinyin: 'zài wèn', translation: 'переспросить', emoji: '❓', hsk: '4' },
            { chinese: '再学', pinyin: 'zài xué', translation: 'учить заново', emoji: '📚', hsk: '4' },
            { chinese: '再说', pinyin: 'zài shuō', translation: 'поговорить ещё, потом', emoji: '🗣️', hsk: '3' },
        ]
    },

    // ============================================================
    // ===== 次 — РАЗ, ПОРЯДОК =====
    // ============================================================
    '次': {
        emoji: '🔢',
        meaning: 'раз, порядок, следующий',
        words: [
            { chinese: '第一次', pinyin: 'dì yī cì', translation: 'в первый раз', emoji: '1️⃣', hsk: '2' },
            { chinese: '下次', pinyin: 'xià cì', translation: 'в следующий раз', emoji: '⏩', hsk: '2' },
            { chinese: '再次', pinyin: 'zài cì', translation: 'снова, ещё раз', emoji: '🔄', hsk: '3' },
            { chinese: '这次', pinyin: 'zhè cì', translation: 'на этот раз', emoji: '📌', hsk: '2' },
            { chinese: '次数', pinyin: 'cì shù', translation: 'количество раз', emoji: '🔢', hsk: '4' },
            { chinese: '次序', pinyin: 'cì xù', translation: 'порядок, очерёдность', emoji: '📋', hsk: '5' },
            { chinese: '次要', pinyin: 'cì yào', translation: 'второстепенный', emoji: '📌', hsk: '5' },
        ]
    },

    // ============================================================
    // ===== 每 — КАЖДЫЙ =====
    // ============================================================
    '每': {
        emoji: '📅',
        meaning: 'каждый, каждая, каждое',
        words: [
            { chinese: '每天', pinyin: 'měi tiān', translation: 'каждый день', emoji: '📅', hsk: '1' },
            { chinese: '每月', pinyin: 'měi yuè', translation: 'каждый месяц', emoji: '📅', hsk: '3' },
            { chinese: '每年', pinyin: 'měi nián', translation: 'каждый год', emoji: '📅', hsk: '2' },
            { chinese: '每人', pinyin: 'měi rén', translation: 'каждый человек', emoji: '👤', hsk: '2' },
            { chinese: '每次', pinyin: 'měi cì', translation: 'каждый раз', emoji: '🔢', hsk: '2' },
            { chinese: '每当', pinyin: 'měi dāng', translation: 'каждый раз, когда', emoji: '🔄', hsk: '4' },
            { chinese: '每个', pinyin: 'měi ge', translation: 'каждый (сч. слово)', emoji: '📌', hsk: '1' },
        ]
    },

    // ============================================================
    // ===== 过 — ПРОХОДИТЬ, -Л =====
    // ============================================================
    '过': {
        emoji: '⏭️',
        meaning: 'проходить, суффикс -л (опыт), слишком',
        words: [
            { chinese: '过去', pinyin: 'guò qù', translation: 'прошлое, проходить', emoji: '⏪', hsk: '2' },
            { chinese: '经过', pinyin: 'jīng guò', translation: 'проходить через', emoji: '🚶', hsk: '3' },
            { chinese: '过程', pinyin: 'guò chéng', translation: 'процесс', emoji: '🔄', hsk: '4' },
            { chinese: '难过', pinyin: 'nán guò', translation: 'грустный, трудный', emoji: '😢', hsk: '2' },
            { chinese: '通过', pinyin: 'tōng guò', translation: 'проходить, через', emoji: '✅', hsk: '3' },
            { chinese: '超过', pinyin: 'chāo guò', translation: 'превышать', emoji: '📈', hsk: '4' },
        ]
    },

}; // КОНЕЦ WORDS_BY_KEY
// ============================================================
// ===== ПОСЛЕДОВАТЕЛЬНОСТЬ ЛИНИЙ ДЛЯ ВСЕХ КЛЮЧЕЙ =====
// ============================================================

const KEY_STROKES = {
    // ============================================================
    // ===== ПРОСТЫЕ КЛЮЧИ (1-3 черты) =====
    // ============================================================
    
    '一': {
        strokes: [[{x:0.1, y:0.5}, {x:0.9, y:0.5}]],
        info: 'горизонталь'
    },
    '丨': {
        strokes: [[{x:0.5, y:0.1}, {x:0.5, y:0.9}]],
        info: 'вертикаль'
    },
    '丿': {
        strokes: [[{x:0.5, y:0.1}, {x:0.9, y:0.9}]],
        info: 'диагональ вправо'
    },
    '丶': {
        strokes: [[{x:0.5, y:0.2}, {x:0.7, y:0.6}]],
        info: 'точка'
    },
    '十': {
        strokes: [
            [{x:0.5, y:0.1}, {x:0.5, y:0.9}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}]
        ],
        info: 'вертикаль + горизонталь'
    },
    '人': {
        strokes: [
            [{x:0.1, y:0.9}, {x:0.5, y:0.1}],
            [{x:0.5, y:0.1}, {x:0.9, y:0.9}]
        ],
        info: '2 диагонали'
    },
    '大': {
        strokes: [
            [{x:0.1, y:0.9}, {x:0.5, y:0.1}],
            [{x:0.5, y:0.1}, {x:0.9, y:0.9}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}]
        ],
        info: '2 диагонали + горизонталь'
    },
    '小': {
        strokes: [
            [{x:0.5, y:0.1}, {x:0.5, y:0.9}],
            [{x:0.2, y:0.4}, {x:0.2, y:0.9}],
            [{x:0.8, y:0.4}, {x:0.8, y:0.9}]
        ],
        info: 'вертикаль + 2 точки'
    },
    '上': {
        strokes: [
            [{x:0.5, y:0.1}, {x:0.5, y:0.9}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.1, y:0.35}, {x:0.9, y:0.35}]
        ],
        info: 'вертикаль + 2 горизонтали'
    },
    '下': {
        strokes: [
            [{x:0.5, y:0.1}, {x:0.5, y:0.9}],
            [{x:0.1, y:0.25}, {x:0.9, y:0.25}],
            [{x:0.2, y:0.6}, {x:0.9, y:0.9}]
        ],
        info: 'вертикаль + горизонталь + диагональ'
    },
    '中': {
        strokes: [
            [{x:0.5, y:0.1}, {x:0.5, y:0.9}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}]
        ],
        info: 'вертикаль + 3 горизонтали'
    },
    '山': {
        strokes: [
            [{x:0.5, y:0.1}, {x:0.5, y:0.7}],
            [{x:0.1, y:0.7}, {x:0.5, y:0.1}],
            [{x:0.5, y:0.1}, {x:0.9, y:0.7}]
        ],
        info: '3 вертикали'
    },
    '口': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.9, y:0.1}, {x:0.9, y:0.9}],
            [{x:0.9, y:0.9}, {x:0.1, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.1, y:0.1}]
        ],
        info: 'квадрат'
    },
    '日': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.9, y:0.1}, {x:0.9, y:0.9}],
            [{x:0.9, y:0.9}, {x:0.1, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.1, y:0.1}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}]
        ],
        info: 'квадрат + горизонталь'
    },
    '月': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.1, y:0.9}],
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.9, y:0.1}, {x:0.9, y:0.9}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.8}, {x:0.9, y:0.8}]
        ],
        info: 'луна'
    },
    '水': {
        strokes: [
            [{x:0.5, y:0.1}, {x:0.5, y:0.9}],
            [{x:0.1, y:0.2}, {x:0.5, y:0.5}],
            [{x:0.5, y:0.5}, {x:0.9, y:0.2}],
            [{x:0.5, y:0.5}, {x:0.7, y:0.9}]
        ],
        info: 'вертикаль + 3 диагонали'
    },
    '火': {
        strokes: [
            [{x:0.5, y:0.1}, {x:0.5, y:0.5}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.7}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.3}],
            [{x:0.5, y:0.5}, {x:0.5, y:0.9}]
        ],
        info: 'огонь'
    },
    '心': {
        strokes: [
            [{x:0.2, y:0.3}, {x:0.8, y:0.3}],
            [{x:0.8, y:0.3}, {x:0.5, y:0.9}],
            [{x:0.5, y:0.9}, {x:0.1, y:0.6}]
        ],
        info: 'сердце'
    },
    '手': {
        strokes: [
            [{x:0.5, y:0.1}, {x:0.5, y:0.9}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}]
        ],
        info: 'рука'
    },
    '车': {
        strokes: [
            [{x:0.1, y:0.2}, {x:0.9, y:0.2}],
            [{x:0.5, y:0.1}, {x:0.5, y:0.9}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.3, y:0.7}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.7}, {x:0.7, y:0.9}]
        ],
        info: 'машина'
    },
    '风': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.9, y:0.1}, {x:0.9, y:0.9}],
            [{x:0.9, y:0.9}, {x:0.1, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.1, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.5, y:0.1}],
            [{x:0.1, y:0.7}, {x:0.5, y:0.9}]
        ],
        info: 'ветер'
    },
    '电': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.9, y:0.1}, {x:0.9, y:0.9}],
            [{x:0.9, y:0.9}, {x:0.1, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.1, y:0.1}],
            [{x:0.5, y:0.1}, {x:0.5, y:0.9}]
        ],
        info: 'электричество'
    },
    '老': {
        strokes: [
            [{x:0.1, y:0.2}, {x:0.9, y:0.2}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.4}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.5, y:0.1}, {x:0.5, y:0.9}]
        ],
        info: 'старый'
    },
    '多': {
        strokes: [
            [{x:0.2, y:0.1}, {x:0.8, y:0.1}],
            [{x:0.2, y:0.3}, {x:0.8, y:0.3}],
            [{x:0.2, y:0.5}, {x:0.8, y:0.5}],
            [{x:0.2, y:0.7}, {x:0.8, y:0.7}],
            [{x:0.2, y:0.9}, {x:0.8, y:0.9}]
        ],
        info: 'много'
    },
    '少': {
        strokes: [
            [{x:0.1, y:0.2}, {x:0.9, y:0.2}],
            [{x:0.2, y:0.4}, {x:0.2, y:0.9}],
            [{x:0.5, y:0.4}, {x:0.5, y:0.9}],
            [{x:0.8, y:0.4}, {x:0.8, y:0.9}]
        ],
        info: 'мало'
    },
    '天': {
        strokes: [
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.9}, {x:0.5, y:0.1}],
            [{x:0.5, y:0.1}, {x:0.9, y:0.9}]
        ],
        info: 'небо'
    },
    '年': {
        strokes: [
            [{x:0.1, y:0.2}, {x:0.9, y:0.2}],
            [{x:0.5, y:0.1}, {x:0.5, y:0.5}],
            [{x:0.1, y:0.4}, {x:0.9, y:0.4}],
            [{x:0.3, y:0.5}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.5}, {x:0.7, y:0.9}]
        ],
        info: 'год'
    }
}; // КОНЕЦ ЧАСТИ 1
// ============================================================
// ===== КЛЮЧИ С 4-5 ЧЕРТАМИ (26-50) =====
// ============================================================

const KEY_STROKES_PART2 = {
    '开': {
        strokes: [
            [{x:0.1, y:0.2}, {x:0.9, y:0.2}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'открывать'
    },
    '关': {
        strokes: [
            [{x:0.1, y:0.2}, {x:0.9, y:0.2}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.7}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.7}],
            [{x:0.1, y:0.8}, {x:0.9, y:0.8}]
        ],
        info: 'закрывать'
    },
    '吃': {
        strokes: [
            [{x:0.2, y:0.1}, {x:0.4, y:0.1}],
            [{x:0.2, y:0.4}, {x:0.4, y:0.4}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.4}],
            [{x:0.5, y:0.2}, {x:0.9, y:0.1}],
            [{x:0.5, y:0.5}, {x:0.9, y:0.4}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.6, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.6, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'есть'
    },
    '打': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.3, y:0.1}],
            [{x:0.1, y:0.4}, {x:0.3, y:0.4}],
            [{x:0.2, y:0.1}, {x:0.2, y:0.7}],
            [{x:0.4, y:0.2}, {x:0.9, y:0.1}],
            [{x:0.4, y:0.5}, {x:0.9, y:0.4}],
            [{x:0.6, y:0.1}, {x:0.6, y:0.9}]
        ],
        info: 'бить'
    },
    '快': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.3, y:0.1}],
            [{x:0.1, y:0.4}, {x:0.3, y:0.4}],
            [{x:0.2, y:0.1}, {x:0.2, y:0.7}],
            [{x:0.4, y:0.2}, {x:0.9, y:0.1}],
            [{x:0.4, y:0.5}, {x:0.9, y:0.4}],
            [{x:0.6, y:0.1}, {x:0.6, y:0.9}]
        ],
        info: 'быстрый'
    },
    '想': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.5}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.5}],
            [{x:0.1, y:0.6}, {x:0.9, y:0.6}],
            [{x:0.1, y:0.8}, {x:0.9, y:0.8}],
            [{x:0.5, y:0.5}, {x:0.5, y:0.9}]
        ],
        info: 'думать'
    },
    '会': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.5}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.5}],
            [{x:0.1, y:0.6}, {x:0.9, y:0.6}],
            [{x:0.5, y:0.5}, {x:0.5, y:0.9}]
        ],
        info: 'уметь'
    },
    '做': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.3, y:0.1}],
            [{x:0.1, y:0.4}, {x:0.3, y:0.4}],
            [{x:0.2, y:0.1}, {x:0.2, y:0.9}],
            [{x:0.4, y:0.2}, {x:0.9, y:0.1}],
            [{x:0.4, y:0.5}, {x:0.9, y:0.4}],
            [{x:0.6, y:0.1}, {x:0.6, y:0.9}],
            [{x:0.5, y:0.5}, {x:0.9, y:0.5}]
        ],
        info: 'делать'
    },
    '知': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.5}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.5}],
            [{x:0.1, y:0.6}, {x:0.9, y:0.6}],
            [{x:0.5, y:0.5}, {x:0.5, y:0.9}]
        ],
        info: 'знать'
    },
    '道': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.5}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.5}],
            [{x:0.1, y:0.6}, {x:0.9, y:0.6}],
            [{x:0.5, y:0.5}, {x:0.5, y:0.9}]
        ],
        info: 'путь'
    },
    '间': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.9, y:0.1}, {x:0.9, y:0.9}],
            [{x:0.9, y:0.9}, {x:0.1, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.1, y:0.1}],
            [{x:0.3, y:0.2}, {x:0.3, y:0.8}],
            [{x:0.3, y:0.2}, {x:0.7, y:0.2}],
            [{x:0.3, y:0.5}, {x:0.7, y:0.5}],
            [{x:0.5, y:0.2}, {x:0.5, y:0.8}]
        ],
        info: 'комната'
    },
    '房': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.5}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.5}],
            [{x:0.1, y:0.6}, {x:0.9, y:0.6}],
            [{x:0.1, y:0.8}, {x:0.9, y:0.8}],
            [{x:0.5, y:0.5}, {x:0.5, y:0.9}]
        ],
        info: 'дом'
    },
    '路': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'дорога'
    },
    '钱': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'деньги'
    },
    '习': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}]
        ],
        info: 'изучать'
    },
    '洗': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'мыть'
    },
    '刷': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'чистить'
    },
    '点': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}],
            [{x:0.5, y:0.1}, {x:0.5, y:0.9}]
        ],
        info: 'точка'
    },
    '护': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.3, y:0.1}],
            [{x:0.1, y:0.4}, {x:0.3, y:0.4}],
            [{x:0.2, y:0.1}, {x:0.2, y:0.7}],
            [{x:0.4, y:0.2}, {x:0.9, y:0.1}],
            [{x:0.4, y:0.5}, {x:0.9, y:0.4}],
            [{x:0.6, y:0.1}, {x:0.6, y:0.9}],
            [{x:0.1, y:0.8}, {x:0.9, y:0.8}]
        ],
        info: 'защищать'
    },
    '信': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.3, y:0.1}],
            [{x:0.1, y:0.4}, {x:0.3, y:0.4}],
            [{x:0.2, y:0.1}, {x:0.2, y:0.9}],
            [{x:0.4, y:0.2}, {x:0.9, y:0.1}],
            [{x:0.4, y:0.5}, {x:0.9, y:0.4}],
            [{x:0.6, y:0.1}, {x:0.6, y:0.9}],
            [{x:0.5, y:0.5}, {x:0.9, y:0.5}]
        ],
        info: 'письмо'
    },
    '名': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.5}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.5}],
            [{x:0.1, y:0.6}, {x:0.9, y:0.6}],
            [{x:0.5, y:0.5}, {x:0.5, y:0.9}]
        ],
        info: 'имя'
    },
    '意': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'мысль'
    },
    '情': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.3, y:0.1}],
            [{x:0.1, y:0.4}, {x:0.3, y:0.4}],
            [{x:0.2, y:0.1}, {x:0.2, y:0.7}],
            [{x:0.4, y:0.2}, {x:0.9, y:0.1}],
            [{x:0.4, y:0.5}, {x:0.9, y:0.4}],
            [{x:0.6, y:0.1}, {x:0.6, y:0.9}]
        ],
        info: 'чувство'
    },
    '头': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.5}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.5}],
            [{x:0.1, y:0.6}, {x:0.9, y:0.6}],
            [{x:0.5, y:0.5}, {x:0.5, y:0.9}]
        ],
        info: 'голова'
    },
    '面': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'лицо'
    }
}; // КОНЕЦ ЧАСТИ 2
// ============================================================
// ===== КЛЮЧИ С 5-7 ЧЕРТАМИ (51-75) =====
// ============================================================

const KEY_STROKES_PART3 = {
    '地': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.3, y:0.1}],
            [{x:0.1, y:0.4}, {x:0.3, y:0.4}],
            [{x:0.2, y:0.1}, {x:0.2, y:0.7}],
            [{x:0.4, y:0.2}, {x:0.9, y:0.1}],
            [{x:0.4, y:0.5}, {x:0.9, y:0.4}],
            [{x:0.6, y:0.1}, {x:0.6, y:0.9}],
            [{x:0.1, y:0.8}, {x:0.9, y:0.8}]
        ],
        info: 'земля'
    },
    '动': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'двигаться'
    },
    '来': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'приходить'
    },
    '放': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'класть'
    },
    '生': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'жизнь'
    },
    '见': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'видеть'
    },
    '事': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'дело'
    },
    '好': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'хороший'
    },
    '长': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'длинный'
    },
    '冷': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'холодный'
    },
    '白': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.9, y:0.1}, {x:0.9, y:0.9}],
            [{x:0.9, y:0.9}, {x:0.1, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.1, y:0.1}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}]
        ],
        info: 'белый'
    },
    '花': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'цветок'
    },
    '光': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'свет'
    },
    '米': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'рис'
    },
    '茶': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'чай'
    },
    '酒': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'алкоголь'
    },
    '拿': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'брать'
    },
    '带': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'нести'
    },
    '穿': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'носить'
    },
    '换': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'менять'
    },
    '用': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'использовать'
    },
    '门': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.1}, {x:0.1, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}],
            [{x:0.9, y:0.1}, {x:0.9, y:0.9}]
        ],
        info: 'дверь'
    },
    '里': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'внутри'
    },
    '前': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'перед'
    }
}; // КОНЕЦ ЧАСТИ 3
// ============================================================
// ===== СЛОЖНЫЕ КЛЮЧИ (76-93) =====
// ============================================================

const KEY_STROKES_PART4 = {
    '后': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'потом'
    },
    '男': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'мужчина'
    },
    '父': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.5}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.5}],
            [{x:0.1, y:0.6}, {x:0.9, y:0.6}],
            [{x:0.5, y:0.5}, {x:0.5, y:0.9}]
        ],
        info: 'отец'
    },
    '冰': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'лёд'
    },
    '走': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'ходить'
    },
    '去': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'идти'
    },
    '回': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.9, y:0.1}, {x:0.9, y:0.9}],
            [{x:0.9, y:0.9}, {x:0.1, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.1, y:0.1}],
            [{x:0.3, y:0.3}, {x:0.7, y:0.3}],
            [{x:0.7, y:0.3}, {x:0.7, y:0.7}],
            [{x:0.7, y:0.7}, {x:0.3, y:0.7}],
            [{x:0.3, y:0.7}, {x:0.3, y:0.3}]
        ],
        info: 'возвращаться'
    },
    '给': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'давать'
    },
    '让': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'позволять'
    },
    '把': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.3, y:0.1}],
            [{x:0.1, y:0.4}, {x:0.3, y:0.4}],
            [{x:0.2, y:0.1}, {x:0.2, y:0.7}],
            [{x:0.4, y:0.2}, {x:0.9, y:0.1}],
            [{x:0.4, y:0.5}, {x:0.9, y:0.4}],
            [{x:0.6, y:0.1}, {x:0.6, y:0.9}],
            [{x:0.1, y:0.8}, {x:0.9, y:0.8}]
        ],
        info: 'частица 把'
    },
    '被': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'пассив'
    },
    '得': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.3, y:0.1}],
            [{x:0.1, y:0.4}, {x:0.3, y:0.4}],
            [{x:0.2, y:0.1}, {x:0.2, y:0.7}],
            [{x:0.4, y:0.2}, {x:0.9, y:0.1}],
            [{x:0.4, y:0.5}, {x:0.9, y:0.4}],
            [{x:0.6, y:0.1}, {x:0.6, y:0.9}],
            [{x:0.1, y:0.8}, {x:0.9, y:0.8}]
        ],
        info: 'получать'
    },
    '着': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: '-ет (процесс)'
    },
    '过': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'проходить'
    },
    '机': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'машина'
    },
    '玩': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'играть'
    },
    '站': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'стоять'
    },
    '喝': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'пить'
    },
    '写': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}]
        ],
        info: 'писать'
    },
    '读': {
        strokes: [
            [{x:0.1, y:0.1}, {x:0.9, y:0.1}],
            [{x:0.1, y:0.3}, {x:0.9, y:0.3}],
            [{x:0.1, y:0.5}, {x:0.9, y:0.5}],
            [{x:0.1, y:0.7}, {x:0.9, y:0.7}],
            [{x:0.3, y:0.1}, {x:0.3, y:0.9}],
            [{x:0.7, y:0.1}, {x:0.7, y:0.9}],
            [{x:0.1, y:0.9}, {x:0.9, y:0.9}]
        ],
        info: 'читать'
    }
}
}; // КОНЕЦ ЧАСТИ 4

// ============================================================
// ===== ОБЪЕДИНЕНИЕ ВСЕХ ЧАСТЕЙ =====
// ============================================================

// Объединяем все объекты в один
const KEY_STROKES = {
    ...KEY_STROKES_PART1,
    ...KEY_STROKES_PART2,
    ...KEY_STROKES_PART3,
    ...KEY_STROKES_PART4
};

// Выводим статистику
console.log(`✅ Загружено линий для ${Object.keys(KEY_STROKES).length} ключей`);

// Если KEY_STROKES уже существует, добавляем в него новые ключи
if (typeof window.KEY_STROKES !== 'undefined') {
    Object.assign(window.KEY_STROKES, KEY_STROKES);
} else {
    window.KEY_STROKES = KEY_STROKES;
}
