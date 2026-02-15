Criei um exemplo de uso do puppeteer onde ele entra no site "https://developer.chrome.com/" faz ma pesquisa e mostra o titulo da primeira pesquisa
Criei o Dockerfile para ser visualizado no render ou localmente conforme desejar no render precisa colocar estas duas variaveis.
ENV XDG_CONFIG_HOME=/tmp/.chromium
ENV XDG_CACHE_HOME=/tmp/.chromium
Criei também um docker compose se quiser subir ele no portainer ou no seu docker.
