const QUIZ_CONFIG = {
    totalQuestionsPerRound: 10
};

    // Base de dados 100% focada em: Ditongos, Hiatos e Acento Diferencial
    const QUIZ_DATA = [
        {
            question: "Qual das palavras abaixo perdeu o acento agudo devido à regra dos ditongos abertos em palavras paroxítonas?",
            options: [
                { text: "Herói", sub: "Palavra oxítona com o ditongo aberto tônico 'ói'.", wrongFeedback: "Por que está incorreta? O enunciado pede uma palavra paroxítona. 'Herói' é oxítona, e as oxítonas mantiveram o acento normalmente." },
                { text: "Ideia", sub: "Palavra paroxítona com o ditongo aberto tônico 'ei'.", wrongFeedback: "" },
                { text: "Papéis", sub: "Palavra oxítona terminada no ditongo aberto pluralizado 'éis'.", wrongFeedback: "Por que está incorreta? 'Papéis' é uma palavra oxítona. A regra do Novo Acordo que retira o acento só afeta palavras paroxítonas." },
                { text: "Mesa", sub: "Palavra paroxítona sem a presença de ditongos abertos em sua estrutura.", wrongFeedback: "Por que está incorreta? Essa alternativa não se relaciona com o tema do enunciado, pois 'Mesa' nunca teve acento e não possui nenhum ditongo aberto." }
            ],
            correct: 1,
            explanation: "O Novo Acordo Ortográfico removeu o acento apenas das palavras paroxítonas (com som mais forte na penúltima sílaba) que trazem os ditongos abertos 'ei' e 'oi'. Palavras oxítonas como herói, papéis e troféu mantêm o acento normal."
        },
        {
            question: "A palavra 'SAÚDE' é acentuada por conter um hiato cuja vogal 'U' está isolada na sílaba. Qual palavra segue rigorosamente a mesma regra?",
            options: [
                { text: "Saída", sub: "A vogal 'I' tônica forma hiato sozinha na sílaba (sa-í-da).", wrongFeedback: "" },
                { text: "Baú", sub: "A vogal 'U' tônica está no final de uma palavra oxítona.", wrongFeedback: "Por que está incorreta? Embora 'Baú' contenha um hiato, ela é uma palavra oxítona (tonalidade na última sílaba), enquanto 'Saúde' é paroxítona." },
                { text: "Rainha", sub: "A vogal 'I' tônica antecede o dígrafo consonantal 'NH'.", wrongFeedback: "Por que está incorreta? 'Rainha' é uma exceção à regra dos hiatos: não se acentua 'I' ou 'U' tônico se a próxima sílaba começar com 'NH'." },
                { text: "Mágico", sub: "A palavra possui a antepenúltima sílaba tônica (proparoxítona).", wrongFeedback: "Por que está incorreta? Essa palavra é acentuada simplesmente por ser proparoxítona, não tendo relação com a regra dos hiatos." }
            ],
            correct: 0,
            explanation: "A regra dos hiatos diz que acentuamos o 'I' e 'U' tônicos quando formam sílaba sozinhos (or com 'S'), desde que não sejam seguidos por 'NH'. Portanto, 'sa-í-da' e 'sa-ú-de' compartilham exatamente a mesma justificativa."
        },
        {
            question: "Em relação ao acento diferencial, qual das alternativas apresenta o uso correto segundo as regras atuais?",
            options: [
                { text: "Eles têm duas casas.", sub: "Acento utilizado para diferenciar a terceira pessoa do plural da do singular.", wrongFeedback: "" },
                { text: "Ele pôde ir ontem.", sub: "Acento utilizado para indicar que a ação verbal ocorreu no tempo presente.", wrongFeedback: "Por que está incorreta? A descrição no subtexto está errada. O acento circunflexo em 'pôde' serve para indicar o tempo passado (pretérito perfeito), e não o presente." },
                { text: "Ela pára o carro.", sub: "Acento utilizado para diferenciar o verbo da preposição homônima.", wrongFeedback: "Por que está incorreta? O acento diferencial no verbo 'parar' foi completamente abolido pelo Novo Acordo Ortográfico, tornando essa grafia errada hoje." },
                { text: "O pêlo do gato.", sub: "Acento utilizado para diferenciar o substantivo da preposição contraída.", wrongFeedback: "Por que está incorreta? O acento do substantivo 'pêlo' foi extinto. Atualmente, grafa-se apenas 'pelo', sem acento diferencial." }
            ],
            correct: 0,
            explanation: "Os acentos diferenciais para marcar o plural dos verbos 'ter' e 'vir' (e seus derivados como conter, manter, advir) continuam obrigatórios: Ele tem / Eles têm; Ele vem / Eles vêm."
        },
        {
            question: "Na palavra 'HISTÓRIA', como se classifica o encontro vocálico final 'IA' na divisão silábica (his-tó-ria)?",
            options: [
                { text: "Hiato", sub: "Duas vogais consecutivas que se separam em sílabas diferentes.", wrongFeedback: "Por que está incorreta? No português padrão, o encontro 'ia' em paroxítonas finais não se separa na fala natural corrente, logo é classificado como ditongo." },
                { text: "Ditongo crescente", sub: "Transição do som de uma semivogal para o som de uma vogal na mesma sílaba.", wrongFeedback: "" },
                { text: "Ditongo decrescente", sub: "Transição do som de uma vogal para o som de uma semivogal na mesma sílaba.", wrongFeedback: "Por que está incorreta? Seria decrescente se o som começasse forte e terminasse fraco (como em 'pai'). Em 'história', ocorre o oposto." },
                { text: "Tritongo", sub: "Agrupamento de semivogal + vogal + semivogal na mesma sílaba.", wrongFeedback: "Por que está incorreta? Não há três sons vocálicos emitidos em uma única emissão de voz aqui, o que anula a classificação de tritongo." }
            ],
            correct: 1,
            explanation: "Em palavras paroxítonas terminadas em 'ia', 'ie', 'io', 'ua', 'ue', 'uo', temos ditongos crescentes. O som começa na semivogal (mais fraca) e cresce em direção à vogal (mais forte)."
        },
        {
            question: "Qual acento diferencial sobreviveu ao Novo Acordo Ortográfico para distinguir o tempo passado do presente?",
            options: [
                { text: "pára / para", sub: "Diferenciação entre a forma verbal de parar e a preposição.", wrongFeedback: "Por que está incorreta? O par 'pára/para' perdeu o acento diferencial e não sobreviveu à reforma ortográfica." },
                { text: "pôde / pode", sub: "Diferenciação entre o pretérito perfeito e o presente do indicativo do verbo poder.", wrongFeedback: "" },
                { text: "pêlo / pelo", sub: "Diferenciação entre o substantivo (pelagem) e a preposição contraída.", wrongFeedback: "Por que está incorreta? O acento de 'pêlo' deixou de existir, portanto essa palavra não serve mais como acento diferencial." },
                { text: "pólo / polo", sub: "Diferenciação entre a extremidade geográfica/esporte e a palavra antiga.", wrongFeedback: "Por que está incorreta? A palavra 'pólo' perdeu o acento agudo diferencial no acordo, unificando-se na grafia 'polo'." }
            ],
            correct: 1,
            explanation: "A forma do pretérito perfeito do indicativo 'pôde' (ex: 'Ontem ele não pôde vir') mantém o acento circunflexo para se diferenciar da forma do presente do indicativo 'pode' (ex: 'Hoje ele pode vir'). É um dos poucos acentos diferenciais que resistiram ao acordo."
        },
        {
            "question": "A palavra 'FEIURA' perdeu o acento com a reforma ortográfica. Qual é o motivo dessa alteração?",
            "options": [
                { "text": "Toda palavra paroxítona perdeu o acento.", "sub": "Generalização de que o acordo aboliu a acentuação de todas as paroxítonas.", "wrongFeedback": "Por que está incorreta? Nem todas as paroxítonas perderam o acento (ex: 'caráter', 'fácil', 'táxi' continuam acentuadas)." },
                { "text": "A vogal 'U' tônica vem depois de um ditongo em palavra paroxítona.", "sub": "Regra específica sobre a posição da vogal tônica em relação a encontros vocálicos.", "wrongFeedback": "" },
                { "text": "O 'U' passou a formar ditongo com a letra 'R'.", "sub": "Teoria sobre uma nova formação silábica juntando vogal e consoante.", "wrongFeedback": "Por que está incorreta? Na divisão silábica de 'fei-u-ra', o 'U' está isolado em sua sílaba, caracterizando um hiato, e não um ditongo com o 'R'." },
                { "text": "A palavra se tornou uma oxítona após a reforma.", "sub": "Hipótese de mudança na posição da sílaba tônica da palavra.", "wrongFeedback": "Por que está incorreta? A reforma ortográfica altera apenas a grafia e acentuação, ela jamais modifica a pronúncia ou a posição da sílaba tônica da palavra." }
            ],
            "correct": 1,
            "explanation": "Segundo o Novo Acordo Ortográfico, as letras 'I' e 'U' tônicas perdem o acento quando formam hiato se vierem **depois de um ditongo** em palavras paroxítonas (ex: fei-u-ra, bai-u-ca)."
        },
        {
            "question": "As palavras 'VÔO' e 'CREEM' perderam o acento circunflexo. Qual é a regra que rege esse caso atualmente?",
            "options": [
                { "text": "Não se acentuam hiatos com vogais dobradas 'ee' e 'oo'.", "sub": "Regra direcionada à duplicação de vogais específicas.", "wrongFeedback": "" },
                { "text": "Apenas os verbos no plural perdem o acento circunflexo.", "sub": "Restrição da regra exclusivamente para conjugações verbais.", "wrongFeedback": "Por que está incorreta? A regra também se aplica a substantivos com vogais dobradas, como 'voo', 'enjoo' e 'magoo'." },
                { "text": "Hiatos formados por letras iguais sempre levam acento agudo.", "sub": "Substituição do acento circunflexo pelo agudo nesses casos.", "wrongFeedback": "Por que está incorreta? Esses hiatos não levam acento algum na grafia atual (escreve-se 'voo' e 'creem' sem sinal gráfico)." },
                { "text": "O acento só permanece se a palavra for proparoxítona.", "sub": "Condicionamento da regra à classificação da palavra como proparoxítona.", "wrongFeedback": "Por que está incorreta? Nenhuma dessas palavras é proparoxítona, e a regra foca especificamente na duplicação das vogais 'e' e 'o'." }
            ],
            "correct": 0,
            "explanation": "O Novo Acordo extinguiu o acento circunflexo dos hiatos 'oo' (substantivos e formas verbais como voo, enjoo, abençoo) e 'ee' (formas verbais da terceira pessoa do plural como creem, leem, veem, deem)."
        },
        {
            "question": "Na palavra 'URUGUAI', o encontro vocálico final classifica-se como:",
            "options": [
                { "text": "Ditongo crescente", "sub": "Encontro de uma semivogal seguida de uma vogal na mesma sílaba.", "wrongFeedback": "Por que está incorreta? Em 'Uruguai', a terminação possui três sons vocálicos pronunciados na mesma sílaba, e não dois." },
                { "text": "Hiato", "sub": "Encontro de duas vogais pronunciadas em sílabas separadas.", "wrongFeedback": "Por que está incorreta? No hiato, as vogais se separam. Em 'Uruguai', a última sílaba agrupa os sons inteiros: U-ru-guai." },
                { "text": "Tritongo", "sub": "Sequência de semivogal, vogal e semivogal na mesma sílaba.", "wrongFeedback": "" },
                { "text": "Ditongo decrescente", "sub": "Encontro de uma vogal seguida de uma semivogal na mesma sílaba.", "wrongFeedback": "Por que está incorreta? Um ditongo decrescente tem apenas duas vogais na sílaba. 'Uruguai' apresenta semivogal + vogal + semivogal." }
            ],
            "correct": 2,
            "explanation": "Ocorre um tritongo quando temos a sequência semivogal + vogal + semivogal pronunciadas em uma única e mesma sílaba (u + a + i)."
        },
        {
            "question": "A palavra 'LUÍS' recebe acento agudo, mas 'LUIZ' não. Qual o motivo dessa diferença gráfica na regra dos hiatos?",
            "options": [
                { "text": "'Luís' é paroxítona e 'Luiz' é oxítona.", "sub": "Diferenciação baseada na posição da sílaba tônica de cada nome.", "wrongFeedback": "Por que está incorreta? Ambas as palavras são oxítonas, pois o som mais forte é emitido na última sílaba em ambos os nomes." },
                { "text": "O 'I' tônico do hiato só é acentuado se estiver sozinho ou seguido de 'S' na mesma sílaba.", "sub": "Regra de acentuação baseada nas letras que acompanham a vogal tônica na divisão silábica.", "wrongFeedback": "" },
                { "text": "Palavras terminadas em 'Z' nunca podem ser acentuadas.", "sub": "Proibição geral de acentos em qualquer palavra com essa terminação.", "wrongFeedback": "Por que está incorreta? Palavras paroxítonas terminadas em 'Z' são acentuadas normalmente, como 'infalível' ou 'pólen' (e 'caráter' com R). O foco aqui é a terminação da sílaba do hiato." },
                { "text": "O uso do acento em 'Luís' é opcional e facultativo.", "sub": "Consideração de que a acentuação gráfica neste caso é uma escolha livre.", "wrongFeedback": "Por que está incorreta? Não é facultativo. A grafia de 'Luís' exige o acento por regra, enquanto 'Luiz' proíbe o acento devido à consoante 'Z'." }
            ],
            "correct": 1,
            "explanation": "Pela regra dos hiatos, as vogais 'I' e 'U' tônicas recebem acento se ficarem sozinhas na sílaba ou acompanhadas de 'S'. Como em Lu-í-z o 'I' fica na mesma sílaba do 'Z', o acento deixa de existir."
        },
        {
            "question": "A palavra 'MÁGOA' é acentuada graficamente. Qual é a justificativa oficial para esse acento?",
            "options": [
                { "text": "É uma palavra oxítona terminada em 'A'.", "sub": "Classificação da palavra indicando a última sílaba como tônica.", "wrongFeedback": "Por que está incorreta? Se fosse oxítona, a pronúncia forte seria no final (ma-GOÁ), mas dizemos MÁ-goa." },
                { "text": "É uma paroxítona terminada em ditongo crescente.", "sub": "Regra de acentuação para a penúltima sílaba tônica acompanhada de encontro vocálico específico.", "wrongFeedback": "" },
                { "text": "Contém um hiato obrigatório na última sílaba.", "sub": "Separação das vogais finais em sílabas diferentes.", "wrongFeedback": "Por que está incorreta? Encontros de 'oa' no final de paroxítonas são classificados na norma padrão como ditongos crescentes." },
                { "text": "Trata-se de uma palavra proparoxítona.", "sub": "Classificação da palavra indicando a antepenúltima sílaba como tônica.", "wrongFeedback": "Por que está incorreta? A palavra possui apenas duas sílabas (má-goa), portanto não há elementos para ser proparoxítona." }
            ],
            "correct": 1,
            "explanation": "Palavras paroxítonas que terminam em ditongo crescente (como mágoa, régua, vácuo, série) são sempre acentuadas graficamente."
        },
        {
            "question": "Analisando a estrutura da palavra 'INDIVÍDUO', como se justifica a acentuação e qual encontro vocálico encerra a palavra?",
            "options": [
                { "text": "É uma palavra paroxítona terminada em ditongo crescente.", "sub": "Classificação considerando a penúltima sílaba forte e o encontro vocálico final inseparável.", "wrongFeedback": "" },
                { "text": "É uma palavra proparoxítona terminada em hiato.", "sub": "Classificação que considera a antepenúltima sílaba forte e a separação das vogais finais.", "wrongFeedback": "Por que está incorreta? Para ser proparoxítona a divisão teria de isolar o 'O' (in-di-ví-du-o). Na convenção principal da acentuação, ela é tratada como paroxítona terminada em ditongo." },
                { "text": "É uma oxítona terminada no ditongo decrescente 'UO'.", "sub": "Classificação que coloca a sílaba tônica no final da palavra com encontro vocálico.", "wrongFeedback": "Por que está incorreta? A sílaba tônica é 'VÍ' (penúltima), tornando-a paroxítona, e o som vai da semivogal fraca para a vogal forte (crescente)." },
                { "text": "O acento ocorre devido a um hiato na penúltima sílaba.", "sub": "Justificativa baseada na separação vocálica dentro da palavra.", "wrongFeedback": "Por que está incorreta? O acento está no 'I' tônico por ser a sílaba forte de uma paroxítona, cuja terminação cai na regra dos ditongos." }
            ],
            "correct": 0,
            "explanation": "A palavra 'indivíduo' (in-di-ví-duo) é classificada como paroxítona. Ela recebe acento porque termina no ditongo crescente 'uo' (semivogal + vogal)."
        },
        {
            "question": "Assinale a alternativa que apresenta uma palavra que permanece com o acento agudo inalterado mesmo após o Novo Acordo Ortográfico:",
            "options": [
                { "text": "Jibóia", "sub": "Palavra paroxítona com o ditongo aberto 'oi'.", "wrongFeedback": "Por que está incorreta? 'Jiboia' perdeu o acento por ser uma paroxítona com o ditongo aberto 'oi'." },
                { "text": "Alcatéia", "sub": "Palavra paroxítona com o ditongo aberto 'ei'.", "wrongFeedback": "Por que está incorreta? 'Alcateia' perdeu o acento gráfico pelo mesmo motivo de jiboia: ditongo aberto em posição paroxítona." },
                { "text": "Heróico", "sub": "Palavra paroxítona derivada com o ditongo aberto 'oi'.", "wrongFeedback": "Por que está incorreta? 'Heroico' perdeu o acento agudo sob a mesma regra de queda dos ditongos abertos paroxítonos." },
                { "text": "Chapéu", "sub": "Palavra oxítona com o ditongo aberto 'eu'.", "wrongFeedback": "" }
            ],
            "correct": 3,
            "explanation": "A palavra 'chapéu' é uma oxítona. O Novo Acordo Ortográfico removeu os acentos dos ditongos abertos 'ei' e 'oi' exclusivamente de palavras paroxítonas. Oxítonas e monossílabos tônicos (como chapéu, herói, dói, réu) continuam acentuados."
        }
    ];

    const quizState = {
        data: [],
        currentIndex: 0,
        score: 0,
        correctButtonIndex: -1
    };

    const elements = {
        quizScreen: document.getElementById('quiz-screen'),
        scoreScreen: document.getElementById('score-screen'),
        progress: document.getElementById('progress'),
        question: document.getElementById('question'),
        options: document.getElementById('options'),
        explanationBox: document.getElementById('explanation-box'),
        explanationStatus: document.getElementById('explanation-status'),
        explanationText: document.getElementById('explanation-text'),
        nextButton: document.getElementById('next-btn'),
        finalScore: document.getElementById('final-score')
    };

    // Algoritmo Fisher-Yates para embaralhamento perfeito
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Inicialização do Quiz filtrando o total estipulado para a rodada
    function initQuiz() {
        const fullPool = JSON.parse(JSON.stringify(QUIZ_DATA));
        shuffle(fullPool);

        quizState.data = fullPool.slice(0, QUIZ_CONFIG.totalQuestionsPerRound);
        quizState.currentIndex = 0;
        quizState.score = 0;

        elements.quizScreen.style.display = 'block';
        elements.scoreScreen.style.display = 'none';
        loadQuestion();
    }

    function loadQuestion() {
        resetState();
        const currentQuestion = quizState.data[quizState.currentIndex];

        if (!currentQuestion) {
            return;
        }

        elements.progress.innerText = `Pergunta ${quizState.currentIndex + 1} de ${quizState.data.length}`;
        elements.question.innerText = currentQuestion.question;

        // Associa uma flag que rastreia qual o índice real correto antes de embaralhar as alternativas
        let indexedOptions = currentQuestion.options.map((opt, index) => {
            return { ...opt, isCorrect: index === currentQuestion.correct };
        });

        shuffle(indexedOptions);

        indexedOptions.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            
            // Renderiza o subtexto explicativo caso exista na opção atual
            const subtextHTML = option.sub ? `<span class="option-sub">${option.sub}</span>` : '';
            
            button.innerHTML = `
                <span class="option-text">${option.text}</span>
                ${subtextHTML}
            `;
            
            if (option.isCorrect) {
                quizState.correctButtonIndex = index;
            }
            
            button.addEventListener('click', () => selectOption(index, button, option.wrongFeedback, currentQuestion.explanation));
            elements.options.appendChild(button);
        });
    }

    function resetState() {
        elements.explanationBox.style.display = 'none';
        elements.nextButton.style.display = 'none';
        elements.options.innerHTML = '';
        quizState.correctButtonIndex = -1;
    }

    function selectOption(selectedIndex, selectedButton, wrongFeedbackText, globalExplanation) {
        const allButtons = elements.options.children;

        for (let btn of allButtons) {
            btn.disabled = true;
        }

        if (selectedIndex === quizState.correctButtonIndex) {
            selectedButton.classList.add('correct');
            elements.explanationStatus.innerText = '✅ Correto!';
            elements.explanationStatus.style.color = 'var(--success-color)';
            elements.explanationText.innerHTML = globalExplanation;
            quizState.score++;
        } else {
            selectedButton.classList.add('wrong');
            allButtons[quizState.correctButtonIndex].classList.add('correct');
            elements.explanationStatus.innerText = '❌ Errado!';
            elements.explanationStatus.style.color = 'var(--error-color)';
            
            const feedbackText = wrongFeedbackText ? wrongFeedbackText : 'Esta alternativa está incorreta.';
            elements.explanationText.innerHTML = `<strong style="color: var(--error-color);">${feedbackText}</strong><br><br><strong>Gabarito correto:</strong> ${globalExplanation}`;
        }

        elements.explanationBox.style.display = 'block';
        elements.nextButton.style.display = 'block';
    }

    function nextQuestion() {
        quizState.currentIndex++;
        if (quizState.currentIndex < quizState.data.length) {
            loadQuestion();
        } else {
            showScore();
        }
    }

    function showScore() {
        elements.quizScreen.style.display = 'none';
        elements.scoreScreen.style.display = 'block';
        elements.finalScore.innerText = `Você acertou ${quizState.score} de ${quizState.data.length} perguntas.`;
    }

    function restartQuiz() {
        initQuiz();
    }

    // Executa a carga inicial do app
    initQuiz();