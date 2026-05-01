// ПОЛНАЯ БАЗА ДАННЫХ ПИНЬИНЯ (ЧАСТЬ 1)
// Инициали: B, P, M, F, D

const pinyinFullDB = {
    // ==================== B ====================
    b: {
        desc: "b [p] — как «б» в слове «спорт» (без выдоха, без голоса)",
        ru_sound: "бэ (как в «спорт», губы сомкнуты, голоса нет)",
        articulation: "🗣️ Губы плотно сомкнуты → резко размыкаются. ГОЛОС НЕ ВКЛЮЧЁН.",
        sound: "bā",
        syllables: {
            ba: { 
                translation: "ба",
                tones: [
                    { tone: "1-й", pinyin: "bā", ru: "ба", char: "八", meaning: "восемь 🧮", example: "八个 bā ge", example_ru: "8 штук", sound: "八个" },
                    { tone: "2-й", pinyin: "bá", ru: "ба", char: "拔", meaning: "вытаскивать 🌿", example: "拔草 bá cǎo", example_ru: "выдёргивать траву", sound: "拔草" },
                    { tone: "3-й", pinyin: "bǎ", ru: "ба", char: "把", meaning: "держать ✋", example: "把手 bǎ shǒu", example_ru: "ручка", sound: "把手" },
                    { tone: "4-й", pinyin: "bà", ru: "ба", char: "爸", meaning: "папа 👨", example: "爸爸 bàba", example_ru: "папа", sound: "爸爸" }
                ]
            },
            bo: { 
                translation: "бо",
                tones: [
                    { tone: "1-й", pinyin: "bō", ru: "бо", char: "波", meaning: "волна 🌊", example: "波浪 bō làng", example_ru: "волны", sound: "波浪" },
                    { tone: "2-й", pinyin: "bó", ru: "бо", char: "伯", meaning: "дядя 👨‍🦳", example: "伯伯 bó bo", example_ru: "дядя", sound: "伯伯" },
                    { tone: "3-й", pinyin: "bǒ", ru: "бо", char: "跛", meaning: "хромой 🦯", example: "跛脚 bǒ jiǎo", example_ru: "хромая нога", sound: "跛脚" },
                    { tone: "4-й", pinyin: "bò", ru: "бо", char: "薄", meaning: "мята 🌿", example: "薄荷 bò he", example_ru: "мята", sound: "薄荷" }
                ]
            },
            bai: { 
                translation: "бай",
                tones: [
                    { tone: "1-й", pinyin: "bāi", ru: "бай", char: "掰", meaning: "разломить ✨", example: "掰开 bāi kāi", example_ru: "разломить", sound: "掰开" },
                    { tone: "2-й", pinyin: "bái", ru: "бай", char: "白", meaning: "белый ⚪", example: "白色 bái sè", example_ru: "белый цвет", sound: "白色" },
                    { tone: "3-й", pinyin: "bǎi", ru: "бай", char: "百", meaning: "сто 💯", example: "一百 yī bǎi", example_ru: "сто", sound: "一百" },
                    { tone: "4-й", pinyin: "bài", ru: "бай", char: "败", meaning: "провал 😞", example: "失败 shī bài", example_ru: "провал", sound: "失败" }
                ]
            },
            bao: { 
                translation: "бао",
                tones: [
                    { tone: "1-й", pinyin: "bāo", ru: "бао", char: "包", meaning: "сумка 🎒", example: "包子 bāo zi", example_ru: "баоцзы (пирожки)", sound: "包子" },
                    { tone: "2-й", pinyin: "báo", ru: "бао", char: "薄", meaning: "тонкий 📄", example: "薄厚 báo hòu", example_ru: "толщина", sound: "薄厚" },
                    { tone: "3-й", pinyin: "bǎo", ru: "бао", char: "饱", meaning: "сытый 😋", example: "吃饱 chī bǎo", example_ru: "наесться", sound: "吃饱" },
                    { tone: "4-й", pinyin: "bào", ru: "бао", char: "报", meaning: "газета 📰", example: "报纸 bào zhǐ", example_ru: "газета", sound: "报纸" }
                ]
            },
            bei: { 
                translation: "бэй",
                tones: [
                    { tone: "1-й", pinyin: "bēi", ru: "бэй", char: "杯", meaning: "чашка ☕", example: "杯子 bēi zi", example_ru: "чашка", sound: "杯子" },
                    { tone: "2-й", pinyin: "béi", ru: "бэй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "杯" },
                    { tone: "3-й", pinyin: "běi", ru: "бэй", char: "北", meaning: "север 🧭", example: "北方 běi fāng", example_ru: "север", sound: "北方" },
                    { tone: "4-й", pinyin: "bèi", ru: "бэй", char: "被", meaning: "одеяло 🛏️", example: "被子 bèi zi", example_ru: "одеяло", sound: "被子" }
                ]
            },
            ban: { 
                translation: "бань",
                tones: [
                    { tone: "1-й", pinyin: "bān", ru: "бань", char: "班", meaning: "класс 🏫", example: "班级 bān jí", example_ru: "класс", sound: "班级" },
                    { tone: "2-й", pinyin: "bán", ru: "бань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "班" },
                    { tone: "3-й", pinyin: "bǎn", ru: "бань", char: "板", meaning: "доска 🔲", example: "黑板 hēi bǎn", example_ru: "чёрная доска", sound: "黑板" },
                    { tone: "4-й", pinyin: "bàn", ru: "бань", char: "办", meaning: "делать ✅", example: "办法 bàn fǎ", example_ru: "способ", sound: "办法" }
                ]
            },
            bang: { 
                translation: "бан",
                tones: [
                    { tone: "1-й", pinyin: "bāng", ru: "бан", char: "帮", meaning: "помогать 🤝", example: "帮助 bāng zhù", example_ru: "помощь", sound: "帮助" },
                    { tone: "2-й", pinyin: "báng", ru: "бан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "帮" },
                    { tone: "3-й", pinyin: "bǎng", ru: "бан", char: "榜", meaning: "список 📋", example: "榜样 bǎng yàng", example_ru: "пример", sound: "榜样" },
                    { tone: "4-й", pinyin: "bàng", ru: "бан", char: "棒", meaning: "палка 🏒", example: "棒球 bàng qiú", example_ru: "бейсбол", sound: "棒球" }
                ]
            },
            ben: { 
                translation: "бэнь",
                tones: [
                    { tone: "1-й", pinyin: "bēn", ru: "бэнь", char: "奔", meaning: "бежать 🏃", example: "奔跑 bēn pǎo", example_ru: "бежать", sound: "奔跑" },
                    { tone: "2-й", pinyin: "bén", ru: "бэнь", char: "甭", meaning: "не надо ❌", example: "甭说 béng shuō", example_ru: "не говори", sound: "甭说" },
                    { tone: "3-й", pinyin: "běn", ru: "бэнь", char: "本", meaning: "книга 📖", example: "书本 shū běn", example_ru: "книга", sound: "书本" },
                    { tone: "4-й", pinyin: "bèn", ru: "бэнь", char: "笨", meaning: "глупый 🤪", example: "笨蛋 bèn dàn", example_ru: "глупец", sound: "笨蛋" }
                ]
            },
            beng: { 
                translation: "бэн",
                tones: [
                    { tone: "1-й", pinyin: "bēng", ru: "бэн", char: "崩", meaning: "обрушиться 💥", example: "崩溃 bēng kuì", example_ru: "крах", sound: "崩溃" },
                    { tone: "2-й", pinyin: "béng", ru: "бэн", char: "甭", meaning: "не надо", example: "甭管 béng guǎn", example_ru: "неважно", sound: "甭管" },
                    { tone: "3-й", pinyin: "běng", ru: "бэн", char: "绷", meaning: "натянуть 🎀", example: "绷带 bēng dài", example_ru: "бинт", sound: "绷带" },
                    { tone: "4-й", pinyin: "bèng", ru: "бэн", char: "蹦", meaning: "прыгать 🦘", example: "蹦跳 bèng tiào", example_ru: "прыгать", sound: "蹦跳" }
                ]
            },
            bi: { 
                translation: "би",
                tones: [
                    { tone: "1-й", pinyin: "bī", ru: "би", char: "逼", meaning: "заставлять 😤", example: "逼迫 bī pò", example_ru: "принуждать", sound: "逼迫" },
                    { tone: "2-й", pinyin: "bí", ru: "би", char: "鼻", meaning: "нос 👃", example: "鼻子 bí zi", example_ru: "нос", sound: "鼻子" },
                    { tone: "3-й", pinyin: "bǐ", ru: "би", char: "笔", meaning: "ручка ✒️", example: "铅笔 qiān bǐ", example_ru: "карандаш", sound: "铅笔" },
                    { tone: "4-й", pinyin: "bì", ru: "би", char: "必", meaning: "обязательно ⚠️", example: "必须 bì xū", example_ru: "необходимо", sound: "必须" }
                ]
            },
            bie: { 
                translation: "бие",
                tones: [
                    { tone: "1-й", pinyin: "biē", ru: "бие", char: "憋", meaning: "сдерживать 🤐", example: "憋气 biē qì", example_ru: "задержать дыхание", sound: "憋气" },
                    { tone: "2-й", pinyin: "bié", ru: "бие", char: "别", meaning: "другой 🔄", example: "别人 bié rén", example_ru: "другой человек", sound: "别人" },
                    { tone: "3-й", pinyin: "biě", ru: "бие", char: "瘪", meaning: "сплющенный 📦", example: "干瘪 gān biě", example_ru: "сухой, сморщенный", sound: "干瘪" },
                    { tone: "4-й", pinyin: "biè", ru: "бие", char: "别", meaning: "неловкий 😅", example: "别扭 biè niu", example_ru: "неловкий", sound: "别扭" }
                ]
            },
            biao: { 
                translation: "биао",
                tones: [
                    { tone: "1-й", pinyin: "biāo", ru: "биао", char: "标", meaning: "знак 🏷️", example: "标准 biāo zhǔn", example_ru: "стандарт", sound: "标准" },
                    { tone: "2-й", pinyin: "biáo", ru: "биао", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "标" },
                    { tone: "3-й", pinyin: "biǎo", ru: "биао", char: "表", meaning: "часы ⌚", example: "手表 shǒu biǎo", example_ru: "наручные часы", sound: "手表" },
                    { tone: "4-й", pinyin: "biào", ru: "биао", char: "鳔", meaning: "пузырь 🐟", example: "鱼鳔 yú biào", example_ru: "плавательный пузырь", sound: "鱼鳔" }
                ]
            },
            bian: { 
                translation: "биань",
                tones: [
                    { tone: "1-й", pinyin: "biān", ru: "биань", char: "边", meaning: "сторона 📐", example: "旁边 páng biān", example_ru: "рядом", sound: "旁边" },
                    { tone: "2-й", pinyin: "bián", ru: "биань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "边" },
                    { tone: "3-й", pinyin: "biǎn", ru: "биань", char: "扁", meaning: "плоский 🥞", example: "扁豆 biǎn dòu", example_ru: "фасоль", sound: "扁豆" },
                    { tone: "4-й", pinyin: "biàn", ru: "биань", char: "便", meaning: "удобный 👍", example: "方便 fāng biàn", example_ru: "удобно", sound: "方便" }
                ]
            },
            bin: { 
                translation: "бинь",
                tones: [
                    { tone: "1-й", pinyin: "bīn", ru: "бинь", char: "宾", meaning: "гость 🚪", example: "宾馆 bīn guǎn", example_ru: "гостиница", sound: "宾馆" },
                    { tone: "2-й", pinyin: "bín", ru: "бинь", char: "彬", meaning: "изящный ✨", example: "彬彬有礼 bīn bīn yǒu lǐ", example_ru: "вежливый", sound: "彬彬有礼" },
                    { tone: "3-й", pinyin: "bǐn", ru: "бинь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "宾" },
                    { tone: "4-й", pinyin: "bìn", ru: "бинь", char: "殡", meaning: "похороны ⚰️", example: "殡仪馆 bìn yí guǎn", example_ru: "похоронное бюро", sound: "殡仪馆" }
                ]
            },
            bing: { 
                translation: "бин",
                tones: [
                    { tone: "1-й", pinyin: "bīng", ru: "бин", char: "冰", meaning: "лёд ❄️", example: "冰块 bīng kuài", example_ru: "кубик льда", sound: "冰块" },
                    { tone: "2-й", pinyin: "bíng", ru: "бин", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "冰" },
                    { tone: "3-й", pinyin: "bǐng", ru: "бин", char: "饼", meaning: "лепёшка 🥮", example: "饼干 bǐng gān", example_ru: "печенье", sound: "饼干" },
                    { tone: "4-й", pinyin: "bìng", ru: "бин", char: "并", meaning: "и ➕", example: "并且 bìng qiě", example_ru: "и также", sound: "并且" }
                ]
            },
            bu: { 
                translation: "бу",
                tones: [
                    { tone: "1-й", pinyin: "bū", ru: "бу", char: "逋", meaning: "—", example: "—", example_ru: "—", sound: "逋" },
                    { tone: "2-й", pinyin: "bú", ru: "бу", char: "醭", meaning: "плесень 🍄", example: "醭子 bú zi", example_ru: "плесень", sound: "醭子" },
                    { tone: "3-й", pinyin: "bǔ", ru: "бу", char: "补", meaning: "дополнять ➕", example: "补充 bǔ chōng", example_ru: "дополнять", sound: "补充" },
                    { tone: "4-й", pinyin: "bù", ru: "бу", char: "不", meaning: "не ❌", example: "不是 bù shì", example_ru: "не является", sound: "不是" }
                ]
            }
        }
    },

    // ==================== P (ИСПРАВЛЕН) ====================
    p: {
        desc: "p [pʰ] — как «п» с сильным выдохом (положи руку перед ртом)",
        ru_sound: "пэ (с сильным выдохом, как при задувании свечи)",
        articulation: "💨 Губы с сильным выдохом",
        sound: "pā",
        syllables: {
            pa: { 
                translation: "па",
                tones: [
                    { tone: "1-й", pinyin: "pā", ru: "па", char: "趴", meaning: "лежать 😴", example: "趴下 pā xià", example_ru: "лечь", sound: "趴下" },
                    { tone: "2-й", pinyin: "pá", ru: "па", char: "爬", meaning: "ползать 🐛", example: "爬山 pá shān", example_ru: "лазить по горам", sound: "爬山" },
                    { tone: "3-й", pinyin: "pǎ", ru: "па", char: "啪", meaning: "хлоп 👏", example: "啪啪 pā pā", example_ru: "хлоп-хлоп", sound: "啪啪" },
                    { tone: "4-й", pinyin: "pà", ru: "па", char: "怕", meaning: "бояться 😨", example: "害怕 hài pà", example_ru: "бояться", sound: "害怕" }
                ]
            },
            po: { 
                translation: "по",
                tones: [
                    { tone: "1-й", pinyin: "pō", ru: "по", char: "坡", meaning: "склон ⛰️", example: "山坡 shān pō", example_ru: "горный склон", sound: "山坡" },
                    { tone: "2-й", pinyin: "pó", ru: "по", char: "婆", meaning: "бабушка 👵", example: "婆婆 pó po", example_ru: "свекровь", sound: "婆婆" },
                    { tone: "3-й", pinyin: "pǒ", ru: "по", char: "叵", meaning: "нельзя 🚫", example: "叵测 pǒ cè", example_ru: "непредсказуемый", sound: "叵测" },
                    { tone: "4-й", pinyin: "pò", ru: "по", char: "破", meaning: "сломанный 💔", example: "破坏 pò huài", example_ru: "разрушать", sound: "破坏" }
                ]
            },
            pai: { 
                translation: "пай",
                tones: [
                    { tone: "1-й", pinyin: "pāi", ru: "пай", char: "拍", meaning: "хлопать 👏", example: "拍照 pāi zhào", example_ru: "фотографировать", sound: "拍照" },
                    { tone: "2-й", pinyin: "pái", ru: "пай", char: "排", meaning: "ряд 📏", example: "排队 pái duì", example_ru: "стоять в очереди", sound: "排队" },
                    { tone: "3-й", pinyin: "pǎi", ru: "пай", char: "迫", meaning: "миномёт 💣", example: "迫击炮 pǎi jī pào", example_ru: "миномёт", sound: "迫击炮" },
                    { tone: "4-й", pinyin: "pài", ru: "пай", char: "派", meaning: "отправлять 📤", example: "派人 pài rén", example_ru: "послать человека", sound: "派人" }
                ]
            },
            pao: { 
                translation: "пао",
                tones: [
                    { tone: "1-й", pinyin: "pāo", ru: "пао", char: "抛", meaning: "бросать 🎯", example: "抛弃 pāo qì", example_ru: "бросать", sound: "抛弃" },
                    { tone: "2-й", pinyin: "páo", ru: "пао", char: "刨", meaning: "строгать 🔨", example: "刨木头 páo mù tou", example_ru: "строгать дерево", sound: "刨木头" },
                    { tone: "3-й", pinyin: "pǎo", ru: "пао", char: "跑", meaning: "бежать 🏃", example: "跑步 pǎo bù", example_ru: "бег", sound: "跑步" },
                    { tone: "4-й", pinyin: "pào", ru: "пао", char: "炮", meaning: "пушка 🔫", example: "大炮 dà pào", example_ru: "пушка", sound: "大炮" }
                ]
            },
            pan: { 
                translation: "пань",
                tones: [
                    { tone: "1-й", pinyin: "pān", ru: "пань", char: "攀", meaning: "карабкаться 🧗", example: "攀登 pān dēng", example_ru: "взбираться", sound: "攀登" },
                    { tone: "2-й", pinyin: "pán", ru: "пань", char: "盘", meaning: "тарелка 🍽️", example: "盘子 pán zi", example_ru: "тарелка", sound: "盘子" },
                    { tone: "3-й", pinyin: "pǎn", ru: "пань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "盘" },
                    { tone: "4-й", pinyin: "pàn", ru: "пань", char: "判", meaning: "судить ⚖️", example: "判断 pàn duàn", example_ru: "суждение", sound: "判断" }
                ]
            },
            pen: { 
                translation: "пэнь",
                tones: [
                    { tone: "1-й", pinyin: "pēn", ru: "пэнь", char: "喷", meaning: "пшикать 💦", example: "喷水 pēn shuǐ", example_ru: "брызгать водой", sound: "喷水" },
                    { tone: "2-й", pinyin: "pén", ru: "пэнь", char: "盆", meaning: "таз 🪣", example: "花盆 huā pén", example_ru: "цветочный горшок", sound: "花盆" },
                    { tone: "3-й", pinyin: "pěn", ru: "пэнь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "喷" },
                    { tone: "4-й", pinyin: "pèn", ru: "пэнь", char: "喷", meaning: "ароматный 🌸", example: "喷香 pèn xiāng", example_ru: "ароматный", sound: "喷香" }
                ]
            },
            peng: { 
                translation: "пэн",
                tones: [
                    { tone: "1-й", pinyin: "pēng", ru: "пэн", char: "砰", meaning: "бах 💥", example: "砰砰 pēng pēng", example_ru: "бах-бах", sound: "砰砰" },
                    { tone: "2-й", pinyin: "péng", ru: "пэн", char: "朋", meaning: "друг 👫", example: "朋友 péng you", example_ru: "друг", sound: "朋友" },
                    { tone: "3-й", pinyin: "pěng", ru: "пэн", char: "捧", meaning: "держать 🤲", example: "捧场 pěng chǎng", example_ru: "поддерживать", sound: "捧场" },
                    { tone: "4-й", pinyin: "pèng", ru: "пэн", char: "碰", meaning: "встречать 🤝", example: "碰见 pèng jiàn", example_ru: "сталкиваться", sound: "碰见" }
                ]
            },
            pi: { 
                translation: "пи",
                tones: [
                    { tone: "1-й", pinyin: "pī", ru: "пи", char: "批", meaning: "критиковать 📝", example: "批评 pī píng", example_ru: "критика", sound: "批评" },
                    { tone: "2-й", pinyin: "pí", ru: "пи", char: "皮", meaning: "кожа 🧴", example: "皮肤 pí fū", example_ru: "кожа", sound: "皮肤" },
                    { tone: "3-й", pinyin: "pǐ", ru: "пи", char: "匹", meaning: "счётное слово 🐴", example: "一匹 yī pǐ", example_ru: "один (о лошади)", sound: "一匹" },
                    { tone: "4-й", pinyin: "pì", ru: "пи", char: "屁", meaning: "попа 🍑", example: "屁股 pì gu", example_ru: "попа", sound: "屁股" }
                ]
            },
            pie: { 
                translation: "пие",
                tones: [
                    { tone: "1-й", pinyin: "piē", ru: "пие", char: "撇", meaning: "отбрасывать ↩️", example: "撇开 piē kāi", example_ru: "отбрасывать", sound: "撇开" },
                    { tone: "2-й", pinyin: "pié", ru: "пие", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "撇" },
                    { tone: "3-й", pinyin: "piě", ru: "пие", char: "撇", meaning: "черта ✍️", example: "撇捺 piě nà", example_ru: "черта", sound: "撇捺" },
                    { tone: "4-й", pinyin: "piè", ru: "пие", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "撇" }
                ]
            },
            piao: { 
                translation: "пиао",
                tones: [
                    { tone: "1-й", pinyin: "piāo", ru: "пиао", char: "飘", meaning: "парить 🕊️", example: "飘动 piāo dòng", example_ru: "парить", sound: "飘动" },
                    { tone: "2-й", pinyin: "piáo", ru: "пиао", char: "瓢", meaning: "ковш 🥄", example: "瓢虫 piáo chóng", example_ru: "божья коровка", sound: "瓢虫" },
                    { tone: "3-й", pinyin: "piǎo", ru: "пиао", char: "漂", meaning: "отбеливать 🧼", example: "漂白 piǎo bái", example_ru: "отбеливание", sound: "漂白" },
                    { tone: "4-й", pinyin: "piào", ru: "пиао", char: "票", meaning: "билет 🎫", example: "车票 chē piào", example_ru: "билет", sound: "车票" }
                ]
            },
            pian: { 
                translation: "пиань",
                tones: [
                    { tone: "1-й", pinyin: "piān", ru: "пиань", char: "片", meaning: "кусок 🧩", example: "片刻 piān kè", example_ru: "мгновение", sound: "片刻" },
                    { tone: "2-й", pinyin: "pián", ru: "пиань", char: "便", meaning: "дешёвый 💰", example: "便宜 pián yi", example_ru: "дешёвый", sound: "便宜" },
                    { tone: "3-й", pinyin: "piǎn", ru: "пиань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "片" },
                    { tone: "4-й", pinyin: "piàn", ru: "пиань", char: "片", meaning: "кусок", example: "照片 zhào piàn", example_ru: "фотография", sound: "照片" }
                ]
            },
            pin: { 
                translation: "пинь",
                tones: [
                    { tone: "1-й", pinyin: "pīn", ru: "пинь", char: "拼", meaning: "складывать 🧩", example: "拼音 pīn yīn", example_ru: "фонетика", sound: "拼音" },
                    { tone: "2-й", pinyin: "pín", ru: "пинь", char: "贫", meaning: "бедный 🥺", example: "贫穷 pín qióng", example_ru: "бедность", sound: "贫穷" },
                    { tone: "3-й", pinyin: "pǐn", ru: "пинь", char: "品", meaning: "продукт 📦", example: "商品 shāng pǐn", example_ru: "товар", sound: "商品" },
                    { tone: "4-й", pinyin: "pìn", ru: "пинь", char: "聘", meaning: "нанимать 💼", example: "聘请 pìn qǐng", example_ru: "нанимать", sound: "聘请" }
                ]
            },
            ping: { 
                translation: "пин",
                tones: [
                    { tone: "1-й", pinyin: "pīng", ru: "пин", char: "乒", meaning: "пинг 🏓", example: "乒乓 pīng pāng", example_ru: "пинг-понг", sound: "乒乓" },
                    { tone: "2-й", pinyin: "píng", ru: "пин", char: "平", meaning: "ровный 🟰", example: "平安 píng ān", example_ru: "спокойствие", sound: "平安" },
                    { tone: "3-й", pinyin: "pǐng", ru: "пин", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "平" },
                    { tone: "4-й", pinyin: "pìng", ru: "пин", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "平" }
                ]
            },
            pu: { 
                translation: "пу",
                tones: [
                    { tone: "1-й", pinyin: "pū", ru: "пу", char: "扑", meaning: "бросаться 🏃", example: "扑倒 pū dǎo", example_ru: "броситься", sound: "扑倒" },
                    { tone: "2-й", pinyin: "pú", ru: "пу", char: "葡", meaning: "виноград 🍇", example: "葡萄 pú tao", example_ru: "виноград", sound: "葡萄" },
                    { tone: "3-й", pinyin: "pǔ", ru: "пу", char: "普", meaning: "везде 🌍", example: "普通 pǔ tōng", example_ru: "обычный", sound: "普通" },
                    { tone: "4-й", pinyin: "pù", ru: "пу", char: "铺", meaning: "магазин 🏪", example: "店铺 diàn pù", example_ru: "магазин", sound: "店铺" }
                ]
            }
        }
    },

    // ==================== M (ИСПРАВЛЕН) ====================
    m: {
        desc: "m [m] — как русская «м»",
        ru_sound: "мэ (как в слове «мама», губы сомкнуты)",
        articulation: "👄 Губы сомкнуты, воздух через нос.",
        sound: "mā",
        syllables: {
            ma: { 
                translation: "ма",
                tones: [
                    { tone: "1-й", pinyin: "mā", ru: "ма", char: "妈", meaning: "мама 👩", example: "妈妈 māma", example_ru: "мама", sound: "妈妈" },
                    { tone: "2-й", pinyin: "má", ru: "ма", char: "麻", meaning: "конопля 🌿", example: "麻木 má mù", example_ru: "онемелый", sound: "麻木" },
                    { tone: "3-й", pinyin: "mǎ", ru: "ма", char: "马", meaning: "лошадь 🐎", example: "马上 mǎ shàng", example_ru: "сразу", sound: "马上" },
                    { tone: "4-й", pinyin: "mà", ru: "ма", char: "骂", meaning: "ругать 😠", example: "骂人 mà rén", example_ru: "ругаться", sound: "骂人" }
                ]
            },
            mo: { 
                translation: "мо",
                tones: [
                    { tone: "1-й", pinyin: "mō", ru: "мо", char: "摸", meaning: "трогать 🖐️", example: "摸黑 mō hēi", example_ru: "в темноте", sound: "摸黑" },
                    { tone: "2-й", pinyin: "mó", ru: "мо", char: "模", meaning: "модель 🎨", example: "模型 mó xíng", example_ru: "модель", sound: "模型" },
                    { tone: "3-й", pinyin: "mǒ", ru: "мо", char: "抹", meaning: "мазать 🧴", example: "抹布 mǒ bù", example_ru: "тряпка", sound: "抹布" },
                    { tone: "4-й", pinyin: "mò", ru: "мо", char: "莫", meaning: "не ❌", example: "莫怕 mò pà", example_ru: "не бойся", sound: "莫怕" }
                ]
            },
            mai: { 
                translation: "май",
                tones: [
                    { tone: "1-й", pinyin: "māi", ru: "май", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "埋" },
                    { tone: "2-й", pinyin: "mái", ru: "май", char: "埋", meaning: "закапывать ⚰️", example: "埋没 mái mò", example_ru: "закапывать", sound: "埋没" },
                    { tone: "3-й", pinyin: "mǎi", ru: "май", char: "买", meaning: "покупать 🛒", example: "买票 mǎi piào", example_ru: "купить билет", sound: "买票" },
                    { tone: "4-й", pinyin: "mài", ru: "май", char: "卖", meaning: "продавать 💰", example: "卖东西 mài dōng xi", example_ru: "продавать вещи", sound: "卖东西" }
                ]
            },
            mao: { 
                translation: "мао",
                tones: [
                    { tone: "1-й", pinyin: "māo", ru: "мао", char: "猫", meaning: "кошка 🐱", example: "小猫 xiǎo māo", example_ru: "котёнок", sound: "小猫" },
                    { tone: "2-й", pinyin: "máo", ru: "мао", char: "毛", meaning: "шерсть 🐑", example: "毛线 máo xiàn", example_ru: "шерстяная нить", sound: "毛线" },
                    { tone: "3-й", pinyin: "mǎo", ru: "мао", char: "卯", meaning: "кролик 🐰", example: "卯年 mǎo nián", example_ru: "год кролика", sound: "卯年" },
                    { tone: "4-й", pinyin: "mào", ru: "мао", char: "帽", meaning: "шапка 🧢", example: "帽子 mào zi", example_ru: "шапка", sound: "帽子" }
                ]
            },
            man: { 
                translation: "мань",
                tones: [
                    { tone: "1-й", pinyin: "mān", ru: "мань", char: "颟", meaning: "небрежный 😤", example: "颟顸 mān hān", example_ru: "небрежный", sound: "颟顸" },
                    { tone: "2-й", pinyin: "mán", ru: "мань", char: "蛮", meaning: "грубый 🐗", example: "蛮不讲理 mán bù jiǎng lǐ", example_ru: "грубый", sound: "蛮不讲理" },
                    { tone: "3-й", pinyin: "mǎn", ru: "мань", char: "满", meaning: "полный 🫗", example: "满意 mǎn yì", example_ru: "довольный", sound: "满意" },
                    { tone: "4-й", pinyin: "màn", ru: "мань", char: "慢", meaning: "медленный 🐢", example: "慢慢 màn màn", example_ru: "медленно", sound: "慢慢" }
                ]
            },
            men: { 
                translation: "мэнь",
                tones: [
                    { tone: "1-й", pinyin: "mēn", ru: "мэнь", char: "闷", meaning: "душный 🌡️", example: "闷热 mēn rè", example_ru: "душно", sound: "闷热" },
                    { tone: "2-й", pinyin: "mén", ru: "мэнь", char: "门", meaning: "дверь 🚪", example: "门口 mén kǒu", example_ru: "дверь", sound: "门口" },
                    { tone: "3-й", pinyin: "měn", ru: "мэнь", char: "闷", meaning: "скучный 😑", example: "郁闷 yù mèn", example_ru: "скучный", sound: "郁闷" },
                    { tone: "4-й", pinyin: "mèn", ru: "мэнь", char: "闷", meaning: "скучный", example: "烦闷 fán mèn", example_ru: "скучный", sound: "烦闷" }
                ]
            },
            mang: { 
                translation: "ман",
                tones: [
                    { tone: "1-й", pinyin: "māng", ru: "ман", char: "牤", meaning: "бык 🐂", example: "牤牛 māng niú", example_ru: "бык", sound: "牤牛" },
                    { tone: "2-й", pinyin: "máng", ru: "ман", char: "忙", meaning: "занятой 📋", example: "忙碌 máng lù", example_ru: "занятый", sound: "忙碌" },
                    { tone: "3-й", pinyin: "mǎng", ru: "ман", char: "莽", meaning: "густой 🌿", example: "莽撞 mǎng zhuàng", example_ru: "грубый", sound: "莽撞" },
                    { tone: "4-й", pinyin: "màng", ru: "ман", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "忙" }
                ]
            },
            meng: { 
                translation: "мэн",
                tones: [
                    { tone: "1-й", pinyin: "mēng", ru: "мэн", char: "蒙", meaning: "обманывать 🎭", example: "蒙骗 mēng piàn", example_ru: "обманывать", sound: "蒙骗" },
                    { tone: "2-й", pinyin: "méng", ru: "мэн", char: "蒙", meaning: "накрывать 🧣", example: "蒙蒙小雨 méng méng xiǎo yǔ", example_ru: "моросящий дождь", sound: "蒙蒙小雨" },
                    { tone: "3-й", pinyin: "měng", ru: "мэн", char: "猛", meaning: "свирепый 🦁", example: "猛烈 měng liè", example_ru: "свирепый", sound: "猛烈" },
                    { tone: "4-й", pinyin: "mèng", ru: "мэн", char: "梦", meaning: "сон 😴", example: "梦见 mèng jiàn", example_ru: "видеть во сне", sound: "梦见" }
                ]
            },
            mi: { 
                translation: "ми",
                tones: [
                    { tone: "1-й", pinyin: "mī", ru: "ми", char: "咪", meaning: "мяу 🐱", example: "咪咪 mī mī", example_ru: "киска", sound: "咪咪" },
                    { tone: "2-й", pinyin: "mí", ru: "ми", char: "迷", meaning: "теряться 🧭", example: "迷路 mí lù", example_ru: "заблудиться", sound: "迷路" },
                    { tone: "3-й", pinyin: "mǐ", ru: "ми", char: "米", meaning: "рис 🍚", example: "米饭 mǐ fàn", example_ru: "рис", sound: "米饭" },
                    { tone: "4-й", pinyin: "mì", ru: "ми", char: "密", meaning: "секрет 🤫", example: "秘密 mì mì", example_ru: "секрет", sound: "秘密" }
                ]
            },
            mian: { 
                translation: "миань",
                tones: [
                    { tone: "1-й", pinyin: "miān", ru: "миань", char: "眠", meaning: "спать 😴", example: "安眠 ān mián", example_ru: "спать спокойно", sound: "安眠" },
                    { tone: "2-й", pinyin: "mián", ru: "миань", char: "棉", meaning: "хлопок 🌸", example: "棉花 mián huā", example_ru: "хлопок", sound: "棉花" },
                    { tone: "3-й", pinyin: "miǎn", ru: "миань", char: "免", meaning: "избегать 🙅", example: "免费 miǎn fèi", example_ru: "бесплатно", sound: "免费" },
                    { tone: "4-й", pinyin: "miàn", ru: "миань", char: "面", meaning: "лицо 😐", example: "面对 miàn duì", example_ru: "сталкиваться", sound: "面对" }
                ]
            },
            mie: { 
                translation: "мие",
                tones: [
                    { tone: "1-й", pinyin: "miē", ru: "мие", char: "乜", meaning: "косить 👀", example: "乜斜 miē xie", example_ru: "косить", sound: "乜斜" },
                    { tone: "2-й", pinyin: "mié", ru: "мие", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "乜" },
                    { tone: "3-й", pinyin: "miě", ru: "мие", char: "乜", meaning: "—", example: "—", example_ru: "—", sound: "乜" },
                    { tone: "4-й", pinyin: "miè", ru: "мие", char: "灭", meaning: "гасить 🔥", example: "消灭 xiāo miè", example_ru: "уничтожать", sound: "消灭" }
                ]
            },
            miao: { 
                translation: "миао",
                tones: [
                    { tone: "1-й", pinyin: "miāo", ru: "миао", char: "喵", meaning: "мяу 🐱", example: "喵喵叫 miāo miāo jiào", example_ru: "мяукать", sound: "喵喵叫" },
                    { tone: "2-й", pinyin: "miáo", ru: "миао", char: "苗", meaning: "росток 🌱", example: "树苗 shù miáo", example_ru: "саженец", sound: "树苗" },
                    { tone: "3-й", pinyin: "miǎo", ru: "миао", char: "秒", meaning: "секунда ⏱️", example: "秒钟 miǎo zhōng", example_ru: "секунда", sound: "秒钟" },
                    { tone: "4-й", pinyin: "miào", ru: "миао", char: "庙", meaning: "храм 🛕", example: "寺庙 sì miào", example_ru: "храм", sound: "寺庙" }
                ]
            },
            miu: { 
                translation: "миу",
                tones: [
                    { tone: "1-й", pinyin: "miū", ru: "миу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "谬" },
                    { tone: "2-й", pinyin: "miú", ru: "миу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "谬" },
                    { tone: "3-й", pinyin: "miǔ", ru: "миу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "谬" },
                    { tone: "4-й", pinyin: "miù", ru: "миу", char: "谬", meaning: "ошибка ❌", example: "谬论 miù lùn", example_ru: "абсурд", sound: "谬论" }
                ]
            },
            min: { 
                translation: "минь",
                tones: [
                    { tone: "1-й", pinyin: "mīn", ru: "минь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "民" },
                    { tone: "2-й", pinyin: "mín", ru: "минь", char: "民", meaning: "народ 👥", example: "人民 rén mín", example_ru: "народ", sound: "人民" },
                    { tone: "3-й", pinyin: "mǐn", ru: "минь", char: "敏", meaning: "быстрый ⚡", example: "敏捷 mǐn jié", example_ru: "быстрый", sound: "敏捷" },
                    { tone: "4-й", pinyin: "mìn", ru: "минь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "民" }
                ]
            },
            ming: { 
                translation: "мин",
                tones: [
                    { tone: "1-й", pinyin: "mīng", ru: "мин", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "名" },
                    { tone: "2-й", pinyin: "míng", ru: "мин", char: "名", meaning: "имя 📛", example: "名字 míng zi", example_ru: "имя", sound: "名字" },
                    { tone: "3-й", pinyin: "mǐng", ru: "мин", char: "酩", meaning: "пьяный 🥴", example: "酩酊大醉 mǐng dǐng dà zuì", example_ru: "сильно пьяный", sound: "酩酊大醉" },
                    { tone: "4-й", pinyin: "mìng", ru: "мин", char: "命", meaning: "жизнь 💫", example: "生命 shēng mìng", example_ru: "жизнь", sound: "生命" }
                ]
            },
            mu: { 
                translation: "му",
                tones: [
                    { tone: "1-й", pinyin: "mū", ru: "му", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "木" },
                    { tone: "2-й", pinyin: "mú", ru: "му", char: "模", meaning: "шаблон 📐", example: "模样 mú yàng", example_ru: "внешность", sound: "模样" },
                    { tone: "3-й", pinyin: "mǔ", ru: "му", char: "母", meaning: "мать 👩", example: "母亲 mǔ qīn", example_ru: "мать", sound: "母亲" },
                    { tone: "4-й", pinyin: "mù", ru: "му", char: "木", meaning: "дерево 🌳", example: "木头 mù tou", example_ru: "дерево", sound: "木头" }
                ]
            }
        }
    },

    // ==================== F ====================
    f: {
        desc: "f [f] — как русская «ф»",
        ru_sound: "фэ (как в слове «флаг», верхние зубы на нижней губе)",
        articulation: "🦷 Верхние зубы касаются нижней губы. Воздух проходит через щель.",
        sound: "fā",
        syllables: {
            fa: { 
                translation: "фа",
                tones: [
                    { tone: "1-й", pinyin: "fā", ru: "фа", char: "发", meaning: "отправлять 📤", example: "发现 fā xiàn", example_ru: "обнаружить", sound: "发现" },
                    { tone: "2-й", pinyin: "fá", ru: "фа", char: "罚", meaning: "наказывать ⚖️", example: "罚款 fá kuǎn", example_ru: "штраф", sound: "罚款" },
                    { tone: "3-й", pinyin: "fǎ", ru: "фа", char: "法", meaning: "закон 📜", example: "法律 fǎ lǜ", example_ru: "закон", sound: "法律" },
                    { tone: "4-й", pinyin: "fà", ru: "фа", char: "发", meaning: "волосы 💇", example: "头发 tóu fa", example_ru: "волосы", sound: "头发" }
                ]
            },
            fo: { 
                translation: "фо",
                tones: [
                    { tone: "1-й", pinyin: "fō", ru: "фо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "佛" },
                    { tone: "2-й", pinyin: "fó", ru: "фо", char: "佛", meaning: "Будда 🧘", example: "佛教 fó jiào", example_ru: "буддизм", sound: "佛教" },
                    { tone: "3-й", pinyin: "fǒ", ru: "фо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "佛" },
                    { tone: "4-й", pinyin: "fò", ru: "фо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "佛" }
                ]
            },
            fei: { 
                translation: "фэй",
                tones: [
                    { tone: "1-й", pinyin: "fēi", ru: "фэй", char: "飞", meaning: "летать 🕊️", example: "飞机 fēi jī", example_ru: "самолёт", sound: "飞机" },
                    { tone: "2-й", pinyin: "féi", ru: "фэй", char: "肥", meaning: "жирный 🐷", example: "肥肉 féi ròu", example_ru: "жирное мясо", sound: "肥肉" },
                    { tone: "3-й", pinyin: "fěi", ru: "фэй", char: "匪", meaning: "бандит 😈", example: "土匪 tǔ fěi", example_ru: "бандит", sound: "土匪" },
                    { tone: "4-й", pinyin: "fèi", ru: "фэй", char: "费", meaning: "стоить 💸", example: "免费 miǎn fèi", example_ru: "бесплатно", sound: "免费" }
                ]
            },
            fan: { 
                translation: "фань",
                tones: [
                    { tone: "1-й", pinyin: "fān", ru: "фань", char: "翻", meaning: "переворачивать 🔄", example: "翻身 fān shēn", example_ru: "перевернуться", sound: "翻身" },
                    { tone: "2-й", pinyin: "fán", ru: "фань", char: "凡", meaning: "обычный 📝", example: "平凡 píng fán", example_ru: "обычный", sound: "平凡" },
                    { tone: "3-й", pinyin: "fǎn", ru: "фань", char: "反", meaning: "противоположный 🔁", example: "相反 xiāng fǎn", example_ru: "противоположный", sound: "相反" },
                    { tone: "4-й", pinyin: "fàn", ru: "фань", char: "饭", meaning: "еда 🍚", example: "吃饭 chī fàn", example_ru: "есть", sound: "吃饭" }
                ]
            },
            fen: { 
                translation: "фэнь",
                tones: [
                    { tone: "1-й", pinyin: "fēn", ru: "фэнь", char: "分", meaning: "делить ✂️", example: "分开 fēn kāi", example_ru: "разделять", sound: "分开" },
                    { tone: "2-й", pinyin: "fén", ru: "фэнь", char: "坟", meaning: "могила ⚰️", example: "坟墓 fén mù", example_ru: "могила", sound: "坟墓" },
                    { tone: "3-й", pinyin: "fěn", ru: "фэнь", char: "粉", meaning: "порошок 🧂", example: "粉色 fěn sè", example_ru: "розовый цвет", sound: "粉色" },
                    { tone: "4-й", pinyin: "fèn", ru: "фэнь", char: "份", meaning: "часть 📦", example: "一份 yī fèn", example_ru: "одна порция", sound: "一份" }
                ]
            },
            fang: { 
                translation: "фан",
                tones: [
                    { tone: "1-й", pinyin: "fāng", ru: "фан", char: "方", meaning: "квадрат ◻️", example: "方便 fāng biàn", example_ru: "удобно", sound: "方便" },
                    { tone: "2-й", pinyin: "fáng", ru: "фан", char: "房", meaning: "дом 🏠", example: "房子 fáng zi", example_ru: "дом", sound: "房子" },
                    { tone: "3-й", pinyin: "fǎng", ru: "фан", char: "访", meaning: "посещать 🚪", example: "访问 fǎng wèn", example_ru: "посещать", sound: "访问" },
                    { tone: "4-й", pinyin: "fàng", ru: "фан", char: "放", meaning: "ставить 📦", example: "放学 fàng xué", example_ru: "после уроков", sound: "放学" }
                ]
            },
            feng: { 
                translation: "фэн",
                tones: [
                    { tone: "1-й", pinyin: "fēng", ru: "фэн", char: "风", meaning: "ветер 💨", example: "风雨 fēng yǔ", example_ru: "ветер и дождь", sound: "风雨" },
                    { tone: "2-й", pinyin: "féng", ru: "фэн", char: "逢", meaning: "встречать 🤝", example: "相逢 xiāng féng", example_ru: "встречаться", sound: "相逢" },
                    { tone: "3-й", pinyin: "fěng", ru: "фэн", char: "讽", meaning: "сатира 🎭", example: "讽刺 fěng cì", example_ru: "сатира", sound: "讽刺" },
                    { tone: "4-й", pinyin: "fèng", ru: "фэн", char: "缝", meaning: "щель 🔍", example: "缝隙 fèng xì", example_ru: "щель", sound: "缝隙" }
                ]
            },
            fu: { 
                translation: "фу",
                tones: [
                    { tone: "1-й", pinyin: "fū", ru: "фу", char: "夫", meaning: "муж 👨", example: "丈夫 zhàng fu", example_ru: "муж", sound: "丈夫" },
                    { tone: "2-й", pinyin: "fú", ru: "фу", char: "福", meaning: "счастье 🍀", example: "幸福 xìng fú", example_ru: "счастье", sound: "幸福" },
                    { tone: "3-й", pinyin: "fǔ", ru: "фу", char: "府", meaning: "резиденция 🏛️", example: "政府 zhèng fǔ", example_ru: "правительство", sound: "政府" },
                    { tone: "4-й", pinyin: "fù", ru: "фу", char: "父", meaning: "отец 👨", example: "父亲 fù qīn", example_ru: "отец", sound: "父亲" }
                ]
            }
        }
    },

    // ==================== D (ИСПРАВЛЕН) ====================
    d: {
        desc: "d [t] — как «д» в слове «футбол» (без голоса)",
        ru_sound: "дэ (как в слове «футбол», кончик языка у верхних зубов)",
        articulation: "👅 Кончик языка упирается в верхние зубы. ГОЛОС НЕ ВКЛЮЧЁН.",
        sound: "dā",
        syllables: {
            da: { 
                translation: "да",
                tones: [
                    { tone: "1-й", pinyin: "dā", ru: "да", char: "搭", meaning: "строить 🏗️", example: "搭车 dā chē", example_ru: "сесть в машину", sound: "搭车" },
                    { tone: "2-й", pinyin: "dá", ru: "да", char: "答", meaning: "отвечать 💬", example: "回答 huí dá", example_ru: "отвечать", sound: "回答" },
                    { tone: "3-й", pinyin: "dǎ", ru: "да", char: "打", meaning: "бить 👊", example: "打篮球 dǎ lán qiú", example_ru: "играть в баскетбол", sound: "打篮球" },
                    { tone: "4-й", pinyin: "dà", ru: "да", char: "大", meaning: "большой 🐘", example: "大家 dà jiā", example_ru: "все", sound: "大家" }
                ]
            },
            de: { 
                translation: "дэ",
                tones: [
                    { tone: "1-й", pinyin: "dē", ru: "дэ", char: "的", meaning: "частица 🔤", example: "我的 wǒ de", example_ru: "мой", sound: "我的" },
                    { tone: "2-й", pinyin: "dé", ru: "дэ", char: "得", meaning: "получать 🎁", example: "得到 dé dào", example_ru: "получать", sound: "得到" },
                    { tone: "3-й", pinyin: "dě", ru: "дэ", char: "得", meaning: "нужно ⚠️", example: "得去 dě qù", example_ru: "нужно идти", sound: "得去" },
                    { tone: "4-й", pinyin: "dè", ru: "дэ", char: "地", meaning: "суффикс", example: "慢慢地 màn màn de", example_ru: "медленно", sound: "慢慢地" }
                ]
            },
            dai: { 
                translation: "дай",
                tones: [
                    { tone: "1-й", pinyin: "dāi", ru: "дай", char: "呆", meaning: "глупый 🤪", example: "发呆 fā dāi", example_ru: "тупить", sound: "发呆" },
                    { tone: "2-й", pinyin: "dái", ru: "дай", char: "待", meaning: "ждать ⏳", example: "待会儿 dāi huìr", example_ru: "подожди", sound: "待会儿" },
                    { tone: "3-й", pinyin: "dǎi", ru: "дай", char: "歹", meaning: "плохой 👎", example: "歹徒 dǎi tú", example_ru: "бандит", sound: "歹徒" },
                    { tone: "4-й", pinyin: "dài", ru: "дай", char: "带", meaning: "нести 🧺", example: "带来 dài lái", example_ru: "приносить", sound: "带来" }
                ]
            },
            dao: { 
                translation: "дао",
                tones: [
                    { tone: "1-й", pinyin: "dāo", ru: "дао", char: "刀", meaning: "нож 🔪", example: "刀子 dāo zi", example_ru: "нож", sound: "刀子" },
                    { tone: "2-й", pinyin: "dáo", ru: "дао", char: "叨", meaning: "болтать 💬", example: "唠叨 láo dao", example_ru: "болтать", sound: "唠叨" },
                    { tone: "3-й", pinyin: "dǎo", ru: "дао", char: "岛", meaning: "остров 🏝️", example: "小岛 xiǎo dǎo", example_ru: "островок", sound: "小岛" },
                    { tone: "4-й", pinyin: "dào", ru: "дао", char: "到", meaning: "до 🎯", example: "到达 dào dá", example_ru: "достигать", sound: "到达" }
                ]
            },
            dou: { 
                translation: "доу",
                tones: [
                    { tone: "1-й", pinyin: "dōu", ru: "доу", char: "都", meaning: "все 👥", example: "都是 dōu shì", example_ru: "всё есть", sound: "都是" },
                    { tone: "2-й", pinyin: "dóu", ru: "доу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "都" },
                    { tone: "3-й", pinyin: "dǒu", ru: "доу", char: "斗", meaning: "ковш 🥄", example: "北斗星 běi dǒu xīng", example_ru: "Большая Медведица", sound: "北斗星" },
                    { tone: "4-й", pinyin: "dòu", ru: "доу", char: "斗", meaning: "бороться 🥊", example: "战斗 zhàn dòu", example_ru: "битва", sound: "战斗" }
                ]
            },
            dan: { 
                translation: "дань",
                tones: [
                    { tone: "1-й", pinyin: "dān", ru: "дань", char: "单", meaning: "один 1️⃣", example: "简单 jiǎn dān", example_ru: "простой", sound: "简单" },
                    { tone: "2-й", pinyin: "dán", ru: "дань", char: "单", meaning: "—", example: "—", example_ru: "—", sound: "单" },
                    { tone: "3-й", pinyin: "dǎn", ru: "дань", char: "胆", meaning: "желчь 🫀", example: "胆子 dǎn zi", example_ru: "смелость", sound: "胆子" },
                    { tone: "4-й", pinyin: "dàn", ru: "дань", char: "蛋", meaning: "яйцо 🥚", example: "鸡蛋 jī dàn", example_ru: "яйцо", sound: "鸡蛋" }
                ]
            },
            dang: { 
                translation: "дан",
                tones: [
                    { tone: "1-й", pinyin: "dāng", ru: "дан", char: "当", meaning: "должен ✅", example: "当然 dāng rán", example_ru: "конечно", sound: "当然" },
                    { tone: "2-й", pinyin: "dáng", ru: "дан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "当" },
                    { tone: "3-й", pinyin: "dǎng", ru: "дан", char: "挡", meaning: "блокировать 🛡️", example: "挡住 dǎng zhù", example_ru: "блокировать", sound: "挡住" },
                    { tone: "4-й", pinyin: "dàng", ru: "дан", char: "荡", meaning: "качаться 🎠", example: "飘荡 piāo dàng", example_ru: "качаться", sound: "飘荡" }
                ]
            },
            deng: { 
                translation: "дэн",
                tones: [
                    { tone: "1-й", pinyin: "dēng", ru: "дэн", char: "灯", meaning: "лампа 💡", example: "灯光 dēng guāng", example_ru: "свет лампы", sound: "灯光" },
                    { tone: "2-й", pinyin: "déng", ru: "дэн", char: "等", meaning: "ждать ⏰", example: "等待 děng dài", example_ru: "ждать", sound: "等待" },
                    { tone: "3-й", pinyin: "děng", ru: "дэн", char: "等", meaning: "класс 📚", example: "等于 děng yú", example_ru: "равно", sound: "等于" },
                    { tone: "4-й", pinyin: "dèng", ru: "дэн", char: "凳", meaning: "табурет 🪑", example: "凳子 dèng zi", example_ru: "табурет", sound: "凳子" }
                ]
            },
            dong: { 
                translation: "дун",
                tones: [
                    { tone: "1-й", pinyin: "dōng", ru: "дун", char: "东", meaning: "восток 🌅", example: "东方 dōng fāng", example_ru: "восток", sound: "东方" },
                    { tone: "2-й", pinyin: "dóng", ru: "дун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "东" },
                    { tone: "3-й", pinyin: "dǒng", ru: "дун", char: "懂", meaning: "понимать 🧠", example: "理解 lǐ jiě", example_ru: "понимать", sound: "理解" },
                    { tone: "4-й", pinyin: "dòng", ru: "дун", char: "动", meaning: "двигаться 🏃", example: "动物 dòng wù", example_ru: "животные", sound: "动物" }
                ]
            },
            di: { 
                translation: "ди",
                tones: [
                    { tone: "1-й", pinyin: "dī", ru: "ди", char: "低", meaning: "низкий ⬇️", example: "低头 dī tóu", example_ru: "опустить голову", sound: "低头" },
                    { tone: "2-й", pinyin: "dí", ru: "ди", char: "敌", meaning: "враг 👹", example: "敌人 dí rén", example_ru: "враг", sound: "敌人" },
                    { tone: "3-й", pinyin: "dǐ", ru: "ди", char: "底", meaning: "дно 🏺", example: "底下 dǐ xià", example_ru: "внизу", sound: "底下" },
                    { tone: "4-й", pinyin: "dì", ru: "ди", char: "地", meaning: "земля 🌍", example: "地方 dì fāng", example_ru: "место", sound: "地方" }
                ]
            },
            die: { 
                translation: "дие",
                tones: [
                    { tone: "1-й", pinyin: "diē", ru: "дие", char: "爹", meaning: "папа 👨", example: "爹地 diē dì", example_ru: "папочка", sound: "爹地" },
                    { tone: "2-й", pinyin: "dié", ru: "дие", char: "叠", meaning: "складывать 📚", example: "折叠 zhé dié", example_ru: "складывать", sound: "折叠" },
                    { tone: "3-й", pinyin: "diě", ru: "дие", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "叠" },
                    { tone: "4-й", pinyin: "diè", ru: "дие", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "叠" }
                ]
            },
            diu: { 
                translation: "диу",
                tones: [
                    { tone: "1-й", pinyin: "diū", ru: "диу", char: "丢", meaning: "терять 🔍", example: "丢失 diū shī", example_ru: "терять", sound: "丢失" },
                    { tone: "2-й", pinyin: "diú", ru: "диу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "丢" },
                    { tone: "3-й", pinyin: "diǔ", ru: "диу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "丢" },
                    { tone: "4-й", pinyin: "diù", ru: "диу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "丢" }
                ]
            },
            dian: { 
                translation: "диань",
                tones: [
                    { tone: "1-й", pinyin: "diān", ru: "диань", char: "颠", meaning: "вершина ⛰️", example: "颠倒 diān dǎo", example_ru: "переворачивать", sound: "颠倒" },
                    { tone: "2-й", pinyin: "dián", ru: "диань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "颠" },
                    { tone: "3-й", pinyin: "diǎn", ru: "диань", char: "点", meaning: "точка 🔴", example: "点菜 diǎn cài", example_ru: "заказывать еду", sound: "点菜" },
                    { tone: "4-й", pinyin: "diàn", ru: "диань", char: "电", meaning: "электричество ⚡", example: "电视 diàn shì", example_ru: "телевизор", sound: "电视" }
                ]
            },
            ding: { 
                translation: "дин",
                tones: [
                    { tone: "1-й", pinyin: "dīng", ru: "дин", char: "丁", meaning: "куб 🧊", example: "人丁 rén dīng", example_ru: "население", sound: "人丁" },
                    { tone: "2-й", pinyin: "díng", ru: "дин", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "丁" },
                    { tone: "3-й", pinyin: "dǐng", ru: "дин", char: "顶", meaning: "вершина 🏔️", example: "山顶 shān dǐng", example_ru: "вершина горы", sound: "山顶" },
                    { tone: "4-й", pinyin: "dìng", ru: "дин", char: "定", meaning: "определять ✅", example: "一定 yī dìng", example_ru: "обязательно", sound: "一定" }
                ]
            },
            du: { 
                translation: "ду",
                tones: [
                    { tone: "1-й", pinyin: "dū", ru: "ду", char: "都", meaning: "столица 🏛️", example: "首都 shǒu dū", example_ru: "столица", sound: "首都" },
                    { tone: "2-й", pinyin: "dú", ru: "ду", char: "读", meaning: "читать 📖", example: "读书 dú shū", example_ru: "читать книгу", sound: "读书" },
                    { tone: "3-й", pinyin: "dǔ", ru: "ду", char: "堵", meaning: "закрывать 🚧", example: "堵车 dǔ chē", example_ru: "пробка", sound: "堵车" },
                    { tone: "4-й", pinyin: "dù", ru: "ду", char: "度", meaning: "степень 📊", example: "温度 wēn dù", example_ru: "температура", sound: "温度" }
                ]
            },
            duo: { 
                translation: "дуо",
                tones: [
                    { tone: "1-й", pinyin: "duō", ru: "дуо", char: "多", meaning: "много 🔢", example: "多少 duō shǎo", example_ru: "сколько", sound: "多少" },
                    { tone: "2-й", pinyin: "duó", ru: "дуо", char: "夺", meaning: "отнимать 🏆", example: "夺取 duó qǔ", example_ru: "захватывать", sound: "夺取" },
                    { tone: "3-й", pinyin: "duǒ", ru: "дуо", char: "朵", meaning: "счётное слово 🌸", example: "花朵 huā duǒ", example_ru: "цветок", sound: "花朵" },
                    { tone: "4-й", pinyin: "duò", ru: "дуо", char: "惰", meaning: "ленивый 🛋️", example: "懒惰 lǎn duò", example_ru: "ленивый", sound: "懒惰" }
                ]
            },
            dui: { 
                translation: "дуй",
                tones: [
                    { tone: "1-й", pinyin: "duī", ru: "дуй", char: "堆", meaning: "куча 🗑️", example: "堆积 duī jī", example_ru: "нагромождать", sound: "堆积" },
                    { tone: "2-й", pinyin: "duí", ru: "дуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "堆" },
                    { tone: "3-й", pinyin: "duǐ", ru: "дуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "堆" },
                    { tone: "4-й", pinyin: "duì", ru: "дуй", char: "对", meaning: "правильно ✅", example: "对面 duì miàn", example_ru: "напротив", sound: "对面" }
                ]
            },
            duan: { 
                translation: "дуань",
                tones: [
                    { tone: "1-й", pinyin: "duān", ru: "дуань", char: "端", meaning: "конец 🔚", example: "端正 duān zhèng", example_ru: "правильный", sound: "端正" },
                    { tone: "2-й", pinyin: "duán", ru: "дуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "端" },
                    { tone: "3-й", pinyin: "duǎn", ru: "дуань", char: "短", meaning: "короткий 📏", example: "短裤 duǎn kù", example_ru: "шорты", sound: "短裤" },
                    { tone: "4-й", pinyin: "duàn", ru: "дуань", char: "段", meaning: "отрезок 📐", example: "一段 yī duàn", example_ru: "отрезок", sound: "一段" }
                ]
            },
            dun: { 
                translation: "дунь",
                tones: [
                    { tone: "1-й", pinyin: "dūn", ru: "дунь", char: "蹲", meaning: "приседать 🦵", example: "蹲下 dūn xià", example_ru: "приседать", sound: "蹲下" },
                    { tone: "2-й", pinyin: "dún", ru: "дунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "蹲" },
                    { tone: "3-й", pinyin: "dǔn", ru: "дунь", char: "盹", meaning: "дремать 😴", example: "打盹 dǎ dǔn", example_ru: "дремать", sound: "打盹" },
                    { tone: "4-й", pinyin: "dùn", ru: "дунь", char: "顿", meaning: "останавливаться 🛑", example: "停顿 tíng dùn", example_ru: "пауза", sound: "停顿" }
                 ]
            }
        }
    },
        // ==================== T ====================
    t: {
        desc: "t [tʰ] — «т» с сильным выдохом",
        ru_sound: "тэ (с сильным выдохом, как при задувании свечи)",
        articulation: "💨 Кончик языка у верхних зубов, затем резкий разрыв с СИЛЬНЫМ ВЫДОХОМ.",
        sound: "tā",
        syllables: {
            ta: { 
                translation: "та",
                tones: [
                    { tone: "1-й", pinyin: "tā", ru: "та", char: "他", meaning: "он 👨", example: "他们 tā men", example_ru: "они", sound: "他们" },
                    { tone: "2-й", pinyin: "tá", ru: "та", char: "塌", meaning: "обвал 💥", example: "塌方 tā fāng", example_ru: "обвал", sound: "塌方" },
                    { tone: "3-й", pinyin: "tǎ", ru: "та", char: "塔", meaning: "башня 🗼", example: "宝塔 bǎo tǎ", example_ru: "пагода", sound: "宝塔" },
                    { tone: "4-й", pinyin: "tà", ru: "та", char: "踏", meaning: "ступать 👣", example: "踏步 tà bù", example_ru: "шагать", sound: "踏步" }
                ]
            },
            te: { 
                translation: "тэ",
                tones: [
                    { tone: "1-й", pinyin: "tē", ru: "тэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "特" },
                    { tone: "2-й", pinyin: "té", ru: "тэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "特" },
                    { tone: "3-й", pinyin: "tě", ru: "тэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "特" },
                    { tone: "4-й", pinyin: "tè", ru: "тэ", char: "特", meaning: "особенный ✨", example: "特别 tè bié", example_ru: "особенно", sound: "特别" }
                ]
            },
            tai: { 
                translation: "тай",
                tones: [
                    { tone: "1-й", pinyin: "tāi", ru: "тай", char: "胎", meaning: "плод 🤰", example: "胎儿 tāi ér", example_ru: "плод", sound: "胎儿" },
                    { tone: "2-й", pinyin: "tái", ru: "тай", char: "台", meaning: "стол 🪑", example: "台灯 tái dēng", example_ru: "настольная лампа", sound: "台灯" },
                    { tone: "3-й", pinyin: "tǎi", ru: "тай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "太" },
                    { tone: "4-й", pinyin: "tài", ru: "тай", char: "太", meaning: "слишком 🔥", example: "太阳 tài yáng", example_ru: "солнце", sound: "太阳" }
                ]
            },
            tao: { 
                translation: "тао",
                tones: [
                    { tone: "1-й", pinyin: "tāo", ru: "тао", char: "掏", meaning: "вытаскивать 👜", example: "掏出 tāo chū", example_ru: "вытащить", sound: "掏出" },
                    { tone: "2-й", pinyin: "táo", ru: "тао", char: "逃", meaning: "убегать 🏃", example: "逃跑 táo pǎo", example_ru: "убегать", sound: "逃跑" },
                    { tone: "3-й", pinyin: "tǎo", ru: "тао", char: "讨", meaning: "просить 🙏", example: "讨厌 tǎo yàn", example_ru: "надоедливый", sound: "讨厌" },
                    { tone: "4-й", pinyin: "tào", ru: "тао", char: "套", meaning: "набор 🧰", example: "手套 shǒu tào", example_ru: "перчатки", sound: "手套" }
                ]
            },
            tou: { 
                translation: "тоу",
                tones: [
                    { tone: "1-й", pinyin: "tōu", ru: "тоу", char: "偷", meaning: "воровать 🦹", example: "小偷 xiǎo tōu", example_ru: "вор", sound: "小偷" },
                    { tone: "2-й", pinyin: "tóu", ru: "тоу", char: "头", meaning: "голова 🗣️", example: "头发 tóu fa", example_ru: "волосы", sound: "头发" },
                    { tone: "3-й", pinyin: "tǒu", ru: "тоу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "头" },
                    { tone: "4-й", pinyin: "tòu", ru: "тоу", char: "透", meaning: "проходить 🔍", example: "透明 tòu míng", example_ru: "прозрачный", sound: "透明" }
                ]
            },
            tan: { 
                translation: "тань",
                tones: [
                    { tone: "1-й", pinyin: "tān", ru: "тань", char: "滩", meaning: "пляж 🏖️", example: "沙滩 shā tān", example_ru: "песчаный пляж", sound: "沙滩" },
                    { tone: "2-й", pinyin: "tán", ru: "тань", char: "谈", meaning: "говорить 💬", example: "谈话 tán huà", example_ru: "разговор", sound: "谈话" },
                    { tone: "3-й", pinyin: "tǎn", ru: "тань", char: "坦", meaning: "ровный 📏", example: "坦白 tǎn bái", example_ru: "честный", sound: "坦白" },
                    { tone: "4-й", pinyin: "tàn", ru: "тань", char: "探", meaning: "исследовать 🔬", example: "探索 tàn suǒ", example_ru: "исследовать", sound: "探索" }
                ]
            },
            tang: { 
                translation: "тан",
                tones: [
                    { tone: "1-й", pinyin: "tāng", ru: "тан", char: "汤", meaning: "суп 🥣", example: "喝汤 hē tāng", example_ru: "пить суп", sound: "喝汤" },
                    { tone: "2-й", pinyin: "táng", ru: "тан", char: "糖", meaning: "сахар 🍬", example: "糖果 táng guǒ", example_ru: "конфеты", sound: "糖果" },
                    { tone: "3-й", pinyin: "tǎng", ru: "тан", char: "躺", meaning: "лежать 🛌", example: "躺下 tǎng xià", example_ru: "лечь", sound: "躺下" },
                    { tone: "4-й", pinyin: "tàng", ru: "тан", char: "烫", meaning: "горячий 🔥", example: "烫伤 tàng shāng", example_ru: "ожог", sound: "烫伤" }
                ]
            },
            teng: { 
                translation: "тэн",
                tones: [
                    { tone: "1-й", pinyin: "tēng", ru: "тэн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "疼" },
                    { tone: "2-й", pinyin: "téng", ru: "тэн", char: "疼", meaning: "болеть 🤕", example: "头疼 tóu téng", example_ru: "головная боль", sound: "头疼" },
                    { tone: "3-й", pinyin: "těng", ru: "тэн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "疼" },
                    { tone: "4-й", pinyin: "tèng", ru: "тэн", char: "腾", meaning: "подпрыгивать 🦘", example: "腾空 téng kōng", example_ru: "подпрыгнуть", sound: "腾空" }
                ]
            },
            ti: { 
                translation: "ти",
                tones: [
                    { tone: "1-й", pinyin: "tī", ru: "ти", char: "踢", meaning: "пинать ⚽", example: "踢球 tī qiú", example_ru: "пинать мяч", sound: "踢球" },
                    { tone: "2-й", pinyin: "tí", ru: "ти", char: "提", meaning: "поднимать ⬆️", example: "提高 tí gāo", example_ru: "повышать", sound: "提高" },
                    { tone: "3-й", pinyin: "tǐ", ru: "ти", char: "体", meaning: "тело 💪", example: "体育 tǐ yù", example_ru: "спорт", sound: "体育" },
                    { tone: "4-й", pinyin: "tì", ru: "ти", char: "替", meaning: "заменять 🔄", example: "代替 dài tì", example_ru: "заменять", sound: "代替" }
                ]
            },
            tiao: { 
                translation: "тяо",
                tones: [
                    { tone: "1-й", pinyin: "tiāo", ru: "тяо", char: "挑", meaning: "выбирать ✅", example: "挑战 tiǎo zhàn", example_ru: "бросать вызов", sound: "挑战" },
                    { tone: "2-й", pinyin: "tiáo", ru: "тяо", char: "条", meaning: "полоска 📏", example: "条件 tiáo jiàn", example_ru: "условие", sound: "条件" },
                    { tone: "3-й", pinyin: "tiǎo", ru: "тяо", char: "挑", meaning: "поднимать", example: "挑水 tiāo shuǐ", example_ru: "носить воду", sound: "挑水" },
                    { tone: "4-й", pinyin: "tiào", ru: "тяо", char: "跳", meaning: "прыгать 🦘", example: "跳舞 tiào wǔ", example_ru: "танцевать", sound: "跳舞" }
                ]
            },
            tie: { 
                translation: "те",
                tones: [
                    { tone: "1-й", pinyin: "tiē", ru: "те", char: "贴", meaning: "клеить 📎", example: "贴纸 tiē zhǐ", example_ru: "наклейка", sound: "贴纸" },
                    { tone: "2-й", pinyin: "tié", ru: "те", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "铁" },
                    { tone: "3-й", pinyin: "tiě", ru: "те", char: "铁", meaning: "железо 🔩", example: "铁路 tiě lù", example_ru: "железная дорога", sound: "铁路" },
                    { tone: "4-й", pinyin: "tiè", ru: "те", char: "帖", meaning: "приглашение 💌", example: "请帖 qǐng tiě", example_ru: "приглашение", sound: "请帖" }
                ]
            },
            tian: { 
                translation: "тянь",
                tones: [
                    { tone: "1-й", pinyin: "tiān", ru: "тянь", char: "天", meaning: "небо ☁️", example: "天空 tiān kōng", example_ru: "небо", sound: "天空" },
                    { tone: "2-й", pinyin: "tián", ru: "тянь", char: "田", meaning: "поле 🌾", example: "田地 tián dì", example_ru: "поле", sound: "田地" },
                    { tone: "3-й", pinyin: "tiǎn", ru: "тянь", char: "舔", meaning: "лизать 👅", example: "舔一下 tiǎn yī xià", example_ru: "лизнуть", sound: "舔一下" },
                    { tone: "4-й", pinyin: "tiàn", ru: "тянь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "天" }
                ]
            },
            ting: { 
                translation: "тин",
                tones: [
                    { tone: "1-й", pinyin: "tīng", ru: "тин", char: "听", meaning: "слушать 🎧", example: "听见 tīng jiàn", example_ru: "слышать", sound: "听见" },
                    { tone: "2-й", pinyin: "tíng", ru: "тин", char: "停", meaning: "останавливаться 🛑", example: "停止 tíng zhǐ", example_ru: "останавливать", sound: "停止" },
                    { tone: "3-й", pinyin: "tǐng", ru: "тин", char: "挺", meaning: "очень 🔥", example: "挺好 tǐng hǎo", example_ru: "очень хорошо", sound: "挺好" },
                    { tone: "4-й", pinyin: "tìng", ru: "тин", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "听" }
                ]
            },
            tong: { 
                translation: "тун",
                tones: [
                    { tone: "1-й", pinyin: "tōng", ru: "тун", char: "通", meaning: "проходить 🚪", example: "通过 tōng guò", example_ru: "проходить", sound: "通过" },
                    { tone: "2-й", pinyin: "tóng", ru: "тун", char: "同", meaning: "одинаковый 🔄", example: "同学 tóng xué", example_ru: "одноклассник", sound: "同学" },
                    { tone: "3-й", pinyin: "tǒng", ru: "тун", char: "桶", meaning: "ведро 🪣", example: "水桶 shuǐ tǒng", example_ru: "ведро", sound: "水桶" },
                    { tone: "4-й", pinyin: "tòng", ru: "тун", char: "痛", meaning: "больно 😖", example: "痛苦 tòng kǔ", example_ru: "боль", sound: "痛苦" }
                ]
            },
            tu: { 
                translation: "ту",
                tones: [
                    { tone: "1-й", pinyin: "tū", ru: "ту", char: "突", meaning: "внезапный ⚡", example: "突然 tū rán", example_ru: "внезапно", sound: "突然" },
                    { tone: "2-й", pinyin: "tú", ru: "ту", char: "图", meaning: "картинка 🖼️", example: "图片 tú piàn", example_ru: "картинка", sound: "图片" },
                    { tone: "3-й", pinyin: "tǔ", ru: "ту", char: "土", meaning: "земля 🌍", example: "土地 tǔ dì", example_ru: "земля", sound: "土地" },
                    { tone: "4-й", pinyin: "tù", ru: "ту", char: "兔", meaning: "кролик 🐰", example: "兔子 tù zi", example_ru: "кролик", sound: "兔子" }
                ]
            },
            tuo: { 
                translation: "туо",
                tones: [
                    { tone: "1-й", pinyin: "tuō", ru: "туо", char: "脱", meaning: "снимать 🧥", example: "脱下 tuō xià", example_ru: "снимать", sound: "脱下" },
                    { tone: "2-й", pinyin: "tuó", ru: "туо", char: "驼", meaning: "верблюд 🐫", example: "骆驼 luò tuo", example_ru: "верблюд", sound: "骆驼" },
                    { tone: "3-й", pinyin: "tuǒ", ru: "туо", char: "妥", meaning: "подходящий ✅", example: "妥当 tuǒ dàng", example_ru: "подходящий", sound: "妥当" },
                    { tone: "4-й", pinyin: "tuò", ru: "туо", char: "拓", meaning: "расширять 📈", example: "开拓 kāi tuò", example_ru: "открывать", sound: "开拓" }
                ]
            },
            tui: { 
                translation: "туй",
                tones: [
                    { tone: "1-й", pinyin: "tuī", ru: "туй", char: "推", meaning: "толкать 👋", example: "推动 tuī dòng", example_ru: "толкать", sound: "推动" },
                    { tone: "2-й", pinyin: "tuí", ru: "туй", char: "颓", meaning: "разрушенный 🏚️", example: "颓废 tuí fèi", example_ru: "упадок", sound: "颓废" },
                    { tone: "3-й", pinyin: "tuǐ", ru: "туй", char: "腿", meaning: "нога 🦵", example: "大腿 dà tuǐ", example_ru: "бедро", sound: "大腿" },
                    { tone: "4-й", pinyin: "tuì", ru: "туй", char: "退", meaning: "отступать 🔙", example: "后退 hòu tuì", example_ru: "отступать", sound: "后退" }
                ]
            },
            tuan: { 
                translation: "туань",
                tones: [
                    { tone: "1-й", pinyin: "tuān", ru: "туань", char: "湍", meaning: "быстрый 🌊", example: "湍急 tuān jí", example_ru: "быстрый", sound: "湍急" },
                    { tone: "2-й", pinyin: "tuán", ru: "туань", char: "团", meaning: "группа 👥", example: "团结 tuán jié", example_ru: "объединяться", sound: "团结" },
                    { tone: "3-й", pinyin: "tuǎn", ru: "туань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "团" },
                    { tone: "4-й", pinyin: "tuàn", ru: "туань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "团" }
                ]
            },
            tun: { 
                translation: "тунь",
                tones: [
                    { tone: "1-й", pinyin: "tūn", ru: "тунь", char: "吞", meaning: "глотать 🍽️", example: "吞下 tūn xià", example_ru: "проглотить", sound: "吞下" },
                    { tone: "2-й", pinyin: "tún", ru: "тунь", char: "屯", meaning: "деревня 🏘️", example: "屯子 tún zi", example_ru: "деревня", sound: "屯子" },
                    { tone: "3-й", pinyin: "tǔn", ru: "тунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "吞" },
                    { tone: "4-й", pinyin: "tùn", ru: "тунь", char: "褪", meaning: "снимать 🧤", example: "褪色 tuì sè", example_ru: "выцветать", sound: "褪色" }
                ]
            }
        }
    },

    // ==================== N (ИСПРАВЛЕН) ====================
    n: {
        desc: "n [n] — как русская «н»",
        ru_sound: "нэ (как в слове «нос», кончик языка у верхних зубов)",
        articulation: "👅 Кончик языка у верхних зубов, воздух через нос.",
        sound: "nā",
        syllables: {
            na: { 
                translation: "на",
                tones: [
                    { tone: "1-й", pinyin: "nā", ru: "на", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "那" },
                    { tone: "2-й", pinyin: "ná", ru: "на", char: "拿", meaning: "брать ✋", example: "拿来 ná lái", example_ru: "принести", sound: "拿来" },
                    { tone: "3-й", pinyin: "nǎ", ru: "на", char: "哪", meaning: "который ❓", example: "哪里 nǎ lǐ", example_ru: "где", sound: "哪里" },
                    { tone: "4-й", pinyin: "nà", ru: "на", char: "那", meaning: "тот", example: "那里 nà lǐ", example_ru: "там", sound: "那里" }
                ]
            },
            ne: { 
                translation: "нэ",
                tones: [
                    { tone: "1-й", pinyin: "nē", ru: "нэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "呢" },
                    { tone: "2-й", pinyin: "né", ru: "нэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "呢" },
                    { tone: "3-й", pinyin: "ně", ru: "нэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "呢" },
                    { tone: "4-й", pinyin: "nè", ru: "нэ", char: "呢", meaning: "ткань 🧵", example: "呢子 ní zi", example_ru: "ткань", sound: "呢子" }
                ]
            },
            nai: { 
                translation: "най",
                tones: [
                    { tone: "1-й", pinyin: "nāi", ru: "най", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "奶" },
                    { tone: "2-й", pinyin: "nái", ru: "най", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "奶" },
                    { tone: "3-й", pinyin: "nǎi", ru: "най", char: "奶", meaning: "молоко 🥛", example: "牛奶 niú nǎi", example_ru: "молоко", sound: "牛奶" },
                    { tone: "4-й", pinyin: "nài", ru: "най", char: "奈", meaning: "как 🤷", example: "无奈 wú nài", example_ru: "беспомощный", sound: "无奈" }
                ]
            },
            nao: { 
                translation: "нао",
                tones: [
                    { tone: "1-й", pinyin: "nāo", ru: "нао", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "脑" },
                    { tone: "2-й", pinyin: "náo", ru: "нао", char: "挠", meaning: "чесать 🤚", example: "挠痒 náo yǎng", example_ru: "чесать", sound: "挠痒" },
                    { tone: "3-й", pinyin: "nǎo", ru: "нао", char: "脑", meaning: "мозг 🧠", example: "电脑 diàn nǎo", example_ru: "компьютер", sound: "电脑" },
                    { tone: "4-й", pinyin: "nào", ru: "нао", char: "闹", meaning: "шумный 🔊", example: "热闹 rè nào", example_ru: "оживлённый", sound: "热闹" }
                ]
            },
            nan: { 
                translation: "нань",
                tones: [
                    { tone: "1-й", pinyin: "nān", ru: "нань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "男" },
                    { tone: "2-й", pinyin: "nán", ru: "нань", char: "男", meaning: "мужчина 👨", example: "男人 nán rén", example_ru: "мужчина", sound: "男人" },
                    { tone: "3-й", pinyin: "nǎn", ru: "нань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "男" },
                    { tone: "4-й", pinyin: "nàn", ru: "нань", char: "难", meaning: "трудный 😓", example: "困难 kùn nán", example_ru: "трудность", sound: "困难" }
                ]
            },
            nang: { 
                translation: "нан",
                tones: [
                    { tone: "1-й", pinyin: "nāng", ru: "нан", char: "囊", meaning: "мешок 🎒", example: "囊括 náng kuò", example_ru: "включать", sound: "囊括" },
                    { tone: "2-й", pinyin: "náng", ru: "нан", char: "囊", meaning: "мешок", example: "皮囊 pí náng", example_ru: "кожаный мешок", sound: "皮囊" },
                    { tone: "3-й", pinyin: "nǎng", ru: "нан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "囊" },
                    { tone: "4-й", pinyin: "nàng", ru: "нан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "囊" }
                ]
            },
            nong: { 
                translation: "нун",
                tones: [
                    { tone: "1-й", pinyin: "nōng", ru: "нун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "农" },
                    { tone: "2-й", pinyin: "nóng", ru: "нун", char: "农", meaning: "крестьянин 👨‍🌾", example: "农民 nóng mín", example_ru: "крестьянин", sound: "农民" },
                    { tone: "3-й", pinyin: "nǒng", ru: "нун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "农" },
                    { tone: "4-й", pinyin: "nòng", ru: "нун", char: "弄", meaning: "делать 🛠️", example: "弄错 nòng cuò", example_ru: "ошибаться", sound: "弄错" }
                ]
            },
            nou: { 
                translation: "ноу",
                tones: [
                    { tone: "1-й", pinyin: "nōu", ru: "ноу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "耨" },
                    { tone: "2-й", pinyin: "nóu", ru: "ноу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "耨" },
                    { tone: "3-й", pinyin: "nǒu", ru: "ноу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "耨" },
                    { tone: "4-й", pinyin: "nòu", ru: "ноу", char: "耨", meaning: "мотыга ⛏️", example: "耨耕 nòu gēng", example_ru: "вспашка", sound: "耨耕" }
                ]
            },
            ni: { 
                translation: "ни",
                tones: [
                    { tone: "1-й", pinyin: "nī", ru: "ни", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "你" },
                    { tone: "2-й", pinyin: "ní", ru: "ни", char: "泥", meaning: "грязь 🦠", example: "泥土 ní tǔ", example_ru: "грязь", sound: "泥土" },
                    { tone: "3-й", pinyin: "nǐ", ru: "ни", char: "你", meaning: "ты 👤", example: "你好 nǐ hǎo", example_ru: "здравствуй", sound: "你好" },
                    { tone: "4-й", pinyin: "nì", ru: "ни", char: "腻", meaning: "жирный 🍔", example: "油腻 yóu nì", example_ru: "жирный", sound: "油腻" }
                ]
            },
            nie: { 
                translation: "ние",
                tones: [
                    { tone: "1-й", pinyin: "niē", ru: "ние", char: "捏", meaning: "мять 👐", example: "捏泥巴 niē ní ba", example_ru: "мять глину", sound: "捏泥巴" },
                    { tone: "2-й", pinyin: "nié", ru: "ние", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "捏" },
                    { tone: "3-й", pinyin: "niě", ru: "ние", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "捏" },
                    { tone: "4-й", pinyin: "niè", ru: "ние", char: "蹑", meaning: "красться 🥷", example: "蹑手蹑脚 niè shǒu niè jiǎo", example_ru: "красться", sound: "蹑手蹑脚" }
                ]
            },
            niao: { 
                translation: "няо",
                tones: [
                    { tone: "1-й", pinyin: "niāo", ru: "няо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "鸟" },
                    { tone: "2-й", pinyin: "niáo", ru: "няо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "鸟" },
                    { tone: "3-й", pinyin: "niǎo", ru: "няо", char: "鸟", meaning: "птица 🐦", example: "小鸟 xiǎo niǎo", example_ru: "маленькая птица", sound: "小鸟" },
                    { tone: "4-й", pinyin: "niào", ru: "няо", char: "尿", meaning: "моча 💧", example: "小便 xiǎo biàn", example_ru: "моча", sound: "小便" }
                ]
            },
            niu: { 
                translation: "ню",
                tones: [
                    { tone: "1-й", pinyin: "niū", ru: "ню", char: "妞", meaning: "девушка 👧", example: "小妞 xiǎo niū", example_ru: "девчонка", sound: "小妞" },
                    { tone: "2-й", pinyin: "niú", ru: "ню", char: "牛", meaning: "корова 🐮", example: "牛奶 niú nǎi", example_ru: "молоко", sound: "牛奶" },
                    { tone: "3-й", pinyin: "niǔ", ru: "ню", char: "扭", meaning: "поворачивать 🔄", example: "扭动 niǔ dòng", example_ru: "поворачиваться", sound: "扭动" },
                    { tone: "4-й", pinyin: "niù", ru: "ню", char: "拗", meaning: "упрямый 😤", example: "执拗 zhí niù", example_ru: "упрямый", sound: "执拗" }
                ]
            },
            nian: { 
                translation: "нянь",
                tones: [
                    { tone: "1-й", pinyin: "niān", ru: "нянь", char: "蔫", meaning: "увядать 🥀", example: "蔫了 niān le", example_ru: "увял", sound: "蔫了" },
                    { tone: "2-й", pinyin: "nián", ru: "нянь", char: "年", meaning: "год 📅", example: "新年 xīn nián", example_ru: "Новый год", sound: "新年" },
                    { tone: "3-й", pinyin: "niǎn", ru: "нянь", char: "撵", meaning: "гнать 🏃", example: "撵走 niǎn zǒu", example_ru: "выгнать", sound: "撵走" },
                    { tone: "4-й", pinyin: "niàn", ru: "нянь", char: "念", meaning: "читать 📖", example: "念书 niàn shū", example_ru: "учиться", sound: "念书" }
                ]
            },
            niang: { 
                translation: "нян",
                tones: [
                    { tone: "1-й", pinyin: "niāng", ru: "нян", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "娘" },
                    { tone: "2-й", pinyin: "niáng", ru: "нян", char: "娘", meaning: "мать 👩", example: "爹娘 diē niáng", example_ru: "родители", sound: "爹娘" },
                    { tone: "3-й", pinyin: "niǎng", ru: "нян", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "娘" },
                    { tone: "4-й", pinyin: "niàng", ru: "нян", char: "酿", meaning: "бродить 🍷", example: "酿酒 niàng jiǔ", example_ru: "варить пиво", sound: "酿酒" }
                ]
            },
            nin: { 
                translation: "нинь",
                tones: [
                    { tone: "1-й", pinyin: "nīn", ru: "нинь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "您" },
                    { tone: "2-й", pinyin: "nín", ru: "нинь", char: "您", meaning: "Вы 🙇", example: "您好 nín hǎo", example_ru: "здравствуйте", sound: "您好" },
                    { tone: "3-й", pinyin: "nǐn", ru: "нинь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "您" },
                    { tone: "4-й", pinyin: "nìn", ru: "нинь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "您" }
                ]
            },
            ning: { 
                translation: "нин",
                tones: [
                    { tone: "1-й", pinyin: "nīng", ru: "нин", char: "拧", meaning: "крутить 🔧", example: "拧开 nīng kāi", example_ru: "открутить", sound: "拧开" },
                    { tone: "2-й", pinyin: "níng", ru: "нин", char: "宁", meaning: "спокойный 😌", example: "安宁 ān níng", example_ru: "спокойствие", sound: "安宁" },
                    { tone: "3-й", pinyin: "nǐng", ru: "нин", char: "拧", meaning: "крутить", example: "拧紧 nǐng jǐn", example_ru: "закрутить", sound: "拧紧" },
                    { tone: "4-й", pinyin: "nìng", ru: "нин", char: "宁", meaning: "скорее ⏩", example: "宁可 nìng kě", example_ru: "лучше", sound: "宁可" }
                ]
            },
            nu: { 
                translation: "ну",
                tones: [
                    { tone: "1-й", pinyin: "nū", ru: "ну", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "努" },
                    { tone: "2-й", pinyin: "nú", ru: "ну", char: "奴", meaning: "раб ⛓️", example: "奴隶 nú lì", example_ru: "раб", sound: "奴隶" },
                    { tone: "3-й", pinyin: "nǔ", ru: "ну", char: "努", meaning: "стараться 💪", example: "努力 nǔ lì", example_ru: "стараться", sound: "努力" },
                    { tone: "4-й", pinyin: "nù", ru: "ну", char: "怒", meaning: "злой 😠", example: "愤怒 fèn nù", example_ru: "злость", sound: "愤怒" }
                ]
            },
            nuo: { 
                translation: "нуо",
                tones: [
                    { tone: "1-й", pinyin: "nuō", ru: "нуо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "挪" },
                    { tone: "2-й", pinyin: "nuó", ru: "нуо", char: "挪", meaning: "передвигать 📦", example: "挪动 nuó dòng", example_ru: "передвигать", sound: "挪动" },
                    { tone: "3-й", pinyin: "nuǒ", ru: "нуо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "挪" },
                    { tone: "4-й", pinyin: "nuò", ru: "нуо", char: "诺", meaning: "обещать ✨", example: "诺言 nuò yán", example_ru: "обещание", sound: "诺言" }
                ]
            },
            nuan: { 
                translation: "нуань",
                tones: [
                    { tone: "1-й", pinyin: "nuān", ru: "нуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "暖" },
                    { tone: "2-й", pinyin: "nuán", ru: "нуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "暖" },
                    { tone: "3-й", pinyin: "nuǎn", ru: "нуань", char: "暖", meaning: "тёплый 🔥", example: "温暖 wēn nuǎn", example_ru: "тёплый", sound: "温暖" },
                    { tone: "4-й", pinyin: "nuàn", ru: "нуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "暖" }
                ]
            },
            nü: { 
                translation: "нюй",
                tones: [
                    { tone: "1-й", pinyin: "nǖ", ru: "нюй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "女" },
                    { tone: "2-й", pinyin: "nǘ", ru: "нюй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "女" },
                    { tone: "3-й", pinyin: "nǚ", ru: "нюй", char: "女", meaning: "женщина 👩", example: "女人 nǚ rén", example_ru: "женщина", sound: "女人" },
                    { tone: "4-й", pinyin: "nǜ", ru: "нюй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "女" }
                ]
            },
            nüe: { 
                translation: "нюэ",
                tones: [
                    { tone: "1-й", pinyin: "nüē", ru: "нюэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "疟" },
                    { tone: "2-й", pinyin: "nüé", ru: "нюэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "疟" },
                    { tone: "3-й", pinyin: "nüě", ru: "нюэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "疟" },
                    { tone: "4-й", pinyin: "nüè", ru: "нюэ", char: "疟", meaning: "малярия 🦟", example: "疟疾 nüè ji", example_ru: "малярия", sound: "疟疾" }
                ]
            }
        }
    },

    // ==================== L ====================
    l: {
        desc: "l [l] — как русская «л»",
        ru_sound: "лэ (как в слове «лампа», кончик языка у верхних зубов)",
        articulation: "👅 Кончик языка у верхних зубов, воздух идёт по бокам.",
        sound: "lā",
        syllables: {
            la: { 
                translation: "ла",
                tones: [
                    { tone: "1-й", pinyin: "lā", ru: "ла", char: "拉", meaning: "тянуть 🫱", example: "拉手 lā shǒu", example_ru: "взяться за руки", sound: "拉手" },
                    { tone: "2-й", pinyin: "lá", ru: "ла", char: "拉", meaning: "резать 🔪", example: "拉刀 lá dāo", example_ru: "нож", sound: "拉刀" },
                    { tone: "3-й", pinyin: "lǎ", ru: "ла", char: "拉", meaning: "половина ½", example: "半拉 bàn lǎ", example_ru: "половина", sound: "半拉" },
                    { tone: "4-й", pinyin: "là", ru: "ла", char: "辣", meaning: "острый 🌶️", example: "辣椒 là jiāo", example_ru: "перец", sound: "辣椒" }
                ]
            },
            le: { 
                translation: "лэ",
                tones: [
                    { tone: "1-й", pinyin: "lē", ru: "лэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "了" },
                    { tone: "2-й", pinyin: "lé", ru: "лэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "了" },
                    { tone: "3-й", pinyin: "lě", ru: "лэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "了" },
                    { tone: "4-й", pinyin: "lè", ru: "лэ", char: "乐", meaning: "радость 😊", example: "快乐 kuài lè", example_ru: "радостный", sound: "快乐" }
                ]
            },
            lai: { 
                translation: "лай",
                tones: [
                    { tone: "1-й", pinyin: "lāi", ru: "лай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "来" },
                    { tone: "2-й", pinyin: "lái", ru: "лай", char: "来", meaning: "приходить 🚶", example: "来去 lái qù", example_ru: "приходить и уходить", sound: "来去" },
                    { tone: "3-й", pinyin: "lǎi", ru: "лай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "来" },
                    { tone: "4-й", pinyin: "lài", ru: "лай", char: "赖", meaning: "полагаться 🤝", example: "依赖 yī lài", example_ru: "полагаться", sound: "依赖" }
                ]
            },
            lao: { 
                translation: "лао",
                tones: [
                    { tone: "1-й", pinyin: "lāo", ru: "лао", char: "捞", meaning: "вылавливать 🎣", example: "捞鱼 lāo yú", example_ru: "ловить рыбу", sound: "捞鱼" },
                    { tone: "2-й", pinyin: "láo", ru: "лао", char: "劳", meaning: "труд 💪", example: "劳动 láo dòng", example_ru: "труд", sound: "劳动" },
                    { tone: "3-й", pinyin: "lǎo", ru: "лао", char: "老", meaning: "старый 👴", example: "老人 lǎo rén", example_ru: "старик", sound: "老人" },
                    { tone: "4-й", pinyin: "lào", ru: "лао", char: "落", meaning: "падать 🍂", example: "落下 luò xià", example_ru: "падать", sound: "落下" }
                ]
            },
            lan: { 
                translation: "лань",
                tones: [
                    { tone: "1-й", pinyin: "lān", ru: "лань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "蓝" },
                    { tone: "2-й", pinyin: "lán", ru: "лань", char: "蓝", meaning: "синий 🔵", example: "蓝色 lán sè", example_ru: "синий цвет", sound: "蓝色" },
                    { tone: "3-й", pinyin: "lǎn", ru: "лань", char: "懒", meaning: "ленивый 🛋️", example: "懒惰 lǎn duò", example_ru: "ленивый", sound: "懒惰" },
                    { tone: "4-й", pinyin: "làn", ru: "лань", char: "烂", meaning: "гнилой 🍎", example: "烂泥 làn ní", example_ru: "грязь", sound: "烂泥" }
                ]
            },
            lang: { 
                translation: "лан",
                tones: [
                    { tone: "1-й", pinyin: "lāng", ru: "лан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "狼" },
                    { tone: "2-й", pinyin: "láng", ru: "лан", char: "狼", meaning: "волк 🐺", example: "狼狗 láng gǒu", example_ru: "овчарка", sound: "狼狗" },
                    { tone: "3-й", pinyin: "lǎng", ru: "лан", char: "朗", meaning: "ясный ☀️", example: "朗读 lǎng dú", example_ru: "читать вслух", sound: "朗读" },
                    { tone: "4-й", pinyin: "làng", ru: "лан", char: "浪", meaning: "волна 🌊", example: "浪花 làng huā", example_ru: "волна", sound: "浪花" }
                ]
            },
            long: { 
                translation: "лун",
                tones: [
                    { tone: "1-й", pinyin: "lōng", ru: "лун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "龙" },
                    { tone: "2-й", pinyin: "lóng", ru: "лун", char: "龙", meaning: "дракон 🐉", example: "龙年 lóng nián", example_ru: "год дракона", sound: "龙年" },
                    { tone: "3-й", pinyin: "lǒng", ru: "лун", char: "拢", meaning: "собирать 🤲", example: "拉拢 lā lǒng", example_ru: "привлекать", sound: "拉拢" },
                    { tone: "4-й", pinyin: "lòng", ru: "лун", char: "弄", meaning: "аллея 🛤️", example: "弄堂 lòng táng", example_ru: "переулок", sound: "弄堂" }
                ]
            },
            lou: { 
                translation: "лоу",
                tones: [
                    { tone: "1-й", pinyin: "lōu", ru: "лоу", char: "搂", meaning: "обнимать 🤗", example: "搂抱 lōu bào", example_ru: "обнимать", sound: "搂抱" },
                    { tone: "2-й", pinyin: "lóu", ru: "лоу", char: "楼", meaning: "этаж 🏢", example: "楼房 lóu fáng", example_ru: "здание", sound: "楼房" },
                    { tone: "3-й", pinyin: "lǒu", ru: "лоу", char: "搂", meaning: "обнимать", example: "搂着 lǒu zhe", example_ru: "обнимая", sound: "搂着" },
                    { tone: "4-й", pinyin: "lòu", ru: "лоу", char: "漏", meaning: "протекать 💧", example: "漏水 lòu shuǐ", example_ru: "течь", sound: "漏水" }
                ]
            },
            li: { 
                translation: "ли",
                tones: [
                    { tone: "1-й", pinyin: "lī", ru: "ли", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "里" },
                    { tone: "2-й", pinyin: "lí", ru: "ли", char: "离", meaning: "отделяться 🚪", example: "离开 lí kāi", example_ru: "уходить", sound: "离开" },
                    { tone: "3-й", pinyin: "lǐ", ru: "ли", char: "里", meaning: "внутри 📦", example: "里面 lǐ miàn", example_ru: "внутри", sound: "里面" },
                    { tone: "4-й", pinyin: "lì", ru: "ли", char: "力", meaning: "сила 💪", example: "力气 lì qi", example_ru: "сила", sound: "力气" }
                ]
            },
            lia: { 
                translation: "ля",
                tones: [
                    { tone: "1-й", pinyin: "liā", ru: "ля", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "俩" },
                    { tone: "2-й", pinyin: "liá", ru: "ля", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "俩" },
                    { tone: "3-й", pinyin: "liǎ", ru: "ля", char: "俩", meaning: "двое 👥", example: "咱俩 zán liǎ", example_ru: "мы двое", sound: "咱俩" },
                    { tone: "4-й", pinyin: "lià", ru: "ля", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "俩" }
                ]
            },
            lie: { 
                translation: "ле",
                tones: [
                    { tone: "1-й", pinyin: "liē", ru: "ле", char: "咧", meaning: "растягивать 😁", example: "咧嘴 liě zuǐ", example_ru: "улыбаться", sound: "咧嘴" },
                    { tone: "2-й", pinyin: "lié", ru: "ле", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "列" },
                    { tone: "3-й", pinyin: "liě", ru: "ле", char: "咧", meaning: "растягивать", example: "咧嘴 liě zuǐ", example_ru: "улыбаться", sound: "咧嘴" },
                    { tone: "4-й", pinyin: "liè", ru: "ле", char: "列", meaning: "ряд 📊", example: "排列 pái liè", example_ru: "выстраивать", sound: "排列" }
                ]
            },
            liao: { 
                translation: "ляо",
                tones: [
                    { tone: "1-й", pinyin: "liāo", ru: "ляо", char: "撩", meaning: "поднимать 🙌", example: "撩起 liāo qǐ", example_ru: "поднимать", sound: "撩起" },
                    { tone: "2-й", pinyin: "liáo", ru: "ляо", char: "聊", meaning: "болтать 💬", example: "聊天 liáo tiān", example_ru: "болтать", sound: "聊天" },
                    { tone: "3-й", pinyin: "liǎo", ru: "ляо", char: "了", meaning: "кончать ✅", example: "了解 liǎo jiě", example_ru: "понимать", sound: "了解" },
                    { tone: "4-й", pinyin: "liào", ru: "ляо", char: "料", meaning: "материал 🧵", example: "材料 cái liào", example_ru: "материал", sound: "材料" }
                ]
            },
            liu: { 
                translation: "лю",
                tones: [
                    { tone: "1-й", pinyin: "liū", ru: "лю", char: "溜", meaning: "скользить ⛸️", example: "溜走 liū zǒu", example_ru: "ускользать", sound: "溜走" },
                    { tone: "2-й", pinyin: "liú", ru: "лю", char: "流", meaning: "течь 💧", example: "河流 hé liú", example_ru: "река", sound: "河流" },
                    { tone: "3-й", pinyin: "liǔ", ru: "лю", char: "柳", meaning: "ива 🌿", example: "柳树 liǔ shù", example_ru: "ива", sound: "柳树" },
                    { tone: "4-й", pinyin: "liù", ru: "лю", char: "六", meaning: "шесть 6️⃣", example: "六个 liù ge", example_ru: "шесть", sound: "六个" }
                ]
            },
            lian: { 
                translation: "лянь",
                tones: [
                    { tone: "1-й", pinyin: "liān", ru: "лянь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "连" },
                    { tone: "2-й", pinyin: "lián", ru: "лянь", char: "连", meaning: "соединять 🔗", example: "连接 lián jiē", example_ru: "соединять", sound: "连接" },
                    { tone: "3-й", pinyin: "liǎn", ru: "лянь", char: "脸", meaning: "лицо 😀", example: "脸面 liǎn miàn", example_ru: "лицо", sound: "脸面" },
                    { tone: "4-й", pinyin: "liàn", ru: "лянь", char: "恋", meaning: "любить ❤️", example: "恋爱 liàn ài", example_ru: "любовь", sound: "恋爱" }
                ]
            },
            liang: { 
                translation: "лян",
                tones: [
                    { tone: "1-й", pinyin: "liāng", ru: "лян", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "凉" },
                    { tone: "2-й", pinyin: "liáng", ru: "лян", char: "凉", meaning: "холодный ❄️", example: "凉快 liáng kuài", example_ru: "прохладно", sound: "凉快" },
                    { tone: "3-й", pinyin: "liǎng", ru: "лян", char: "两", meaning: "два 2️⃣", example: "两个 liǎng ge", example_ru: "два", sound: "两个" },
                    { tone: "4-й", pinyin: "liàng", ru: "лян", char: "亮", meaning: "светлый 💡", example: "明亮 míng liàng", example_ru: "яркий", sound: "明亮" }
                ]
            },
            lin: { 
                translation: "линь",
                tones: [
                    { tone: "1-й", pinyin: "līn", ru: "линь", char: "拎", meaning: "нести 👜", example: "拎包 līn bāo", example_ru: "нести сумку", sound: "拎包" },
                    { tone: "2-й", pinyin: "lín", ru: "линь", char: "林", meaning: "лес 🌲", example: "森林 sēn lín", example_ru: "лес", sound: "森林" },
                    { tone: "3-й", pinyin: "lǐn", ru: "линь", char: "凛", meaning: "холодный 🥶", example: "凛冽 lǐn liè", example_ru: "холодный", sound: "凛冽" },
                    { tone: "4-й", pinyin: "lìn", ru: "линь", char: "吝", meaning: "скупой 💰", example: "吝啬 lìn sè", example_ru: "скупой", sound: "吝啬" }
                ]
            },
            ling: { 
                translation: "лин",
                tones: [
                    { tone: "1-й", pinyin: "líng", ru: "лин", char: "灵", meaning: "душа 🔮", example: "灵活 líng huó", example_ru: "гибкий", sound: "灵活" },
                    { tone: "2-й", pinyin: "líng", ru: "лин", char: "零", meaning: "ноль 0️⃣", example: "零钱 líng qián", example_ru: "мелочь", sound: "零钱" },
                    { tone: "3-й", pinyin: "lǐng", ru: "лин", char: "领", meaning: "вести 🧭", example: "领导 lǐng dǎo", example_ru: "руководить", sound: "领导" },
                    { tone: "4-й", pinyin: "lìng", ru: "лин", char: "另", meaning: "другой 🔄", example: "另外 lìng wài", example_ru: "кроме того", sound: "另外" }
                ]
            },
            lu: { 
                translation: "лу",
                tones: [
                    { tone: "1-й", pinyin: "lū", ru: "лу", char: "噜", meaning: "бормотать 🗣️", example: "噜苏 lū su", example_ru: "болтовня", sound: "噜苏" },
                    { tone: "2-й", pinyin: "lú", ru: "лу", char: "炉", meaning: "печь 🔥", example: "炉子 lú zi", example_ru: "печь", sound: "炉子" },
                    { tone: "3-й", pinyin: "lǔ", ru: "лу", char: "鲁", meaning: "грубый 🤨", example: "粗鲁 cū lǔ", example_ru: "грубый", sound: "粗鲁" },
                    { tone: "4-й", pinyin: "lù", ru: "лу", char: "路", meaning: "дорога 🛣️", example: "马路 mǎ lù", example_ru: "дорога", sound: "马路" }
                ]
            },
            luo: { 
                translation: "луо",
                tones: [
                    { tone: "1-й", pinyin: "luō", ru: "луо", char: "捋", meaning: "гладить ✋", example: "捋胡子 luō hú zi", example_ru: "гладить бороду", sound: "捋胡子" },
                    { tone: "2-й", pinyin: "luó", ru: "луо", char: "罗", meaning: "сито 🕸️", example: "罗网 luó wǎng", example_ru: "сеть", sound: "罗网" },
                    { tone: "3-й", pinyin: "luǒ", ru: "луо", char: "裸", meaning: "голый 🫣", example: "裸体 luǒ tǐ", example_ru: "голый", sound: "裸体" },
                    { tone: "4-й", pinyin: "luò", ru: "луо", char: "落", meaning: "падать 🍃", example: "落后 luò hòu", example_ru: "отставать", sound: "落后" }
                ]
            },
            luan: { 
                translation: "луань",
                tones: [
                    { tone: "1-й", pinyin: "luān", ru: "луань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "乱" },
                    { tone: "2-й", pinyin: "luán", ru: "луань", char: "峦", meaning: "горы ⛰️", example: "山峦 shān luán", example_ru: "горы", sound: "山峦" },
                    { tone: "3-й", pinyin: "luǎn", ru: "луань", char: "卵", meaning: "яйцо 🥚", example: "鸡蛋 jī dàn", example_ru: "яйцо", sound: "鸡蛋" },
                    { tone: "4-й", pinyin: "luàn", ru: "луань", char: "乱", meaning: "беспорядок 🌪️", example: "混乱 hùn luàn", example_ru: "хаос", sound: "混乱" }
                ]
            },
            lun: { 
                translation: "лунь",
                tones: [
                    { tone: "1-й", pinyin: "lūn", ru: "лунь", char: "抡", meaning: "размахивать 🤸", example: "抡起 lūn qǐ", example_ru: "размахивать", sound: "抡起" },
                    { tone: "2-й", pinyin: "lún", ru: "лунь", char: "轮", meaning: "колесо 🛞", example: "车轮 chē lún", example_ru: "колесо", sound: "车轮" },
                    { tone: "3-й", pinyin: "lǔn", ru: "лунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "轮" },
                    { tone: "4-й", pinyin: "lùn", ru: "лунь", char: "论", meaning: "обсуждать 💬", example: "讨论 tǎo lùn", example_ru: "обсуждать", sound: "讨论" }
                ]
            },
            lü: { 
                translation: "люй",
                tones: [
                    { tone: "1-й", pinyin: "lǖ", ru: "люй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "绿" },
                    { tone: "2-й", pinyin: "lǘ", ru: "люй", char: "驴", meaning: "осёл 🐴", example: "毛驴 máo lǘ", example_ru: "осёл", sound: "毛驴" },
                    { tone: "3-й", pinyin: "lǚ", ru: "люй", char: "旅", meaning: "путешествовать ✈️", example: "旅行 lǚ xíng", example_ru: "путешествовать", sound: "旅行" },
                    { tone: "4-й", pinyin: "lǜ", ru: "люй", char: "绿", meaning: "зелёный 🟢", example: "绿色 lǜ sè", example_ru: "зелёный цвет", sound: "绿色" }
                ]
            },
            lüe: { 
                translation: "люэ",
                tones: [
                    { tone: "1-й", pinyin: "lüē", ru: "люэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "略" },
                    { tone: "2-й", pinyin: "lüé", ru: "люэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "略" },
                    { tone: "3-й", pinyin: "lüě", ru: "люэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "略" },
                    { tone: "4-й", pinyin: "lüè", ru: "люэ", char: "略", meaning: "немного 🔍", example: "略微 lüè wēi", example_ru: "немного", sound: "略微" }
                ]
            }
        }
    },

    // ==================== G ====================
    g: {
        desc: "g [k] — как «г» в слове «год» (без голоса)",
        ru_sound: "гэ (как в слове «год», без голоса, задняя часть языка к нёбу)",
        articulation: "👅 Задняя часть языка поднимается к нёбу. ГОЛОС НЕ ВКЛЮЧЁН.",
        sound: "gā",
        syllables: {
            ga: { 
                translation: "га",
                tones: [
                    { tone: "1-й", pinyin: "gā", ru: "га", char: "嘎", meaning: "кря 🦆", example: "嘎嘎 gā gā", example_ru: "кря-кря", sound: "嘎嘎" },
                    { tone: "2-й", pinyin: "gá", ru: "га", char: "轧", meaning: "давить ⚙️", example: "轧钢 gá gāng", example_ru: "прокатка стали", sound: "轧钢" },
                    { tone: "3-й", pinyin: "gǎ", ru: "га", char: "尕", meaning: "маленький 👶", example: "尕娃 gǎ wá", example_ru: "малыш", sound: "尕娃" },
                    { tone: "4-й", pinyin: "gà", ru: "га", char: "尬", meaning: "неловкий 😅", example: "尴尬 gān gà", example_ru: "неловко", sound: "尴尬" }
                ]
            },
            ge: { 
                translation: "гэ",
                tones: [
                    { tone: "1-й", pinyin: "gē", ru: "гэ", char: "哥", meaning: "брат 👨", example: "哥哥 gē ge", example_ru: "старший брат", sound: "哥哥" },
                    { tone: "2-й", pinyin: "gé", ru: "гэ", char: "格", meaning: "клетка 🔲", example: "格子 gé zi", example_ru: "клетка", sound: "格子" },
                    { tone: "3-й", pinyin: "gě", ru: "гэ", char: "葛", meaning: "фамилия 📛", example: "葛优 Gě Yōu", example_ru: "актёр", sound: "葛优" },
                    { tone: "4-й", pinyin: "gè", ru: "гэ", char: "个", meaning: "счётное слово 🔢", example: "一个 yī gè", example_ru: "один", sound: "一个" }
                ]
            },
            gai: { 
                translation: "гай",
                tones: [
                    { tone: "1-й", pinyin: "gāi", ru: "гай", char: "该", meaning: "должен ✅", example: "应该 yīng gāi", example_ru: "следует", sound: "应该" },
                    { tone: "2-й", pinyin: "gái", ru: "гай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "改" },
                    { tone: "3-й", pinyin: "gǎi", ru: "гай", char: "改", meaning: "менять 🔄", example: "改变 gǎi biàn", example_ru: "менять", sound: "改变" },
                    { tone: "4-й", pinyin: "gài", ru: "гай", char: "盖", meaning: "крышка 🧢", example: "盖子 gài zi", example_ru: "крышка", sound: "盖子" }
                ]
            },
            gao: { 
                translation: "гао",
                tones: [
                    { tone: "1-й", pinyin: "gāo", ru: "гао", char: "高", meaning: "высокий 📈", example: "高兴 gāo xìng", example_ru: "радостный", sound: "高兴" },
                    { tone: "2-й", pinyin: "gáo", ru: "гао", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "搞" },
                    { tone: "3-й", pinyin: "gǎo", ru: "гао", char: "搞", meaning: "делать 🛠️", example: "搞定 gǎo dìng", example_ru: "сделать", sound: "搞定" },
                    { tone: "4-й", pinyin: "gào", ru: "гао", char: "告", meaning: "сообщать 📢", example: "告诉 gào su", example_ru: "сказать", sound: "告诉" }
                ]
            },
            gan: { 
                translation: "гань",
                tones: [
                    { tone: "1-й", pinyin: "gān", ru: "гань", char: "干", meaning: "делать 🛠️", example: "干净 gān jìng", example_ru: "чистый", sound: "干净" },
                    { tone: "2-й", pinyin: "gán", ru: "гань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "干" },
                    { tone: "3-й", pinyin: "gǎn", ru: "гань", char: "敢", meaning: "сметь 💪", example: "勇敢 yǒng gǎn", example_ru: "смелый", sound: "勇敢" },
                    { tone: "4-й", pinyin: "gàn", ru: "гань", char: "干", meaning: "делать", example: "干活 gàn huó", example_ru: "работать", sound: "干活" }
                ]
            },
            gang: { 
                translation: "ган",
                tones: [
                    { tone: "1-й", pinyin: "gāng", ru: "ган", char: "刚", meaning: "только что ⏱️", example: "刚才 gāng cái", example_ru: "только что", sound: "刚才" },
                    { tone: "2-й", pinyin: "gáng", ru: "ган", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "刚" },
                    { tone: "3-й", pinyin: "gǎng", ru: "ган", char: "港", meaning: "порт ⚓", example: "香港 Xiāng gǎng", example_ru: "Гонконг", sound: "香港" },
                    { tone: "4-й", pinyin: "gàng", ru: "ган", char: "杠", meaning: "перекладина 🤸", example: "单杠 dān gàng", example_ru: "турник", sound: "单杠" }
                ]
            },
            gong: { 
                translation: "гун",
                tones: [
                    { tone: "1-й", pinyin: "gōng", ru: "гун", char: "工", meaning: "работа 💼", example: "工作 gōng zuò", example_ru: "работа", sound: "工作" },
                    { tone: "2-й", pinyin: "góng", ru: "гун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "工" },
                    { tone: "3-й", pinyin: "gǒng", ru: "гун", char: "拱", meaning: "арка 🏛️", example: "拱门 gǒng mén", example_ru: "арка", sound: "拱门" },
                    { tone: "4-й", pinyin: "gòng", ru: "гун", char: "共", meaning: "вместе 🤝", example: "共同 gòng tóng", example_ru: "общий", sound: "共同" }
                ]
            },
            gou: { 
                translation: "гоу",
                tones: [
                    { tone: "1-й", pinyin: "gōu", ru: "гоу", char: "勾", meaning: "крючок 🪝", example: "勾引 gōu yǐn", example_ru: "соблазнять", sound: "勾引" },
                    { tone: "2-й", pinyin: "góu", ru: "гоу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "狗" },
                    { tone: "3-й", pinyin: "gǒu", ru: "гоу", char: "狗", meaning: "собака 🐕", example: "小狗 xiǎo gǒu", example_ru: "собачка", sound: "小狗" },
                    { tone: "4-й", pinyin: "gòu", ru: "гоу", char: "够", meaning: "достаточно ✅", example: "足够 zú gòu", example_ru: "достаточно", sound: "足够" }
                ]
            },
            gu: { 
                translation: "гу",
                tones: [
                    { tone: "1-й", pinyin: "gū", ru: "гу", char: "姑", meaning: "тётя 👩", example: "姑娘 gū niang", example_ru: "девушка", sound: "姑娘" },
                    { tone: "2-й", pinyin: "gú", ru: "гу", char: "骨", meaning: "кость 🦴", example: "骨头 gǔ tou", example_ru: "кость", sound: "骨头" },
                    { tone: "3-й", pinyin: "gǔ", ru: "гу", char: "古", meaning: "древний 🏺", example: "古代 gǔ dài", example_ru: "древность", sound: "古代" },
                    { tone: "4-й", pinyin: "gù", ru: "гу", char: "故", meaning: "поэтому 🔁", example: "故事 gù shì", example_ru: "история", sound: "故事" }
                ]
            },
            gua: { 
                translation: "гуа",
                tones: [
                    { tone: "1-й", pinyin: "guā", ru: "гуа", char: "瓜", meaning: "дыня 🍈", example: "西瓜 xī guā", example_ru: "арбуз", sound: "西瓜" },
                    { tone: "2-й", pinyin: "guá", ru: "гуа", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "瓜" },
                    { tone: "3-й", pinyin: "guǎ", ru: "гуа", char: "寡", meaning: "вдова 👵", example: "寡妇 guǎ fu", example_ru: "вдова", sound: "寡妇" },
                    { tone: "4-й", pinyin: "guà", ru: "гуа", char: "挂", meaning: "вешать 🖼️", example: "挂念 guà niàn", example_ru: "беспокоиться", sound: "挂念" }
                ]
            },
            guo: { 
                translation: "гуо",
                tones: [
                    { tone: "1-й", pinyin: "guō", ru: "гуо", char: "锅", meaning: "котелок 🍲", example: "火锅 huǒ guō", example_ru: "хого", sound: "火锅" },
                    { tone: "2-й", pinyin: "guó", ru: "гуо", char: "国", meaning: "страна 🗺️", example: "国家 guó jiā", example_ru: "страна", sound: "国家" },
                    { tone: "3-й", pinyin: "guǒ", ru: "гуо", char: "果", meaning: "фрукт 🍎", example: "苹果 píng guǒ", example_ru: "яблоко", sound: "苹果" },
                    { tone: "4-й", pinyin: "guò", ru: "гуо", char: "过", meaning: "проходить 🚶", example: "过去 guò qù", example_ru: "прошлое", sound: "过去" }
                ]
            },
           gui_gui: { 
    translation: "гуй",
    tones: [
        { tone: "1-й", pinyin: "guī", ru: "гуй", char: "归", meaning: "возвращаться 🔙", example: "回来 huí lái", example_ru: "вернуться", sound: "回来" },
        { tone: "2-й", pinyin: "guí", ru: "гуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
        { tone: "3-й", pinyin: "guǐ", ru: "гуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
        { tone: "4-й", pinyin: "guì", ru: "гуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" }
    ]
},
gui_turtle: { 
    translation: "гуй",
    tones: [
        { tone: "1-й", pinyin: "guī", ru: "гуй", char: "龟", meaning: "черепаха 🐢", example: "乌龟 wū guī", example_ru: "черепаха", sound: "乌龟" },
        { tone: "3-й", pinyin: "guǐ", ru: "гуй", char: "鬼", meaning: "призрак 👻", example: "鬼怪 guǐ guài", example_ru: "монстр", sound: "鬼怪" },
        { tone: "4-й", pinyin: "guì", ru: "гуй", char: "贵", meaning: "дорогой 💎", example: "贵宾 guì bīn", example_ru: "почётный гость", sound: "贵宾" }
    ]
},
gui_group: { 
    translation: "гуй",
    tones: [
        { tone: "1-й", pinyin: "guī", ru: "гуй", char: "规", meaning: "правило 📐", example: "规则 guī zé", example_ru: "правила", sound: "规则" },
        { tone: "3-й", pinyin: "guǐ", ru: "гуй", char: "轨", meaning: "рельс 🛤️", example: "轨道 guǐ dào", example_ru: "орбита", sound: "轨道" },
        { tone: "4-й", pinyin: "guì", ru: "гуй", char: "柜", meaning: "шкаф 🗄️", example: "衣柜 yī guì", example_ru: "шкаф для одежды", sound: "衣柜" }
    ]
},
gui_kneel: { 
    translation: "гуй",
    tones: [
        { tone: "4-й", pinyin: "guì", ru: "гуй", char: "跪", meaning: "стоять на коленях 🙇", example: "跪下 guì xià", example_ru: "встать на колени", sound: "跪下" }
    ]
},
gui_cinnamon: { 
    translation: "гуй",
    tones: [
        { tone: "4-й", pinyin: "guì", ru: "гуй", char: "桂", meaning: "корица 🌸", example: "桂花 guì huā", example_ru: "цветы корицы", sound: "桂花" }
    ]
},   
            guan: { 
    translation: "гуань",
    tones: [
        { tone: "1-й", pinyin: "guān", ru: "гуань", char: "关", meaning: "закрывать 🚪", example: "关系 guān xì", example_ru: "отношение", sound: "关系" },
        { tone: "2-й", pinyin: "guán", ru: "гуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
        { tone: "3-й", pinyin: "guǎn", ru: "гуань", char: "管", meaning: "труба 🔧", example: "管理 guǎn lǐ", example_ru: "управлять", sound: "管理" },
        { tone: "4-й", pinyin: "guàn", ru: "гуань", char: "惯", meaning: "привыкать 🔄", example: "习惯 xí guàn", example_ru: "привычка", sound: "习惯" }
    ]
},
            gun: { 
                translation: "гунь",
                tones: [
                    { tone: "1-й", pinyin: "gūn", ru: "гунь", char: "滚", meaning: "катиться 🔄", example: "滚动 gǔn dòng", example_ru: "катиться", sound: "滚动" },
                    { tone: "2-й", pinyin: "gún", ru: "гунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "滚" },
                    { tone: "3-й", pinyin: "gǔn", ru: "гунь", char: "滚", meaning: "катиться", example: "滚开 gǔn kāi", example_ru: "убирайся", sound: "滚开" },
                    { tone: "4-й", pinyin: "gùn", ru: "гунь", char: "棍", meaning: "палка 🏑", example: "棍子 gùn zi", example_ru: "палка", sound: "棍子" }
                ]
            },
            guang: { 
                translation: "гуан",
                tones: [
                    { tone: "1-й", pinyin: "guāng", ru: "гуан", char: "光", meaning: "свет 💡", example: "光线 guāng xiàn", example_ru: "свет", sound: "光线" },
                    { tone: "2-й", pinyin: "guáng", ru: "гуан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "光" },
                    { tone: "3-й", pinyin: "guǎng", ru: "гуан", char: "广", meaning: "широкий 🌍", example: "广州 Guǎng zhōu", example_ru: "Гуанчжоу", sound: "广州" },
                    { tone: "4-й", pinyin: "guàng", ru: "гуан", char: "逛", meaning: "гулять 🚶", example: "逛街 guàng jiē", example_ru: "гулять по улице", sound: "逛街" }
                ]
            }
        }
    },

    // ==================== K ====================
    k: {
        desc: "k [kʰ] — «к» с сильным выдохом",
        ru_sound: "кэ (с сильным выдохом, как при кашле)",
        articulation: "💨 Задняя часть языка к нёбу, затем резкий разрыв с СИЛЬНЫМ ВЫДОХОМ.",
        sound: "kā",
        syllables: {
            ka: { 
                translation: "ка",
                tones: [
                    { tone: "1-й", pinyin: "kā", ru: "ка", char: "咖", meaning: "кофе ☕", example: "咖啡 kā fēi", example_ru: "кофе", sound: "咖啡" },
                    { tone: "2-й", pinyin: "ká", ru: "ка", char: "卡", meaning: "застревать 🚧", example: "卡住 kǎ zhù", example_ru: "застрять", sound: "卡住" },
                    { tone: "3-й", pinyin: "kǎ", ru: "ка", char: "卡", meaning: "карта 💳", example: "卡片 kǎ piàn", example_ru: "карточка", sound: "卡片" },
                    { tone: "4-й", pinyin: "kà", ru: "ка", char: "喀", meaning: "кашлять 🤧", example: "喀嚓 kā chā", example_ru: "хруст", sound: "喀嚓" }
                ]
            },
            ke: { 
                translation: "кэ",
                tones: [
                    { tone: "1-й", pinyin: "kē", ru: "кэ", char: "科", meaning: "наука 🔬", example: "科学 kē xué", example_ru: "наука", sound: "科学" },
                    { tone: "2-й", pinyin: "ké", ru: "кэ", char: "壳", meaning: "скорлупа 🥚", example: "贝壳 bèi ké", example_ru: "ракушка", sound: "贝壳" },
                    { tone: "3-й", pinyin: "kě", ru: "кэ", char: "可", meaning: "можно ✅", example: "可以 kě yǐ", example_ru: "можно", sound: "可以" },
                    { tone: "4-й", pinyin: "kè", ru: "кэ", char: "课", meaning: "урок 📚", example: "上课 shàng kè", example_ru: "идти на урок", sound: "上课" }
                ]
            },
            kai: { 
                translation: "кай",
                tones: [
                    { tone: "1-й", pinyin: "kāi", ru: "кай", char: "开", meaning: "открывать 🚪", example: "开门 kāi mén", example_ru: "открыть дверь", sound: "开门" },
                    { tone: "2-й", pinyin: "kái", ru: "кай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "开" },
                    { tone: "3-й", pinyin: "kǎi", ru: "кай", char: "凯", meaning: "победа 🏆", example: "凯旋 kǎi xuán", example_ru: "триумф", sound: "凯旋" },
                    { tone: "4-й", pinyin: "kài", ru: "кай", char: "忾", meaning: "ненависть 😤", example: "同仇敌忾 tóng chóu dí kài", example_ru: "общая ненависть", sound: "同仇敌忾" }
                ]
            },
            kao: { 
                translation: "као",
                tones: [
                    { tone: "1-й", pinyin: "kāo", ru: "као", char: "尻", meaning: "копчик 🍑", example: "—", example_ru: "—", sound: "考" },
                    { tone: "2-й", pinyin: "káo", ru: "као", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "考" },
                    { tone: "3-й", pinyin: "kǎo", ru: "као", char: "考", meaning: "экзамен 📝", example: "考试 kǎo shì", example_ru: "экзамен", sound: "考试" },
                    { tone: "4-й", pinyin: "kào", ru: "као", char: "靠", meaning: "полагаться 🤝", example: "靠近 kào jìn", example_ru: "приближаться", sound: "靠近" }
                ]
            },
            kan: { 
                translation: "кань",
                tones: [
                    { tone: "1-й", pinyin: "kān", ru: "кань", char: "看", meaning: "смотреть 👀", example: "看门 kān mén", example_ru: "сторожить", sound: "看门" },
                    { tone: "2-й", pinyin: "kán", ru: "кань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "看" },
                    { tone: "3-й", pinyin: "kǎn", ru: "кань", char: "砍", meaning: "рубить 🪓", example: "砍树 kǎn shù", example_ru: "рубить дерево", sound: "砍树" },
                    { tone: "4-й", pinyin: "kàn", ru: "кань", char: "看", meaning: "смотреть", example: "看见 kàn jiàn", example_ru: "видеть", sound: "看见" }
                ]
            },
            kang: { 
                translation: "кан",
                tones: [
                    { tone: "1-й", pinyin: "kāng", ru: "кан", char: "康", meaning: "здоровье ❤️", example: "健康 jiàn kāng", example_ru: "здоровье", sound: "健康" },
                    { tone: "2-й", pinyin: "káng", ru: "кан", char: "扛", meaning: "нести 🏋️", example: "扛着 káng zhe", example_ru: "нести", sound: "扛着" },
                    { tone: "3-й", pinyin: "kǎng", ru: "кан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "康" },
                    { tone: "4-й", pinyin: "kàng", ru: "кан", char: "抗", meaning: "сопротивляться 🛡️", example: "反抗 fǎn kàng", example_ru: "сопротивляться", sound: "反抗" }
                ]
            },
            kong: { 
                translation: "кун",
                tones: [
                    { tone: "1-й", pinyin: "kōng", ru: "кун", char: "空", meaning: "пустой 🫙", example: "空气 kōng qì", example_ru: "воздух", sound: "空气" },
                    { tone: "2-й", pinyin: "kóng", ru: "кун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "空" },
                    { tone: "3-й", pinyin: "kǒng", ru: "кун", char: "孔", meaning: "отверстие 🕳️", example: "孔子 Kǒng zǐ", example_ru: "Конфуций", sound: "孔子" },
                    { tone: "4-й", pinyin: "kòng", ru: "кун", char: "空", meaning: "свободный 🆓", example: "空闲 kòng xián", example_ru: "свободный", sound: "空闲" }
                ]
            },
            kou: { 
                translation: "коу",
                tones: [
                    { tone: "1-й", pinyin: "kōu", ru: "коу", char: "抠", meaning: "царапать ✍️", example: "抠门 kōu mén", example_ru: "скупой", sound: "抠门" },
                    { tone: "2-й", pinyin: "kóu", ru: "коу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "口" },
                    { tone: "3-й", pinyin: "kǒu", ru: "коу", char: "口", meaning: "рот 👄", example: "口水 kǒu shuǐ", example_ru: "слюна", sound: "口水" },
                    { tone: "4-й", pinyin: "kòu", ru: "коу", char: "扣", meaning: "застёгивать 🔘", example: "扣子 kòu zi", example_ru: "пуговица", sound: "扣子" }
                ]
            },
            ku: { 
                translation: "ку",
                tones: [
                    { tone: "1-й", pinyin: "kū", ru: "ку", char: "哭", meaning: "плакать 😢", example: "哭泣 kū qì", example_ru: "плакать", sound: "哭泣" },
                    { tone: "2-й", pinyin: "kú", ru: "ку", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "苦" },
                    { tone: "3-й", pinyin: "kǔ", ru: "ку", char: "苦", meaning: "горький ☕", example: "苦瓜 kǔ guā", example_ru: "горькая дыня", sound: "苦瓜" },
                    { tone: "4-й", pinyin: "kù", ru: "ку", char: "酷", meaning: "крутой 😎", example: "酷热 kù rè", example_ru: "жара", sound: "酷热" }
                ]
            },
            kua: { 
                translation: "куа",
                tones: [
                    { tone: "1-й", pinyin: "kuā", ru: "куа", char: "夸", meaning: "хвалить 👍", example: "夸奖 kuā jiǎng", example_ru: "хвалить", sound: "夸奖" },
                    { tone: "2-й", pinyin: "kuá", ru: "куа", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "夸" },
                    { tone: "3-й", pinyin: "kuǎ", ru: "куа", char: "垮", meaning: "рушиться 💥", example: "垮台 kuǎ tái", example_ru: "крах", sound: "垮台" },
                    { tone: "4-й", pinyin: "kuà", ru: "куа", char: "跨", meaning: "перешагивать 🚶", example: "跨过 kuà guò", example_ru: "перешагнуть", sound: "跨过" }
                ]
            },
            kuo: { 
                translation: "куо",
                tones: [
                    { tone: "1-й", pinyin: "kuō", ru: "куо", char: "扩", meaning: "расширять 📈", example: "扩大 kuò dà", example_ru: "расширять", sound: "扩大" },
                    { tone: "2-й", pinyin: "kuó", ru: "куо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "扩" },
                    { tone: "3-й", pinyin: "kuǒ", ru: "куо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "扩" },
                    { tone: "4-й", pinyin: "kuò", ru: "куо", char: "阔", meaning: "широкий 🌊", example: "广阔 guǎng kuò", example_ru: "широкий", sound: "广阔" }
                ]
            },
            kui: { 
                translation: "куй",
                tones: [
                    { tone: "1-й", pinyin: "kuī", ru: "куй", char: "亏", meaning: "терять 💸", example: "吃亏 chī kuī", example_ru: "терпеть убытки", sound: "吃亏" },
                    { tone: "2-й", pinyin: "kuí", ru: "куй", char: "葵", meaning: "подсолнух 🌻", example: "向日葵 xiàng rì kuí", example_ru: "подсолнух", sound: "向日葵" },
                    { tone: "3-й", pinyin: "kuǐ", ru: "куй", char: "傀", meaning: "марионетка 🎭", example: "傀儡 kuǐ lěi", example_ru: "марионетка", sound: "傀儡" },
                    { tone: "4-й", pinyin: "kuì", ru: "куй", char: "愧", meaning: "стыдиться 😳", example: "惭愧 cán kuì", example_ru: "стыдиться", sound: "惭愧" }
                ]
            },
            kuai: { 
                translation: "куай",
                tones: [
                    { tone: "1-й", pinyin: "kuāi", ru: "куай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "快" },
                    { tone: "2-й", pinyin: "kuái", ru: "куай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "快" },
                    { tone: "3-й", pinyin: "kuǎi", ru: "куай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "快" },
                    { tone: "4-й", pinyin: "kuài", ru: "куай", char: "快", meaning: "быстрый ⚡", example: "快乐 kuài lè", example_ru: "радость", sound: "快乐" }
                ]
            },
            kuan: { 
                translation: "куань",
                tones: [
                    { tone: "1-й", pinyin: "kuān", ru: "куань", char: "宽", meaning: "широкий 📏", example: "宽广 kuān guǎng", example_ru: "широкий", sound: "宽广" },
                    { tone: "2-й", pinyin: "kuán", ru: "куань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "宽" },
                    { tone: "3-й", pinyin: "kuǎn", ru: "куань", char: "款", meaning: "деньги 💰", example: "款待 kuǎn dài", example_ru: "угощать", sound: "款待" },
                    { tone: "4-й", pinyin: "kuàn", ru: "куань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "宽" }
                ]
            },
            kun: { 
                translation: "кунь",
                tones: [
                    { tone: "1-й", pinyin: "kūn", ru: "кунь", char: "坤", meaning: "земля 🌍", example: "乾坤 qián kūn", example_ru: "небо и земля", sound: "乾坤" },
                    { tone: "2-й", pinyin: "kún", ru: "кунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "坤" },
                    { tone: "3-й", pinyin: "kǔn", ru: "кунь", char: "捆", meaning: "связывать 🪢", example: "捆绑 kǔn bǎng", example_ru: "связывать", sound: "捆绑" },
                    { tone: "4-й", pinyin: "kùn", ru: "кунь", char: "困", meaning: "трудный 😩", example: "困难 kùn nán", example_ru: "трудность", sound: "困难" }
                ]
            },
            kuang: { 
                translation: "куан",
                tones: [
                    { tone: "1-й", pinyin: "kuāng", ru: "куан", char: "筐", meaning: "корзина 🧺", example: "箩筐 luó kuāng", example_ru: "корзина", sound: "箩筐" },
                    { tone: "2-й", pinyin: "kuáng", ru: "куан", char: "狂", meaning: "безумный 🤪", example: "狂风 kuáng fēng", example_ru: "ураган", sound: "狂风" },
                    { tone: "3-й", pinyin: "kuǎng", ru: "куан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "狂" },
                    { tone: "4-й", pinyin: "kuàng", ru: "куан", char: "矿", meaning: "шахта ⛏️", example: "矿物 kuàng wù", example_ru: "минерал", sound: "矿物" }
                ]
            }
        }
    },

    // ==================== H ====================
    h: {
        desc: "h [x] — как русская «х»",
        ru_sound: "хэ (как в слове «холод», выдох через суженную щель)",
        articulation: "👅 Задняя часть языка接近 к нёбу, воздух проходит через щель.",
        sound: "hā",
        syllables: {
            ha: { 
                translation: "ха",
                tones: [
                    { tone: "1-й", pinyin: "hā", ru: "ха", char: "哈", meaning: "ха 😄", example: "哈哈 hā hā", example_ru: "ха-ха", sound: "哈哈" },
                    { tone: "2-й", pinyin: "há", ru: "ха", char: "蛤", meaning: "жаба 🐸", example: "蛤蟆 há ma", example_ru: "жаба", sound: "蛤蟆" },
                    { tone: "3-й", pinyin: "hǎ", ru: "ха", char: "哈", meaning: "ха", example: "哈巴狗 hǎ ba gǒu", example_ru: "мопс", sound: "哈巴狗" },
                    { tone: "4-й", pinyin: "hà", ru: "ха", char: "哈", meaning: "выдох 💨", example: "哈气 hā qì", example_ru: "выдох", sound: "哈气" }
                ]
            },
            he: { 
                translation: "хэ",
                tones: [
                    { tone: "1-й", pinyin: "hē", ru: "хэ", char: "喝", meaning: "пить 🥤", example: "喝水 hē shuǐ", example_ru: "пить воду", sound: "喝水" },
                    { tone: "2-й", pinyin: "hé", ru: "хэ", char: "和", meaning: "и ➕", example: "和平 hé píng", example_ru: "мир", sound: "和平" },
                    { tone: "3-й", pinyin: "hě", ru: "хэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "和" },
                    { tone: "4-й", pinyin: "hè", ru: "хэ", char: "贺", meaning: "поздравлять 🎉", example: "祝贺 zhù hè", example_ru: "поздравлять", sound: "祝贺" }
                ]
            },
            hai: { 
                translation: "хай",
                tones: [
                    { tone: "1-й", pinyin: "hāi", ru: "хай", char: "嗨", meaning: "привет 👋", example: "嗨！ hāi", example_ru: "привет!", sound: "嗨" },
                    { tone: "2-й", pinyin: "hái", ru: "хай", char: "还", meaning: "ещё ➕", example: "还有 hái yǒu", example_ru: "ещё есть", sound: "还有" },
                    { tone: "3-й", pinyin: "hǎi", ru: "хай", char: "海", meaning: "море 🌊", example: "大海 dà hǎi", example_ru: "море", sound: "大海" },
                    { tone: "4-й", pinyin: "hài", ru: "хай", char: "害", meaning: "вредить 😈", example: "害怕 hài pà", example_ru: "бояться", sound: "害怕" }
                ]
            },
            hao: { 
                translation: "хао",
                tones: [
                    { tone: "1-й", pinyin: "hāo", ru: "хао", char: "蒿", meaning: "полынь 🌿", example: "蒿子 hāo zi", example_ru: "полынь", sound: "蒿子" },
                    { tone: "2-й", pinyin: "háo", ru: "хао", char: "毫", meaning: "волосок 🧵", example: "丝毫 sī háo", example_ru: "ничуть", sound: "丝毫" },
                    { tone: "3-й", pinyin: "hǎo", ru: "хао", char: "好", meaning: "хороший 👍", example: "好人 hǎo rén", example_ru: "хороший человек", sound: "好人" },
                    { tone: "4-й", pinyin: "hào", ru: "хао", char: "号", meaning: "номер 🔢", example: "号码 hào mǎ", example_ru: "номер", sound: "号码" }
                ]
            },
            han: { 
                translation: "хань",
                tones: [
                    { tone: "1-й", pinyin: "hān", ru: "хань", char: "鼾", meaning: "храпеть 😴", example: "打鼾 dǎ hān", example_ru: "храпеть", sound: "打鼾" },
                    { tone: "2-й", pinyin: "hán", ru: "хань", char: "寒", meaning: "холод ❄️", example: "寒冷 hán lěng", example_ru: "холодный", sound: "寒冷" },
                    { tone: "3-й", pinyin: "hǎn", ru: "хань", char: "喊", meaning: "кричать 📢", example: "喊叫 hǎn jiào", example_ru: "кричать", sound: "喊叫" },
                    { tone: "4-й", pinyin: "hàn", ru: "хань", char: "汗", meaning: "пот 💦", example: "出汗 chū hàn", example_ru: "потеть", sound: "出汗" }
                ]
            },
            hang: { 
                translation: "хан",
                tones: [
                    { tone: "1-й", pinyin: "hāng", ru: "хан", char: "夯", meaning: "трамбовать 🔨", example: "夯实 hāng shí", example_ru: "утрамбовать", sound: "夯实" },
                    { tone: "2-й", pinyin: "háng", ru: "хан", char: "行", meaning: "ряд 📏", example: "银行 yín háng", example_ru: "банк", sound: "银行" },
                    { tone: "3-й", pinyin: "hǎng", ru: "хан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "行" },
                    { tone: "4-й", pinyin: "hàng", ru: "хан", char: "巷", meaning: "переулок 🏘️", example: "巷道 hàng dào", example_ru: "переулок", sound: "巷道" }
                ]
            },
            hong: { 
                translation: "хун",
                tones: [
                    { tone: "1-й", pinyin: "hōng", ru: "хун", char: "轰", meaning: "греметь 💥", example: "轰炸 hōng zhà", example_ru: "бомбить", sound: "轰炸" },
                    { tone: "2-й", pinyin: "hóng", ru: "хун", char: "红", meaning: "красный 🔴", example: "红色 hóng sè", example_ru: "красный цвет", sound: "红色" },
                    { tone: "3-й", pinyin: "hǒng", ru: "хун", char: "哄", meaning: "обманывать 🎭", example: "哄骗 hǒng piàn", example_ru: "обманывать", sound: "哄骗" },
                    { tone: "4-й", pinyin: "hòng", ru: "хун", char: "哄", meaning: "шум 🔊", example: "起哄 qǐ hòng", example_ru: "шуметь", sound: "起哄" }
                ]
            },
            hou: { 
                translation: "хоу",
                tones: [
                    { tone: "1-й", pinyin: "hōu", ru: "хоу", char: "齁", meaning: "солёный 🧂", example: "齁咸 hōu xián", example_ru: "слишком солёный", sound: "齁咸" },
                    { tone: "2-й", pinyin: "hóu", ru: "хоу", char: "喉", meaning: "горло 👄", example: "喉咙 hóu lóng", example_ru: "горло", sound: "喉咙" },
                    { tone: "3-й", pinyin: "hǒu", ru: "хоу", char: "吼", meaning: "рычать 🦁", example: "吼叫 hǒu jiào", example_ru: "рычать", sound: "吼叫" },
                    { tone: "4-й", pinyin: "hòu", ru: "хоу", char: "后", meaning: "после ⏰", example: "后来 hòu lái", example_ru: "позже", sound: "后来" }
                ]
            },
            hu: { 
                translation: "ху",
                tones: [
                    { tone: "1-й", pinyin: "hū", ru: "ху", char: "呼", meaning: "дышать 🌬️", example: "呼吸 hū xī", example_ru: "дышать", sound: "呼吸" },
                    { tone: "2-й", pinyin: "hú", ru: "ху", char: "胡", meaning: "борода 🧔", example: "胡子 hú zi", example_ru: "борода", sound: "胡子" },
                    { tone: "3-й", pinyin: "hǔ", ru: "ху", char: "虎", meaning: "тигр 🐯", example: "老虎 lǎo hǔ", example_ru: "тигр", sound: "老虎" },
                    { tone: "4-й", pinyin: "hù", ru: "ху", char: "户", meaning: "дверь 🚪", example: "窗户 chuāng hu", example_ru: "окно", sound: "窗户" }
                ]
            },
            hua: { 
                translation: "хуа",
                tones: [
                    { tone: "1-й", pinyin: "huā", ru: "хуа", char: "花", meaning: "цветок 🌸", example: "花朵 huā duǒ", example_ru: "цветок", sound: "花朵" },
                    { tone: "2-й", pinyin: "huá", ru: "хуа", char: "华", meaning: "великий 🏛️", example: "中华 Zhōng huá", example_ru: "Китай", sound: "中华" },
                    { tone: "3-й", pinyin: "huǎ", ru: "хуа", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "花" },
                    { tone: "4-й", pinyin: "huà", ru: "хуа", char: "话", meaning: "речь 💬", example: "说话 shuō huà", example_ru: "говорить", sound: "说话" }
                ]
            },
            huo: { 
                translation: "хуо",
                tones: [
                    { tone: "1-й", pinyin: "huō", ru: "хуо", char: "豁", meaning: "открытый 🚪", example: "豁口 huō kǒu", example_ru: "проём", sound: "豁口" },
                    { tone: "2-й", pinyin: "huó", ru: "хуо", char: "活", meaning: "жить 💚", example: "活动 huó dòng", example_ru: "активность", sound: "活动" },
                    { tone: "3-й", pinyin: "huǒ", ru: "хуо", char: "火", meaning: "огонь 🔥", example: "火车 huǒ chē", example_ru: "поезд", sound: "火车" },
                    { tone: "4-й", pinyin: "huò", ru: "хуо", char: "或", meaning: "или 🤷", example: "或者 huò zhě", example_ru: "или", sound: "或者" }
                ]
            },
            hui: { 
                translation: "хуй",
                tones: [
                    { tone: "1-й", pinyin: "huī", ru: "хуй", char: "灰", meaning: "пепел 🪦", example: "灰色 huī sè", example_ru: "серый", sound: "灰色" },
                    { tone: "2-й", pinyin: "huí", ru: "хуй", char: "回", meaning: "возвращаться 🔙", example: "回家 huí jiā", example_ru: "вернуться домой", sound: "回家" },
                    { tone: "3-й", pinyin: "huǐ", ru: "хуй", char: "毁", meaning: "разрушать 💔", example: "毁灭 huǐ miè", example_ru: "уничтожать", sound: "毁灭" },
                    { tone: "4-й", pinyin: "huì", ru: "хуй", char: "会", meaning: "мочь 💪", example: "会议 huì yì", example_ru: "собрание", sound: "会议" }
                ]
            },
            huai: { 
                translation: "хуай",
                tones: [
                    { tone: "1-й", pinyin: "huāi", ru: "хуай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "坏" },
                    { tone: "2-й", pinyin: "huái", ru: "хуай", char: "怀", meaning: "грудь ❤️", example: "怀抱 huái bào", example_ru: "обнимать", sound: "怀抱" },
                    { tone: "3-й", pinyin: "huǎi", ru: "хуай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "坏" },
                    { tone: "4-й", pinyin: "huài", ru: "хуай", char: "坏", meaning: "плохой 👎", example: "坏人 huài rén", example_ru: "плохой человек", sound: "坏人" }
                ]
            },
            huan: { 
                translation: "хуань",
                tones: [
                    { tone: "1-й", pinyin: "huān", ru: "хуань", char: "欢", meaning: "радость 😊", example: "欢乐 huān lè", example_ru: "радость", sound: "欢乐" },
                    { tone: "2-й", pinyin: "huán", ru: "хуань", char: "环", meaning: "кольцо 💍", example: "环境 huán jìng", example_ru: "окружающая среда", sound: "环境" },
                    { tone: "3-й", pinyin: "huǎn", ru: "хуань", char: "缓", meaning: "медленный 🐢", example: "缓慢 huǎn màn", example_ru: "медленный", sound: "缓慢" },
                    { tone: "4-й", pinyin: "huàn", ru: "хуань", char: "换", meaning: "менять 🔄", example: "换钱 huàn qián", example_ru: "менять деньги", sound: "换钱" }
                ]
            },
            hun: { 
                translation: "хунь",
                tones: [
                    { tone: "1-й", pinyin: "hūn", ru: "хунь", char: "婚", meaning: "свадьба 💒", example: "结婚 jié hūn", example_ru: "жениться", sound: "结婚" },
                    { tone: "2-й", pinyin: "hún", ru: "хунь", char: "魂", meaning: "душа 👻", example: "灵魂 líng hún", example_ru: "душа", sound: "灵魂" },
                    { tone: "3-й", pinyin: "hǔn", ru: "хунь", char: "混", meaning: "смешивать 🔀", example: "混浊 hùn zhuó", example_ru: "мутный", sound: "混浊" },
                    { tone: "4-й", pinyin: "hùn", ru: "хунь", char: "混", meaning: "смешивать", example: "混合 hùn hé", example_ru: "смешивать", sound: "混合" }
                ]
            },
            huang: { 
                translation: "хуан",
                tones: [
                    { tone: "1-й", pinyin: "huāng", ru: "хуан", char: "慌", meaning: "паника 😰", example: "慌张 huāng zhāng", example_ru: "паниковать", sound: "慌张" },
                    { tone: "2-й", pinyin: "huáng", ru: "хуан", char: "黄", meaning: "жёлтый 🟡", example: "黄色 huáng sè", example_ru: "жёлтый цвет", sound: "黄色" },
                    { tone: "3-й", pinyin: "huǎng", ru: "хуан", char: "晃", meaning: "качать 🎠", example: "晃动 huǎng dòng", example_ru: "качаться", sound: "晃动" },
                    { tone: "4-й", pinyin: "huàng", ru: "хуан", char: "晃", meaning: "качать", example: "摇晃 yáo huàng", example_ru: "качаться", sound: "摇晃" }
                ]
            }
        }
    },
        // ==================== Z ====================
    z: {
        desc: "z [ts] — «цз» (как «ц» с голосом)",
        ru_sound: "цз (как в слове «цапля», но с голосом, язык у нижних зубов)",
        articulation: "👅 Кончик языка у нижних зубов. Сначала смычка, потом щель.",
        sound: "zī",
        syllables: {
            zi: { 
                translation: "цзы",
                tones: [
                    { tone: "1-й", pinyin: "zī", ru: "цзы", char: "资", meaning: "капитал 💰", example: "资本 zī běn", example_ru: "капитал", sound: "资本" },
                    { tone: "2-й", pinyin: "zí", ru: "цзы", char: "子", meaning: "сын 👦", example: "儿子 ér zi", example_ru: "сын", sound: "儿子" },
                    { tone: "3-й", pinyin: "zǐ", ru: "цзы", char: "子", meaning: "семя 🌰", example: "子女 zǐ nǚ", example_ru: "дети", sound: "子女" },
                    { tone: "4-й", pinyin: "zì", ru: "цзы", char: "字", meaning: "иероглиф 🈶", example: "汉字 Hàn zì", example_ru: "китайские иероглифы", sound: "汉字" }
                ]
            },
            za: { 
                translation: "цза",
                tones: [
                    { tone: "1-й", pinyin: "zā", ru: "цза", char: "扎", meaning: "завязывать 🎀", example: "包扎 bāo zā", example_ru: "перевязывать", sound: "包扎" },
                    { tone: "2-й", pinyin: "zá", ru: "цза", char: "杂", meaning: "смешанный 🧩", example: "杂乱 zá luàn", example_ru: "беспорядок", sound: "杂乱" },
                    { tone: "3-й", pinyin: "zǎ", ru: "цза", char: "咋", meaning: "как ❓", example: "咋办 zǎ bàn", example_ru: "как быть", sound: "咋办" },
                    { tone: "4-й", pinyin: "zà", ru: "цза", char: "砸", meaning: "бить 🔨", example: "砸烂 zá làn", example_ru: "разбить", sound: "砸烂" }
                ]
            },
            ze: { 
                translation: "цзэ",
                tones: [
                    { tone: "1-й", pinyin: "zē", ru: "цзэ", char: "则", meaning: "правило 📜", example: "原则 yuán zé", example_ru: "принцип", sound: "原则" },
                    { tone: "2-й", pinyin: "zé", ru: "цзэ", char: "责", meaning: "ответственность ⚖️", example: "责任 zé rèn", example_ru: "ответственность", sound: "责任" },
                    { tone: "3-й", pinyin: "zě", ru: "цзэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "则" },
                    { tone: "4-й", pinyin: "zè", ru: "цзэ", char: "仄", meaning: "узкий 📏", example: "仄声 zè shēng", example_ru: "узкий звук", sound: "仄声" }
                ]
            },
            cai: { 
                translation: "цай",
                tones: [
                    { tone: "1-й", pinyin: "cāi", ru: "цай", char: "猜", meaning: "угадывать 🎯", example: "猜谜 cāi mí", example_ru: "отгадывать загадку", sound: "猜谜" },
                    { tone: "2-й", pinyin: "cái", ru: "цай", char: "才", meaning: "талант 🌟", example: "才能 cái néng", example_ru: "способность", sound: "才能" },
                    { tone: "3-й", pinyin: "cǎi", ru: "цай", char: "采", meaning: "собирать 🫐", example: "采访 cǎi fǎng", example_ru: "интервью", sound: "采访" },
                    { tone: "4-й", pinyin: "cài", ru: "цай", char: "菜", meaning: "овощ 🥬", example: "蔬菜 shū cài", example_ru: "овощи", sound: "蔬菜" }
                ]
            },
            cao: { 
                translation: "цао",
                tones: [
                    { tone: "1-й", pinyin: "cāo", ru: "цао", char: "操", meaning: "делать 🏋️", example: "操场 cāo chǎng", example_ru: "спортплощадка", sound: "操场" },
                    { tone: "2-й", pinyin: "cáo", ru: "цао", char: "曹", meaning: "фамилия 📛", example: "曹操 Cáo Cāo", example_ru: "имя", sound: "曹操" },
                    { tone: "3-й", pinyin: "cǎo", ru: "цао", char: "草", meaning: "трава 🌿", example: "草地 cǎo dì", example_ru: "лужайка", sound: "草地" },
                    { tone: "4-й", pinyin: "cào", ru: "цао", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "草" }
                ]
            },
            can: { 
                translation: "цань",
                tones: [
                    { tone: "1-й", pinyin: "cān", ru: "цань", char: "参", meaning: "участвовать 🤝", example: "参加 cān jiā", example_ru: "участвовать", sound: "参加" },
                    { tone: "2-й", pinyin: "cán", ru: "цань", char: "残", meaning: "жестокий 😈", example: "残忍 cán rěn", example_ru: "жестокий", sound: "残忍" },
                    { tone: "3-й", pinyin: "cǎn", ru: "цань", char: "惨", meaning: "ужасный 😱", example: "悲惨 bēi cǎn", example_ru: "трагический", sound: "悲惨" },
                    { tone: "4-й", pinyin: "càn", ru: "цань", char: "灿", meaning: "яркий ✨", example: "灿烂 càn làn", example_ru: "яркий", sound: "灿烂" }
                ]
            },
            cang: { 
                translation: "цан",
                tones: [
                    { tone: "1-й", pinyin: "cāng", ru: "цан", char: "仓", meaning: "склад 🏚️", example: "仓库 cāng kù", example_ru: "склад", sound: "仓库" },
                    { tone: "2-й", pinyin: "cáng", ru: "цан", char: "藏", meaning: "прятать 🙈", example: "藏书 cáng shū", example_ru: "хранить книги", sound: "藏书" },
                    { tone: "3-й", pinyin: "cǎng", ru: "цан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "藏" },
                    { tone: "4-й", pinyin: "càng", ru: "цан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "藏" }
                ]
            },
            cong: { 
                translation: "цун",
                tones: [
                    { tone: "1-й", pinyin: "cōng", ru: "цун", char: "聪", meaning: "умный 🧠", example: "聪明 cōng míng", example_ru: "умный", sound: "聪明" },
                    { tone: "2-й", pinyin: "cóng", ru: "цун", char: "从", meaning: "из 🔁", example: "从来 cóng lái", example_ru: "никогда", sound: "从来" },
                    { tone: "3-й", pinyin: "cǒng", ru: "цун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "从" },
                    { tone: "4-й", pinyin: "còng", ru: "цун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "从" }
                ]
            },
            cou: { 
                translation: "цоу",
                tones: [
                    { tone: "1-й", pinyin: "cōu", ru: "цоу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "凑" },
                    { tone: "2-й", pinyin: "cóu", ru: "цоу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "凑" },
                    { tone: "3-й", pinyin: "cǒu", ru: "цоу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "凑" },
                    { tone: "4-й", pinyin: "còu", ru: "цоу", char: "凑", meaning: "собирать 🤲", example: "凑合 còu he", example_ru: "собирать", sound: "凑合" }
                ]
            },
            cu: { 
                translation: "цу",
                tones: [
                    { tone: "1-й", pinyin: "cū", ru: "цу", char: "粗", meaning: "грубый 🪵", example: "粗心 cū xīn", example_ru: "невнимательный", sound: "粗心" },
                    { tone: "2-й", pinyin: "cú", ru: "цу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "粗" },
                    { tone: "3-й", pinyin: "cǔ", ru: "цу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "粗" },
                    { tone: "4-й", pinyin: "cù", ru: "цу", char: "促", meaning: "торопить ⏩", example: "促进 cù jìn", example_ru: "стимулировать", sound: "促进" }
                ]
            },
            cuo: { 
                translation: "цуо",
                tones: [
                    { tone: "1-й", pinyin: "cuō", ru: "цуо", char: "搓", meaning: "тереть 👐", example: "搓手 cuō shǒu", example_ru: "потирать руки", sound: "搓手" },
                    { tone: "2-й", pinyin: "cuó", ru: "цуо", char: "嵯", meaning: "горный ⛰️", example: "嵯峨 cuó é", example_ru: "высокий", sound: "嵯峨" },
                    { tone: "3-й", pinyin: "cuǒ", ru: "цуо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "错" },
                    { tone: "4-й", pinyin: "cuò", ru: "цуо", char: "错", meaning: "ошибка ❌", example: "错误 cuò wù", example_ru: "ошибка", sound: "错误" }
                ]
            },
            cui: { 
                translation: "цуй",
                tones: [
                    { tone: "1-й", pinyin: "cuī", ru: "цуй", char: "催", meaning: "торопить ⏰", example: "催促 cuī cù", example_ru: "торопить", sound: "催促" },
                    { tone: "2-й", pinyin: "cuí", ru: "цуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "翠" },
                    { tone: "3-й", pinyin: "cuǐ", ru: "цуй", char: "璀", meaning: "яркий 🌟", example: "璀璨 cuǐ càn", example_ru: "яркий", sound: "璀璨" },
                    { tone: "4-й", pinyin: "cuì", ru: "цуй", char: "翠", meaning: "зелёный 🟢", example: "翠绿 cuì lǜ", example_ru: "изумрудный", sound: "翠绿" }
                ]
            },
            cuan: { 
                translation: "цуань",
                tones: [
                    { tone: "1-й", pinyin: "cuān", ru: "цуань", char: "蹿", meaning: "прыгать 🦘", example: "蹿升 cuān shēng", example_ru: "взлететь", sound: "蹿升" },
                    { tone: "2-й", pinyin: "cuán", ru: "цуань", char: "攒", meaning: "собирать 🧩", example: "攒动 cuán dòng", example_ru: "толпиться", sound: "攒动" },
                    { tone: "3-й", pinyin: "cuǎn", ru: "цуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "窜" },
                    { tone: "4-й", pinyin: "cuàn", ru: "цуань", char: "窜", meaning: "убегать 🏃", example: "流窜 liú cuàn", example_ru: "скитаться", sound: "流窜" }
                ]
            },
            cun: { 
                translation: "цунь",
                tones: [
                    { tone: "1-й", pinyin: "cūn", ru: "цунь", char: "村", meaning: "деревня 🏡", example: "村子 cūn zi", example_ru: "деревня", sound: "村子" },
                    { tone: "2-й", pinyin: "cún", ru: "цунь", char: "存", meaning: "хранить 💾", example: "存在 cún zài", example_ru: "существовать", sound: "存在" },
                    { tone: "3-й", pinyin: "cǔn", ru: "цунь", char: "忖", meaning: "размышлять 🤔", example: "忖度 cǔn duó", example_ru: "обдумывать", sound: "忖度" },
                    { tone: "4-й", pinyin: "cùn", ru: "цунь", char: "寸", meaning: "вершок 📏", example: "尺寸 chǐ cùn", example_ru: "размер", sound: "尺寸" }
                ]
            }
        }
    },

    // ==================== C ====================
    c: {
        desc: "c [tsʰ] — «ц» с сильным выдохом",
        ru_sound: "ц (с сильным выдохом, как при кашле, язык у нижних зубов)",
        articulation: "👅 Та же позиция, что у z, но с СИЛЬНЫМ ПРИДЫХАНИЕМ.",
        sound: "cī",
        syllables: {
            ci: { 
                translation: "цы",
                tones: [
                    { tone: "1-й", pinyin: "cī", ru: "цы", char: "呲", meaning: "шипеть 🐍", example: "呲牙 cī yá", example_ru: "скалить зубы", sound: "呲牙" },
                    { tone: "2-й", pinyin: "cí", ru: "цы", char: "词", meaning: "слово 📖", example: "词语 cí yǔ", example_ru: "слова", sound: "词语" },
                    { tone: "3-й", pinyin: "cǐ", ru: "цы", char: "此", meaning: "этот 👆", example: "此处 cǐ chù", example_ru: "здесь", sound: "此处" },
                    { tone: "4-й", pinyin: "cì", ru: "цы", char: "次", meaning: "раз 🔢", example: "一次 yī cì", example_ru: "один раз", sound: "一次" }
                ]
            },
            ca: { 
                translation: "ца",
                tones: [
                    { tone: "1-й", pinyin: "cā", ru: "ца", char: "擦", meaning: "тереть 🧽", example: "擦掉 cā diào", example_ru: "стереть", sound: "擦掉" },
                    { tone: "2-й", pinyin: "cá", ru: "ца", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "擦" },
                    { tone: "3-й", pinyin: "cǎ", ru: "ца", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "擦" },
                    { tone: "4-й", pinyin: "cà", ru: "ца", char: "礤", meaning: "тёрка 🧀", example: "礤床 cǎ chuáng", example_ru: "тёрка", sound: "礤床" }
                ]
            },
ce_ce: { 
    translation: "цэ",
    tones: [
        { tone: "1-й", pinyin: "cē", ru: "цэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "测" },
        { tone: "2-й", pinyin: "cé", ru: "цэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "测" },
        { tone: "3-й", pinyin: "cě", ru: "цэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "测" },
        { tone: "4-й", pinyin: "cè", ru: "цэ", char: "测", meaning: "измерять 📏", example: "测试 cè shì", example_ru: "тест", sound: "测试" }
    ]
},
ce_ce2: { 
    translation: "цэ",
    tones: [
        { tone: "1-й", pinyin: "cē", ru: "цэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "册" },
        { tone: "2-й", pinyin: "cé", ru: "цэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "册" },
        { tone: "3-й", pinyin: "cě", ru: "цэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "册" },
        { tone: "4-й", pinyin: "cè", ru: "цэ", char: "册", meaning: "том, экземпляр 📘", example: "手册 shǒu cè", example_ru: "руководство", sound: "手册" }
    ]
},
            zai: { 
                translation: "цзай",
                tones: [
                    { tone: "1-й", pinyin: "zāi", ru: "цзай", char: "灾", meaning: "бедствие 🌊", example: "灾难 zāi nàn", example_ru: "катастрофа", sound: "灾难" },
                    { tone: "2-й", pinyin: "zái", ru: "цзай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "在" },
                    { tone: "3-й", pinyin: "zǎi", ru: "цзай", char: "仔", meaning: "парень 👦", example: "牛仔 niú zǎi", example_ru: "ковбой", sound: "牛仔" },
                    { tone: "4-й", pinyin: "zài", ru: "цзай", char: "在", meaning: "в 📍", example: "在家 zài jiā", example_ru: "дома", sound: "在家" }
                ]
            },
            zao: { 
                translation: "цзао",
                tones: [
                    { tone: "1-й", pinyin: "zāo", ru: "цзао", char: "遭", meaning: "испытывать 😓", example: "遭遇 zāo yù", example_ru: "сталкиваться", sound: "遭遇" },
                    { tone: "2-й", pinyin: "záo", ru: "цзао", char: "凿", meaning: "долбить ⛏️", example: "凿子 záo zi", example_ru: "долото", sound: "凿子" },
                    { tone: "3-й", pinyin: "zǎo", ru: "цзао", char: "早", meaning: "рано 🌅", example: "早上 zǎo shàng", example_ru: "утро", sound: "早上" },
                    { tone: "4-й", pinyin: "zào", ru: "цзао", char: "造", meaning: "строить 🏗️", example: "造成 zào chéng", example_ru: "вызывать", sound: "造成" }
                ]
            },
            zou: { 
                translation: "цзоу",
                tones: [
                    { tone: "1-й", pinyin: "zōu", ru: "цзоу", char: "邹", meaning: "фамилия 📛", example: "邹忌 Zōu Jì", example_ru: "имя", sound: "邹忌" },
                    { tone: "2-й", pinyin: "zóu", ru: "цзоу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "走" },
                    { tone: "3-й", pinyin: "zǒu", ru: "цзоу", char: "走", meaning: "идти 🚶", example: "走路 zǒu lù", example_ru: "идти", sound: "走路" },
                    { tone: "4-й", pinyin: "zòu", ru: "цзоу", char: "奏", meaning: "играть 🎵", example: "演奏 yǎn zòu", example_ru: "исполнять", sound: "演奏" }
                ]
            },
            zan: { 
                translation: "цзань",
                tones: [
                    { tone: "1-й", pinyin: "zān", ru: "цзань", char: "簪", meaning: "шпилька 📌", example: "簪子 zān zi", example_ru: "шпилька", sound: "簪子" },
                    { tone: "2-й", pinyin: "zán", ru: "цзань", char: "咱", meaning: "мы 👥", example: "咱们 zán men", example_ru: "мы", sound: "咱们" },
                    { tone: "3-й", pinyin: "zǎn", ru: "цзань", char: "攒", meaning: "копить 🐷", example: "攒钱 zǎn qián", example_ru: "копить деньги", sound: "攒钱" },
                    { tone: "4-й", pinyin: "zàn", ru: "цзань", char: "赞", meaning: "хвалить 👍", example: "赞美 zàn měi", example_ru: "восхвалять", sound: "赞美" }
                ]
            },
            zang: { 
                translation: "цзан",
                tones: [
                    { tone: "1-й", pinyin: "zāng", ru: "цзан", char: "脏", meaning: "грязный 🦠", example: "脏话 zāng huà", example_ru: "грязные слова", sound: "脏话" },
                    { tone: "2-й", pinyin: "záng", ru: "цзан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "脏" },
                    { tone: "3-й", pinyin: "zǎng", ru: "цзан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "脏" },
                    { tone: "4-й", pinyin: "zàng", ru: "цзан", char: "藏", meaning: "тибетский 🏔️", example: "西藏 Xī Zàng", example_ru: "Тибет", sound: "西藏" }
                ]
            },
            zeng: { 
                translation: "цзэн",
                tones: [
                    { tone: "1-й", pinyin: "zēng", ru: "цзэн", char: "曾", meaning: "фамилия 📛", example: "曾子 Zēng Zǐ", example_ru: "философ", sound: "曾子" },
                    { tone: "2-й", pinyin: "zéng", ru: "цзэн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "曾" },
                    { tone: "3-й", pinyin: "zěng", ru: "цзэн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "曾" },
                    { tone: "4-й", pinyin: "zèng", ru: "цзэн", char: "赠", meaning: "дарить 🎁", example: "赠送 zèng sòng", example_ru: "дарить", sound: "赠送" }
                ]
            },
            zong: { 
                translation: "цзун",
                tones: [
                    { tone: "1-й", pinyin: "zōng", ru: "цзун", char: "宗", meaning: "класс 🏛️", example: "宗教 zōng jiào", example_ru: "религия", sound: "宗教" },
                    { tone: "2-й", pinyin: "zóng", ru: "цзун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "总" },
                    { tone: "3-й", pinyin: "zǒng", ru: "цзун", char: "总", meaning: "всегда 🔁", example: "总是 zǒng shì", example_ru: "всегда", sound: "总是" },
                    { tone: "4-й", pinyin: "zòng", ru: "цзун", char: "纵", meaning: "даже если 🤷", example: "纵容 zòng róng", example_ru: "потворствовать", sound: "纵容" }
                ]
            },
            zu: { 
                translation: "цзу",
                tones: [
                    { tone: "1-й", pinyin: "zū", ru: "цзу", char: "租", meaning: "арендовать 🏠", example: "租房 zū fáng", example_ru: "арендовать квартиру", sound: "租房" },
                    { tone: "2-й", pinyin: "zú", ru: "цзу", char: "族", meaning: "нация 👥", example: "民族 mín zú", example_ru: "нация", sound: "民族" },
                    { tone: "3-й", pinyin: "zǔ", ru: "цзу", char: "组", meaning: "группа 👥", example: "组织 zǔ zhī", example_ru: "организация", sound: "组织" },
                    { tone: "4-й", pinyin: "zù", ru: "цзу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "组" }
                ]
            },
            zuo: { 
                translation: "цзо",
                tones: [
                    { tone: "1-й", pinyin: "zuō", ru: "цзо", char: "作", meaning: "делать 🛠️", example: "作坊 zuō fang", example_ru: "мастерская", sound: "作坊" },
                    { tone: "2-й", pinyin: "zuó", ru: "цзо", char: "昨", meaning: "вчера 📅", example: "昨天 zuó tiān", example_ru: "вчера", sound: "昨天" },
                    { tone: "3-й", pinyin: "zuǒ", ru: "цзо", char: "左", meaning: "левый 👈", example: "左边 zuǒ biān", example_ru: "слева", sound: "左边" },
                    { tone: "4-й", pinyin: "zuò", ru: "цзо", char: "做", meaning: "делать ✅", example: "做事 zuò shì", example_ru: "делать дело", sound: "做事" }
                ]
            },
            zui: { 
                translation: "цзуй",
                tones: [
                    { tone: "1-й", pinyin: "zuī", ru: "цзуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "最" },
                    { tone: "2-й", pinyin: "zuí", ru: "цзуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "最" },
                    { tone: "3-й", pinyin: "zuǐ", ru: "цзуй", char: "嘴", meaning: "рот 👄", example: "嘴巴 zuǐ ba", example_ru: "рот", sound: "嘴巴" },
                    { tone: "4-й", pinyin: "zuì", ru: "цзуй", char: "最", meaning: "самый 🏆", example: "最好 zuì hǎo", example_ru: "лучший", sound: "最好" }
                ]
            },
            zuan: { 
                translation: "цзуань",
                tones: [
                    { tone: "1-й", pinyin: "zuān", ru: "цзуань", char: "钻", meaning: "сверлить 🔧", example: "钻研 zuān yán", example_ru: "глубоко изучать", sound: "钻研" },
                    { tone: "2-й", pinyin: "zuán", ru: "цзуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "钻" },
                    { tone: "3-й", pinyin: "zuǎn", ru: "цзуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "钻" },
                    { tone: "4-й", pinyin: "zuàn", ru: "цзуань", char: "钻", meaning: "алмаз 💎", example: "钻石 zuàn shí", example_ru: "алмаз", sound: "钻石" }
                ]
            },
            zun: { 
                translation: "цзунь",
                tones: [
                    { tone: "1-й", pinyin: "zūn", ru: "цзунь", char: "尊", meaning: "уважать 🙇", example: "尊敬 zūn jìng", example_ru: "уважать", sound: "尊敬" },
                    { tone: "2-й", pinyin: "zún", ru: "цзунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "尊" },
                    { tone: "3-й", pinyin: "zǔn", ru: "цзунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "尊" },
                    { tone: "4-й", pinyin: "zùn", ru: "цзунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "尊" }
                ]
            }
        }
    },
    // ==================== J ====================
    j: {
        desc: "j [tɕ] — как «цзь» (мягкое, язык к нёбу)",
        ru_sound: "цзь",
        articulation: "👅 Средняя часть языка к твёрдому нёбу",
        sound: "jī",
        syllables: {
            ji: {
                translation: "цзи",
                tones: [
                    { tone: "1-й", pinyin: "jī", ru: "цзи", char: "鸡", meaning: "курица 🐔", example: "鸡肉 jī ròu", example_ru: "куриное мясо", sound: "鸡肉" },
                    { tone: "2-й", pinyin: "jí", ru: "цзи", char: "级", meaning: "уровень 📊", example: "年级 nián jí", example_ru: "класс", sound: "年级" },
                    { tone: "3-й", pinyin: "jǐ", ru: "цзи", char: "几", meaning: "сколько ❓", example: "几个 jǐ gè", example_ru: "сколько", sound: "几个" },
                    { tone: "4-й", pinyin: "jì", ru: "цзи", char: "记", meaning: "запоминать 🧠", example: "记住 jì zhù", example_ru: "запомнить", sound: "记住" }
                ]
            },
            jia: {
                translation: "цзя",
                tones: [
                    { tone: "1-й", pinyin: "jiā", ru: "цзя", char: "家", meaning: "дом 🏠", example: "家庭 jiā tíng", example_ru: "семья", sound: "家庭" },
                    { tone: "2-й", pinyin: "jiá", ru: "цзя", char: "夹", meaning: "зажимать 🔧", example: "夹住 jiá zhù", example_ru: "зажать", sound: "夹住" },
                    { tone: "3-й", pinyin: "jiǎ", ru: "цзя", char: "假", meaning: "фальшивый 🎭", example: "假装 jiǎ zhuāng", example_ru: "притворяться", sound: "假装" },
                    { tone: "4-й", pinyin: "jià", ru: "цзя", char: "价", meaning: "цена 💰", example: "价格 jià gé", example_ru: "цена", sound: "价格" }
                ]
            },
            jian: {
                translation: "цзянь",
                tones: [
                    { tone: "1-й", pinyin: "jiān", ru: "цзянь", char: "间", meaning: "между 🔄", example: "时间 shí jiān", example_ru: "время", sound: "时间" },
                    { tone: "3-й", pinyin: "jiǎn", ru: "цзянь", char: "简", meaning: "простой 📝", example: "简单 jiǎn dān", example_ru: "простой", sound: "简单" },
                    { tone: "4-й", pinyin: "jiàn", ru: "цзянь", char: "见", meaning: "видеть 👀", example: "看见 kàn jiàn", example_ru: "видеть", sound: "看见" }
                ]
            },
            jiang: {
                translation: "цзян",
                tones: [
                    { tone: "1-й", pinyin: "jiāng", ru: "цзян", char: "江", meaning: "река 🌊", example: "长江 cháng jiāng", example_ru: "река Янцзы", sound: "长江" },
                    { tone: "3-й", pinyin: "jiǎng", ru: "цзян", char: "讲", meaning: "говорить 🗣️", example: "讲话 jiǎng huà", example_ru: "говорить", sound: "讲话" },
                    { tone: "4-й", pinyin: "jiàng", ru: "цзян", char: "将", meaning: "генерал 🎖️", example: "将军 jiāng jūn", example_ru: "генерал", sound: "将军" }
                ]
            },
            jiao: {
                translation: "цзяо",
                tones: [
                    { tone: "1-й", pinyin: "jiāo", ru: "цзяо", char: "教", meaning: "учить 📚", example: "教学 jiào xué", example_ru: "преподавание", sound: "教学" },
                    { tone: "2-й", pinyin: "jiáo", ru: "цзяо", char: "嚼", meaning: "жевать 🍬", example: "咀嚼 jǔ jué", example_ru: "жевать", sound: "咀嚼" },
                    { tone: "3-й", pinyin: "jiǎo", ru: "цзяо", char: "脚", meaning: "нога 🦶", example: "脚步 jiǎo bù", example_ru: "шаг", sound: "脚步" },
                    { tone: "4-й", pinyin: "jiào", ru: "цзяо", char: "叫", meaning: "звать 📢", example: "呼叫 hū jiào", example_ru: "вызывать", sound: "呼叫" }
                ]
            },
            jie: {
                translation: "цзе",
                tones: [
                    { tone: "1-й", pinyin: "jiē", ru: "цзе", char: "街", meaning: "улица 🏙️", example: "街道 jiē dào", example_ru: "улица", sound: "街道" },
                    { tone: "2-й", pinyin: "jié", ru: "цзе", char: "节", meaning: "праздник 🎉", example: "节日 jié rì", example_ru: "праздник", sound: "节日" },
                    { tone: "3-й", pinyin: "jiě", ru: "цзе", char: "姐", meaning: "старшая сестра 👩", example: "姐姐 jiě jie", example_ru: "сестра", sound: "姐姐" },
                    { tone: "4-й", pinyin: "jiè", ru: "цзе", char: "借", meaning: "одалживать 🤝", example: "借用 jiè yòng", example_ru: "одолжить", sound: "借用" }
                ]
            },
            jin: {
                translation: "цзинь",
                tones: [
                    { tone: "1-й", pinyin: "jīn", ru: "цзинь", char: "今", meaning: "сегодня 📅", example: "今天 jīn tiān", example_ru: "сегодня", sound: "今天" },
                    { tone: "3-й", pinyin: "jǐn", ru: "цзинь", char: "紧", meaning: "плотный 🔒", example: "紧张 jǐn zhāng", example_ru: "напряжённый", sound: "紧张" },
                    { tone: "4-й", pinyin: "jìn", ru: "цзинь", char: "进", meaning: "входить 🚪", example: "进入 jìn rù", example_ru: "входить", sound: "进入" }
                ]
            },
            jing: {
                translation: "цзин",
                tones: [
                    { tone: "1-й", pinyin: "jīng", ru: "цзин", char: "经", meaning: "проходить через 🔄", example: "经过 jīng guò", example_ru: "проходить", sound: "经过" },
                    { tone: "3-й", pinyin: "jǐng", ru: "цзин", char: "井", meaning: "колодец 🕳️", example: "水井 shuǐ jǐng", example_ru: "колодец", sound: "水井" },
                    { tone: "4-й", pinyin: "jìng", ru: "цзин", char: "静", meaning: "тихий 🤫", example: "安静 ān jìng", example_ru: "тихий", sound: "安静" }
                ]
            },
            jiong: {
                translation: "цзюн",
                tones: [
                    { tone: "3-й", pinyin: "jiǒng", ru: "цзюн", char: "窘", meaning: "неловкий 😅", example: "窘迫 jiǒng pò", example_ru: "смущённый", sound: "窘迫" }
                ]
            },
            jiu: {
                translation: "цзю",
                tones: [
                    { tone: "1-й", pinyin: "jiū", ru: "цзю", char: "九", meaning: "девять 9️⃣", example: "九个 jiǔ gè", example_ru: "девять", sound: "九个" },
                    { tone: "2-й", pinyin: "jiú", ru: "цзю", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "jiǔ", ru: "цзю", char: "酒", meaning: "вино 🍷", example: "喝酒 hē jiǔ", example_ru: "пить вино", sound: "喝酒" },
                    { tone: "4-й", pinyin: "jiù", ru: "цзю", char: "就", meaning: "тогда ⏰", example: "就是 jiù shì", example_ru: "именно", sound: "就是" }
                ]
            },
            ju: {
                translation: "цзюй",
                tones: [
                    { tone: "1-й", pinyin: "jū", ru: "цзюй", char: "居", meaning: "жить 🏡", example: "居住 jū zhù", example_ru: "проживать", sound: "居住" },
                    { tone: "2-й", pinyin: "jú", ru: "цзюй", char: "局", meaning: "бюро 🏢", example: "局长 jú zhǎng", example_ru: "начальник", sound: "局长" },
                    { tone: "3-й", pinyin: "jǔ", ru: "цзюй", char: "举", meaning: "поднимать 🙌", example: "举手 jǔ shǒu", example_ru: "поднять руку", sound: "举手" },
                    { tone: "4-й", pinyin: "jù", ru: "цзюй", char: "句", meaning: "предложение 💬", example: "句子 jù zi", example_ru: "предложение", sound: "句子" }
                ]
            },
            juan: {
                translation: "цзюань",
                tones: [
                    { tone: "1-й", pinyin: "juān", ru: "цзюань", char: "捐", meaning: "пожертвовать 🎁", example: "捐款 juān kuǎn", example_ru: "пожертвование", sound: "捐款" },
                    { tone: "3-й", pinyin: "juǎn", ru: "цзюань", char: "卷", meaning: "свиток 📜", example: "卷子 juǎn zi", example_ru: "свиток", sound: "卷子" },
                    { tone: "4-й", pinyin: "juàn", ru: "цзюань", char: "卷", meaning: "экзамен 📝", example: "试卷 shì juàn", example_ru: "экзаменационный лист", sound: "试卷" }
                ]
            },
            jue: {
                translation: "цзюэ",
                tones: [
                    { tone: "1-й", pinyin: "juē", ru: "цзюэ", char: "撅", meaning: "выпячивать 😗", example: "撅嘴 juē zuǐ", example_ru: "надуть губы", sound: "撅嘴" },
                    { tone: "2-й", pinyin: "jué", ru: "цзюэ", char: "决", meaning: "решать ✅", example: "决定 jué dìng", example_ru: "решать", sound: "决定" },
                    { tone: "4-й", pinyin: "juè", ru: "цзюэ", char: "倔", meaning: "упрямый 🦾", example: "倔强 juè jiàng", example_ru: "упрямый", sound: "倔强" }
                ]
            },
            jun: {
                translation: "цзюнь",
                tones: [
                    { tone: "1-й", pinyin: "jūn", ru: "цзюнь", char: "军", meaning: "армия 🪖", example: "军队 jūn duì", example_ru: "армия", sound: "军队" },
                    { tone: "4-й", pinyin: "jùn", ru: "цзюнь", char: "俊", meaning: "красивый ✨", example: "俊美 jùn měi", example_ru: "красивый", sound: "俊美" }
                ]
            }
        }
    },

    // ==================== Q ====================
    q: {
        desc: "q [tɕʰ] — «ць» с сильным выдохом (почти как «ч», но мягко)",
        ru_sound: "ць (с выдохом)",
        articulation: "💨 Язык как у j, но с СИЛЬНЫМ ПРИДЫХАНИЕМ",
        sound: "qī",
        syllables: {
            qi: {
                translation: "ци",
                tones: [
                    { tone: "1-й", pinyin: "qī", ru: "ци", char: "七", meaning: "семь 7️⃣", example: "七个 qī gè", example_ru: "семь", sound: "七个" },
                    { tone: "2-й", pinyin: "qí", ru: "ци", char: "奇", meaning: "странный 🤔", example: "奇怪 qí guài", example_ru: "странный", sound: "奇怪" },
                    { tone: "3-й", pinyin: "qǐ", ru: "ци", char: "起", meaning: "вставать 🚶", example: "起来 qǐ lái", example_ru: "вставать", sound: "起来" },
                    { tone: "4-й", pinyin: "qì", ru: "ци", char: "气", meaning: "воздух 💨", example: "空气 kōng qì", example_ru: "воздух", sound: "空气" }
                ]
            },
            qia: {
                translation: "ця",
                tones: [
                    { tone: "1-й", pinyin: "qiā", ru: "ця", char: "掐", meaning: "щипать ✋", example: "掐断 qiā duàn", example_ru: "отщипнуть", sound: "掐断" },
                    { tone: "4-й", pinyin: "qià", ru: "ця", char: "恰", meaning: "как раз 🎯", example: "恰好 qià hǎo", example_ru: "как раз", sound: "恰好" }
                ]
            },
            qian: {
                translation: "цянь",
                tones: [
                    { tone: "1-й", pinyin: "qiān", ru: "цянь", char: "千", meaning: "тысяча 1️⃣0️⃣0️⃣0️⃣", example: "一千 yī qiān", example_ru: "тысяча", sound: "一千" },
                    { tone: "2-й", pinyin: "qián", ru: "цянь", char: "前", meaning: "перед 👆", example: "前面 qián miàn", example_ru: "впереди", sound: "前面" },
                    { tone: "3-й", pinyin: "qiǎn", ru: "цянь", char: "浅", meaning: "мелкий 🏖️", example: "浅水 qiǎn shuǐ", example_ru: "мелкая вода", sound: "浅水" },
                    { tone: "4-й", pinyin: "qiàn", ru: "цянь", char: "欠", meaning: "быть должным 💸", example: "欠钱 qiàn qián", example_ru: "должен деньги", sound: "欠钱" }
                ]
            },
            qiang: {
                translation: "цян",
                tones: [
                    { tone: "1-й", pinyin: "qiāng", ru: "цян", char: "枪", meaning: "ружьё 🔫", example: "手枪 shǒu qiāng", example_ru: "пистолет", sound: "手枪" },
                    { tone: "2-й", pinyin: "qiáng", ru: "цян", char: "强", meaning: "сильный 💪", example: "强大 qiáng dà", example_ru: "сильный", sound: "强大" },
                    { tone: "3-й", pinyin: "qiǎng", ru: "цян", char: "抢", meaning: "грабить 🦹", example: "抢劫 qiǎng jié", example_ru: "грабёж", sound: "抢劫" },
                    { tone: "4-й", pinyin: "qiàng", ru: "цян", char: "呛", meaning: "подавиться 😤", example: "呛到 qiàng dào", example_ru: "подавиться", sound: "呛到" }
                ]
            },
            qiao: {
                translation: "цяо",
                tones: [
                    { tone: "1-й", pinyin: "qiāo", ru: "цяо", char: "敲", meaning: "стучать 🔨", example: "敲门 qiāo mén", example_ru: "стучать в дверь", sound: "敲门" },
                    { tone: "2-й", pinyin: "qiáo", ru: "цяо", char: "桥", meaning: "мост 🌉", example: "桥梁 qiáo liáng", example_ru: "мост", sound: "桥梁" },
                    { tone: "3-й", pinyin: "qiǎo", ru: "цяо", char: "巧", meaning: "умелый 🛠️", example: "巧妙 qiǎo miào", example_ru: "искусный", sound: "巧妙" },
                    { tone: "4-й", pinyin: "qiào", ru: "цяо", char: "窍", meaning: "отверстие 🕳️", example: "诀窍 jué qiào", example_ru: "секрет", sound: "诀窍" }
                ]
            },
            qie: {
                translation: "це",
                tones: [
                    { tone: "1-й", pinyin: "qiē", ru: "це", char: "切", meaning: "резать 🔪", example: "切菜 qiē cài", example_ru: "резать овощи", sound: "切菜" },
                    { tone: "3-й", pinyin: "qiě", ru: "це", char: "且", meaning: "к тому же ➕", example: "而且 ér qiě", example_ru: "кроме того", sound: "而且" },
                    { tone: "4-й", pinyin: "qiè", ru: "це", char: "切", meaning: "соответствовать ✅", example: "切实 qiè shí", example_ru: "реальный", sound: "切实" }
                ]
            },
            qin: {
                translation: "цинь",
                tones: [
                    { tone: "1-й", pinyin: "qīn", ru: "цинь", char: "亲", meaning: "родственник 👨‍👩‍👧", example: "亲人 qīn rén", example_ru: "родные", sound: "亲人" },
                    { tone: "2-й", pinyin: "qín", ru: "цинь", char: "琴", meaning: "музыкальный инструмент 🎹", example: "钢琴 gāng qín", example_ru: "пианино", sound: "钢琴" },
                    { tone: "3-й", pinyin: "qǐn", ru: "цинь", char: "寝", meaning: "спальня 🛏️", example: "寝室 qǐn shì", example_ru: "спальня", sound: "寝室" },
                    { tone: "4-й", pinyin: "qìn", ru: "цинь", char: "沁", meaning: "проникать 💧", example: "沁入 qìn rù", example_ru: "проникать", sound: "沁入" }
                ]
            },
            qing: {
                translation: "цин",
                tones: [
                    { tone: "1-й", pinyin: "qīng", ru: "цин", char: "青", meaning: "зелёный/синий 💚💙", example: "青色 qīng sè", example_ru: "сине-зелёный", sound: "青色" },
                    { tone: "2-й", pinyin: "qíng", ru: "цин", char: "情", meaning: "чувство ❤️", example: "感情 gǎn qíng", example_ru: "чувство", sound: "感情" },
                    { tone: "3-й", pinyin: "qǐng", ru: "цин", char: "请", meaning: "пожалуйста 🙏", example: "请进 qǐng jìn", example_ru: "входите", sound: "请进" },
                    { tone: "4-й", pinyin: "qìng", ru: "цин", char: "庆", meaning: "праздновать 🎉", example: "庆祝 qìng zhù", example_ru: "праздновать", sound: "庆祝" }
                ]
            },
            qiong: {
                translation: "цюн",
                tones: [
                    { tone: "2-й", pinyin: "qióng", ru: "цюн", char: "穷", meaning: "бедный 🥺", example: "贫穷 pín qióng", example_ru: "бедность", sound: "贫穷" }
                ]
            },
            qiu: {
                translation: "цю",
                tones: [
                    { tone: "1-й", pinyin: "qiū", ru: "цю", char: "秋", meaning: "осень 🍂", example: "秋天 qiū tiān", example_ru: "осень", sound: "秋天" },
                    { tone: "2-й", pinyin: "qiú", ru: "цю", char: "球", meaning: "мяч ⚽", example: "足球 zú qiú", example_ru: "футбол", sound: "足球" }
                ]
            },
            qu: {
                translation: "цюй",
                tones: [
                    { tone: "1-й", pinyin: "qū", ru: "цюй", char: "区", meaning: "район 🗺️", example: "地区 dì qū", example_ru: "регион", sound: "地区" },
                    { tone: "2-й", pinyin: "qú", ru: "цюй", char: "渠", meaning: "канал 🚰", example: "渠道 qú dào", example_ru: "канал", sound: "渠道" },
                    { tone: "3-й", pinyin: "qǔ", ru: "цюй", char: "取", meaning: "брать ✋", example: "取钱 qǔ qián", example_ru: "снять деньги", sound: "取钱" },
                    { tone: "4-й", pinyin: "qù", ru: "цюй", char: "去", meaning: "идти 🚶", example: "去学校 qù xué xiào", example_ru: "идти в школу", sound: "去学校" }
                ]
            },
            quan: {
                translation: "цюань",
                tones: [
                    { tone: "1-й", pinyin: "quān", ru: "цюань", char: "圈", meaning: "круг ⭕", example: "圆圈 yuán quān", example_ru: "круг", sound: "圆圈" },
                    { tone: "2-й", pinyin: "quán", ru: "цюань", char: "全", meaning: "весь 🌍", example: "全部 quán bù", example_ru: "все", sound: "全部" },
                    { tone: "3-й", pinyin: "quǎn", ru: "цюань", char: "犬", meaning: "собака 🐕", example: "警犬 jǐng quǎn", example_ru: "служебная собака", sound: "警犬" },
                    { tone: "4-й", pinyin: "quàn", ru: "цюань", char: "劝", meaning: "советовать 💬", example: "劝说 quàn shuō", example_ru: "убеждать", sound: "劝说" }
                ]
            },
            que: {
                translation: "цюэ",
                tones: [
                    { tone: "1-й", pinyin: "quē", ru: "цюэ", char: "缺", meaning: "не хватать ❌", example: "缺少 quē shǎo", example_ru: "недоставать", sound: "缺少" },
                    { tone: "2-й", pinyin: "qué", ru: "цюэ", char: "瘸", meaning: "хромать 🦯", example: "瘸腿 qué tuǐ", example_ru: "хромать", sound: "瘸腿" },
                    { tone: "4-й", pinyin: "què", ru: "цюэ", char: "确", meaning: "точный ✅", example: "确实 què shí", example_ru: "действительно", sound: "确实" }
                ]
            },
            qun: {
                translation: "цюнь",
                tones: [
                    { tone: "2-й", pinyin: "qún", ru: "цюнь", char: "群", meaning: "группа 👥", example: "群众 qún zhòng", example_ru: "народ", sound: "群众" }
                ]
            }
        }
    },

    // ==================== X ====================
    x: {
        desc: "x [ɕ] — как «сь» (очень мягкая «с», язык у нижних зубов)",
        ru_sound: "сь (мягкая «с», как в слове «сиять», улыбка)",
        articulation: "👅 Язык прижат к нижним зубам, улыбка, воздух идёт по желобку",
        sound: "xī",
        syllables: {
            xi: {
                translation: "си",
                tones: [
                    { tone: "1-й", pinyin: "xī", ru: "си", char: "西", meaning: "запад 🌇", example: "西方 xī fāng", example_ru: "запад", sound: "西方" },
                    { tone: "2-й", pinyin: "xí", ru: "си", char: "习", meaning: "изучать 📖", example: "学习 xué xí", example_ru: "учиться", sound: "学习" },
                    { tone: "3-й", pinyin: "xǐ", ru: "си", char: "喜", meaning: "радость 😊", example: "喜欢 xǐ huān", example_ru: "нравиться", sound: "喜欢" },
                    { tone: "4-й", pinyin: "xì", ru: "си", char: "系", meaning: "система ⚙️", example: "系统 xì tǒng", example_ru: "система", sound: "系统" }
                ]
            },
            xia: {
                translation: "ся",
                tones: [
                    { tone: "1-й", pinyin: "xiā", ru: "ся", char: "虾", meaning: "креветка 🦐", example: "龙虾 lóng xiā", example_ru: "омар", sound: "龙虾" },
                    { tone: "2-й", pinyin: "xiá", ru: "ся", char: "霞", meaning: "заря 🌅", example: "晚霞 wǎn xiá", example_ru: "вечерняя заря", sound: "晚霞" },
                    { tone: "4-й", pinyin: "xià", ru: "ся", char: "下", meaning: "низ ⬇️", example: "下面 xià miàn", example_ru: "снизу", sound: "下面" }
                ]
            },
            xian: {
                translation: "сянь",
                tones: [
                    { tone: "1-й", pinyin: "xiān", ru: "сянь", char: "先", meaning: "сначала 🥇", example: "首先 shǒu xiān", example_ru: "во-первых", sound: "首先" },
                    { tone: "2-й", pinyin: "xián", ru: "сянь", char: "闲", meaning: "свободный 🆓", example: "空闲 kòng xián", example_ru: "свободный", sound: "空闲" },
                    { tone: "3-й", pinyin: "xiǎn", ru: "сянь", char: "显", meaning: "очевидный 👁️", example: "明显 míng xiǎn", example_ru: "очевидный", sound: "明显" },
                    { tone: "4-й", pinyin: "xiàn", ru: "сянь", char: "现", meaning: "появляться 🌟", example: "现在 xiàn zài", example_ru: "сейчас", sound: "现在" }
                ]
            },
            xiang: {
                translation: "сян",
                tones: [
                    { tone: "1-й", pinyin: "xiāng", ru: "сян", char: "相", meaning: "друг друга 🤝", example: "互相 hù xiāng", example_ru: "взаимно", sound: "互相" },
                    { tone: "2-й", pinyin: "xiáng", ru: "сян", char: "祥", meaning: "благоприятный 🍀", example: "吉祥 jí xiáng", example_ru: "счастливый", sound: "吉祥" },
                    { tone: "3-й", pinyin: "xiǎng", ru: "сян", char: "想", meaning: "думать 🤔", example: "想到 xiǎng dào", example_ru: "думать", sound: "想到" },
                    { tone: "4-й", pinyin: "xiàng", ru: "сян", char: "向", meaning: "к, в направлении 🧭", example: "方向 fāng xiàng", example_ru: "направление", sound: "方向" }
                ]
            },
            xiao: {
                translation: "сяо",
                tones: [
                    { tone: "1-й", pinyin: "xiāo", ru: "сяо", char: "消", meaning: "исчезать 💨", example: "消失 xiāo shī", example_ru: "исчезать", sound: "消失" },
                    { tone: "2-й", pinyin: "xiáo", ru: "сяо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "xiǎo", ru: "сяо", char: "小", meaning: "маленький 🔹", example: "小孩 xiǎo hái", example_ru: "ребёнок", sound: "小孩" },
                    { tone: "4-й", pinyin: "xiào", ru: "сяо", char: "笑", meaning: "смеяться 😂", example: "笑容 xiào róng", example_ru: "улыбка", sound: "笑容" }
                ]
            },
            xie: {
                translation: "се",
                tones: [
                    { tone: "1-й", pinyin: "xiē", ru: "се", char: "些", meaning: "несколько 🔢", example: "一些 yī xiē", example_ru: "несколько", sound: "一些" },
                    { tone: "2-й", pinyin: "xié", ru: "се", char: "鞋", meaning: "обувь 👞", example: "鞋子 xié zi", example_ru: "обувь", sound: "鞋子" },
                    { tone: "3-й", pinyin: "xiě", ru: "се", char: "写", meaning: "писать ✍️", example: "写字 xiě zì", example_ru: "писать", sound: "写字" },
                    { tone: "4-й", pinyin: "xiè", ru: "се", char: "谢", meaning: "благодарить 🙏", example: "谢谢 xiè xie", example_ru: "спасибо", sound: "谢谢" }
                ]
            },
            xin: {
                translation: "синь",
                tones: [
                    { tone: "1-й", pinyin: "xīn", ru: "синь", char: "新", meaning: "новый 🆕", example: "新年 xīn nián", example_ru: "Новый год", sound: "新年" },
                    { tone: "4-й", pinyin: "xìn", ru: "синь", char: "信", meaning: "письмо 💌", example: "信封 xìn fēng", example_ru: "конверт", sound: "信封" }
                ]
            },
            xing: {
                translation: "син",
                tones: [
                    { tone: "1-й", pinyin: "xīng", ru: "син", char: "星", meaning: "звезда ⭐", example: "星星 xīng xing", example_ru: "звезда", sound: "星星" },
                    { tone: "2-й", pinyin: "xíng", ru: "син", char: "行", meaning: "идти 🚶", example: "行走 xíng zǒu", example_ru: "ходить", sound: "行走" },
                    { tone: "3-й", pinyin: "xǐng", ru: "син", char: "醒", meaning: "просыпаться 🌅", example: "醒来 xǐng lái", example_ru: "проснуться", sound: "醒来" },
                    { tone: "4-й", pinyin: "xìng", ru: "син", char: "姓", meaning: "фамилия 📛", example: "姓名 xìng míng", example_ru: "имя и фамилия", sound: "姓名" }
                ]
            },
            xiong: {
                translation: "сюн",
                tones: [
                    { tone: "1-й", pinyin: "xiōng", ru: "сюн", char: "兄", meaning: "старший брат 👨", example: "兄弟 xiōng dì", example_ru: "братья", sound: "兄弟" },
                    { tone: "2-й", pinyin: "xióng", ru: "сюн", char: "熊", meaning: "медведь 🐻", example: "熊猫 xióng māo", example_ru: "панда", sound: "熊猫" }
                ]
            },
            xiu: {
                translation: "сю",
                tones: [
                    { tone: "1-й", pinyin: "xiū", ru: "сю", char: "休", meaning: "отдыхать 😴", example: "休息 xiū xi", example_ru: "отдыхать", sound: "休息" },
                    { tone: "3-й", pinyin: "xiǔ", ru: "сю", char: "宿", meaning: "ночевать 🏨", example: "住宿 zhù sù", example_ru: "проживание", sound: "住宿" },
                    { tone: "4-й", pinyin: "xiù", ru: "сю", char: "秀", meaning: "шоу 🎭", example: "表演 biǎo yǎn", example_ru: "выступление", sound: "表演" }
                ]
            },
            xu: {
                translation: "сюй",
                tones: [
                    { tone: "1-й", pinyin: "xū", ru: "сюй", char: "须", meaning: "должен ⚠️", example: "必须 bì xū", example_ru: "обязан", sound: "必须" },
                    { tone: "3-й", pinyin: "xǔ", ru: "сюй", char: "许", meaning: "разрешать ✅", example: "允许 yǔn xǔ", example_ru: "разрешать", sound: "允许" },
                    { tone: "4-й", pinyin: "xù", ru: "сюй", char: "续", meaning: "продолжать ⏩", example: "继续 jì xù", example_ru: "продолжать", sound: "继续" }
                ]
            },
            xuan: {
                translation: "сюань",
                tones: [
                    { tone: "1-й", pinyin: "xuān", ru: "сюань", char: "宣", meaning: "объявлять 📢", example: "宣布 xuān bù", example_ru: "объявить", sound: "宣布" },
                    { tone: "2-й", pinyin: "xuán", ru: "сюань", char: "悬", meaning: "висеть 🪢", example: "悬挂 xuán guà", example_ru: "висеть", sound: "悬挂" },
                    { tone: "4-й", pinyin: "xuàn", ru: "сюань", char: "炫", meaning: "хвастаться ✨", example: "炫耀 xuàn yào", example_ru: "хвастаться", sound: "炫耀" }
                ]
            },
            xue: {
                translation: "сюэ",
                tones: [
                    { tone: "1-й", pinyin: "xuē", ru: "сюэ", char: "靴", meaning: "сапоги 👢", example: "靴子 xuē zi", example_ru: "сапоги", sound: "靴子" },
                    { tone: "3-й", pinyin: "xuě", ru: "сюэ", char: "雪", meaning: "снег ❄️", example: "雪人 xuě rén", example_ru: "снеговик", sound: "雪人" },
                    { tone: "4-й", pinyin: "xuè", ru: "сюэ", char: "血", meaning: "кровь 🩸", example: "血液 xuè yè", example_ru: "кровь", sound: "血液" }
                ]
            },
            xun: {
                translation: "сюнь",
                tones: [
                    { tone: "2-й", pinyin: "xún", ru: "сюнь", char: "寻", meaning: "искать 🔍", example: "寻找 xún zhǎo", example_ru: "искать", sound: "寻找" },
                    { tone: "4-й", pinyin: "xùn", ru: "сюнь", char: "训", meaning: "тренировать 🏋️", example: "训练 xùn liàn", example_ru: "тренировка", sound: "训练" }
                ]
            }
        }
    },
    // ==================== ZH ====================
    zh: {
        desc: "zh [tʂ] — как «чж» (язык завёрнут назад, без выдоха)",
        ru_sound: "чж (как в слове «джем», но твёрже)",
        articulation: "👅 Кончик языка загнут назад к нёбу. ГОЛОС НЕ ВКЛЮЧЁН.",
        sound: "zhā",
        syllables: {
            zha: {
                translation: "чжа",
                tones: [
                    { tone: "1-й", pinyin: "zhā", ru: "чжа", char: "扎", meaning: "втыкать 📌", example: "扎针 zhā zhēn", example_ru: "делать укол", sound: "扎针" },
                    { tone: "2-й", pinyin: "zhá", ru: "чжа", char: "炸", meaning: "жарить 🍤", example: "炸鱼 zhá yú", example_ru: "жарить рыбу", sound: "炸鱼" },
                    { tone: "3-й", pinyin: "zhǎ", ru: "чжа", char: "眨", meaning: "моргать 👁️", example: "眨眼 zhǎ yǎn", example_ru: "моргать", sound: "眨眼" },
                    { tone: "4-й", pinyin: "zhà", ru: "чжа", char: "炸", meaning: "взрывать 💥", example: "炸弹 zhà dàn", example_ru: "бомба", sound: "炸弹" }
                ]
            },
            zhe: {
                translation: "чжэ",
                tones: [
                    { tone: "1-й", pinyin: "zhē", ru: "чжэ", char: "遮", meaning: "закрывать 🎭", example: "遮住 zhē zhù", example_ru: "закрыть", sound: "遮住" },
                    { tone: "2-й", pinyin: "zhé", ru: "чжэ", char: "折", meaning: "ломать 🔨", example: "折断 zhé duàn", example_ru: "сломать", sound: "折断" },
                    { tone: "3-й", pinyin: "zhě", ru: "чжэ", char: "者", meaning: "тот, кто 🧑", example: "作者 zuò zhě", example_ru: "автор", sound: "作者" },
                    { tone: "4-й", pinyin: "zhè", ru: "чжэ", char: "这", meaning: "этот 👆", example: "这里 zhè lǐ", example_ru: "здесь", sound: "这里" }
                ]
            },
            zhi: {
                translation: "чжи",
                tones: [
                    { tone: "1-й", pinyin: "zhī", ru: "чжи", char: "知", meaning: "знать 🧠", example: "知道 zhī dào", example_ru: "знать", sound: "知道" },
                    { tone: "2-й", pinyin: "zhí", ru: "чжи", char: "直", meaning: "прямой 📏", example: "直接 zhí jiē", example_ru: "прямо", sound: "直接" },
                    { tone: "3-й", pinyin: "zhǐ", ru: "чжи", char: "指", meaning: "палец 👆", example: "手指 shǒu zhǐ", example_ru: "палец", sound: "手指" },
                    { tone: "4-й", pinyin: "zhì", ru: "чжи", char: "至", meaning: "до 🎯", example: "至少 zhì shǎo", example_ru: "по крайней мере", sound: "至少" }
                ]
            },
            zhou: {
                translation: "чжоу",
                tones: [
                    { tone: "1-й", pinyin: "zhōu", ru: "чжоу", char: "周", meaning: "неделя 📅", example: "周末 zhōu mò", example_ru: "выходные", sound: "周末" },
                    { tone: "2-й", pinyin: "zhóu", ru: "чжоу", char: "轴", meaning: "ось 🔄", example: "轴承 zhóu chéng", example_ru: "подшипник", sound: "轴承" },
                    { tone: "3-й", pinyin: "zhǒu", ru: "чжоу", char: "肘", meaning: "локоть 💪", example: "手肘 shǒu zhǒu", example_ru: "локоть", sound: "手肘" },
                    { tone: "4-й", pinyin: "zhòu", ru: "чжоу", char: "皱", meaning: "морщить 😠", example: "皱纹 zhòu wén", example_ru: "морщина", sound: "皱纹" }
                ]
            },
            zhu: {
                translation: "чжу",
                tones: [
                    { tone: "1-й", pinyin: "zhū", ru: "чжу", char: "猪", meaning: "свинья 🐷", example: "猪肉 zhū ròu", example_ru: "свинина", sound: "猪肉" },
                    { tone: "2-й", pinyin: "zhú", ru: "чжу", char: "竹", meaning: "бамбук 🎋", example: "竹子 zhú zi", example_ru: "бамбук", sound: "竹子" },
                    { tone: "3-й", pinyin: "zhǔ", ru: "чжу", char: "主", meaning: "главный 👑", example: "主要 zhǔ yào", example_ru: "главный", sound: "主要" },
                    { tone: "4-й", pinyin: "zhù", ru: "чжу", char: "住", meaning: "жить 🏠", example: "住房 zhù fáng", example_ru: "жильё", sound: "住房" }
                ]
            },
            zhua: {
                translation: "чжуа",
                tones: [
                    { tone: "1-й", pinyin: "zhuā", ru: "чжуа", char: "抓", meaning: "хватать ✋", example: "抓住 zhuā zhù", example_ru: "схватить", sound: "抓住" },
                    { tone: "4-й", pinyin: "zhuà", ru: "чжуа", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" }
                ]
            },
            zhuai: {
                translation: "чжуай",
                tones: [
                    { tone: "1-й", pinyin: "zhuāi", ru: "чжуай", char: "拽", meaning: "тянуть 🫱", example: "拽住 zhuāi zhù", example_ru: "тянуть", sound: "拽住" },
                    { tone: "4-й", pinyin: "zhuài", ru: "чжуай", char: "拽", meaning: "тащить", example: "拽走 zhuài zǒu", example_ru: "утащить", sound: "拽走" }
                ]
            },
            zhuan: {
                translation: "чжуань",
                tones: [
                    { tone: "1-й", pinyin: "zhuān", ru: "чжуань", char: "专", meaning: "специальный 🎯", example: "专业 zhuān yè", example_ru: "специальность", sound: "专业" },
                    { tone: "3-й", pinyin: "zhuǎn", ru: "чжуань", char: "转", meaning: "поворачивать 🔄", example: "转弯 zhuǎn wān", example_ru: "повернуть", sound: "转弯" },
                    { tone: "4-й", pinyin: "zhuàn", ru: "чжуань", char: "转", meaning: "вращать 🌀", example: "转动 zhuàn dòng", example_ru: "вращать", sound: "转动" }
                ]
            },
            zhuang: {
                translation: "чжуан",
                tones: [
                    { tone: "1-й", pinyin: "zhuāng", ru: "чжуан", char: "装", meaning: "одеваться 👕", example: "服装 fú zhuāng", example_ru: "одежда", sound: "服装" },
                    { tone: "4-й", pinyin: "zhuàng", ru: "чжуан", char: "壮", meaning: "сильный 💪", example: "强壮 qiáng zhuàng", example_ru: "сильный", sound: "强壮" }
                ]
            },
            zhui: {
                translation: "чжуй",
                tones: [
                    { tone: "1-й", pinyin: "zhuī", ru: "чжуй", char: "追", meaning: "преследовать 🏃", example: "追求 zhuī qiú", example_ru: "стремиться", sound: "追求" },
                    { tone: "4-й", pinyin: "zhuì", ru: "чжуй", char: "坠", meaning: "падать 💨", example: "坠落 zhuì luò", example_ru: "падать", sound: "坠落" }
                ]
            },
            zhun: {
                translation: "чжунь",
                tones: [
                    { tone: "3-й", pinyin: "zhǔn", ru: "чжунь", char: "准", meaning: "точный 🎯", example: "准备 zhǔn bèi", example_ru: "готовиться", sound: "准备" }
                ]
            },
            zhuo: {
                translation: "чжуо",
                tones: [
                    { tone: "1-й", pinyin: "zhuō", ru: "чжуо", char: "桌", meaning: "стол 🪑", example: "桌子 zhuō zi", example_ru: "стол", sound: "桌子" },
                    { tone: "2-й", pinyin: "zhuó", ru: "чжуо", char: "着", meaning: "носить 👔", example: "穿着 chuān zhuó", example_ru: "одеваться", sound: "穿着" }
                ]
            }
        }
    },

    // ==================== CH ====================
    ch: {
        desc: "ch [tʂʰ] — как «ч» с сильным выдохом (язык завёрнут назад)",
        ru_sound: "ч (с сильным выдохом, твёрдо)",
        articulation: "💨 Кончик языка загнут назад, затем резкий выдох.",
        sound: "chā",
        syllables: {
            cha: {
                translation: "ча",
                tones: [
                    { tone: "1-й", pinyin: "chā", ru: "ча", char: "差", meaning: "разница 📊", example: "差别 chā bié", example_ru: "различие", sound: "差别" },
                    { tone: "2-й", pinyin: "chá", ru: "ча", char: "茶", meaning: "чай 🍵", example: "喝茶 hē chá", example_ru: "пить чай", sound: "喝茶" },
                    { tone: "3-й", pinyin: "chǎ", ru: "ча", char: "衩", meaning: "разрез 👗", example: "—", example_ru: "—", sound: "—" },
                    { tone: "4-й", pinyin: "chà", ru: "ча", char: "差", meaning: "плохой 👎", example: "差不多 chà bù duō", example_ru: "почти", sound: "差不多" }
                ]
            },
            che: {
                translation: "чэ",
                tones: [
                    { tone: "1-й", pinyin: "chē", ru: "чэ", char: "车", meaning: "машина 🚗", example: "汽车 qì chē", example_ru: "автомобиль", sound: "汽车" },
                    { tone: "3-й", pinyin: "chě", ru: "чэ", char: "扯", meaning: "тянуть 🫱", example: "扯开 chě kāi", example_ru: "оторвать", sound: "扯开" },
                    { tone: "4-й", pinyin: "chè", ru: "чэ", char: "撤", meaning: "убирать 🗑️", example: "撤退 chè tuì", example_ru: "отступать", sound: "撤退" }
                ]
            },
            chi: {
                translation: "чи",
                tones: [
                    { tone: "1-й", pinyin: "chī", ru: "чи", char: "吃", meaning: "есть 🍜", example: "吃饭 chī fàn", example_ru: "есть", sound: "吃饭" },
                    { tone: "2-й", pinyin: "chí", ru: "чи", char: "迟", meaning: "опаздывать ⏰", example: "迟到 chí dào", example_ru: "опаздывать", sound: "迟到" },
                    { tone: "3-й", pinyin: "chǐ", ru: "чи", char: "尺", meaning: "линейка 📏", example: "尺子 chǐ zi", example_ru: "линейка", sound: "尺子" },
                    { tone: "4-й", pinyin: "chì", ru: "чи", char: "赤", meaning: "красный ❤️", example: "赤色 chì sè", example_ru: "красный", sound: "赤色" }
                ]
            },
            chou: {
                translation: "чоу",
                tones: [
                    { tone: "1-й", pinyin: "chōu", ru: "чоу", char: "抽", meaning: "вытягивать 🎣", example: "抽水 chōu shuǐ", example_ru: "качать воду", sound: "抽水" },
                    { tone: "2-й", pinyin: "chóu", ru: "чоу", char: "愁", meaning: "грустный 😔", example: "发愁 fā chóu", example_ru: "грустить", sound: "发愁" },
                    { tone: "3-й", pinyin: "chǒu", ru: "чоу", char: "丑", meaning: "уродливый 🤡", example: "丑小鸭 chǒu xiǎo yā", example_ru: "гадкий утёнок", sound: "丑小鸭" },
                    { tone: "4-й", pinyin: "chòu", ru: "чоу", char: "臭", meaning: "вонючий 👃", example: "臭味 chòu wèi", example_ru: "запах", sound: "臭味" }
                ]
            },
            chu: {
                translation: "чу",
                tones: [
                    { tone: "1-й", pinyin: "chū", ru: "чу", char: "出", meaning: "выходить 🚪", example: "出来 chū lái", example_ru: "выйти", sound: "出来" },
                    { tone: "2-й", pinyin: "chú", ru: "чу", char: "除", meaning: "кроме ➖", example: "除了 chú le", example_ru: "кроме", sound: "除了" },
                    { tone: "3-й", pinyin: "chǔ", ru: "чу", char: "处", meaning: "место 📍", example: "处所 chù suǒ", example_ru: "место", sound: "处所" },
                    { tone: "4-й", pinyin: "chù", ru: "чу", char: "触", meaning: "трогать 🖐️", example: "接触 jiē chù", example_ru: "контакт", sound: "接触" }
                ]
            },
            chua: {
                translation: "чуа",
                tones: [
                    { tone: "1-й", pinyin: "chuā", ru: "чуа", char: "欻", meaning: "звук 🎶", example: "欻的一声 chuā de yī shēng", example_ru: "звук", sound: "欻的一声" }
                ]
            },
            chuai: {
                translation: "чуай",
                tones: [
                    { tone: "1-й", pinyin: "chuāi", ru: "чуай", char: "揣", meaning: "класть в карман 👖", example: "揣着 chuāi zhe", example_ru: "держать в кармане", sound: "揣着" },
                    { tone: "4-й", pinyin: "chuài", ru: "чуай", char: "踹", meaning: "пинать 🦶", example: "踹开 chuài kāi", example_ru: "отпихнуть", sound: "踹开" }
                ]
            },
            chuan: {
                translation: "чуань",
                tones: [
                    { tone: "1-й", pinyin: "chuān", ru: "чуань", char: "穿", meaning: "надевать 👕", example: "穿衣 chuān yī", example_ru: "одеваться", sound: "穿衣" },
                    { tone: "2-й", pinyin: "chuán", ru: "чуань", char: "船", meaning: "лодка 🛶", example: "小船 xiǎo chuán", example_ru: "лодка", sound: "小船" },
                    { tone: "3-й", pinyin: "chuǎn", ru: "чуань", char: "喘", meaning: "дышать 🌬️", example: "喘气 chuǎn qì", example_ru: "дышать", sound: "喘气" },
                    { tone: "4-й", pinyin: "chuàn", ru: "чуань", char: "串", meaning: "связка 📿", example: "一串 yī chuàn", example_ru: "связка", sound: "一串" }
                ]
            },
            chuang: {
                translation: "чуан",
                tones: [
                    { tone: "1-й", pinyin: "chuāng", ru: "чуан", char: "窗", meaning: "окно 🪟", example: "窗户 chuāng hù", example_ru: "окно", sound: "窗户" },
                    { tone: "2-й", pinyin: "chuáng", ru: "чуан", char: "床", meaning: "кровать 🛏️", example: "床上 chuáng shàng", example_ru: "на кровати", sound: "床上" },
                    { tone: "3-й", pinyin: "chuǎng", ru: "чуан", char: "闯", meaning: "врываться 💨", example: "闯进 chuǎng jìn", example_ru: "ворваться", sound: "闯进" },
                    { tone: "4-й", pinyin: "chuàng", ru: "чуан", char: "创", meaning: "создавать 🎨", example: "创造 chuàng zào", example_ru: "создавать", sound: "创造" }
                ]
            },
            chui: {
                translation: "чуй",
                tones: [
                    { tone: "1-й", pinyin: "chuī", ru: "чуй", char: "吹", meaning: "дуть 🌬️", example: "吹风 chuī fēng", example_ru: "дуть", sound: "吹风" },
                    { tone: "2-й", pinyin: "chuí", ru: "чуй", char: "垂", meaning: "висеть 📉", example: "垂直 chuí zhí", example_ru: "вертикальный", sound: "垂直" }
                ]
            },
            chun: {
                translation: "чунь",
                tones: [
                    { tone: "1-й", pinyin: "chūn", ru: "чунь", char: "春", meaning: "весна 🌸", example: "春天 chūn tiān", example_ru: "весна", sound: "春天" },
                    { tone: "2-й", pinyin: "chún", ru: "чунь", char: "纯", meaning: "чистый ✨", example: "纯净 chún jìng", example_ru: "чистый", sound: "纯净" },
                    { tone: "3-й", pinyin: "chǔn", ru: "чунь", char: "蠢", meaning: "глупый 🤪", example: "愚蠢 yú chǔn", example_ru: "глупый", sound: "愚蠢" }
                ]
            },
            chuo: {
                translation: "чуо",
                tones: [
                    { tone: "1-й", pinyin: "chuō", ru: "чуо", char: "戳", meaning: "тыкать ☝️", example: "戳穿 chuō chuān", example_ru: "проткнуть", sound: "戳穿" },
                    { tone: "4-й", pinyin: "chuò", ru: "чуо", char: "绰", meaning: "изящный 🎀", example: "绰号 chuò hào", example_ru: "прозвище", sound: "绰号" }
                ]
            }
        }
    },

    // ==================== SH ====================
    sh: {
        desc: "sh [ʂ] — как «ш» (язык завёрнут назад, как в русском «ш»)",
        ru_sound: "ш (твёрдое, как в слове «шар»)",
        articulation: "👅 Кончик языка загнут назад к нёбу. Воздух идёт по желобку.",
        sound: "shā",
        syllables: {
            sha: {
                translation: "ша",
                tones: [
                    { tone: "1-й", pinyin: "shā", ru: "ша", char: "沙", meaning: "песок 🏖️", example: "沙子 shā zi", example_ru: "песок", sound: "沙子" },
                    { tone: "2-й", pinyin: "shá", ru: "ша", char: "啥", meaning: "что ❓", example: "啥事 shá shì", example_ru: "что случилось", sound: "啥事" },
                    { tone: "3-й", pinyin: "shǎ", ru: "ша", char: "傻", meaning: "глупый 😜", example: "傻瓜 shǎ guā", example_ru: "дурак", sound: "傻瓜" },
                    { tone: "4-й", pinyin: "shà", ru: "ша", char: "厦", meaning: "здание 🏢", example: "大厦 dà shà", example_ru: "здание", sound: "大厦" }
                ]
            },
            she: {
                translation: "шэ",
                tones: [
                    { tone: "1-й", pinyin: "shē", ru: "шэ", char: "赊", meaning: "одалживать 💸", example: "赊账 shē zhàng", example_ru: "кредит", sound: "赊账" },
                    { tone: "2-й", pinyin: "shé", ru: "шэ", char: "舌", meaning: "язык 👅", example: "舌头 shé tou", example_ru: "язык", sound: "舌头" },
                    { tone: "3-й", pinyin: "shě", ru: "шэ", char: "舍", meaning: "отказываться 🚫", example: "舍得 shě de", example_ru: "не жалеть", sound: "舍得" },
                    { tone: "4-й", pinyin: "shè", ru: "шэ", char: "设", meaning: "устанавливать ⚙️", example: "设计 shè jì", example_ru: "дизайн", sound: "设计" }
                ]
            },
            shi: {
                translation: "ши",
                tones: [
                    { tone: "1-й", pinyin: "shī", ru: "ши", char: "师", meaning: "учитель 👨‍🏫", example: "老师 lǎo shī", example_ru: "учитель", sound: "老师" },
                    { tone: "2-й", pinyin: "shí", ru: "ши", char: "时", meaning: "время ⏰", example: "时间 shí jiān", example_ru: "время", sound: "时间" },
                    { tone: "3-й", pinyin: "shǐ", ru: "ши", char: "使", meaning: "использовать 🔧", example: "使用 shǐ yòng", example_ru: "использовать", sound: "使用" },
                    { tone: "4-й", pinyin: "shì", ru: "ши", char: "是", meaning: "быть ✅", example: "是的 shì de", example_ru: "да", sound: "是的" }
                ]
            },
            shou: {
                translation: "шоу",
                tones: [
                    { tone: "1-й", pinyin: "shōu", ru: "шоу", char: "收", meaning: "получать 📥", example: "收到 shōu dào", example_ru: "получить", sound: "收到" },
                    { tone: "2-й", pinyin: "shóu", ru: "шоу", char: "熟", meaning: "готовый 🍳", example: "熟了 shóu le", example_ru: "готово", sound: "熟了" },
                    { tone: "3-й", pinyin: "shǒu", ru: "шоу", char: "手", meaning: "рука 🖐️", example: "手机 shǒu jī", example_ru: "телефон", sound: "手机" },
                    { tone: "4-й", pinyin: "shòu", ru: "шоу", char: "受", meaning: "получать (страдат.)", example: "接受 jiē shòu", example_ru: "принимать", sound: "接受" }
                ]
            },
            shu: {
                translation: "шу",
                tones: [
                    { tone: "1-й", pinyin: "shū", ru: "шу", char: "书", meaning: "книга 📖", example: "书包 shū bāo", example_ru: "рюкзак", sound: "书包" },
                    { tone: "2-й", pinyin: "shú", ru: "шу", char: "熟", meaning: "знакомый 👥", example: "熟悉 shú xī", example_ru: "знакомый", sound: "熟悉" },
                    { tone: "3-й", pinyin: "shǔ", ru: "шу", char: "数", meaning: "считать 🔢", example: "数字 shù zì", example_ru: "цифра", sound: "数字" },
                    { tone: "4-й", pinyin: "shù", ru: "шу", char: "树", meaning: "дерево 🌳", example: "树木 shù mù", example_ru: "деревья", sound: "树木" }
                ]
            },
            shua: {
                translation: "шуа",
                tones: [
                    { tone: "1-й", pinyin: "shuā", ru: "шуа", char: "刷", meaning: "чистить щёткой 🪥", example: "刷牙 shuā yá", example_ru: "чистить зубы", sound: "刷牙" },
                    { tone: "4-й", pinyin: "shuà", ru: "шуа", char: "刷", meaning: "окрашивать 🖌️", example: "粉刷 fěn shuā", example_ru: "красить", sound: "粉刷" }
                ]
            },
            shuai: {
                translation: "шуай",
                tones: [
                    { tone: "1-й", pinyin: "shuāi", ru: "шуай", char: "摔", meaning: "падать 💥", example: "摔倒 shuāi dǎo", example_ru: "упасть", sound: "摔倒" },
                    { tone: "3-й", pinyin: "shuǎi", ru: "шуай", char: "甩", meaning: "бросать 🎣", example: "甩掉 shuǎi diào", example_ru: "сбросить", sound: "甩掉" },
                    { tone: "4-й", pinyin: "shuài", ru: "шуай", char: "帅", meaning: "красивый 😎", example: "帅哥 shuài gē", example_ru: "красавчик", sound: "帅哥" }
                ]
            },
            shuan: {
                translation: "шуань",
                tones: [
                    { tone: "1-й", pinyin: "shuān", ru: "шуань", char: "栓", meaning: "затычка 🔌", example: "栓子 shuān zi", example_ru: "затычка", sound: "栓子" }
                ]
            },
            shuang: {
                translation: "шуан",
                tones: [
                    { tone: "1-й", pinyin: "shuāng", ru: "шуан", char: "双", meaning: "два 2️⃣", example: "双人 shuāng rén", example_ru: "два человека", sound: "双人" },
                    { tone: "3-й", pinyin: "shuǎng", ru: "шуан", char: "爽", meaning: "крутой 😎", example: "爽快 shuǎng kuài", example_ru: "классно", sound: "爽快" }
                ]
            },
            shui: {
                translation: "шуй",
                tones: [
                    { tone: "2-й", pinyin: "shuí", ru: "шуй", char: "谁", meaning: "кто ❓", example: "是谁 shì shuí", example_ru: "кто это", sound: "是谁" },
                    { tone: "3-й", pinyin: "shuǐ", ru: "шуй", char: "水", meaning: "вода 💧", example: "水果 shuǐ guǒ", example_ru: "фрукты", sound: "水果" },
                    { tone: "4-й", pinyin: "shuì", ru: "шуй", char: "睡", meaning: "спать 😴", example: "睡觉 shuì jiào", example_ru: "спать", sound: "睡觉" }
                ]
            },
            shun: {
                translation: "шунь",
                tones: [
                    { tone: "3-й", pinyin: "shǔn", ru: "шунь", char: "吮", meaning: "сосать 🍭", example: "吮吸 shǔn xī", example_ru: "сосать", sound: "吮吸" },
                    { tone: "4-й", pinyin: "shùn", ru: "шунь", char: "顺", meaning: "гладкий ✨", example: "顺利 shùn lì", example_ru: "гладко", sound: "顺利" }
                ]
            },
            shuo: {
                translation: "шуо",
                tones: [
                    { tone: "1-й", pinyin: "shuō", ru: "шуо", char: "说", meaning: "говорить 🗣️", example: "说话 shuō huà", example_ru: "говорить", sound: "说话" },
                    { tone: "4-й", pinyin: "shuò", ru: "шуо", char: "硕", meaning: "большой 📏", example: "硕士 shuò shì", example_ru: "магистр", sound: "硕士" }
                ]
            }
        }
    },

    // ==================== R ====================
    r: {
        desc: "r [ʐ] — как «ж» (звонкое, язык завёрнут назад)",
        ru_sound: "ж (как в слове «жар», но мягче)",
        articulation: "👅 Кончик языка загнут назад, ГОЛОС ВКЛЮЧЁН (звонкий).",
        sound: "rì",
        syllables: {
            re: {
                translation: "жэ",
                tones: [
                    { tone: "3-й", pinyin: "rě", ru: "жэ", char: "惹", meaning: "провоцировать 😈", example: "惹事 rě shì", example_ru: "провоцировать", sound: "惹事" },
                    { tone: "4-й", pinyin: "rè", ru: "жэ", char: "热", meaning: "горячий 🔥", example: "热水 rè shuǐ", example_ru: "горячая вода", sound: "热水" }
                ]
            },
            ren: {
                translation: "жэнь",
                tones: [
                    { tone: "2-й", pinyin: "rén", ru: "жэнь", char: "人", meaning: "человек 👤", example: "人们 rén men", example_ru: "люди", sound: "人们" },
                    { tone: "3-й", pinyin: "rěn", ru: "жэнь", char: "忍", meaning: "терпеть 🧘", example: "忍耐 rěn nài", example_ru: "терпеть", sound: "忍耐" },
                    { tone: "4-й", pinyin: "rèn", ru: "жэнь", char: "认", meaning: "узнавать 🧠", example: "认识 rèn shi", example_ru: "знать", sound: "认识" }
                ]
            },
            reng: {
                translation: "жэн",
                tones: [
                    { tone: "1-й", pinyin: "rēng", ru: "жэн", char: "扔", meaning: "бросать 🤾", example: "扔掉 rēng diào", example_ru: "выбросить", sound: "扔掉" },
                    { tone: "2-й", pinyin: "réng", ru: "жэн", char: "仍", meaning: "всё ещё ⏳", example: "仍然 réng rán", example_ru: "всё ещё", sound: "仍然" }
                ]
            },
            ri: {
                translation: "жи",
                tones: [
                    { tone: "4-й", pinyin: "rì", ru: "жи", char: "日", meaning: "солнце ☀️", example: "日子 rì zi", example_ru: "день", sound: "日子" }
                ]
            },
            rong: {
                translation: "жун",
                tones: [
                    { tone: "2-й", pinyin: "róng", ru: "жун", char: "容", meaning: "вмещать 🧺", example: "容易 róng yì", example_ru: "легко", sound: "容易" },
                    { tone: "3-й", pinyin: "rǒng", ru: "жун", char: "冗", meaning: "лишний 🗑️", example: "冗长 rǒng cháng", example_ru: "длинный", sound: "冗长" }
                ]
            },
            rou: {
                translation: "жоу",
                tones: [
                    { tone: "2-й", pinyin: "róu", ru: "жоу", char: "柔", meaning: "мягкий 🧸", example: "柔软 róu ruǎn", example_ru: "мягкий", sound: "柔软" },
                    { tone: "4-й", pinyin: "ròu", ru: "жоу", char: "肉", meaning: "мясо 🥩", example: "牛肉 niú ròu", example_ru: "говядина", sound: "牛肉" }
                ]
            },
            ru: {
                translation: "жу",
                tones: [
                    { tone: "2-й", pinyin: "rú", ru: "жу", char: "如", meaning: "как, например 📝", example: "如果 rú guǒ", example_ru: "если", sound: "如果" },
                    { tone: "3-й", pinyin: "rǔ", ru: "жу", char: "乳", meaning: "молоко 🥛", example: "乳制品 rǔ zhì pǐn", example_ru: "молочные продукты", sound: "乳制品" },
                    { tone: "4-й", pinyin: "rù", ru: "жу", char: "入", meaning: "входить 🚪", example: "入口 rù kǒu", example_ru: "вход", sound: "入口" }
                ]
            },
            ruan: {
                translation: "жуань",
                tones: [
                    { tone: "3-й", pinyin: "ruǎn", ru: "жуань", char: "软", meaning: "мягкий 🧸", example: "软件 ruǎn jiàn", example_ru: "программное обеспечение", sound: "软件" }
                ]
            },
            rui: {
                translation: "жуй",
                tones: [
                    { tone: "4-й", pinyin: "ruì", ru: "жуй", char: "瑞", meaning: "счастливый 🍀", example: "瑞士 ruì shì", example_ru: "Швейцария", sound: "瑞士" }
                ]
            },
            run: {
                translation: "жунь",
                tones: [
                    { tone: "4-й", pinyin: "rùn", ru: "жунь", char: "润", meaning: "влажный 💧", example: "滋润 zī rùn", example_ru: "увлажнять", sound: "滋润" }
                ]
            },
            ruo: {
                translation: "жуо",
                tones: [
                    { tone: "4-й", pinyin: "ruò", ru: "жуо", char: "若", meaning: "если 🔄", example: "若是 ruò shì", example_ru: "если", sound: "若是" }
                ]
            }
        }
    },
    // ==================== Y ====================
    y: {
        desc: "y [j] — как русская «й»",
        ru_sound: "й (как в слове «йод»)",
        articulation: "👅 Средняя часть языка поднимается к нёбу.",
        sound: "yī",
        syllables: {
            ya: {
                translation: "я",
                tones: [
                    { tone: "1-й", pinyin: "yā", ru: "я", char: "压", meaning: "давить ⬇️", example: "压力 yā lì", example_ru: "давление", sound: "压力" },
                    { tone: "2-й", pinyin: "yá", ru: "я", char: "牙", meaning: "зуб 🦷", example: "牙齿 yá chǐ", example_ru: "зубы", sound: "牙齿" },
                    { tone: "3-й", pinyin: "yǎ", ru: "я", char: "雅", meaning: "элегантный 🌸", example: "优雅 yōu yǎ", example_ru: "элегантный", sound: "优雅" },
                    { tone: "4-й", pinyin: "yà", ru: "я", char: "亚", meaning: "Азия 🌏", example: "亚洲 yà zhōu", example_ru: "Азия", sound: "亚洲" }
                ]
            },
            yan: {
                translation: "янь",
                tones: [
                    { tone: "1-й", pinyin: "yān", ru: "янь", char: "烟", meaning: "дым 💨", example: "香烟 xiāng yān", example_ru: "сигарета", sound: "香烟" },
                    { tone: "2-й", pinyin: "yán", ru: "янь", char: "言", meaning: "слово 💬", example: "语言 yǔ yán", example_ru: "язык", sound: "语言" },
                    { tone: "3-й", pinyin: "yǎn", ru: "янь", char: "眼", meaning: "глаз 👁️", example: "眼睛 yǎn jing", example_ru: "глаза", sound: "眼睛" },
                    { tone: "4-й", pinyin: "yàn", ru: "янь", char: "验", meaning: "проверять 🔍", example: "经验 jīng yàn", example_ru: "опыт", sound: "经验" }
                ]
            },
            yang: {
                translation: "ян",
                tones: [
                    { tone: "1-й", pinyin: "yāng", ru: "ян", char: "央", meaning: "центр 🎯", example: "中央 zhōng yāng", example_ru: "центр", sound: "中央" },
                    { tone: "2-й", pinyin: "yáng", ru: "ян", char: "羊", meaning: "овца 🐑", example: "绵羊 mián yáng", example_ru: "овца", sound: "绵羊" },
                    { tone: "3-й", pinyin: "yǎng", ru: "ян", char: "养", meaning: "растить 🌱", example: "养育 yǎng yù", example_ru: "воспитывать", sound: "养育" },
                    { tone: "4-й", pinyin: "yàng", ru: "ян", char: "样", meaning: "вид 🎨", example: "样子 yàng zi", example_ru: "вид", sound: "样子" }
                ]
            },
            yao: {
                translation: "яо",
                tones: [
                    { tone: "1-й", pinyin: "yāo", ru: "яо", char: "要", meaning: "хотеть 💖", example: "要求 yāo qiú", example_ru: "требовать", sound: "要求" },
                    { tone: "2-й", pinyin: "yáo", ru: "яо", char: "摇", meaning: "качать 🎸", example: "摇摆 yáo bǎi", example_ru: "качаться", sound: "摇摆" },
                    { tone: "3-й", pinyin: "yǎo", ru: "яо", char: "咬", meaning: "кусать 🦷", example: "咬一口 yǎo yī kǒu", example_ru: "откусить", sound: "咬一口" },
                    { tone: "4-й", pinyin: "yào", ru: "яо", char: "药", meaning: "лекарство 💊", example: "吃药 chī yào", example_ru: "пить лекарство", sound: "吃药" }
                ]
            },
            ye: {
                translation: "е",
                tones: [
                    { tone: "1-й", pinyin: "yē", ru: "е", char: "椰", meaning: "кокос 🥥", example: "椰子 yē zi", example_ru: "кокос", sound: "椰子" },
                    { tone: "2-й", pinyin: "yé", ru: "е", char: "爷", meaning: "дедушка 👴", example: "爷爷 yé ye", example_ru: "дедушка", sound: "爷爷" },
                    { tone: "3-й", pinyin: "yě", ru: "е", char: "也", meaning: "тоже ➕", example: "也是 yě shì", example_ru: "тоже", sound: "也是" },
                    { tone: "4-й", pinyin: "yè", ru: "е", char: "夜", meaning: "ночь 🌙", example: "夜晚 yè wǎn", example_ru: "ночь", sound: "夜晚" }
                ]
            },
            yi: {
                translation: "и",
                tones: [
                    { tone: "1-й", pinyin: "yī", ru: "и", char: "一", meaning: "один 1️⃣", example: "一个 yī gè", example_ru: "один", sound: "一个" },
                    { tone: "2-й", pinyin: "yí", ru: "и", char: "移", meaning: "перемещать 📦", example: "移动 yí dòng", example_ru: "двигать", sound: "移动" },
                    { tone: "3-й", pinyin: "yǐ", ru: "и", char: "以", meaning: "использовать 🔧", example: "可以 kě yǐ", example_ru: "можно", sound: "可以" },
                    { tone: "4-й", pinyin: "yì", ru: "и", char: "意", meaning: "смысл 💡", example: "意思 yì si", example_ru: "значение", sound: "意思" }
                ]
            },
            yin: {
                translation: "инь",
                tones: [
                    { tone: "1-й", pinyin: "yīn", ru: "инь", char: "音", meaning: "звук 🎵", example: "音乐 yīn yuè", example_ru: "музыка", sound: "音乐" },
                    { tone: "2-й", pinyin: "yín", ru: "инь", char: "银", meaning: "серебро 🥈", example: "银行 yín háng", example_ru: "банк", sound: "银行" },
                    { tone: "3-й", pinyin: "yǐn", ru: "инь", char: "引", meaning: "вести 🧭", example: "引起 yǐn qǐ", example_ru: "вызывать", sound: "引起" },
                    { tone: "4-й", pinyin: "yìn", ru: "инь", char: "印", meaning: "печать 🖨️", example: "印刷 yìn shuā", example_ru: "печатать", sound: "印刷" }
                ]
            },
            ying: {
                translation: "ин",
                tones: [
                    { tone: "1-й", pinyin: "yīng", ru: "ин", char: "英", meaning: "Англия 🇬🇧", example: "英国 yīng guó", example_ru: "Англия", sound: "英国" },
                    { tone: "2-й", pinyin: "yíng", ru: "ин", char: "赢", meaning: "выигрывать 🏆", example: "赢了 yíng le", example_ru: "выиграть", sound: "赢了" },
                    { tone: "3-й", pinyin: "yǐng", ru: "ин", char: "影", meaning: "тень 🌑", example: "电影 diàn yǐng", example_ru: "кино", sound: "电影" },
                    { tone: "4-й", pinyin: "yìng", ru: "ин", char: "硬", meaning: "твёрдый 🪨", example: "硬盘 yìng pán", example_ru: "жёсткий диск", sound: "硬盘" }
                ]
            },
            yo: {
                translation: "ё",
                tones: [
                    { tone: "1-й", pinyin: "yō", ru: "ё", char: "哟", meaning: "эй 👋", example: "哟 yō", example_ru: "эй", sound: "哟" }
                ]
            },
            yong: {
                translation: "юн",
                tones: [
                    { tone: "1-й", pinyin: "yōng", ru: "юн", char: "拥", meaning: "обнимать 🤗", example: "拥抱 yōng bào", example_ru: "обнимать", sound: "拥抱" },
                    { tone: "2-й", pinyin: "yóng", ru: "юн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "yǒng", ru: "юн", char: "永", meaning: "вечный ♾️", example: "永远 yǒng yuǎn", example_ru: "навсегда", sound: "永远" },
                    { tone: "4-й", pinyin: "yòng", ru: "юн", char: "用", meaning: "использовать 🔧", example: "用处 yòng chu", example_ru: "польза", sound: "用处" }
                ]
            },
            you: {
                translation: "ю",
                tones: [
                    { tone: "1-й", pinyin: "yōu", ru: "ю", char: "优", meaning: "отличный 🌟", example: "优秀 yōu xiù", example_ru: "отличный", sound: "优秀" },
                    { tone: "2-й", pinyin: "yóu", ru: "ю", char: "由", meaning: "через 🔄", example: "由于 yóu yú", example_ru: "из-за", sound: "由于" },
                    { tone: "3-й", pinyin: "yǒu", ru: "ю", char: "有", meaning: "иметь 💪", example: "有人 yǒu rén", example_ru: "есть кто-то", sound: "有人" },
                    { tone: "4-й", pinyin: "yòu", ru: "ю", char: "又", meaning: "опять 🔁", example: "又是 yòu shì", example_ru: "снова", sound: "又是" }
                ]
            },
            yu: {
                translation: "юй",
                tones: [
                    { tone: "1-й", pinyin: "yū", ru: "юй", char: "迂", meaning: "окольный 🚶", example: "迂回 yū huí", example_ru: "обходить", sound: "迂回" },
                    { tone: "2-й", pinyin: "yú", ru: "юй", char: "鱼", meaning: "рыба 🐟", example: "鱼片 yú piàn", example_ru: "рыбное филе", sound: "鱼片" },
                    { tone: "3-й", pinyin: "yǔ", ru: "юй", char: "雨", meaning: "дождь ☔", example: "下雨 xià yǔ", example_ru: "дождь идёт", sound: "下雨" },
                    { tone: "4-й", pinyin: "yù", ru: "юй", char: "遇", meaning: "встречать 🤝", example: "遇到 yù dào", example_ru: "встретить", sound: "遇到" }
                ]
            },
            yuan: {
                translation: "юань",
                tones: [
                    { tone: "1-й", pinyin: "yuān", ru: "юань", char: "冤", meaning: "несправедливость 😭", example: "冤枉 yuān wang", example_ru: "напрасно", sound: "冤枉" },
                    { tone: "2-й", pinyin: "yuán", ru: "юань", char: "元", meaning: "юань 💰", example: "一元 yī yuán", example_ru: "один юань", sound: "一元" },
                    { tone: "3-й", pinyin: "yuǎn", ru: "юань", char: "远", meaning: "далеко 🛣️", example: "远处 yuǎn chù", example_ru: "далеко", sound: "远处" },
                    { tone: "4-й", pinyin: "yuàn", ru: "юань", char: "愿", meaning: "желать 💫", example: "愿意 yuàn yì", example_ru: "хотеть", sound: "愿意" }
                ]
            },
            yue: {
                translation: "юэ",
                tones: [
                    { tone: "1-й", pinyin: "yuē", ru: "юэ", char: "约", meaning: "договор 📝", example: "约会 yuē huì", example_ru: "встреча", sound: "约会" },
                    { tone: "4-й", pinyin: "yuè", ru: "юэ", char: "月", meaning: "месяц/луна 🌙", example: "月亮 yuè liang", example_ru: "луна", sound: "月亮" }
                ]
            },
            yun: {
                translation: "юнь",
                tones: [
                    { tone: "1-й", pinyin: "yūn", ru: "юнь", char: "晕", meaning: "головокружение 😵", example: "头晕 tóu yūn", example_ru: "головокружение", sound: "头晕" },
                    { tone: "2-й", pinyin: "yún", ru: "юнь", char: "云", meaning: "облако ☁️", example: "云彩 yún cai", example_ru: "облако", sound: "云彩" },
                    { tone: "4-й", pinyin: "yùn", ru: "юнь", char: "运", meaning: "везти/удача 🍀", example: "运动 yùn dòng", example_ru: "спорт", sound: "运动" }
                ]
            }
        }
    },

    // ==================== W ====================
    w: {
        desc: "w [w] — как английская «w» (губы округлены)",
        ru_sound: "у (как в слове «уикенд», но губы округлены)",
        articulation: "👄 Губы округлены и напряжены.",
        sound: "wǒ",
        syllables: {
            wa: {
                translation: "ва",
                tones: [
                    { tone: "1-й", pinyin: "wā", ru: "ва", char: "挖", meaning: "копать ⛏️", example: "挖土 wā tǔ", example_ru: "копать землю", sound: "挖土" },
                    { tone: "2-й", pinyin: "wá", ru: "ва", char: "娃", meaning: "ребёнок 👶", example: "娃娃 wá wa", example_ru: "кукла", sound: "娃娃" },
                    { tone: "3-й", pinyin: "wǎ", ru: "ва", char: "瓦", meaning: "черепица 🧱", example: "瓦片 wǎ piàn", example_ru: "черепица", sound: "瓦片" },
                    { tone: "4-й", pinyin: "wà", ru: "ва", char: "袜", meaning: "носок 🧦", example: "袜子 wà zi", example_ru: "носки", sound: "袜子" }
                ]
            },
            wan: {
                translation: "вань",
                tones: [
                    { tone: "1-й", pinyin: "wān", ru: "вань", char: "弯", meaning: "изогнутый 🤸", example: "弯曲 wān qū", example_ru: "изгибаться", sound: "弯曲" },
                    { tone: "2-й", pinyin: "wán", ru: "вань", char: "玩", meaning: "играть 🎮", example: "玩耍 wán shuǎ", example_ru: "играть", sound: "玩耍" },
                    { tone: "3-й", pinyin: "wǎn", ru: "вань", char: "晚", meaning: "вечер 🌆", example: "晚上 wǎn shang", example_ru: "вечер", sound: "晚上" },
                    { tone: "4-й", pinyin: "wàn", ru: "вань", char: "万", meaning: "десять тысяч 1️⃣0️⃣0️⃣0️⃣0️⃣", example: "一万 yī wàn", example_ru: "десять тысяч", sound: "一万" }
                ]
            },
            wang: {
                translation: "ван",
                tones: [
                    { tone: "2-й", pinyin: "wáng", ru: "ван", char: "王", meaning: "король 👑", example: "国王 guó wáng", example_ru: "король", sound: "国王" },
                    { tone: "3-й", pinyin: "wǎng", ru: "ван", char: "网", meaning: "сеть 🕸️", example: "网络 wǎng luò", example_ru: "интернет", sound: "网络" },
                    { tone: "4-й", pinyin: "wàng", ru: "ван", char: "忘", meaning: "забывать 😵", example: "忘记 wàng jì", example_ru: "забыть", sound: "忘记" }
                ]
            },
            wei: {
                translation: "вэй",
                tones: [
                    { tone: "1-й", pinyin: "wēi", ru: "вей", char: "微", meaning: "маленький 🔬", example: "微笑 wēi xiào", example_ru: "улыбаться", sound: "微笑" },
                    { tone: "2-й", pinyin: "wéi", ru: "вей", char: "为", meaning: "делать 🛠️", example: "行为 xíng wéi", example_ru: "поведение", sound: "行为" },
                    { tone: "3-й", pinyin: "wěi", ru: "вей", char: "伟", meaning: "великий 🌟", example: "伟大 wěi dà", example_ru: "великий", sound: "伟大" },
                    { tone: "4-й", pinyin: "wèi", ru: "вей", char: "为", meaning: "для 🎁", example: "为了 wèi le", example_ru: "для того чтобы", sound: "为了" }
                ]
            },
            wen: {
                translation: "вэнь",
                tones: [
                    { tone: "1-й", pinyin: "wēn", ru: "вэнь", char: "温", meaning: "тёплый 🌡️", example: "温暖 wēn nuǎn", example_ru: "тёплый", sound: "温暖" },
                    { tone: "2-й", pinyin: "wén", ru: "вэнь", char: "文", meaning: "письменность 📝", example: "中文 zhōng wén", example_ru: "китайский язык", sound: "中文" },
                    { tone: "3-й", pinyin: "wěn", ru: "вэнь", char: "稳", meaning: "стабильный ⚖️", example: "稳定 wěn dìng", example_ru: "стабильный", sound: "稳定" },
                    { tone: "4-й", pinyin: "wèn", ru: "вэнь", char: "问", meaning: "спрашивать ❓", example: "问题 wèn tí", example_ru: "вопрос", sound: "问题" }
                ]
            },
            weng: {
                translation: "вэн",
                tones: [
                    { tone: "1-й", pinyin: "wēng", ru: "вэн", char: "翁", meaning: "старик 🧓", example: "老翁 lǎo wēng", example_ru: "старик", sound: "老翁" },
                    { tone: "4-й", pinyin: "wèng", ru: "вэн", char: "瓮", meaning: "кувшин 🏺", example: "水瓮 shuǐ wèng", example_ru: "кувшин", sound: "水瓮" }
                ]
            },
            wo: {
                translation: "во",
                tones: [
                    { tone: "1-й", pinyin: "wō", ru: "во", char: "窝", meaning: "гнездо 🪹", example: "鸟窝 niǎo wō", example_ru: "гнездо", sound: "鸟窝" },
                    { tone: "3-й", pinyin: "wǒ", ru: "во", char: "我", meaning: "я 👤", example: "我们 wǒ men", example_ru: "мы", sound: "我们" },
                    { tone: "4-й", pinyin: "wò", ru: "во", char: "卧", meaning: "лежать 🛌", example: "卧室 wò shì", example_ru: "спальня", sound: "卧室" }
                ]
            },
            wu: {
                translation: "у",
                tones: [
                    { tone: "1-й", pinyin: "wū", ru: "у", char: "屋", meaning: "комната 🏠", example: "屋子 wū zi", example_ru: "комната", sound: "屋子" },
                    { tone: "2-й", pinyin: "wú", ru: "у", char: "无", meaning: "нет ❌", example: "没有 méi yǒu", example_ru: "нет", sound: "没有" },
                    { tone: "3-й", pinyin: "wǔ", ru: "у", char: "五", meaning: "пять 5️⃣", example: "五个 wǔ gè", example_ru: "пять", sound: "五个" },
                    { tone: "4-й", pinyin: "wù", ru: "у", char: "物", meaning: "вещь 📦", example: "物体 wù tǐ", example_ru: "предмет", sound: "物体" }
                ]
            }
        }
    },

    // ==================== Ø (НУЛЕВАЯ ИНИЦИАЛЬ / ЧИСТЫЕ ФИНАЛИ) ====================
    "Ø": {
        desc: "Ø — нулевая инициаль (слог начинается с гласной)",
        ru_sound: "чистая гласная, без согласной в начале",
        articulation: "🗣️ Голосовые связки работают сразу, без преграды во рту",
        sound: "ā",
        syllables: {
            a: {
                translation: "а",
                tones: [
                    { tone: "1-й", pinyin: "ā", ru: "а", char: "啊", meaning: "ах! 😮", example: "啊哈 ā hā", example_ru: "ага!", sound: "啊哈" },
                    { tone: "2-й", pinyin: "á", ru: "а", char: "啊", meaning: "что? 🤔", example: "啊 á", example_ru: "а?", sound: "啊" },
                    { tone: "3-й", pinyin: "ǎ", ru: "а", char: "啊", meaning: "хм...", example: "啊 ǎ", example_ru: "хм...", sound: "啊" },
                    { tone: "4-й", pinyin: "à", ru: "а", char: "啊", meaning: "ох! 😧", example: "啊 à", example_ru: "ой!", sound: "啊" }
                ]
            },
            ai: {
                translation: "ай",
                tones: [
                    { tone: "1-й", pinyin: "āi", ru: "ай", char: "哀", meaning: "печаль 😢", example: "悲哀 bēi āi", example_ru: "печаль", sound: "悲哀" },
                    { tone: "2-й", pinyin: "ái", ru: "ай", char: "挨", meaning: "терпеть 😣", example: "挨打 ái dǎ", example_ru: "удар", sound: "挨打" },
                    { tone: "3-й", pinyin: "ǎi", ru: "ай", char: "矮", meaning: "низкий 📏", example: "矮人 ǎi rén", example_ru: "карлик", sound: "矮人" },
                    { tone: "4-й", pinyin: "ài", ru: "ай", char: "爱", meaning: "любить ❤️", example: "爱情 ài qíng", example_ru: "любовь", sound: "爱情" }
                ]
            },
            an: {
                translation: "ань",
                tones: [
                    { tone: "1-й", pinyin: "ān", ru: "ань", char: "安", meaning: "спокойный 😌", example: "安全 ān quán", example_ru: "безопасность", sound: "安全" },
                    { tone: "2-й", pinyin: "án", ru: "ань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "ǎn", ru: "ань", char: "俺", meaning: "я", example: "俺们 ǎn men", example_ru: "мы", sound: "俺们" },
                    { tone: "4-й", pinyin: "àn", ru: "ань", char: "暗", meaning: "тёмный 🌑", example: "黑暗 hēi àn", example_ru: "темнота", sound: "黑暗" }
                ]
            },
            ang: {
                translation: "ан",
                tones: [
                    { tone: "1-й", pinyin: "āng", ru: "ан", char: "肮", meaning: "грязный", example: "肮脏 āng zāng", example_ru: "грязный", sound: "肮脏" },
                    { tone: "2-й", pinyin: "áng", ru: "ан", char: "昂", meaning: "гордый 🦁", example: "昂贵 áng guì", example_ru: "дорогой", sound: "昂贵" },
                    { tone: "3-й", pinyin: "ǎng", ru: "ан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "4-й", pinyin: "àng", ru: "ан", char: "盎", meaning: "чаша", example: "盎然 àng rán", example_ru: "полный жизни", sound: "盎然" }
                ]
            },
            ao: {
                translation: "ао",
                tones: [
                    { tone: "1-й", pinyin: "āo", ru: "ао", char: "凹", meaning: "впадина 🕳️", example: "凹陷 āo xiàn", example_ru: "углубление", sound: "凹陷" },
                    { tone: "2-й", pinyin: "áo", ru: "ао", char: "熬", meaning: "варить", example: "熬粥 áo zhōu", example_ru: "каша", sound: "熬粥" },
                    { tone: "3-й", pinyin: "ǎo", ru: "ао", char: "袄", meaning: "куртка 🧥", example: "棉袄 mián ǎo", example_ru: "ватник", sound: "棉袄" },
                    { tone: "4-й", pinyin: "ào", ru: "ао", char: "奥", meaning: "тайна 🔮", example: "奥运 ào yùn", example_ru: "Олимпиада", sound: "奥运" }
                ]
            },
            e: {
                translation: "э",
                tones: [
                    { tone: "1-й", pinyin: "ē", ru: "э", char: "婀", meaning: "грациозная", example: "婀娜 ē nuó", example_ru: "изящная", sound: "婀娜" },
                    { tone: "2-й", pinyin: "é", ru: "э", char: "鹅", meaning: "гусь 🦢", example: "天鹅 tiān é", example_ru: "лебедь", sound: "天鹅" },
                    { tone: "3-й", pinyin: "ě", ru: "э", char: "恶", meaning: "злой", example: "恶心 ě xīn", example_ru: "тошнота", sound: "恶心" },
                    { tone: "4-й", pinyin: "è", ru: "э", char: "饿", meaning: "голодный 🍔", example: "饿了 è le", example_ru: "голоден", sound: "饿了" }
                ]
            },
            ei: {
                translation: "эй",
                tones: [
                    { tone: "1-й", pinyin: "ēi", ru: "эй", char: "诶", meaning: "эй!", example: "诶 ēi", example_ru: "эй!", sound: "诶" },
                    { tone: "2-й", pinyin: "éi", ru: "эй", char: "诶", meaning: "а?", example: "诶 éi", example_ru: "а?", sound: "诶" },
                    { tone: "3-й", pinyin: "ěi", ru: "эй", char: "诶", meaning: "хм...", example: "诶 ěi", example_ru: "хм...", sound: "诶" },
                    { tone: "4-й", pinyin: "èi", ru: "эй", char: "诶", meaning: "ладно", example: "诶 èi", example_ru: "ладно!", sound: "诶" }
                ]
            },
            en: {
                translation: "энь",
                tones: [
                    { tone: "1-й", pinyin: "ēn", ru: "энь", char: "恩", meaning: "милость 🙏", example: "感恩 gǎn ēn", example_ru: "благодарность", sound: "感恩" },
                    { tone: "2-й", pinyin: "én", ru: "энь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "ěn", ru: "энь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "4-й", pinyin: "èn", ru: "энь", char: "摁", meaning: "нажимать 👆", example: "摁住 èn zhù", example_ru: "нажать", sound: "摁住" }
                ]
            },
            er: {
                translation: "эр",
                tones: [
                    { tone: "1-й", pinyin: "ēr", ru: "эр", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "2-й", pinyin: "ér", ru: "эр", char: "儿", meaning: "ребёнок 👶", example: "儿子 ér zi", example_ru: "сын", sound: "儿子" },
                    { tone: "3-й", pinyin: "ěr", ru: "эр", char: "耳", meaning: "ухо 👂", example: "耳朵 ěr duo", example_ru: "ухо", sound: "耳朵" },
                    { tone: "4-й", pinyin: "èr", ru: "эр", char: "二", meaning: "два 2️⃣", example: "二月 èr yuè", example_ru: "февраль", sound: "二月" }
                ]
            },
            o: {
                translation: "о",
                tones: [
                    { tone: "1-й", pinyin: "ō", ru: "о", char: "哦", meaning: "ох!", example: "哦 ō", example_ru: "ох!", sound: "哦" },
                    { tone: "2-й", pinyin: "ó", ru: "о", char: "哦", meaning: "вот как?", example: "哦 ó", example_ru: "как?", sound: "哦" },
                    { tone: "3-й", pinyin: "ǒ", ru: "о", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "4-й", pinyin: "ò", ru: "о", char: "哦", meaning: "понятно!", example: "哦 ò", example_ru: "понятно!", sound: "哦" }
                ]
            },
            ou: {
                translation: "оу",
                tones: [
                    { tone: "1-й", pinyin: "ōu", ru: "оу", char: "欧", meaning: "Европа 🇪🇺", example: "欧洲 ōu zhōu", example_ru: "Европа", sound: "欧洲" },
                    { tone: "2-й", pinyin: "óu", ru: "оу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "ǒu", ru: "оу", char: "偶", meaning: "пара 👫", example: "偶然 ǒu rán", example_ru: "случайно", sound: "偶然" },
                    { tone: "4-й", pinyin: "òu", ru: "оу", char: "沤", meaning: "мочить 💧", example: "沤肥 òu féi", example_ru: "компост", sound: "沤肥" }
                ]
            }
        }
    },

    // ==================== HOM ====================
    "HOM": {
        desc: "Омонимы — одинаковый звук+тон, разные иероглифы",
        ru_sound: "дополнительные иероглифы к уже имеющимся",
        articulation: "",
        sound: "",
        syllables: {
            ba: {
                translation: "ба",
                tones: [
                    { tone: "1-й", pinyin: "bā", ru: "ба", char: "巴", meaning: "бар 🍸", example: "酒吧 jiǔ bā", example_ru: "бар", sound: "酒吧" },
                    { tone: "4-й", pinyin: "bà", ru: "ба", char: "霸", meaning: "гегемон 👑", example: "霸王 bà wáng", example_ru: "деспот", sound: "霸王" }
                ]
            },
            shi: {
                translation: "ши",
                tones: [
                    { tone: "4-й", pinyin: "shì", ru: "ши", char: "事", meaning: "дело 📋", example: "事情 shì qíng", example_ru: "дело", sound: "事情" }
                ]
            },
            ji: {
                translation: "цзи",
                tones: [
                    { tone: "1-й", pinyin: "jī", ru: "цзи", char: "鸡", meaning: "курица 🐔", example: "鸡蛋 jī dàn", example_ru: "яйцо", sound: "鸡蛋" },
                    { tone: "4-й", pinyin: "jì", ru: "цзи", char: "季", meaning: "сезон 🌸", example: "季节 jì jié", example_ru: "сезон", sound: "季节" }
                ]
            },
            li: {
                translation: "ли",
                tones: [
                    { tone: "4-й", pinyin: "lì", ru: "ли", char: "立", meaning: "стоять 🧍", example: "立刻 lì kè", example_ru: "сразу", sound: "立刻" }
                ]
            },
            yi: {
                translation: "и",
                tones: [
                    { tone: "4-й", pinyin: "yì", ru: "и", char: "义", meaning: "долг ⚖️", example: "意义 yì yì", example_ru: "смысл", sound: "意义" }
                ]
            },
            yu: {
                translation: "юй",
                tones: [
                    { tone: "4-й", pinyin: "yù", ru: "юй", char: "遇", meaning: "встречать 🤝", example: "遇到 yù dào", example_ru: "встретить", sound: "遇到" }
                ]
            },
            zuo: {
                translation: "цзо",
                tones: [
                    { tone: "4-й", pinyin: "zuò", ru: "цзо", char: "做", meaning: "делать 🔧", example: "做饭 zuò fàn", example_ru: "готовить", sound: "做饭" }
                ]
            },
            he: {
                translation: "хэ",
                tones: [
                    { tone: "2-й", pinyin: "hé", ru: "хэ", char: "河", meaning: "река 🏞️", example: "河流 hé liú", example_ru: "река", sound: "河流" }
                ]
            },
            hua: {
                translation: "хуа",
                tones: [
                    { tone: "4-й", pinyin: "huà", ru: "хуа", char: "画", meaning: "рисовать 🎨", example: "画画 huà huà", example_ru: "рисовать", sound: "画画" }
                ]
            },
            jia: {
                translation: "цзя",
                tones: [
                    { tone: "1-й", pinyin: "jiā", ru: "цзя", char: "加", meaning: "добавлять ➕", example: "增加 zēng jiā", example_ru: "увеличить", sound: "增加" }
                ]
            },
            jian: {
                translation: "цзянь",
                tones: [
                    { tone: "4-й", pinyin: "jiàn", ru: "цзянь", char: "件", meaning: "штука 🔢", example: "一件 yī jiàn", example_ru: "одна штука", sound: "一件" }
                ]
            },
            jiu: {
                translation: "цзю",
                tones: [
                    { tone: "3-й", pinyin: "jiǔ", ru: "цзю", char: "久", meaning: "долгий ⏳", example: "好久 hǎo jiǔ", example_ru: "давно", sound: "好久" }
                ]
            },
            qian: {
                translation: "цянь",
                tones: [
                    { tone: "2-й", pinyin: "qián", ru: "цянь", char: "前", meaning: "перед ⬅️", example: "前面 qián miàn", example_ru: "впереди", sound: "前面" }
                ]
            },
            qing: {
                translation: "цин",
                tones: [
                    { tone: "1-й", pinyin: "qīng", ru: "цин", char: "青", meaning: "сине-зелёный 🔵", example: "青年 qīng nián", example_ru: "молодёжь", sound: "青年" }
                ]
            },
            xi: {
                translation: "си",
                tones: [
                    { tone: "1-й", pinyin: "xī", ru: "си", char: "希", meaning: "надеяться 🙏", example: "希望 xī wàng", example_ru: "надежда", sound: "希望" }
                ]
            },
            xin: {
                translation: "синь",
                tones: [
                    { tone: "1-й", pinyin: "xīn", ru: "синь", char: "新", meaning: "новый ✨", example: "新年 xīn nián", example_ru: "новый год", sound: "新年" }
                ]
            },
            zhi: {
                translation: "чжи",
                tones: [
                    { tone: "4-й", pinyin: "zhì", ru: "чжи", char: "制", meaning: "изготавливать 🏭", example: "制造 zhì zào", example_ru: "производство", sound: "制造" }
                ]
            },
            shu: {
                translation: "шу",
                tones: [
                    { tone: "4-й", pinyin: "shù", ru: "шу", char: "数", meaning: "число 🔢", example: "数学 shù xué", example_ru: "математика", sound: "数学" }
                ]
            },
            wu: {
                translation: "у",
                tones: [
                    { tone: "4-й", pinyin: "wù", ru: "у", char: "误", meaning: "ошибка ❌", example: "错误 cuò wù", example_ru: "ошибка", sound: "错误" }
                ]
            },
            mu: {
                translation: "му",
                tones: [
                    { tone: "4-й", pinyin: "mù", ru: "му", char: "目", meaning: "глаз 👁️", example: "目光 mù guāng", example_ru: "взгляд", sound: "目光" }
                ]
            },
            mo: {
                translation: "мо",
                tones: [
                    { tone: "4-й", pinyin: "mò", ru: "мо", char: "墨", meaning: "чернила 🖋️", example: "墨水 mò shuǐ", example_ru: "чернила", sound: "墨水" }
                ]
            },
            fu: {
                translation: "фу",
                tones: [
                    { tone: "4-й", pinyin: "fù", ru: "фу", char: "附", meaning: "прилагать 📎", example: "附近 fù jìn", example_ru: "рядом", sound: "附近" }
                ]
            },
            nan: {
                translation: "нань",
                tones: [
                    { tone: "2-й", pinyin: "nán", ru: "нань", char: "南", meaning: "юг 🧭", example: "南方 nán fāng", example_ru: "юг", sound: "南方" }
                ]
            },
            bei: {
                translation: "бэй",
                tones: [
                    { tone: "4-й", pinyin: "bèi", ru: "бэй", char: "备", meaning: "готовить 📦", example: "准备 zhǔn bèi", example_ru: "подготовка", sound: "准备" }
                ]
            },
            di: {
                translation: "ди",
                tones: [
                    { tone: "4-й", pinyin: "dì", ru: "ди", char: "第", meaning: "номер 🔢", example: "第一 dì yī", example_ru: "первый", sound: "第一" }
                ]
            },
            gong: {
                translation: "гун",
                tones: [
                    { tone: "1-й", pinyin: "gōng", ru: "гун", char: "功", meaning: "заслуга 🏆", example: "成功 chéng gōng", example_ru: "успех", sound: "成功" }
                ]
            }
        }
    },

    // ==================== S ====================
    s: {
        desc: "s [s] — как русская «с»",
        ru_sound: "с (как в слове «сон», язык у нижних зубов)",
        articulation: "👅 Кончик языка у нижних зубов. Воздух проходит через желобок.",
        sound: "sī",
        syllables: {
            si: { 
                translation: "сы",
                tones: [
                    { tone: "1-й", pinyin: "sī", ru: "сы", char: "思", meaning: "думать 🤔", example: "思考 sī kǎo", example_ru: "размышлять", sound: "思考" },
                    { tone: "2-й", pinyin: "sí", ru: "сы", char: "死", meaning: "смерть 💀", example: "死人 sǐ rén", example_ru: "мёртвый", sound: "死人" },
                    { tone: "3-й", pinyin: "sǐ", ru: "сы", char: "死", meaning: "смерть", example: "死亡 sǐ wáng", example_ru: "смерть", sound: "死亡" },
                    { tone: "4-й", pinyin: "sì", ru: "сы", char: "四", meaning: "четыре 4️⃣", example: "四个 sì ge", example_ru: "четыре", sound: "四个" }
                ]
            },
            sa: { 
                translation: "са",
                tones: [
                    { tone: "1-й", pinyin: "sā", ru: "са", char: "撒", meaning: "бросать 🎲", example: "撒网 sā wǎng", example_ru: "забрасывать сеть", sound: "撒网" },
                    { tone: "2-й", pinyin: "sá", ru: "са", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "sǎ", ru: "са", char: "洒", meaning: "лить 💧", example: "洒水 sǎ shuǐ", example_ru: "поливать", sound: "洒水" },
                    { tone: "4-й", pinyin: "sà", ru: "са", char: "萨", meaning: "Будда 🧘", example: "萨满 sà mǎn", example_ru: "шаман", sound: "萨满" }
                ]
            },
            se: { 
                translation: "сэ",
                tones: [
                    { tone: "1-й", pinyin: "sē", ru: "сэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "2-й", pinyin: "sé", ru: "сэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "sě", ru: "сэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "4-й", pinyin: "sè", ru: "сэ", char: "色", meaning: "цвет 🎨", example: "颜色 yán sè", example_ru: "цвет", sound: "颜色" }
                ]
            },
            sai: { 
                translation: "сай",
                tones: [
                    { tone: "1-й", pinyin: "sāi", ru: "сай", char: "塞", meaning: "пробка 🚗", example: "塞车 sāi chē", example_ru: "пробка", sound: "塞车" },
                    { tone: "2-й", pinyin: "sái", ru: "сай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "sǎi", ru: "сай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "4-й", pinyin: "sài", ru: "сай", char: "赛", meaning: "соревнование 🏁", example: "比赛 bǐ sài", example_ru: "соревнование", sound: "比赛" }
                ]
            },
            sao: { 
                translation: "сао",
                tones: [
                    { tone: "1-й", pinyin: "sāo", ru: "сао", char: "骚", meaning: "беспокоить 😤", example: "骚动 sāo dòng", example_ru: "волнение", sound: "骚动" },
                    { tone: "2-й", pinyin: "sáo", ru: "сао", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "sǎo", ru: "сао", char: "扫", meaning: "мести 🧹", example: "扫地 sǎo dì", example_ru: "подметать", sound: "扫地" },
                    { tone: "4-й", pinyin: "sào", ru: "сао", char: "臊", meaning: "стыд 😳", example: "害臊 hài sào", example_ru: "стыдиться", sound: "害臊" }
                ]
            },
            san: { 
                translation: "сань",
                tones: [
                    { tone: "1-й", pinyin: "sān", ru: "сань", char: "三", meaning: "три 3️⃣", example: "三个 sān ge", example_ru: "три", sound: "三个" },
                    { tone: "2-й", pinyin: "sán", ru: "сань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "sǎn", ru: "сань", char: "伞", meaning: "зонт ☂️", example: "雨伞 yǔ sǎn", example_ru: "зонт", sound: "雨伞" },
                    { tone: "4-й", pinyin: "sàn", ru: "сань", char: "散", meaning: "расходиться 🚶", example: "散开 sàn kāi", example_ru: "расходиться", sound: "散开" }
                ]
            },
            sang: { 
                translation: "сан",
                tones: [
                    { tone: "1-й", pinyin: "sāng", ru: "сан", char: "桑", meaning: "тутовник 🌳", example: "桑树 sāng shù", example_ru: "тутовое дерево", sound: "桑树" },
                    { tone: "2-й", pinyin: "sáng", ru: "сан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "sǎng", ru: "сан", char: "嗓", meaning: "горло 🗣️", example: "嗓子 sǎng zi", example_ru: "голос", sound: "嗓子" },
                    { tone: "4-й", pinyin: "sàng", ru: "сан", char: "丧", meaning: "терять 💔", example: "丧失 sàng shī", example_ru: "терять", sound: "丧失" }
                ]
            },
            song: { 
                translation: "сун",
                tones: [
                    { tone: "1-й", pinyin: "sōng", ru: "сун", char: "松", meaning: "сосна 🌲", example: "松树 sōng shù", example_ru: "сосна", sound: "松树" },
                    { tone: "2-й", pinyin: "sóng", ru: "сун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "sǒng", ru: "сун", char: "耸", meaning: "поднимать ⬆️", example: "耸立 sǒng lì", example_ru: "возвышаться", sound: "耸立" },
                    { tone: "4-й", pinyin: "sòng", ru: "сун", char: "送", meaning: "отправлять 📤", example: "送行 sòng xíng", example_ru: "провожать", sound: "送行" }
                ]
            },
            sou: { 
                translation: "соу",
                tones: [
                    { tone: "1-й", pinyin: "sōu", ru: "соу", char: "搜", meaning: "искать 🔍", example: "搜索 sōu suǒ", example_ru: "поиск", sound: "搜索" },
                    { tone: "2-й", pinyin: "sóu", ru: "соу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "sǒu", ru: "соу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "4-й", pinyin: "sòu", ru: "соу", char: "嗽", meaning: "кашлять 🤧", example: "咳嗽 ké sòu", example_ru: "кашель", sound: "咳嗽" }
                ]
            },
            su: { 
                translation: "су",
                tones: [
                    { tone: "1-й", pinyin: "sū", ru: "су", char: "苏", meaning: "Су 📍", example: "苏州 Sū zhōu", example_ru: "Сучжоу", sound: "苏州" },
                    { tone: "2-й", pinyin: "sú", ru: "су", char: "俗", meaning: "вульгарный 🤢", example: "俗气 sú qì", example_ru: "вульгарный", sound: "俗气" },
                    { tone: "3-й", pinyin: "sǔ", ru: "су", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "4-й", pinyin: "sù", ru: "су", char: "速", meaning: "скорость ⚡", example: "速度 sù dù", example_ru: "скорость", sound: "速度" }
                ]
            },
            suo: { 
                translation: "со",
                tones: [
                    { tone: "1-й", pinyin: "suō", ru: "со", char: "缩", meaning: "сжимать 📦", example: "缩小 suō xiǎo", example_ru: "уменьшать", sound: "缩小" },
                    { tone: "2-й", pinyin: "suó", ru: "со", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "suǒ", ru: "со", char: "所", meaning: "место 📍", example: "所以 suǒ yǐ", example_ru: "поэтому", sound: "所以" },
                    { tone: "4-й", pinyin: "suò", ru: "со", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" }
                ]
            },
            sui: { 
                translation: "суй",
                tones: [
                    { tone: "1-й", pinyin: "suī", ru: "суй", char: "虽", meaning: "хотя 🤔", example: "虽然 suī rán", example_ru: "хотя", sound: "虽然" },
                    { tone: "2-й", pinyin: "suí", ru: "суй", char: "随", meaning: "следовать 🚶", example: "随便 suí biàn", example_ru: "произвольный", sound: "随便" },
                    { tone: "3-й", pinyin: "suǐ", ru: "суй", char: "髓", meaning: "костный мозг 🦴", example: "骨髓 gǔ suǐ", example_ru: "костный мозг", sound: "骨髓" },
                    { tone: "4-й", pinyin: "suì", ru: "суй", char: "岁", meaning: "год 🎂", example: "几岁 jǐ suì", example_ru: "сколько лет", sound: "几岁" }
                ]
            },
            suan: { 
                translation: "суань",
                tones: [
                    { tone: "1-й", pinyin: "suān", ru: "суань", char: "酸", meaning: "кислый 🍋", example: "酸味 suān wèi", example_ru: "кислый вкус", sound: "酸味" },
                    { tone: "2-й", pinyin: "suán", ru: "суань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "suǎn", ru: "суань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "4-й", pinyin: "suàn", ru: "суань", char: "算", meaning: "считать 🧮", example: "算了 suàn le", example_ru: "ладно", sound: "算了" }
                ]
            },
            shu_loss: { 
    translation: "шу",
    tones: [
        { tone: "1-й", pinyin: "shū", ru: "шу", char: "输", meaning: "проигрывать 😞", example: "输了 shū le", example_ru: "проиграл", sound: "输了" },
        { tone: "2-й", pinyin: "shú", ru: "шу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
        { tone: "3-й", pinyin: "shǔ", ru: "шу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
        { tone: "4-й", pinyin: "shù", ru: "шу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" }
    ]
},
            shu_comfort: { 
    translation: "шу",
    tones: [
        { tone: "1-й", pinyin: "shū", ru: "шу", char: "舒", meaning: "комфортный 😌", example: "舒服 shū fu", example_ru: "комфортно", sound: "舒服" },
        { tone: "2-й", pinyin: "shú", ru: "шу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
        { tone: "3-й", pinyin: "shǔ", ru: "шу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
        { tone: "4-й", pinyin: "shù", ru: "шу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" }
    ]
},shu_cooked: { 
    translation: "шу",
    tones: [
        { tone: "1-й", pinyin: "shū", ru: "шу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
        { tone: "2-й", pinyin: "shú", ru: "шу", char: "熟", meaning: "спелый, готовый 🍳", example: "熟了 shú le", example_ru: "готово", sound: "熟了" },
        { tone: "3-й", pinyin: "shǔ", ru: "шу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
        { tone: "4-й", pinyin: "shù", ru: "шу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" }
    ]
},
  shu_bundle: { 
    translation: "шу",
    tones: [
        { tone: "1-й", pinyin: "shū", ru: "шу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
        { tone: "2-й", pinyin: "shú", ru: "шу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
        { tone: "3-й", pinyin: "shǔ", ru: "шу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
        { tone: "4-й", pinyin: "shù", ru: "шу", char: "束", meaning: "связывать, пучок 🎀", example: "结束 jié shù", example_ru: "заканчивать", sound: "结束" }
    ]
},     
    chuan_river: { 
    translation: "чуань",
    tones: [
        { tone: "1-й", pinyin: "chuān", ru: "чуань", char: "川", meaning: "река 🌊", example: "四川 Sì chuān", example_ru: "Сычуань", sound: "四川" }
    ]
},
    qi_air: { 
    translation: "ци",
    tones: [
        { tone: "4-й", pinyin: "qì", ru: "ци", char: "气", meaning: "воздух, энергия 🌬️", example: "空气 kōng qì", example_ru: "воздух", sound: "空气" }
    ]
},
        qi_tool: { 
    translation: "ци",
    tones: [
        { tone: "4-й", pinyin: "qì", ru: "ци", char: "器", meaning: "инструмент, орган 🔧", example: "器官 qì guān", example_ru: "орган", sound: "器官" }
    ]
},
    chao_nest: { 
    translation: "чао",
    tones: [
        { tone: "2-й", pinyin: "cháo", ru: "чао", char: "巢", meaning: "гнездо 🪹", example: "鸟巢 niǎo cháo", example_ru: "птичье гнездо", sound: "鸟巢" }
    ]
},
    pin_product: { 
    translation: "пинь",
    tones: [
        { tone: "3-й", pinyin: "pǐn", ru: "пинь", char: "品", meaning: "продукт, товар 📦", example: "商品 shāng pǐn", example_ru: "товар", sound: "商品" }
    ]
},
            be_shell: { 
    translation: "бэй",
    tones: [
        { tone: "4-й", pinyin: "bèi", ru: "бэй", char: "贝", meaning: "раковина, сокровище 🐚💰", example: "贝壳 bèi ké", example_ru: "ракушка", sound: "贝壳" }
    ]
},
    mei_eyebrow: { 
    translation: "мэй",
    tones: [
        { tone: "2-й", pinyin: "méi", ru: "мэй", char: "眉", meaning: "бровь 👁️", example: "眉毛 méi mao", example_ru: "бровь", sound: "眉毛" }
    ]
},
            zou_walk: { 
    translation: "цзоу",
    tones: [
        { tone: "3-й", pinyin: "zǒu", ru: "цзоу", char: "走", meaning: "идти, ходить 🚶", example: "走路 zǒu lù", example_ru: "идти", sound: "走路" }
    ]
},
pao_run: { 
    translation: "пао",
    tones: [
        { tone: "3-й", pinyin: "pǎo", ru: "пао", char: "跑", meaning: "бежать 🏃", example: "跑步 pǎo bù", example_ru: "бег", sound: "跑步" }
    ]
},
tiao_jump: { 
    translation: "тяо",
    tones: [
        { tone: "4-й", pinyin: "tiào", ru: "тяо", char: "跳", meaning: "прыгать 🦘", example: "跳舞 tiào wǔ", example_ru: "танцевать", sound: "跳舞" }
    ]
},
fei_fly: { 
    translation: "фэй",
    tones: [
        { tone: "1-й", pinyin: "fēi", ru: "фэй", char: "飞", meaning: "летать 🕊️", example: "飞机 fēi jī", example_ru: "самолёт", sound: "飞机" }
    ]
},
kai_open: { 
    translation: "кай",
    tones: [
        { tone: "1-й", pinyin: "kāi", ru: "кай", char: "开", meaning: "открывать 🚪", example: "开门 kāi mén", example_ru: "открыть дверь", sound: "开门" }
    ]
},
guan_close: { 
    translation: "гуань",
    tones: [
        { tone: "1-й", pinyin: "guān", ru: "гуань", char: "关", meaning: "закрывать 🚪", example: "关门 guān mén", example_ru: "закрыть дверь", sound: "关门" }
    ]
},
jin_enter: { 
    translation: "цзинь",
    tones: [
        { tone: "4-й", pinyin: "jìn", ru: "цзинь", char: "进", meaning: "входить 🚪", example: "进来 jìn lái", example_ru: "войти", sound: "进来" }
    ]
},
chu_exit: { 
    translation: "чу",
    tones: [
        { tone: "1-й", pinyin: "chū", ru: "чу", char: "出", meaning: "выходить 🚪", example: "出来 chū lái", example_ru: "выйти", sound: "出来" }
    ]
},
shang_up: { 
    translation: "шан",
    tones: [
        { tone: "4-й", pinyin: "shàng", ru: "шан", char: "上", meaning: "подниматься ⬆️", example: "上车 shàng chē", example_ru: "сесть в машину", sound: "上车" }
    ]
},
xia_down: { 
    translation: "ся",
    tones: [
        { tone: "4-й", pinyin: "xià", ru: "ся", char: "下", meaning: "спускаться ⬇️", example: "下车 xià chē", example_ru: "выйти из машины", sound: "下车" }
    ]
},
hui_return: { 
    translation: "хуй",
    tones: [
        { tone: "2-й", pinyin: "huí", ru: "хуй", char: "回", meaning: "возвращаться 🔙", example: "回家 huí jiā", example_ru: "вернуться домой", sound: "回家" }
    ]
},
lai_come: { 
    translation: "лай",
    tones: [
        { tone: "2-й", pinyin: "lái", ru: "лай", char: "来", meaning: "приходить 🚶", example: "来到 lái dào", example_ru: "прибыть", sound: "来到" }
    ]
},
qu_go: { 
    translation: "цюй",
    tones: [
        { tone: "4-й", pinyin: "qù", ru: "цюй", char: "去", meaning: "идти (туда) 🚶", example: "去学校 qù xué xiào", example_ru: "идти в школу", sound: "去学校" }
    ]
},
dao_arrive: { 
    translation: "дао",
    tones: [
        { tone: "4-й", pinyin: "dào", ru: "дао", char: "到", meaning: "прибывать 🎯", example: "到达 dào dá", example_ru: "достигать", sound: "到达" }
    ]
},
zhan_stand: { 
    translation: "чжань",
    tones: [
        { tone: "4-й", pinyin: "zhàn", ru: "чжань", char: "站", meaning: "стоять 🧍", example: "车站 chē zhàn", example_ru: "остановка", sound: "车站" }
    ]
},
zuo_sit: { 
    translation: "цзо",
    tones: [
        { tone: "4-й", pinyin: "zuò", ru: "цзо", char: "坐", meaning: "сидеть 🪑", example: "坐下 zuò xià", example_ru: "садиться", sound: "坐下" }
    ]
},
tang_lie: { 
    translation: "тан",
    tones: [
        { tone: "3-й", pinyin: "tǎng", ru: "тан", char: "躺", meaning: "лежать 🛌", example: "躺下 tǎng xià", example_ru: "лечь", sound: "躺下" }
    ]
},
shui_sleep: { 
    translation: "шуй",
    tones: [
        { tone: "4-й", pinyin: "shuì", ru: "шуй", char: "睡", meaning: "спать 😴", example: "睡觉 shuì jiào", example_ru: "спать", sound: "睡觉" }
    ]
},
xi_wash: { 
    translation: "си",
    tones: [
        { tone: "3-й", pinyin: "xǐ", ru: "си", char: "洗", meaning: "мыть 🧼", example: "洗手 xǐ shǒu", example_ru: "мыть руки", sound: "洗手" }
    ]
},
mai_buy: { 
    translation: "май",
    tones: [
        { tone: "3-й", pinyin: "mǎi", ru: "май", char: "买", meaning: "покупать 🛒", example: "买东西 mǎi dōng xi", example_ru: "покупать вещи", sound: "买东西" }
    ]
},
mai_sell: { 
    translation: "май",
    tones: [
        { tone: "4-й", pinyin: "mài", ru: "май", char: "卖", meaning: "продавать 💰", example: "卖东西 mài dōng xi", example_ru: "продавать вещи", sound: "卖东西" }
    ]
},
zhao_look: { 
    translation: "чжао",
    tones: [
        { tone: "3-й", pinyin: "zhǎo", ru: "чжао", char: "找", meaning: "искать 🔍", example: "找东西 zhǎo dōng xi", example_ru: "искать вещи", sound: "找东西" }
    ]
},
kan_see: { 
    translation: "кань",
    tones: [
        { tone: "4-й", pinyin: "kàn", ru: "кань", char: "看", meaning: "смотреть 👀", example: "看见 kàn jiàn", example_ru: "видеть", sound: "看见" }
    ]
},
ting_hear: { 
    translation: "тин",
    tones: [
        { tone: "1-й", pinyin: "tīng", ru: "тин", char: "听", meaning: "слушать 🎧", example: "听见 tīng jiàn", example_ru: "слышать", sound: "听见" }
    ]
},
shuo_speak: { 
    translation: "шуо",
    tones: [
        { tone: "1-й", pinyin: "shuō", ru: "шуо", char: "说", meaning: "говорить 🗣️", example: "说话 shuō huà", example_ru: "говорить", sound: "说话" }
    ]
},
wen_ask: { 
    translation: "вэнь",
    tones: [
        { tone: "4-й", pinyin: "wèn", ru: "вэнь", char: "问", meaning: "спрашивать ❓", example: "问题 wèn tí", example_ru: "вопрос", sound: "问题" }
    ]
},
jiao_call: { 
    translation: "цзяо",
    tones: [
        { tone: "4-й", pinyin: "jiào", ru: "цзяо", char: "叫", meaning: "звать 📢", example: "叫做 jiào zuò", example_ru: "называться", sound: "叫做" }
    ]
},
xie_write: { 
    translation: "се",
    tones: [
        { tone: "3-й", pinyin: "xiě", ru: "се", char: "写", meaning: "писать ✍️", example: "写字 xiě zì", example_ru: "писать", sound: "写字" }
    ]
},
du_read: { 
    translation: "ду",
    tones: [
        { tone: "2-й", pinyin: "dú", ru: "ду", char: "读", meaning: "читать 📖", example: "读书 dú shū", example_ru: "читать книгу", sound: "读书" }
    ]
},
xue_study: { 
    translation: "сюэ",
    tones: [
        { tone: "2-й", pinyin: "xué", ru: "сюэ", char: "学", meaning: "учиться 📚", example: "学习 xué xí", example_ru: "учиться", sound: "学习" }
    ]
},
jiao_teach: { 
    translation: "цзяо",
    tones: [
        { tone: "4-й", pinyin: "jiào", ru: "цзяо", char: "教", meaning: "учить, преподавать 👨‍🏫", example: "教学 jiào xué", example_ru: "преподавание", sound: "教学" }
    ]
},
          ta_she: { 
    translation: "та",
    tones: [
        { tone: "1-й", pinyin: "tā", ru: "та", char: "她", meaning: "она 👩", example: "她们 tā men", example_ru: "они (о женщинах)", sound: "她们" }
    ]
},
ta_it: { 
    translation: "та",
    tones: [
        { tone: "1-й", pinyin: "tā", ru: "та", char: "它", meaning: "оно 🐾", example: "它们 tā men", example_ru: "они (о предметах)", sound: "它们" }
    ]
},
nin_you: { 
    translation: "нинь",
    tones: [
        { tone: "2-й", pinyin: "nín", ru: "нинь", char: "您", meaning: "Вы (вежливо) 🙇", example: "您好 nín hǎo", example_ru: "здравствуйте", sound: "您好" }
    ]
},
zhe_this: { 
    translation: "чжэ",
    tones: [
        { tone: "4-й", pinyin: "zhè", ru: "чжэ", char: "这", meaning: "этот, эта, это 👆", example: "这里 zhè lǐ", example_ru: "здесь", sound: "这里" }
    ]
},
na_that: { 
    translation: "на",
    tones: [
        { tone: "4-й", pinyin: "nà", ru: "на", char: "那", meaning: "тот, та, то 👉", example: "那里 nà lǐ", example_ru: "там", sound: "那里" }
    ]
},
            gao_tall: { 
    translation: "гао",
    tones: [
        { tone: "1-й", pinyin: "gāo", ru: "гао", char: "高", meaning: "высокий 📈", example: "高兴 gāo xìng", example_ru: "радостный", sound: "高兴" }
    ]
},
xing_happy: { 
    translation: "син",
    tones: [
        { tone: "4-й", pinyin: "xìng", ru: "син", char: "兴", meaning: "радость, настроение 😊", example: "高兴 gāo xìng", example_ru: "радостный", sound: "高兴" }
    ]
},
piao_beautiful: { 
    translation: "пяо",
    tones: [
        { tone: "4-й", pinyin: "piào", ru: "пяо", char: "漂", meaning: "красивый ✨", example: "漂亮 piào liang", example_ru: "красивый", sound: "漂亮" }
    ]
},
liang_beautiful: { 
    translation: "лян",
    tones: [
        { tone: "4-й", pinyin: "liàng", ru: "лян", char: "亮", meaning: "красивый, яркий 💡", example: "漂亮 piào liang", example_ru: "красивый", sound: "漂亮" }
    ]
},
gan_clean: { 
    translation: "гань",
    tones: [
        { tone: "1-й", pinyin: "gān", ru: "гань", char: "干", meaning: "чистый 🌟", example: "干净 gān jìng", example_ru: "чистый", sound: "干净" }
    ]
},
jing_clean: { 
    translation: "цзин",
    tones: [
        { tone: "4-й", pinyin: "jìng", ru: "цзин", char: "净", meaning: "чистый 🧼", example: "干净 gān jìng", example_ru: "чистый", sound: "干净" }
    ]
},
lei_tired: { 
    translation: "лэй",
    tones: [
        { tone: "4-й", pinyin: "lèi", ru: "лэй", char: "累", meaning: "усталый 😩", example: "累了 lèi le", example_ru: "устал", sound: "累了" }
    ]
},
dui_correct: { 
    translation: "дуй",
    tones: [
        { tone: "4-й", pinyin: "duì", ru: "дуй", char: "对", meaning: "правильный ✅", example: "对错 duì cuò", example_ru: "правильно или неправильно", sound: "对错" }
    ]
},
cuo_wrong: { 
    translation: "цуо",
    tones: [
        { tone: "4-й", pinyin: "cuò", ru: "цуо", char: "错", meaning: "ошибочный ❌", example: "错误 cuò wù", example_ru: "ошибка", sound: "错误" }
    ]
},
            shan_mountain: { 
    translation: "шань",
    tones: [
        { tone: "1-й", pinyin: "shān", ru: "шань", char: "山", meaning: "гора ⛰️", example: "山上 shān shàng", example_ru: "на горе", sound: "山上" }
    ]
},
shi_stone: { 
    translation: "ши",
    tones: [
        { tone: "2-й", pinyin: "shí", ru: "ши", char: "石", meaning: "камень 🪨", example: "石头 shí tou", example_ru: "камень", sound: "石头" }
    ]
},
chuan_river: { 
    translation: "чуань",
    tones: [
        { tone: "1-й", pinyin: "chuān", ru: "чуань", char: "川", meaning: "река 🌊", example: "四川 Sì chuān", example_ru: "Сычуань", sound: "四川" }
    ]
},
hai_sea: { 
    translation: "хай",
    tones: [
        { tone: "3-й", pinyin: "hǎi", ru: "хай", char: "海", meaning: "море 🌊", example: "大海 dà hǎi", example_ru: "море", sound: "大海" }
    ]
},
tian_sky: { 
    translation: "тянь",
    tones: [
        { tone: "1-й", pinyin: "tiān", ru: "тянь", char: "天", meaning: "небо ☁️", example: "天空 tiān kōng", example_ru: "небо", sound: "天空" }
    ]
},
di_earth: { 
    translation: "ди",
    tones: [
        { tone: "4-й", pinyin: "dì", ru: "ди", char: "地", meaning: "земля 🌍", example: "地球 dì qiú", example_ru: "Земля", sound: "地球" }
    ]
},
mu_wood: { 
    translation: "му",
    tones: [
        { tone: "4-й", pinyin: "mù", ru: "му", char: "木", meaning: "дерево (материал) 🌳", example: "木头 mù tou", example_ru: "дерево", sound: "木头" }
    ]
},
lin_forest: { 
    translation: "линь",
    tones: [
        { tone: "2-й", pinyin: "lín", ru: "линь", char: "林", meaning: "лес 🌲", example: "森林 sēn lín", example_ru: "лес", sound: "森林" }
    ]
},
            de_possessive: { 
    translation: "дэ",
    tones: [
        { tone: "1-й", pinyin: "dē", ru: "дэ", char: "的", meaning: "частица принадлежности 🔤", example: "我的 wǒ de", example_ru: "мой", sound: "我的" }
    ]
},
de_adverbial: { 
    translation: "дэ",
    tones: [
        { tone: "4-й", pinyin: "dè", ru: "дэ", char: "地", meaning: "суффикс наречия", example: "慢慢地 màn màn de", example_ru: "медленно", sound: "慢慢地" }
    ]
},
de_complement: { 
    translation: "дэ",
    tones: [
        { tone: "2-й", pinyin: "dé", ru: "дэ", char: "得", meaning: "показатель степени", example: "跑得快 pǎo de kuài", example_ru: "быстро бегать", sound: "跑得快" }
    ]
},
le_past: { 
    translation: "лэ",
    tones: [
        { tone: "1-й", pinyin: "lē", ru: "лэ", char: "了", meaning: "частица прошедшего времени ⏰", example: "吃了 chī le", example_ru: "съел", sound: "吃了" }
    ]
},
            shenme_what: { 
    translation: "шэньмэ",
    tones: [
        { tone: "2-й", pinyin: "shén", ru: "шэнь", char: "什", meaning: "что ❓", example: "什么 shén me", example_ru: "что", sound: "什么" }
    ]
},
shenme_me: { 
    translation: "шэньмэ",
    tones: [
        { tone: "5-й", pinyin: "me", ru: "мэ", char: "么", meaning: "что (часть слова)", example: "什么 shén me", example_ru: "что", sound: "什么" }
    ]
},
weishenme_why: { 
    translation: "вэйшэньмэ",
    tones: [
        { tone: "4-й", pinyin: "wèi", ru: "вэй", char: "为", meaning: "почему (часть)", example: "为什么 wèi shén me", example_ru: "почему", sound: "为什么" }
    ]
},
zenme_how: { 
    translation: "цзэньмэ",
    tones: [
        { tone: "3-й", pinyin: "zěn", ru: "цзэнь", char: "怎", meaning: "как ❓", example: "怎么 zěn me", example_ru: "как", sound: "怎么" }
    ]
},
duoshao_howmany: { 
    translation: "дуошао",
    tones: [
        { tone: "1-й", pinyin: "duō", ru: "дуо", char: "多", meaning: "много 🔢", example: "多少 duō shǎo", example_ru: "сколько", sound: "多少" },
        { tone: "3-й", pinyin: "shǎo", ru: "шао", char: "少", meaning: "мало 🔢", example: "多少 duō shǎo", example_ru: "сколько", sound: "多少" }
    ]
},
zhidao_know: { 
    translation: "чжидао",
    tones: [
        { tone: "1-й", pinyin: "zhī", ru: "чжи", char: "知", meaning: "знать 🧠", example: "知道 zhī dào", example_ru: "знать", sound: "知道" },
        { tone: "4-й", pinyin: "dào", ru: "дао", char: "道", meaning: "путь, знать", example: "知道 zhī dào", example_ru: "знать", sound: "知道" }
    ]
},
juede_feel: { 
    translation: "цзюэдэ",
    tones: [
        { tone: "2-й", pinyin: "jué", ru: "цзюэ", char: "觉", meaning: "чувствовать, думать 💭", example: "觉得 jué de", example_ru: "думать", sound: "觉得" }
    ]
},
neng_can: { 
    translation: "нэн",
    tones: [
        { tone: "2-й", pinyin: "néng", ru: "нэн", char: "能", meaning: "мочь (физически) 💪", example: "能够 néng gòu", example_ru: "быть в состоянии", sound: "能够" }
    ]
},
haochi_delicious: { 
    translation: "хаочи",
    tones: [
        { tone: "3-й", pinyin: "hǎo", ru: "хао", char: "好", meaning: "хороший 👍", example: "好吃 hǎo chī", example_ru: "вкусный", sound: "好吃" },
        { tone: "1-й", pinyin: "chī", ru: "чи", char: "吃", meaning: "есть 🍜", example: "好吃 hǎo chī", example_ru: "вкусный", sound: "好吃" }
    ]
},
lei_tired: { 
    translation: "лэй",
    tones: [
        { tone: "4-й", pinyin: "lèi", ru: "лэй", char: "累", meaning: "усталый 😩", example: "累了 lèi le", example_ru: "устал", sound: "累了" }
    ]
},
jintian_today: { 
    translation: "цзиньтянь",
    tones: [
        { tone: "1-й", pinyin: "jīn", ru: "цзинь", char: "今", meaning: "сегодня 📅", example: "今天 jīn tiān", example_ru: "сегодня", sound: "今天" },
        { tone: "1-й", pinyin: "tiān", ru: "тянь", char: "天", meaning: "день, небо", example: "今天 jīn tiān", example_ru: "сегодня", sound: "今天" }
    ]
},
mingtian_tomorrow: { 
    translation: "минтянь",
    tones: [
        { tone: "2-й", pinyin: "míng", ru: "мин", char: "明", meaning: "завтра ☀️", example: "明天 míng tiān", example_ru: "завтра", sound: "明天" },
        { tone: "1-й", pinyin: "tiān", ru: "тянь", char: "天", meaning: "день, небо", example: "明天 míng tiān", example_ru: "завтра", sound: "明天" }
    ]
},
zuotian_yesterday: { 
    translation: "цзотянь",
    tones: [
        { tone: "2-й", pinyin: "zuó", ru: "цзо", char: "昨", meaning: "вчера 📆", example: "昨天 zuó tiān", example_ru: "вчера", sound: "昨天" },
        { tone: "1-й", pinyin: "tiān", ru: "тянь", char: "天", meaning: "день, небо", example: "昨天 zuó tiān", example_ru: "вчера", sound: "昨天" }
    ]
},
xianzai_now: { 
    translation: "сяньцзай",
    tones: [
        { tone: "4-й", pinyin: "xiàn", ru: "сянь", char: "现", meaning: "сейчас 🌟", example: "现在 xiàn zài", example_ru: "сейчас", sound: "现在" },
        { tone: "4-й", pinyin: "zài", ru: "цзай", char: "在", meaning: "быть в", example: "现在 xiàn zài", example_ru: "сейчас", sound: "现在" }
    ]
},
yinwei_because: { 
    translation: "иньвэй",
    tones: [
        { tone: "1-й", pinyin: "yīn", ru: "инь", char: "因", meaning: "потому что 🔄", example: "因为 yīn wèi", example_ru: "потому что", sound: "因为" },
        { tone: "4-й", pinyin: "wèi", ru: "вэй", char: "为", meaning: "потому что", example: "因为 yīn wèi", example_ru: "потому что", sound: "因为" }
    ]
},
suoyi_therefore: { 
    translation: "сои",
    tones: [
        { tone: "3-й", pinyin: "suǒ", ru: "со", char: "所", meaning: "поэтому 🎯", example: "所以 suǒ yǐ", example_ru: "поэтому", sound: "所以" },
        { tone: "3-й", pinyin: "yǐ", ru: "и", char: "以", meaning: "поэтому", example: "所以 suǒ yǐ", example_ru: "поэтому", sound: "所以" }
    ]
},
            he_and: { 
    translation: "хэ",
    tones: [
        { tone: "2-й", pinyin: "hé", ru: "хэ", char: "和", meaning: "и (соединяет слова) ➕", example: "我和你 wǒ hé nǐ", example_ru: "я и ты", sound: "我和你" }
    ]
},
danshi_but: { 
    translation: "даньши",
    tones: [
        { tone: "4-й", pinyin: "dàn", ru: "дань", char: "但", meaning: "но 🔄", example: "但是 dàn shì", example_ru: "но", sound: "但是" },
        { tone: "4-й", pinyin: "shì", ru: "ши", char: "是", meaning: "быть, есть", example: "但是 dàn shì", example_ru: "но", sound: "但是" }
    ]
},
suoyi_therefore: { 
    translation: "сои",
    tones: [
        { tone: "3-й", pinyin: "suǒ", ru: "со", char: "所", meaning: "поэтому 🎯", example: "所以 suǒ yǐ", example_ru: "поэтому", sound: "所以" },
        { tone: "3-й", pinyin: "yǐ", ru: "и", char: "以", meaning: "поэтому", example: "所以 suǒ yǐ", example_ru: "поэтому", sound: "所以" }
    ]
},
yinwei_because: { 
    translation: "иньвэй",
    tones: [
        { tone: "1-й", pinyin: "yīn", ru: "инь", char: "因", meaning: "потому что 🔄", example: "因为 yīn wèi", example_ru: "потому что", sound: "因为" },
        { tone: "4-й", pinyin: "wèi", ru: "вэй", char: "为", meaning: "потому что", example: "因为 yīn wèi", example_ru: "потому что", sound: "因为" }
    ]
},
ruguo_if: { 
    translation: "жуго",
    tones: [
        { tone: "2-й", pinyin: "rú", ru: "жу", char: "如", meaning: "если 🤔", example: "如果 rú guǒ", example_ru: "если", sound: "如果" },
        { tone: "3-й", pinyin: "guǒ", ru: "го", char: "果", meaning: "плод, результат", example: "如果 rú guǒ", example_ru: "если", sound: "如果" }
    ]
},
jiushi_just: { 
    translation: "цзюши",
    tones: [
        { tone: "4-й", pinyin: "jiù", ru: "цзю", char: "就", meaning: "именно, тогда ⏰", example: "就是 jiù shì", example_ru: "именно", sound: "就是" },
        { tone: "4-й", pinyin: "shì", ru: "ши", char: "是", meaning: "быть", example: "就是 jiù shì", example_ru: "именно", sound: "就是" }
    ]
},
huozhe_or: { 
    translation: "хочжэ",
    tones: [
        { tone: "4-й", pinyin: "huò", ru: "хо", char: "或", meaning: "или 🤷", example: "或者 huò zhě", example_ru: "или", sound: "或者" },
        { tone: "3-й", pinyin: "zhě", ru: "чжэ", char: "者", meaning: "тот, кто", example: "或者 huò zhě", example_ru: "или", sound: "或者" }
    ]
},
buguo_however: { 
    translation: "буго",
    tones: [
        { tone: "4-й", pinyin: "bù", ru: "бу", char: "不", meaning: "не", example: "不过 bù guò", example_ru: "однако", sound: "不过" },
        { tone: "4-й", pinyin: "guò", ru: "го", char: "过", meaning: "проходить", example: "不过 bù guò", example_ru: "однако", sound: "不过" }
    ]
},
suiran_although: { 
    translation: "суйжань",
    tones: [
        { tone: "1-й", pinyin: "suī", ru: "суй", char: "虽", meaning: "хотя 🌥️", example: "虽然 suī rán", example_ru: "хотя", sound: "虽然" },
        { tone: "2-й", pinyin: "rán", ru: "жань", char: "然", meaning: "так", example: "虽然 suī rán", example_ru: "хотя", sound: "虽然" }
    ]
},
erqie_moreover: { 
    translation: "эрце",
    tones: [
        { tone: "2-й", pinyin: "ér", ru: "эр", char: "而", meaning: "и, к тому же ➕", example: "而且 ér qiě", example_ru: "кроме того", sound: "而且" },
        { tone: "3-й", pinyin: "qiě", ru: "це", char: "且", meaning: "к тому же", example: "而且 ér qiě", example_ru: "кроме того", sound: "而且" }
    ]
},
le_particle: { 
    translation: "лэ",
    tones: [
        { tone: "1-й", pinyin: "lē", ru: "лэ", char: "了", meaning: "изменение ситуации / завершение действия", example: "下雨了 xià yǔ le", example_ru: "пошёл дождь", sound: "下雨了" }
    ]
},
zhe_particle: { 
    translation: "чжэ",
    tones: [
        { tone: "4-й", pinyin: "zhe", ru: "чжэ", char: "着", meaning: "действие в процессе", example: "看着 kàn zhe", example_ru: "смотреть (в данный момент)", sound: "看着" }
    ]
},
guo_particle: { 
    translation: "го",
    tones: [
        { tone: "4-й", pinyin: "guò", ru: "го", char: "过", meaning: "иметь опыт", example: "去过 qù guò", example_ru: "бывал", sound: "去过" }
    ]
},
ma_question: { 
    translation: "ма",
    tones: [
        { tone: "5-й", pinyin: "ma", ru: "ма", char: "吗", meaning: "вопрос да/нет ❓", example: "好吗 hǎo ma", example_ru: "хорошо?", sound: "好吗" }
    ]
},
ne_question: { 
    translation: "нэ",
    tones: [
        { tone: "5-й", pinyin: "ne", ru: "нэ", char: "呢", meaning: "а...? / где? / как?", example: "我呢 wǒ ne", example_ru: "а я?", sound: "我呢" }
    ]
},
ba_suggestion: { 
    translation: "ба",
    tones: [
        { tone: "5-й", pinyin: "ba", ru: "ба", char: "吧", meaning: "предложение / мягкое указание", example: "走吧 zǒu ba", example_ru: "пойдём", sound: "走吧" }
    ]
},
de_possessive: { 
    translation: "дэ",
    tones: [
        { tone: "5-й", pinyin: "de", ru: "дэ", char: "的", meaning: "принадлежность / определение", example: "我的 wǒ de", example_ru: "мой", sound: "我的" }
    ]
},
de_adverbial: { 
    translation: "дэ",
    tones: [
        { tone: "5-й", pinyin: "de", ru: "дэ", char: "地", meaning: "наречие", example: "慢慢地 màn màn de", example_ru: "медленно", sound: "慢慢地" }
    ]
},
de_complement: { 
    translation: "дэ",
    tones: [
        { tone: "2-й", pinyin: "dé", ru: "дэ", char: "得", meaning: "степень / возможность", example: "跑得快 pǎo de kuài", example_ru: "быстро бегает", sound: "跑得快" }
    ]
},
ge_measure: { 
    translation: "гэ",
    tones: [
        { tone: "4-й", pinyin: "gè", ru: "гэ", char: "个", meaning: "универсальное счётное слово 🔢", example: "一个人 yī gè rén", example_ru: "один человек", sound: "一个人" }
    ]
},
ben_measure: { 
    translation: "бэнь",
    tones: [
        { tone: "3-й", pinyin: "běn", ru: "бэнь", char: "本", meaning: "для книг 📚", example: "一本书 yī běn shū", example_ru: "одна книга", sound: "一本书" }
    ]
},
zhang_measure: { 
    translation: "чжан",
    tones: [
        { tone: "1-й", pinyin: "zhāng", ru: "чжан", char: "张", meaning: "для плоских предметов 📄", example: "一张纸 yī zhāng zhǐ", example_ru: "один лист бумаги", sound: "一张纸" }
    ]
},
tiao_measure: { 
    translation: "тяо",
    tones: [
        { tone: "2-й", pinyin: "tiáo", ru: "тяо", char: "条", meaning: "для длинных предметов 🐟", example: "一条鱼 yī tiáo yú", example_ru: "одна рыба", sound: "一条鱼" }
    ]
},
zhi_measure: { 
    translation: "чжи",
    tones: [
        { tone: "1-й", pinyin: "zhī", ru: "чжи", char: "只", meaning: "для животных 🐱", example: "一只猫 yī zhī māo", example_ru: "одна кошка", sound: "一只猫" }
    ]
},
liang_measure: { 
    translation: "лян",
    tones: [
        { tone: "4-й", pinyin: "liàng", ru: "лян", char: "辆", meaning: "для транспорта 🚗", example: "一辆车 yī liàng chē", example_ru: "одна машина", sound: "一辆车" }
    ]
},
jian_measure: { 
    translation: "цзянь",
    tones: [
        { tone: "4-й", pinyin: "jiàn", ru: "цзянь", char: "件", meaning: "для вещей, одежды 👕", example: "一件事 yī jiàn shì", example_ru: "одно дело", sound: "一件事" }
    ]
},
ci_measure: { 
    translation: "цы",
    tones: [
        { tone: "4-й", pinyin: "cì", ru: "цы", char: "次", meaning: "для количества действий 🔁", example: "一次 yī cì", example_ru: "один раз", sound: "一次" }
    ]
},
bei_measure: { 
    translation: "бэй",
    tones: [
        { tone: "1-й", pinyin: "bēi", ru: "бэй", char: "杯", meaning: "чашка, стакан 🥛", example: "一杯水 yī bēi shuǐ", example_ru: "стакан воды", sound: "一杯水" }
    ]
},
kuai_measure: { 
    translation: "куай",
    tones: [
        { tone: "4-й", pinyin: "kuài", ru: "куай", char: "块", meaning: "кусок, юань 🧩", example: "一块钱 yī kuài qián", example_ru: "один юань", sound: "一块钱" }
    ]
},
yijing_already: { 
    translation: "ицзин",
    tones: [
        { tone: "3-й", pinyin: "yǐ", ru: "и", char: "已", meaning: "уже ⏰", example: "已经 yǐ jīng", example_ru: "уже", sound: "已经" },
        { tone: "1-й", pinyin: "jīng", ru: "цзин", char: "经", meaning: "проходить", example: "已经 yǐ jīng", example_ru: "уже", sound: "已经" }
    ]
},
gang_cai: { 
    translation: "ганцай",
    tones: [
        { tone: "1-й", pinyin: "gāng", ru: "ган", char: "刚", meaning: "только что ⏱️", example: "刚才 gāng cái", example_ru: "только что", sound: "刚才" },
        { tone: "2-й", pinyin: "cái", ru: "цай", char: "才", meaning: "только", example: "刚才 gāng cái", example_ru: "только что", sound: "刚才" }
    ]
},
yizhi_always: { 
    translation: "ичжи",
    tones: [
        { tone: "1-й", pinyin: "yī", ru: "и", char: "一", meaning: "один", example: "一直 yī zhí", example_ru: "всё время", sound: "一直" },
        { tone: "2-й", pinyin: "zhí", ru: "чжи", char: "直", meaning: "прямо", example: "一直 yī zhí", example_ru: "всё время", sound: "一直" }
    ]
},
changchang_often: { 
    translation: "чанчан",
    tones: [
        { tone: "2-й", pinyin: "cháng", ru: "чан", char: "常", meaning: "часто 🔁", example: "常常 cháng cháng", example_ru: "часто", sound: "常常" }
    ]
},
youshihou_sometimes: { 
    translation: "юшихоу",
    tones: [
        { tone: "3-й", pinyin: "yǒu", ru: "ю", char: "有", meaning: "иметь", example: "有时候 yǒu shí hou", example_ru: "иногда", sound: "有时候" },
        { tone: "2-й", pinyin: "shí", ru: "ши", char: "时", meaning: "время", example: "有时候 yǒu shí hou", example_ru: "иногда", sound: "有时候" }
    ]
},
            
            sun: { 
                translation: "сунь",
                tones: [
                    { tone: "1-й", pinyin: "sūn", ru: "сунь", char: "孙", meaning: "внук 👶", example: "孙子 sūn zi", example_ru: "внук", sound: "孙子" },
                    { tone: "2-й", pinyin: "sún", ru: "сунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" },
                    { tone: "3-й", pinyin: "sǔn", ru: "сунь", char: "损", meaning: "терять 💸", example: "损失 sǔn shī", example_ru: "потеря", sound: "损失" },
                    { tone: "4-й", pinyin: "sùn", ru: "сунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "—" }
                ]
            }
        }
    }
};

// Экспорт для использования
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pinyinFullDB;
}
// Делаем переменную доступной в браузере
if (typeof window !== 'undefined') {
    window.pinyinFullDB = pinyinFullDB;
}
 
