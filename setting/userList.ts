const userList: userListType = {
    users: ["share@dzaaaaaa.com", "oness@dzaaaaaa.com"],
    nickname: {
        "share@dzaaaaaa.com": '🤝 分享功能测试',
        "oness@dzaaaaaa.com": '🌟 ☁OneSS † 开发测试用 †',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

