// ===== БАЗА ДАННЫХ: ВСЕ КЛЮЧИ И СЛОВА =====
const WORDS_BY_KEY = {
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
