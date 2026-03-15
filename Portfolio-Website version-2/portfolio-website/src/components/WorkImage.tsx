const WorkImage = ({ index }: { index: number }) => {
  // We use placeholder gradients since actual project images aren't provided
  const gradients = [
    "linear-gradient(135deg, rgba(94, 234, 212, 0.2), rgba(10, 14, 23, 0.8))",
    "linear-gradient(135deg, rgba(147, 197, 253, 0.2), rgba(10, 14, 23, 0.8))",
    "linear-gradient(135deg, rgba(196, 181, 253, 0.2), rgba(10, 14, 23, 0.8))"
  ];
  
  const currentGradient = gradients[index % gradients.length];
  
  return (
    <div 
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        background: currentGradient,
        border: "1px solid rgba(255, 255, 255, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div style={{
          position: "absolute",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)",
          animation: "rotateGlow 10s linear infinite"
      }}></div>
      <div style={{
        fontSize: "64px",
        opacity: 0.1,
        fontWeight: "bold"
      }}>
        0{index + 1}
      </div>
    </div>
  );
};

export default WorkImage;