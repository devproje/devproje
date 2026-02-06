#!/bin/bash

CURRENT=$(pwd)
echo $CURRENT
if [[ $CURRENT =~ "scripts" ]]
then
	echo "[ERR] You cannot running on script directory!"
	exit 1
fi

if [ ! -d ./dist ]
then
	echo "[ERR] you need to build first!"
	exit 1
fi

rm -f ./wh64dev.tar.gz
tar -zcvf wh64dev.tar.gz ./dist/*
