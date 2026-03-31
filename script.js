const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -32px 0px",
    }
  );

  reveals.forEach((element, index) => {
    element.style.transitionDelay = `${index * 70}ms`;
    observer.observe(element);
  });
} else {
  reveals.forEach((element) => {
    element.classList.add("is-visible");
  });
}
