class Results {
    constructor (props) {
        this.url = props.url;
        return this.getResults(props.url);
    }

    getResults = () => {
        console.log(`returning results from ${this.url}`);
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
        this.results = new Results({
            url: this.resultsURL
        });
    }

    renderResults = () => {
        this.#safeRender(this.results, this.templates['primary-results']);
    }

    #safeRender = (data, target) => {
        console.log(`putting ${data} into ${target}`)
    }

    #pageTemplateConfig = {
        'media': {
            'primary-results': 'some-template-id',
            'primary-tabs': 'some-template-id'
        },
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
media.renderResults();

console.log(media.results);

