_emt.factory('SessionService', function(){
    var _userInfo = null;
    var _token = null;

    function setToken(token) {
        _token = token;
    }

    function getToken() {
        return _token;
    }

    function setUserInfo(userInfo) {
        _userInfo = userInfo;
    }

    function getUserInfo() {
        return _userInfo;
    }

    function clear() {
        _token = null;
        _userInfo = null;
    }

    return {
        'setUserInfo': setUserInfo,
        'getUserInfo': getUserInfo,
        'setToken': setToken,
        'getToken': getToken,
        'clear': clear
    };
});
