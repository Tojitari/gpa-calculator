function calculateGPA() {
    const grade1 = parseFloat(document.getElementById('grade1').value) || 0;
    const grade2 = parseFloat(document.getElementById('grade2').value) || 0;
    const grade3 = parseFloat(document.getElementById('grade3').value) || 0;
    const grade4 = parseFloat(document.getElementById('grade4').value) || 0;

    const gpa = (grade1 + grade2 + grade3 + grade4) / 4;
    document.getElementById('gpaResult').textContent = gpa.toFixed(2);
}
