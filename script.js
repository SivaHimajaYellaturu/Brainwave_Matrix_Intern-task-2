document.getElementById("booking-form")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    alert(`Thank you, ${name}! Your table for ${guests} guests on ${date} at ${time} has been booked.`);
});