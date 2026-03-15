import "./styles/style.css";

const HoverLinks = ({ text }: { text: string }) => {
  return (
    <>
      <div className="hover-link" data-cursor="disable">
        <div className="hover-link-in1">{text}</div>
        <div className="hover-link-in2">{text}</div>
      </div>
    </>
  );
};

export default HoverLinks;