const wrapper = document.querySelector(".wrapper"),
    selectBtn = wrapper.querySelector(".select-btn"),
    searchInp = wrapper.querySelector("input"),
    options = wrapper.querySelector(".options"),
    deleteBtn = document.querySelector(".delete-btn"); // Select the delete button

let courses = [
    "1ZV50 Fundamentals of product innovation",
    "2DRR10 Probability and Statistics for CS",
    "2IAB1 Foundations of Data Analytics",
    "2ICO2 Information Page Y2 BCS",
    "2ID50 Datamodelling and Databases",
    "2ILCO Algorithms",
    "2INCO Operating Systems",
    "2IRR40 Security",
    "2IRR50 Statistics and Machine Learning",
    "2IRR90 Automata and Formal Languages",
    "2ITAO Process Theory",
    "2ITB0 Provable Programming",
    "2MBD60 Introduction to Cryptology",
    "2WF90 Algebra for Security",
    "4CBLW00 Multidisciplinary CBL (MD-CBL)",
    "4CBLW02 Artificial tutors",
    "Information Skills_2IRR40",
    "IS1000 TU/e Student Teams Program",
    "0LVX10-EDF ITEC Ethics Theme: Ethics of Digital Future",
    "2DRR00 Linear algebra and applications",
    "2IAB1 Foundations of Data Analytics",
    "2IC01 Information Page Y1 BCS",
    "2IC30 Computer systems",
    "2IL50 Data structures",
    "2IO75 CBL Embedded Systems",
    "2IP90 Programming",
    "2IPS1 Professional Skill Reflecting - Alumni Night",
    "2IRR00 Software Design",
    "2IRR20 Networks",
    "2IT60 Logic and set theory",
    "2IT80 Discrete structures",
    "2IX20 Software specification",
    "2PRV11 SCOP/e Computer science",
    "2WBB0 Calculus variant 2"
];

let selectedCourse = ""; // Store the selected course

function addCourse() {
    options.innerHTML = "";
    courses.forEach(course => {
        let isSelected = course === selectedCourse ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${course}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCourse();

function updateName(selectedLi) {
    searchInp.value = "";
    selectedCourse = selectedLi.innerText; // Update the selected course
    addCourse();
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedCourse;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = courses.filter(data => {
        return data.toLowerCase().includes(searchWord);
    }).map(data => {
        let isSelected = data === selectedCourse ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Course not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

// Add event listener to the delete button
deleteBtn.addEventListener("click", () => {
    selectedCourse = ""; // Clear the selected course
    selectBtn.firstElementChild.innerText = "Select Course"; // Reset the button text
    addCourse(); // Update the options list with no selected course
});
