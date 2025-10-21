import ClientComponent from "@/components/client-component";

export default async function Book({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      Book {id}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
