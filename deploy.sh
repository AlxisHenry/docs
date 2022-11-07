source .env;

rsync -azP -e 'ssh' ./docs/.vuepress/dist/ $user@$addr:$path;
