<img src="https://i.ibb.co/PzPm9hX/New-Project.png" alt"social">

# Socmed Injection Gateway #

Social media engagement injection gateway api.

### Instagram Followers (Inject with second account)

`POST /instagram/inject/followers`

    curl -i -H 'Accept: application/json' -d 'username=second_account_username&password=second_account_password&target=target_account_username' https://socmed-injection-gateway.vercel.app/instagram/inject/followers

### Instagram Likes (Inject with second account)

`POST /instagram/inject/likes`

    curl -i -H 'Accept: application/json' -d 'username=second_account_username&password=second_account_password&link=link_instagram_post' https://socmed-injection-gateway.vercel.app/instagram/inject/likes

### Tiktok Followers (Soon)