function Button({ className = "btn btn-primary", children = "Click me" }) {
  return <button className={className}>{children}</button>;
}

export default function Components() {
  return <Button className="btn btn-success">Click me</Button>;
}
