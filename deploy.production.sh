#!/bin/sh

cd /data/exinone/support.exinone.com

changed=0
git remote update && git status -uno | grep -q 'Your branch is behind' && changed=1
if [ $changed = 1 ]; then
    git checkout .
    git pull
    yarn build && sudo rm -rf /var/www/support.exinone.com/* && sudo mv -v build/* /var/www/support.exinone.com/ && sudo chown www-data:www-data -R /var/www/support.exinone.com/
    echo "Updated successfully";
else
    echo "Up-to-date"
fi