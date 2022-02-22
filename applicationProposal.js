class Results {
    constructor (props) {
        return this.getResults(props.resultsURL);
    }

    getResults = () => {
        console.log(`returning results from ${this.props.resultsURL}`);
        return [1,2,3]
    }
}

class Application {
    firstTime = false;
    tabs = null;
    results = null;
    Document = null;

    constructor(props) {
        this.registration = props.registration
        this.templates = this.#getPageTemplate();
        Object.assign(this, this.#generateConfig());
    }

    initResults = () => {
        this.results = new Results(this.resultsURL);
    }

    #pageTemplateConfig = {
        'media': 'base-with-flyout',
        'ou-services': 'grid',
    }

    #getPageTemplate = () => {
        if (!this.registration in this.#pageTemplateConfig) {
            return 'base-template'
        }
        return this.#pageTemplateConfig[this.registration]
    }

    #generateConfig = () => {
        return {
            "resultsURL": `baseURL/${this.registration}`,
            "pageTemplate": this.templates[this.registration],
        }
    }
}



// IN MEDIA
let media = new Application({
    registration: 'media',
});

media.initResults();

console.log(media.results);

