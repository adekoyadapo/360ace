SHELL := /bin/bash

init:
	git submodule init
	git submodule update

build:
	hugo

dev:
	hugo server