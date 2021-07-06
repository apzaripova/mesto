export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this.name = document.querySelector(nameSelector);
        this.job = document.querySelector(jobSelector);
        this.avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return [this.name.textContent, this.job.textContent]
    }

    setUserAvatar(item) {
        this.avatar.src = item.avatar;
    }

    setUserInfo(item) {
        this.name.textContent = item.name;
        this.job.textContent = item.about;
        this.setUserAvatar(item);
        this.avatar.alt = `${item.name} avatar`;
    }
}