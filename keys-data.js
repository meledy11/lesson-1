// ===== БАЗА ДАННЫХ: ВСЕ КЛЮЧИ И СЛОВА (РАСШИРЕННАЯ) =====
const WORDS_BY_KEY = {
    // ===== СУЩЕСТВУЮЩИЕ КЛЮЧИ =====
    '方': {
        emoji: '⬛',
        meaning: 'квадратный, направление, метод',
        words: [
            { chinese: '方形', pinyin: 'fāng xíng', translation: 'квадрат', emoji: '⬜', hsk: '2' },
            { chinese: '方法', pinyin: 'fāng fǎ', translation: 'метод', emoji: '📐', hsk: '3' },
            { chinese: '方向', pinyin: 'fāng xiàng', translation: 'направление', emoji: '🧭', hsk: '3' },
            { chinese: '方面', pinyin: 'fāng miàn', translation: 'аспект, сторона', emoji: '📌', hsk: '4' },
            { chinese: '方案', pinyin: 'fāng àn', translation: 'план, схема', emoji: '📋', hsk: '4' },
            { chinese: '地方', pinyin: 'dì fāng', translation: 'место', emoji: '📍', hsk: '2' },
        ]
    },
    '新': {
        emoji: '✨',
        meaning: 'новый, свежий',
        words: [
            { chinese: '新鲜', pinyin: 'xīn xiān', translation: 'свежий', emoji: '🌿', hsk: '3' },
            { chinese: '新年', pinyin: 'xīn nián', translation: 'Новый год', emoji: '🎆', hsk: '2' },
            { chinese: '新兴', pinyin: 'xīn xīng', translation: 'новый, возникающий', emoji: '🌱', hsk: '5' },
            { chinese: '创新', pinyin: 'chuàng xīn', translation: 'инновация', emoji: '💡', hsk: '5' },
            { chinese: '新闻', pinyin: 'xīn wén', translation: 'новости', emoji: '📰', hsk: '3' },
            { chinese: '新旧', pinyin: 'xīn jiù', translation: 'новое и старое', emoji: '🔄', hsk: '4' },
        ]
    },
    '闭': {
        emoji: '🚫',
        meaning: 'закрывать, блокировать',
        words: [
            { chinese: '闭嘴', pinyin: 'bì zuǐ', translation: 'заткнись', emoji: '🤐', hsk: '5' },
            { chinese: '闭上', pinyin: 'bì shàng', translation: 'закрыть (глаза/рот)', emoji: '🙈', hsk: '4' },
            { chinese: '闭眼', pinyin: 'bì yǎn', translation: 'закрыть глаза', emoji: '😌', hsk: '4' },
            { chinese: '闭馆', pinyin: 'bì guǎn', translation: 'закрытие музея', emoji: '🏛️', hsk: '5' },
            { chinese: '闭幕', pinyin: 'bì mù', translation: 'закрытие (церемонии)', emoji: '🎭', hsk: '5' },
        ]
    },
    '打': {
        emoji: '✊',
        meaning: 'бить, делать, звонить',
        words: [
            { chinese: '打电话', pinyin: 'dǎ diàn huà', translation: 'звонить по телефону', emoji: '📞', hsk: '3' },
            { chinese: '打车', pinyin: 'dǎ chē', translation: 'брать такси', emoji: '🚕', hsk: '3' },
            { chinese: '打开', pinyin: 'dǎ kāi', translation: 'открывать', emoji: '🔓', hsk: '3' },
            { chinese: '打印', pinyin: 'dǎ yìn', translation: 'печатать', emoji: '🖨️', hsk: '4' },
            { chinese: '打扫', pinyin: 'dǎ sǎo', translation: 'убирать, подметать', emoji: '🧹', hsk: '4' },
        ]
    },
    '跳': {
        emoji: '🦘',
        meaning: 'прыгать, танцевать',
        words: [
            { chinese: '跳舞', pinyin: 'tiào wǔ', translation: 'танцевать', emoji: '💃', hsk: '3' },
            { chinese: '跳高', pinyin: 'tiào gāo', translation: 'прыжки в высоту', emoji: '🏅', hsk: '4' },
            { chinese: '跳远', pinyin: 'tiào yuǎn', translation: 'прыжки в длину', emoji: '🏃', hsk: '4' },
            { chinese: '心跳', pinyin: 'xīn tiào', translation: 'сердцебиение', emoji: '❤️', hsk: '4' },
            { chinese: '跳跃', pinyin: 'tiào yuè', translation: 'прыжок, скачок', emoji: '📈', hsk: '5' },
        ]
    },
    '大': {
        emoji: '🐘',
        meaning: 'большой, великий',
        words: [
            { chinese: '大家', pinyin: 'dà jiā', translation: 'все, каждый', emoji: '👥', hsk: '1' },
            { chinese: '大学', pinyin: 'dà xué', translation: 'университет', emoji: '🏫', hsk: '1' },
            { chinese: '大山', pinyin: 'dà shān', translation: 'большая гора', emoji: '🏔️', hsk: '2' },
            { chinese: '大雨', pinyin: 'dà yǔ', translation: 'сильный дождь', emoji: '🌧️', hsk: '2' },
            { chinese: '大鱼', pinyin: 'dà yú', translation: 'большая рыба', emoji: '🐋', hsk: '2' },
            { chinese: '大人', pinyin: 'dà ren', translation: 'взрослый', emoji: '🧑', hsk: '2' },
        ]
    },
    '火': {
        emoji: '🔥',
        meaning: 'огонь, пламя',
        words: [
            { chinese: '火锅', pinyin: 'huǒ guō', translation: 'горячий котелок (блюдо)', emoji: '🍲', hsk: '3' },
            { chinese: '火灾', pinyin: 'huǒ zāi', translation: 'пожар', emoji: '🚒', hsk: '4' },
            { chinese: '火箭', pinyin: 'huǒ jiàn', translation: 'ракета', emoji: '🚀', hsk: '4' },
            { chinese: '火山', pinyin: 'huǒ shān', translation: 'вулкан', emoji: '🌋', hsk: '4' },
            { chinese: '灭火器', pinyin: 'miè huǒ qì', translation: 'огнетушитель', emoji: '🧯', hsk: '5' },
        ]
    },
    '马': {
        emoji: '🐴',
        meaning: 'лошадь',
        words: [
            { chinese: '马路', pinyin: 'mǎ lù', translation: 'дорога, улица', emoji: '🛣️', hsk: '3' },
            { chinese: '马车', pinyin: 'mǎ chē', translation: 'карета, повозка', emoji: '🐎', hsk: '4' },
            { chinese: '马术', pinyin: 'mǎ shù', translation: 'конный спорт', emoji: '🏇', hsk: '5' },
            { chinese: '马夫', pinyin: 'mǎ fū', translation: 'конюх', emoji: '🧑‍🌾', hsk: '6' },
            { chinese: '马甲', pinyin: 'mǎ jiǎ', translation: 'жилет, бронежилет', emoji: '🦺', hsk: '5' },
        ]
    },
    '好': {
        emoji: '👍',
        meaning: 'хороший, хорошо',
        words: [
            { chinese: '好朋友', pinyin: 'hǎo péng you', translation: 'хороший друг', emoji: '🤝', hsk: '1' },
            { chinese: '好天气', pinyin: 'hǎo tiān qì', translation: 'хорошая погода', emoji: '☀️', hsk: '2' },
            { chinese: '好方法', pinyin: 'hǎo fāng fǎ', translation: 'хороший метод', emoji: '💯', hsk: '3' },
            { chinese: '好学生', pinyin: 'hǎo xué shēng', translation: 'хороший ученик', emoji: '📚', hsk: '2' },
        ]
    },
    '果': {
        emoji: '🍎',
        meaning: 'фрукт, результат',
        words: [
            { chinese: '苹果', pinyin: 'píng guǒ', translation: 'яблоко', emoji: '🍎', hsk: '2' },
            { chinese: '水果', pinyin: 'shuǐ guǒ', translation: 'фрукты', emoji: '🍉', hsk: '2' },
            { chinese: '果汁', pinyin: 'guǒ zhī', translation: 'фруктовый сок', emoji: '🧃', hsk: '3' },
            { chinese: '坚果', pinyin: 'jiān guǒ', translation: 'орехи', emoji: '🥜', hsk: '5' },
            { chinese: '果皮', pinyin: 'guǒ pí', translation: 'кожура фрукта', emoji: '🍌', hsk: '5' },
        ]
    },
    '吃': {
        emoji: '🍽️',
        meaning: 'есть, кушать',
        words: [
            { chinese: '吃饭', pinyin: 'chī fàn', translation: 'есть (принимать пищу)', emoji: '🍚', hsk: '1' },
            { chinese: '吃面', pinyin: 'chī miàn', translation: 'есть лапшу', emoji: '🍜', hsk: '2' },
            { chinese: '吃肉', pinyin: 'chī ròu', translation: 'есть мясо', emoji: '🥩', hsk: '2' },
            { chinese: '吃蛋', pinyin: 'chī dàn', translation: 'есть яйцо', emoji: '🥚', hsk: '3' },
            { chinese: '吃土', pinyin: 'chī tǔ', translation: 'есть землю (быть бедным)', emoji: '😂', hsk: '6' },
        ]
    },
    '乐': {
        emoji: '🎵',
        meaning: 'радость, музыка',
        words: [
            { chinese: '快乐', pinyin: 'kuài lè', translation: 'счастливый', emoji: '😊', hsk: '1' },
            { chinese: '音乐', pinyin: 'yīn yuè', translation: 'музыка', emoji: '🎶', hsk: '1' },
        ]
    },
    '电': {
        emoji: '⚡',
        meaning: 'электричество, молния',
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
        ]
    },
    '天': {
        emoji: '🌞',
        meaning: 'небо, день',
        words: [
            { chinese: '今天', pinyin: 'jīn tiān', translation: 'сегодня', emoji: '📅', hsk: '1' },
            { chinese: '明天', pinyin: 'míng tiān', translation: 'завтра', emoji: '⏰', hsk: '1' },
            { chinese: '昨天', pinyin: 'zuó tiān', translation: 'вчера', emoji: '⏪', hsk: '1' },
            { chinese: '夏天', pinyin: 'xià tiān', translation: 'лето', emoji: '🌻', hsk: '2' },
            { chinese: '白天', pinyin: 'bái tiān', translation: 'день (светлое время)', emoji: '☀️', hsk: '2' },
            { chinese: '每天', pinyin: 'měi tiān', translation: 'каждый день', emoji: '📆', hsk: '2' },
        ]
    },
    '每': {
        emoji: '🔁',
        meaning: 'каждый, всякий',
        words: [
            { chinese: '每天', pinyin: 'měi tiān', translation: 'каждый день', emoji: '📆', hsk: '2' },
            { chinese: '每月', pinyin: 'měi yuè', translation: 'каждый месяц', emoji: '📅', hsk: '3' },
            { chinese: '每年', pinyin: 'měi nián', translation: 'каждый год', emoji: '🗓️', hsk: '3' },
            { chinese: '每周', pinyin: 'měi zhōu', translation: 'каждую неделю', emoji: '📋', hsk: '3' },
            { chinese: '每个', pinyin: 'měi gè', translation: 'каждый (по отдельности)', emoji: '🔢', hsk: '2' },
        ]
    },
    '老': {
        emoji: '👴',
        meaning: 'старый, опытный',
        words: [
            { chinese: '老公', pinyin: 'lǎo gōng', translation: 'муж (разг.)', emoji: '💑', hsk: '3' },
            { chinese: '老婆', pinyin: 'lǎo pó', translation: 'жена (разг.)', emoji: '💑', hsk: '3' },
            { chinese: '老人', pinyin: 'lǎo rén', translation: 'пожилой человек', emoji: '👴', hsk: '2' },
            { chinese: '老同学', pinyin: 'lǎo tóng xué', translation: 'старый одноклассник', emoji: '🎓', hsk: '4' },
            { chinese: '老爸', pinyin: 'lǎo bà', translation: 'папа (разг.)', emoji: '👨', hsk: '4' },
        ]
    },
    '和': {
        emoji: '🤝',
        meaning: 'и, мир, гармония',
        words: [
            { chinese: '和平', pinyin: 'hé píng', translation: 'мир', emoji: '🕊️', hsk: '3' },
            { chinese: '附和', pinyin: 'fù hè', translation: 'вторять, соглашаться', emoji: '🗣️', hsk: '5' },
            { chinese: '和面', pinyin: 'huó miàn', translation: 'замешивать тесто', emoji: '🍞', hsk: '5' },
            { chinese: '和药', pinyin: 'huò yào', translation: 'смешивать лекарства', emoji: '💊', hsk: '6' },
        ]
    },
    '长': {
        emoji: '📏',
        meaning: 'длинный, расти',
        words: [
            { chinese: '很长', pinyin: 'hěn cháng', translation: 'очень длинный', emoji: '📐', hsk: '1' },
            { chinese: '长大', pinyin: 'zhǎng dà', translation: 'вырасти, взрослеть', emoji: '🌱', hsk: '2' },
            { chinese: '长度', pinyin: 'cháng dù', translation: 'длина', emoji: '📏', hsk: '3' },
            { chinese: '长城', pinyin: 'cháng chéng', translation: 'Великая Китайская стена', emoji: '🏯', hsk: '3' },
        ]
    },
    '行': {
        emoji: '🚶',
        meaning: 'идти, ряд, профессия',
        words: [
            { chinese: '旅行', pinyin: 'lǚ xíng', translation: 'путешествовать', emoji: '🧳', hsk: '2' },
            { chinese: '银行', pinyin: 'yín háng', translation: 'банк', emoji: '🏦', hsk: '2' },
            { chinese: '行李', pinyin: 'xíng li', translation: 'багаж', emoji: '🧳', hsk: '3' },
            { chinese: '行动', pinyin: 'xíng dòng', translation: 'действие', emoji: '💪', hsk: '4' },
        ]
    },
    '浅': {
        emoji: '🌊',
        meaning: 'мелкий, поверхностный',
        words: [
            { chinese: '深浅', pinyin: 'shēn qiǎn', translation: 'глубина', emoji: '📏', hsk: '4' },
            { chinese: '浅薄', pinyin: 'qiǎn bó', translation: 'поверхностный', emoji: '📄', hsk: '5' },
            { chinese: '浅显', pinyin: 'qiǎn xiǎn', translation: 'легко понять', emoji: '📖', hsk: '5' },
            { chinese: '浅色', pinyin: 'qiǎn sè', translation: 'светлый цвет', emoji: '🎨', hsk: '4' },
            { chinese: '浅滩', pinyin: 'qiǎn tān', translation: 'мель, отмель', emoji: '🏖️', hsk: '6' },
        ]
    },
    '花': {
        emoji: '🌸',
        meaning: 'цветок, тратить',
        words: [
            { chinese: '花朵', pinyin: 'huā duǒ', translation: 'цветок', emoji: '🌺', hsk: '3' },
            { chinese: '花园', pinyin: 'huā yuán', translation: 'сад', emoji: '🌷', hsk: '2' },
            { chinese: '花香', pinyin: 'huā xiāng', translation: 'аромат цветов', emoji: '🌼', hsk: '4' },
            { chinese: '花生', pinyin: 'huā shēng', translation: 'арахис', emoji: '🥜', hsk: '3' },
            { chinese: '烟花', pinyin: 'yān huā', translation: 'фейерверк', emoji: '🎇', hsk: '4' },
        ]
    },
    '牛': {
        emoji: '🐄',
        meaning: 'корова, бык',
        words: [
            { chinese: '牛奶', pinyin: 'niú nǎi', translation: 'молоко', emoji: '🥛', hsk: '1' },
            { chinese: '牛肉', pinyin: 'niú ròu', translation: 'говядина', emoji: '🥩', hsk: '2' },
            { chinese: '牛皮', pinyin: 'niú pí', translation: 'кожа коровы', emoji: '👢', hsk: '4' },
            { chinese: '牛车', pinyin: 'niú chē', translation: 'повозка с быками', emoji: '🐃', hsk: '5' },
            { chinese: '牛排', pinyin: 'niú pái', translation: 'стейк', emoji: '🥩', hsk: '3' },
        ]
    },
    '圆': {
        emoji: '⭕',
        meaning: 'круглый, полный',
        words: [
            { chinese: '圆形', pinyin: 'yuán xíng', translation: 'круглый', emoji: '⚪', hsk: '3' },
            { chinese: '圆圈', pinyin: 'yuán quān', translation: 'круг', emoji: '🟣', hsk: '4' },
            { chinese: '圆满', pinyin: 'yuán mǎn', translation: 'успешный, завершённый', emoji: '✅', hsk: '4' },
            { chinese: '团圆', pinyin: 'tuán yuán', translation: 'воссоединение', emoji: '👨‍👩‍👧', hsk: '3' },
            { chinese: '圆润', pinyin: 'yuán rùn', translation: 'гладкий, мелодичный', emoji: '🔮', hsk: '5' },
        ]
    },
    '尺': {
        emoji: '📐',
        meaning: 'линейка, единица длины',
        words: [
            { chinese: '尺子', pinyin: 'chǐ zi', translation: 'линейка', emoji: '📏', hsk: '3' },
            { chinese: '尺码', pinyin: 'chǐ mǎ', translation: 'размер', emoji: '👕', hsk: '4' },
            { chinese: '尺寸', pinyin: 'chǐ cùn', translation: 'размер', emoji: '📐', hsk: '3' },
            { chinese: '直尺', pinyin: 'zhí chǐ', translation: 'прямая линейка', emoji: '📏', hsk: '4' },
            { chinese: '卷尺', pinyin: 'juǎn chǐ', translation: 'рулетка', emoji: '🔄', hsk: '5' },
        ]
    },
    '春': {
        emoji: '🌱',
        meaning: 'весна, начало',
        words: [
            { chinese: '春天', pinyin: 'chūn tiān', translation: 'весна', emoji: '🌸', hsk: '1' },
            { chinese: '春节', pinyin: 'chūn jié', translation: 'Праздник весны (Новый год)', emoji: '🧧', hsk: '2' },
            { chinese: '春风', pinyin: 'chūn fēng', translation: 'весенний ветер', emoji: '🍃', hsk: '3' },
            { chinese: '春雨', pinyin: 'chūn yǔ', translation: 'весенний дождь', emoji: '🌧️', hsk: '3' },
            { chinese: '春联', pinyin: 'chūn lián', translation: 'новогодние парные надписи', emoji: '📜', hsk: '4' },
        ]
    },
    '水': {
        emoji: '💧',
        meaning: 'вода',
        words: [
            { chinese: '水果', pinyin: 'shuǐ guǒ', translation: 'фрукты', emoji: '🍉', hsk: '2' },
            { chinese: '水平', pinyin: 'shuǐ píng', translation: 'уровень', emoji: '📊', hsk: '3' },
            { chinese: '水杯', pinyin: 'shuǐ bēi', translation: 'стакан', emoji: '🥤', hsk: '3' },
            { chinese: '水库', pinyin: 'shuǐ kù', translation: 'водохранилище', emoji: '🌊', hsk: '4' },
            { chinese: '水分', pinyin: 'shuǐ fèn', translation: 'влага, содержание воды', emoji: '💦', hsk: '4' },
            { chinese: '水利', pinyin: 'shuǐ lì', translation: 'ирригация', emoji: '🚰', hsk: '5' },
        ]
    },
    '风': {
        emoji: '🌬️',
        meaning: 'ветер, стиль',
        words: [
            { chinese: '春风', pinyin: 'chūn fēng', translation: 'весенний ветер', emoji: '🍃', hsk: '3' },
            { chinese: '风', pinyin: 'fēng', translation: 'ветер', emoji: '🌬️', hsk: '2' },
            { chinese: '风景', pinyin: 'fēng jǐng', translation: 'пейзаж', emoji: '🏞️', hsk: '3' },
            { chinese: '风格', pinyin: 'fēng gé', translation: 'стиль', emoji: '🎨', hsk: '4' },
            { chinese: '风雨', pinyin: 'fēng yǔ', translation: 'ветер и дождь', emoji: '🌧️', hsk: '4' },
            { chinese: '台风', pinyin: 'tái fēng', translation: 'тайфун', emoji: '🌀', hsk: '4' },
        ]
    },
    '心': {
        emoji: '❤️',
        meaning: 'сердце, душа',
        words: [
            { chinese: '心跳', pinyin: 'xīn tiào', translation: 'сердцебиение', emoji: '💓', hsk: '4' },
            { chinese: '心情', pinyin: 'xīn qíng', translation: 'настроение', emoji: '😊', hsk: '3' },
            { chinese: '心里', pinyin: 'xīn lǐ', translation: 'в душе', emoji: '💭', hsk: '3' },
            { chinese: '开心', pinyin: 'kāi xīn', translation: 'радостный', emoji: '😄', hsk: '2' },
            { chinese: '小心', pinyin: 'xiǎo xīn', translation: 'осторожный', emoji: '⚠️', hsk: '2' },
            { chinese: '关心', pinyin: 'guān xīn', translation: 'заботиться', emoji: '💗', hsk: '3' },
            { chinese: '信心', pinyin: 'xìn xīn', translation: 'уверенность', emoji: '💪', hsk: '3' },
        ]
    },
    '金': {
        emoji: '💰',
        meaning: 'золото, металл, деньги',
        words: [
            { chinese: '银行', pinyin: 'yín háng', translation: 'банк', emoji: '🏦', hsk: '2' },
            { chinese: '金', pinyin: 'jīn', translation: 'золото', emoji: '🌟', hsk: '2' },
            { chinese: '金钱', pinyin: 'jīn qián', translation: 'деньги', emoji: '💰', hsk: '4' },
            { chinese: '金色', pinyin: 'jīn sè', translation: 'золотистый', emoji: '✨', hsk: '3' },
            { chinese: '金属', pinyin: 'jīn shǔ', translation: 'металл', emoji: '🔩', hsk: '4' },
        ]
    },
    '木': {
        emoji: '🌳',
        meaning: 'дерево, древесина',
        words: [
            { chinese: '木头', pinyin: 'mù tou', translation: 'дерево (материал)', emoji: '🪵', hsk: '3' },
            { chinese: '树木', pinyin: 'shù mù', translation: 'деревья', emoji: '🌲', hsk: '3' },
            { chinese: '森林', pinyin: 'sēn lín', translation: 'лес', emoji: '🌳', hsk: '3' },
            { chinese: '木板', pinyin: 'mù bǎn', translation: 'доска', emoji: '📋', hsk: '4' },
            { chinese: '木匠', pinyin: 'mù jiàng', translation: 'плотник', emoji: '🔨', hsk: '5' },
        ]
    },
    '日': {
        emoji: '☀️',
        meaning: 'солнце, день',
        words: [
            { chinese: '今天', pinyin: 'jīn tiān', translation: 'сегодня', emoji: '📅', hsk: '1' },
            { chinese: '明天', pinyin: 'míng tiān', translation: 'завтра', emoji: '⏰', hsk: '1' },
            { chinese: '昨天', pinyin: 'zuó tiān', translation: 'вчера', emoji: '⏪', hsk: '1' },
            { chinese: '日子', pinyin: 'rì zi', translation: 'день, дата', emoji: '📆', hsk: '2' },
            { chinese: '日记', pinyin: 'rì jì', translation: 'дневник', emoji: '📓', hsk: '3' },
        ]
    },
    '月': {
        emoji: '🌙',
        meaning: 'луна, месяц',
        words: [
            { chinese: '月亮', pinyin: 'yuè liang', translation: 'луна', emoji: '🌕', hsk: '2' },
            { chinese: '每月', pinyin: 'měi yuè', translation: 'каждый месяц', emoji: '📅', hsk: '3' },
            { chinese: '月份', pinyin: 'yuè fèn', translation: 'месяц', emoji: '🗓️', hsk: '3' },
            { chinese: '月票', pinyin: 'yuè piào', translation: 'проездной на месяц', emoji: '🎫', hsk: '4' },
            { chinese: '月光', pinyin: 'yuè guāng', translation: 'лунный свет', emoji: '🌙', hsk: '4' },
        ]
    },
    '人': {
        emoji: '👤',
        meaning: 'человек, люди',
        words: [
            { chinese: '大人', pinyin: 'dà ren', translation: 'взрослый', emoji: '🧑', hsk: '2' },
            { chinese: '老人', pinyin: 'lǎo rén', translation: 'пожилой человек', emoji: '👴', hsk: '2' },
            { chinese: '人们', pinyin: 'rén men', translation: 'люди', emoji: '👥', hsk: '2' },
            { chinese: '人民', pinyin: 'rén mín', translation: 'народ', emoji: '🏛️', hsk: '3' },
            { chinese: '人才', pinyin: 'rén cái', translation: 'талантливый человек', emoji: '🌟', hsk: '4' },
            { chinese: '人口', pinyin: 'rén kǒu', translation: 'население', emoji: '👫', hsk: '3' },
        ]
    },
    '口': {
        emoji: '👄',
        meaning: 'рот, отверстие',
        words: [
            { chinese: '人口', pinyin: 'rén kǒu', translation: 'население', emoji: '👫', hsk: '3' },
            { chinese: '门口', pinyin: 'mén kǒu', translation: 'вход, дверь', emoji: '🚪', hsk: '2' },
            { chinese: '口语', pinyin: 'kǒu yǔ', translation: 'устная речь', emoji: '🗣️', hsk: '3' },
            { chinese: '口袋', pinyin: 'kǒu dài', translation: 'карман', emoji: '👖', hsk: '3' },
            { chinese: '口音', pinyin: 'kǒu yīn', translation: 'акцент', emoji: '🗣️', hsk: '4' },
        ]
    },
    '手': {
        emoji: '✋',
        meaning: 'рука, ручной',
        words: [
            { chinese: '手机', pinyin: 'shǒu jī', translation: 'мобильный телефон', emoji: '📱', hsk: '1' },
            { chinese: '手表', pinyin: 'shǒu biǎo', translation: 'часы', emoji: '⌚', hsk: '2' },
            { chinese: '手指', pinyin: 'shǒu zhǐ', translation: 'палец', emoji: '🖐️', hsk: '3' },
            { chinese: '手工', pinyin: 'shǒu gōng', translation: 'ручная работа', emoji: '🧵', hsk: '4' },
            { chinese: '手术', pinyin: 'shǒu shù', translation: 'операция (хирургия)', emoji: '🏥', hsk: '4' },
        ]
    },
    '足': {
        emoji: '🦶',
        meaning: 'нога, достаточно',
        words: [
            { chinese: '足球', pinyin: 'zú qiú', translation: 'футбол', emoji: '⚽', hsk: '2' },
            { chinese: '足够', pinyin: 'zú gòu', translation: 'достаточно', emoji: '✅', hsk: '3' },
            { chinese: '足球队', pinyin: 'zú qiú duì', translation: 'футбольная команда', emoji: '🥅', hsk: '4' },
            { chinese: '足迹', pinyin: 'zú jì', translation: 'след', emoji: '👣', hsk: '5' },
        ]
    },
    '目': {
        emoji: '👁️',
        meaning: 'глаз, пункт',
        words: [
            { chinese: '目的', pinyin: 'mù dì', translation: 'цель', emoji: '🎯', hsk: '2' },
            { chinese: '目前', pinyin: 'mù qián', translation: 'в настоящее время', emoji: '🕐', hsk: '2' },
            { chinese: '题目', pinyin: 'tí mù', translation: 'заголовок, тема', emoji: '📝', hsk: '3' },
            { chinese: '目光', pinyin: 'mù guāng', translation: 'взгляд', emoji: '👀', hsk: '4' },
        ]
    },
    '田': {
        emoji: '🌾',
        meaning: 'поле, рисовое поле',
        words: [
            { chinese: '田地', pinyin: 'tián dì', translation: 'поле, земля', emoji: '🌾', hsk: '3' },
            { chinese: '农田', pinyin: 'nóng tián', translation: 'сельскохозяйственное поле', emoji: '🚜', hsk: '4' },
            { chinese: '田野', pinyin: 'tián yě', translation: 'поле, открытая местность', emoji: '🌿', hsk: '4' },
        ]
    },
    '力': {
        emoji: '💪',
        meaning: 'сила, мощь',
        words: [
            { chinese: '努力', pinyin: 'nǔ lì', translation: 'стараться, усердно', emoji: '💪', hsk: '2' },
            { chinese: '力量', pinyin: 'lì liàng', translation: 'сила', emoji: '⚡', hsk: '3' },
            { chinese: '能力', pinyin: 'néng lì', translation: 'способность', emoji: '🧠', hsk: '3' },
            { chinese: '电力', pinyin: 'diàn lì', translation: 'электричество', emoji: '🔌', hsk: '4' },
            { chinese: '劳动力', pinyin: 'láo dòng lì', translation: 'рабочая сила', emoji: '👷', hsk: '5' },
        ]
    },
    '车': {
        emoji: '🚗',
        meaning: 'машина, транспорт',
        words: [
            { chinese: '打车', pinyin: 'dǎ chē', translation: 'взять такси', emoji: '🚕', hsk: '3' },
            { chinese: '汽车', pinyin: 'qì chē', translation: 'автомобиль', emoji: '🚗', hsk: '2' },
            { chinese: '火车', pinyin: 'huǒ chē', translation: 'поезд', emoji: '🚂', hsk: '2' },
            { chinese: '自行车', pinyin: 'zì xíng chē', translation: 'велосипед', emoji: '🚲', hsk: '2' },
            { chinese: '车站', pinyin: 'chē zhàn', translation: 'станция, вокзал', emoji: '🚉', hsk: '3' },
        ]
    },
    '山': {
        emoji: '⛰️',
        meaning: 'гора',
        words: [
            { chinese: '大山', pinyin: 'dà shān', translation: 'большая гора', emoji: '🏔️', hsk: '2' },
            { chinese: '火山', pinyin: 'huǒ shān', translation: 'вулкан', emoji: '🌋', hsk: '4' },
            { chinese: '山川', pinyin: 'shān chuān', translation: 'горы и реки', emoji: '⛰️', hsk: '4' },
            { chinese: '山区', pinyin: 'shān qū', translation: 'горный район', emoji: '🏞️', hsk: '4' },
        ]
    },
    '雨': {
        emoji: '🌧️',
        meaning: 'дождь',
        words: [
            { chinese: '大雨', pinyin: 'dà yǔ', translation: 'сильный дождь', emoji: '🌧️', hsk: '2' },
            { chinese: '春雨', pinyin: 'chūn yǔ', translation: 'весенний дождь', emoji: '🌱', hsk: '3' },
            { chinese: '雨季', pinyin: 'yǔ jì', translation: 'сезон дождей', emoji: '☔', hsk: '4' },
            { chinese: '雨水', pinyin: 'yǔ shuǐ', translation: 'дождевая вода', emoji: '💧', hsk: '3' },
        ]
    },
    '食': {
        emoji: '🍜',
        meaning: 'еда, пища',
        words: [
            { chinese: '食物', pinyin: 'shí wù', translation: 'еда', emoji: '🍲', hsk: '2' },
            { chinese: '食堂', pinyin: 'shí táng', translation: 'столовая', emoji: '🍽️', hsk: '3' },
            { chinese: '食品', pinyin: 'shí pǐn', translation: 'продукты питания', emoji: '🛒', hsk: '3' },
            { chinese: '零食', pinyin: 'líng shí', translation: 'снеки', emoji: '🍿', hsk: '4' },
        ]
    },
    '学': {
        emoji: '📚',
        meaning: 'учиться, школа',
        words: [
            { chinese: '大学', pinyin: 'dà xué', translation: 'университет', emoji: '🏫', hsk: '1' },
            { chinese: '学生', pinyin: 'xué shēng', translation: 'ученик', emoji: '🧑‍🎓', hsk: '1' },
            { chinese: '学习', pinyin: 'xué xí', translation: 'учиться', emoji: '📖', hsk: '1' },
            { chinese: '学校', pinyin: 'xué xiào', translation: 'школа', emoji: '🏫', hsk: '1' },
            { chinese: '学问', pinyin: 'xué wèn', translation: 'знания', emoji: '🧠', hsk: '4' },
        ]
    },
    '国': {
        emoji: '🌍',
        meaning: 'страна, государство',
        words: [
            { chinese: '中国', pinyin: 'Zhōng guó', translation: 'Китай', emoji: '🇨🇳', hsk: '1' },
            { chinese: '国家', pinyin: 'guó jiā', translation: 'страна', emoji: '🗺️', hsk: '2' },
            { chinese: '国外', pinyin: 'guó wài', translation: 'за границей', emoji: '✈️', hsk: '3' },
            { chinese: '国际', pinyin: 'guó jì', translation: 'международный', emoji: '🌐', hsk: '3' },
            { chinese: '国旗', pinyin: 'guó qí', translation: 'флаг', emoji: '🏳️', hsk: '4' },
        ]
    },
    '家': {
        emoji: '🏠',
        meaning: 'дом, семья',
        words: [
            { chinese: '大家', pinyin: 'dà jiā', translation: 'все', emoji: '👥', hsk: '1' },
            { chinese: '国家', pinyin: 'guó jiā', translation: 'страна', emoji: '🗺️', hsk: '2' },
            { chinese: '回家', pinyin: 'huí jiā', translation: 'возвращаться домой', emoji: '🏡', hsk: '2' },
            { chinese: '家庭', pinyin: 'jiā tíng', translation: 'семья', emoji: '👪', hsk: '3' },
            { chinese: '家具', pinyin: 'jiā jù', translation: 'мебель', emoji: '🪑', hsk: '3' },
            { chinese: '家人', pinyin: 'jiā rén', translation: 'семья, родные', emoji: '👨‍👩‍👧', hsk: '2' },
        ]
    },
    '生': {
        emoji: '🌱',
        meaning: 'рождаться, жизнь, сырой',
        words: [
            { chinese: '学生', pinyin: 'xué shēng', translation: 'ученик', emoji: '🧑‍🎓', hsk: '1' },
            { chinese: '先生', pinyin: 'xiān sheng', translation: 'господин', emoji: '👨', hsk: '1' },
            { chinese: '生气', pinyin: 'shēng qì', translation: 'злиться', emoji: '😡', hsk: '3' },
            { chinese: '生活', pinyin: 'shēng huó', translation: 'жизнь', emoji: '🌅', hsk: '2' },
            { chinese: '生日', pinyin: 'shēng rì', translation: 'день рождения', emoji: '🎂', hsk: '2' },
            { chinese: '发生', pinyin: 'fā shēng', translation: 'происходить', emoji: '⚡', hsk: '3' },
        ]
    },
    '文': {
        emoji: '📝',
        meaning: 'письменность, культура',
        words: [
            { chinese: '中文', pinyin: 'zhōng wén', translation: 'китайский язык', emoji: '🇨🇳', hsk: '1' },
            { chinese: '文化', pinyin: 'wén huà', translation: 'культура', emoji: '🎭', hsk: '3' },
            { chinese: '文字', pinyin: 'wén zì', translation: 'письменность', emoji: '✍️', hsk: '3' },
            { chinese: '文学', pinyin: 'wén xué', translation: 'литература', emoji: '📖', hsk: '4' },
            { chinese: '文章', pinyin: 'wén zhāng', translation: 'статья', emoji: '📄', hsk: '3' },
        ]
    },
    '言': {
        emoji: '💬',
        meaning: 'речь, язык',
        words: [
            { chinese: '语言', pinyin: 'yǔ yán', translation: 'язык', emoji: '🗣️', hsk: '3' },
            { chinese: '言论', pinyin: 'yán lùn', translation: 'высказывание', emoji: '📢', hsk: '4' },
            { chinese: '言语', pinyin: 'yán yǔ', translation: 'речь', emoji: '💬', hsk: '4' },
            { chinese: '名言', pinyin: 'míng yán', translation: 'известное высказывание', emoji: '⭐', hsk: '5' },
        ]
    },
    '音': {
        emoji: '🔊',
        meaning: 'звук, тон',
        words: [
            { chinese: '音乐', pinyin: 'yīn yuè', translation: 'музыка', emoji: '🎶', hsk: '1' },
            { chinese: '声音', pinyin: 'shēng yīn', translation: 'звук', emoji: '🔊', hsk: '3' },
            { chinese: '口音', pinyin: 'kǒu yīn', translation: 'акцент', emoji: '🗣️', hsk: '4' },
            { chinese: '拼音', pinyin: 'pīn yīn', translation: 'пиньинь', emoji: '🔤', hsk: '2' },
        ]
    },

    // ===== НОВЫЕ ДОПОЛНИТЕЛЬНЫЕ КЛЮЧИ =====
    '爱': {
        emoji: '❤️',
        meaning: 'любовь, любить',
        words: [
            { chinese: '爱情', pinyin: 'ài qíng', translation: 'любовь (романтическая)', emoji: '💕', hsk: '3' },
            { chinese: '爱好', pinyin: 'ài hào', translation: 'хобби, увлечение', emoji: '🎯', hsk: '3' },
            { chinese: '爱人', pinyin: 'ài rén', translation: 'любимый человек', emoji: '💑', hsk: '4' },
            { chinese: '可爱', pinyin: 'kě ài', translation: 'милый, симпатичный', emoji: '🥰', hsk: '2' },
        ]
    },
    '书': {
        emoji: '📕',
        meaning: 'книга, письмо',
        words: [
            { chinese: '书包', pinyin: 'shū bāo', translation: 'рюкзак, портфель', emoji: '🎒', hsk: '1' },
            { chinese: '书本', pinyin: 'shū běn', translation: 'книга', emoji: '📖', hsk: '3' },
            { chinese: '书法', pinyin: 'shū fǎ', translation: 'каллиграфия', emoji: '🖌️', hsk: '4' },
            { chinese: '书店', pinyin: 'shū diàn', translation: 'книжный магазин', emoji: '📚', hsk: '3' },
            { chinese: '图书馆', pinyin: 'tú shū guǎn', translation: 'библиотека', emoji: '🏛️', hsk: '2' },
        ]
    },
    '东': {
        emoji: '🌅',
        meaning: 'восток, хозяин',
        words: [
            { chinese: '东方', pinyin: 'dōng fāng', translation: 'восток', emoji: '🧭', hsk: '3' },
            { chinese: '东西', pinyin: 'dōng xi', translation: 'вещь, предмет', emoji: '📦', hsk: '1' },
            { chinese: '东北', pinyin: 'dōng běi', translation: 'северо-восток', emoji: '🧭', hsk: '3' },
            { chinese: '东南', pinyin: 'dōng nán', translation: 'юго-восток', emoji: '🧭', hsk: '3' },
            { chinese: '东边', pinyin: 'dōng biān', translation: 'восточная сторона', emoji: '⬅️', hsk: '2' },
        ]
    },
    '西': {
        emoji: '🌇',
        meaning: 'запад, западный',
        words: [
            { chinese: '西方', pinyin: 'xī fāng', translation: 'запад', emoji: '🧭', hsk: '3' },
            { chinese: '西瓜', pinyin: 'xī guā', translation: 'арбуз', emoji: '🍉', hsk: '2' },
            { chinese: '西红柿', pinyin: 'xī hóng shì', translation: 'помидор', emoji: '🍅', hsk: '3' },
            { chinese: '西北', pinyin: 'xī běi', translation: 'северо-запад', emoji: '🧭', hsk: '3' },
            { chinese: '西南', pinyin: 'xī nán', translation: 'юго-запад', emoji: '🧭', hsk: '3' },
        ]
    },
    '南': {
        emoji: '🌴',
        meaning: 'юг, южный',
        words: [
            { chinese: '南方', pinyin: 'nán fāng', translation: 'юг', emoji: '🧭', hsk: '3' },
            { chinese: '南边', pinyin: 'nán biān', translation: 'южная сторона', emoji: '⬇️', hsk: '2' },
            { chinese: '南京', pinyin: 'Nán jīng', translation: 'Нанкин (город)', emoji: '🏯', hsk: '3' },
        ]
    },
    '北': {
        emoji: '❄️',
        meaning: 'север, северный',
        words: [
            { chinese: '北方', pinyin: 'běi fāng', translation: 'север', emoji: '🧭', hsk: '3' },
            { chinese: '北边', pinyin: 'běi biān', translation: 'северная сторона', emoji: '⬆️', hsk: '2' },
            { chinese: '北京', pinyin: 'Běi jīng', translation: 'Пекин', emoji: '🏯', hsk: '1' },
        ]
    },
    '开': {
        emoji: '🔓',
        meaning: 'открывать, начинать',
        words: [
            { chinese: '开车', pinyin: 'kāi chē', translation: 'вести машину', emoji: '🚗', hsk: '2' },
            { chinese: '开门', pinyin: 'kāi mén', translation: 'открыть дверь', emoji: '🚪', hsk: '2' },
            { chinese: '开始', pinyin: 'kāi shǐ', translation: 'начинать', emoji: '▶️', hsk: '1' },
            { chinese: '开心', pinyin: 'kāi xīn', translation: 'радостный', emoji: '😄', hsk: '2' },
            { chinese: '开放', pinyin: 'kāi fàng', translation: 'открытый, открывать', emoji: '🆓', hsk: '4' },
        ]
    },
    '关': {
        emoji: '🔒',
        meaning: 'закрывать, выключать',
        words: [
            { chinese: '关门', pinyin: 'guān mén', translation: 'закрыть дверь', emoji: '🚪', hsk: '2' },
            { chinese: '关心', pinyin: 'guān xīn', translation: 'заботиться', emoji: '💗', hsk: '3' },
            { chinese: '关系', pinyin: 'guān xi', translation: 'отношение, связь', emoji: '🔗', hsk: '3' },
            { chinese: '关于', pinyin: 'guān yú', translation: 'о, касательно', emoji: '📌', hsk: '3' },
            { chinese: '关闭', pinyin: 'guān bì', translation: 'закрывать', emoji: '🔐', hsk: '4' },
        ]
    },
    '有': {
        emoji: '✅',
        meaning: 'иметь, есть',
        words: [
            { chinese: '没有', pinyin: 'méi yǒu', translation: 'не иметь, нет', emoji: '❌', hsk: '1' },
            { chinese: '有的', pinyin: 'yǒu de', translation: 'некоторые', emoji: '🔹', hsk: '2' },
            { chinese: '所有', pinyin: 'suǒ yǒu', translation: 'все, всё', emoji: '🔵', hsk: '3' },
            { chinese: '有趣', pinyin: 'yǒu qù', translation: 'интересный', emoji: '😊', hsk: '3' },
            { chinese: '有名', pinyin: 'yǒu míng', translation: 'известный', emoji: '⭐', hsk: '3' },
        ]
    },
    '来': {
        emoji: '🚶',
        meaning: 'приходить, будущий',
        words: [
            { chinese: '来', pinyin: 'lái', translation: 'приходить', emoji: '➡️', hsk: '1' },
            { chinese: '回来', pinyin: 'huí lái', translation: 'возвращаться', emoji: '🔄', hsk: '2' },
            { chinese: '出来', pinyin: 'chū lái', translation: 'выходить', emoji: '🚪', hsk: '2' },
            { chinese: '起来', pinyin: 'qǐ lái', translation: 'вставать', emoji: '⬆️', hsk: '2' },
            { chinese: '将来', pinyin: 'jiāng lái', translation: 'будущее', emoji: '🔮', hsk: '3' },
        ]
    },
    '去': {
        emoji: '🏃',
        meaning: 'идти, уходить',
        words: [
            { chinese: '去', pinyin: 'qù', translation: 'идти, ехать', emoji: '➡️', hsk: '1' },
            { chinese: '回去', pinyin: 'huí qù', translation: 'возвращаться', emoji: '🔄', hsk: '2' },
            { chinese: '出去', pinyin: 'chū qù', translation: 'выходить', emoji: '🚪', hsk: '2' },
            { chinese: '过去', pinyin: 'guò qù', translation: 'прошлое', emoji: '⏪', hsk: '2' },
        ]
    },
    '说': {
        emoji: '🗣️',
        meaning: 'говорить, сказать',
        words: [
            { chinese: '说话', pinyin: 'shuō huà', translation: 'говорить', emoji: '💬', hsk: '1' },
            { chinese: '小说', pinyin: 'xiǎo shuō', translation: 'роман, повесть', emoji: '📖', hsk: '3' },
            { chinese: '说明', pinyin: 'shuō míng', translation: 'объяснять', emoji: '📝', hsk: '3' },
            { chinese: '说法', pinyin: 'shuō fǎ', translation: 'способ говорить', emoji: '🗣️', hsk: '4' },
        ]
    },
    '话': {
        emoji: '💬',
        meaning: 'речь, разговор',
        words: [
            { chinese: '电话', pinyin: 'diàn huà', translation: 'телефон', emoji: '📱', hsk: '1' },
            { chinese: '说话', pinyin: 'shuō huà', translation: 'говорить', emoji: '💬', hsk: '1' },
            { chinese: '笑话', pinyin: 'xiào huà', translation: 'шутка', emoji: '😂', hsk: '3' },
            { chinese: '普通话', pinyin: 'pǔ tōng huà', translation: 'путунхуа (китайский язык)', emoji: '🇨🇳', hsk: '2' },
            { chinese: '对话', pinyin: 'duì huà', translation: 'диалог', emoji: '💬', hsk: '3' },
        ]
    },
    '会': {
        emoji: '👥',
        meaning: 'уметь, встречаться, собрание',
        words: [
            { chinese: '开会', pinyin: 'kāi huì', translation: 'проводить собрание', emoji: '📋', hsk: '2' },
            { chinese: '不会', pinyin: 'bù huì', translation: 'не уметь, не будет', emoji: '❌', hsk: '1' },
            { chinese: '会议', pinyin: 'huì yì', translation: 'собрание, конференция', emoji: '📊', hsk: '3' },
            { chinese: '社会', pinyin: 'shè huì', translation: 'общество', emoji: '🌍', hsk: '3' },
        ]
    },
    '见': {
        emoji: '👀',
        meaning: 'видеть, встречать',
        words: [
            { chinese: '见面', pinyin: 'jiàn miàn', translation: 'встречаться', emoji: '🤝', hsk: '2' },
            { chinese: '看见', pinyin: 'kàn jiàn', translation: 'видеть', emoji: '👁️', hsk: '1' },
            { chinese: '再见', pinyin: 'zài jiàn', translation: 'до свидания', emoji: '👋', hsk: '1' },
            { chinese: '意见', pinyin: 'yì jiàn', translation: 'мнение, взгляд', emoji: '💭', hsk: '3' },
        ]
    },
    '想': {
        emoji: '💭',
        meaning: 'думать, хотеть',
        words: [
            { chinese: '想', pinyin: 'xiǎng', translation: 'хотеть, думать', emoji: '💭', hsk: '1' },
            { chinese: '想法', pinyin: 'xiǎng fǎ', translation: 'мысль, идея', emoji: '💡', hsk: '3' },
            { chinese: '想象', pinyin: 'xiǎng xiàng', translation: 'воображать', emoji: '🌈', hsk: '4' },
            { chinese: '想念', pinyin: 'xiǎng niàn', translation: 'скучать, тосковать', emoji: '😢', hsk: '3' },
        ]
    },
    '知': {
        emoji: '🧠',
        meaning: 'знать, понимать',
        words: [
            { chinese: '知道', pinyin: 'zhī dào', translation: 'знать', emoji: '💡', hsk: '1' },
            { chinese: '知识', pinyin: 'zhī shi', translation: 'знание', emoji: '📚', hsk: '3' },
            { chinese: '不知', pinyin: 'bù zhī', translation: 'не знать', emoji: '❓', hsk: '2' },
            { chinese: '知名', pinyin: 'zhī míng', translation: 'известный', emoji: '⭐', hsk: '4' },
        ]
    },
    '道': {
        emoji: '🛤️',
        meaning: 'путь, дорога, говорить',
        words: [
            { chinese: '知道', pinyin: 'zhī dào', translation: 'знать', emoji: '💡', hsk: '1' },
            { chinese: '道路', pinyin: 'dào lù', translation: 'дорога', emoji: '🛣️', hsk: '3' },
            { chinese: '道德', pinyin: 'dào dé', translation: 'мораль', emoji: '📜', hsk: '4' },
            { chinese: '道理', pinyin: 'dào lǐ', translation: 'принцип, истина', emoji: '⚖️', hsk: '3' },
        ]
    },
    '友': {
        emoji: '🤝',
        meaning: 'друг, дружеский',
        words: [
            { chinese: '朋友', pinyin: 'péng you', translation: 'друг', emoji: '🤝', hsk: '1' },
            { chinese: '友好', pinyin: 'yǒu hǎo', translation: 'дружелюбный', emoji: '😊', hsk: '2' },
            { chinese: '友谊', pinyin: 'yǒu yì', translation: 'дружба', emoji: '💕', hsk: '3' },
            { chinese: '网友', pinyin: 'wǎng yǒu', translation: 'интернет-друг', emoji: '💻', hsk: '4' },
        ]
    },
    '房': {
        emoji: '🏠',
        meaning: 'дом, комната',
        words: [
            { chinese: '房子', pinyin: 'fáng zi', translation: 'дом', emoji: '🏠', hsk: '1' },
            { chinese: '房间', pinyin: 'fáng jiān', translation: 'комната', emoji: '🛏️', hsk: '2' },
            { chinese: '房东', pinyin: 'fáng dōng', translation: 'арендодатель', emoji: '🔑', hsk: '4' },
            { chinese: '房租', pinyin: 'fáng zū', translation: 'арендная плата', emoji: '💵', hsk: '4' },
            { chinese: '厨房', pinyin: 'chú fáng', translation: 'кухня', emoji: '🍳', hsk: '2' },
        ]
    },
    '气': {
        emoji: '💨',
        meaning: 'воздух, энергия, газ',
        words: [
            { chinese: '天气', pinyin: 'tiān qì', translation: 'погода', emoji: '☀️', hsk: '1' },
            { chinese: '生气', pinyin: 'shēng qì', translation: 'злиться', emoji: '😡', hsk: '3' },
            { chinese: '空气', pinyin: 'kōng qì', translation: 'воздух', emoji: '🌬️', hsk: '3' },
            { chinese: '气候', pinyin: 'qì hòu', translation: 'климат', emoji: '🌡️', hsk: '4' },
        ]
    },
    '色': {
        emoji: '🎨',
        meaning: 'цвет, вид',
        words: [
            { chinese: '颜色', pinyin: 'yán sè', translation: 'цвет', emoji: '🌈', hsk: '2' },
            { chinese: '红色', pinyin: 'hóng sè', translation: 'красный', emoji: '🔴', hsk: '2' },
            { chinese: '蓝色', pinyin: 'lán sè', translation: 'синий', emoji: '🔵', hsk: '2' },
            { chinese: '白色', pinyin: 'bái sè', translation: 'белый', emoji: '⚪', hsk: '2' },
            { chinese: '黑色', pinyin: 'hēi sè', translation: 'чёрный', emoji: '⚫', hsk: '2' },
            { chinese: '金色', pinyin: 'jīn sè', translation: 'золотистый', emoji: '✨', hsk: '3' },
        ]
    },
    '点': {
        emoji: '📍',
        meaning: 'точка, указывать',
        words: [
            { chinese: '一点', pinyin: 'yī diǎn', translation: 'немного', emoji: '🔸', hsk: '1' },
            { chinese: '地点', pinyin: 'dì diǎn', translation: 'место', emoji: '📍', hsk: '3' },
            { chinese: '点心', pinyin: 'diǎn xīn', translation: 'десерт, закуска', emoji: '🍰', hsk: '3' },
            { chinese: '点钟', pinyin: 'diǎn zhōng', translation: 'час (время)', emoji: '🕐', hsk: '1' },
        ]
    },
    '间': {
        emoji: '🚪',
        meaning: 'комната, промежуток',
        words: [
            { chinese: '房间', pinyin: 'fáng jiān', translation: 'комната', emoji: '🛏️', hsk: '2' },
            { chinese: '时间', pinyin: 'shí jiān', translation: 'время', emoji: '⏰', hsk: '1' },
            { chinese: '中间', pinyin: 'zhōng jiān', translation: 'середина', emoji: '🔲', hsk: '2' },
            { chinese: '空间', pinyin: 'kōng jiān', translation: 'пространство', emoji: '🌌', hsk: '3' },
        ]
    },
    '学': {
        emoji: '📚',
        meaning: 'учиться, школа',
        words: [
            { chinese: '大学', pinyin: 'dà xué', translation: 'университет', emoji: '🏫', hsk: '1' },
            { chinese: '学生', pinyin: 'xué shēng', translation: 'ученик', emoji: '🧑‍🎓', hsk: '1' },
            { chinese: '学习', pinyin: 'xué xí', translation: 'учиться', emoji: '📖', hsk: '1' },
            { chinese: '学校', pinyin: 'xué xiào', translation: 'школа', emoji: '🏫', hsk: '1' },
            { chinese: '学问', pinyin: 'xué wèn', translation: 'знания', emoji: '🧠', hsk: '4' },
        ]
    },
    '前': {
        emoji: '👆',
        meaning: 'перед, спереди',
        words: [
            { chinese: '前面', pinyin: 'qián miàn', translation: 'спереди', emoji: '🔝', hsk: '2' },
            { chinese: '以前', pinyin: 'yǐ qián', translation: 'раньше', emoji: '⏮️', hsk: '1' },
            { chinese: '前天', pinyin: 'qián tiān', translation: 'позавчера', emoji: '🗓️', hsk: '2' },
            { chinese: '前进', pinyin: 'qián jìn', translation: 'идти вперёд', emoji: '🚀', hsk: '3' },
        ]
    },
    '后': {
        emoji: '👇',
        meaning: 'после, сзади',
        words: [
            { chinese: '后面', pinyin: 'hòu miàn', translation: 'сзади', emoji: '🔙', hsk: '2' },
            { chinese: '以后', pinyin: 'yǐ hòu', translation: 'после, позже', emoji: '⏭️', hsk: '1' },
            { chinese: '后天', pinyin: 'hòu tiān', translation: 'послезавтра', emoji: '🗓️', hsk: '2' },
            { chinese: '后来', pinyin: 'hòu lái', translation: 'позже, потом', emoji: '⏩', hsk: '2' },
        ]
    },
    '年': {
        emoji: '📅',
        meaning: 'год, возраст',
        words: [
            { chinese: '今年', pinyin: 'jīn nián', translation: 'в этом году', emoji: '📆', hsk: '1' },
            { chinese: '去年', pinyin: 'qù nián', translation: 'в прошлом году', emoji: '📅', hsk: '2' },
            { chinese: '明年', pinyin: 'míng nián', translation: 'в следующем году', emoji: '📅', hsk: '1' },
            { chinese: '新年', pinyin: 'xīn nián', translation: 'Новый год', emoji: '🎆', hsk: '2' },
            { chinese: '年龄', pinyin: 'nián líng', translation: 'возраст', emoji: '🎂', hsk: '3' },
        ]
    },
    '星': {
        emoji: '⭐',
        meaning: 'звезда, планета',
        words: [
            { chinese: '星星', pinyin: 'xīng xing', translation: 'звезда', emoji: '⭐', hsk: '2' },
            { chinese: '星期', pinyin: 'xīng qī', translation: 'неделя', emoji: '📅', hsk: '1' },
            { chinese: '明星', pinyin: 'míng xīng', translation: 'звезда (знаменитость)', emoji: '🌟', hsk: '3' },
            { chinese: '卫星', pinyin: 'wèi xīng', translation: 'спутник', emoji: '🛰️', hsk: '4' },
        ]
    },
    '语': {
        emoji: '🗣️',
        meaning: 'язык, речь',
        words: [
            { chinese: '语言', pinyin: 'yǔ yán', translation: 'язык', emoji: '🗣️', hsk: '3' },
            { chinese: '英语', pinyin: 'yīng yǔ', translation: 'английский язык', emoji: '🇬🇧', hsk: '1' },
            { chinese: '汉语', pinyin: 'hàn yǔ', translation: 'китайский язык', emoji: '🇨🇳', hsk: '1' },
            { chinese: '日语', pinyin: 'rì yǔ', translation: 'японский язык', emoji: '🇯🇵', hsk: '3' },
            { chinese: '俄语', pinyin: 'é yǔ', translation: 'русский язык', emoji: '🇷🇺', hsk: '3' },
        ]
    },
    '作': {
        emoji: '✍️',
        meaning: 'делать, работа, произведение',
        words: [
            { chinese: '工作', pinyin: 'gōng zuò', translation: 'работа', emoji: '💼', hsk: '1' },
            { chinese: '作业', pinyin: 'zuò yè', translation: 'домашнее задание', emoji: '📝', hsk: '2' },
            { chinese: '作家', pinyin: 'zuò jiā', translation: 'писатель', emoji: '🖊️', hsk: '3' },
            { chinese: '作品', pinyin: 'zuò pǐn', translation: 'произведение', emoji: '🎨', hsk: '3' },
            { chinese: '作用', pinyin: 'zuò yòng', translation: 'роль, функция', emoji: '⚡', hsk: '3' },
        ]
    },
    '工': {
        emoji: '🔧',
        meaning: 'работа, труд, рабочий',
        words: [
            { chinese: '工作', pinyin: 'gōng zuò', translation: 'работа', emoji: '💼', hsk: '1' },
            { chinese: '工人', pinyin: 'gōng rén', translation: 'рабочий', emoji: '👷', hsk: '2' },
            { chinese: '工厂', pinyin: 'gōng chǎng', translation: 'завод', emoji: '🏭', hsk: '3' },
            { chinese: '工资', pinyin: 'gōng zī', translation: 'зарплата', emoji: '💰', hsk: '4' },
            { chinese: '手工', pinyin: 'shǒu gōng', translation: 'ручная работа', emoji: '🧵', hsk: '4' },
        ]
    },
    '业': {
        emoji: '🏢',
        meaning: 'дело, профессия, отрасль',
        words: [
            { chinese: '作业', pinyin: 'zuò yè', translation: 'домашнее задание', emoji: '📝', hsk: '2' },
            { chinese: '专业', pinyin: 'zhuān yè', translation: 'специальность', emoji: '🎓', hsk: '3' },
            { chinese: '事业', pinyin: 'shì yè', translation: 'карьера, дело', emoji: '💼', hsk: '4' },
            { chinese: '企业', pinyin: 'qǐ yè', translation: 'предприятие', emoji: '🏢', hsk: '4' },
        ]
    },
    '医': {
        emoji: '🏥',
        meaning: 'медицина, врач',
        words: [
            { chinese: '医生', pinyin: 'yī shēng', translation: 'врач', emoji: '👨‍⚕️', hsk: '2' },
            { chinese: '医院', pinyin: 'yī yuàn', translation: 'больница', emoji: '🏥', hsk: '2' },
            { chinese: '医学', pinyin: 'yī xué', translation: 'медицина', emoji: '💊', hsk: '4' },
            { chinese: '中医', pinyin: 'zhōng yī', translation: 'китайская медицина', emoji: '🌿', hsk: '3' },
        ]
    },
    '药': {
        emoji: '💊',
        meaning: 'лекарство, медикамент',
        words: [
            { chinese: '药', pinyin: 'yào', translation: 'лекарство', emoji: '💊', hsk: '2' },
            { chinese: '药店', pinyin: 'yào diàn', translation: 'аптека', emoji: '🏪', hsk: '3' },
            { chinese: '吃药', pinyin: 'chī yào', translation: 'принимать лекарство', emoji: '💊', hsk: '2' },
            { chinese: '中药', pinyin: 'zhōng yào', translation: 'китайское лекарство', emoji: '🌿', hsk: '3' },
        ]
    },
    '院': {
        emoji: '🏛️',
        meaning: 'учреждение, двор',
        words: [
            { chinese: '医院', pinyin: 'yī yuàn', translation: 'больница', emoji: '🏥', hsk: '2' },
            { chinese: '学院', pinyin: 'xué yuàn', translation: 'институт, колледж', emoji: '🏫', hsk: '3' },
            { chinese: '院子', pinyin: 'yuàn zi', translation: 'двор', emoji: '🏡', hsk: '3' },
            { chinese: '法院', pinyin: 'fǎ yuàn', translation: 'суд', emoji: '⚖️', hsk: '4' },
        ]
    },
    '报': {
        emoji: '📰',
        meaning: 'газета, сообщать',
        words: [
            { chinese: '报纸', pinyin: 'bào zhǐ', translation: 'газета', emoji: '📰', hsk: '2' },
            { chinese: '报告', pinyin: 'bào gào', translation: 'отчёт, доклад', emoji: '📊', hsk: '3' },
            { chinese: '报名', pinyin: 'bào míng', translation: 'регистрироваться', emoji: '📝', hsk: '3' },
            { chinese: '报道', pinyin: 'bào dào', translation: 'репортаж', emoji: '📢', hsk: '4' },
        ]
    },
    '纸': {
        emoji: '📄',
        meaning: 'бумага, лист',
        words: [
            { chinese: '报纸', pinyin: 'bào zhǐ', translation: 'газета', emoji: '📰', hsk: '2' },
            { chinese: '纸', pinyin: 'zhǐ', translation: 'бумага', emoji: '📄', hsk: '2' },
            { chinese: '纸巾', pinyin: 'zhǐ jīn', translation: 'бумажная салфетка', emoji: '🧻', hsk: '4' },
            { chinese: '纸条', pinyin: 'zhǐ tiáo', translation: 'записка', emoji: '📝', hsk: '4' },
        ]
    },
    '脑': {
        emoji: '🧠',
        meaning: 'мозг, ум',
        words: [
            { chinese: '电脑', pinyin: 'diàn nǎo', translation: 'компьютер', emoji: '💻', hsk: '2' },
            { chinese: '头脑', pinyin: 'tóu nǎo', translation: 'голова, ум', emoji: '🧠', hsk: '4' },
            { chinese: '大脑', pinyin: 'dà nǎo', translation: 'мозг', emoji: '🧠', hsk: '4' },
            { chinese: '脑力', pinyin: 'nǎo lì', translation: 'умственные способности', emoji: '💡', hsk: '5' },
        ]
    },
    '机': {
        emoji: '⚙️',
        meaning: 'машина, механизм, случай',
        words: [
            { chinese: '手机', pinyin: 'shǒu jī', translation: 'телефон', emoji: '📱', hsk: '1' },
            { chinese: '飞机', pinyin: 'fēi jī', translation: 'самолёт', emoji: '✈️', hsk: '2' },
            { chinese: '机会', pinyin: 'jī huì', translation: 'возможность', emoji: '🎯', hsk: '3' },
            { chinese: '机器', pinyin: 'jī qì', translation: 'машина', emoji: '⚙️', hsk: '3' },
            { chinese: '动机', pinyin: 'dòng jī', translation: 'мотив', emoji: '💭', hsk: '4' },
        ]
    },
    '会': {
        emoji: '👥',
        meaning: 'уметь, встречаться, собрание',
        words: [
            { chinese: '开会', pinyin: 'kāi huì', translation: 'проводить собрание', emoji: '📋', hsk: '2' },
            { chinese: '不会', pinyin: 'bù huì', translation: 'не уметь, не будет', emoji: '❌', hsk: '1' },
            { chinese: '会议', pinyin: 'huì yì', translation: 'собрание, конференция', emoji: '📊', hsk: '3' },
            { chinese: '社会', pinyin: 'shè huì', translation: 'общество', emoji: '🌍', hsk: '3' },
            { chinese: '会见', pinyin: 'huì jiàn', translation: 'встречаться', emoji: '🤝', hsk: '4' },
        ]
    },
};

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
