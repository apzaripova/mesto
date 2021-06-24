export default class UserInfo {
    constructor({ name, job}) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);
    }

    getUserInfo() {
        
    }

    setUserInfo(title, subtitle) {
        this._name.textContent = title.value;
        this._job.textContent = subtitle.value;
    }
}