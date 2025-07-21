# tailwind breakpoints;
https://v1.tailwindcss.com/docs/utility-first

# Custom CSS

## What is @layer in Tailwind CSS?
- Tailwind has three main layers:
  base – for things like resets and unstyled base HTML elements (e.g., h1, a, p, etc.)
  components – for custom components (e.g., buttons, cards)
  utilities – for single-purpose utility classes (e.g., bg-blue-500, text-center)

- Tailwind provides the @layer directive so you can add custom CSS to a specific layer like this:
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white py-2 px-4 rounded;
  }
}
[Explaining]
In Tailwind CSS, you can extend the framework using custom utility classes, custom component classes, and base classes by defining them inside the respective @layer directives.
## Custom utility classes  
 A custom utility class is a single-purpose class meant to encapsulate a specific CSS rule, just like Tailwind's built-in utilities. For example, you can define .text-shadow inside @layer utilities to add a text shadow:

@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
}

## Csutom component classes 
A custom component class, on the other hand, is a multi-purpose, reusable class that combines several [[Tailwind] [utilities]] into one class using @apply, and is declared inside @layer components. For instance, a .btn class can be created to style buttons consistently:
@layer components {
  .btn {
    @apply px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700;
  }
}

## Csutom base classes
Lastly, base classes are low-level styles that reset or style base HTML elements (like h1, p, or a) and are declared inside @layer base. For example, to set a default font and color for all paragraphs, 
@layer base {
  p {
    @apply text-gray-700 font-sans;
  }
}

# purging
https://chatgpt.com/c/687e136c-179c-8000-88b2-951dfb93471e

# Passing props inside curly braces and without curly braces
- Using curly braces {}:
  This is used when you're passing JavaScript expressions.
  <MyComponent title={"Hello"} count={5} isLoggedIn={true} />
  title={"Hello"} → "Hello" is a string expression
  count={5} → 5 is a number 
  isLoggedIn={true} → true is a boolean

- Without curly braces (just quotes):
  When you use plain quotes ("..."), React treats the value as a string literal, not a JS expression
  <MyComponent title="Hello" count="5" isLoggedIn="true" />
  All props here are treated as strings.
  "5" is a string, not a number.
  "true" is a string, not a boolean.

📌 Summary
Prop Passed As	Actual Type Received in Component
title="Hello"	string
count="5"	string
isLoggedIn="true"	string
count={5}	number
isLoggedIn={true}	boolean
data={user}	whatever user holds (object, array, etc.)

## Rule of Thumb:
Use {} when passing non-string or dynamic values (e.g., numbers, booleans, objects, variables, expressions).
Use quotes only for static string values.

# css flex behaviour
- [flec-col] This is expected flex behavior: items in a flex-col stack vertically and stretch horizontally unless constrained.
- [item-center] if everything is getting compressed when you use center, it likely means you're applying items-center (from Tailwind) on a flex container with flex-col, which centers children horizontally and causes them to shrink if widths aren’t explicitly set.
[Example]
<form className="flex flex-col items-center w-[400px]">
  <FormField />
  <Button>Submit</Button>
</form>
flex-col stacks children vertically.
items-center aligns them horizontally in the center.
If FormField or Button don’t have w-full or w-[value], they’ll shrink to fit their content

Class	What It Does
items-center	          Horizontally centers children in flex
w-full	                Makes child element take full container width
w-fit or self-center	  Keeps element tight or centers it alone