#!/bin/bash

echo -e "Importing data"
mongoimport --host 192.168.99.100 --db docker --collection notifications --file fixtures/notifications.json --jsonArray