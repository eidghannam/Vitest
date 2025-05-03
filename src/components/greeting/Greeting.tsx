import classes from "./Greeting..module.css";
interface IProps {
  name?: string;
}

function Greeting({ name }: IProps) {
  return <h1>Hello, {name || "World"}!</h1>;
}

export default Greeting;
