const footerStyle = {
    backgroundColor: "black",
    opacity:"50%",
    fontSize: "20px",
    color: "white",
    hoverOpacity:"100%",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "8rem",
    width: "100%"
    /*
    borderTop: "1px solid #E7E7E7",
*/
};

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
};

export default function Footer({ children }) {
    return (
        <div>
            <div style={phantomStyle} />
            <div style={footerStyle}>{children}</div>
        </div>
    );
}