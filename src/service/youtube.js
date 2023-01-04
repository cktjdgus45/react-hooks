class Youtube {
    #apiKey;
    #baseUrl;
    #requestOptions
    constructor() {
        this.#apiKey = process.env.REACT_APP_APIKEY;
        this.#baseUrl = 'https://www.googleapis.com/youtube/v3';
        this.#requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
    }
    mostPopularVideos(maxResultsCount) {
        return fetch(`${this.#baseUrl}/videos?part=snippet&chart=mostPopular&maxResults=${maxResultsCount}&key=${this.#apiKey}`, this.#requestOptions)
    }
    search(query, maxResultsCount) {
        return fetch(`${this.#baseUrl}/search?part=snippet&maxResults=${maxResultsCount}&q=${query}&key=${this.#apiKey}`, this.#requestOptions)
    }
}

export default Youtube;