# WASM A+B

A simple A+B program written in [C](https://www.w3schools.com/c/c_intro.php) and compiled to [WebAssembly](https://webassembly.org). The resulting `.wasm` binary can be immediately tested out with the supplied basic HTML.

## Setup

This repository and the setup guide assume that you use Linux or MacOS. If you use Windows, try out [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install).

We will be using the [`wasi-sdk`](https://github.com/WebAssembly/wasi-sdk) package to compile the C code (`.c`) into WebAssembly (`.wasm`). First of all, download the latest release package from their [Releases](https://github.com/WebAssembly/wasi-sdk/releases/tag/wasi-sdk-29) tab. Make sure that you download the right version. Right now, I am using MacBook Air M1 2020 which corresponds to the option `wasi-sdk-29.0-arm64-macos.tar.gz`.

After you download the package, simply unzip it. Now we have the package folder which we need to place somewhere secure and easily accessible. You could put it in numerous places, but I personally opt for the `/opt` directory (pun not intended).

Just move the folder to the `/opt` directory and verify that it is now accessible using the absolute path (`/opt/wasi-sdk-29.0-arm64-macos` for me).

Now we can create a symbolic link `/opt/wasi-sdk` to refer to it easier:

```
ln -s /opt/wasi-sdk-29.0-arm64-macos /opt/wasi-sdk
```

You can make sure the symbolic link is correct using `ls`:

```
ls -l /opt/wasi-sdk # Prints "/opt/wasi-sdk -> /opt/wasi-sdk-29.0-arm64-macos" or similar
```

As the final step, we need to create a `WASI_SDK_PATH` environment variable. Open your `.bashrc` or `.zshrc` and add the following line at the end:

```
WASI_SDK_PATH=/opt/wasi-sdk
```

Save the changes and make sure everything works:

```
source ~/.zshrc # Reload the config file. Alternatively, you can just restart your terminal
echo $WASI_SDK_PATH # Should print "/opt/wasi-sdk"
```

Now you are ready to compile C code to WebAssembly! Clone this repository and run the `make` command:

```
git clone https://github.com/BThero/wasm-aplusb.git # Clone the repository
cd wasm-aplusb # Go into the cloned directory
make # Compile the sample C file
```

> If you use MacOS, you might see a prompt that prohibits you from running the freshly-installed binaries. Navigate to the `System Settings > Security & Privacy` tab and scroll all the way down. There should be a warning message and a corresponding "Allow" button. After a few back and forths, the `make` command should finally work with no issues.

If everything went smoothly, you should now see a `main.wasm` file appear in your directory. Test it out by opening the `index.html` with a local development server (I prefer the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode).

You have now reached the end! Best of luck on your WebAssembly exploration journey!

## Useful References

- [Zero to WASI with Clang 17](https://danielmangum.com/posts/wasm-wasi-clang-17/)
- [Embedding WebAssembly in Software](https://withbighair.com/webassembly/2024/12/14/Embedding-WebAssembly.html)
- [Lessons learned from my first dive into WebAssembly](https://nullprogram.com/blog/2025/04/04/)
- [MDN WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly)
- [wasi-sdk](https://github.com/WebAssembly/wasi-sdk)
- [wabt](https://github.com/WebAssembly/wabt)
