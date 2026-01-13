CC=${WASI_SDK_PATH}/bin/clang --sysroot=${WASI_SDK_PATH}/share/wasi-sysroot

main: main.c
	${CC} -target wasm32 -nostdlib -Wl,--no-entry -Wl,--export-all main.c -o main.wasm