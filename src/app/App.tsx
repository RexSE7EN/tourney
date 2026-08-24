import NavBar from "@/components/NavBar"

interface User {
  name: string
  age?: number
}

function Greeting({ name, age }: User) {
  return (
    <h1>
      Hello, {name}!&nbsp;
      {age !== undefined && <span> ({age} years old)</span>}
    </h1>
  )
}

export default function App() {
  return (
    <>
      <NavBar />
      <div className="h-svh flex justify-center items-center">
        <h1 className="text-white font-extrabold">tourney &gt;&nbsp;</h1>
        <Greeting name="Stranger" />
        <p>This page is under construction.</p>
      </div>
    </>
  )
}
