function typeWriter(text, element, delay = 50) {
    let i = 0;
    let isTag = false;
    let currentTag = '';

    function type() {
        if (i < text.length) {
            let char = text.charAt(i);

            if (char === '<') {
                isTag = true;
                currentTag = '';
            }

            if (isTag) {
                currentTag += char;
                if (char === '>') {
                    isTag = false;
                    element.innerHTML += currentTag;
                }
            } else {
                element.innerHTML += char;
            }

            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

function showGrades() {
    const gradesDisplay = document.getElementById('grades-display');
    const gradesPdfBtn = document.getElementById('grades-pdf-btn');
    gradesDisplay.style.display = 'block';
    gradesDisplay.innerHTML = ''; // Clear existing content
    
    const gradesText = `
        <h3>Student Results</h3>
        <p>G001 - James Mwangi  - 90</p>
        <p>G002 - Aisha Njeri - 88</p>
        <p>G003 - Brian Odhiambo - 87</p>
        <p>G004 - Lilian Wambui - 86</p>
        <p>G005 - Samuel Kiprotich - 85</p>
        <p>G006 - Faith Nyambura - 84</p>
        <p>G007 - Kevin Otieno - 82</p>
        <p>G008 - Grace Muthoni - 81 </p>
        <p>G009 - Michael Mutua - 79 </p>
        <p>G010 - Cynthia Wanjiku - 78</p>
        <p>G011 - Dennis Kimani - 78</p>
        <p>G012 - Mercy Akinyi - 77 </p>
        <p>G013 - Daniel Njuguna - 76 </p>
        <p>G014 - Esther Chebet - 75</p>
        <p>G015 - Paul Mwangi - 74</p>
        <p>Student 9: 88%</p>
        
    `;
    
    typeWriter(gradesText, gradesDisplay);

    // Show PDF button after 10 seconds
    setTimeout(() => {
        gradesPdfBtn.style.display = 'block';
    }, 10000);
}

function showAnalysis() {
    const analysisDisplay = document.getElementById('analysis-display');
    const analysisPdfBtn = document.getElementById('analysis-pdf-btn');
    analysisDisplay.style.display = 'block';
    analysisDisplay.innerHTML = ''; // Clear existing content
    
    const analysisText = `
        <h3>Performance Analysis</h3>
        <p>1. Top Performer: James Mwangi, consistently improving with a significant leap in Term 2.</p>
        <p>2. Most students got question 4 wrong.</p>
        <p>3. Stable Performers: Lilian Wambui and John Karanja, maintaining high standards across terms.</p>
        <p>4. Growth Trend: The majority of students are showing improvement, with over 80% improving or maintaining their performance compared to the last term.</p>
        <p>5. Overall performance has improved by 5% compared to the last exam.</p>
    `;
    
    typeWriter(analysisText, analysisDisplay);

    // Show PDF button after 10 seconds
    setTimeout(() => {
        analysisPdfBtn.style.display = 'block';
    }, 10000);
}

function downloadGradesPDF() {
    const link = document.createElement('a');
    link.href = '../img/LiRWE1.pdf'; // Adjust the path according to your project structure
    link.download = 'LiRWE Primary School Class 8 Blue Term 2 Exam.pdf';
    link.click();
}

function downloadAnalysisPDF() {
    const link = document.createElement('a');
    link.href = '../img/LiRWE2.pdf'; // Adjust the path according to your project structure
    link.download = 'Class 8 Blue Term 2 Exam Analysis';
    link.click();
}
