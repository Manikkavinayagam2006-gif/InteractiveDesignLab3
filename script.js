// ===== Form Submission Handler =====
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('formStatus');

    if (!name || !email || !phone || !message) {
        status.style.color = 'red';
        status.textContent = '❌ Please fill all fields!';
        return false;
    }

    status.style.color = 'green';
    status.textContent = `✅ Thank you ${name}! Your message has been received. We will contact you at ${email} shortly.`;
    document.getElementById('contactForm').reset();
    return false;
}

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 32, 65, 1)';
        nav.style.padding = '10px 40px';
    } else {
        nav.style.background = 'rgba(15, 32, 65, 0.95)';
        nav.style.padding = '15px 40px';
    }
});

// ===== Interactive Course Card Click =====
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        alert(`📘 More details about "${title}" will be available soon!`);
    });
});

// ===== Feature Item Click Effect =====
document.querySelectorAll('.feature-item').forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = 'linear-gradient(90deg, #fce4ec, #f8bbd0)';
        setTimeout(() => {
            item.style.background = '#fff';
        }, 600);
    });
});

// ===== Welcome Message on Page Load =====
window.addEventListener('load', () => {
    console.log('🎓 Welcome to Sethu Institute of Technology Website!');
});