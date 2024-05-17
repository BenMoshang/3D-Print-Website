// Define a class for images
class ImageAsset {
    constructor(src, alt) {
        this.src = src;
        this.alt = alt;
    }

    render() {
        const img = document.createElement('img');
        img.src = this.src;
        img.alt = this.alt;
        return img;
    }
}

// Define a class for buttons
class ButtonAsset {
    constructor(text, onClick) {
        this.text = text;
        this.onClick = onClick;
    }

    render() {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.addEventListener('click', this.onClick);
        return button;
    }
}

// Create instances of the classes
const image = new ImageAsset('path/to/image.jpg', 'Image description');
const button = new ButtonAsset('Click me', () => {
    console.log('Button clicked!');
});

// Render the assets
const imageElement = image.render();
const buttonElement = button.render();

// Append the assets to the DOM
document.body.appendChild(imageElement);
document.body.appendChild(buttonElement);