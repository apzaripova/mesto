export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this.name = document.querySelector(nameSelector);
        this.job = document.querySelector(jobSelector);
        this.avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return [this.name.textContent, this.job.textContent]
    }

    setUserAvatar(data) {
        this.avatar.src = data.avatar;
    }

    setUserInfo(firstname, job) {
        this.name.textContent = firstname;
        this.job.textContent = job;
    }
}