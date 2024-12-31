export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/vi/introduction",
      permanent: true,
    },
  };
}

export default function Page() {
  return <div>Redirecting...</div>;
}
