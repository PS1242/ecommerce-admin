interface HeadingProps {
  title: string;
  description: string;
}

export default function Heading(props: HeadingProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{props?.title}</h2>
      <p className="text-sm text-muted-foreground">{props?.description}</p>
    </div>
  );
}
