FROM nginx:alpine

# Remove a página padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do site para o diretório raiz do nginx
COPY . /usr/share/nginx/html

# Expor porta 80 (padrão Nginx)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
