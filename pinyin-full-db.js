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

    // ==================== P ====================
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
                    { tone: "2-й", pinyin: "páo", ru: "пао", char: "跑", meaning: "бежать 🏃", example: "跑步 pǎo bù", example_ru: "бег", sound: "跑步" },
                    { tone: "3-й", pinyin: "pǎo", ru: "пао", char: "跑", meaning: "бежать", example: "跑步 pǎo bù", example_ru: "бег", sound: "跑步" },
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

    // ==================== M ====================
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
                    { tone: "1-й", pinyin: "māi", ru: "май", char: "埋", meaning: "закапывать ⚰️", example: "埋没 mái mò", example_ru: "закапывать", sound: "埋没" },
                    { tone: "2-й", pinyin: "mái", ru: "май", char: "埋", meaning: "закапывать", example: "埋没 mái mò", example_ru: "закапывать", sound: "埋没" },
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

    // ==================== D ====================
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
                    { tone: "3-й", pinyin: "dǒu", ru: "доу", char: "斗", meaning: "черпать 🥄", example: "斗争 dòu zhēng", example_ru: "борьба", sound: "斗争" },
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
    }
};
// ПОЛНАЯ БАЗА ДАННЫХ ПИНЬИНЯ (ЧАСТЬ 2)
// Инициали: T, N, L, G, K, H

const pinyinFullDB = {
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

    // ==================== N ====================
    n: {
        desc: "n [n] — как русская «н»",
        ru_sound: "нэ (как в слове «нос», кончик языка у верхних зубов)",
        articulation: "👅 Кончик языка у верхних зубов, воздух через нос.",
        sound: "nā",
        syllables: {
            na: { 
                translation: "на",
                tones: [
                    { tone: "1-й", pinyin: "nā", ru: "на", char: "那", meaning: "тот 👉", example: "那么 nà me", example_ru: "так", sound: "那么" },
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
            gui: { 
                translation: "гуй",
                tones: [
                    { tone: "1-й", pinyin: "guī", ru: "гуй", char: "归", meaning: "возвращаться 🔙", example: "回来 huí lái", example_ru: "вернуться", sound: "回来" },
                    { tone: "2-й", pinyin: "guí", ru: "гуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "鬼" },
                    { tone: "3-й", pinyin: "guǐ", ru: "гуй", char: "鬼", meaning: "призрак 👻", example: "鬼怪 guǐ guài", example_ru: "монстр", sound: "鬼怪" },
                    { tone: "4-й", pinyin: "guì", ru: "гуй", char: "贵", meaning: "дорогой 💎", example: "贵宾 guì bīn", example_ru: "почётный гость", sound: "贵宾" }
                ]
            },
            guan: { 
                translation: "гуань",
                tones: [
                    { tone: "1-й", pinyin: "guān", ru: "гуань", char: "关", meaning: "закрывать 🚪", example: "关系 guān xì", example_ru: "отношение", sound: "关系" },
                    { tone: "2-й", pinyin: "guán", ru: "гуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "管" },
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
    }
}

// ПОЛНАЯ БАЗА ДАННЫХ ПИНЬИНЯ (ЧАСТЬ 3)
// Инициали: J, Q, X, ZH, CH, SH, R

const pinyinFullDB = {
    // ==================== J ====================
    j: {
        desc: "j [tɕ] — мягкое «цзь» (улыбнись, язык внизу)",
        ru_sound: "цзь (мягко, как «дь» в слове «дьякон», улыбнись)",
        articulation: "😊 Улыбнись! Средняя часть языка поднимается к твёрдому нёбу. Кончик языка за нижними зубами.",
        sound: "jī",
        syllables: {
            ji: { 
                translation: "цзи",
                tones: [
                    { tone: "1-й", pinyin: "jī", ru: "цзи", char: "鸡", meaning: "курица 🐔", example: "鸡肉 jī ròu", example_ru: "курятина", sound: "鸡肉" },
                    { tone: "2-й", pinyin: "jí", ru: "цзи", char: "级", meaning: "уровень 📊", example: "年级 nián jí", example_ru: "класс", sound: "年级" },
                    { tone: "3-й", pinyin: "jǐ", ru: "цзи", char: "几", meaning: "сколько ❓", example: "几个 jǐ ge", example_ru: "несколько", sound: "几个" },
                    { tone: "4-й", pinyin: "jì", ru: "цзи", char: "记", meaning: "помнить 🧠", example: "记住 jì zhù", example_ru: "запомнить", sound: "记住" }
                ]
            },
            jia: { 
                translation: "цзя",
                tones: [
                    { tone: "1-й", pinyin: "jiā", ru: "цзя", char: "家", meaning: "дом 🏠", example: "家里 jiā lǐ", example_ru: "дома", sound: "家里" },
                    { tone: "2-й", pinyin: "jiá", ru: "цзя", char: "夹", meaning: "зажимать 🤏", example: "夹子 jiā zi", example_ru: "зажим", sound: "夹子" },
                    { tone: "3-й", pinyin: "jiǎ", ru: "цзя", char: "假", meaning: "фальшивый 🎭", example: "假期 jià qī", example_ru: "каникулы", sound: "假期" },
                    { tone: "4-й", pinyin: "jià", ru: "цзя", char: "价", meaning: "цена 💰", example: "价格 jià gé", example_ru: "цена", sound: "价格" }
                ]
            },
            jiao: { 
                translation: "цзяо",
                tones: [
                    { tone: "1-й", pinyin: "jiāo", ru: "цзяо", char: "教", meaning: "учить 📚", example: "教室 jiào shì", example_ru: "класс", sound: "教室" },
                    { tone: "2-й", pinyin: "jiáo", ru: "цзяо", char: "嚼", meaning: "жевать 🍽️", example: "嚼东西 jiáo dōng xi", example_ru: "жевать", sound: "嚼东西" },
                    { tone: "3-й", pinyin: "jiǎo", ru: "цзяо", char: "脚", meaning: "нога 🦶", example: "脚丫 jiǎo yā", example_ru: "нога", sound: "脚丫" },
                    { tone: "4-й", pinyin: "jiào", ru: "цзяо", char: "叫", meaning: "звать 📢", example: "叫声 jiào shēng", example_ru: "крик", sound: "叫声" }
                ]
            },
            jie: { 
                translation: "цзе",
                tones: [
                    { tone: "1-й", pinyin: "jiē", ru: "цзе", char: "街", meaning: "улица 🛣️", example: "街道 jiē dào", example_ru: "улица", sound: "街道" },
                    { tone: "2-й", pinyin: "jié", ru: "цзе", char: "节", meaning: "праздник 🎉", example: "节日 jié rì", example_ru: "праздник", sound: "节日" },
                    { tone: "3-й", pinyin: "jiě", ru: "цзе", char: "姐", meaning: "сестра 👧", example: "姐姐 jiě jie", example_ru: "старшая сестра", sound: "姐姐" },
                    { tone: "4-й", pinyin: "jiè", ru: "цзе", char: "借", meaning: "одалживать 🤝", example: "借书 jiè shū", example_ru: "одолжить книгу", sound: "借书" }
                ]
            },
            jiu: { 
                translation: "цзю",
                tones: [
                    { tone: "1-й", pinyin: "jiū", ru: "цзю", char: "纠", meaning: "исправлять 🔧", example: "纠正 jiū zhèng", example_ru: "исправлять", sound: "纠正" },
                    { tone: "2-й", pinyin: "jiú", ru: "цзю", char: "九", meaning: "девять 9️⃣", example: "九个 jiǔ ge", example_ru: "девять", sound: "九个" },
                    { tone: "3-й", pinyin: "jiǔ", ru: "цзю", char: "久", meaning: "долго ⏳", example: "很久 hěn jiǔ", example_ru: "очень долго", sound: "很久" },
                    { tone: "4-й", pinyin: "jiù", ru: "цзю", char: "就", meaning: "именно ✅", example: "就是 jiù shì", example_ru: "именно", sound: "就是" }
                ]
            },
            jian: { 
                translation: "цзянь",
                tones: [
                    { tone: "1-й", pinyin: "jiān", ru: "цзянь", char: "间", meaning: "между ↔️", example: "时间 shí jiān", example_ru: "время", sound: "时间" },
                    { tone: "2-й", pinyin: "jián", ru: "цзянь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "见" },
                    { tone: "3-й", pinyin: "jiǎn", ru: "цзянь", char: "简", meaning: "простой 📝", example: "简单 jiǎn dān", example_ru: "простой", sound: "简单" },
                    { tone: "4-й", pinyin: "jiàn", ru: "цзянь", char: "见", meaning: "видеть 👀", example: "看见 kàn jiàn", example_ru: "видеть", sound: "看见" }
                ]
            },
            jiang: { 
                translation: "цзян",
                tones: [
                    { tone: "1-й", pinyin: "jiāng", ru: "цзян", char: "江", meaning: "река 🏞️", example: "长江 Cháng Jiāng", example_ru: "Янцзы", sound: "长江" },
                    { tone: "2-й", pinyin: "jiáng", ru: "цзян", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "江" },
                    { tone: "3-й", pinyin: "jiǎng", ru: "цзян", char: "讲", meaning: "говорить 🗣️", example: "讲话 jiǎng huà", example_ru: "говорить", sound: "讲话" },
                    { tone: "4-й", pinyin: "jiàng", ru: "цзян", char: "降", meaning: "падать 📉", example: "下降 xià jiàng", example_ru: "падать", sound: "下降" }
                ]
            },
            jin: { 
                translation: "цзинь",
                tones: [
                    { tone: "1-й", pinyin: "jīn", ru: "цзинь", char: "今", meaning: "сегодня 📅", example: "今天 jīn tiān", example_ru: "сегодня", sound: "今天" },
                    { tone: "2-й", pinyin: "jín", ru: "цзинь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "金" },
                    { tone: "3-й", pinyin: "jǐn", ru: "цзинь", char: "紧", meaning: "плотный 🔒", example: "紧张 jǐn zhāng", example_ru: "напряжённый", sound: "紧张" },
                    { tone: "4-й", pinyin: "jìn", ru: "цзинь", char: "进", meaning: "входить 🚪", example: "进来 jìn lái", example_ru: "входить", sound: "进来" }
                ]
            },
            jing: { 
                translation: "цзин",
                tones: [
                    { tone: "1-й", pinyin: "jīng", ru: "цзин", char: "经", meaning: "проходить 🚶", example: "经过 jīng guò", example_ru: "проходить", sound: "经过" },
                    { tone: "2-й", pinyin: "jíng", ru: "цзин", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "经" },
                    { tone: "3-й", pinyin: "jǐng", ru: "цзин", char: "井", meaning: "колодец 🪣", example: "水井 shuǐ jǐng", example_ru: "колодец", sound: "水井" },
                    { tone: "4-й", pinyin: "jìng", ru: "цзин", char: "静", meaning: "тихий 🤫", example: "安静 ān jìng", example_ru: "тихий", sound: "安静" }
                ]
            },
            jiong: { 
                translation: "цзюн",
                tones: [
                    { tone: "1-й", pinyin: "jiōng", ru: "цзюн", char: "扃", meaning: "задвижка 🚪", example: "—", example_ru: "—", sound: "囧" },
                    { tone: "2-й", pinyin: "jióng", ru: "цзюн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "囧" },
                    { tone: "3-й", pinyin: "jiǒng", ru: "цзюн", char: "囧", meaning: "смущённый 😅", example: "囧事 jiǒng shì", example_ru: "неловкая ситуация", sound: "囧事" },
                    { tone: "4-й", pinyin: "jiòng", ru: "цзюн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "囧" }
                ]
            },
            ju: { 
                translation: "цзюй",
                tones: [
                    { tone: "1-й", pinyin: "jū", ru: "цзюй", char: "居", meaning: "жить 🏠", example: "居住 jū zhù", example_ru: "проживать", sound: "居住" },
                    { tone: "2-й", pinyin: "jú", ru: "цзюй", char: "橘", meaning: "мандарин 🍊", example: "橘子 jú zi", example_ru: "мандарин", sound: "橘子" },
                    { tone: "3-й", pinyin: "jǔ", ru: "цзюй", char: "举", meaning: "поднимать 🙌", example: "举起 jǔ qǐ", example_ru: "поднимать", sound: "举起" },
                    { tone: "4-й", pinyin: "jù", ru: "цзюй", char: "句", meaning: "фраза 💬", example: "句子 jù zi", example_ru: "предложение", sound: "句子" }
                ]
            },
            jue: { 
                translation: "цзюэ",
                tones: [
                    { tone: "1-й", pinyin: "juē", ru: "цзюэ", char: "撅", meaning: "выпячивать 👄", example: "撅嘴 juē zuǐ", example_ru: "надуть губы", sound: "撅嘴" },
                    { tone: "2-й", pinyin: "jué", ru: "цзюэ", char: "觉", meaning: "чувствовать 🧠", example: "觉得 jué de", example_ru: "чувствовать", sound: "觉得" },
                    { tone: "3-й", pinyin: "juě", ru: "цзюэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "觉" },
                    { tone: "4-й", pinyin: "juè", ru: "цзюэ", char: "倔", meaning: "упрямый 🐂", example: "倔强 juè jiàng", example_ru: "упрямый", sound: "倔强" }
                ]
            },
            juan: { 
                translation: "цзюань",
                tones: [
                    { tone: "1-й", pinyin: "juān", ru: "цзюань", char: "捐", meaning: "жертвовать 💝", example: "捐款 juān kuǎn", example_ru: "пожертвовать", sound: "捐款" },
                    { tone: "2-й", pinyin: "juán", ru: "цзюань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "卷" },
                    { tone: "3-й", pinyin: "juǎn", ru: "цзюань", char: "卷", meaning: "свиток 📜", example: "卷子 juǎn zi", example_ru: "свиток", sound: "卷子" },
                    { tone: "4-й", pinyin: "juàn", ru: "цзюань", char: "倦", meaning: "усталый 😴", example: "疲倦 pí juàn", example_ru: "усталый", sound: "疲倦" }
                ]
            },
            jun: { 
                translation: "цзюнь",
                tones: [
                    { tone: "1-й", pinyin: "jūn", ru: "цзюнь", char: "军", meaning: "армия 🪖", example: "军队 jūn duì", example_ru: "армия", sound: "军队" },
                    { tone: "2-й", pinyin: "jún", ru: "цзюнь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "军" },
                    { tone: "3-й", pinyin: "jǔn", ru: "цзюнь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "军" },
                    { tone: "4-й", pinyin: "jùn", ru: "цзюнь", char: "俊", meaning: "красивый 😍", example: "俊美 jùn měi", example_ru: "красивый", sound: "俊美" }
                ]
            }
        }
    },

    // ==================== Q ====================
    q: {
        desc: "q [tɕʰ] — мягкое «ць» с сильным выдохом",
        ru_sound: "ць (мягко, как «ть» в слове «тетя», с сильным выдохом)",
        articulation: "😊 Улыбнись! Та же позиция, что у j, но с СИЛЬНЫМ ВЫДОХОМ.",
        sound: "qī",
        syllables: {
            qi: { 
                translation: "ци",
                tones: [
                    { tone: "1-й", pinyin: "qī", ru: "ци", char: "七", meaning: "семь 7️⃣", example: "七个 qī ge", example_ru: "семь", sound: "七个" },
                    { tone: "2-й", pinyin: "qí", ru: "ци", char: "骑", meaning: "ехать 🏍️", example: "骑马 qí mǎ", example_ru: "ехать на лошади", sound: "骑马" },
                    { tone: "3-й", pinyin: "qǐ", ru: "ци", char: "起", meaning: "вставать 🚶", example: "起来 qǐ lái", example_ru: "вставать", sound: "起来" },
                    { tone: "4-й", pinyin: "qì", ru: "ци", char: "气", meaning: "воздух 🌬️", example: "空气 kōng qì", example_ru: "воздух", sound: "空气" }
                ]
            },
            qia: { 
                translation: "ця",
                tones: [
                    { tone: "1-й", pinyin: "qiā", ru: "ця", char: "掐", meaning: "щипать 🤏", example: "掐断 qiā duàn", example_ru: "отщипнуть", sound: "掐断" },
                    { tone: "2-й", pinyin: "qiá", ru: "ця", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "卡" },
                    { tone: "3-й", pinyin: "qiǎ", ru: "ця", char: "卡", meaning: "карта 💳", example: "卡片 qiǎ piàn", example_ru: "карточка", sound: "卡片" },
                    { tone: "4-й", pinyin: "qià", ru: "ця", char: "洽", meaning: "договариваться 🤝", example: "洽谈 qià tán", example_ru: "переговоры", sound: "洽谈" }
                ]
            },
            qiao: { 
                translation: "цяо",
                tones: [
                    { tone: "1-й", pinyin: "qiāo", ru: "цяо", char: "敲", meaning: "стучать 🔨", example: "敲门 qiāo mén", example_ru: "стучать в дверь", sound: "敲门" },
                    { tone: "2-й", pinyin: "qiáo", ru: "цяо", char: "桥", meaning: "мост 🌉", example: "桥头 qiáo tóu", example_ru: "начало моста", sound: "桥头" },
                    { tone: "3-й", pinyin: "qiǎo", ru: "цяо", char: "巧", meaning: "совпадение 🎯", example: "巧合 qiǎo hé", example_ru: "совпадение", sound: "巧合" },
                    { tone: "4-й", pinyin: "qiào", ru: "цяо", char: "翘", meaning: "поднимать ⬆️", example: "翘起 qiào qǐ", example_ru: "подниматься", sound: "翘起" }
                ]
            },
            qie: { 
                translation: "це",
                tones: [
                    { tone: "1-й", pinyin: "qiē", ru: "це", char: "切", meaning: "резать 🔪", example: "切菜 qiē cài", example_ru: "резать овощи", sound: "切菜" },
                    { tone: "2-й", pinyin: "qié", ru: "це", char: "茄", meaning: "баклажан 🍆", example: "茄子 qié zi", example_ru: "баклажан", sound: "茄子" },
                    { tone: "3-й", pinyin: "qiě", ru: "це", char: "且", meaning: "к тому же ➕", example: "并且 bìng qiě", example_ru: "и также", sound: "并且" },
                    { tone: "4-й", pinyin: "qiè", ru: "це", char: "切", meaning: "настоящий 💯", example: "亲切 qīn qiè", example_ru: "тёплый", sound: "亲切" }
                ]
            },
            qiu: { 
                translation: "цю",
                tones: [
                    { tone: "1-й", pinyin: "qiū", ru: "цю", char: "秋", meaning: "осень 🍂", example: "秋天 qiū tiān", example_ru: "осень", sound: "秋天" },
                    { tone: "2-й", pinyin: "qiú", ru: "цю", char: "球", meaning: "мяч ⚽", example: "足球 zú qiú", example_ru: "футбол", sound: "足球" },
                    { tone: "3-й", pinyin: "qiǔ", ru: "цю", char: "糗", meaning: "неловкий 😅", example: "糗事 qiǔ shì", example_ru: "неловкость", sound: "糗事" },
                    { tone: "4-й", pinyin: "qiù", ru: "цю", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "秋" }
                ]
            },
            qian: { 
                translation: "цянь",
                tones: [
                    { tone: "1-й", pinyin: "qiān", ru: "цянь", char: "千", meaning: "тысяча 1000️⃣", example: "一千 yī qiān", example_ru: "тысяча", sound: "一千" },
                    { tone: "2-й", pinyin: "qián", ru: "цянь", char: "前", meaning: "перед 👆", example: "前面 qián miàn", example_ru: "перед", sound: "前面" },
                    { tone: "3-й", pinyin: "qiǎn", ru: "цянь", char: "浅", meaning: "мелкий 🥄", example: "浅水 qiǎn shuǐ", example_ru: "мелкая вода", sound: "浅水" },
                    { tone: "4-й", pinyin: "qiàn", ru: "цянь", char: "欠", meaning: "должен 💸", example: "欠钱 qiàn qián", example_ru: "быть должным", sound: "欠钱" }
                ]
            },
            qiang: { 
                translation: "цян",
                tones: [
                    { tone: "1-й", pinyin: "qiāng", ru: "цян", char: "枪", meaning: "ружьё 🔫", example: "手枪 shǒu qiāng", example_ru: "пистолет", sound: "手枪" },
                    { tone: "2-й", pinyin: "qiáng", ru: "цян", char: "强", meaning: "сильный 💪", example: "强大 qiáng dà", example_ru: "сильный", sound: "强大" },
                    { tone: "3-й", pinyin: "qiǎng", ru: "цян", char: "抢", meaning: "грабить 🦹", example: "抢劫 qiǎng jié", example_ru: "грабить", sound: "抢劫" },
                    { tone: "4-й", pinyin: "qiàng", ru: "цян", char: "呛", meaning: "поперхнуться 😤", example: "呛着 qiàng zhe", example_ru: "поперхнуться", sound: "呛着" }
                ]
            },
            qin: { 
                translation: "цинь",
                tones: [
                    { tone: "1-й", pinyin: "qīn", ru: "цинь", char: "亲", meaning: "родной ❤️", example: "亲人 qīn rén", example_ru: "родной", sound: "亲人" },
                    { tone: "2-й", pinyin: "qín", ru: "цинь", char: "琴", meaning: "пианино 🎹", example: "钢琴 gāng qín", example_ru: "пианино", sound: "钢琴" },
                    { tone: "3-й", pinyin: "qǐn", ru: "цинь", char: "寝", meaning: "спальня 🛌", example: "寝室 qǐn shì", example_ru: "спальня", sound: "寝室" },
                    { tone: "4-й", pinyin: "qìn", ru: "цинь", char: "沁", meaning: "проникать 💧", example: "沁人心脾 qìn rén xīn pí", example_ru: "проникать в душу", sound: "沁人心脾" }
                ]
            },
            qing: { 
                translation: "цин",
                tones: [
                    { tone: "1-й", pinyin: "qīng", ru: "цин", char: "青", meaning: "зелёный 🟢", example: "青色 qīng sè", example_ru: "зелёный цвет", sound: "青色" },
                    { tone: "2-й", pinyin: "qíng", ru: "цин", char: "情", meaning: "чувство 💖", example: "感情 gǎn qíng", example_ru: "чувство", sound: "感情" },
                    { tone: "3-й", pinyin: "qǐng", ru: "цин", char: "请", meaning: "просить 🙏", example: "请客 qǐng kè", example_ru: "угощать", sound: "请客" },
                    { tone: "4-й", pinyin: "qìng", ru: "цин", char: "庆", meaning: "праздновать 🎉", example: "庆祝 qìng zhù", example_ru: "праздновать", sound: "庆祝" }
                ]
            },
            qiong: { 
                translation: "цюн",
                tones: [
                    { tone: "1-й", pinyin: "qiōng", ru: "цюн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "穷" },
                    { tone: "2-й", pinyin: "qióng", ru: "цюн", char: "穷", meaning: "бедный 🥺", example: "贫穷 pín qióng", example_ru: "бедность", sound: "贫穷" },
                    { tone: "3-й", pinyin: "qiǒng", ru: "цюн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "穷" },
                    { tone: "4-й", pinyin: "qiòng", ru: "цюн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "穷" }
                ]
            },
            qu: { 
                translation: "цюй",
                tones: [
                    { tone: "1-й", pinyin: "qū", ru: "цюй", char: "区", meaning: "район 🏘️", example: "地区 dì qū", example_ru: "район", sound: "地区" },
                    { tone: "2-й", pinyin: "qú", ru: "цюй", char: "渠", meaning: "канал 🏞️", example: "渠道 qú dào", example_ru: "канал", sound: "渠道" },
                    { tone: "3-й", pinyin: "qǔ", ru: "цюй", char: "取", meaning: "брать ✋", example: "取得 qǔ dé", example_ru: "получать", sound: "取得" },
                    { tone: "4-й", pinyin: "qù", ru: "цюй", char: "去", meaning: "идти 🚶", example: "出去 chū qù", example_ru: "выходить", sound: "出去" }
                ]
            },
            que: { 
                translation: "цюэ",
                tones: [
                    { tone: "1-й", pinyin: "quē", ru: "цюэ", char: "缺", meaning: "не хватать ❌", example: "缺少 quē shǎo", example_ru: "не хватать", sound: "缺少" },
                    { tone: "2-й", pinyin: "qué", ru: "цюэ", char: "瘸", meaning: "хромой 🦯", example: "瘸腿 qué tuǐ", example_ru: "хромой", sound: "瘸腿" },
                    { tone: "3-й", pinyin: "quě", ru: "цюэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "缺" },
                    { tone: "4-й", pinyin: "què", ru: "цюэ", char: "确", meaning: "точно ✅", example: "确实 què shí", example_ru: "действительно", sound: "确实" }
                ]
            },
            quan: { 
                translation: "цюань",
                tones: [
                    { tone: "1-й", pinyin: "quān", ru: "цюань", char: "圈", meaning: "круг ⭕", example: "圈子 quān zi", example_ru: "круг", sound: "圈子" },
                    { tone: "2-й", pinyin: "quán", ru: "цюань", char: "全", meaning: "весь 🌍", example: "全部 quán bù", example_ru: "весь", sound: "全部" },
                    { tone: "3-й", pinyin: "quǎn", ru: "цюань", char: "犬", meaning: "собака 🐕", example: "警犬 jǐng quǎn", example_ru: "служебная собака", sound: "警犬" },
                    { tone: "4-й", pinyin: "quàn", ru: "цюань", char: "劝", meaning: "убеждать 💬", example: "劝说 quàn shuō", example_ru: "убеждать", sound: "劝说" }
                ]
            },
            qun: { 
                translation: "цюнь",
                tones: [
                    { tone: "1-й", pinyin: "qūn", ru: "цюнь", char: "逡", meaning: "колебаться 🤔", example: "逡巡 qūn xún", example_ru: "колебаться", sound: "逡巡" },
                    { tone: "2-й", pinyin: "qún", ru: "цюнь", char: "群", meaning: "группа 👥", example: "群众 qún zhòng", example_ru: "толпа", sound: "群众" },
                    { tone: "3-й", pinyin: "qǔn", ru: "цюнь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "群" },
                    { tone: "4-й", pinyin: "qùn", ru: "цюнь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "群" }
                ]
            }
        }
    },

    // ==================== X ====================
    x: {
        desc: "x [ɕ] — мягкое «сь»",
        ru_sound: "сь (мягко, как «сь» в слове «сьесть», улыбнись)",
        articulation: "😊 Улыбнись! Язык в той же позиции, воздух проходит через щель.",
        sound: "xī",
        syllables: {
            xi: { 
                translation: "си",
                tones: [
                    { tone: "1-й", pinyin: "xī", ru: "си", char: "西", meaning: "запад 🌇", example: "西方 xī fāng", example_ru: "запад", sound: "西方" },
                    { tone: "2-й", pinyin: "xí", ru: "си", char: "习", meaning: "учиться 📚", example: "学习 xué xí", example_ru: "учиться", sound: "学习" },
                    { tone: "3-й", pinyin: "xǐ", ru: "си", char: "洗", meaning: "мыть 🧼", example: "洗澡 xǐ zǎo", example_ru: "мыться", sound: "洗澡" },
                    { tone: "4-й", pinyin: "xì", ru: "си", char: "戏", meaning: "спектакль 🎭", example: "游戏 yóu xì", example_ru: "игра", sound: "游戏" }
                ]
            },
            xia: { 
                translation: "ся",
                tones: [
                    { tone: "1-й", pinyin: "xiā", ru: "ся", char: "虾", meaning: "креветка 🦐", example: "龙虾 lóng xiā", example_ru: "лобстер", sound: "龙虾" },
                    { tone: "2-й", pinyin: "xiá", ru: "ся", char: "霞", meaning: "заря 🌅", example: "彩霞 cǎi xiá", example_ru: "облака", sound: "彩霞" },
                    { tone: "3-й", pinyin: "xiǎ", ru: "ся", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "下" },
                    { tone: "4-й", pinyin: "xià", ru: "ся", char: "下", meaning: "вниз ⬇️", example: "下面 xià mian", example_ru: "внизу", sound: "下面" }
                ]
            },
            xiao: { 
                translation: "сяо",
                tones: [
                    { tone: "1-й", pinyin: "xiāo", ru: "сяо", char: "消", meaning: "исчезать 👻", example: "消失 xiāo shī", example_ru: "исчезать", sound: "消失" },
                    { tone: "2-й", pinyin: "xiáo", ru: "сяо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "小" },
                    { tone: "3-й", pinyin: "xiǎo", ru: "сяо", char: "小", meaning: "маленький 🐭", example: "小孩 xiǎo hái", example_ru: "ребёнок", sound: "小孩" },
                    { tone: "4-й", pinyin: "xiào", ru: "сяо", char: "笑", meaning: "смеяться 😂", example: "笑容 xiào róng", example_ru: "улыбка", sound: "笑容" }
                ]
            },
            xie: { 
                translation: "се",
                tones: [
                    { tone: "1-й", pinyin: "xiē", ru: "се", char: "些", meaning: "несколько 🔢", example: "一些 yī xiē", example_ru: "немного", sound: "一些" },
                    { tone: "2-й", pinyin: "xié", ru: "се", char: "鞋", meaning: "туфли 👠", example: "鞋子 xié zi", example_ru: "туфли", sound: "鞋子" },
                    { tone: "3-й", pinyin: "xiě", ru: "се", char: "写", meaning: "писать ✍️", example: "写字 xiě zì", example_ru: "писать иероглифы", sound: "写字" },
                    { tone: "4-й", pinyin: "xiè", ru: "се", char: "谢", meaning: "спасибо 🙏", example: "谢谢 xiè xie", example_ru: "спасибо", sound: "谢谢" }
                ]
            },
            xiu: { 
                translation: "сю",
                tones: [
                    { tone: "1-й", pinyin: "xiū", ru: "сю", char: "休", meaning: "отдыхать 😴", example: "休息 xiū xi", example_ru: "отдыхать", sound: "休息" },
                    { tone: "2-й", pinyin: "xiú", ru: "сю", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "秀" },
                    { tone: "3-й", pinyin: "xiǔ", ru: "сю", char: "朽", meaning: "гнилой 🍂", example: "腐朽 fǔ xiǔ", example_ru: "гнилой", sound: "腐朽" },
                    { tone: "4-й", pinyin: "xiù", ru: "сю", char: "秀", meaning: "красивый 🌟", example: "秀美 xiù měi", example_ru: "красивый", sound: "秀美" }
                ]
            },
            xian: { 
                translation: "сянь",
                tones: [
                    { tone: "1-й", pinyin: "xiān", ru: "сянь", char: "先", meaning: "сначала 🥇", example: "先生 xiān sheng", example_ru: "господин", sound: "先生" },
                    { tone: "2-й", pinyin: "xián", ru: "сянь", char: "闲", meaning: "свободный 🆓", example: "空闲 kòng xián", example_ru: "свободный", sound: "空闲" },
                    { tone: "3-й", pinyin: "xiǎn", ru: "сянь", char: "显", meaning: "показывать 📺", example: "显示 xiǎn shì", example_ru: "показывать", sound: "显示" },
                    { tone: "4-й", pinyin: "xiàn", ru: "сянь", char: "现", meaning: "сейчас ⏰", example: "现在 xiàn zài", example_ru: "сейчас", sound: "现在" }
                ]
            },
            xiang: { 
                translation: "сян",
                tones: [
                    { tone: "1-й", pinyin: "xiāng", ru: "сян", char: "香", meaning: "аромат 🌸", example: "香水 xiāng shuǐ", example_ru: "духи", sound: "香水" },
                    { tone: "2-й", pinyin: "xiáng", ru: "сян", char: "祥", meaning: "счастье 🍀", example: "吉祥 jí xiáng", example_ru: "счастливый", sound: "吉祥" },
                    { tone: "3-й", pinyin: "xiǎng", ru: "сян", char: "想", meaning: "думать 🤔", example: "想念 xiǎng niàn", example_ru: "скучать", sound: "想念" },
                    { tone: "4-й", pinyin: "xiàng", ru: "сян", char: "向", meaning: "направление 🧭", example: "方向 fāng xiàng", example_ru: "направление", sound: "方向" }
                ]
            },
            xin: { 
                translation: "синь",
                tones: [
                    { tone: "1-й", pinyin: "xīn", ru: "синь", char: "心", meaning: "сердце ❤️", example: "心里 xīn lǐ", example_ru: "в душе", sound: "心里" },
                    { tone: "2-й", pinyin: "xín", ru: "синь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "信" },
                    { tone: "3-й", pinyin: "xǐn", ru: "синь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "信" },
                    { tone: "4-й", pinyin: "xìn", ru: "синь", char: "信", meaning: "письмо ✉️", example: "相信 xiāng xìn", example_ru: "верить", sound: "相信" }
                ]
            },
            xing: { 
                translation: "син",
                tones: [
                    { tone: "1-й", pinyin: "xīng", ru: "син", char: "星", meaning: "звезда ⭐", example: "星星 xīng xing", example_ru: "звёзды", sound: "星星" },
                    { tone: "2-й", pinyin: "xíng", ru: "син", char: "行", meaning: "идти 🚶", example: "行走 xíng zǒu", example_ru: "ходить", sound: "行走" },
                    { tone: "3-й", pinyin: "xǐng", ru: "син", char: "醒", meaning: "просыпаться 🌅", example: "醒来 xǐng lái", example_ru: "проснуться", sound: "醒来" },
                    { tone: "4-й", pinyin: "xìng", ru: "син", char: "性", meaning: "характер 😊", example: "性格 xìng gé", example_ru: "характер", sound: "性格" }
                ]
            },
            xiong: { 
                translation: "сюн",
                tones: [
                    { tone: "1-й", pinyin: "xiōng", ru: "сюн", char: "兄", meaning: "брат 👨", example: "兄弟 xiōng dì", example_ru: "братья", sound: "兄弟" },
                    { tone: "2-й", pinyin: "xióng", ru: "сюн", char: "熊", meaning: "медведь 🐻", example: "熊猫 xióng māo", example_ru: "панда", sound: "熊猫" },
                    { tone: "3-й", pinyin: "xiǒng", ru: "сюн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "熊" },
                    { tone: "4-й", pinyin: "xiòng", ru: "сюн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "熊" }
                ]
            },
            xu: { 
                translation: "сюй",
                tones: [
                    { tone: "1-й", pinyin: "xū", ru: "сюй", char: "需", meaning: "нуждаться 🤲", example: "需要 xū yào", example_ru: "нужно", sound: "需要" },
                    { tone: "2-й", pinyin: "xú", ru: "сюй", char: "徐", meaning: "медленно 🐢", example: "徐步 xú bù", example_ru: "медленно идти", sound: "徐步" },
                    { tone: "3-й", pinyin: "xǔ", ru: "сюй", char: "许", meaning: "разрешать ✅", example: "许多 xǔ duō", example_ru: "много", sound: "许多" },
                    { tone: "4-й", pinyin: "xù", ru: "сюй", char: "续", meaning: "продолжать 🔄", example: "继续 jì xù", example_ru: "продолжать", sound: "继续" }
                ]
            },
            xue: { 
                translation: "сюэ",
                tones: [
                    { tone: "1-й", pinyin: "xuē", ru: "сюэ", char: "削", meaning: "резать 🔪", example: "削减 xuē jiǎn", example_ru: "сокращать", sound: "削减" },
                    { tone: "2-й", pinyin: "xué", ru: "сюэ", char: "学", meaning: "учиться 📖", example: "学生 xué sheng", example_ru: "ученик", sound: "学生" },
                    { tone: "3-й", pinyin: "xuě", ru: "сюэ", char: "雪", meaning: "снег ❄️", example: "雪花 xuě huā", example_ru: "снежинка", sound: "雪花" },
                    { tone: "4-й", pinyin: "xuè", ru: "сюэ", char: "血", meaning: "кровь 🩸", example: "血液 xuè yè", example_ru: "кровь", sound: "血液" }
                ]
            },
            xuan: { 
                translation: "сюань",
                tones: [
                    { tone: "1-й", pinyin: "xuān", ru: "сюань", char: "宣", meaning: "объявлять 📢", example: "宣布 xuān bù", example_ru: "объявлять", sound: "宣布" },
                    { tone: "2-й", pinyin: "xuán", ru: "сюань", char: "玄", meaning: "тайна 🔮", example: "玄妙 xuán miào", example_ru: "таинственный", sound: "玄妙" },
                    { tone: "3-й", pinyin: "xuǎn", ru: "сюань", char: "选", meaning: "выбирать ✅", example: "选择 xuǎn zé", example_ru: "выбирать", sound: "选择" },
                    { tone: "4-й", pinyin: "xuàn", ru: "сюань", char: "炫", meaning: "хвастаться 🦚", example: "炫耀 xuàn yào", example_ru: "хвастаться", sound: "炫耀" }
                ]
            },
            xun: { 
                translation: "сюнь",
                tones: [
                    { tone: "1-й", pinyin: "xūn", ru: "сюнь", char: "熏", meaning: "коптить 🔥", example: "熏肉 xūn ròu", example_ru: "копчёное мясо", sound: "熏肉" },
                    { tone: "2-й", pinyin: "xún", ru: "сюнь", char: "寻", meaning: "искать 🔍", example: "寻找 xún zhǎo", example_ru: "искать", sound: "寻找" },
                    { tone: "3-й", pinyin: "xǔn", ru: "сюнь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "寻" },
                    { tone: "4-й", pinyin: "xùn", ru: "сюнь", char: "训", meaning: "инструкция 📋", example: "训练 xùn liàn", example_ru: "тренировка", sound: "训练" }
                ]
            }
        }
    },

    // ==================== ZH ====================
    zh: {
        desc: "zh [ʈʂ] — твёрдое «чж» (язык завёрнут назад)",
        ru_sound: "чж (как в английском John, язык завёрнут назад)",
        articulation: "👅 Кончик языка ЗАВЁРНУТ НАЗАД к твёрдому нёбу. Губы округлены.",
        sound: "zhī",
        syllables: {
            zhi: { 
                translation: "чжи",
                tones: [
                    { tone: "1-й", pinyin: "zhī", ru: "чжи", char: "知", meaning: "знать 🧠", example: "知道 zhī dào", example_ru: "знать", sound: "知道" },
                    { tone: "2-й", pinyin: "zhí", ru: "чжи", char: "直", meaning: "прямой 📏", example: "直接 zhí jiē", example_ru: "напрямую", sound: "直接" },
                    { tone: "3-й", pinyin: "zhǐ", ru: "чжи", char: "纸", meaning: "бумага 📄", example: "纸张 zhǐ zhāng", example_ru: "бумага", sound: "纸张" },
                    { tone: "4-й", pinyin: "zhì", ru: "чжи", char: "志", meaning: "воля 💪", example: "志愿 zhì yuàn", example_ru: "желание", sound: "志愿" }
                ]
            },
            zha: { 
                translation: "чжа",
                tones: [
                    { tone: "1-й", pinyin: "zhā", ru: "чжа", char: "扎", meaning: "втыкать 📌", example: "扎根 zhā gēn", example_ru: "укорениться", sound: "扎根" },
                    { tone: "2-й", pinyin: "zhá", ru: "чжа", char: "炸", meaning: "жарить 🍳", example: "炸酱 zhá jiàng", example_ru: "соус", sound: "炸酱" },
                    { tone: "3-й", pinyin: "zhǎ", ru: "чжа", char: "眨", meaning: "моргать 👁️", example: "眨眼 zhǎ yǎn", example_ru: "моргать", sound: "眨眼" },
                    { tone: "4-й", pinyin: "zhà", ru: "чжа", char: "炸", meaning: "взрывать 💥", example: "炸弹 zhà dàn", example_ru: "бомба", sound: "炸弹" }
                ]
            },
            zhe: { 
                translation: "чжэ",
                tones: [
                    { tone: "1-й", pinyin: "zhē", ru: "чжэ", char: "遮", meaning: "закрывать 🧣", example: "遮挡 zhē dǎng", example_ru: "заслонять", sound: "遮挡" },
                    { tone: "2-й", pinyin: "zhé", ru: "чжэ", char: "折", meaning: "ломать 💔", example: "折断 zhé duàn", example_ru: "ломать", sound: "折断" },
                    { tone: "3-й", pinyin: "zhě", ru: "чжэ", char: "这", meaning: "этот 👆", example: "这个 zhè ge", example_ru: "этот", sound: "这个" },
                    { tone: "4-й", pinyin: "zhè", ru: "чжэ", char: "这", meaning: "этот", example: "这里 zhè lǐ", example_ru: "здесь", sound: "这里" }
                ]
            },
            zhao: { 
                translation: "чжао",
                tones: [
                    { tone: "1-й", pinyin: "zhāo", ru: "чжао", char: "招", meaning: "махать 👋", example: "招手 zhāo shǒu", example_ru: "махать рукой", sound: "招手" },
                    { tone: "2-й", pinyin: "zháo", ru: "чжао", char: "着", meaning: "касаться 🤏", example: "着急 zháo jí", example_ru: "волноваться", sound: "着急" },
                    { tone: "3-й", pinyin: "zhǎo", ru: "чжао", char: "找", meaning: "искать 🔍", example: "找到 zhǎo dào", example_ru: "найти", sound: "找到" },
                    { tone: "4-й", pinyin: "zhào", ru: "чжао", char: "照", meaning: "фотографировать 📸", example: "照片 zhào piàn", example_ru: "фото", sound: "照片" }
                ]
            },
            zhou: { 
                translation: "чжоу",
                tones: [
                    { tone: "1-й", pinyin: "zhōu", ru: "чжоу", char: "周", meaning: "неделя 📅", example: "周末 zhōu mò", example_ru: "выходные", sound: "周末" },
                    { tone: "2-й", pinyin: "zhóu", ru: "чжоу", char: "轴", meaning: "ось ⚙️", example: "轴线 zhóu xiàn", example_ru: "ось", sound: "轴线" },
                    { tone: "3-й", pinyin: "zhǒu", ru: "чжоу", char: "肘", meaning: "локоть 💪", example: "肘子 zhǒu zi", example_ru: "локоть", sound: "肘子" },
                    { tone: "4-й", pinyin: "zhòu", ru: "чжоу", char: "皱", meaning: "морщина 👴", example: "皱纹 zhòu wén", example_ru: "морщина", sound: "皱纹" }
                ]
            },
            zhan: { 
                translation: "чжань",
                tones: [
                    { tone: "1-й", pinyin: "zhān", ru: "чжань", char: "沾", meaning: "мочить 💧", example: "沾水 zhān shuǐ", example_ru: "мочить", sound: "沾水" },
                    { tone: "2-й", pinyin: "zhán", ru: "чжань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "站" },
                    { tone: "3-й", pinyin: "zhǎn", ru: "чжань", char: "展", meaning: "выставлять 🖼️", example: "展览 zhǎn lǎn", example_ru: "выставка", sound: "展览" },
                    { tone: "4-й", pinyin: "zhàn", ru: "чжань", char: "站", meaning: "стоять 🧍", example: "车站 chē zhàn", example_ru: "станция", sound: "车站" }
                ]
            },
            zhang: { 
                translation: "чжан",
                tones: [
                    { tone: "1-й", pinyin: "zhāng", ru: "чжан", char: "张", meaning: "открывать 👐", example: "张开 zhāng kāi", example_ru: "открыть", sound: "张开" },
                    { tone: "2-й", pinyin: "zháng", ru: "чжан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "长" },
                    { tone: "3-й", pinyin: "zhǎng", ru: "чжан", char: "长", meaning: "расти 🌱", example: "长大 zhǎng dà", example_ru: "вырасти", sound: "长大" },
                    { tone: "4-й", pinyin: "zhàng", ru: "чжан", char: "帐", meaning: "занавес 🎪", example: "帐篷 zhàng peng", example_ru: "палатка", sound: "帐篷" }
                ]
            },
            zheng: { 
                translation: "чжэн",
                tones: [
                    { tone: "1-й", pinyin: "zhēng", ru: "чжэн", char: "争", meaning: "бороться 🥊", example: "争取 zhēng qǔ", example_ru: "бороться", sound: "争取" },
                    { tone: "2-й", pinyin: "zhéng", ru: "чжэн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "正" },
                    { tone: "3-й", pinyin: "zhěng", ru: "чжэн", char: "整", meaning: "целый 🧩", example: "整个 zhěng gè", example_ru: "целый", sound: "整个" },
                    { tone: "4-й", pinyin: "zhèng", ru: "чжэн", char: "正", meaning: "правильный ✅", example: "正确 zhèng què", example_ru: "правильный", sound: "正确" }
                ]
            },
            zhong: { 
                translation: "чжун",
                tones: [
                    { tone: "1-й", pinyin: "zhōng", ru: "чжун", char: "中", meaning: "середина 🎯", example: "中国 Zhōng guó", example_ru: "Китай", sound: "中国" },
                    { tone: "2-й", pinyin: "zhóng", ru: "чжун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "中" },
                    { tone: "3-й", pinyin: "zhǒng", ru: "чжун", char: "种", meaning: "вид 🌾", example: "种类 zhǒng lèi", example_ru: "вид", sound: "种类" },
                    { tone: "4-й", pinyin: "zhòng", ru: "чжун", char: "重", meaning: "тяжёлый ⚖️", example: "重要 zhòng yào", example_ru: "важный", sound: "重要" }
                ]
            },
            zhu: { 
                translation: "чжу",
                tones: [
                    { tone: "1-й", pinyin: "zhū", ru: "чжу", char: "猪", meaning: "свинья 🐷", example: "猪肉 zhū ròu", example_ru: "свинина", sound: "猪肉" },
                    { tone: "2-й", pinyin: "zhú", ru: "чжу", char: "竹", meaning: "бамбук 🎋", example: "竹子 zhú zi", example_ru: "бамбук", sound: "竹子" },
                    { tone: "3-й", pinyin: "zhǔ", ru: "чжу", char: "主", meaning: "главный 👑", example: "主人 zhǔ rén", example_ru: "хозяин", sound: "主人" },
                    { tone: "4-й", pinyin: "zhù", ru: "чжу", char: "住", meaning: "жить 🏠", example: "住房 zhù fáng", example_ru: "жильё", sound: "住房" }
                ]
            },
            zhua: { 
                translation: "чжуа",
                tones: [
                    { tone: "1-й", pinyin: "zhuā", ru: "чжуа", char: "抓", meaning: "хватать 🫴", example: "抓住 zhuā zhù", example_ru: "схватить", sound: "抓住" },
                    { tone: "2-й", pinyin: "zhuá", ru: "чжуа", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "抓" },
                    { tone: "3-й", pinyin: "zhuǎ", ru: "чжуа", char: "爪", meaning: "коготь 🦅", example: "爪子 zhuǎ zi", example_ru: "коготь", sound: "爪子" },
                    { tone: "4-й", pinyin: "zhuà", ru: "чжуа", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "抓" }
                ]
            },
            zhuo: { 
                translation: "чжуо",
                tones: [
                    { tone: "1-й", pinyin: "zhuō", ru: "чжуо", char: "捉", meaning: "ловить 🎣", example: "捉住 zhuō zhù", example_ru: "поймать", sound: "捉住" },
                    { tone: "2-й", pinyin: "zhuó", ru: "чжуо", char: "桌", meaning: "стол 🪑", example: "桌子 zhuō zi", example_ru: "стол", sound: "桌子" },
                    { tone: "3-й", pinyin: "zhuǒ", ru: "чжуо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "桌" },
                    { tone: "4-й", pinyin: "zhuò", ru: "чжуо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "桌" }
                ]
            },
            zhui: { 
                translation: "чжуй",
                tones: [
                    { tone: "1-й", pinyin: "zhuī", ru: "чжуй", char: "追", meaning: "преследовать 🏃", example: "追逐 zhuī zhú", example_ru: "преследовать", sound: "追逐" },
                    { tone: "2-й", pinyin: "zhuí", ru: "чжуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "追" },
                    { tone: "3-й", pinyin: "zhuǐ", ru: "чжуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "追" },
                    { tone: "4-й", pinyin: "zhuì", ru: "чжуй", char: "坠", meaning: "падать 🍂", example: "坠落 zhuì luò", example_ru: "падать", sound: "坠落" }
                ]
            },
            zhuan: { 
                translation: "чжуань",
                tones: [
                    { tone: "1-й", pinyin: "zhuān", ru: "чжуань", char: "专", meaning: "специалист 🎓", example: "专门 zhuān mén", example_ru: "специально", sound: "专门" },
                    { tone: "2-й", pinyin: "zhuán", ru: "чжуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "转" },
                    { tone: "3-й", pinyin: "zhuǎn", ru: "чжуань", char: "转", meaning: "поворачивать 🔄", example: "转弯 zhuǎn wān", example_ru: "повернуть", sound: "转弯" },
                    { tone: "4-й", pinyin: "zhuàn", ru: "чжуань", char: "赚", meaning: "зарабатывать 💰", example: "赚钱 zhuàn qián", example_ru: "зарабатывать", sound: "赚钱" }
                ]
            },
            zhun: { 
                translation: "чжунь",
                tones: [
                    { tone: "1-й", pinyin: "zhūn", ru: "чжунь", char: "谆", meaning: "искренний 💖", example: "谆谆 zhūn zhūn", example_ru: "искренне", sound: "谆谆" },
                    { tone: "2-й", pinyin: "zhún", ru: "чжунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "准" },
                    { tone: "3-й", pinyin: "zhǔn", ru: "чжунь", char: "准", meaning: "точный 🎯", example: "准备 zhǔn bèi", example_ru: "готовиться", sound: "准备" },
                    { tone: "4-й", pinyin: "zhùn", ru: "чжунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "准" }
                ]
            },
            zhuang: { 
                translation: "чжуан",
                tones: [
                    { tone: "1-й", pinyin: "zhuāng", ru: "чжуан", char: "装", meaning: "одежда 👕", example: "服装 fú zhuāng", example_ru: "одежда", sound: "服装" },
                    { tone: "2-й", pinyin: "zhuáng", ru: "чжуан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "装" },
                    { tone: "3-й", pinyin: "zhuǎng", ru: "чжуан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "装" },
                    { tone: "4-й", pinyin: "zhuàng", ru: "чжуан", char: "壮", meaning: "сильный 💪", example: "强壮 qiáng zhuàng", example_ru: "сильный", sound: "强壮" }
                ]
            }
        }
    },

    // ==================== CH ====================
    ch: {
        desc: "ch [ʈʂʰ] — твёрдое «ч» с сильным выдохом",
        ru_sound: "ч (твёрдое, с сильным выдохом, язык назад)",
        articulation: "👅 Та же позиция, что у zh, но с СИЛЬНЫМ ПРИДЫХАНИЕМ.",
        sound: "chī",
        syllables: {
            chi: { 
                translation: "чжи",
                tones: [
                    { tone: "1-й", pinyin: "chī", ru: "чжи", char: "吃", meaning: "есть 🍽️", example: "吃饭 chī fàn", example_ru: "есть", sound: "吃饭" },
                    { tone: "2-й", pinyin: "chí", ru: "чжи", char: "迟", meaning: "опаздывать ⏰", example: "迟到 chí dào", example_ru: "опоздать", sound: "迟到" },
                    { tone: "3-й", pinyin: "chǐ", ru: "чжи", char: "尺", meaning: "линейка 📏", example: "尺子 chǐ zi", example_ru: "линейка", sound: "尺子" },
                    { tone: "4-й", pinyin: "chì", ru: "чжи", char: "赤", meaning: "красный 🔴", example: "赤色 chì sè", example_ru: "красный цвет", sound: "赤色" }
                ]
            },
            cha: { 
                translation: "ча",
                tones: [
                    { tone: "1-й", pinyin: "chā", ru: "ча", char: "差", meaning: "разница 🔀", example: "差别 chā bié", example_ru: "разница", sound: "差别" },
                    { tone: "2-й", pinyin: "chá", ru: "ча", char: "查", meaning: "проверять 🔍", example: "查找 chá zhǎo", example_ru: "искать", sound: "查找" },
                    { tone: "3-й", pinyin: "chǎ", ru: "ча", char: "叉", meaning: "вилка 🍴", example: "叉子 chā zi", example_ru: "вилка", sound: "叉子" },
                    { tone: "4-й", pinyin: "chà", ru: "ча", char: "差", meaning: "плохой 👎", example: "差劲 chà jìn", example_ru: "плохо", sound: "差劲" }
                ]
            },
            che: { 
                translation: "чэ",
                tones: [
                    { tone: "1-й", pinyin: "chē", ru: "чэ", char: "车", meaning: "машина 🚗", example: "汽车 qì chē", example_ru: "автомобиль", sound: "汽车" },
                    { tone: "2-й", pinyin: "ché", ru: "чэ", char: "扯", meaning: "тянуть 🫱", example: "扯开 chě kāi", example_ru: "отрывать", sound: "扯开" },
                    { tone: "3-й", pinyin: "chě", ru: "чэ", char: "扯", meaning: "тянуть", example: "扯淡 chě dàn", example_ru: "болтать", sound: "扯淡" },
                    { tone: "4-й", pinyin: "chè", ru: "чэ", char: "撤", meaning: "убирать 🗑️", example: "撤走 chè zǒu", example_ru: "уходить", sound: "撤走" }
                ]
            },
            chai: { 
                translation: "чай",
                tones: [
                    { tone: "1-й", pinyin: "chāi", ru: "чай", char: "拆", meaning: "разбирать 🔧", example: "拆开 chāi kāi", example_ru: "разобрать", sound: "拆开" },
                    { tone: "2-й", pinyin: "chái", ru: "чай", char: "柴", meaning: "дрова 🪵", example: "柴火 chái huo", example_ru: "дрова", sound: "柴火" },
                    { tone: "3-й", pinyin: "chǎi", ru: "чай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "柴" },
                    { tone: "4-й", pinyin: "chài", ru: "чай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "柴" }
                ]
            },
            chao: { 
                translation: "чао",
                tones: [
                    { tone: "1-й", pinyin: "chāo", ru: "чао", char: "超", meaning: "превосходить 🏆", example: "超过 chāo guò", example_ru: "превосходить", sound: "超过" },
                    { tone: "2-й", pinyin: "cháo", ru: "чао", char: "朝", meaning: "династия 👑", example: "朝代 cháo dài", example_ru: "династия", sound: "朝代" },
                    { tone: "3-й", pinyin: "chǎo", ru: "чао", char: "吵", meaning: "шуметь 🔊", example: "吵架 chǎo jià", example_ru: "ссориться", sound: "吵架" },
                    { tone: "4-й", pinyin: "chào", ru: "чао", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "超" }
                ]
            },
            chan: { 
                translation: "чань",
                tones: [
                    { tone: "1-й", pinyin: "chān", ru: "чань", char: "搀", meaning: "поддерживать 🤝", example: "搀扶 chān fú", example_ru: "поддерживать", sound: "搀扶" },
                    { tone: "2-й", pinyin: "chán", ru: "чань", char: "缠", meaning: "обматывать 🧵", example: "缠绕 chán rào", example_ru: "обматывать", sound: "缠绕" },
                    { tone: "3-й", pinyin: "chǎn", ru: "чань", char: "产", meaning: "производить 🏭", example: "产品 chǎn pǐn", example_ru: "продукт", sound: "产品" },
                    { tone: "4-й", pinyin: "chàn", ru: "чань", char: "颤", meaning: "дрожать 😨", example: "颤抖 chàn dǒu", example_ru: "дрожать", sound: "颤抖" }
                ]
            },
            chang: { 
                translation: "чан",
                tones: [
                    { tone: "1-й", pinyin: "chāng", ru: "чан", char: "昌", meaning: "процветать 🌸", example: "昌盛 chāng shèng", example_ru: "процветание", sound: "昌盛" },
                    { tone: "2-й", pinyin: "cháng", ru: "чан", char: "长", meaning: "длинный 📏", example: "长短 cháng duǎn", example_ru: "длина", sound: "长短" },
                    { tone: "3-й", pinyin: "chǎng", ru: "чан", char: "场", meaning: "место 🏟️", example: "场地 chǎng dì", example_ru: "место", sound: "场地" },
                    { tone: "4-й", pinyin: "chàng", ru: "чан", char: "唱", meaning: "петь 🎤", example: "唱歌 chàng gē", example_ru: "петь", sound: "唱歌" }
                ]
            },
            chen: { 
                translation: "чэнь",
                tones: [
                    { tone: "1-й", pinyin: "chēn", ru: "чэнь", char: "抻", meaning: "растягивать 🧵", example: "抻面 chēn miàn", example_ru: "тянуть тесто", sound: "抻面" },
                    { tone: "2-й", pinyin: "chén", ru: "чэнь", char: "晨", meaning: "утро 🌅", example: "早晨 zǎo chén", example_ru: "утро", sound: "早晨" },
                    { tone: "3-й", pinyin: "chěn", ru: "чэнь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "陈" },
                    { tone: "4-й", pinyin: "chèn", ru: "чэнь", char: "趁", meaning: "пользоваться ⏱️", example: "趁机 chèn jī", example_ru: "воспользоваться", sound: "趁机" }
                ]
            },
            cheng: { 
                translation: "чэн",
                tones: [
                    { tone: "1-й", pinyin: "chēng", ru: "чэн", char: "称", meaning: "называть 📛", example: "称呼 chēng hu", example_ru: "называть", sound: "称呼" },
                    { tone: "2-й", pinyin: "chéng", ru: "чэн", char: "成", meaning: "становиться 🔄", example: "成为 chéng wéi", example_ru: "становиться", sound: "成为" },
                    { tone: "3-й", pinyin: "chěng", ru: "чэн", char: "逞", meaning: "хвастаться 🦚", example: "逞能 chěng néng", example_ru: "хвастаться", sound: "逞能" },
                    { tone: "4-й", pinyin: "chèng", ru: "чэн", char: "秤", meaning: "весы ⚖️", example: "秤杆 chèng gǎn", example_ru: "весы", sound: "秤杆" }
                ]
            },
            chong: { 
                translation: "чун",
                tones: [
                    { tone: "1-й", pinyin: "chōng", ru: "чун", char: "冲", meaning: "бросаться 🏃", example: "冲洗 chōng xǐ", example_ru: "промывать", sound: "冲洗" },
                    { tone: "2-й", pinyin: "chóng", ru: "чун", char: "虫", meaning: "насекомое 🐛", example: "虫子 chóng zi", example_ru: "насекомое", sound: "虫子" },
                    { tone: "3-й", pinyin: "chǒng", ru: "чун", char: "宠", meaning: "баловать 💖", example: "宠物 chǒng wù", example_ru: "питомец", sound: "宠物" },
                    { tone: "4-й", pinyin: "chòng", ru: "чун", char: "冲", meaning: "направление 🎯", example: "冲着 chòng zhe", example_ru: "по направлению", sound: "冲着" }
                ]
            },
            chou: { 
                translation: "чоу",
                tones: [
                    { tone: "1-й", pinyin: "chōu", ru: "чоу", char: "抽", meaning: "вытаскивать 📤", example: "抽出 chōu chū", example_ru: "вытащить", sound: "抽出" },
                    { tone: "2-й", pinyin: "chóu", ru: "чоу", char: "愁", meaning: "грустить 😔", example: "发愁 fā chóu", example_ru: "грустить", sound: "发愁" },
                    { tone: "3-й", pinyin: "chǒu", ru: "чоу", char: "丑", meaning: "уродливый 🤢", example: "丑陋 chǒu lòu", example_ru: "уродливый", sound: "丑陋" },
                    { tone: "4-й", pinyin: "chòu", ru: "чоу", char: "臭", meaning: "вонючий 💩", example: "臭气 chòu qì", example_ru: "вонь", sound: "臭气" }
                ]
            },
            chu: { 
                translation: "чу",
                tones: [
                    { tone: "1-й", pinyin: "chū", ru: "чу", char: "出", meaning: "выходить 🚪", example: "出来 chū lái", example_ru: "выйти", sound: "出来" },
                    { tone: "2-й", pinyin: "chú", ru: "чу", char: "除", meaning: "кроме ➖", example: "除了 chú le", example_ru: "кроме", sound: "除了" },
                    { tone: "3-й", pinyin: "chǔ", ru: "чу", char: "处", meaning: "место 📍", example: "处理 chǔ lǐ", example_ru: "обрабатывать", sound: "处理" },
                    { tone: "4-й", pinyin: "chù", ru: "чу", char: "触", meaning: "касаться 🤏", example: "触觉 chù jué", example_ru: "осязание", sound: "触觉" }
                ]
            },
            chua: { 
                translation: "чуа",
                tones: [
                    { tone: "1-й", pinyin: "chuā", ru: "чуа", char: "欻", meaning: "шум 💨", example: "欻的一声 chuā de yī shēng", example_ru: "шум", sound: "欻的一声" },
                    { tone: "2-й", pinyin: "chuá", ru: "чуа", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "欻" },
                    { tone: "3-й", pinyin: "chuǎ", ru: "чуа", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "欻" },
                    { tone: "4-й", pinyin: "chuà", ru: "чуа", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "欻" }
                ]
            },
            chuo: { 
                translation: "чуо",
                tones: [
                    { tone: "1-й", pinyin: "chuō", ru: "чуо", char: "戳", meaning: "тыкать 👆", example: "戳穿 chuō chuān", example_ru: "проткнуть", sound: "戳穿" },
                    { tone: "2-й", pinyin: "chuó", ru: "чуо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "戳" },
                    { tone: "3-й", pinyin: "chuǒ", ru: "чуо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "戳" },
                    { tone: "4-й", pinyin: "chuò", ru: "чуо", char: "辍", meaning: "бросать 🚫", example: "辍学 chuò xué", example_ru: "бросить учёбу", sound: "辍学" }
                ]
            },
            chui: { 
                translation: "чуй",
                tones: [
                    { tone: "1-й", pinyin: "chuī", ru: "чуй", char: "吹", meaning: "дуть 💨", example: "吹风 chuī fēng", example_ru: "дуть", sound: "吹风" },
                    { tone: "2-й", pinyin: "chuí", ru: "чуй", char: "垂", meaning: "свисать ⬇️", example: "垂直 chuí zhí", example_ru: "вертикальный", sound: "垂直" },
                    { tone: "3-й", pinyin: "chuǐ", ru: "чуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "吹" },
                    { tone: "4-й", pinyin: "chuì", ru: "чуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "吹" }
                ]
            },
            chuai: { 
                translation: "чуай",
                tones: [
                    { tone: "1-й", pinyin: "chuāi", ru: "чуай", char: "揣", meaning: "класть 🖐️", example: "揣在怀里 chuāi zài huái li", example_ru: "положить в карман", sound: "揣在怀里" },
                    { tone: "2-й", pinyin: "chuái", ru: "чуай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "揣" },
                    { tone: "3-й", pinyin: "chuǎi", ru: "чуай", char: "揣", meaning: "предполагать 🤔", example: "揣测 chuǎi cè", example_ru: "предполагать", sound: "揣测" },
                    { tone: "4-й", pinyin: "chuài", ru: "чуай", char: "踹", meaning: "пинать 👢", example: "踹开 chuài kāi", example_ru: "пнуть", sound: "踹开" }
                ]
            },
            chuan: { 
                translation: "чуань",
                tones: [
                    { tone: "1-й", pinyin: "chuān", ru: "чуань", char: "穿", meaning: "надевать 👕", example: "衣服 yī fu", example_ru: "одежда", sound: "衣服" },
                    { tone: "2-й", pinyin: "chuán", ru: "чуань", char: "船", meaning: "лодка 🚤", example: "小船 xiǎo chuán", example_ru: "лодка", sound: "小船" },
                    { tone: "3-й", pinyin: "chuǎn", ru: "чуань", char: "喘", meaning: "дышать 🌬️", example: "喘气 chuǎn qì", example_ru: "дышать", sound: "喘气" },
                    { tone: "4-й", pinyin: "chuàn", ru: "чуань", char: "串", meaning: "связка 🔗", example: "一串 yī chuàn", example_ru: "связка", sound: "一串" }
                ]
            },
            chun: { 
                translation: "чунь",
                tones: [
                    { tone: "1-й", pinyin: "chūn", ru: "чунь", char: "春", meaning: "весна 🌸", example: "春天 chūn tiān", example_ru: "весна", sound: "春天" },
                    { tone: "2-й", pinyin: "chún", ru: "чунь", char: "唇", meaning: "губа 👄", example: "嘴唇 zuǐ chún", example_ru: "губы", sound: "嘴唇" },
                    { tone: "3-й", pinyin: "chǔn", ru: "чунь", char: "蠢", meaning: "глупый 🤪", example: "愚蠢 yú chǔn", example_ru: "глупый", sound: "愚蠢" },
                    { tone: "4-й", pinyin: "chùn", ru: "чунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "春" }
                ]
            },
            chuang: { 
                translation: "чуан",
                tones: [
                    { tone: "1-й", pinyin: "chuāng", ru: "чуан", char: "窗", meaning: "окно 🪟", example: "窗户 chuāng hu", example_ru: "окно", sound: "窗户" },
                    { tone: "2-й", pinyin: "chuáng", ru: "чуан", char: "床", meaning: "кровать 🛏️", example: "床上 chuáng shàng", example_ru: "на кровати", sound: "床上" },
                    { tone: "3-й", pinyin: "chuǎng", ru: "чуан", char: "闯", meaning: "врываться 🚪", example: "闯进 chuǎng jìn", example_ru: "ворваться", sound: "闯进" },
                    { tone: "4-й", pinyin: "chuàng", ru: "чуан", char: "创", meaning: "создавать 🎨", example: "创造 chuàng zào", example_ru: "создавать", sound: "创造" }
                ]
            }
        }
    },

    // ==================== SH ====================
    sh: {
        desc: "sh [ʂ] — твёрдая «ш»",
        ru_sound: "ш (твёрдая, как русская «ш», язык назад)",
        articulation: "👅 Кончик языка ЗАВЁРНУТ НАЗАД, губы округлены.",
        sound: "shī",
        syllables: {
            shi: { 
                translation: "ши",
                tones: [
                    { tone: "1-й", pinyin: "shī", ru: "ши", char: "师", meaning: "учитель 👨‍🏫", example: "老师 lǎo shī", example_ru: "учитель", sound: "老师" },
                    { tone: "2-й", pinyin: "shí", ru: "ши", char: "十", meaning: "десять 🔟", example: "十个 shí ge", example_ru: "десять", sound: "十个" },
                    { tone: "3-й", pinyin: "shǐ", ru: "ши", char: "使", meaning: "заставлять 💪", example: "使用 shǐ yòng", example_ru: "использовать", sound: "使用" },
                    { tone: "4-й", pinyin: "shì", ru: "ши", char: "是", meaning: "быть ✅", example: "是不是 shì bu shì", example_ru: "да или нет", sound: "是不是" }
                ]
            },
            sha: { 
                translation: "ша",
                tones: [
                    { tone: "1-й", pinyin: "shā", ru: "ша", char: "沙", meaning: "песок 🏖️", example: "沙子 shā zi", example_ru: "песок", sound: "沙子" },
                    { tone: "2-й", pinyin: "shá", ru: "ша", char: "啥", meaning: "что ❓", example: "啥事 shá shì", example_ru: "что случилось", sound: "啥事" },
                    { tone: "3-й", pinyin: "shǎ", ru: "ша", char: "傻", meaning: "глупый 🤪", example: "傻瓜 shǎ guā", example_ru: "дурак", sound: "傻瓜" },
                    { tone: "4-й", pinyin: "shà", ru: "ша", char: "煞", meaning: "злой дух 👻", example: "煞车 shā chē", example_ru: "тормоз", sound: "煞车" }
                ]
            },
            she: { 
                translation: "шэ",
                tones: [
                    { tone: "1-й", pinyin: "shē", ru: "шэ", char: "赊", meaning: "в долг 💳", example: "赊账 shē zhàng", example_ru: "в долг", sound: "赊账" },
                    { tone: "2-й", pinyin: "shé", ru: "шэ", char: "蛇", meaning: "змея 🐍", example: "小蛇 xiǎo shé", example_ru: "змейка", sound: "小蛇" },
                    { tone: "3-й", pinyin: "shě", ru: "шэ", char: "舍", meaning: "бросать 🚮", example: "舍得 shě de", example_ru: "не жалеть", sound: "舍得" },
                    { tone: "4-й", pinyin: "shè", ru: "шэ", char: "社", meaning: "общество 🏛️", example: "社会 shè huì", example_ru: "общество", sound: "社会" }
                ]
            },
            shai: { 
                translation: "шай",
                tones: [
                    { tone: "1-й", pinyin: "shāi", ru: "шай", char: "筛", meaning: "просеивать 🧂", example: "筛选 shāi xuǎn", example_ru: "отбирать", sound: "筛选" },
                    { tone: "2-й", pinyin: "shái", ru: "шай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "晒" },
                    { tone: "3-й", pinyin: "shǎi", ru: "шай", char: "色", meaning: "цвет 🎨", example: "颜色 yán sè", example_ru: "цвет", sound: "颜色" },
                    { tone: "4-й", pinyin: "shài", ru: "шай", char: "晒", meaning: "загорать ☀️", example: "晒太阳 shài tài yáng", example_ru: "загорать", sound: "晒太阳" }
                ]
            },
            shao: { 
                translation: "шао",
                tones: [
                    { tone: "1-й", pinyin: "shāo", ru: "шао", char: "烧", meaning: "жечь 🔥", example: "烧水 shāo shuǐ", example_ru: "кипятить воду", sound: "烧水" },
                    { tone: "2-й", pinyin: "sháo", ru: "шао", char: "勺", meaning: "ложка 🥄", example: "勺子 sháo zi", example_ru: "ложка", sound: "勺子" },
                    { tone: "3-й", pinyin: "shǎo", ru: "шао", char: "少", meaning: "мало 🔽", example: "多少 duō shǎo", example_ru: "сколько", sound: "多少" },
                    { tone: "4-й", pinyin: "shào", ru: "шао", char: "少", meaning: "молодой 👦", example: "少年 shào nián", example_ru: "юноша", sound: "少年" }
                ]
            },
            shou: { 
                translation: "шоу",
                tones: [
                    { tone: "1-й", pinyin: "shōu", ru: "шоу", char: "收", meaning: "получать 📥", example: "收到 shōu dào", example_ru: "получить", sound: "收到" },
                    { tone: "2-й", pinyin: "shóu", ru: "шоу", char: "熟", meaning: "спелый 🍅", example: "熟悉 shú xī", example_ru: "знакомый", sound: "熟悉" },
                    { tone: "3-й", pinyin: "shǒu", ru: "шоу", char: "手", meaning: "рука ✋", example: "手表 shǒu biǎo", example_ru: "часы", sound: "手表" },
                    { tone: "4-й", pinyin: "shòu", ru: "шоу", char: "受", meaning: "получать 📦", example: "接受 jiē shòu", example_ru: "принимать", sound: "接受" }
                ]
            },
            shan: { 
                translation: "шань",
                tones: [
                    { tone: "1-й", pinyin: "shān", ru: "шань", char: "山", meaning: "гора 🏔️", example: "山上 shān shàng", example_ru: "на горе", sound: "山上" },
                    { tone: "2-й", pinyin: "shán", ru: "шань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "山" },
                    { tone: "3-й", pinyin: "shǎn", ru: "шань", char: "闪", meaning: "мигать ⚡", example: "闪开 shǎn kāi", example_ru: "отойти", sound: "闪开" },
                    { tone: "4-й", pinyin: "shàn", ru: "шань", char: "扇", meaning: "веер 🪭", example: "扇子 shàn zi", example_ru: "веер", sound: "扇子" }
                ]
            },
            shang: { 
                translation: "шан",
                tones: [
                    { tone: "1-й", pinyin: "shāng", ru: "шан", char: "伤", meaning: "ранить 🤕", example: "伤害 shāng hài", example_ru: "вредить", sound: "伤害" },
                    { tone: "2-й", pinyin: "sháng", ru: "шан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "上" },
                    { tone: "3-й", pinyin: "shǎng", ru: "шан", char: "赏", meaning: "награждать 🏅", example: "欣赏 xīn shǎng", example_ru: "любоваться", sound: "欣赏" },
                    { tone: "4-й", pinyin: "shàng", ru: "шан", char: "上", meaning: "верх ⬆️", example: "上面 shàng mian", example_ru: "сверху", sound: "上面" }
                ]
            },
            shen: { 
                translation: "шэнь",
                tones: [
                    { tone: "1-й", pinyin: "shēn", ru: "шэнь", char: "身", meaning: "тело 🧍", example: "身体 shēn tǐ", example_ru: "тело", sound: "身体" },
                    { tone: "2-й", pinyin: "shén", ru: "шэнь", char: "什", meaning: "что ❓", example: "什么 shén me", example_ru: "что", sound: "什么" },
                    { tone: "3-й", pinyin: "shěn", ru: "шэнь", char: "审", meaning: "судить ⚖️", example: "审查 shěn chá", example_ru: "проверять", sound: "审查" },
                    { tone: "4-й", pinyin: "shèn", ru: "шэнь", char: "甚", meaning: "очень 🔥", example: "甚至 shèn zhì", example_ru: "даже", sound: "甚至" }
                ]
            },
            sheng: { 
                translation: "шэн",
                tones: [
                    { tone: "1-й", pinyin: "shēng", ru: "шэн", char: "生", meaning: "жизнь 💚", example: "生活 shēng huó", example_ru: "жизнь", sound: "生活" },
                    { tone: "2-й", pinyin: "shéng", ru: "шэн", char: "绳", meaning: "верёвка 🪢", example: "绳子 shéng zi", example_ru: "верёвка", sound: "绳子" },
                    { tone: "3-й", pinyin: "shěng", ru: "шэн", char: "省", meaning: "провинция 🗺️", example: "省钱 shěng qián", example_ru: "экономить", sound: "省钱" },
                    { tone: "4-й", pinyin: "shèng", ru: "шэн", char: "胜", meaning: "побеждать 🏆", example: "胜利 shèng lì", example_ru: "победа", sound: "胜利" }
                ]
            },
            shu: { 
                translation: "шу",
                tones: [
                    { tone: "1-й", pinyin: "shū", ru: "шу", char: "书", meaning: "книга 📖", example: "书本 shū běn", example_ru: "книга", sound: "书本" },
                    { tone: "2-й", pinyin: "shú", ru: "шу", char: "熟", meaning: "спелый 🍑", example: "熟悉 shú xī", example_ru: "знакомый", sound: "熟悉" },
                    { tone: "3-й", pinyin: "shǔ", ru: "шу", char: "数", meaning: "считать 🔢", example: "数字 shù zì", example_ru: "цифра", sound: "数字" },
                    { tone: "4-й", pinyin: "shù", ru: "шу", char: "树", meaning: "дерево 🌳", example: "树木 shù mù", example_ru: "деревья", sound: "树木" }
                ]
            },
            shua: { 
                translation: "шуа",
                tones: [
                    { tone: "1-й", pinyin: "shuā", ru: "шуа", char: "刷", meaning: "чистить 🪥", example: "刷牙 shuā yá", example_ru: "чистить зубы", sound: "刷牙" },
                    { tone: "2-й", pinyin: "shuá", ru: "шуа", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "刷" },
                    { tone: "3-й", pinyin: "shuǎ", ru: "шуа", char: "耍", meaning: "играть 🎮", example: "玩耍 wán shuǎ", example_ru: "играть", sound: "玩耍" },
                    { tone: "4-й", pinyin: "shuà", ru: "шуа", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "刷" }
                ]
            },
            shuo: { 
                translation: "шуо",
                tones: [
                    { tone: "1-й", pinyin: "shuō", ru: "шуо", char: "说", meaning: "говорить 🗣️", example: "说话 shuō huà", example_ru: "говорить", sound: "说话" },
                    { tone: "2-й", pinyin: "shuó", ru: "шуо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "说" },
                    { tone: "3-й", pinyin: "shuǒ", ru: "шуо", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "说" },
                    { tone: "4-й", pinyin: "shuò", ru: "шуо", char: "硕", meaning: "большой 🐘", example: "硕士 shuò shì", example_ru: "магистр", sound: "硕士" }
                ]
            },
            shui: { 
                translation: "шуй",
                tones: [
                    { tone: "1-й", pinyin: "shuī", ru: "шуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "水" },
                    { tone: "2-й", pinyin: "shuí", ru: "шуй", char: "谁", meaning: "кто ❓", example: "谁是谁 shuí shì shuí", example_ru: "кто есть кто", sound: "谁是谁" },
                    { tone: "3-й", pinyin: "shuǐ", ru: "шуй", char: "水", meaning: "вода 💧", example: "喝水 hē shuǐ", example_ru: "пить воду", sound: "喝水" },
                    { tone: "4-й", pinyin: "shuì", ru: "шуй", char: "睡", meaning: "спать 😴", example: "睡觉 shuì jiào", example_ru: "спать", sound: "睡觉" }
                ]
            },
            shuai: { 
                translation: "шуай",
                tones: [
                    { tone: "1-й", pinyin: "shuāi", ru: "шуай", char: "摔", meaning: "падать 🤕", example: "摔倒 shuāi dǎo", example_ru: "упасть", sound: "摔倒" },
                    { tone: "2-й", pinyin: "shuái", ru: "шуай", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "摔" },
                    { tone: "3-й", pinyin: "shuǎi", ru: "шуай", char: "甩", meaning: "бросать 🏀", example: "甩掉 shuǎi diào", example_ru: "сбросить", sound: "甩掉" },
                    { tone: "4-й", pinyin: "shuài", ru: "шуай", char: "帅", meaning: "красивый 😎", example: "帅哥 shuài gē", example_ru: "красавчик", sound: "帅哥" }
                ]
            },
            shuan: { 
                translation: "шуань",
                tones: [
                    { tone: "1-й", pinyin: "shuān", ru: "шуань", char: "栓", meaning: "затычка 🔌", example: "栓塞 shuān sè", example_ru: "затычка", sound: "栓塞" },
                    { tone: "2-й", pinyin: "shuán", ru: "шуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "栓" },
                    { tone: "3-й", pinyin: "shuǎn", ru: "шуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "栓" },
                    { tone: "4-й", pinyin: "shuàn", ru: "шуань", char: "涮", meaning: "полоскать 🧼", example: "涮火锅 shuàn huǒ guō", example_ru: "готовить в кипятке", sound: "涮火锅" }
                ]
            },
            shun: { 
                translation: "шунь",
                tones: [
                    { tone: "1-й", pinyin: "shūn", ru: "шунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "顺" },
                    { tone: "2-й", pinyin: "shún", ru: "шунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "顺" },
                    { tone: "3-й", pinyin: "shǔn", ru: "шунь", char: "吮", meaning: "сосать 🥤", example: "吮吸 shǔn xī", example_ru: "сосать", sound: "吮吸" },
                    { tone: "4-й", pinyin: "shùn", ru: "шунь", char: "顺", meaning: "гладкий 📈", example: "顺利 shùn lì", example_ru: "удачно", sound: "顺利" }
                ]
            },
            shuang: { 
                translation: "шуан",
                tones: [
                    { tone: "1-й", pinyin: "shuāng", ru: "шуан", char: "双", meaning: "двойной 👥", example: "双人 shuāng rén", example_ru: "двойной", sound: "双人" },
                    { tone: "2-й", pinyin: "shuáng", ru: "шуан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "双" },
                    { tone: "3-й", pinyin: "shuǎng", ru: "шуан", char: "爽", meaning: "приятный 😊", example: "爽快 shuǎng kuài", example_ru: "приятный", sound: "爽快" },
                    { tone: "4-й", pinyin: "shuàng", ru: "шуан", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "双" }
                ]
            }
        }
    },

    // ==================== R ====================
    r: {
        desc: "r [ʐ] — как русская «ж»",
        ru_sound: "ж (как русская «ж», но язык чуть дальше назад)",
        articulation: "👅 Та же позиция, что у sh, но ГОЛОС ВКЛЮЧЁН (звонкий).",
        sound: "rì",
        syllables: {
            ri: { 
                translation: "жи",
                tones: [
                    { tone: "1-й", pinyin: "rī", ru: "жи", char: "日", meaning: "солнце ☀️", example: "日本 Rì běn", example_ru: "Япония", sound: "日本" },
                    { tone: "2-й", pinyin: "rí", ru: "жи", char: "日", meaning: "солнце", example: "日子 rì zi", example_ru: "дни", sound: "日子" },
                    { tone: "3-й", pinyin: "rǐ", ru: "жи", char: "日", meaning: "солнце", example: "日日 rì rì", example_ru: "каждый день", sound: "日日" },
                    { tone: "4-й", pinyin: "rì", ru: "жи", char: "日", meaning: "солнце", example: "星期日 xīng qī rì", example_ru: "воскресенье", sound: "星期日" }
                ]
            },
            re: { 
                translation: "жэ",
                tones: [
                    { tone: "1-й", pinyin: "rē", ru: "жэ", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "热" },
                    { tone: "2-й", pinyin: "ré", ru: "жэ", char: "热", meaning: "горячий 🔥", example: "热水 rè shuǐ", example_ru: "горячая вода", sound: "热水" },
                    { tone: "3-й", pinyin: "rě", ru: "жэ", char: "惹", meaning: "провоцировать 😤", example: "惹事 rě shì", example_ru: "провоцировать", sound: "惹事" },
                    { tone: "4-й", pinyin: "rè", ru: "жэ", char: "热", meaning: "горячий", example: "热闹 rè nào", example_ru: "оживлённый", sound: "热闹" }
                ]
            },
            rao: { 
                translation: "жао",
                tones: [
                    { tone: "1-й", pinyin: "rāo", ru: "жао", char: "绕", meaning: "обматывать 🧵", example: "绕道 rào dào", example_ru: "обойти", sound: "绕道" },
                    { tone: "2-й", pinyin: "ráo", ru: "жао", char: "饶", meaning: "прощать 🙏", example: "饶恕 ráo shù", example_ru: "прощать", sound: "饶恕" },
                    { tone: "3-й", pinyin: "rǎo", ru: "жао", char: "扰", meaning: "беспокоить 😠", example: "打扰 dǎ rǎo", example_ru: "беспокоить", sound: "打扰" },
                    { tone: "4-й", pinyin: "rào", ru: "жао", char: "绕", meaning: "обходить", example: "绕圈 rào quān", example_ru: "ходить вокруг", sound: "绕圈" }
                ]
            },
            ran: { 
                translation: "жань",
                tones: [
                    { tone: "1-й", pinyin: "rān", ru: "жань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "染" },
                    { tone: "2-й", pinyin: "rán", ru: "жань", char: "然", meaning: "так ✅", example: "然后 rán hòu", example_ru: "затем", sound: "然后" },
                    { tone: "3-й", pinyin: "rǎn", ru: "жань", char: "染", meaning: "красить 🎨", example: "染色 rǎn sè", example_ru: "окрашивать", sound: "染色" },
                    { tone: "4-й", pinyin: "ràn", ru: "жань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "染" }
                ]
            },
            rang: { 
                translation: "жан",
                tones: [
                    { tone: "1-й", pinyin: "rāng", ru: "жан", char: "嚷", meaning: "кричать 📢", example: "嚷嚷 rāng rang", example_ru: "кричать", sound: "嚷嚷" },
                    { tone: "2-й", pinyin: "ráng", ru: "жан", char: "瓤", meaning: "мякоть 🍉", example: "瓜瓤 guā ráng", example_ru: "мякоть", sound: "瓜瓤" },
                    { tone: "3-й", pinyin: "rǎng", ru: "жан", char: "壤", meaning: "почва 🌱", example: "土壤 tǔ rǎng", example_ru: "почва", sound: "土壤" },
                    { tone: "4-й", pinyin: "ràng", ru: "жан", char: "让", meaning: "позволять ✅", example: "让座 ràng zuò", example_ru: "уступить место", sound: "让座" }
                ]
            },
            rou: { 
                translation: "жоу",
                tones: [
                    { tone: "1-й", pinyin: "rōu", ru: "жоу", char: "揉", meaning: "мять 👐", example: "揉面 róu miàn", example_ru: "месить тесто", sound: "揉面" },
                    { tone: "2-й", pinyin: "róu", ru: "жоу", char: "柔", meaning: "мягкий 🧸", example: "柔软 róu ruǎn", example_ru: "мягкий", sound: "柔软" },
                    { tone: "3-й", pinyin: "rǒu", ru: "жоу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "肉" },
                    { tone: "4-й", pinyin: "ròu", ru: "жоу", char: "肉", meaning: "мясо 🥩", example: "猪肉 zhū ròu", example_ru: "свинина", sound: "猪肉" }
                ]
            },
            reng: { 
                translation: "жэн",
                tones: [
                    { tone: "1-й", pinyin: "rēng", ru: "жэн", char: "扔", meaning: "бросать 🗑️", example: "扔掉 rēng diào", example_ru: "выбросить", sound: "扔掉" },
                    { tone: "2-й", pinyin: "réng", ru: "жэн", char: "仍", meaning: "всё ещё ⏳", example: "仍然 réng rán", example_ru: "всё ещё", sound: "仍然" },
                    { tone: "3-й", pinyin: "rěng", ru: "жэн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "扔" },
                    { tone: "4-й", pinyin: "rèng", ru: "жэн", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "扔" }
                ]
            },
            rong: { 
                translation: "жун",
                tones: [
                    { tone: "1-й", pinyin: "rōng", ru: "жун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "容" },
                    { tone: "2-й", pinyin: "róng", ru: "жун", char: "容", meaning: "вмещать 🫙", example: "容易 róng yì", example_ru: "легко", sound: "容易" },
                    { tone: "3-й", pinyin: "rǒng", ru: "жун", char: "冗", meaning: "лишний 🗑️", example: "冗长 rǒng cháng", example_ru: "длинный", sound: "冗长" },
                    { tone: "4-й", pinyin: "ròng", ru: "жун", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "容" }
                ]
            },
            ru: { 
                translation: "жу",
                tones: [
                    { tone: "1-й", pinyin: "rū", ru: "жу", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "如" },
                    { tone: "2-й", pinyin: "rú", ru: "жу", char: "如", meaning: "как 🔄", example: "如果 rú guǒ", example_ru: "если", sound: "如果" },
                    { tone: "3-й", pinyin: "rǔ", ru: "жу", char: "乳", meaning: "молоко 🥛", example: "牛奶 niú nǎi", example_ru: "молоко", sound: "牛奶" },
                    { tone: "4-й", pinyin: "rù", ru: "жу", char: "入", meaning: "входить 🚪", example: "入口 rù kǒu", example_ru: "вход", sound: "入口" }
                ]
            },
            ruan: { 
                translation: "жуань",
                tones: [
                    { tone: "1-й", pinyin: "ruān", ru: "жуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "软" },
                    { tone: "2-й", pinyin: "ruán", ru: "жуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "软" },
                    { tone: "3-й", pinyin: "ruǎn", ru: "жуань", char: "软", meaning: "мягкий 🧸", example: "软件 ruǎn jiàn", example_ru: "программное обеспечение", sound: "软件" },
                    { tone: "4-й", pinyin: "ruàn", ru: "жуань", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "软" }
                ]
            },
            rui: { 
                translation: "жуй",
                tones: [
                    { tone: "1-й", pinyin: "ruī", ru: "жуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "瑞" },
                    { tone: "2-й", pinyin: "ruí", ru: "жуй", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "瑞" },
                    { tone: "3-й", pinyin: "ruǐ", ru: "жуй", char: "蕊", meaning: "тычинка 🌸", example: "花蕊 huā ruǐ", example_ru: "тычинка", sound: "花蕊" },
                    { tone: "4-й", pinyin: "ruì", ru: "жуй", char: "瑞", meaning: "счастливый 🍀", example: "瑞雪 ruì xuě", example_ru: "счастливый снег", sound: "瑞雪" }
                ]
            },
            run: { 
                translation: "жунь",
                tones: [
                    { tone: "1-й", pinyin: "rūn", ru: "жунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "润" },
                    { tone: "2-й", pinyin: "rún", ru: "жунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "润" },
                    { tone: "3-й", pinyin: "rǔn", ru: "жунь", char: "—", meaning: "—", example: "—", example_ru: "—", sound: "润" },
                    { tone: "4-й", pinyin: "rùn", ru: "жунь", char: "润", meaning: "влажный 💧", example: "湿润 shī rùn", example_ru: "влажный", sound: "湿润" }
                ]
            }
        }
    }
};


