
function showPreview(jobId) {
    const jobDetails = document.querySelectorAll('.job-details');
    jobDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    document.getElementById(jobId).classList.add('active');
}


document.addEventListener("DOMContentLoaded", () => {
    const firstJobDetails = document.querySelector('.job-details');
    if (firstJobDetails) {
        firstJobDetails.classList.add('active');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const bookmarkButtons = document.querySelectorAll(".bookmark-btn");

    bookmarkButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent triggering the parent click event
            const bookmarkIcon = button.querySelector("i");
            bookmarkIcon.classList.toggle("bookmarked");
        });
    });
});

document.querySelectorAll('.apply-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.popUp-container').style.display = 'flex';
    });
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.popUp-container').style.display = 'none';
})
