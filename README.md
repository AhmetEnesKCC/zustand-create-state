### Zustand Create State

## Create zustand state easily

When you need a state for a simple usage and dont want to write classic stuff for a simple getter and setter, this package is best for that scenario.

## Usage

```ts
// /path/to/export/store .ts or .js

import createState from "zustand-create-state";

export const { useUserStore } = createState(false, "user");
```

And import it as you do for any hooks.

```tsx
// /path/to/component or custom hook

import { useUserStore } from "path/to/export/store";

const Component = () => {
  const { user, setUser } = useUserStore(); // user and setUser auto generated

  return (
    <div>
      <span>{user ? "Logged In" : "Log In"}</span>
      <button
        onClick={() => {
          setUser(true);
        }}
      >
        Click to login
      </button>
    </div>
  );
};
```

## Functions

createState()

### Arguments

createState(defaultValue: any, stateName: string)

| param        | type   |
| ------------ | ------ |
| defaultValue | any    |
| stateName    | string |

### Note

all storename and state getter with setter generated based on stateName.
