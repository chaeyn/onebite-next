import ClientComponent from "./client-component";
import ServerComponent from "./server-component";

export default function Home() {
  return (
    <div>
      Index Page
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
