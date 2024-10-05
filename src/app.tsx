import { cx } from "class-variance-authority";
import { Button } from "./components";

const intents = [undefined, "primary", "secondary", "tertiary"] as const;
const sizes = [undefined, "large", "medium", "small"] as const;

const radius = "3xl";

const Icon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 14 16" className={className}>
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
          "[&_:where(th,td)]:p-2"
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
                          "w-3": size === "small",
                          "w-4": size === "medium" || size === undefined,
                          "w-5": size === "large",
                        })}
                      />
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
            <Icon className="w-5" />
          </Button>
          <Button className="gap-2" intent="secondary">
            <Icon className="w-5" />
            Test button with icon
          </Button>
          <Button className="gap-2" intent="secondary" border={false}>
            <Icon className="w-5" />
            Test button with icon - no border
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            className="flex gap-2 self-center aspect-square"
            intent="tertiary"
            radius="full"
          >
            <Icon className="w-5" />
            <span className="sr-only">Test button with icon</span>
          </Button>
          <Button
            className="self-center aspect-square"
            intent="tertiary"
            radius="full"
            elevation="xl"
          >
            <Icon className="w-5" />
            <span className="sr-only">Test button with icon</span>
          </Button>
          <Button
            className="self-center aspect-square"
            intent="secondary"
            radius="full"
            elevation="lg"
            border={false}
          >
            <Icon className="w-5" />
            <span className="sr-only">Test button with icon</span>
          </Button>
        </div>

        <button className="focusable self-center underline">
          Super custom unicorn button 🦄
        </button>
      </div>
    </>
  );
}

export default App;
