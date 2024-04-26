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

# Props

- When we have to dynamically pass in some data to a component, you pass in props
- Passing Props is like passing arguments to a Component
- eg. (<RestaurantContainer resName="Meghana Foods" cuisine="Biryani" />)
- const RestaurantContainer = (props) => {<h2>{props.resName}</h2> <h2>{props.cuisine}</h2>};
- so here resName and cuisine are the props(arguments) which are passed to the Component RestaurantContainer
- What React does here ?
- React takes all these properties and wraps it inside an object and will pass over to the Component as Props

# Condig Driven Ui

- It is when you fetch the data and dynamically change the behaviour of the webpage using the config(data)
- Eg. you use the same website for rendering different cities data by changing the data(config)

# Using Key in Map - Best Practise

- When a Component has multiple React Components under it on the same level, It becomes difficult for the react to identify each and every component and Re-Renders all the components when a new component is added.
- Hence Using Key in the Map would help react keep all the components unique, and will know which new component is added and only render that component onto the webpage
- Donot use the index as the key as it is replaceable - Bad Practise
