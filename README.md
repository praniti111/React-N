# React-N

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement(When we chnage any thing in the code it automatically refreshs it in the browser)
- File Watching Algorithm - parcel achieves HMR because of this File watching algortithm written in c++
  It keeps an eye on each and every file and once a change is noticed it will build it again

- Cashing - parcel uses it for faster builds(it caches it in the parcel-cache, when we install it ) reduces the latency
- Image Optimization - most expensive thing is to load a image in the browser
- Minification - if I create a Production build
- Bundling
- Compress the file (removes the white spaces)
- Consistent Hashing - makes the experinece very fast
- Code splitting
- Differential Bundling - so that your app runs on the older version of the browsers aswell(parcel will have different bundles for different typr of apps, and the older browsers)
- Diagnostics
- Error Handling
- Https - if u want to host on https later for using the ssl and https
- Tree Shaking - When we have numerous functions in the app and we use only few of them, parcel tree shakes it for us by removing the unused functions and code
- lazy loading
- Different dev and prod bundles - optimization and time is less in dev
