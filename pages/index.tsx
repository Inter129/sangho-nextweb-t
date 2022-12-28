import { Button } from '@nextui-org/react';
import CustomNavbar from "../components/Navbar";

export default function Home() {
  function hello() {
    alert("hello");
    console.log("Hello!~")
  }
  return (
    <>
      <CustomNavbar />
      <div style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        paddingTop: "20px",
      }}>
        <Button onClick={() => hello()}></Button>
      </div>
    </>
  )
}
