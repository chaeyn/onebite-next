import ClientComponent from "@/components/client-component";
import ServerComponent from "@/components/server-component";

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
