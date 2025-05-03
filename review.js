document.addEventListener("DOMContentLoaded", () => {
    const reviewContainer = document.getElementById("review-list");
    const homeButton = document.getElementById("home-btn");

    let userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];

    userAnswers.forEach((answer, index) => {
        let questionDiv = document.createElement("div");
        questionDiv.innerHTML = `
            <p><strong>Q${index + 1}: ${answer.question}</strong></p>
            <p>Your Answer: <span style="color: ${answer.selected === answer.correct ? 'white' : 'red'};">${answer.selected}</span></p>
            <p>Correct Answer: <span style="color: white;">${answer.correct}</span></p>
            <hr>
        `;
        reviewContainer.appendChild(questionDiv);
    });

    homeButton.addEventListener("click", () => {
        window.location.href = "start.html";
    });
});