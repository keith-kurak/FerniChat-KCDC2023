# Hello, Ignite! Goodbye, Ignite!
## Goal
Try out the ignite template and make some modifications to pare things down a bit.
## Tasks
1. Clone the project with the default ignite template
2. Delete some files we don't need because we're using Expo prebuild and some other default configs
3. Delete the screens we don't need
4. Rename our tabs that we'll use for the rest of the time
5. Make sure it all still works
## Useful info

## How to do it
### 1. Run it as-is
Run `npx expo start` and pick a device/ emulator to run the app in Expo Go. Or press `w` to run the web version.

### 2. Delete some stuff we don't need.
We generally don't want to delete everything in the Ignite template we don't need, but we're going to remove a few things for good reasons:
- **ios/ android folders**: we're going to use Expo's prebuild to generate these on the fly, so we don't need them
- **metro.config.js**: the default is fine, and if you ever wanted to put this in a monorepo, I'd recommend the config in Expo's docs

### 3. Fix those dependencies
Not sure why they're off. But you can run `npx expo install --fix` to fix them.

More TODO's:
- those side tabs on web, nasty