export default class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headres = options.headers;
    }

    _handleOriginalResponse(res) {
        if (res.ok) {
            return Promise.reject(`Error: ${res.status}`);
        }

        return res.json();
    }

    setUserAvatar(data) {
        
    }
}