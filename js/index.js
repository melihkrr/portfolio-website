const menuItems = document.querySelectorAll(".nav-link");


AOS.init();
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    menuItem.classList.add("active");
  });
});

  const menuıtems = document.querySelectorAll('.navbar-nav .nav-link');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
 
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const yOffset = -80;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  










