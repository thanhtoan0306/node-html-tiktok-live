
const ControlEvents = {
    CONNECTED: 'connected',
    DISCONNECTED: 'disconnected',
    ERROR: 'error',
    RAWDATA: 'rawData',
    DECODEDDATA: 'decodedData',
    STREAMEND: 'streamEnd',
    WSCONNECTED: 'websocketConnected'
};
const MessageEvents = {
    CHAT: 'chat',
    MEMBER: 'member',
    GIFT: 'gift',
    ROOMUSER: 'roomUser',
    SOCIAL: 'social',
    LIKE: 'like',
    QUESTIONNEW: 'questionNew',
    LINKMICBATTLE: 'linkMicBattle',
    LINKMICARMIES: 'linkMicArmies',
    LIVEINTRO: 'liveIntro',
    EMOTE: 'emote',
    ENVELOPE: 'envelope',
    SUBSCRIBE: 'subscribe'
};
const CustomEvents = {
    FOLLOW: 'follow',
    SHARE: 'share'
};

// {
//     "actionId": 1,
//     "userId": "6757597583105917954",
//     "secUid": "MS4wLjABAAAAtb-WMfK1eFWnEmmPoGO7R-bmG9f6zAFtXTG3vrpQBEbp9fOAiY4O4usVPO7ITs3j",
//     "uniqueId": "nhk1954",
//     "nickname": "HEV.JONAH",
//     "profilePictureUrl": "https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0e5cbc8ed4a98a65178f85e66081b554.webp?lk3s=a5d48078&nonce=88022&refresh_token=c9dd9bd2ec282eca04d1b58fdf180e31&x-expires=1719763200&x-signature=fPlufQLNn24HLKQYT0eCpUFmtJ0%3D&shp=a5d48078&shcp=fdd36af4",
//     "followRole": 1,
//     "userBadges": [
//         {
//             "type": "privilege",
//             "privilegeId": "7138381176787572516",
//             "level": 9,
//             "badgeSceneType": 8
//         }
//     ],
//     "userSceneTypes": [
//         8
//     ],
//     "userDetails": {
//         "createTime": "0",
//         "bioDescription": "",
//         "profilePictureUrls": [
//             "https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0e5cbc8ed4a98a65178f85e66081b554~tplv-tiktok-shrink:72:72.webp?lk3s=a5d48078&nonce=2631&refresh_token=928eb03c983c0fcfd8e984621b5388fc&x-expires=1719763200&x-signature=vRF%2BPlNELEkH4XRyX%2Fw%2BPwjmMaM%3D&shp=a5d48078&shcp=fdd36af4",
//             "https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0e5cbc8ed4a98a65178f85e66081b554.webp?lk3s=a5d48078&nonce=88022&refresh_token=c9dd9bd2ec282eca04d1b58fdf180e31&x-expires=1719763200&x-signature=fPlufQLNn24HLKQYT0eCpUFmtJ0%3D&shp=a5d48078&shcp=fdd36af4",
//             "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0e5cbc8ed4a98a65178f85e66081b554.webp?lk3s=a5d48078&nonce=73644&refresh_token=7fba24123adb3101c44cb1ae43556f1d&x-expires=1719763200&x-signature=zYJJQ7y7oq7Yr0hK1rNvmOmqaaI%3D&shp=a5d48078&shcp=fdd36af4",
//             "https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0e5cbc8ed4a98a65178f85e66081b554.jpeg?lk3s=a5d48078&nonce=93726&refresh_token=d7c29a39e9d338af7011bbb429d7a2a8&x-expires=1719763200&x-signature=weU2r5snVRC7mdJVWZdBVlG4GJM%3D&shp=a5d48078&shcp=fdd36af4"
//         ]
//     },
//     "followInfo": {
//         "followingCount": 9928,
//         "followerCount": 2066,
//         "followStatus": 1,
//         "pushStatus": 0
//     },
//     "isModerator": false,
//     "isNewGifter": false,
//     "isSubscriber": false,
//     "topGifterRank": null,
//     "gifterLevel": 9,
//     "teamMemberLevel": 0,
//     "msgId": "7385588391800507152",
//     "createTime": "1719591300053",
//     "displayType": "live_room_enter_toast",
//     "label": "{0:user} joined"
// }