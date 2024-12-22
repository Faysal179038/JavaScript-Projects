class LoadingAnimation {
    constructor(bgSelector, textSelector, images) {
      this.bgElement = document.querySelector(bgSelector);
      this.textElement = document.querySelector(textSelector);
      this.images = images;
      this.load = 0;
  
      // Set a random background image
      this.setRandomBackground();
    }
  
    // Set a random background image
    setRandomBackground() {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      const randomImage = this.images[randomIndex];
      this.bgElement.style.background = `url(${randomImage}) no-repeat center center/cover`;
    }
  
    scale(num, in_min, in_max, out_min, out_max) {
      return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    }
  
    start() {
      const interval = setInterval(() => {
        this.load++;
        if (this.load > 100) {
          clearInterval(interval);
        }
  
        this.textElement.textContent = `${this.load}%`;
        this.textElement.style.opacity = this.scale(this.load, 0, 100, 1, 0);
  
        const blurValue = this.scale(this.load, 0, 100, 30, 0);
        this.bgElement.style.filter = `blur(${blurValue}px)`;
      }, 30);
    }
  }
  
  // Initialize the animation with multiple images
  const images = [
    "https://images.alphacoders.com/605/thumb-1920-605592.png",
    "https://images2.alphacoders.com/564/564835.jpg",
    "https://images7.alphacoders.com/599/thumb-1920-599379.jpg",
    "https://images7.alphacoders.com/611/thumb-1920-611138.png"
  ];
  
  const loadingAnimation = new LoadingAnimation('.bg', '.loading-text', images);
  loadingAnimation.start();
  

