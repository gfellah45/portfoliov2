---
id: 1
title: "Context in React"
Date: "30, Oct, 2021"
cover_image: "/post/context.png"
excerpt: " In this article, you will be introduced to React Context, one of the latest features in React Applications.
Prerequisites: ReactJS-Basics, Typescript(with Interfaces), ES6 notation"

---

In this article, you will be introduced to React Context, one of the latest features in React Applications.
Prerequisites: ReactJS-Basics, Typescript(with Interfaces), ES6 notation

### What is React context

React Context is a method to pass props from parent to child component(s), by storing the props in a store(similar in Redux) and using these props from the store by child component(s) without actually passing them manually at each level of the component tree.

### Why React Context

Using Redux to interact with states from parent to child components is not only quite difficult to understand but also gives you a more complex code. Through the usage of Context, the understanding of concept and code is far easier than that of Redux.

## When to use React context

Anytime you want! There is no iron-clad rule like when to use Context in your application. Whenever you want a store to keep your states or variables in and use them elsewhere in your program, use Context. Generally, when we have two or more levels(height) in our component tree, it is viable to use a store instead of passing props and then lifting the state as this will create confusion and unnecessary lengthy code.
Example:
If we have three components in our app, A->B->C where A is the parent of B and B is the parent of C. To change a state from C and pass it to A, keep the state of A in a store, then extract the state from store and use it in C. This completely eliminates the necessity of the state to pass through B. So the flow is like A->C.

## Usage

Usage
Now let’s understand with a simple example.
first, let’s define an interface(or class) consisting of name and marks of a student:

````interface MarksContext{
name: string;
marks: number;
}```

```const contextmarks = React.createContext(null);
// Context defined with properties of MarksContext interface initialized with null```

```const MarksContextProvider = contextmarks.Provider;
// This is the store in which states will be kept in and passed as props.
const MarksContextConsumer = contextmarks.Consumer;
// This is the store from which states stored in the Provider
// Context will be extracted by child component and used according to the user.
````

Now, let our component tree structure be like A->B->C(from above). We will store some value of name and marks in a dictionary, pass the info from A to display it in C without meddling with B. A is the root App.

Complete code:
Note:keep the two files in the same directory.

1. MarksContext.tsx(typescript)

````import * as React from "react";

export interface MarksContext{
  name: string;
  marks: number;
}
const contextmarks = React.createContext<MarksContext | null>(null);
export const MarksContextProvider = contextmarks.Provider;
export const MarksContextConsumer = contextmarks.Consumer;```

2.App.tsx(typescript)
```import * as React from "react";
import { render } from "react-dom";
import { MarksContext, MarksContextProvider } from "./MarksContext";
import { MarksContextConsumer } from "./MarksContext";

const sample: MarksContext = {
name: "X",
marks: 20

};

export const A = () => (
<MarksContextProvider value={sample}>
<B />
</MarksContextProvider>
);

const B = () => (
<div>
<h2>Student Info</h2>
<C />
</div>
);


const C = () => (
<MarksContextConsumer>
{appContext =>
appContext && (<div>
Name: {appContext.name} <br />
Marks: {appContext.marks} <br />
</div>
)
}
</MarksContextConsumer>
);

render(<A />, document.getElementById("root"));
````

**Working:**
The information is first declared in an interface MarksContext, then the intreface information is defined in contextmarks. Provider(MarksContextProvider) and consumer(MarksContextConsumer) are defined in this context
MarksContextProvider is put in A, the root of our app with value initialized as given in sample.Later the MarksContextConsumer is put in C, from which value of interface is extracted through appContext which serves as an instance of the MarksContext interface. Lastly, the value is displayed in C.

Note: Only the components mentioned within the Provider(MarksContextProvider) and their children can modify the states using Consumer(MarksContextConsumer)/n
