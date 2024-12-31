export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/en/introduction",
      permanent: true,
    },
  };
}

export default function Page() {
  return <div>Redirecting...</div>;
}
