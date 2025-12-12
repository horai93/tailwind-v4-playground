import { useState } from "hono/jsx";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" class="" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
