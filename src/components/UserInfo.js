export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this.name = document.querySelector(nameSelector);
        this.job = document.querySelector(jobSelector);
    }

    getUserInfo() {
        return [this.name.textContent, this.job.textContent]
    }

    setUserInfo(firstname, job) {
        this.name.textContent = firstname;
        this.job.textContent = job;
    }
}