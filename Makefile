# Makefile for digital-cv React/Vite project

NPM ?= npm

.PHONY: all install build preview dev clean

all: build

install:
	$(NPM) install

build: install
	$(NPM) run build

dev: install
	$(NPM) run dev

preview: build
	$(NPM) run preview

clean:
	rm -rf node_modules dist
