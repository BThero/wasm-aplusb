CC=${WASI_SDK_PATH}/bin/clang --sysroot=${WASI_SDK_PATH}/share/wasi-sysroot

main: main.c
	${CC} --target=wasm32 -Wl,--no-entry -nostdlib -O2 main.c -o main.wasm