document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Feedback submitted:', data);
    
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Thank you for your feedback on ihopeitisfinaltest!';
    messageDiv.classList.remove('hidden');
    messageDiv.classList.add('success');
    
    this.reset();
});