#!/bin/bash
parent_path=$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )

cd "$parent_path"

backupFileName=db.tar.gz

if [ -f "$backupFileName" ];
then
  rm "$backupFileName"
  echo -e "remove old backup file: $backupFileName\n"
fi

echo -e "starting backup db......\n"

docker exec -i nextapi_mongo tar -zcvf tmp/"$backupFileName" data/db
docker cp nextapi_mongo:/tmp/"$backupFileName" .

echo -e "\nbackup db to $backupFileName complete"