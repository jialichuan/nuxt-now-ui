import Rellax from 'rellax'
export default function initParallax() {
  // initialise Rellax for this page
  if (window.innerWidth >= 991) {
    setTimeout(() => {
      new Rellax(".rellax", {
        center: true
      });
    }, 5000);
    new Rellax(".rellax-header");
    new Rellax(".rellax-text");
  }
}
