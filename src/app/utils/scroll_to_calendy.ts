export const scrollTo_calendy = () => {
  const sectiion = document.getElementById("calendy");
  if (sectiion) {
    window.scrollTo({
      top: sectiion.offsetTop,
      behavior: "smooth",
    });
  }
};
