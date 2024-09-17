let userInput = document.getElementById("dob");
let result = document.getElementById("your-age");

// Disable selection of future dates
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    // Variable to store birthdate selected by user
    let birthDate = new Date(userInput.value);

    // Day stores in d1, month in m1, and year in y1
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    // Variable to get current date
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // Initializing variables which will store the difference between two dates
    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Construct the result string conditionally
    let ageString = '';
    if (y3 > 0) ageString += `${y3} Year${y3 > 1 ? 's' : ''}, `;
    if (m3 > 0) ageString += `${m3} Month${m3 > 1 ? 's' : ''}, `;
    if (d3 > 0) ageString += `${d3} Day${d3 > 1 ? 's' : ''}`;

    // Remove trailing comma and space, if present
    if (ageString.endsWith(', ')) {
        ageString = ageString.slice(0, -2);
    }

    result.innerHTML = `You are ${ageString} old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

// Add event listener to button
document.getElementById("get-age").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    calculateAge();
});
