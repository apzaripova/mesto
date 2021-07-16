export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this.name = document.querySelector(nameSelector);
        this.job = document.querySelector(jobSelector);
        this.avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        return {
            name: this.name.textContent, 
            about: this.job.textContent,
            id: this._id
        }
    }

    setUserAvatar(item) {
        if (item.avatar) {
            this.avatar.src = item.avatar;
        }
    }

    setUserInfo(item) {
        if (item.name, item.about, item._id) {
            this.name.textContent = item.name;
            this.job.textContent = item.about;
            this.setUserAvatar(item);
            this.avatar.alt = `${item.name} avatar`;
            this._id = item._id;
        }
    }
}