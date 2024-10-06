import { cx } from "class-variance-authority";
import { Button } from "./components";

const intents = ["primary", "secondary", "tertiary"] as const;
const sizes = ["xl", "large", "medium", "small", "xs"] as const;

const radius = "3xl";

const Icon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 14 16"
    className={cx(className)}
    style={{
      height: "1.2cap",
      width: "auto",
      flex: "none",
    }}
  >
    <path
      d="M3.882 4.128a3.128 3.128 0 1 1 6.255 0 3.128 3.128 0 0 1-6.255 0M7.01 0a4.128 4.128 0 1 0 0 8.255A4.128 4.128 0 0 0 7.01 0M1.402 10.223l-.5.5V16h1v-4.777h10.213V16h1v-5.277l-.5-.5z"
      fill="currentColor"
    />
  </svg>
);

function App() {
  return (
    <>
      <table
        className={cx(
          "relative",
          "h-max w-max",
          "self-center justify-self-center",
          "[&_:where(th,td)]:p-2 "
        )}
      >
        <thead>
          <tr>
            <th></th>
            {intents.map((intent) => (
              <th scope="col">{intent || "default"}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizes.map((size) => (
            <tr>
              <th scope="row">{size || "default"}</th>
              {intents.map((intent) => (
                <td scope="col">
                  <div className="flex flex-col gap-2">
                    <Button
                      radius={radius}
                      {...(intent && { intent })}
                      {...(size && { size })}
                    >
                      {intent || "default"} button
                    </Button>
                    <Button
                      className="gap-2"
                      radius={radius}
                      {...(intent && { intent })}
                      {...(size && { size })}
                    >
                      {intent || "default"} button{" "}
                      <Icon
                        className={cx({
                          "w-3": size === "small" || size === "xs",
                          "w-4": size === "medium" || size === undefined,
                          "w-5": size === "large",
                          "w-6": size === "xl",
                        })}
                      />
                    </Button>
                    <Button
                      radius={radius}
                      {...(intent && { intent })}
                      {...(size && { size })}
                      disabled
                    >
                      disabled button
                    </Button>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Button className="block">Test button with emoji 🚀</Button>
          <Button className="gap-2">
            Test button with icon
            <Icon />
          </Button>
          <Button className="gap-2" intent="secondary">
            <Icon />
            Test button with icon
          </Button>
          <Button className="gap-2" intent="secondary" border={false}>
            <Icon />
            Test button with icon - no border
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            className="flex gap-2 self-center aspect-square"
            intent="tertiary"
            radius="full"
          >
            <Icon />
            <span className="sr-only">Test button with icon</span>
          </Button>
          <Button
            className="self-center aspect-square"
            intent="tertiary"
            radius="full"
            elevation="xl"
          >
            <Icon />
            <span className="sr-only">Test button with icon</span>
          </Button>
          <Button
            className="self-center aspect-square"
            intent="secondary"
            radius="full"
            elevation="lg"
            border={false}
          >
            <Icon />
            <span className="sr-only">Test button with icon</span>
          </Button>
        </div>

        <Button size="xs" radius="md" className="self-center">
          Xs less rounded
        </Button>
        <Button size="xs" radius="md" className="self-center" intent="tertiary">
          Xs less rounded
        </Button>
        <Button
          size="xs"
          radius="md"
          className="self-center"
          intent="secondary"
        >
          Xs less rounded
        </Button>

        <button className="focusable self-center underline hover-hover:hover:text-primary active:text-primary">
          Super custom unicorn button 🦄
        </button>

        <button className="focusable self-center hover-hover:hover:bg-chalk px-4 py-3 rounded-lg transition-colors duration-300 relative group">
          <svg className="w-6" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M0.734253 2.75L-0.0157471 3.5V20.5L0.734253 21.25H23.258L24.008 20.5V3.5L23.258 2.75H0.734253ZM1.48425 8.75V4.25H22.508V8.75H1.48425ZM1.48425 10.25V19.75H22.508V10.25H1.48425Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="text-green-700 text-xs absolute bottom-0 bg-white p-1 rounded-full">
            $0
          </span>
          <span className="sr-only">Test button with icon</span>
        </button>
      </div>
    </>
  );
}

export default App;
