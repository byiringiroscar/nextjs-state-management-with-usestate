
interface Pokemon {
  id: number,
  name: string,
  image: string,
}

export default function Home() {
  return (
    <main>
      <h1>hey</h1>
    </main>
  )
}


export const getServerSideProps = async() => {
  const resp = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
}