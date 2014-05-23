
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components

sauce: build
	@./node_modules/component-test/bin/component-test sauce

phantom: build
	@./node_modules/component-test/bin/component-test phantom

browser: build
	@./node_modules/component-test/bin/component-test browser

test: phantom

.PHONY: clean

