const faqsList = document.querySelectorAll(".faq li");
const popup = document.querySelector("dialog");
const faqAns = document.querySelector("#answer");
let faqs;

async function getAnswers(){
  try {
    const response = await fetch("data/faqs.json");
    const result = await response.json();

    faqs = result;
  } catch (error) {
    console.log(error)
  }
}

faqsList.forEach((item) => {
  item.addEventListener("click", () => {
    const answer = faqs.filter((faq) => faq.question == item.textContent)[0];

    faqAns.textContent = answer.answer;
    popup.showModal();
  })
})

popup.querySelector("button").addEventListener("click", () => popup.close())

getAnswers();