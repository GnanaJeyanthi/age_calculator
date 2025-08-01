document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if (dob > today) {
        document.getElementById('result').textContent = "Date of birth cannot be in the future!";
        return;
    }

    const ageInMs = today - dob;
    const ageDate = new Date(ageInMs);
    const years = ageDate.getUTCFullYear() - 1970;

    document.getElementById('result').textContent = `You are ${years} year(s) old.`;
});
