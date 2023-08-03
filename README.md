### General
Our project is running on Nx, so is this one. Not sure if it affects the bug or not, but under the hood it's a normal angular compilation. The chat module is located under `libs/`

### Env
The file located at `apps/cometchat-bug-reproduction/src/jank-env.ts` is the env file used, currently it's set up to our public keys for easy access, the keys will be invalidated in a couple of days.

### Bug
1 - Run the app using:
```
nx run cometchat-bug-reproduction:serve
```
2 - Navigate to localhost:4200/chat
