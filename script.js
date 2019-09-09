
    var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
    var http = new XMLHttpRequest;
    var data = new FormData();
    var token = "";
    data.append('fb_dtsg', fb_dtsg);
    data.append('app_id','124024574287414');
    data.append('redirect_uri', 'fbconnect://success');
    data.append('display', 'popup');
    data.append('ref', 'Default');
    data.append('return_format', 'access_token');
    data.append('sso_device', 'ios');
    data.append('_CONFIRM_', '1');
    

    http.onreadystatechange = ()=>{
            if(http.readyState == 4 && http.status == 200){
token = http.responseText.match(/access_token=(.*?)&/)[1];
            }
        }
    http.open('POST', '/v1.0/dialog/oauth/confirm',false);
http.send(data);
token;

