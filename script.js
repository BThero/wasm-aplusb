const text = document.querySelector('p');
const form = document.querySelector('form');
const button = document.querySelector('button');
const aInput = document.querySelector('#a');
const bInput = document.querySelector('#b');

let wasmAdd = undefined;
WebAssembly.instantiateStreaming(fetch('main.wasm'), {})
	.then((obj) => {
		const exports = obj.instance.exports;
		wasmAdd = exports.add;
		text.textContent = 'WASM is ready';
		button.disabled = false;
	})
	.catch((e) => {
		text.textContent = 'WASM load failed';
		console.error('WASM load failed', e);
	});

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const a = aInput.valueAsNumber;
	const b = bInput.valueAsNumber;
	const result = wasmAdd(a, b);
	text.textContent = `WASM says that ${a}+${b} is equal to ${result}`;
});
