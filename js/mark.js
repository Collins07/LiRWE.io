function uploadTeacherSheet() {
    const input = document.getElementById('teacher-upload');
    if (input.files.length === 0) {
        alert('Please select a file to upload.');
        return;
    }

    const file = input.files[0];
    if (!file.name.endsWith('.pdf')) {
        alert('Only PDF files are allowed.');
        return;
    }

    alert('Teacher\'s answer sheet uploaded successfully!');
}

function uploadStudentSheets() {
    const input = document.getElementById('student-upload');
    if (input.files.length === 0) {
        alert('Please select files to upload.');
        return;
    }

    for (const file of input.files) {
        if (!file.name.endsWith('.pdf')) {
            alert('All files must be PDF format.');
            return;
        }
    }

    alert('Student answer sheets uploaded successfully!');
    document.getElementById('start-section').style.display = 'block';
}

function startMarking() {
    const startButton = document.getElementById('start-button');
    const loadingProgress = document.getElementById('loading-progress');
    const loadingPercentage = document.getElementById('loading-percentage');
    const doneButton = document.getElementById('done-button');
    const completionSection = document.getElementById('completion-section');
    const completionMessage = document.getElementById('completion-message');
    const seeGradesButton = document.getElementById('see-grades-button');

    startButton.style.display = 'none';
    loadingProgress.style.display = 'block';

    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        loadingPercentage.textContent = progress + '%';
        document.querySelector('.full').style.transform = `rotate(${progress * 3.6}deg)`;

        if (progress >= 100) {
            clearInterval(interval);
            loadingProgress.style.display = 'none';
            doneButton.style.display = 'block';

            // Hide the "Done" button after 10 seconds and show the message.
            setTimeout(() => {
                doneButton.style.display = 'none';
                completionSection.style.display = 'block';
                completionMessage.textContent = 'Check the student exam results and analyzed reports againist previous exams.';
                seeGradesButton.style.display = 'block';
            }, 10000); // 5000 ms = 10 seconds
        }
    }, 100); // 10 seconds = 10000 ms, 10000 ms / 100 = 100 ms per percent increment
}

