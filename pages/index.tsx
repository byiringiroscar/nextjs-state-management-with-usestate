
interface Pokemon {
  id: number,
  name: string,
  image: string,
}

export default function Home({ pokemon }: { pokemon: Pokemon[] }) {
  return (
    <main>
      {JSON.stringify(pokemon)}
    </main>
  )
}


export const getServerSideProps = async() => {
  const resp = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
  const data = await resp.json();
  return {
    props: {
      pokemon: data
    }
  }
}