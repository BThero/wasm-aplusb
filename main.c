#define WASM_EXPORT(name) __attribute__((export_name(name)))

WASM_EXPORT("add") int add(int a, int b) {
  return a + b;
}