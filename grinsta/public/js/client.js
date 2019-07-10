const btn = document.getElementById('fetch')

function fetcher(){
    window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id=df814fa96c3b46f6834ef9bacddee1ce&redirect_uri=http://localhost:4000/authod&response_type=token';

}

btn.addEventListener('click', fetcher);