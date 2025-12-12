import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <div>
      <title>Hello World</title>
      <h1 class="text-primary aefwafwae">Hello World</h1>
    </div>,
  );
});
