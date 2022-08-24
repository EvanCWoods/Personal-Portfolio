interface WorkPortalProps {
    title: string;
    content: string;
}


export default function WorkPortal(props: WorkPortalProps) {
  return (
    <div className="work-portal">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
