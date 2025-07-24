
    // Countdown Timer
    function updateCountdown() {
      const endDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now
      const now = new Date().getTime();
      const distance = endDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
      document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
      document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Scroll Animations
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }

    function handleScrollAnimations() {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        if (isElementInViewport(el)) {
          el.classList.add('visible');
        }
      });
    }

    // Back to Top Button
    function toggleBackToTop() {
      const backToTop = document.querySelector('.back-to-top');
      if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Event Listeners
    window.addEventListener('scroll', () => {
      handleScrollAnimations();
      toggleBackToTop();
    });

    window.addEventListener('load', handleScrollAnimations);
  