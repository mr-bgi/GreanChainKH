const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const question = faq.querySelector('.question');
    const answer = faq.querySelector('.answer');

    question.addEventListener('click', () => {
        question.classList.toggle('active');
        if (question.classList.contains('active')) {
            faq.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            faq.classList.remove('active');
            answer.style.maxHeight = '0';
        }
    });
});
