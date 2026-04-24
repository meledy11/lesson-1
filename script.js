// ОБЩИЕ ФУНКЦИИ ДЛЯ ВСЕХ УРОКОВ

// Функция для удаления эмодзи и лишних символов, оставляя только китайские иероглифы
function cleanChineseText(text) {
    return text.replace(/[\u{1F000}-\u{1F9FF}]/gu, '')
               .replace(/[\u2600-\u26FF]/gu, '')
               .replace(/[📍❓✔️❤️🎓🤷💪👥🏃👬🤔]/g, '')
               .replace(/\s+/g, ' ')
               .trim();
}

// Функция озвучки на китайском
function speakChinese(text) {
    if (!window.speechSynthesis) {
        alert("Ваш браузер не поддерживает голосовое воспроизведение. Попробуйте Chrome, Edge или Safari.");
        return;
    }
    
    const cleanText = cleanChineseText(text);
    
    if (!cleanText) {
        console.warn("Нет текста для произношения");
        return;
    }
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "zh-CN";
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    utterance.volume = 1;
    
    setTimeout(() => {
        window.speechSynthesis.speak(utterance);
    }, 10);
}

// Функция для рендеринга карточек урока
function renderLesson(lessonData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = "";
    
    lessonData.forEach(c => {
        const card = document.createElement("div");
        card.className = "card";

        const charBlock = document.createElement("div");
        charBlock.className = "char-block";
        
        const bigChar = document.createElement("div");
        bigChar.className = "big-hanzi";
        bigChar.innerText = c.char;
        bigChar.addEventListener("click", (e) => {
            e.stopPropagation();
            speakChinese(c.char);
        });
        
        const pinyinSpan = document.createElement("div");
        pinyinSpan.className = "pinyin-badge";
        pinyinSpan.innerText = `${c.pinyin}  (${c.tone})`;
        
        const meaningSpan = document.createElement("div");
        meaningSpan.className = "meaning-badge";
        meaningSpan.innerText = c.meaning;

        charBlock.appendChild(bigChar);
        charBlock.appendChild(pinyinSpan);
        charBlock.appendChild(meaningSpan);

        const strokeDiv = document.createElement("div");
        strokeDiv.className = "stroke-info";
        strokeDiv.innerText = `✍️ Прописи порядок: ${c.stroke}`;

        const assocDiv = document.createElement("div");
        assocDiv.className = "assoc";
        assocDiv.innerHTML = `🧠 ЗАПОМНИ: ${c.assoc}`;

        const phrasesBox = document.createElement("div");
        phrasesBox.className = "phrases-box";
        
        c.phrases.forEach(ph => {
            const btn = document.createElement("div");
            btn.className = "phrase-btn";
            btn.innerHTML = `
                <div class="ch-text">${ph.ch_display}</div>
                <div class="py-text">${ph.py}</div>
                <div class="trans-text"><span>🎧</span> ${ph.ru}</div>
            `;
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                speakChinese(ph.ch_clean || ph.ch_display);
            });
            phrasesBox.appendChild(btn);
        });

        card.appendChild(charBlock);
        card.appendChild(strokeDiv);
        card.appendChild(assocDiv);
        card.appendChild(phrasesBox);
        container.appendChild(card);
    });
}

// Инициализация голосового движка (прогрев)
if (typeof window !== 'undefined' && window.speechSynthesis) {
    const dummy = new SpeechSynthesisUtterance(" ");
    dummy.lang = "zh-CN";
    window.speechSynthesis.speak(dummy);
    window.speechSynthesis.cancel();
}
