//import interfaces
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        //add the text from the heading
        h4.innerText = heading;
        // add the text inside the li tag
        li.append(h4);
        //add the text inside the p tag
        const p = document.createElement('p');
        //get the text from the method format
        p.innerText = item.format();
        li.append(p);
        //check if we want the text at the start or at the end
        if (pos === 'start') {
            //put it at the start of the element
            this.container.prepend(li);
        }
        else {
            //put it at the end of the element
            this.container.append(li);
        }
    }
}
