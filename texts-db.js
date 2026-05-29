// texts-db.js - База всех текстов с иероглифами, пиньинем и переводом

const TEXTS_DB = [
    {
        id: 1,
        title: "🚇 В метро",
        lines: [
            { chinese: "今天早上我坐地铁。", pinyin: "jīn tiān zǎo shang wǒ zuò dì tiě。", russian: "Сегодня утром я поехал на метро." },
            { chinese: "地铁里人很多。", pinyin: "dì tiě lǐ rén hěn duō。", russian: "В метро было очень много людей." },
            { chinese: "我没有座位。", pinyin: "wǒ méi yǒu zuò wèi。", russian: "У меня не было места." },
            { chinese: "我一直站着。", pinyin: "wǒ yī zhí zhàn zhe。", russian: "Я всё время стоял." },
            { chinese: "旁边一个人踩了我的脚。", pinyin: "páng biān yī gè rén cǎi le wǒ de jiǎo。", russian: "Рядом кто-то наступил мне на ногу." },
            { chinese: "他说：'对不起'。", pinyin: "tā shuō：'duì bu qǐ'。", russian: "Он сказал: «Извините»." },
            { chinese: "我说：'没事'。", pinyin: "wǒ shuō：'méi shì'。", russian: "Я сказал: «Ничего страшного»." },
            { chinese: "地铁到了一站。", pinyin: "dì tiě dào le yī zhàn。", russian: "Метро приехало на станцию." },
            { chinese: "很多人下车。", pinyin: "hěn duō rén xià chē。", russian: "Много людей вышли." },
            { chinese: "我找到了一个座位。", pinyin: "wǒ zhǎo dào le yī gè zuò wèi。", russian: "Я нашёл место." },
            { chinese: "我很开心。", pinyin: "wǒ hěn kāi xīn。", russian: "Я очень обрадовался." },
            { chinese: "五站以后我下车了。", pinyin: "wǔ zhàn yǐ hòu wǒ xià chē le。", russian: "Через пять станций я вышел." },
            { chinese: "我去办公室。", pinyin: "wǒ qù bàn gōng shì。", russian: "Я пошёл в офис." }
        ]
    },
    {
        id: 2,
        title: "🥞 Завтрак на улице",
        lines: [
            { chinese: "我早上很饿。", pinyin: "wǒ zǎo shang hěn è。", russian: "Утром я очень проголодался." },
            { chinese: "我去买早饭。", pinyin: "wǒ qù mǎi zǎo fàn。", russian: "Я пошёл купить завтрак." },
            { chinese: "路边有一个小摊。", pinyin: "lù biān yǒu yī gè xiǎo tān。", russian: "У дороги был маленький ларёк." },
            { chinese: "卖煎饼的人问我：'要什么？'", pinyin: "mài jiān bǐng de rén wèn wǒ：'yào shén me？'", russian: "Продавец цзяньбинов спросил меня: «Что будешь?»" },
            { chinese: "我说：'一个煎饼。'", pinyin: "wǒ shuō：'yī gè jiān bǐng。'", russian: "Я сказал: «Один цзяньбин»." },
            { chinese: "'加鸡蛋，不要辣。'", pinyin: "'jiā jī dàn，bù yào là。'", russian: "«Добавь яйцо, без острого»." },
            { chinese: "他说：'七块钱。'", pinyin: "tā shuō：'qī kuài qián。'", russian: "Он сказал: «Семь юаней»." },
            { chinese: "我给他十块钱。", pinyin: "wǒ gěi tā shí kuài qián。", russian: "Я дал ему десять юаней." },
            { chinese: "他找给我三块钱。", pinyin: "tā zhǎo gěi wǒ sān kuài qián。", russian: "Он дал мне сдачу три юаня." },
            { chinese: "我拿着煎饼走了。", pinyin: "wǒ ná zhe jiān bǐng zǒu le。", russian: "Я взял цзяньбин и ушёл." },
            { chinese: "我一边走一边吃。", pinyin: "wǒ yī biān zǒu yī biān chī。", russian: "Я шёл и ел." },
            { chinese: "很好吃。", pinyin: "hěn hǎo chī。", russian: "Было очень вкусно." }
        ]
    },
    {
        id: 3,
        title: "💼 Разговор с коллегой",
        lines: [
            { chinese: "我在办公室工作。", pinyin: "wǒ zài bàn gōng shì gōng zuò。", russian: "Я работаю в офисе." },
            { chinese: "同事走过来。", pinyin: "tóng shì zǒu guò lái。", russian: "Коллега подошёл." },
            { chinese: "他问我：'你吃了吗？'", pinyin: "tā wèn wǒ：'nǐ chī le ma？'", russian: "Он спросил меня: «Ты ел?»" },
            { chinese: "我说：'还没吃。'", pinyin: "wǒ shuō：'hái méi chī。'", russian: "Я сказал: «Ещё нет»." },
            { chinese: "他说：'一起去吃饭吧。'", pinyin: "tā shuō：'yī qǐ qù chī fàn ba。'", russian: "Он сказал: «Пойдём вместе поедим»." },
            { chinese: "我说：'好啊。'", pinyin: "wǒ shuō：'hǎo a。'", russian: "Я сказал: «Хорошо»." },
            { chinese: "我们去了公司旁边的食堂。", pinyin: "wǒ men qù le gōng sī páng biān de shí táng。", russian: "Мы пошли в столовую рядом с компанией." },
            { chinese: "我点了一份面条。", pinyin: "wǒ diǎn le yī fèn miàn tiáo。", russian: "Я заказал лапшу." },
            { chinese: "他点了一份米饭。", pinyin: "tā diǎn le yī fèn mǐ fàn。", russian: "Он заказал рис." },
            { chinese: "我们一边吃一边聊天。", pinyin: "wǒ men yī biān chī yī biān liáo tiān。", russian: "Мы ели и болтали." },
            { chinese: "他说：'今天工作忙吗？'", pinyin: "tā shuō：'jīn tiān gōng zuò máng ma？'", russian: "Он сказал: «Сегодня на работе много дел?»" },
            { chinese: "我说：'有一点忙。'", pinyin: "wǒ shuō：'yǒu yī diǎn máng。'", russian: "Я сказал: «Немного есть»." },
            { chinese: "吃完饭我们回去了。", pinyin: "chī wán fàn wǒ men huí qù le。", russian: "Поев, мы вернулись." }
        ]
    },
    {
        id: 4,
        title: "🏠 Вечер дома",
        lines: [
            { chinese: "晚上我回家了。", pinyin: "wǎn shang wǒ huí jiā le。", russian: "Вечером я вернулся домой." },
            { chinese: "我很累。", pinyin: "wǒ hěn lèi。", russian: "Я очень устал." },
            { chinese: "我脱了鞋。", pinyin: "wǒ tuō le xié。", russian: "Я снял обувь." },
            { chinese: "我坐在沙发上。", pinyin: "wǒ zuò zài shā fā shang。", russian: "Я сел на диван." },
            { chinese: "我打开电视。", pinyin: "wǒ dǎ kāi diàn shì。", russian: "Я включил телевизор." },
            { chinese: "但我不想看。", pinyin: "dàn wǒ bù xiǎng kàn。", russian: "Но я не хотел смотреть." },
            { chinese: "我拿起手机。", pinyin: "wǒ ná qǐ shǒu jī。", russian: "Я взял телефон." },
            { chinese: "我看了一会儿视频。", pinyin: "wǒ kàn le yī huì er shì pín。", russian: "Я посмотрел видео." },
            { chinese: "然后我去洗澡。", pinyin: "rán hòu wǒ qù xǐ zǎo。", russian: "Потом я пошёл в душ." },
            { chinese: "水很暖和。", pinyin: "shuǐ hěn nuǎn huo。", russian: "Вода была тёплой." },
            { chinese: "我感觉好多了。", pinyin: "wǒ gǎn jué hǎo duō le。", russian: "Я почувствовал себя намного лучше." },
            { chinese: "我躺在床上。", pinyin: "wǒ tǎng zài chuáng shang。", russian: "Я лёг в кровать." },
            { chinese: "我闭上眼睛。", pinyin: "wǒ bì shàng yǎn jīng。", russian: "Я закрыл глаза." },
            { chinese: "我想睡觉了。", pinyin: "wǒ xiǎng shuì jiào le。", russian: "Я захотел спать." },
            { chinese: "明天还要上班。", pinyin: "míng tiān hái yào shàng bān。", russian: "Завтра снова на работу." }
        ]
    },
    {
        id: 5,
        title: "🚕 Вызов такси",
        lines: [
            { chinese: "我想打车去火车站。", pinyin: "wǒ xiǎng dǎ chē qù huǒ chē zhàn。", russian: "Я хочу поехать на такси на вокзал." },
            { chinese: "我打开手机软件。", pinyin: "wǒ dǎ kāi shǒu jī ruǎn jiàn。", russian: "Я открыл приложение в телефоне." },
            { chinese: "我输入了地址。", pinyin: "wǒ shū rù le dì zhǐ。", russian: "Я ввёл адрес." },
            { chinese: "司机很快接单了。", pinyin: "sī jī hěn kuài jiē dān le。", russian: "Водитель быстро принял заказ." },
            { chinese: "车来了。", pinyin: "chē lái le。", russian: "Машина приехала." },
            { chinese: "司机问我：'是你的手机尾号吗？'", pinyin: "sī jī wèn wǒ：'shì nǐ de shǒu jī wěi hào ma？'", russian: "Водитель спросил: «Это последние цифры твоего телефона?»" },
            { chinese: "我说：'是的'。", pinyin: "wǒ shuō：'shì de'。", russian: "Я сказал: «Да»." },
            { chinese: "我上了车。", pinyin: "wǒ shàng le chē。", russian: "Я сел в машину." },
            { chinese: "车上很干净。", pinyin: "chē shàng hěn gān jìng。", russian: "В машине было чисто." },
            { chinese: "司机开得很稳。", pinyin: "sī jī kāi dé hěn wěn。", russian: "Водитель вёл очень плавно." },
            { chinese: "路上有点堵车。", pinyin: "lù shàng yǒu diǎn dǔ chē。", russian: "По дороге были небольшие пробки." },
            { chinese: "司机说：'前面红灯了'。", pinyin: "sī jī shuō：'qián miàn hóng dēng le'。", russian: "Водитель сказал: «Впереди красный свет»." },
            { chinese: "我说：'没关系，我不着急'。", pinyin: "wǒ shuō：'méi guān xì，wǒ bù zháo jí'。", russian: "Я сказал: «Ничего, я не спешу»." },
            { chinese: "到了火车站。", pinyin: "dào le huǒ chē zhàn。", russian: "Приехали на вокзал." },
            { chinese: "司机说：'到了，慢走'。", pinyin: "sī jī shuō：'dào le，màn zǒu'。", russian: "Водитель сказал: «Приехали, осторожно»." },
            { chinese: "我扫码付了钱。", pinyin: "wǒ sǎo mǎ fù le qián。", russian: "Я отсканировал QR-код и заплатил." },
            { chinese: "我说：'谢谢师傅'。", pinyin: "wǒ shuō：'xiè xie shī fu'。", russian: "Я сказал: «Спасибо, шофёр»." },
            { chinese: "我下车了。", pinyin: "wǒ xià chē le。", russian: "Я вышел из машины." }
        ]
    },
    {
        id: 6,
        title: "💊 В аптеке",
        lines: [
            { chinese: "我感觉不舒服。", pinyin: "wǒ gǎn jué bù shū fu。", russian: "Я плохо себя чувствую." },
            { chinese: "我头疼，还有点咳嗽。", pinyin: "wǒ tóu téng，hái yǒu diǎn ké sòu。", russian: "У меня болит голова и немного кашляю." },
            { chinese: "我去药店买药。", pinyin: "wǒ qù yào diàn mǎi yào。", russian: "Я иду в аптеку купить лекарство." },
            { chinese: "店员问我：'你好，需要什么？'", pinyin: "diàn yuán wèn wǒ：'nǐ hǎo，xū yào shén me？'", russian: "Продавец спросил: «Здравствуйте, что нужно?»" },
            { chinese: "我说：'我头疼，有感冒药吗？'", pinyin: "wǒ shuō：'wǒ tóu téng，yǒu gǎn mào yào ma？'", russian: "Я сказал: «У меня болит голова, есть лекарство от простуды?»" },
            { chinese: "她说：'有这个，一天两次，一次一片'。", pinyin: "tā shuō：'yǒu zhè ge，yī tiān liǎng cì，yī cì yī piàn'。", russian: "Она сказала: «Есть такое, два раза в день, по одной таблетке»." },
            { chinese: "我问：'有副作用吗？'", pinyin: "wǒ wèn：'yǒu fù zuò yòng ma？'", russian: "Я спросил: «Есть побочные эффекты?»" },
            { chinese: "她说：'没有，很安全'。", pinyin: "tā shuō：'méi yǒu，hěn ān quán'。", russian: "Она сказала: «Нет, очень безопасно»." },
            { chinese: "我又问：'有体温计吗？'", pinyin: "wǒ yòu wèn：'yǒu tǐ wēn jì ma？'", russian: "Я снова спросил: «Есть градусник?»" },
            { chinese: "她说：'有，在第二个柜台'。", pinyin: "tā shuō：'yǒu，zài dì èr gè guì tái'。", russian: "Она сказала: «Есть, на второй стойке»." },
            { chinese: "我去拿了体温计。", pinyin: "wǒ qù ná le tǐ wēn jì。", russian: "Я пошёл и взял градусник." },
            { chinese: "一共三十五块。", pinyin: "yī gòng sān shí wǔ kuài。", russian: "Всего 35 юаней." },
            { chinese: "我付了钱。", pinyin: "wǒ fù le qián。", russian: "Я заплатил." },
            { chinese: "店员说：'多喝水，好好休息'。", pinyin: "diàn yuán shuō：'duō hē shuǐ，hǎo hǎo xiū xi'。", russian: "Продавец сказал: «Пей больше воды, хорошо отдыхай»." },
            { chinese: "我说：'谢谢'。", pinyin: "wǒ shuō：'xiè xie'。", russian: "Я сказал: «Спасибо»." },
            { chinese: "我回家了。", pinyin: "wǒ huí jiā le。", russian: "Я вернулся домой." }
        ]
    },
    {
        id: 7,
        title: "🏨 Гостиница",
        lines: [
            { chinese: "我出差到了另一个城市。", pinyin: "wǒ chū chāi dào le lìng yī gè chéng shì。", russian: "Я приехал в командировку в другой город." },
            { chinese: "我在网上订了酒店。", pinyin: "wǒ zài wǎng shàng dìng le jiǔ diàn。", russian: "Я забронировал отель онлайн." },
            { chinese: "我到了酒店前台。", pinyin: "wǒ dào le jiǔ diàn qián tái。", russian: "Я подошёл к стойке регистрации." },
            { chinese: "前台说：'晚上好，有预订吗？'", pinyin: "qián tái shuō：'wǎn shàng hǎo，yǒu yù dìng ma？'", russian: "Администратор сказал: «Добрый вечер, есть бронь?»" },
            { chinese: "我说：'有，我姓王'。", pinyin: "wǒ shuō：'yǒu，wǒ xìng wáng'。", russian: "Я сказал: «Да, моя фамилия Ван»." },
            { chinese: "她说：'请给我身份证'。", pinyin: "tā shuō：'qǐng gěi wǒ shēn fèn zhèng'。", russian: "Она сказала: «Дайте, пожалуйста, удостоверение личности»." },
            { chinese: "我把身份证给她。", pinyin: "wǒ bǎ shēn fèn zhèng gěi tā。", russian: "Я дал ей паспорт." },
            { chinese: "她在电脑上查了一下。", pinyin: "tā zài diàn nǎo shàng chá le yī xià。", russian: "Она проверила в компьютере." },
            { chinese: "她说：'找到了，您订的是单人间'。", pinyin: "tā shuō：'zhǎo dào le，nín dìng de shì dān rén jiān'。", russian: "Она сказала: «Нашла, у вас забронирован одноместный номер»." },
            { chinese: "我说：'对，住两天'。", pinyin: "wǒ shuō：'duì，zhù liǎng tiān'。", russian: "Я сказал: «Да, на два дня»." },
            { chinese: "她给了我房卡。", pinyin: "tā gěi le wǒ fáng kǎ。", russian: "Она дала мне ключ-карту." },
            { chinese: "她说：'房间在五楼，电梯在右边'。", pinyin: "tā shuō：'fáng jiān zài wǔ lóu，diàn tī zài yòu biān'。", russian: "Она сказала: «Номер на пятом этаже, лифт справа»." },
            { chinese: "我说：'谢谢，早餐几点？'", pinyin: "wǒ shuō：'xiè xie，zǎo cān jǐ diǎn？'", russian: "Я сказал: «Спасибо, во сколько завтрак?»" },
            { chinese: "她说：'早上七点到九点'。", pinyin: "tā shuō：'zǎo shang qī diǎn dào jiǔ diǎn'。", russian: "Она сказала: «С семи до девяти утра»." },
            { chinese: "我坐电梯上楼了。", pinyin: "wǒ zuò diàn tī shàng lóu le。", russian: "Я поднялся на лифте." },
            { chinese: "我找到了我的房间。", pinyin: "wǒ zhǎo dào le wǒ de fáng jiān。", russian: "Я нашёл свой номер." },
            { chinese: "我用房卡开了门。", pinyin: "wǒ yòng fáng kǎ kāi le mén。", russian: "Я открыл дверь ключ-картой." },
            { chinese: "房间不大，但是很干净。", pinyin: "fáng jiān bù dà，dàn shì hěn gān jìng。", russian: "Номер небольшой, но очень чистый." },
            { chinese: "我把行李放下。", pinyin: "wǒ bǎ xíng li fàng xià。", russian: "Я поставил багаж." },
            { chinese: "我洗了个脸。", pinyin: "wǒ xǐ le gè liǎn。", russian: "Я умылся." },
            { chinese: "今天累了，早点睡。", pinyin: "jīn tiān lèi le，zǎo diǎn shuì。", russian: "Сегодня устал, лягу пораньше." }
        ]
    },
    {
        id: 8,
        title: "🍜 В ресторане",
        lines: [
            { chinese: "今天我一个人去吃饭。", pinyin: "jīn tiān wǒ yī gè rén qù chī fàn。", russian: "Сегодня я пошёл поесть один." },
            { chinese: "我走进一家小餐馆。", pinyin: "wǒ zǒu jìn yī jiā xiǎo cān guǎn。", russian: "Я зашёл в маленький ресторан." },
            { chinese: "服务员给我菜单。", pinyin: "fú wù yuán gěi wǒ cài dān。", russian: "Официант дал мне меню." },
            { chinese: "我看了一会儿菜单。", pinyin: "wǒ kàn le yī huì er cài dān。", russian: "Я посмотрел меню." },
            { chinese: "服务员问：'你想吃什么？'", pinyin: "fú wù yuán wèn：'nǐ xiǎng chī shén me？'", russian: "Официант спросил: «Что хотите поесть?»" },
            { chinese: "我说：'有推荐的吗？'", pinyin: "wǒ shuō：'yǒu tuī jiàn de ma？'", russian: "Я сказал: «Есть что-нибудь рекомендуемое?»" },
            { chinese: "她说：'我们的鱼香肉丝很好吃'。", pinyin: "tā shuō：'wǒ men de yú xiāng ròu sī hěn hǎo chī'。", russian: "Она сказала: «Наша свинина по-сычуаньски очень вкусная»." },
            { chinese: "我说：'好，来一份鱼香肉丝'。", pinyin: "wǒ shuō：'hǎo，lái yī fèn yú xiāng ròu sī'。", russian: "Я сказал: «Хорошо, давайте порцию свинины по-сычуаньски»." },
            { chinese: "'还要一碗米饭'。", pinyin: "'hái yào yī wǎn mǐ fàn'。", russian: "«И ещё одну миску риса»." },
            { chinese: "她说：'还要别的吗？'", pinyin: "tā shuō：'hái yào bié de ma？'", russian: "Она сказала: «Что-нибудь ещё?»" },
            { chinese: "我说：'不要了，谢谢'。", pinyin: "wǒ shuō：'bù yào le，xiè xie'。", russian: "Я сказал: «Нет, спасибо»." },
            { chinese: "十分钟后菜来了。", pinyin: "shí fēn zhōng hòu cài lái le。", russian: "Через десять минут принесли еду." },
            { chinese: "我吃了一口。", pinyin: "wǒ chī le yī kǒu。", russian: "Я попробовал." },
            { chinese: "很好吃，有一点辣。", pinyin: "hěn hǎo chī，yǒu yī diǎn là。", russian: "Очень вкусно, немного остро." },
            { chinese: "我吃完了。", pinyin: "wǒ chī wán le。", russian: "Я поел." },
            { chinese: "我说：'买单'。", pinyin: "wǒ shuō：'mǎi dān'。", russian: "Я сказал: «Счёт»." },
            { chinese: "服务员说：'一共三十二块'。", pinyin: "fú wù yuán shuō：'yī gòng sān shí èr kuài'。", russian: "Официант сказал: «Всего 32 юаня»." },
            { chinese: "我付了钱。", pinyin: "wǒ fù le qián。", russian: "Я заплатил." },
            { chinese: "我走出餐馆。", pinyin: "wǒ zǒu chū cān guǎn。", russian: "Я вышел из ресторана." },
            { chinese: "我吃得很饱。", pinyin: "wǒ chī dé hěn bǎo。", russian: "Я наелся досыта." }
        ]
    },
    {
        id: 9,
        title: "✂️ В парикмахерской",
        lines: [
            { chinese: "我的头发太长了。", pinyin: "wǒ de tóu fa tài cháng le。", russian: "Мои волосы слишком длинные." },
            { chinese: "我去理发店剪头发。", pinyin: "wǒ qù lǐ fà diàn jiǎn tóu fa。", russian: "Я пошёл в парикмахерскую подстричься." },
            { chinese: "理发师问：'你想怎么剪？'", pinyin: "lǐ fà shī wèn：'nǐ xiǎng zěn me jiǎn？'", russian: "Парикмахер спросил: «Как хотите постричь?»" },
            { chinese: "我说：'稍微短一点'。", pinyin: "wǒ shuō：'shāo wēi duǎn yī diǎn'。", russian: "Я сказал: «Немного покороче»." },
            { chinese: "'不要剪太短'。", pinyin: "'bù yào jiǎn tài duǎn'。", russian: "«Не стригите слишком коротко»." },
            { chinese: "理发师说：'好的，明白了'。", pinyin: "lǐ fà shī shuō：'hǎo de，míng bái le'。", russian: "Парикмахер сказал: «Хорошо, понял»." },
            { chinese: "他先给我洗头发。", pinyin: "tā xiān gěi wǒ xǐ tóu fa。", russian: "Сначала он помыл мне голову." },
            { chinese: "水很暖和。", pinyin: "shuǐ hěn nuǎn huo。", russian: "Вода была тёплой." },
            { chinese: "然后他开始剪。", pinyin: "rán hòu tā kāi shǐ jiǎn。", russian: "Потом он начал стричь." },
            { chinese: "他剪得很认真。", pinyin: "tā jiǎn dé hěn rèn zhēn。", russian: "Он стриг очень внимательно." },
            { chinese: "我闭上眼睛休息。", pinyin: "wǒ bì shàng yǎn jīng xiū xi。", russian: "Я закрыл глаза и отдыхал." },
            { chinese: "二十分钟后剪完了。", pinyin: "èr shí fēn zhōng hòu jiǎn wán le。", russian: "Через двадцать минут стрижка закончилась." },
            { chinese: "理发师问：'你看可以吗？'", pinyin: "lǐ fà shī wèn：'nǐ kàn kě yǐ ma？'", russian: "Парикмахер спросил: «Посмотрите, нормально?»" },
            { chinese: "我看了看镜子。", pinyin: "wǒ kàn le kàn jìng zi。", russian: "Я посмотрел в зеркало." },
            { chinese: "我说：'很好，谢谢'。", pinyin: "wǒ shuō：'hěn hǎo，xiè xie'。", russian: "Я сказал: «Отлично, спасибо»." },
            { chinese: "我问：'多少钱？'", pinyin: "wǒ wèn：'duō shǎo qián？'", russian: "Я спросил: «Сколько стоит?»" },
            { chinese: "他说：'四十五块'。", pinyin: "tā shuō：'sì shí wǔ kuài'。", russian: "Он сказал: «45 юаней»." },
            { chinese: "我付了钱。", pinyin: "wǒ fù le qián。", russian: "Я заплатил." },
            { chinese: "我说：'下次还来找你'。", pinyin: "wǒ shuō：'xià cì hái lái zhǎo nǐ'。", russian: "Я сказал: «В следующий раз снова приду к тебе»." },
            { chinese: "他笑了。", pinyin: "tā xiào le。", russian: "Он улыбнулся." },
            { chinese: "我走出理发店。", pinyin: "wǒ zǒu chū lǐ fà diàn。", russian: "Я вышел из парикмахерской." },
            { chinese: "我感觉轻松多了。", pinyin: "wǒ gǎn jué qīng sōng duō le。", russian: "Я почувствовал себя намного легче." }
        ]
    },
    {
        id: 10,
        title: "📦 На почте",
        lines: [
            { chinese: "我要给朋友寄一个包裹。", pinyin: "wǒ yào gěi péng you jì yī gè bāo guǒ。", russian: "Я хочу отправить другу посылку." },
            { chinese: "我去邮局。", pinyin: "wǒ qù yóu jú。", russian: "Я иду на почту." },
            { chinese: "邮局里人不多。", pinyin: "yóu jú lǐ rén bù duō。", russian: "На почте мало людей." },
            { chinese: "我排队等了五分钟。", pinyin: "wǒ pái duì děng le wǔ fēn zhōng。", russian: "Я постоял в очереди пять минут." },
            { chinese: "到我了。", pinyin: "dào wǒ le。", russian: "Моя очередь." },
            { chinese: "工作人员问：'你好，寄什么？'", pinyin: "gōng zuò rén yuán wèn：'nǐ hǎo，jì shén me？'", russian: "Сотрудник спросил: «Здравствуйте, что отправляете?»" },
            { chinese: "我说：'寄一个包裹给朋友'。", pinyin: "wǒ shuō：'jì yī gè bāo guǒ gěi péng you'。", russian: "Я сказал: «Посылку другу»." },
            { chinese: "她问：'里面是什么？'", pinyin: "tā wèn：'lǐ miàn shì shén me？'", russian: "Она спросила: «Что внутри?»" },
            { chinese: "我说：'是衣服和书'。", pinyin: "wǒ shuō：'shì yī fu hé shū'。", russian: "Я сказал: «Одежда и книги»." },
            { chinese: "她说：'需要打开检查一下'。", pinyin: "tā shuō：'xū yào dǎ kāi jiǎn chá yī xià'。", russian: "Она сказала: «Нужно открыть и проверить»." },
            { chinese: "我打开包裹。", pinyin: "wǒ dǎ kāi bāo guǒ。", russian: "Я открыл посылку." },
            { chinese: "她看了一下。", pinyin: "tā kàn le yī xià。", russian: "Она посмотрела." },
            { chinese: "她说：'可以了'。", pinyin: "tā shuō：'kě yǐ le'。", russian: "Она сказала: «Можно»." },
            { chinese: "她给我一张单子。", pinyin: "tā gěi wǒ yī zhāng dān zi。", russian: "Она дала мне бланк." },
            { chinese: "我填了地址和名字。", pinyin: "wǒ tián le dì zhǐ hé míng zi。", russian: "Я заполнил адрес и имя." },
            { chinese: "她问：'普通快递还是快一点的？'", pinyin: "tā wèn：'pǔ tōng kuài dì hái shì kuài yī diǎn de？'", russian: "Она спросила: «Обычной или быстрой доставкой?»" },
            { chinese: "我说：'普通的就行'。", pinyin: "wǒ shuō：'pǔ tōng de jiù xíng'。", russian: "Я сказал: «Обычной подойдёт»." },
            { chinese: "她说：'十五块钱'。", pinyin: "tā shuō：'shí wǔ kuài qián'。", russian: "Она сказала: «15 юаней»." },
            { chinese: "我付了钱。", pinyin: "wǒ fù le qián。", russian: "Я заплатил." },
            { chinese: "她给了我一张收据。", pinyin: "tā gěi le wǒ yī zhāng shōu jù。", russian: "Она дала мне квитанцию." },
            { chinese: "我说：'大概几天能到？'", pinyin: "wǒ shuō：'dà gài jǐ tiān néng dào？'", russian: "Я спросил: «Примерно через сколько дней дойдёт?»" },
            { chinese: "她说：'三天左右'。", pinyin: "tā shuō：'sān tiān zuǒ yòu'。", russian: "Она сказала: «Дня три»." },
            { chinese: "我说：'谢谢'。", pinyin: "wǒ shuō：'xiè xie'。", russian: "Я сказал: «Спасибо»." },
            { chinese: "我走出邮局。", pinyin: "wǒ zǒu chū yóu jú。", russian: "Я вышел с почты." },
            { chinese: "朋友一定会喜欢。", pinyin: "péng you yī dìng huì xǐ huan。", russian: "Другу обязательно понравится." }
        ]
    },
    {
        id: 11,
        title: "📞 Звонок маме",
        lines: [
            { chinese: "下班以后我给妈妈打电话。", pinyin: "xià bān yǐ hòu wǒ gěi mā ma dǎ diàn huà。", russian: "После работы я позвонил маме." },
            { chinese: "电话通了。", pinyin: "diàn huà tōng le。", russian: "Телефон дозвонился." },
            { chinese: "妈妈说：'喂，在干嘛？'", pinyin: "mā ma shuō：'wèi，zài gàn ma？'", russian: "Мама сказала: «Алло, чем занимаешься?»" },
            { chinese: "我说：'妈妈，我刚下班'。", pinyin: "wǒ shuō：'mā ma，wǒ gāng xià bān'。", russian: "Я сказал: «Мама, я только что с работы»." },
            { chinese: "她问：'吃饭了吗？'", pinyin: "tā wèn：'chī fàn le ma？'", russian: "Она спросила: «Поел?»" },
            { chinese: "我说：'还没吃，正准备吃'。", pinyin: "wǒ shuō：'hái méi chī，zhèng zhǔn bèi chī'。", russian: "Я сказал: «Ещё нет, только собираюсь»." },
            { chinese: "她说：'一定要按时吃饭'。", pinyin: "tā shuō：'yī dìng yào àn shí chī fàn'。", russian: "Она сказала: «Обязательно ешь вовремя»." },
            { chinese: "我说：'知道了，您放心'。", pinyin: "wǒ shuō：'zhī dào le，nín fàng xīn'。", russian: "Я сказал: «Знаю, не волнуйтесь»." },
            { chinese: "她问：'最近工作忙吗？'", pinyin: "tā wèn：'zuì jìn gōng zuò máng ma？'", russian: "Она спросила: «На работе много дел в последнее время?»" },
            { chinese: "我说：'有一点忙，但是不累'。", pinyin: "wǒ shuō：'yǒu yī diǎn máng，dàn shì bù lèi'。", russian: "Я сказал: «Немного есть, но не устаю»." },
            { chinese: "她说：'早点睡觉，别熬夜'。", pinyin: "tā shuō：'zǎo diǎn shuì jiào，bié áo yè'。", russian: "Она сказала: «Ложись пораньше, не сиди допоздна»." },
            { chinese: "我说：'好的，妈妈你也是'。", pinyin: "wǒ shuō：'hǎo de，mā ma nǐ yě shì'。", russian: "Я сказал: «Хорошо, мама, ты тоже»." },
            { chinese: "她问：'周末回来吗？'", pinyin: "tā wèn：'zhōu mò huí lái ma？'", russian: "Она спросила: «Приедешь на выходные?»" },
            { chinese: "我说：'这周末有事，下周末回去'。", pinyin: "wǒ shuō：'zhè zhōu mò yǒu shì，xià zhōu mò huí qù'。", russian: "Я сказал: «В эти выходные дела, приеду в следующие»." },
            { chinese: "她说：'好，我给你做爱吃的菜'。", pinyin: "tā shuō：'hǎo，wǒ gěi nǐ zuò ài chī de cài'。", russian: "Она сказала: «Хорошо, я приготовлю твои любимые блюда»." },
            { chinese: "我说：'谢谢妈妈，我爱您'。", pinyin: "wǒ shuō：'xiè xie mā ma，wǒ ài nín'。", russian: "Я сказал: «Спасибо, мама, я люблю тебя»." },
            { chinese: "她笑了。", pinyin: "tā xiào le。", russian: "Она засмеялась." },
            { chinese: "她说：'好了，快去吃饭吧'。", pinyin: "tā shuō：'hǎo le，kuài qù chī fàn ba'。", russian: "Она сказала: «Ладно, иди скорее ешь»." },
            { chinese: "我说：'好的，拜拜'。", pinyin: "wǒ shuō：'hǎo de，bài bài'。", russian: "Я сказал: «Хорошо, пока»." },
            { chinese: "我挂了电话。", pinyin: "wǒ guà le diàn huà。", russian: "Я повесил трубку." },
            { chinese: "我心里暖暖的。", pinyin: "wǒ xīn lǐ nuǎn nuǎn de。", russian: "У меня на душе было тепло." }
        ]
    },
    {
        id: 12,
        title: "🚌 В автобусе",
        lines: [
            { chinese: "今天早上我坐公交车。", pinyin: "jīn tiān zǎo shang wǒ zuò gōng jiāo chē。", russian: "Сегодня утром я поехал на автобусе." },
            { chinese: "车上有很多人。", pinyin: "chē shàng yǒu hěn duō rén。", russian: "В автобусе было много людей." },
            { chinese: "我站在一个阿姨旁边。", pinyin: "wǒ zhàn zài yī gè ā yí páng biān。", russian: "Я стоял рядом с тётей." },
            { chinese: "她拿着很多东西。", pinyin: "tā ná zhe hěn duō dōng xi。", russian: "У неё было много вещей." },
            { chinese: "我帮她拿了一个包。", pinyin: "wǒ bāng tā ná le yī gè bāo。", russian: "Я помог ей донести сумку." },
            { chinese: "她说：'谢谢你，小伙子'。", pinyin: "tā shuō：'xiè xie nǐ，xiǎo huǒ zi'。", russian: "Она сказала: «Спасибо, молодой человек»." },
            { chinese: "我说：'不客气'。", pinyin: "wǒ shuō：'bù kè qi'。", russian: "Я сказал: «Пожалуйста»." },
            { chinese: "我到站了。", pinyin: "wǒ dào zhàn le。", russian: "Я приехал на свою остановку." },
            { chinese: "我下车去公司。", pinyin: "wǒ xià chē qù gōng sī。", russian: "Я вышел и пошёл в компанию." }
        ]
    },
    {
        id: 13,
        title: "🛒 В супермаркете",
        lines: [
            { chinese: "下班以后我去超市买东西。", pinyin: "xià bān yǐ hòu wǒ qù chāo shì mǎi dōng xi。", russian: "После работы я пошёл в супермаркет за покупками." },
            { chinese: "我需要买牛奶、面包和鸡蛋。", pinyin: "wǒ xū yào mǎi niú nǎi、miàn bāo hé jī dàn。", russian: "Мне нужно купить молоко, хлеб и яйца." },
            { chinese: "水果很新鲜。", pinyin: "shuǐ guǒ hěn xīn xiān。", russian: "Фрукты очень свежие." },
            { chinese: "我买了三个苹果。", pinyin: "wǒ mǎi le sān gè píng guǒ。", russian: "Я купил три яблока." },
            { chinese: "香蕉也打折。", pinyin: "xiāng jiāo yě dǎ zhé。", russian: "На бананы тоже скидка." },
            { chinese: "我拿了一串香蕉。", pinyin: "wǒ ná le yī chuàn xiāng jiāo。", russian: "Я взял одну связку бананов." },
            { chinese: "在肉柜台我买了鸡肉。", pinyin: "zài ròu guì tái wǒ mǎi le jī ròu。", russian: "В мясном отделе я купил курицу." },
            { chinese: "鸡肉很便宜。", pinyin: "jī ròu hěn pián yi。", russian: "Курица была недорогой." },
            { chinese: "我又买了一瓶水。", pinyin: "wǒ yòu mǎi le yī píng shuǐ。", russian: "Я также купил бутылку воды." },
            { chinese: "我去收银台付钱。", pinyin: "wǒ qù shōu yín tái fù qián。", russian: "Я пошёл на кассу заплатить." },
            { chinese: "一共八十五块。", pinyin: "yī gòng bā shí wǔ kuài。", russian: "Всего 85 юаней." },
            { chinese: "我付了钱回家。", pinyin: "wǒ fù le qián huí jiā。", russian: "Я заплатил и пошёл домой." }
        ]
    },
    {
        id: 14,
        title: "😊 Мой день",
        lines: [
            { chinese: "今天我心情很好。", pinyin: "jīn tiān wǒ xīn qíng hěn hǎo。", russian: "Сегодня у меня очень хорошее настроение." },
            { chinese: "早上阳光很漂亮。", pinyin: "zǎo shang yáng guāng hěn piào liang。", russian: "Утром было красивое солнце." },
            { chinese: "我觉得很开心。", pinyin: "wǒ jué de hěn kāi xīn。", russian: "Я чувствовал себя очень счастливым." },
            { chinese: "中午我和朋友一起吃饭。", pinyin: "zhōng wǔ wǒ hé péng you yī qǐ chī fàn。", russian: "В обед мы с другом вместе поели." },
            { chinese: "我们吃了火锅。", pinyin: "wǒ men chī le huǒ guō。", russian: "Мы ели хого." },
            { chinese: "火锅很辣，但是很好吃。", pinyin: "huǒ guō hěn là，dàn shì hěn hǎo chī。", russian: "Хого было очень острым, но очень вкусным." },
            { chinese: "下午我有点累。", pinyin: "xià wǔ wǒ yǒu diǎn lèi。", russian: "После обеда я немного устал." },
            { chinese: "我喝了一杯咖啡。", pinyin: "wǒ hē le yī bēi kā fēi。", russian: "Я выпил чашку кофе." },
            { chinese: "咖啡让我清醒了。", pinyin: "kā fēi ràng wǒ qīng xǐng le。", russian: "Кофе меня взбодрил." },
            { chinese: "晚上我回家看电视。", pinyin: "wǎn shang wǒ huí jiā kàn diàn shì。", russian: "Вечером я вернулся домой и посмотрел телевизор." },
            { chinese: "今天是很棒的一天。", pinyin: "jīn tiān shì hěn bàng de yī tiān。", russian: "Сегодня был отличный день." }
        ]
    },
    {
        id: 15,
        title: "🍎 Любимые продукты",
        lines: [
            { chinese: "我喜欢吃水果。", pinyin: "wǒ xǐ huan chī shuǐ guǒ。", russian: "Я люблю есть фрукты." },
            { chinese: "苹果又甜又脆。", pinyin: "píng guǒ yòu tián yòu cuì。", russian: "Яблоки сладкие и хрустящие." },
            { chinese: "西瓜很甜，夏天我常常吃。", pinyin: "xī guā hěn tián，xià tiān wǒ cháng cháng chī。", russian: "Арбузы очень сладкие, летом я часто их ем." },
            { chinese: "我不喜欢吃苦瓜。", pinyin: "wǒ bù xǐ huan chī kǔ guā。", russian: "Я не люблю горькую тыкву." },
            { chinese: "苦瓜太苦了。", pinyin: "kǔ guā tài kǔ le。", russian: "Горькая тыква слишком горькая." },
            { chinese: "我喜欢吃面条和饺子。", pinyin: "wǒ xǐ huan chī miàn tiáo hé jiǎo zi。", russian: "Я люблю есть лапшу и пельмени." },
            { chinese: "饺子是我最喜欢的食物。", pinyin: "jiǎo zi shì wǒ zuì xǐ huan de shí wù。", russian: "Пельмени — моя самая любимая еда." },
            { chinese: "我也喜欢喝汤。", pinyin: "wǒ yě xǐ huan hē tāng。", russian: "Я также люблю суп." },
            { chinese: "每天早上我喝一碗粥。", pinyin: "měi tiān zǎo shang wǒ hē yī wǎn zhōu。", russian: "Каждое утро я ем тарелку каши." },
            { chinese: "我觉得中国菜很好吃。", pinyin: "wǒ jué de zhōng guó cài hěn hǎo chī。", russian: "Я считаю, что китайская кухня очень вкусная." }
        ]
    },
    {
        id: 16,
        title: "👀 Что я делаю каждый день",
        lines: [
            { chinese: "我每天早上七点起床。", pinyin: "wǒ měi tiān zǎo shang qī diǎn qǐ chuáng。", russian: "Я каждый день встаю в 7 утра." },
            { chinese: "我洗脸，刷牙，然后吃早饭。", pinyin: "wǒ xǐ liǎn，shuā yá，rán hòu chī zǎo fàn。", russian: "Я умываюсь, чищу зубы, потом завтракаю." },
            { chinese: "我八点出门去上班。", pinyin: "wǒ bā diǎn chū mén qù shàng bān。", russian: "Я выхожу из дома в 8 часов на работу." },
            { chinese: "我坐地铁去公司。", pinyin: "wǒ zuò dì tiě qù gōng sī。", russian: "Я еду на метро в компанию." },
            { chinese: "在路上我听音乐。", pinyin: "zài lù shàng wǒ tīng yīn yuè。", russian: "По дороге я слушаю музыку." },
            { chinese: "我早上很忙。", pinyin: "wǒ zǎo shang hěn máng。", russian: "Я очень занят утром." },
            { chinese: "中午我和同事一起吃饭。", pinyin: "zhōng wǔ wǒ hé tóng shì yī qǐ chī fàn。", russian: "В обед я ем вместе с коллегами." },
            { chinese: "下午我有点累。", pinyin: "xià wǔ wǒ yǒu diǎn lèi。", russian: "После обеда я немного устаю." },
            { chinese: "我五点半下班。", pinyin: "wǒ wǔ diǎn bàn xià bān。", russian: "Я заканчиваю работу в 5:30." },
            { chinese: "晚上我回家休息。", pinyin: "wǎn shang wǒ huí jiā xiū xi。", russian: "Вечером я возвращаюсь домой отдыхать." },
            { chinese: "我十一点睡觉。", pinyin: "wǒ shí yī diǎn shuì jiào。", russian: "Я ложусь спать в 11 часов." }
        ]
    },
    {
        id: 17,
        title: "❤️ Мои чувства и эмоции",
        lines: [
            { chinese: "今天我收到一个礼物。", pinyin: "jīn tiān wǒ shōu dào yī gè lǐ wù。", russian: "Сегодня я получил подарок." },
            { chinese: "我很开心，我笑了。", pinyin: "wǒ hěn kāi xīn，wǒ xiào le。", russian: "Мне очень радостно, я засмеялся." },
            { chinese: "我特别喜欢这个礼物。", pinyin: "wǒ tè bié xǐ huan zhè gè lǐ wù。", russian: "Мне особенно нравится этот подарок." },
            { chinese: "但是昨天我很难过。", pinyin: "dàn shì zuó tiān wǒ hěn nán guò。", russian: "Но вчера мне было очень грустно." },
            { chinese: "我丢了钱包，我哭了。", pinyin: "wǒ diū le qián bāo，wǒ kū le。", russian: "Я потерял кошелёк, я плакал." },
            { chinese: "我害怕一个人回家。", pinyin: "wǒ hài pà yī gè rén huí jiā。", russian: "Я боюсь один возвращаться домой." },
            { chinese: "朋友给我打电话，我不害怕了。", pinyin: "péng you gěi wǒ dǎ diàn huà，wǒ bù hài pà le。", russian: "Друг позвонил мне, и я перестал бояться." },
            { chinese: "我现在心情很好。", pinyin: "wǒ xiàn zài xīn qíng hěn hǎo。", russian: "Сейчас у меня хорошее настроение." },
            { chinese: "我每天都笑。", pinyin: "wǒ měi tiān dōu xiào。", russian: "Я каждый день смеюсь." },
            { chinese: "生活很美好，我热爱生活。", pinyin: "shēng huó hěn měi hǎo，wǒ rè ài shēng huó。", russian: "Жизнь прекрасна, я люблю жизнь." }
        ]
    },
    {
        id: 18,
        title: "🍚 Что я ем и пью",
        lines: [
            { chinese: "早上我喝一杯牛奶。", pinyin: "zǎo shang wǒ hē yī bēi niú nǎi。", russian: "Утром я пью стакан молока." },
            { chinese: "我吃面包和鸡蛋。", pinyin: "wǒ chī miàn bāo hé jī dàn。", russian: "Я ем хлеб и яйца." },
            { chinese: "中午我吃米饭和蔬菜。", pinyin: "zhōng wǔ wǒ chī mǐ fàn hé shū cài。", russian: "В обед я ем рис и овощи." },
            { chinese: "我喝汤，我不喜欢喝可乐。", pinyin: "wǒ hē tāng，wǒ bù xǐ huan hē kě lè。", russian: "Я пью суп, я не люблю пить колу." },
            { chinese: "晚上我吃面条。", pinyin: "wǎn shang wǒ chī miàn tiáo。", russian: "Вечером я ем лапшу." },
            { chinese: "我喝绿茶。", pinyin: "wǒ hē lǜ chá。", russian: "Я пью зелёный чай." },
            { chinese: "我不吃猪肉。", pinyin: "wǒ bù chī zhū ròu。", russian: "Я не ем свинину." },
            { chinese: "我很喜欢吃水果。", pinyin: "wǒ hěn xǐ huan chī shuǐ guǒ。", russian: "Я очень люблю есть фрукты." },
            { chinese: "我每天吃一个苹果。", pinyin: "wǒ měi tiān chī yī gè píng guǒ。", russian: "Я каждый день ем одно яблоко." },
            { chinese: "吃健康的食物让我很开心。", pinyin: "chī jiàn kāng de shí wù ràng wǒ hěn kāi xīn。", russian: "Есть здоровую пищу — меня это радует." }
        ]
    },
    {
        id: 19,
        title: "💰 В магазине: покупки",
        lines: [
            { chinese: "昨天我去超市买东西。", pinyin: "zuó tiān wǒ qù chāo shì mǎi dōng xi。", russian: "Вчера я пошёл в супермаркет за покупками." },
            { chinese: "我买了很多东西。", pinyin: "wǒ mǎi le hěn duō dōng xi。", russian: "Я купил много вещей." },
            { chinese: "我买了牛奶、面包和鸡蛋。", pinyin: "wǒ mǎi le niú nǎi、miàn bāo hé jī dàn。", russian: "Я купил молоко, хлеб и яйца." },
            { chinese: "我还买了苹果和香蕉。", pinyin: "wǒ hái mǎi le píng guǒ hé xiāng jiāo。", russian: "Я также купил яблоки и бананы." },
            { chinese: "在收银台我算了一下价钱。", pinyin: "zài shōu yín tái wǒ suàn le yī xià jià qián。", russian: "На кассе я посчитал стоимость." },
            { chinese: "一共一百块钱。", pinyin: "yī gòng yī bǎi kuài qián。", russian: "Всего 100 юаней." },
            { chinese: "我付了一百块钱。", pinyin: "wǒ fù le yī bǎi kuài qián。", russian: "Я заплатил 100 юаней." },
            { chinese: "我有会员卡，所以打折了。", pinyin: "wǒ yǒu huì yuán kǎ，suǒ yǐ dǎ zhé le。", russian: "У меня есть карта постоянного покупателя, поэтому была скидка." },
            { chinese: "我实际付了八十块。", pinyin: "wǒ shí jì fù le bā shí kuài。", russian: "Я фактически заплатил 80 юаней." },
            { chinese: "我很高兴，因为我省了二十块钱。", pinyin: "wǒ hěn gāo xìng，yīn wèi wǒ shěng le èr shí kuài qián。", russian: "Я очень рад, потому что сэкономил 20 юаней." }
        ]
    },
    {
        id: 20,
        title: "👁️ Что я вижу и слышу",
        lines: [
            { chinese: "每天早上我睁开眼睛。", pinyin: "měi tiān zǎo shang wǒ zhēng kāi yǎn jīng。", russian: "Каждое утро я открываю глаза." },
            { chinese: "我看见窗外的太阳。", pinyin: "wǒ kàn jiàn chuāng wài de tài yáng。", russian: "Я вижу солнце за окном." },
            { chinese: "我听见鸟儿在唱歌。", pinyin: "wǒ tīng jiàn niǎo er zài chàng gē。", russian: "Я слышу, как поют птицы." },
            { chinese: "我走路去地铁站。", pinyin: "wǒ zǒu lù qù dì tiě zhàn。", russian: "Я иду пешком на станцию метро." },
            { chinese: "在路上我看见很多车和人。", pinyin: "zài lù shàng wǒ kàn jiàn hěn duō chē hé rén。", russian: "По дороге я вижу много машин и людей." },
            { chinese: "我听见汽车的声音。", pinyin: "wǒ tīng jiàn qì chē de shēng yīn。", russian: "Я слышу шум машин." },
            { chinese: "在办公室我工作，我看电脑。", pinyin: "zài bàn gōng shì wǒ gōng zuò，wǒ kàn diàn nǎo。", russian: "В офисе я работаю, я смотрю на компьютер." },
            { chinese: "我听见同事在说话。", pinyin: "wǒ tīng jiàn tóng shì zài shuō huà。", russian: "Я слышу, как разговаривают коллеги." },
            { chinese: "下班以后我走在街上。", pinyin: "xià bān yǐ hòu wǒ zǒu zài jiē shàng。", russian: "После работы я иду по улице." },
            { chinese: "我看见漂亮的夜景。", pinyin: "wǒ kàn jiàn piào liang de yè jǐng。", russian: "Я вижу красивый ночной вид." },
            { chinese: "我听见音乐，很开心。", pinyin: "wǒ tīng jiàn yīn yuè，hěn kāi xīn。", russian: "Я слышу музыку, мне очень радостно." },
            { chinese: "我感觉到幸福。", pinyin: "wǒ gǎn jué dào xìng fú。", russian: "Я чувствую счастье." }
        ]
    },
    {
        id: 21,
        title: "📖 Я читаю книги",
        lines: [
            { chinese: "我喜欢看书。", pinyin: "wǒ xǐ huan kàn shū。", russian: "Я люблю читать книги." },
            { chinese: "每天晚上我读一小时书。", pinyin: "měi tiān wǎn shang wǒ dú yī xiǎo shí shū。", russian: "Каждый вечер я читаю книгу один час." },
            { chinese: "现在我正在读一本小说。", pinyin: "xiàn zài wǒ zhèng zài dú yī běn xiǎo shuō。", russian: "Сейчас я читаю роман." },
            { chinese: "我看得很慢，但是很认真。", pinyin: "wǒ kàn dé hěn màn，dàn shì hěn rèn zhēn。", russian: "Я читаю медленно, но очень внимательно." },
            { chinese: "我理解书里的意思。", pinyin: "wǒ lǐ jiě shū lǐ de yì si。", russian: "Я понимаю смысл книги." },
            { chinese: "有时候我不认识一些生词。", pinyin: "yǒu shí hòu wǒ bù rèn shi yī xiē shēng cí。", russian: "Иногда я не знаю некоторые новые слова." },
            { chinese: "我查字典学习新词。", pinyin: "wǒ chá zì diǎn xué xí xīn cí。", russian: "Я смотрю в словаре и учу новые слова." },
            { chinese: "读中文书帮助我学汉语。", pinyin: "dú zhōng wén shū bāng zhù wǒ xué hàn yǔ。", russian: "Чтение китайских книг помогает мне учить китайский язык." },
            { chinese: "我可以读懂简单的文章了。", pinyin: "wǒ kě yǐ dú dǒng jiǎn dān de wén zhāng le。", russian: "Я уже могу читать и понимать простые тексты." },
            { chinese: "读书让我很快乐。", pinyin: "dú shū ràng wǒ hěn kuài lè。", russian: "Чтение приносит мне радость." }
        ]
    },
    {
        id: 22,
        title: "🎮 Я играю",
        lines: [
            { chinese: "周末我喜欢玩游戏。", pinyin: "zhōu mò wǒ xǐ huan wán yóu xì。", russian: "На выходных я люблю играть в игры." },
            { chinese: "我玩手机游戏和电脑游戏。", pinyin: "wǒ wán shǒu jī yóu xì hé diàn nǎo yóu xì。", russian: "Я играю в мобильные игры и компьютерные игры." },
            { chinese: "我最喜欢的游戏是象棋。", pinyin: "wǒ zuì xǐ huan de yóu xì shì xiàng qí。", russian: "Моя любимая игра — китайские шахматы." },
            { chinese: "我和朋友一起玩。", pinyin: "wǒ hé péng you yī qǐ wán。", russian: "Я играю вместе с другом." },
            { chinese: "我玩游戏的时候很开心。", pinyin: "wǒ wán yóu xì de shí hòu hěn kāi xīn。", russian: "Когда я играю в игры, мне очень весело." },
            { chinese: "有时候我赢了，有时候我输了。", pinyin: "yǒu shí hòu wǒ yíng le，yǒu shí hòu wǒ shū le。", russian: "Иногда я выигрываю, иногда проигрываю." },
            { chinese: "输了也没关系，我不难过。", pinyin: "shū le yě méi guān xì，wǒ bù nán guò。", russian: "Проигрывать — не страшно, я не расстраиваюсь." },
            { chinese: "我可以玩两个小时。", pinyin: "wǒ kě yǐ wán liǎng gè xiǎo shí。", russian: "Я могу играть два часа." },
            { chinese: "但是我不玩太多，因为要学习。", pinyin: "dàn shì wǒ bù wán tài duō，yīn wèi yào xué xí。", russian: "Но я не играю слишком много, потому что нужно учиться." },
            { chinese: "玩游戏是一种放松。", pinyin: "wán yóu xì shì yī zhǒng fàng sōng。", russian: "Игра — это способ отдохнуть." }
        ]
    }
];
