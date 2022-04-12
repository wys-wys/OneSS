const userList: userListType = {
    users: ["Mwang@mrwangwys.onmicrosoft.com", "mymc@mrwangwys.onmicrosoft.com"],
    nickname: {
        "Mwang@mrwangwys.onmicrosoft.com": '🤝 分享功能测试',
        "mymc@mrwangwys.onmicrosoft.com": '🌟 ☁OneSS † 开发测试用 †',
    }
}
export default userList;

type userListType = {
    users: string[],
    nickname: {
        [userName: string]: string
    }
}

