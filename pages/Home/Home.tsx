import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className="">
      <div>
        <Button variant="fill" href="/Test">
          Login
        </Button>
        <Button variant="empty">Register</Button>
      </div>
    </div>
  );
}
