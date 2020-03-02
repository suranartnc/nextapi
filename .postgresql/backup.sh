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

docker exec -i nextapi_postgres tar -zcvf tmp/"$backupFileName" var/lib/postgresql/data
docker cp nextapi_postgres:/tmp/"$backupFileName" .

echo -e "\nbackup db to $backupFileName complete"