const quizTemplate = (data = [], dataLength, options) => {

  const {number, title} = data;
  const {nextBtnText} = options;
  const answers = data.answers.map(item => {
    return `

    <label class="quiz-question__label">
        <input type="${item.type}" data-valid="false" class="quiz-question__answer" name="${data.answer_alias}" ${item.type === "text" ? "placeholder='Введите ваш вариант'" : ''} value="${item.type !== 'text' ? item.answer_title : ''}">
        <span>${item.answer_title}</span>
    </label>
    `;
  });

  return `
  <div class="quiz__content">
    <div class="quiz__questions">${number} из ${dataLength}</div>
    <div class="quiz-question">
        <h3 class="quiz-question__title">${title}</h3>
        <div class="quiz-question__answers">
        ${answers.join("")}
        </div>
        <button type="button" class="quiz-question__btn btn red" data-next-btn>${nextBtnText}</button>
    </div>
  </div>
  `
};

//quizTemplate(quizData[0], quizData.length)
//const quiz = document.querySelector(".quiz");
//quiz.innerHTML = quizTemplate(quizData[0], quizData.length);

class Quiz {
  constructor(selector, data, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.data = data;
    this.counter = 0; // Номер вопроса
    this.dataLength = this.data.length;
    this.resultArray = [];
    this.init();
    this.events();
  }

  init() {
    console.log("init!");
    this.$el.innerHTML = quizTemplate(quizData[this.counter], this.dataLength, this.options);
  }

  events() {
    this.$el.addEventListener("click", (evt) => {
      if (evt.target === document.querySelector("[data-next-btn]")) {
        this.nextQuestion();
      }
      if (evt.target === document.querySelector('[data-send]')) {
        this.send();
      }
    });
  }

  nextQuestion() {
    console.log("next question!");

    if (this.counter + 1 < this.dataLength) {
      this.counter++;
      this.$el.innerHTML = quizTemplate(quizData[this.counter], this.dataLength, this.options);

      if (this.counter + 1 === this.dataLength) {
        this.$el.insertAdjacentHTML("beforeend", `<button class="btn black" type="submit" data-send>${this.options.sendBtnText}</button>`);
        this.$el.querySelector("[data-next-btn]").remove();
      }
    }
  }

  send() {
    console.log("send")
  }

};



// window.quiz = new Quiz(".quiz", quizData, {
//   nextBtnText: "Далее",
//   sendBtnText: "Отправить",
// });


