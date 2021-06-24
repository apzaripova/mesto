export default class UserInfo {
    constructor(name, job) {
        this._name = name;
        this._job = job;
    }

    getUserInfo() {
        
    }

    setUserInfo(title, subtitle) {
        this._name.textContent = title.value;
        this._job.textContent = subtitle.value;
    }
}