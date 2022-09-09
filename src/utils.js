class LayoutCreator {
    // {'div', 'class', content}
    constructor({type, tagType, tag}) {
        this.selector = (tagType === 'class') ? `.${tag}` : `#${tag}`; 
        this._element = document.querySelector(this.selector);
        if (!this._element) {
            this._element = document.createElement(type);
            this._element.setAttribute(tagType, tag);
        }
    }

    get element() {
        return this._element;
    }

    set element(val) {
        throw new Error('Cannot re-assign element after object initialization.');
    }

    addChild() {

    }

    addElement(elements) {
        if (elements instanceof Array) {
            elements.forEach((element) => {
                this._element.appendChild(element);
            })
            return;
        } 

        this._element.appendChild(elements);
    }
}

class CardCreator {
    // tries to follow bem
    constructor(name) {
        this._element = document.createElement('div');
        this._element.classList.add(name);
        this._element.classList.add('card');
    }

    get element() {
        return this._element;
    }

    set element(val) {
        throw new Error('Cannot re-assign element after object initialization.');
    }
    
    addComponent(type, componentName) {
        const newElement = document.createElement(type);
        newElement.classList.add(`${componentName}`);
        this._element.appendChild(newElement);
    }

    addElement(elements) {
        if (elements instanceof Array) {
            elements.forEach((element) => {
                this._element.appendChild(element);
            })
            return;
        } 

        this._element.appendChild(elements);
    }
}


export { LayoutCreator, CardCreator };